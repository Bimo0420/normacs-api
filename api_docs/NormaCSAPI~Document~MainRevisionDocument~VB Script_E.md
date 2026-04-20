# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set doc = app.GetDocumentByURL("normacs://normacs.ru/10LP2") WScript.Echo doc.Url WScript.Echo doc.IsRevision WScript.Echo doc.MainRevisionDocument.Url Set doc = app.GetDocumentByURL("normacs://normacs.ru/1UOPK") WScript.Echo doc.Url WScript.Echo doc.IsRevision WScript.Echo doc.MainRevisionDocument.Url
