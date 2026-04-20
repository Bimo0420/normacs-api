# Application Объект

## Описание

Корневой объект NormaCS API.

## Объектная модель

## Замечания

Обратите внимание, что при работе в серверной версии NormaCS с ограниченным числом пользователей, рекомендуется закрывать соединение с базой данных, вызывая метод Application.Disconnect каждый раз, когда работа с NormaCS API временно завершена, но объект API не планируется освобождать.

## Методы и свойства

| Методы |  | Методы |
| --- | --- | --- |
|  | Методы |
| [BuildDocumentURLByDomainId10](NormaCSAPI~Application~BuildDocumentURLByDomainId10.md) |  |  | Конструирует адрес документа по указанному домену и идентификатору в десятичном формате |
| [BuildDocumentURLByDomainId32](NormaCSAPI~Application~BuildDocumentURLByDomainId32.md) |  |  | Конструирует адрес документа по указанному домену и идентификатору в 32-ричном формате |
| [CancelWait](NormaCSAPI~Application~CancelWait.md) |  |  | Посылает сигнал к завершению цикла ожидания события, вызванного функциями WaitForEvent или WaitForEventEx |
| [Connect](NormaCSAPI~Application~Connect.md) |  |  | Открывает соединение с подключенными базами данных. Вызывать необязательно, так как соединение автоматически открывается при вызове любого метода или свойства, запрашивающего данные из базы. |
| [Connect2](NormaCSAPI~Application~Connect2.md) |  |  | Открывает соединение с подключенными базами данных. Вызывать необязательно, так как соединение автоматически открывается при вызове любого метода или свойства, запрашивающего данные из базы. |
| [CreateDateSpan](NormaCSAPI~Application~CreateDateSpan.md) |  |  | Возвращает вспомогательный объект для указания периода времени: или явно через начальную и конечную дату; или неявно через количество месяцев/дней до месяца обновления основной базы |
| [CreateDocuments](NormaCSAPI~Application~CreateDocuments.md) |  |  | Возвращает пустой список документов для дальнейшего его заполнения пользователем |
| [Disconnect](NormaCSAPI~Application~Disconnect.md) |  |  | Закрывает соединение с подключенными базами данных. При работе в серверной версии NormaCS с ограниченным числом пользователей, рекомендуется вызывать этот метод каждый раз, когда работа с NormaCS API временно завершена, но объект API не планируется освобождать |
| [Focus](NormaCSAPI~Application~Focus.md) |  |  | Активирует приложение NormaCS |
| [GetAmendmentByURL](NormaCSAPI~Application~GetAmendmentByURL.md) |  |  | Возвращает изменение к документу с указанным адресом |
| [GetAppendixByURL](NormaCSAPI~Application~GetAppendixByURL.md) |  |  | Возвращает приложение с указанным адресом |
| [GetDocumentByDomainId10](NormaCSAPI~Application~GetDocumentByDomainId10.md) |  |  | Возвращает документ с указанным доменом и идентификатором в десятичном формате |
| [GetDocumentByDomainId32](NormaCSAPI~Application~GetDocumentByDomainId32.md) |  |  | Возвращает документ с указанным доменом и идентификатором в 32-ричном формате |
| [GetDocumentByURL](NormaCSAPI~Application~GetDocumentByURL.md) |  |  | Возвращает документ с указанным адресом |
| [GetDocumentIconByIndex](NormaCSAPI~Application~GetDocumentIconByIndex.md) |  |  | Возвращает дескриптор значка документа (HICON) по его внутреннему индексу, |
| [GetExtraFeatureFlags](NormaCSAPI~Application~GetExtraFeatureFlags.md) |  |  | Возвращает строку флагов feature с указанным именем |
| [GetFolderByURL](NormaCSAPI~Application~GetFolderByURL.md) |  |  | Возвращает папку с указанным адресом |
| [GetOemInfoString](NormaCSAPI~Application~GetOemInfoString.md) |  |  | Возвращает указанное именованное значение из конфигурационного файла oem.inf, или пустую строку, если не найдено |
| [GetRevisionByURL](NormaCSAPI~Application~GetRevisionByURL.md) |  |  | Возвращает редакцию с указанным адресом |
| [GetURLByKodeksDocId](NormaCSAPI~Application~GetURLByKodeksDocId.md) |  |  | Служебная функция. |
| [GetURLType](NormaCSAPI~Application~GetURLType.md) |  |  | Возвращает тип объекта NormaCS по указанному адресу |
| [HasDocument](NormaCSAPI~Application~HasDocument.md) |  |  | Проверяет наличие документа с указанным адресом |
| [HasExtraFeature](NormaCSAPI~Application~HasExtraFeature.md) |  |  | Имеется ли в приобретенном комплекте feature с указанным именем |
| [IsLaunched](NormaCSAPI~Application~IsLaunched.md) |  |  | True если приложение NormaCS запущено |
| [IsSupportedURL](NormaCSAPI~Application~IsSupportedURL.md) |  |  | Может ли указанный адрес быть использован для получения документа или другого объекта NormaCS при помощи функций API GetDocumentByURL, GetAmendmentByURL, GetFolderByURL. Другими словами, можно ли открыть в NormaCS ссылку с указанным адресом. |
| [Launch](NormaCSAPI~Application~Launch.md) |  |  | Запускает приложение NormaCS, если еще не запущено |
| [LaunchCmd](NormaCSAPI~Application~LaunchCmd.md) |  |  | Запускает клиента NormaCS, если еще не запущен, и передает на выполнение указанную командную строку. |
| [SetConnectionParams](NormaCSAPI~Application~SetConnectionParams.md) |  |  |  |
| [ShowConnectionMessageBox](NormaCSAPI~Application~ShowConnectionMessageBox.md) |  |  | Разрешает отображать всплывающие сообщения о подключении к NormaCS. Deprecated, используйте вместо этого метода свойство [ShowConnectionMessages](NormaCSAPI~Application~ShowConnectionMessages.md) . |
| [StartDocumentSearchByNumber](NormaCSAPI~Application~StartDocumentSearchByNumber.md) |  |  | Активирует NormaCS и запускает поиск документов по указанному номером |
| [StartDocumentSearchByText](NormaCSAPI~Application~StartDocumentSearchByText.md) |  |  | Активирует NormaCS и запускает поиск документов с указанным текстом |
| [StartDocumentSearchByTitle](NormaCSAPI~Application~StartDocumentSearchByTitle.md) |  |  | Активирует NormaCS и запускает поиск документов с указанным наименованием |
| [StartLog](NormaCSAPI~Application~StartLog.md) |  |  | Включает детализированный лог по указанному пути или в текущей папке. В лог записываются ошибки и информационные сообщения. |
| [StartTermSearch](NormaCSAPI~Application~StartTermSearch.md) |  |  | Активирует NormaCS и запускает поиск указанного термина |
| [StopLog](NormaCSAPI~Application~StopLog.md) |  |  | Выключает детализированный лог, в лог записываются только ошибки. |
| [UnloadBaseDll](NormaCSAPI~Application~UnloadBaseDll.md) |  |  | Служебная функция. |
| [UnloadBaseModule](NormaCSAPI~Application~UnloadBaseModule.md) |  |  |  |
| [WaitForEvent](NormaCSAPI~Application~WaitForEvent.md) |  |  | Ждет указанное событие (выбора документа в приложении NormaCS). Возвращает True, если событие произошло или False если приложение NormaCS было закрыто или если операция была прервана при помощи вызова CanceWait. |
| [WaitForEventEx](NormaCSAPI~Application~WaitForEventEx.md) |  |  | Ждет указанное событие. Возвращает True, если событие произошло или False если ожидание было прервано.Третий параметр, если указан, возвращает причину прерывания:1 - истек период ожидания; 2 - операция была прервана вызовом CanceWait; 3 - приложение NormaCS бы |

## Пример

[VB Script](NormaCSAPI~Application~VB%20Script_E.md)
