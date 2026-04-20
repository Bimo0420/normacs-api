# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") app.StartDocumentSearchByTitle "шкурка кошка" MsgBox "Нажмите [OK] по окончании поиска" MsgBox app.CurrentDocument.Title
