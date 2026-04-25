from transformers import BlipProcessor, BlipForQuestionAnswering
from PIL import Image
import io
import os

CACHE_DIR = "models"

MODEL_NAME = "Salesforce/blip-vqa-base"

processor = BlipProcessor.from_pretrained(
    MODEL_NAME,
    cache_dir=CACHE_DIR
)

model = BlipForQuestionAnswering.from_pretrained(
    MODEL_NAME,
    cache_dir=CACHE_DIR
)


def ask_question(image_bytes, question):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    inputs = processor(
        img,
        question,
        return_tensors="pt"
    )

    output = model.generate(
        **inputs,
        max_new_tokens=50,
        num_beams=4,
        early_stopping=True
    )

    answer = processor.decode(
        output[0],
        skip_special_tokens=True
    )

    return answer