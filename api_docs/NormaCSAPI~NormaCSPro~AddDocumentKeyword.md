# AddDocumentKeyword

## Описание

Добавляет указанное ключевое слово к списку ключевых слов документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [Keyword](NormaCSAPI~Keyword.md).

## Синтаксис

```
object.AddDocumentKeyword (pDocument, Name)
```

Метод AddDocumentKeyword состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Name | Обязательный. Значение String. |
