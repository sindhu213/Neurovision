from groq import Groq
from dotenv import load_dotenv
import os

VALID_TONES = ["happy", "sad", "funny", "formal", "casual", "romantic", "motivational"]

TONE_PROMPTS = {
    "happy":        "Rewrite this image caption in a joyful, upbeat and positive way for Instagram. Keep it short and modern. Only return the caption.",
    
    "sad":          "Rewrite this image caption in an emotional and heartfelt sad tone. Keep it short and natural. Only return the caption.",
    
    "funny":        "Rewrite this image caption in a humorous and witty way with a joke or pun. Keep it short and modern. Only return the caption.",
    
    "formal":       "Rewrite this image caption in a professional and formal tone suitable for LinkedIn. Keep it clear and polished. Only return the caption.",
    
    "casual":       "Rewrite this image caption in a relaxed, friendly and conversational way. Keep it short and natural. Only return the caption.",
    
    "romantic":     "Rewrite this image caption in a romantic tone. Keep it short, modern, sweet, natural, and relevant to the image. Do not make it poetic or fantasy-like. Only return the caption.",

    "motivational": "Rewrite this image caption in an inspiring and motivational way with a powerful message. Keep it short and impactful. Only return the caption.",
}

client = Groq(api_key="GROQ_API_KEY")

def rewrite_with_tone(caption: str, tone: str) -> dict:
    tone = tone.lower().strip()

    if tone not in VALID_TONES:
        return {"error": f"Invalid tone. Choose from: {', '.join(VALID_TONES)}"}

    system_prompt = TONE_PROMPTS[tone]

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user",   "content": f"Caption: {caption}"}
        ],
        temperature=0.85,
        max_tokens=100,
    )

    toned_caption = response.choices[0].message.content.strip()
    return {"toned_caption": toned_caption}

