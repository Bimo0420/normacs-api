# GetDetailsHtml

## Описание

Возвращает html-фрагмент сведений о документе (0-основные сведения;1-замены;2-изменения;3-комментарий;10-основные сведения без замен и изменений)

## Возвращаемое значение

Значение String.

## Синтаксис

```
object.GetDetailsHtml (detailsCategory)
```

Метод GetDetailsHtml состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Document](NormaCSAPI~Document.md). |
| detailsCategory | Обязательный. Перечисление [NormaCSDocumentDetails](NormaCSAPI~Enumerations~NormaCSDocumentDetails_EN.md). |

## Настройки

Настройки для *detailsCategory*:

| Константа | Значение | Описание |
| --- | --- | --- |
|  | ncsDocumentDetailsMain | 0 |  |
|  | ncsDocumentDetailsReplacedBy | 1 |  |
|  | ncsDocumentDetailsAmendments | 2 |  |
|  | ncsDocumentDetailsMainWithoutReplacementsAndAmendmens | 10 |  |
|  | ncsDocumentDetailsComment | 3 |  |

## Требуется подписка

Для использования этого метода с федеральными базами требуется подписка на фичу FullAPI. При вызове без подписки метод возвращает неполные данные.
