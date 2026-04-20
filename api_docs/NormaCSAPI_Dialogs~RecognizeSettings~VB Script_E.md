# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set settings = app.Recognize2.Settings Set fso = CreateObject("Scripting.FileSystemObject") path = "test.json" If fso.FileExists(path) Then settings.Load path Else Set pattern = settings.patterns.Add("Foo") pattern.RegExp = "(FOO)\s+(\d+)" pattern.TestStr = "FOO 123" pattern.IsActive = True Set pattern = settings.patterns.Add("Bar") pattern.RegExp = "(BAR) \d+)" pattern.TestStr = "BAR 123" settings.patterns.Add "Empty" End If Set dlg = CreateObject("NormaCS.Application.Dialogs") While dlg.RecognizeSettings.ShowModal(settings) settings.Save path Wend
