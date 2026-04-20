# ExportDocumentText2

## Описание

Выгружает текст документа в указанную папку. В отличие от ExportDocumentТеxt, возвращает путь на выгруженный файл.

## Возвращаемое значение

Значение String.

Путь на выгруженный файл.

## Синтаксис

```
object.ExportDocumentText2 (Document, TextFolderPath, [FileName])
```

Метод ExportDocumentText2 состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Document | Обязательный. Значение Variant. |
| TextFolderPath | Обязательный. Значение String. Папка выгрузки. В эту папку будет помещен выгружаемый файл. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Если не указано, то автоматически формируется такое же имя, как при выгрузке в клиенте ПРО. |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ExportDocumentText2~VB%20Script_E.md)
