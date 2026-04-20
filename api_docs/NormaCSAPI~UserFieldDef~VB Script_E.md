# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set userDomain = app.domains("my.test.ru") Set ufd = userDomain.UserFieldDefs("Поле1") WScript.Echo "GroupName=" & ufd.GroupName & " | Name=" & ufd.Name & " | Type=" & ufd.Type & " | Length=" & ufd.Length & " | Comment=" & ufd.Comment
