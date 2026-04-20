# CreateDateSpan

## Описание

Возвращает вспомогательный объект для указания периода времени: или явно через начальную и конечную дату; или неявно через количество месяцев/дней до месяца обновления основной базы

## Возвращаемое значение

Объект [DateSpan](NormaCSAPI~DateSpan.md).

## Синтаксис

```
object.CreateDateSpan ([StartDateOrNumberOfPeriods], [EndDateOrPeriodType])
```

Метод CreateDateSpan состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Application](NormaCSAPI~Application.md). |
| StartDateOrNumberOfPeriods | Необязательный. Значение Variant. Начальная дата временного диапазона или количество месяцев/дней до даты последнего обновления домена. |
| EndDateOrPeriodType | Необязательный. Значение Variant. Конечная дата временного диапазона или единица изменения диапазона (месяц или день) согласно [NormaCSDateSpanMeasureType](NormaCSAPI~Enumerations~NormaCSDateSpanMeasureType_EN.md), по умолчанию, месяц. |

## Пример

[VB Script](NormaCSAPI~Application~CreateDateSpan~VB%20Script_E.md)
