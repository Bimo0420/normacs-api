# ImportDocumentImage

## Описание

Загружает изображение документа. Обратите внимание, что флаг UseNormaCSToRenderPdf по умолчанию установлен.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.ImportDocumentImage** *Document*, *ImageFilePath*, [*UseNormaCSToRenderPdf*], [*MakeContentsFromPdfBookmarks*]

Метод ImportDocumentImage состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Document | Обязательный. Значение Variant. |
| ImageFilePath | Обязательный. Значение String. Путь на файл изображения для загрузки |
| UseNormaCSToRenderPdf | Необязательный. Значение Variant. Использовать NormaCS для отображения PDF-файлов (расширенные возможности контроля доступа). Обратите внимание, что по умолчанию этот флаг установлен (True). |
| MakeContentsFromPdfBookmarks | Необязательный. Значение Variant. Указывает, надо ли формировать оглавление документа из списка закладок импортируемого PDF-файла. Обратите внимание, что имеющееся оглавление при этом будет затерто вновь сформированным.По умолчанию False |
