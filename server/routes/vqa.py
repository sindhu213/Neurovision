from fastapi import APIRouter, UploadFile, File, Form
from services.vqa_service import ask_question

router = APIRouter()

@router.post("/vqa")
async def vqa(
    image: UploadFile = File(...),
    question: str = Form(...)
):
    image_bytes = await image.read()

    answer = ask_question(image_bytes, question)

    return {"answer": answer}