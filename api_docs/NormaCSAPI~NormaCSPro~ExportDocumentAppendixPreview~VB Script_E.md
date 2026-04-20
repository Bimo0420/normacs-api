# VB Script

## Исходный текст

' Получаем ссылку на объект API Set app = CreateObject("NormaCS.Application") ' Получаем ссылку на объект документа. Set doc = app.GetDocumentByURL("normacs://test.ru/1") ' Ниже считаем, что у этого документа имеется одно или больше приложений. ' Получаем ссылку на объект первого приложения в списке приложений документа. Set apx = doc.Appendixes(1) ' Получаем ссылку на объект редактора NormaCS Pro. ' Изменения приложений выполняются ' при помощи вызовов метода ChangeDocumentAppendix этого объекта. Set pro = app.domains("test.ru").GetNormaCSPro("1") ' Выгружаем файл предпросмотра приложения в папку C:\Temp pro.ExportDocumentAppendixPreview doc, appendix, "C:\Temp"
