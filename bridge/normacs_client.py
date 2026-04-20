import asyncio
import pythoncom
import win32com.client

_lock = asyncio.Lock()
_app = None


def _get_app():
    global _app
    pythoncom.CoInitialize()
    if _app is None:
        _app = win32com.client.Dispatch("NormaCS.Application")
    if not _app.IsConnected:
        _app.Connect()
    return _app


async def search_by_number(number: str, limit: int = 10) -> dict:
    async with _lock:
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, _search_sync, number, limit)


def _search_sync(number: str, limit: int) -> dict:
    from serializers import serialize_document

    app = _get_app()
    app.Find.Reset()
    app.Find.Number = number
    app.Find.Limit = limit

    found = app.Find.Execute()
    if not found:
        return {"count": 0, "documents": []}

    docs = app.Find.Documents
    results = []
    for i in range(docs.Count):
        doc = docs.Item(i)
        results.append(serialize_document(doc))

    return {"count": docs.Count, "documents": results}


def health_check() -> dict:
    try:
        app = _get_app()
        return {"ok": True, "connected": bool(app.IsConnected)}
    except Exception as e:
        return {"ok": False, "connected": False, "error": str(e)}
