# FindFolders

## Описание

Возвращает список папок с именами, целиком ли частью совпадающими с указанным образцом

## Возвращаемое значение

Объект [Folders](NormaCSAPI~Folders.md).

## Синтаксис

```
object.FindFolders (Name, [MatchMode])
```

Метод FindFolders состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Domain](NormaCSAPI~Domain.md). |
| Name | Обязательный. Значение Variant. |
| MatchMode | Необязательный. Значение Variant. Одно из значений [NormaCSMachStringMode](NormaCSAPI~Enumerations~NormaCSMatchStringMode_EN.md), по умолчанию, ncsMatchAnyPartOfString. |
