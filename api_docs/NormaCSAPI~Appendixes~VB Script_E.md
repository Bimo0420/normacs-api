# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Выводим атрибуты приложений этого документа For Each apx in doc.Appendixes WScript.Echo "URL: " & apx.URL WScript.Echo "Name: " & apx.Name WScript.Echo "Comment: " & apx.Comment WScript.Echo "FileType: " & apx.FileType WScript.Echo "FileName: " & apx.FileName WScript.Echo "HasPreview: " & apx.HasPreview WScript.Echo "Id10: " & apx.Id10 WScript.Echo "Document URL: " & apx.Document.Url Next
