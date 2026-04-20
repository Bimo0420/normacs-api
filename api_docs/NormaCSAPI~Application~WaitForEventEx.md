# WaitForEventEx

## Описание

Ждет указанное событие. Возвращает True, если событие произошло или False если ожидание было прервано.Третий параметр, если указан, возвращает причину прерывания:1 - истек период ожидания; 2 - операция была прервана вызовом CanceWait; 3 - приложение NormaCS бы

## Возвращаемое значение

Значение Boolean.

## Синтаксис

```
object.WaitForEventEx ([eventType], [timeoutSec], [Reason])
```

Метод WaitForEventEx состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Application](NormaCSAPI~Application.md). |
| eventType | Необязательный. Значение Variant. |
| timeoutSec | Необязательный. Значение Variant. |
| Reason | Необязательный. Значение Variant. |

## Пример

[VB Script](NormaCSAPI~Application~WaitForEventEx~VB%20Script_E.md)
