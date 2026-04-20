# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") For Each strUrl In Array("normacs://normacs.ru/1", "normacs://normacs.ru/3a") Set doc = app.GetDocumentByUrl(strUrl) WScript.Echo "Основное обозначение: " & doc.Designation If doc.HasSynonims Then For Each synonim In doc.Synonims If Not synonim.IsMain Then WScript.Echo "Дополнительное обозначение: " & synonim.Designation End If Next End If Next
