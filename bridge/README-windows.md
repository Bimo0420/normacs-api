# NormaCS Bridge — установка на Windows

## Требования

- Windows 10/11 64-bit
- NormaCS установлен и активирован
- Python 3.11+ (64-bit, добавлен в PATH)

## Установка

```powershell
cd C:\normacs-bridge
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
# Отредактируйте .env — задайте BRIDGE_TOKEN
```

## Запуск в режиме разработки

```powershell
.venv\Scripts\activate
set BRIDGE_TOKEN=your-token
uvicorn main:app --host 127.0.0.1 --port 8765 --workers 1
```

Проверка:
```powershell
curl http://127.0.0.1:8765/health -H "X-Bridge-Token: your-token"
```

## Установка как Windows-сервис (NSSM)

1. Скачать [NSSM](https://nssm.cc/download), распаковать `nssm.exe` в `C:\normacs-bridge\`.
2. Открыть cmd от администратора:
```cmd
C:\normacs-bridge\nssm.exe install NormaCSBridge
```
3. В GUI NSSM указать:
   - **Path:** `C:\normacs-bridge\.venv\Scripts\python.exe`
   - **Arguments:** `-m uvicorn main:app --host 127.0.0.1 --port 8765 --workers 1`
   - **Startup directory:** `C:\normacs-bridge`
   - Вкладка **Environment:** `BRIDGE_TOKEN=your-token`
4. `nssm.exe start NormaCSBridge`

## Настройка Cloudflare Tunnel

```powershell
winget install Cloudflare.cloudflared
cloudflared tunnel login
cloudflared tunnel create normacs-bridge
cloudflared tunnel route dns normacs-bridge normacs-bridge.example.com
```

Создать `%USERPROFILE%\.cloudflared\config.yml`:
```yaml
tunnel: <tunnel-id>
credentials-file: C:\Users\<user>\.cloudflared\<tunnel-id>.json
ingress:
  - hostname: normacs-bridge.example.com
    service: http://127.0.0.1:8765
  - service: http_status:404
```

```powershell
cloudflared service install
```

## Важно

- Запускать uvicorn с `--workers 1` — NormaCS не поддерживает параллельные COM-вызовы.
- NormaCS должен быть запущен перед стартом сервиса (добавьте в автозагрузку Windows).
