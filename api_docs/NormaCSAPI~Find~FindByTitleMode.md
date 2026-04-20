# FindByTitleMode

## Описание

Модификатор поиска по названию документа

## Тип свойства

Перечисление [NormaCSFindByTitleMode](NormaCSAPI~Enumerations~NormaCSFindByTitleMode_EN.md).

## Синтаксис

*object***.FindByTitleMode** [= *значение*]

Свойство FindByTitleMode состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Find](NormaCSAPI~Find.md). |
| значение | Перечисление [NormaCSFindByTitleMode](NormaCSAPI~Enumerations~NormaCSFindByTitleMode_EN.md). |

## Настройки

Настройки для *значение*:

| Константа | Значение | Описание |
| --- | --- | --- |
|  | ncsFindByTitleAnyWord | 0 | Искать любую комбинацию из указанных слов (установлено по умолчанию) |
|  | ncsFindByTitleAllWordsInAnyOrder | 1 | Искать все указанные слова в любом порядке |
|  | ncsFindByTitleAllWordsInSpecifiedOrder | 2 | Искать все указанные слова в указанном порядке |
|  | ncsFindByTitleWholeStringFromAnyPlace | 3 | Название документа должно содержать указанную строку без учета регистра |
|  | ncsFindByTitleWholeStringFromStart | 4 | Начало названия документа должно совпадать с указанной строкой без учета регистра |
|  | ncsFindByTitleWholeString | 5 | Название документа должно целиком совпадать с указанной строкой без учета регистра |

## Пример

[VB Script](NormaCSAPI~Find~FindByTitleMode~VB%20Script_E.md)
