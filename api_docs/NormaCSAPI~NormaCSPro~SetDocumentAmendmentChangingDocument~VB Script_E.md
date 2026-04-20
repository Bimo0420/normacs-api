# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Задаем изменяющий документ для первого изменения. ' Созранять карточку документа (pro.SaveDocument) после этого не нужно. ' Вместо порядкового номера в списке изменений, ' можно было указать адрес изменения или сам объект изменения. pro.SetDocumentAmendmentChangingDocument doc, 1, "normacs://test.ru/2"
