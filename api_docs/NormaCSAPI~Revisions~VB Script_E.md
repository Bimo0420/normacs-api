# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set doc = app.GetDocumentByURL("normacs://normacs.ru/10LP2") For Each revision In doc.Revisions WScript.Echo revision.URL & vbCrLf WScript.Echo revision.Name & vbCrLf WScript.Echo revision.IsMain & vbCrLf WScript.Echo revision.Status.Name & vbCrLf WScript.Echo revision.Type & vbCrLf WScript.Echo revision.Issued & vbCrLf WScript.Echo revision.DateStart & vbCrLf WScript.Echo revision.DateFinish & vbCrLf WScript.Echo revision.Comment & vbCrLf WScript.Echo revision.Publication & vbCrLf WScript.Echo revision.Id10 & vbCrLf WScript.Echo revision.Document.Url & vbCrLf WScript.Echo "---" & vbCrLf Next
