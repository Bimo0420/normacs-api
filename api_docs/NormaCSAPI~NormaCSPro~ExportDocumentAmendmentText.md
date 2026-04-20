# ExportDocumentAmendmentText

## Описание

Выгружает текст изменения в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentAmendmentText2.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.ExportDocumentAmendmentText** *pDocument*, *Amendment*, *AmendmentTextFolderPath*, [*FileName*]

Метод ExportDocumentAmendmentText состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Amendment | Обязательный. Значение Variant. |
| AmendmentTextFolderPath | Обязательный. Значение String. Папка выгрузки. В эту папку будет помещен выгружаемый файл. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Обратите внимание, что имя следует указывать без расширения, например, "test", но не "test.htm".Если имя выгружаемого файла не указано, то оно автоматически формируется как идентификатор документа. |

## Замечания

Вместо это функции рекомендуется использовать [ExportDocumentAmendmentText2](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentText2.md).

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentText~VB%20Script_E.md)
