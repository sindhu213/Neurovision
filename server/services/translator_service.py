from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

CACHE_DIR = "models"
device = "cuda" if torch.cuda.is_available() else "cpu"

MODEL = "facebook/nllb-200-distilled-600M"

tokenizer = AutoTokenizer.from_pretrained(MODEL, cache_dir=CACHE_DIR)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL, cache_dir=CACHE_DIR).to(device)

LANGS = {
    "hindi": "hin_Deva",
    "bengali": "ben_Beng",
    "punjabi": "pan_Guru",
    "english": "eng_Latn",
    "gujarati": "guj_Gujr",
}

def translate(text, lang):
    print(f"Available languages: {list(LANGS.keys())}")  # Debug
    print(f"Requested language: {lang}")  # Debug
    tokenizer.src_lang = "eng_Latn"

    inputs = tokenizer(text, return_tensors="pt").to(device)

    output = model.generate(
        **inputs,
        forced_bos_token_id=tokenizer.convert_tokens_to_ids(LANGS[lang])
    )
    return tokenizer.decode(output[0], skip_special_tokens=True)