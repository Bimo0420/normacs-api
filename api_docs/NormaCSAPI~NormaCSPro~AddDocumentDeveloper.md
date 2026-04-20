# AddDocumentDeveloper

## Описание

Добавляет указанного разработчика к списку разработчиков документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [Developer](NormaCSAPI~Developer.md).

## Синтаксис

```
object.AddDocumentDeveloper (pDocument, Name, IsMain)
```

Метод AddDocumentDeveloper состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Name | Обязательный. Значение String. |
| IsMain | Обязательный. Значение Boolean. |
