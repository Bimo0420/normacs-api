# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set rz = app.Recognize2 rz.Text = "ГОСТ 02-85 Серия 01.036 СП 12345 ГОСТ 2874-82 Приказ 182 РД 34.17.413 СП 12 — 95" While rz.Execute WScript.Echo "Designation = [" & rz.Designation & "]" WScript.Echo "Index = [" & rz.Index & "]" WScript.Echo "Number = [" & rz.Number & "]" WScript.Echo "Распознано " & rz.Documents.Count & " документов." WScript.Echo "MatchedDocumentIndex = [" & rz.MatchedDocumentIndex & "]" For Each item In rz.Documents WScript.Echo item.Title Next WScript.Echo "Следующая позиция: " & rz.NextPos Wend
