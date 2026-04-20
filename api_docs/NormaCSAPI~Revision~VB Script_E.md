# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set rev = app.GetRevisionByURL("normacs://normacs.ru/1UOPK") WScript.Echo "URL: " & rev.URL WScript.Echo "Name: " & rev.Name WScript.Echo "IsMain: " & rev.IsMain WScript.Echo "Type: " & rev.Type WScript.Echo "Status: " & rev.Status WScript.Echo "DocumentForThisRevision: " & rev.DocumentForThisRevision.URL WScript.Echo "DocumentForMainRevision: " & rev.DocumentForMainRevision.URL WScript.Echo "Annotation: " & rev.Annotation WScript.Echo "Publication: " & rev.Publication WScript.Echo "Comment: " & rev.Comment WScript.Echo "Domain: " & rev.Domain WScript.Echo "Id10: " & rev.Id10
