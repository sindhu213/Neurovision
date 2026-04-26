from transformers import BlipProcessor, BlipForQuestionAnswering
from PIL import Image
import torch
import io

CACHE_DIR = "models"
device = "cuda" if torch.cuda.is_available() else "cpu"

processor = BlipProcessor.from_pretrained(
    "Salesforce/blip-vqa-base",
    cache_dir=CACHE_DIR
)

model = BlipForQuestionAnswering.from_pretrained(
    "Salesforce/blip-vqa-base",
    cache_dir=CACHE_DIR
).to(device)

model.eval()


def ask_question(image_bytes, question):
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB")

    inputs = processor(img, question, return_tensors="pt").to(device)

    output = model.generate(**inputs)

    return processor.decode(output[0], skip_special_tokens=True)