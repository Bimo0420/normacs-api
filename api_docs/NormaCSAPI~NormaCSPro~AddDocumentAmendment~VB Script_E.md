# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект редактора NormaCS Pro Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Получаем ссылку на объект документа Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Добавляем к документу изменение Set ame = pro.AddDocumentAmendment(doc) ' Указываем атрибуты изменения ame.Designation = "1" ' Обозначение (номер) изменения ame.ApprovalName = "Утв.организация" ' Утверждающая организация ame.ApprovalIndex = "Постановление" ' Индекс утверждающего документа ame.ApprovalNumber = "12345" ' Номер утверждающего документа ame.ApprovalDate = "01.12.2018" ' Дата утверждения ame.Publication = "Публ.издание" ' Издатель ame.Issued = "01.01.2019" ' Дата ввода изменения в действие ame.Revoked = "01.01.2020" ' Дата отмены изменения ame.Comment = "Комментарий к изменению" ' Сохраняем изменения в базе pro.SaveDocument doc
