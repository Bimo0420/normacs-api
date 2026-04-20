# Selectivity

## Описание

Модификатор избирательности поиска по обозначению документа

## Тип свойства

Перечисление [NormaCSDocumentSearchSelectivity](NormaCSAPI~Enumerations~NormaCSDocumentSearchSelectivity_EN.md).

## Синтаксис

*object***.Selectivity** [= *значение*]

Свойство Selectivity состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Recognize2Settings](NormaCSAPI~Recognize2Settings.md). |
| значение | Перечисление [NormaCSDocumentSearchSelectivity](NormaCSAPI~Enumerations~NormaCSDocumentSearchSelectivity_EN.md). |

## Настройки

Настройки для *значение*:

| Константа | Значение | Описание |
| --- | --- | --- |
|  | ncsDocumentSearchSelectivityApprox | 0 | Искать приблизительные варианты если нет достоверных |
|  | ncsDocumentSearchSelectivityAnyYear | 1 | Искать без учета концевого года |
|  | ncsDocumentSearchSelectivityReliable | 2 | Искать только достоверные варианта |

## Пример

[VB Script](NormaCSAPI~Recognize2Settings~Selectivity~VB%20Script_E.md)
