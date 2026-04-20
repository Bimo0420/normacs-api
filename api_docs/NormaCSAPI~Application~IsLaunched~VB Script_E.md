# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") If Not app.IsLaunched() Then MsgBox "Нажмите [OK] чтобы запустить NormaCS." app.Launch() End If
