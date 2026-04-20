# ExportDocumentText

## Описание

Выгружает текст документа в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentText2.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.ExportDocumentText** *Document*, *TextFolderPath*, [*FileName*]

Метод ExportDocumentText состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Document | Обязательный. Значение Variant. |
| TextFolderPath | Обязательный. Значение String. |
| FileName | Необязательный. Значение Variant. Имя выгружаемого файла. Обратите внимание, что имя следует указывать без расширения, например, "test", но не "test.htm". Если имя выгружаемого файла не указано, то оно автоматически формируется как идентификатор документа. |

## Замечания

Вместо этой функции рекомендуется использовать [ExportDocumentText2](NormaCSAPI~NormaCSPro~ExportDocumentText2.md).

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ExportDocumentText~VB%20Script_E.md)
