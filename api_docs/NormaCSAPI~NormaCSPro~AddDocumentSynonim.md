# AddDocumentSynonim

## Описание

Добавляет указанное обозначение к списку обозначений документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа.

## Возвращаемое значение

Объект [Synonim](NormaCSAPI~Synonim.md).

## Синтаксис

```
object.AddDocumentSynonim (pDocument, Index, Number, IsMain)
```

Метод AddDocumentSynonim состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| pDocument | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Index | Обязательный. Значение String. |
| Number | Обязательный. Значение String. |
| IsMain | Обязательный. Значение Boolean. |
