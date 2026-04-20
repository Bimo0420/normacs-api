# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set pro = app.domains("test.ru").GetNormaCSPro("1") Set doc = pro.AddDocument() Set rev = pro.RevisionEditor.CreateFutureRevision(doc) For Each r in doc.Revisions WScript.Echo r.URL & " " & r.Name Next WScript.Echo "Actualizing " & rev.URL pro.RevisionEditor.TurnFutureRevisionIntoMainRevision(rev) For Each r in doc.Revisions WScript.Echo r.URL & " " & r.Name Next
