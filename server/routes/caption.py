from fastapi import APIRouter, UploadFile, File, Form
from PIL import Image
import io

from services.caption_service import generate_caption
from services.tone_service import rewrite_caption

router = APIRouter()

@router.post("/tone-caption")
async def tone_caption(
    image: UploadFile = File(...),
    tone: str = Form(...)
):
    contents = await image.read()

    img = Image.open(io.BytesIO(contents)).convert("RGB")

    base = generate_caption(img)

    toned = rewrite_caption(base, tone)

    return {
        "base_caption": base,
        "toned_caption": toned
    }