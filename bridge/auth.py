import os
from fastapi import Request, HTTPException

BRIDGE_TOKEN = os.getenv("BRIDGE_TOKEN", "")


async def verify_token(request: Request):
    if not BRIDGE_TOKEN:
        return
    token = request.headers.get("X-Bridge-Token", "")
    if token != BRIDGE_TOKEN:
        raise HTTPException(status_code=401, detail="Invalid or missing X-Bridge-Token")
