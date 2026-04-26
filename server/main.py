from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.caption import router as caption_router
from routes.vqa import router as vqa_router
from routes.translate import router as translate_router

app = FastAPI(title="NeuroVision AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "NeuroVision AI Running"}

app.include_router(caption_router)
app.include_router(vqa_router)
app.include_router(translate_router)


# python3 -m uvicorn main:app --port 8000
# python -m uvicorn main:app --port 8000