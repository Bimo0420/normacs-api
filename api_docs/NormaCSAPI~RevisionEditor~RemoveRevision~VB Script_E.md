# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set pro = app.domains("test.ru").GetNormaCSPro("1") Set doc = pro.AddDocument() Set rev = pro.RevisionEditor.CreatePastRevision(doc) For Each r in doc.Revisions WScript.Echo r.URL & " " & r.Name Next WScript.Echo "Removing " & rev.URL pro.RevisionEditor.RemoveRevision(rev) For Each r in doc.Revisions WScript.Echo r.URL & " " & r.Name Next
