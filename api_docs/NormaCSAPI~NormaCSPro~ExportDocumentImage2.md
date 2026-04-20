# ExportDocumentImage2

## Описание

Выгружает изображение документа в указанную папку. В отличие от ExportDocumentImage, возвращает путь на выгруженный файл.

## Возвращаемое значение

Значение String. Путь на выгруженный файл.

## Синтаксис

```
object.ExportDocumentImage2 (Document, ImageFolderPath, [FileName])
```

Метод ExportDocumentImage2 состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Document | Обязательный. Значение Variant. |
| ImageFolderPath | Обязательный. Значение String. Папка выгрузки. В эту папку будет помещен выгружаемый файл. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Если не указано, то автоматически формируется такое же имя, как при выгрузке в клиенте ПРО. |

## Пример

[VB Srcipt](NormaCSAPI~NormaCSPro~ExportDocumentImage2~VB%20Srcipt_E.md)
