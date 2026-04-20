# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set domain = app.domains("normacs.ru") For Each item In domain.Statuses WScript.Echo "Id=" & item.Id WScript.Echo "Name=" & item.Name WScript.Echo "GroupId=" & item.GroupId WScript.Echo "GroupName=" & item.GroupName WScript.Echo "Comment=" & item.Comment WScript.Echo "===" Next
