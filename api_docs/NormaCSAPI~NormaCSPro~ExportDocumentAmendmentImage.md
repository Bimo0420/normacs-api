# ExportDocumentAmendmentImage

## Описание

Выгружает изображение изменения в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentAmendmentImage2.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.ExportDocumentAmendmentImage** *pDocument*, *Amendment*, *AmendmentImageFolderPath*, [*FileName*]

Метод ExportDocumentAmendmentImage состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Amendment | Обязательный. Значение Variant. |
| AmendmentImageFolderPath | Обязательный. Значение String. Папка выгрузки. В эту папку будет помещен выгружаемый файл. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Обратите внимание, что имя следует указывать без расширения, например, "test", но не "test.pdf".Если имя выгружаемого файла не указано, то оно автоматически формируется как идентификатор документа. |

## Замечания

Вместо это функции рекомендуется использовать [ExportDocumentAmendmentImage2](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentImage2.md).

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentImage~VB%20Script_E.md)
