# AddDocumentAmendment2

## Описание

Создает изменение. В отличие от AddDocumentAmendment, позволяет указать дату отмены изменения. Вызовите SaveDocument для фиксации изменений в базе.

## Возвращаемое значение

Объект [Amendment](NormaCSAPI~Amendment.md).

## Синтаксис

```
object.AddDocumentAmendment2 (pDocument, [Designation], [ApprovalName], [ApprovalIndex], [ApprovalNumber], [ApprovalDate], [Publication], [Issued], [Revoked], [Id])
```

Метод AddDocumentAmendment2 состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Designation | Необязательный. Значение Variant. |
| ApprovalName | Необязательный. Значение Variant. |
| ApprovalIndex | Необязательный. Значение Variant. |
| ApprovalNumber | Необязательный. Значение Variant. |
| ApprovalDate | Необязательный. Значение Variant. |
| Publication | Необязательный. Значение Variant. |
| Issued | Необязательный. Значение Variant. |
| Revoked | Необязательный. Значение Variant. |
| Id | Необязательный. Значение Variant. |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~AddDocumentAmendment2~VB%20Script_E.md)
