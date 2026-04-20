# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Добавляем к документу изменение, указывая атрибуты, в том числе дату отмены Set ame = pro.AddDocumentAmendment2(doc, _ "1", _ "Утв.организация", _ "Постановление", _ "12345", _ "01.12.2018", _ "Публ.издание", _ "01.01.2019", _ "01.01.2020" _ ) ' Комментарий к изменению можно указать отдельно ame.Comment = "Комментарий к изменению" ' Сохраняем изменения в базе pro.SaveDocument doc
