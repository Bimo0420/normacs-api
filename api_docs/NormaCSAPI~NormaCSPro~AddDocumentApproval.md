# AddDocumentApproval

## Описание

Добавляет утверждение к списку утверждений документа. Данные об утверждении указываются через несколько параметров. SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [Approval](NormaCSAPI~Approval.md).

## Синтаксис

```
object.AddDocumentApproval (pDocument, Name, Index, Number, Date, IsMain)
```

Метод AddDocumentApproval состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). Документ, к которому добавляется утверждение. |
| Name | Обязательный. Значение String. Наименование утверждающей организации. |
| Index | Обязательный. Значение String. Индекс утверждающего документа. |
| Number | Обязательный. Значение String. Номер утверждающего документа. |
| Date | Обязательный. Значение Variant. Дата утверждения. |
| IsMain | Обязательный. Значение Boolean. Сделать ли добавляемое утверждение основным в списке утверждений. |

## Пример

[VB Script](NormaCSAPI~NormaCSPro~AddDocumentApproval~VB%20Script_E.md)
