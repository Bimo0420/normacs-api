# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set userDomain = app.domains("my.test.ru") Set doc = app.GetDocumentByURl("normacs://my.test.ru/1") ' Получение имени и значения поля Set u = doc.UserFields(1) WScript.Echo "Name=" & u.Name & " | Value=" & u.Value ' Получение информации об определении поля Set udfs = app.domains(doc.domain).UserFieldDefs Set udf = udfs(u.Name) WScript.Echo "GroupName=" & udf.GroupName ' Изменение поля u.Value = "Проверка" ' Сохранение сделанных изменений Set pro = userDomain.GetNormaCSPro("1") pro.SaveDocument doc
