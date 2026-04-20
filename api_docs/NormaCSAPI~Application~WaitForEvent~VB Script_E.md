# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") If Not app.WaitForEvent(0) Then MsgBox "Ожидание было прервано." Else MsgBox "В приложение NormaCS был выбран документ." End If
