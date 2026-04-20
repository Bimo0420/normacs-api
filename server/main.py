import os
from pathlib import Path

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import cache
import bridge_client
from schemas import DocumentsResponse

app = FastAPI(title="NormaCS Dashboard API")

_cors_origins = [o.strip() for o in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=_cors_origins,
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health():
    return await bridge_client.fetch_health()


@app.get("/api/document", response_model=DocumentsResponse)
async def document(
    number: str = Query(..., description="Номер документа"),
    limit: int = Query(10, ge=1, le=100),
):
    cache_key = f"{number}:{limit}"
    cached = cache.get(cache_key)
    if cached is not None:
        return cached

    result = await bridge_client.fetch_documents(number, limit)
    cache.set(cache_key, result)
    return result


_spa_dist = Path(__file__).parent.parent / "dashboard" / "dist"
if _spa_dist.exists():
    app.mount("/", StaticFiles(directory=str(_spa_dist), html=True), name="spa")
