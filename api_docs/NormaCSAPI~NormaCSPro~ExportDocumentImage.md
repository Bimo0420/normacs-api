# ExportDocumentImage

## Описание

Выгружает изображение документа в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentImage2.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.ExportDocumentImage** *Document*, *ImageFolderPath*, [*FileName*]

Метод ExportDocumentImage состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Document | Обязательный. Значение Variant. |
| ImageFolderPath | Обязательный. Значение String. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Обратите внимание, что имя следует указывать без расширения, например, "test", но не "test.pdf". Если имя выгружаемого файла не указано, то оно автоматически формируется как идентификатор документа. |

## Замечания

Вместо этой функции рекомендуется использовать [ExportDocumentImage2](NormaCSAPI~NormaCSPro~ExportDocumentImage2.md).

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ExportDocumentImage~VB%20Script_E.md)
