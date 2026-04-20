# ImportDocumentAmendmentImage

## Описание

Загружает изображение изменения. Обратите внимание, что флаг UseNormaCSToRenderPdf по умолчанию установлен.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.ImportDocumentAmendmentImage** *pDocument*, *Amendment*, *ImageFilePath*, [*UseNormaCSToRenderPdf*]

Метод ImportDocumentAmendmentImage состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). Документ, которому принадлежит изменение |
| Amendment | Обязательный. Значение Variant. Изменение, может быть указано как ссылка на объект Amendment, как строка с адресом изменения, или как целочисленное значение порядкового номера изменения в списке изменений документа, начиная с единицы. |
| ImageFilePath | Обязательный. Значение String. Путь на файл изображения для загрузки |
| UseNormaCSToRenderPdf | Необязательный. Значение Variant. Использовать NormaCS для отображения PDF-файлов (расширенные возможности контроля доступа). Обратите внимание, что п о умолчанию этот флаг установлен (True). |

## Замечания

Вместо этой функции рекомендуется использовать [ExportDocumentAmendmentImage2](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentImage2.md).

## Пример

[VB Script](NormaCSAPI~NormaCSPro~ImportDocumentAmendmentImage~VB%20Script_E.md)
