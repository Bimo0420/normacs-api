# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set pro = app.domains("test.ru").GetNormaCSPro("1") Set doc = pro.AddDocument() Set rev = pro.RevisionEditor.CreateFutureRevision(doc) WScript.Echo rev.URL
