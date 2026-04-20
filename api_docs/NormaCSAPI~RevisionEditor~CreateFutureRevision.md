# CreateFutureRevision

## Описание

Создает будущую (предстоящую) редакцию. Такая редакция в дальнейшем может быть сделана основной.

## Возвращаемое значение

Объект [Revision](NormaCSAPI~Revision.md).

## Синтаксис

```
object.CreateFutureRevision (Document, [Issued], [DateStart], [DateFinish], [Annotation], [Publication], [Comment])
```

Метод CreateFutureRevision состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [RevisionEditor](NormaCSAPI~RevisionEditor.md). |
| Document | Обязательный. Значение Variant. Сслылка на документ, или URL документа, представляемого редакцией. |
| Issued | Необязательный. Значение Variant. Дата ввода редакции в действие |
| DateStart | Необязательный. Значение Variant. Дата начала действия редакции |
| DateFinish | Необязательный. Значение Variant. Дата окончания действия редакции |
| Annotation | Необязательный. Значение Variant. Аннотация к редакции |
| Publication | Необязательный. Значение Variant. Информация о публикации редакции |
| Comment | Необязательный. Значение Variant. Комментарий к редакции |

## Пример

[VB Script](NormaCSAPI~RevisionEditor~CreateFutureRevision~VB%20Script_E.md)
