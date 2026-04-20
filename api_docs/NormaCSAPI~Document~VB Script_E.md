# VB Script

## Исходный текст

MsgBox _ "ИНФОРМАЦИЯ О ТЕКУЩЕМ ДОКУМЕНТЕ" & vbCrLf & _ vbCrLf & _ "Наименование " & vbTab & app.CurrentDocument.Title & vbCrLf & _ "Номер " & vbTab & app.CurrentDocument.Number & vbCrLf & _ "Индекс " & vbTab & app.CurrentDocument.Index & vbCrLf & _ "Актуален " & vbTab & app.CurrentDocument.IsActual & vbCrLf & _ "Является проектом " & vbTab & app.CurrentDocument.IsProject & vbCrLf & _ "Является сборником" & vbTab & app.CurrentDocument.IsCollection & vbCrLf & _ "Имеет текст " & vbTab & app.CurrentDocument.HasText & vbCrLf & _ "Имеет изображение " & vbTab & app.CurrentDocument.HasImage & vbCrLf & _ "Ссылка " & vbTab & app.CurrentDocument.URL
