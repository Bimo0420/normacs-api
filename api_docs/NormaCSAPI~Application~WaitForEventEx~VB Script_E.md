# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") nReason = 0 If Not app.WaitForEventEx(, 60, nReason) Then MsgBox "Ожидание было прервано: " & nReason Else MsgBox "В приложение NormaCS был выбран документ." End If
