from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image
import torch
import os

CACHE_DIR = "models"

device = "cuda" if torch.cuda.is_available() else "cpu"

print("Loading Caption Model...")

processor = BlipProcessor.from_pretrained(
    "Salesforce/blip-image-captioning-base",
    cache_dir=CACHE_DIR
)

model = BlipForConditionalGeneration.from_pretrained(
    "Salesforce/blip-image-captioning-base",
    cache_dir=CACHE_DIR
).to(device)

model.eval()

print("Caption Model Loaded")

def generate_caption(image: Image.Image):
    inputs = processor(image, return_tensors="pt").to(device)

    with torch.no_grad():
        output = model.generate(
            **inputs,
            max_new_tokens=50
        )

    return processor.decode(output[0], skip_special_tokens=True)