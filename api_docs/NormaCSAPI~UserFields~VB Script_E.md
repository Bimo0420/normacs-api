# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set userDomain = app.domains("my.test.ru") Set doc = app.GetDocumentByURl("normacs://my.test.ru/1") For Each item In doc.UserFields WScript.Echo "Name=" & item.Name & " | Value=" & item.Value Next
