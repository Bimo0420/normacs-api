import os
import httpx
from fastapi import HTTPException

BRIDGE_URL = os.getenv("NORMACS_BRIDGE_URL", "").rstrip("/")
BRIDGE_TOKEN = os.getenv("NORMACS_BRIDGE_TOKEN", "")

_headers = {"X-Bridge-Token": BRIDGE_TOKEN}
_timeout = httpx.Timeout(30.0)


async def fetch_documents(number: str, limit: int = 10) -> dict:
    if not BRIDGE_URL:
        raise HTTPException(status_code=503, detail="NORMACS_BRIDGE_URL not configured")

    url = f"{BRIDGE_URL}/document"
    params = {"number": number, "limit": limit}

    try:
        async with httpx.AsyncClient(headers=_headers, timeout=_timeout) as client:
            response = await client.get(url, params=params)
    except httpx.TimeoutException:
        raise HTTPException(status_code=503, detail="NormaCS bridge timeout")
    except httpx.RequestError as exc:
        raise HTTPException(status_code=502, detail=f"NormaCS bridge unreachable: {exc}")

    if response.status_code != 200:
        raise HTTPException(
            status_code=502,
            detail=f"NormaCS bridge returned {response.status_code}",
        )

    return response.json()


async def fetch_health() -> dict:
    if not BRIDGE_URL:
        return {"ok": False, "error": "NORMACS_BRIDGE_URL not configured"}

    try:
        async with httpx.AsyncClient(headers=_headers, timeout=httpx.Timeout(5.0)) as client:
            response = await client.get(f"{BRIDGE_URL}/health")
            return response.json()
    except Exception as exc:
        return {"ok": False, "error": str(exc)}
