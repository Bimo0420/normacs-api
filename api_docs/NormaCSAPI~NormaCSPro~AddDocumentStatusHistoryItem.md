# AddDocumentStatusHistoryItem

## Описание

Добавляет запись в историю статусов документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [StatusHistoryItem](NormaCSAPI~StatusHistoryItem.md).

## Синтаксис

```
object.AddDocumentStatusHistoryItem (pDocument, pStatus, IsMain, [DateStart], [DateFinish], [Comment])
```

Метод AddDocumentStatusHistoryItem состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). Документ |
| pStatus | Обязательный. Объект [Status](NormaCSAPI~Status.md). Статус |
| IsMain | Обязательный. Значение Boolean. Основной статус? |
| DateStart | Необязательный. Значение Variant. Дата начала действия статуса |
| DateFinish | Необязательный. Значение Variant. Дата окончания действия статуса |
| Comment | Необязательный. Значение Variant. Комментарий |
