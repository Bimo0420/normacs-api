# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://normacs.ru/215VB") ' Выводим адреса документов, изменяемых данным документом For Each changedDoc in doc.ChangedDocuments WScript.Echo "ChangedDocument.Url: " & changedDoc.Url Next
