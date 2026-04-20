# VB Script

## Исходный текст

Set dlg = CreateObject("NormaCS.Application.Dialogs") ' Подключить обработчик события с указанным префиксом WScript.ConnectObject dlg.Find, "dlgFind_" ' После показа диалога запустить поиск с указанным текстом dlg.Find.TextToSearch = "ГОСТ 51304-2009" ' Показать диалог dlg.Find.Show ' Цикл ожидания закрытия диалога Do While dlg.Find.Visible WScript.Sleep 5 Loop ' Отключить обработчик события WScript.DisconnectObject dlg.Find ' Обработчик события нажатия apply-кнопки Sub dlgFind_ApplyButtonClicked() WScript.echo "Selected document: " & dlg.Find.SelectedDocumentURL End Sub
