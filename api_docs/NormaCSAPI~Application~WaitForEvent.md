# WaitForEvent

## Описание

Ждет указанное событие (выбора документа в приложении NormaCS). Возвращает True, если событие произошло или False если приложение NormaCS было закрыто или если операция была прервана при помощи вызова CanceWait.

## Возвращаемое значение

Значение Boolean.

## Синтаксис

```
object.WaitForEvent (eventType)
```

Метод WaitForEvent состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Application](NormaCSAPI~Application.md). |
| eventType | Обязательный. Перечисление [NormaCSEventType](NormaCSAPI~Enumerations~NormaCSEventType_EN.md). |

## Настройки

Настройки для *eventType*:

| Константа | Значение | Описание |
| --- | --- | --- |
|  | ncsEventTypeDocumentSelected | 0 | В окне списка документов NormaCS выбран некоторый документ и нажата кнопка [Копировать ссылку на текущий документ] |

## Пример

[VB Script](NormaCSAPI~Application~WaitForEvent~VB%20Script_E.md)
