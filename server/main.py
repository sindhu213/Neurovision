from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from transformers import BlipProcessor, BlipForQuestionAnswering
from PIL import Image, UnidentifiedImageError
import io, os

# ✅ Import your custom logic
from caption import generate_base_caption
from tone_rewriter import rewrite_with_tone, VALID_TONES

app = FastAPI(title="NeuroVision AI - Unified Backend")

# ✅ CORS (merged safely)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to frontend URL later if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Model setup (from repo)
CACHE_DIR = os.path.join(os.path.dirname(__file__), "models")
os.makedirs(CACHE_DIR, exist_ok=True)

processor = BlipProcessor.from_pretrained(
    "Salesforce/blip-vqa-base",
    cache_dir=CACHE_DIR
)
model = BlipForQuestionAnswering.from_pretrained(
    "Salesforce/blip-vqa-base",
    cache_dir=CACHE_DIR
)

# ─────────────────────────────────────────────
# 🟢 Health check
# ─────────────────────────────────────────────
@app.get("/")
def root():
    return {"message": "NeuroVision AI backend is running"}

# ─────────────────────────────────────────────
# 🟢 VQA (existing repo feature)
# ─────────────────────────────────────────────
@app.post("/vqa")
async def visual_qa(image: UploadFile = File(...), question: str = Form(...)):
    img = Image.open(io.BytesIO(await image.read())).convert("RGB")
    inputs = processor(img, question, return_tensors="pt")
    output = model.generate(**inputs, max_new_tokens=50, num_beams=4, early_stopping=True)
    answer = processor.decode(output[0], skip_special_tokens=True)
    return {"answer": answer}

# ─────────────────────────────────────────────
# 🟢 Generate base caption
# ─────────────────────────────────────────────
@app.post("/generate-caption")
async def generate_caption(image: UploadFile = File(...)):
    try:
        contents = await image.read()
        img = Image.open(io.BytesIO(contents)).convert("RGB")
    except UnidentifiedImageError:
        return JSONResponse(status_code=400, content={"error": "Invalid image"})

    caption = generate_base_caption(img)
    return {"caption": caption}

# ─────────────────────────────────────────────
# 🟢 Caption + Tone
# ─────────────────────────────────────────────
@app.post("/tone-caption")
async def tone_caption(image: UploadFile = File(...), tone: str = Form(...)):
    try:
        contents = await image.read()
        img = Image.open(io.BytesIO(contents)).convert("RGB")
    except UnidentifiedImageError:
        return JSONResponse(status_code=400, content={"error": "Invalid image"})

    if tone.lower() not in VALID_TONES:
        return JSONResponse(
            status_code=400,
            content={"error": f"Invalid tone. Choose from: {', '.join(VALID_TONES)}"}
        )

    base_caption = generate_base_caption(img)
    result = rewrite_with_tone(base_caption, tone)

    if "error" in result:
        return JSONResponse(status_code=400, content=result)

    return {
        "base_caption": base_caption,
        "tone": tone,
        "toned_caption": result["toned_caption"]
    }

# ─────────────────────────────────────────────
# 🟢 Rewrite existing caption
# ─────────────────────────────────────────────
@app.post("/rewrite-tone")
async def rewrite_tone_api(caption: str = Form(...), tone: str = Form(...)):
    if not caption.strip():
        return JSONResponse(status_code=400, content={"error": "No caption provided"})

    result = rewrite_with_tone(caption, tone)

    if "error" in result:
        return JSONResponse(status_code=400, content=result)

    return {
        "original_caption": caption,
        "tone": tone,
        "toned_caption": result["toned_caption"]
    }