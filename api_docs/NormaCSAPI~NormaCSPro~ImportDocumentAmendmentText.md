# ImportDocumentAmendmentText

## Описание

Загружает текст изменения

## Возвращаемое значение

Нет. Вместо этой функции рекомендуется использовать [ExportDocumentAmendmentText2](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentText2.md).

## Синтаксис

*object***.ImportDocumentAmendmentText** *pDocument*, *Amendment*, *TextFilePath*

Метод ImportDocumentAmendmentText состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). Документ, которому принадлежит изменение |
| Amendment | Обязательный. Значение Variant. Изменение, может быть указано как ссылка на объект Amendment, как строка с адресом изменения, или как целочисленное значение порядкового номера изменения в списке изменений документа, начиная с единицы. |
| TextFilePath | Обязательный. Значение String. Путь на файл для загрузки |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ImportDocumentAmendmentText~VB%20Script_E.md)
