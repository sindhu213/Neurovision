from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from transformers import BlipProcessor, BlipForQuestionAnswering
from PIL import Image
import io, os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

CACHE_DIR = os.path.join(os.path.dirname(__file__), "models")
os.makedirs(CACHE_DIR, exist_ok=True)

processor = BlipProcessor.from_pretrained("Salesforce/blip-vqa-base", cache_dir=CACHE_DIR)
model = BlipForQuestionAnswering.from_pretrained("Salesforce/blip-vqa-base", cache_dir=CACHE_DIR)

@app.post("/vqa")
async def visual_qa(image: UploadFile = File(...), question: str = Form(...)):
    img = Image.open(io.BytesIO(await image.read())).convert("RGB")
    inputs = processor(img, question, return_tensors="pt")
    output = model.generate(**inputs, max_new_tokens=50, num_beams=4, early_stopping=True)
    answer = processor.decode(output[0], skip_special_tokens=True)
    return {"answer": answer}

# python3 -m uvicorn main:app --port 8000