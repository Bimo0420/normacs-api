from cachetools import TTLCache

_cache: TTLCache = TTLCache(maxsize=256, ttl=300)


def get(key: str):
    return _cache.get(key)


def set(key: str, value) -> None:
    _cache[key] = value
