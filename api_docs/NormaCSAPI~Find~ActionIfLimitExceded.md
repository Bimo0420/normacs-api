# ActionIfLimitExceded

## Описание

Действие при превышении максимально допустимого количества результатов поиска (Find.Limit)

## Тип свойства

Перечисление [NormaCSFindActionIfLimitExceded](NormaCSAPI~Enumerations~NormaCSFindActionIfLimitExceded_EN.md).

## Синтаксис

*object***.ActionIfLimitExceded** [= *значение*]

Свойство ActionIfLimitExceded состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Find](NormaCSAPI~Find.md). |
| значение | Перечисление [NormaCSFindActionIfLimitExceded](NormaCSAPI~Enumerations~NormaCSFindActionIfLimitExceded_EN.md). |

## Настройки

Настройки для *значение*:

| Константа | Значение | Описание |
| --- | --- | --- |
|  | ncsFindActionIfLimitExcededTruncate | 0 | Если количество результатов поиска превышает максимальное допустимое количество документов (Find.Limit), то вернуть последнее. |
|  | ncsFindActionIfLimitExcededThrowException | 1 | Если количество результатов поиска превышает максимальное допустимое количество документов (Find.Limit), то прервать выполнение с ошибкой. |
