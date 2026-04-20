# LaunchCmd

## Описание

Запускает клиента NormaCS, если еще не запущен, и передает на выполнение указанную командную строку.

## Возвращаемое значение

Нет.

## Синтаксис

*object***.LaunchCmd** *cmd*

Метод LaunchCmd состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [Application](NormaCSAPI~Application.md). |
| cmd | Обязательный. Значение String. |

## Замечания

Возможные варианты командной строки перечисленны ниже.

| Операция | Команда (значение cmd) | Комментарий | Пример |
| --- | --- | --- | --- |
| Открыть NormaCS и показать окно клиента | normacs:show |  | Если клиент уже запущен, производится только активизация его главного окна. Указанная команда также реализована как отдельный метод API [Launch](NormaCSAPI~Application~Launch.md). |
| Открыть документ | normacs://normacs.ru/XXXX | XXXX - внутренний номер документа | normacs://normacs.ru/9dh |
| Открыть документ в указанном месте | normacs://normacs.ru/XXXX#AAAA | XXXX - внутренний номер документа, AAAA - анкор внутренней ссылки (соответствует "<a href="#AAAA">..." в документе) | normacs://normacs.ru/9dh#_Toc38278522 |
| Открыть tiff-версию документа (если не существует, открывается HTML) | normacs://normacs.ru/XXXX#_tiff_pageN | XXXX - внутренний номер документа, N - номер страницы | normacs://normacs.ru/9dh#_tiff_page13 - открытие страницы 13 tiff-версии документа (нумерация страниц начинается с 1) |
| Поиск нормативного документа по номеру | normacs:--numberNNNN | NNNN - подстрока, которая ищется в поле "номер документа" в базе данных | normacs:--number1170 ищет документы, содержащие "1170" в номере, такие, как ГОСТ 11706-78, ГОСТ Р 61179-99 и т.д. Указанная команда также реализована как отдельный метод API [StartDocumentSearchByNumber](NormaCSAPI~Application~StartDocumentSearchByNumber.md). |
| Полнотекстовый поиск нормативного документа | normacs:--ftsTTTT | TTTT - текст для поиска | normacs:--ftsболт ищет документы, содержащие слово "болт" во всех словоформах.Указанная команда также реализована как отдельный метод API [StartDocumentSearchByText](NormaCSAPI~Application~StartDocumentSearchByText.md). |
| Полнотекстовый поиск нормативного документа по названию | normacs:--ftstitle:"TTTT" | TTTT - текст для поиска | Normacs:--ftstitle:"сортамент мате-риалов" Ищет все документы, у которых в название встречаются слова "сортамент материалов". Указанная команда также реализована как отдельный метод API [StartDocumentSearchByTitle](NormaCSAPI~Application~StartDocumentSearchByTitle.md). |

## Пример

[VB Script](NormaCSAPI~Application~LaunchCmd~VB%20Script_E.md)
