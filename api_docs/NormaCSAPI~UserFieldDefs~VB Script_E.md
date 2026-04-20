# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set userDomain = app.domains("my.test.ru") For Each item In userDomain.UserFieldDefs WScript.Echo "GroupName=" & item.GroupName & " | Name=" & item.Name & " | Type=" & item.Type & " | Length=" & item.Length & " | Comment=" & item.Comment Next
