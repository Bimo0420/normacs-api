# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Добавляем к документу изменение с изменяющим документом ' указав его адрес, номер, издателя и дaту ввода изменения в действие Set ame = pro.AddDocumentAmendmentWithChangingDocument(doc, _ "normacs://test.ru/2", _ "1", _ "Публ.издание", _ "01.01.2022" _ ) ' Комментарий к изменению можно указать отдельно ame.Comment = "Комментарий к изменению" ' Сохраняем изменения в базе pro.SaveDocument doc
