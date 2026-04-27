from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

VALID_TONES = [
    "happy",
    "sad",
    "funny",
    "formal",
    "casual",
    "romantic",
    "motivational"
]

def rewrite_caption(text, tone):

    tone_prompts = {

        "happy": """
You are an expert social media caption writer.

Rewrite the given caption in a HAPPY tone.

Tone Instructions:
- Make it joyful, bright, energetic, cheerful, and full of positive vibes.
- Make readers feel excitement, gratitude, sunshine, fun, and celebration.
- Use playful, vibrant, feel-good language.
- Sound like someone enjoying life and sharing good moments.
- Use words that create smiles and happiness.
- Add light emojis only if they feel natural.

Style Instructions:
- Keep it short and catchy.
- Make it Instagram-worthy.
- Make it modern and relatable.
- Avoid being overly childish or cringe.
- Output only one caption.
""",

        "sad": """
You are an expert social media caption writer.

Rewrite the given caption in a SAD tone.

Tone Instructions:
- Make it emotional, deep, soft, reflective, and heartfelt.
- Express loneliness, pain, missing someone, silence, healing, or memories.
- Use poetic and meaningful wording.
- Make readers feel emotion instantly.
- Sound real, not dramatic or fake.

Style Instructions:
- Keep it short but powerful.
- Make it relatable and touching.
- Suitable for Instagram stories/posts.
- Avoid too many emojis.
- Output only one caption.
""",

        "funny": """
You are an expert social media caption writer.

Rewrite the given caption in a FUNNY tone.

Tone Instructions:
- Make it witty, clever, playful, sarcastic, or meme-like.
- Use humor people instantly understand.
- Make it feel relatable and internet-friendly.
- Can include light roasting or self-humor.
- Should feel naturally funny, not forced.

Style Instructions:
- Keep it short and punchy.
- Make it highly shareable.
- Add emojis only if they improve humor.
- Avoid offensive jokes.
- Output only one caption.
""",

        "formal": """
You are an expert social media caption writer.

Rewrite the given caption in a FORMAL tone.

Tone Instructions:
- Make it elegant, polished, refined, and professional.
- Use strong grammar and confident wording.
- Sound sophisticated and respectable.
- Suitable for LinkedIn, business, brands, or classy posts.
- Maintain clarity and authority.

Style Instructions:
- Keep it concise and impactful.
- Avoid slang, emojis, or casual wording.
- Make it premium sounding.
- Output only one caption.
""",

        "casual": """
You are an expert social media caption writer.

Rewrite the given caption in a CASUAL tone.

Tone Instructions:
- Make it relaxed, chill, friendly, natural, and conversational.
- Sound like how real people post online.
- Use simple modern wording.
- Make it feel effortless and authentic.
- Friendly vibe, not too polished.

Style Instructions:
- Keep it short and cool.
- Make it relatable and social-media friendly.
- Can use common internet expressions naturally.
- Output only one caption.
""",

        "romantic": """
You are an expert social media caption writer.

Rewrite the given caption in a ROMANTIC tone.

Tone Instructions:
- Make it warm, loving, affectionate, dreamy, poetic, and charming.
- Use emotions around love, heart, beauty, connection, forever, missing, closeness.
- Make it soft and emotionally attractive.
- Sound like something couples would post.

Style Instructions:
- Keep it short, elegant, and beautiful.
- Make it Instagram-worthy.
- Avoid cheesy or cringe lines.
- Output only one caption.
""",

        "motivational": """
You are an expert social media caption writer.

Rewrite the given caption in a MOTIVATIONAL tone.

Tone Instructions:
- Make it powerful, inspiring, energetic, and confidence-building.
- Use themes like discipline, hustle, growth, dreams, mindset, success, consistency.
- Make readers feel ready to take action.
- Strong and fearless vibe.

Style Instructions:
- Keep it short and impactful.
- Make it highly shareable.
- Sound bold and memorable.
- Output only one caption.
"""
    }

    prompt = f"""
{tone_prompts[tone]}

Original Caption:
{text}

Return only the rewritten caption.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=1,
        max_tokens=100
    )

    return response.choices[0].message.content.strip()