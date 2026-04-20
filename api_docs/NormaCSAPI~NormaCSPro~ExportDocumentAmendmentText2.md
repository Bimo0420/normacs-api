# ExportDocumentAmendmentText2

## Описание

Выгружает текст изменения в указанную папку. В отличие от ExportDocumentAmendmentText, возвращает путь на выгруженный файл.

## Возвращаемое значение

Значение String.

Путь на выгруженный файл.

## Синтаксис

```
object.ExportDocumentAmendmentText2 (pDocument, Amendment, AmendmentTextFolderPath, [FileName])
```

Метод ExportDocumentAmendmentText2 состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Amendment | Обязательный. Значение Variant. |
| AmendmentTextFolderPath | Обязательный. Значение String. Папка выгрузки. В эту папку будет помещен выгружаемый файл. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Если не указано, то автоматически формируется такое же имя, как при выгрузке в клиенте ПРО. |

## Пример

[VB Srcipt](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentText2~VB%20Srcipt_E.md)
