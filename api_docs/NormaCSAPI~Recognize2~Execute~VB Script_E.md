# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") app.Recognize2.Settings.Patterns.Normalize app.Recognize2.Text = "Постановление 15" If app.Recognize2.Execute Then For Each item In app.Recognize2.Documents WScript.Echo "URL=" & item.URL & " | Id=" & item.Id10 & " | Index=" & item.Index & " | Number=" & item.Number & " | Title=" & item.Title &" | Comment=" & item.Comment Next End If
