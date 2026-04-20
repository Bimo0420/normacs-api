# NormaCSPro Объект

## Описание

Набор методов для создания и редактирования дополнительных баз данных.Для использования требуется подписка на фичу APIPro.

## Объектная модель

## Методы и свойства

| Методы |  | Методы |
| --- | --- | --- |
|  | Методы |
| [AddClassifier](NormaCSAPI~NormaCSPro~AddClassifier.md) | Создает классификатор с указанным названием |
| [AddDeveloper](NormaCSAPI~NormaCSPro~AddDeveloper.md) | Добавляет указанную организацию к справочнику разрабатывающих организаций домена |
| [AddDocument](NormaCSAPI~NormaCSPro~AddDocument.md) | Создает документ с указанными реквизитами |
| [AddDocumentAgreement](NormaCSAPI~NormaCSPro~AddDocumentAgreement.md) | Добавляет указанное согласование к списку согласований документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentAmendment](NormaCSAPI~NormaCSPro~AddDocumentAmendment.md) | Создает изменение. Используйте вместо этого метода AddDocumentAmendment2, если хотите сразу указать дату отмены изменения. Вызовите SaveDocument для фиксации изменений в базе. |
| [AddDocumentAmendment2](NormaCSAPI~NormaCSPro~AddDocumentAmendment2.md) | Создает изменение. В отличие от AddDocumentAmendment, позволяет указать дату отмены изменения. Вызовите SaveDocument для фиксации изменений в базе. |
| [AddDocumentAmendmentWithChangingDocument](NormaCSAPI~NormaCSPro~AddDocumentAmendmentWithChangingDocument.md) | Создает изменение c изменяющим документом. Вызовите SaveDocument для фиксации изменений в базе. |
| [AddDocumentAppendix](NormaCSAPI~NormaCSPro~AddDocumentAppendix.md) | Добавляет приложение и загружает основной файл приложения и/или файл предварительного просмотра.При вызове этого метода необходимо указать ссылку на документ и путь на основной файл приложения; остальные параметры указывать не обязательно. Если название приложения не было указано, то приложение получает имя, совпадающее с именем основного файла. |
| [AddDocumentApproval](NormaCSAPI~NormaCSPro~AddDocumentApproval.md) | Добавляет утверждение к списку утверждений документа. Данные об утверждении указываются через несколько параметров. SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentApproval2](NormaCSAPI~NormaCSPro~AddDocumentApproval2.md) | Добавляет утверждение к списку утверждений документа. Данные об утверждении указываются через ссылку на утверждающий документ. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentChild](NormaCSAPI~NormaCSPro~AddDocumentChild.md) | Добавляет указанный документ к списку дочерних документов. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentDeveloper](NormaCSAPI~NormaCSPro~AddDocumentDeveloper.md) | Добавляет указанного разработчика к списку разработчиков документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentKeyword](NormaCSAPI~NormaCSPro~AddDocumentKeyword.md) | Добавляет указанное ключевое слово к списку ключевых слов документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentPublication](NormaCSAPI~NormaCSPro~AddDocumentPublication.md) | Добавляет указанную публикацию к списку публикаций документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentRef](NormaCSAPI~NormaCSPro~AddDocumentRef.md) | Добавляет указанный документ к списку связей. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentReplacedBy](NormaCSAPI~NormaCSPro~AddDocumentReplacedBy.md) | Добавляет указанную замену (объект Replacement или Document, или URL). Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentReplaces](NormaCSAPI~NormaCSPro~AddDocumentReplaces.md) | Добавляет указанную замену (объект Replacement или Document, или URL). Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentRespondent](NormaCSAPI~NormaCSPro~AddDocumentRespondent.md) | Добавляет указанный документ к списку исходящих ссылок документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentStatusHistoryItem](NormaCSAPI~NormaCSPro~AddDocumentStatusHistoryItem.md) | Добавляет запись в историю статусов документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentSynonim](NormaCSAPI~NormaCSPro~AddDocumentSynonim.md) | Добавляет указанное обозначение к списку обозначений документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [AddDocumentToFolder](NormaCSAPI~NormaCSPro~AddDocumentToFolder.md) | Добавляет ссылку на документ к папке |
| [AddFolder](NormaCSAPI~NormaCSPro~AddFolder.md) | Создает корневую или доченрнюю папку с указанным названием и параметром упорядочивания |
| [AddIndex](NormaCSAPI~NormaCSPro~AddIndex.md) | Добавляет указанный индекс к списку индексов домена |
| [AddKeyword](NormaCSAPI~NormaCSPro~AddKeyword.md) | Добавляет указанное ключевое слово к справочнику ключевых слов домена |
| [AddOrganization](NormaCSAPI~NormaCSPro~AddOrganization.md) | Добавляет указанную организацию к справочнику организаций домена |
| [AddPublisher](NormaCSAPI~NormaCSPro~AddPublisher.md) | Добавляет указанную организацию к справочнику издающих организаций домена |
| [AddStatus](NormaCSAPI~NormaCSPro~AddStatus.md) | Создает статус с указанным названием |
| [AddUserFieldDef](NormaCSAPI~NormaCSPro~AddUserFieldDef.md) | Создает определение пользовательского поля |
| [ChangeDocumentAppendix](NormaCSAPI~NormaCSPro~ChangeDocumentAppendix.md) | Позволяет изменить некоторые атрибуты приложения, в том числе указать другой основной файл и файл предпросмотра.При вызове этого метода необходимо указать ссылку на документ и объект приложения и хотя бы один из следующих параметров: название и описание приложения и пути на основной файл и файл предпросмотра.При необходимости файл предпросмотра может быть удален - для этого в качестве его пути следует указать пустую строку (""). |
| [CreateReplacement](NormaCSAPI~NormaCSPro~CreateReplacement.md) | Создает объект Replacement для использования в функциях добавления к документу данных о замене |
| [ExportDocumentAmendmentImage](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentImage.md) | Выгружает изображение изменения в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentAmendmentImage2. |
| [ExportDocumentAmendmentImage2](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentImage2.md) | Выгружает изображение изменения в указанную папку. В отличие от ExportDocumentAmendmentImage, возвращает путь на выгруженный файл. |
| [ExportDocumentAmendmentText](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentText.md) | Выгружает текст изменения в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentAmendmentText2. |
| [ExportDocumentAmendmentText2](NormaCSAPI~NormaCSPro~ExportDocumentAmendmentText2.md) | Выгружает текст изменения в указанную папку. В отличие от ExportDocumentAmendmentText, возвращает путь на выгруженный файл. |
| [ExportDocumentAppendix](NormaCSAPI~NormaCSPro~ExportDocumentAppendix.md) | Выгружает основной файл приложения в указанную папку. |
| [ExportDocumentAppendix2](NormaCSAPI~NormaCSPro~ExportDocumentAppendix2.md) | Выгружает приложение к документу. В отличие от ExportDocumentAppendix, возвращает путь на выгруженный файл. |
| [ExportDocumentAppendixPreview](NormaCSAPI~NormaCSPro~ExportDocumentAppendixPreview.md) | Выгружает файл предпросмотра приложения в указанную папку. |
| [ExportDocumentAppendixPreview2](NormaCSAPI~NormaCSPro~ExportDocumentAppendixPreview2.md) | Выгружает файл предпросмотра приложения к документу. В отличие от ExportDocumentAppendixPreview, возвращает путь на выгруженный файл. |
| [ExportDocumentImage](NormaCSAPI~NormaCSPro~ExportDocumentImage.md) | Выгружает изображение документа в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentImage2. |
| [ExportDocumentImage2](NormaCSAPI~NormaCSPro~ExportDocumentImage2.md) | Выгружает изображение документа в указанную папку. В отличие от ExportDocumentImage, возвращает путь на выгруженный файл. |
| [ExportDocumentText](NormaCSAPI~NormaCSPro~ExportDocumentText.md) | Выгружает текст документа в указанную папку. Вместо этой функции рекомендуестся использовать ExportDocumentText2. |
| [ExportDocumentText2](NormaCSAPI~NormaCSPro~ExportDocumentText2.md) | Выгружает текст документа в указанную папку. В отличие от ExportDocumentТеxt, возвращает путь на выгруженный файл. |
| [ExportDomain](NormaCSAPI~NormaCSPro~ExportDomain.md) | Формирует пакет с базой и документами для сторонней установки домена |
| [ImportDocumentAmendmentImage](NormaCSAPI~NormaCSPro~ImportDocumentAmendmentImage.md) | Загружает изображение изменения. Обратите внимание, что флаг UseNormaCSToRenderPdf по умолчанию установлен. |
| [ImportDocumentAmendmentText](NormaCSAPI~NormaCSPro~ImportDocumentAmendmentText.md) | Загружает текст изменения |
| [ImportDocumentImage](NormaCSAPI~NormaCSPro~ImportDocumentImage.md) | Загружает изображение документа. Обратите внимание, что флаг UseNormaCSToRenderPdf по умолчанию установлен. |
| [ImportDocumentText](NormaCSAPI~NormaCSPro~ImportDocumentText.md) | Загружает текст документа |
| [Optimize](NormaCSAPI~NormaCSPro~Optimize.md) | Выполняет уплотнение, переиндексацию и удаление пустых папок базы данных домена. По умолчанию только уплотнение |
| [RemoveClassifier](NormaCSAPI~NormaCSPro~RemoveClassifier.md) | Удаляет указанный классификатор |
| [RemoveDeveloper](NormaCSAPI~NormaCSPro~RemoveDeveloper.md) | Удаляет указанную организацию из справочника разрабатывающих организаций домена |
| [RemoveDocument](NormaCSAPI~NormaCSPro~RemoveDocument.md) | Удаляет указанный документ |
| [RemoveDocumentAgreement](NormaCSAPI~NormaCSPro~RemoveDocumentAgreement.md) | Удаляет указанное согласование из списка согласований документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentAmendment](NormaCSAPI~NormaCSPro~RemoveDocumentAmendment.md) | Удаляет указанное изменение. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentAmendmentImage](NormaCSAPI~NormaCSPro~RemoveDocumentAmendmentImage.md) | Удаляет изображение изменения |
| [RemoveDocumentAmendmentText](NormaCSAPI~NormaCSPro~RemoveDocumentAmendmentText.md) | Удаляет текст изменения |
| [RemoveDocumentAppendix](NormaCSAPI~NormaCSPro~RemoveDocumentAppendix.md) | Удаляет указанное приложение вместе с основным файлом и файлом предпросмотра. |
| [RemoveDocumentApproval](NormaCSAPI~NormaCSPro~RemoveDocumentApproval.md) | Удаляет указанное утверждение из списка утверждений документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentChild](NormaCSAPI~NormaCSPro~RemoveDocumentChild.md) | Удаляет указанный документ из списка дочерних документов. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentDeveloper](NormaCSAPI~NormaCSPro~RemoveDocumentDeveloper.md) | Удаляет указанного разработчика из списка разработчиков документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentFromFolder](NormaCSAPI~NormaCSPro~RemoveDocumentFromFolder.md) | Удаляет из папки ссылку на документ |
| [RemoveDocumentImage](NormaCSAPI~NormaCSPro~RemoveDocumentImage.md) | Удаляет изображение документа |
| [RemoveDocumentKeyword](NormaCSAPI~NormaCSPro~RemoveDocumentKeyword.md) | Удаляет указанное ключевое слово из списка ключевых слов документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentPublication](NormaCSAPI~NormaCSPro~RemoveDocumentPublication.md) | Удаляет указанную публикацию из списка публикаций документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentRef](NormaCSAPI~NormaCSPro~RemoveDocumentRef.md) | Удаляет указанный документ из списка связей. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentReplacedBy](NormaCSAPI~NormaCSPro~RemoveDocumentReplacedBy.md) | Удаляет указанную замену. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentReplaces](NormaCSAPI~NormaCSPro~RemoveDocumentReplaces.md) | Удаляет указанную замену. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentRespondent](NormaCSAPI~NormaCSPro~RemoveDocumentRespondent.md) | Удаляет указанный документ из списка исходящих ссылок документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentStatusHistoryItem](NormaCSAPI~NormaCSPro~RemoveDocumentStatusHistoryItem.md) | Удаляет указанную запись из истории статусов документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentSynonim](NormaCSAPI~NormaCSPro~RemoveDocumentSynonim.md) | Удаляет указанное обозначение из списка обозначений документа. Вызовите SaveDocument для сохранения в базе измененных атрибутов документа. |
| [RemoveDocumentText](NormaCSAPI~NormaCSPro~RemoveDocumentText.md) | Удаляет текст документа |
| [RemoveFolder](NormaCSAPI~NormaCSPro~RemoveFolder.md) | Удаляет указанную папку |
| [RemoveIndex](NormaCSAPI~NormaCSPro~RemoveIndex.md) | Удаляет указанный индекс из списка индексов домена |
| [RemoveKeyword](NormaCSAPI~NormaCSPro~RemoveKeyword.md) | Удаляет указанное ключевое слово из справочника ключевых слов домена |
| [RemoveOrganization](NormaCSAPI~NormaCSPro~RemoveOrganization.md) | Удаляет указанную организацию из справочника организаций домена |
| [RemovePublisher](NormaCSAPI~NormaCSPro~RemovePublisher.md) | Удаляет указанную организацию из справочника издающих организаций домена |
| [RemoveStatus](NormaCSAPI~NormaCSPro~RemoveStatus.md) | Удаляет указанный статус |
| [RemoveUserFieldDef](NormaCSAPI~NormaCSPro~RemoveUserFieldDef.md) | Удаляет указанное определение пользовательского поля |
| [RenameClassifier](NormaCSAPI~NormaCSPro~RenameClassifier.md) | Переименовывает указанный классификатор |
| [RenameDeveloper](NormaCSAPI~NormaCSPro~RenameDeveloper.md) | Переименовывает указанную разрабатывающую организацию. |
| [RenameFolder](NormaCSAPI~NormaCSPro~RenameFolder.md) | Переименовывает указанную папку |
| [RenameIndex](NormaCSAPI~NormaCSPro~RenameIndex.md) | Переименовывает указанный индекс. |
| [RenameOrganization](NormaCSAPI~NormaCSPro~RenameOrganization.md) | Переименовывает указанную организацию. |
| [RenamePublisher](NormaCSAPI~NormaCSPro~RenamePublisher.md) | Переименовывает указанную издающую организацию. |
| [RenameStatus](NormaCSAPI~NormaCSPro~RenameStatus.md) | Переименовывает указанный статус |
| [RenameUserFieldDef](NormaCSAPI~NormaCSPro~RenameUserFieldDef.md) | Переименовывает указанное определение пользовательского поля |
| [SaveDocument](NormaCSAPI~NormaCSPro~SaveDocument.md) | Сохраняет реквизиты документа |
| [SaveFolder](NormaCSAPI~NormaCSPro~SaveFolder.md) | Сохраняет реквизиты папки |
| [SaveUserFieldDef](NormaCSAPI~NormaCSPro~SaveUserFieldDef.md) | Сохраняет определение пользовательского поля |
| [SetDocumentAmendmentChangingDocument](NormaCSAPI~NormaCSPro~SetDocumentAmendmentChangingDocument.md) | Устанавливает или обновляет изменяющий документ для изменения. |
| [SyncDbWithStorage](NormaCSAPI~NormaCSPro~SyncDbWithStorage.md) | Корректирует признаки наличия текстов и/или изображений документов в базе данных в соответствии с доступностью соответствующих файлов |
