# RemoveDocumentAppendix

## Описание

Удаляет указанное приложение вместе с основным файлом и файлом предпросмотра.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.RemoveDocumentAppendix** *Document*, *Appendix*

Метод RemoveDocumentAppendix состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Document | Обязательный. Объект [Document](NormaCSAPI~Document.md). |
| Appendix | Обязательный. Значение Variant. |

## Замечания

Обратите внимание, что, в отличие от методов добавления и изменения, для удаления приложения не требуется подписка на дополнительную функцию.Так сделано для того, чтобы приложения, добавленные в течении тестового периода (без подписки), могли быть удалены и после окончания тестового периода.

## Пример

[VB Script](NormaCSAPI~NormaCSPro~RemoveDocumentAppendix~VB%20Script_E.md)
