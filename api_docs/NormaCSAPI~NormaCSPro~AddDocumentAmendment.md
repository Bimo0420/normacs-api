# AddDocumentAmendment

## Описание

Создает изменение. Используйте вместо этого метода AddDocumentAmendment2, если хотите сразу указать дату отмены изменения. Вызовите SaveDocument для фиксации изменений в базе.

## Возвращаемое значение

Объект [Amendment](NormaCSAPI~Amendment.md).

## Синтаксис

```
object.AddDocumentAmendment (pDocument, [Designation], [ApprovalName], [ApprovalIndex], [ApprovalNumber], [ApprovalDate], [Publication], [Issued], [Id])
```

Метод AddDocumentAmendment состоит из:

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
| Id | Необязательный. Значение Variant. |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~AddDocumentAmendment~VB%20Script_E.md)
