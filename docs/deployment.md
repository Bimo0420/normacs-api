# Схема развёртывания NormaCS Dashboard

```
[Браузер]
    │  HTTPS
    ▼
[Ubuntu: server/ (FastAPI) + dashboard/dist/ (SPA)]
    │  HTTPS через Cloudflare Tunnel
    ▼
[Windows: bridge/ (FastAPI + pywin32)]
    │  COM (IDispatch)
    ▼
[NormaCS.Application]
```

## Быстрый старт (разработка)

### Windows — bridge

```powershell
cd bridge
python -m venv .venv && .venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env   # задать BRIDGE_TOKEN
uvicorn main:app --host 127.0.0.1 --port 8765 --workers 1
```

### Linux — server

```bash
cd server
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env     # задать переменные
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Dashboard (dev)

```bash
cd dashboard
npm install
npm run dev              # http://localhost:5173
```

## Продакшн

1. Собрать SPA: `cd dashboard && npm run build` → появится `dashboard/dist/`.
2. Запустить server/ — он автоматически раздаёт `dashboard/dist/` через StaticFiles.
3. На Windows настроить bridge как NSSM-сервис (см. `bridge/README-windows.md`).
4. Настроить Cloudflare Tunnel (см. `bridge/README-windows.md`).

## Переменные окружения

| Переменная | Где | Описание |
|---|---|---|
| `BRIDGE_TOKEN` | bridge/.env | Секрет для X-Bridge-Token |
| `NORMACS_BRIDGE_URL` | server/.env | URL туннеля, напр. `https://normacs-bridge.example.com` |
| `NORMACS_BRIDGE_TOKEN` | server/.env | Тот же секрет, что BRIDGE_TOKEN |
| `CORS_ORIGINS` | server/.env | Разрешённые источники через запятую |

## End-to-end проверка

```bash
# 1. Windows bridge (на ноутбуке)
curl http://127.0.0.1:8765/health -H "X-Bridge-Token: $TOKEN"
curl "http://127.0.0.1:8765/document?number=ГОСТ+12.1.004-91" -H "X-Bridge-Token: $TOKEN"

# 2. Через туннель (с Linux)
curl -H "X-Bridge-Token: $TOKEN" https://normacs-bridge.example.com/health

# 3. Linux backend
curl "http://localhost:8000/api/document?number=ГОСТ+12.1.004-91"
```
