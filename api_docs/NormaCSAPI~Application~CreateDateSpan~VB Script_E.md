# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set ds = app.CreateDateSpan("21.01.2010", "22.02.2010") ' Явно, через даты MsgBox ds.Start & " - " & ds.End Set ds = app.CreateDateSpan(2, 0) ' Последние два месяца до даты обновления домена MsgBox ds.Start & " - " & ds.End Set ds = app.CreateDateSpan(2) ' Тоже самое MsgBox ds.Start & " - " & ds.End Set ds = app.CreateDateSpan(100, 1) ' Последние 100 дней MsgBox ds.Start & " - " & ds.End
