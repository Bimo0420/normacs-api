# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set doc = app.GetDocumentByURL("normacs://normacs.ru/3AT") For Each item In doc.StatusHistory WScript.Echo "item.IsMain=" & item.IsMain WScript.Echo "item.Status.Id=" & item.Status.Id WScript.Echo "item.Status.Name=" & item.Status.Name WScript.Echo "item.Status.GroupId=" & item.Status.GroupId WScript.Echo "item.Status.GroupName=" & item.Status.GroupName WScript.Echo "item.Status.Comment=" & item.Status.Comment WScript.Echo "item.DateStart=" & item.DateStart WScript.Echo "item.DateFinish=" & item.DateFinish WScript.Echo "item.Comment=" & item.Comment WScript.Echo "===" Next
