# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set rz = app.Recognize2 For Each text In Array("ЗАКОН 4871", "ГОСТ 12345", "ГОСТ 12345-2001", "ГОСТ 12345-2003") rz.Text = text WScript.Echo "Text: " & rz.Text WScript.Echo "======================================" For Each selectivity In Array(0, 1, 2) ' 0=approx 1=any_year 2=reliable rz.Reset rz.Settings.Selectivity = selectivity WScript.Echo "Selectivity: " & rz.Settings.Selectivity If rz.Execute Then For Each doc In rz.Documents WScript.Echo doc.Designation & " | " & doc.URL Next Else WScript.Echo "Нет распознанных обозначений!" End If WScript.Echo Next Next
