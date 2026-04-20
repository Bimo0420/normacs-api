# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект документа. Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Для следующих операций требуется подписка на дополнительную функцию "AllowUserAttach". ' Добавляем приложение, указывая только путь на основной файл. ' Приложение будет иметь имя, совпадающее с именем основного файла. ' Указанный файл будет загружен при выполнении вызова. pro.AddDocumentAppendix doc, "C:\Temp\test.docx" ' Добавляем приложение, указывая путь на основной файл, имя и описание приложения, ' и файл предпросмотра. pro.AddDocumentAppendix doc, "C:\Temp\test.docx", "Приложение1", "Первое приложение", "C:\Temp\test.pdf"
