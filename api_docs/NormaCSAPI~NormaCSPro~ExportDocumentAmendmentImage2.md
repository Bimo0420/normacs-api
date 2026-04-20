# ExportDocumentAmendmentImage2

## Описание

Выгружает изображение изменения в указанную папку. В отличие от ExportDocumentAmendmentImage, возвращает путь на выгруженный файл.

## Возвращаемое значение

Значение String.

Путь на выгруженный файл.

## Синтаксис

```
object.ExportDocumentAmendmentImage2 (pDocument, Amendment, AmendmentImageFolderPath, [FileName])
```

Метод ExportDocumentAmendmentImage2 состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Amendment | Обязательный. Значение Variant. |
| AmendmentImageFolderPath | Обязательный. Значение String. Папка выгрузки. В эту папку будет помещен выгружаемый файл. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Если не указано, то автоматически формируется такое же имя, как при выгрузке в клиенте ПРО. |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentImage2~VB%20Script_E.md)
