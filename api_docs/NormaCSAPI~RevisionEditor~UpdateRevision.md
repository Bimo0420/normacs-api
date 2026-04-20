# UpdateRevision

## Описание

Изменяет атрибуты редакции.

## Возвращаемое значение

Объект [Revision](NormaCSAPI~Revision.md).

## Синтаксис

```
object.UpdateRevision (Revision, [Issued], [DateStart], [DateFinish], [Annotation], [Publication], [Comment])
```

Метод UpdateRevision состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [RevisionEditor](NormaCSAPI~RevisionEditor.md). |
| Revision | Обязательный. Значение Variant. Сслылка на редакцию, или URL редакции. |
| Issued | Необязательный. Значение Variant. Дата ввода редакции в действие |
| DateStart | Необязательный. Значение Variant. Дата начала действия редакции |
| DateFinish | Необязательный. Значение Variant. Дата окончания действия редакции |
| Annotation | Необязательный. Значение Variant. Аннотация к редакции |
| Publication | Необязательный. Значение Variant. Информация о публикации редакции |
| Comment | Необязательный. Значение Variant. Комментарий к редакции |

## Пример

[VB Script](NormaCSAPI~RevisionEditor~UpdateRevision~VB%20Script_E.md)
