# AddStatus

## Описание

Создает статус с указанным названием

## Возвращаемое значение

Объект [Status](NormaCSAPI~Status.md).

## Синтаксис

```
object.AddStatus (Name, Group, [Comment])
```

Метод AddStatus состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Name | Обязательный. Значение String. Название статуса |
| Group | Обязательный. Значение Variant. Группа статусов, указывается одной из констант NormaCSStatusGroups |
| Comment | Необязательный. Значение Variant. Комментарий |
