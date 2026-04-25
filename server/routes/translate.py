from fastapi import APIRouter, Form
from services.translator import translate_all

router = APIRouter()

@router.post("/translate")
async def translate(text: str = Form(...)):
    return translate_all(text)