# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") If app.CurrentDocument Is Nothing Then MsgBox "Неудача получения информации о текущем документе." Else MsgBox _ "ИНФОРМАЦИЯ О ТЕКУЩЕМ ДОКУМЕНТЕ" & vbCrLf & _ vbCrLf & _ "Наименование " & vbTab & doc.Title & vbCrLf & _ "Номер " & vbTab & doc.Number & vbCrLf & _ "Индекс " & vbTab & doc.Index & vbCrLf & _ "Актуален " & vbTab & doc.IsActual & vbCrLf & _ "Является проектом " & vbTab & doc.IsProject & vbCrLf & _ "Является сборником" & vbTab & doc.IsCollection & vbCrLf & _ "Имеет текст " & vbTab & doc.HasText & vbCrLf & _ "Имеет изображение " & vbTab & doc.HasImage & vbCrLf & _ "Ссылка " & vbTab & doc.URL End If
