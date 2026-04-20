# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/10") ' Добавляем к документу ссылку на утверждающий документ, также указывая, ' сделать ли добавляемое утверждение основным в списке утверждений документа. pro.AddDocumentApproval2 doc, "normacs://test.ru/9", True ' Сохраняем изменения в базе pro.SaveDocument doc
