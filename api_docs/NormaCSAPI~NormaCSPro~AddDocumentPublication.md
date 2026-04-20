# AddDocumentPublication

## Описание

Добавляет указанную публикацию к списку публикаций документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [Publication](NormaCSAPI~Publication.md).

## Синтаксис

```
object.AddDocumentPublication (pDocument, Name, [Year], [Number])
```

Метод AddDocumentPublication состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Name | Обязательный. Значение String. |
| Year | Необязательный. Значение Variant. |
| Number | Необязательный. Значение Variant. |
