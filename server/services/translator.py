from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

CACHE_DIR = "models"

MODEL_NAME = "facebook/nllb-200-distilled-600M"

device = "cuda" if torch.cuda.is_available() else "cpu"

tokenizer = AutoTokenizer.from_pretrained(
    MODEL_NAME,
    cache_dir=CACHE_DIR
)

model = AutoModelForSeq2SeqLM.from_pretrained(
    MODEL_NAME,
    cache_dir=CACHE_DIR
).to(device)

model.eval()

LANGUAGE_CODES = {
    "hindi": "hin_Deva",
    "bengali": "ben_Beng",
    "punjabi": "pan_Guru",
    "gujarati": "guj_Gujr"
}


def translate_to_indic(text, lang):
    tokenizer.src_lang = "eng_Latn"

    inputs = tokenizer(text, return_tensors="pt").to(device)

    output = model.generate(
        **inputs,
        forced_bos_token_id=tokenizer.convert_tokens_to_ids(
            LANGUAGE_CODES[lang]
        )
    )

    return tokenizer.decode(output[0], skip_special_tokens=True)


def translate_all(text):
    result = {"english": text}

    for lang in LANGUAGE_CODES:
        result[lang] = translate_to_indic(text, lang)

    return result