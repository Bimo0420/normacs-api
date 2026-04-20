# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set rev = app.GetRevisionByURL("normacs://normacs.ru/22UOG") WScript.Echo rev.Name & " документа " & rev.DocumentForMainRevision.URL
