# AddDocumentAgreement

## Описание

Добавляет указанное согласование к списку согласований документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [Agreement](NormaCSAPI~Agreement.md).

## Синтаксис

```
object.AddDocumentAgreement (pDocument, Name, Index, Number, Date)
```

Метод AddDocumentAgreement состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Name | Обязательный. Значение String. |
| Index | Обязательный. Значение String. |
| Number | Обязательный. Значение String. |
| Date | Обязательный. Значение Variant. |
