# AddDocumentAmendmentWithChangingDocument

## Описание

Создает изменение c изменяющим документом. Вызовите SaveDocument для фиксации изменений в базе.

## Возвращаемое значение

Объект [Amendment](NormaCSAPI~Amendment.md).

## Синтаксис

```
object.AddDocumentAmendmentWithChangingDocument (pDocument, ChangingDocument, [Designation], [Publication], [Issued], [Revoked], [Id])
```

Метод AddDocumentAmendmentWithChangingDocument состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| ChangingDocument | Обязательный. Значение Variant. |
| Designation | Необязательный. Значение Variant. |
| Publication | Необязательный. Значение Variant. |
| Issued | Необязательный. Значение Variant. |
| Revoked | Необязательный. Значение Variant. |
| Id | Необязательный. Значение Variant. |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~AddDocumentAmendmentWithChangingDocument~VB%20Script_E.md)
