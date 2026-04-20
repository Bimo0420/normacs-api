# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Создаем объект замены Set rep = pro.CreateReplacement ' Указываем атрибуты замены rep.ReplacementType = 10 ' Взамен rep.Document = app.GetDocumentByURL("normacs://test.ru/2") rep.Comment = "Комментарий к замене" ' Добавляем замену к документу. ' Для добавления используется метод AddDocumentReplaces, поскольку замена ' описывает заменяемый документ. Для добавления заменяющего документа следует ' использовать метод AddDocumentReplacedBy. pro.AddDocumentReplaces doc, rep ' Сохраняем документ pro.SaveDocument doc
