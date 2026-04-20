# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") app.StartDocumentSearchByNumber "11078-78*" 'Натр едкий очищенный MsgBox "Нажмите [OK] по окончании поиска" MsgBox app.CurrentDocument.Title
