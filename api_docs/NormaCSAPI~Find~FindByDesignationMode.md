# FindByDesignationMode

## Описание

Модификатор поиска по обозначению документа

## Тип свойства

Перечисление [NormaCSFindByDesignationMode](NormaCSAPI~Enumerations~NormaCSFindByDesignationMode_EN.md).

## Синтаксис

*object***.FindByDesignationMode** [= *значение*]

Свойство FindByDesignationMode состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Find](NormaCSAPI~Find.md). |
| значение | Перечисление [NormaCSFindByDesignationMode](NormaCSAPI~Enumerations~NormaCSFindByDesignationMode_EN.md). |

## Настройки

Настройки для *значение*:

| Константа | Значение | Описание |
| --- | --- | --- |
|  | ncsFindByDesignationAll | 0 | Искать все документы с указанным типом и номером, независимо от года утверждения в обозначении |
|  | ncsFindByDesignationSame | 1 | Искать документы с годом утверждения, указанным в обозначении |
|  | ncsFindByDesignationSameIfYearSpecifiedElseNewest | 2 | Если год утверждения указан в обозначении, то искать документы с указанным годом, иначе искать документы с самым поздним годом утверждения |
|  | ncsFindByDesignationSameIfYearSpecifiedElseAll | 3 | Если год утверждения указан в обозначении, то искать документ с указанным годом, иначе искать все документы с указанным обозначением |

## Пример

[VB Script](NormaCSAPI~Find~FindByDesignationMode~VB%20Script_E.md)
