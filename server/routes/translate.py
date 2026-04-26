from fastapi import APIRouter, Form
from services.translator_service import translate

router = APIRouter()

@router.post("/translate")
async def translate_api(
    text: str = Form(...),
    language: str = Form(...)
):
    result = translate(text, language)

    return {
        "language": language,
        "text": result
    }