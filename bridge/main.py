from fastapi import FastAPI, Depends, Query
from fastapi.responses import JSONResponse

from auth import verify_token
from normacs_client import search_by_number, health_check

app = FastAPI(title="NormaCS Bridge", docs_url=None, redoc_url=None)


@app.get("/health", dependencies=[Depends(verify_token)])
async def health():
    return health_check()


@app.get("/document", dependencies=[Depends(verify_token)])
async def document(
    number: str = Query(..., description="Номер или шаблон номера документа"),
    limit: int = Query(10, ge=1, le=100),
):
    result = await search_by_number(number, limit)
    return JSONResponse(content=result)
