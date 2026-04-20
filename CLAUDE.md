# Компактный индекс документации NormaCS API

Этот документ — **навигационная карта** по документации NormaCS API для LLM-ассистента.
Он содержит полный список объектов, коллекций, перечислений, их методов, свойств и событий,
но **не содержит описаний сигнатур, параметров и примеров**. Подробности находятся в отдельных
`.md` файлах документации.

## Как использовать этот индекс (инструкция для ассистента)

1. **Прочитай задачу пользователя** и определи, какие объекты/методы/свойства API релевантны.
   - Точка входа в API — объект `Application` (подключение к NormaCS, поиск документов, работа с текущим документом).
   - Работа с документом — объект `Document` и его коллекции (`Amendments`, `Appendixes`, `Approvals`, `Refs`, `Replacements`, `Revisions`, `Contents`, и т. д.).
   - UI/диалоги — библиотека `NormaCSAPI_Dialogs` (About, Card, Find, SelectDocument*, SetlinkReport, VerifyLinks).
   - Распознавание ссылок в тексте — `Recognize`, `Recognize2`, `Recognize2Pattern(s)`, `Recognize2Settings`.

2. **Собери список нужных страниц** по правилам именования файлов (см. ниже). НЕ угадывай — бери имена файлов только из этого индекса или вычисляй их по детерминированной схеме.

3. **Запроси у пользователя (или прочитай сам, если есть доступ к папке с документацией) содержимое нужных `.md` файлов.** Типичный набор для задачи «поиск документа по тексту и чтение его реквизитов»:
   - `NormaCSAPI~Application.md` (описание)
   - `NormaCSAPI~Application~Connect.md` или `Connect2.md`
   - `NormaCSAPI~Application~StartDocumentSearchByText.md`
   - `NormaCSAPI~Application~WaitForEvent.md` (получение результатов поиска)
   - `NormaCSAPI~Document.md` + нужные свойства (`Designation`, `Title`, `Area`, `Status`, …)
   - `NormaCSAPI~Enumerations~NormaCSEventType_EN.md` (коды событий)

4. **Сгенерируй код** только после того, как прочитал реальные сигнатуры. Не выдумывай параметры — если для метода не хватает страницы, запроси её.

## Соглашение об именах файлов

Имена файлов документации детерминированы и строятся по схеме (разделитель — тильда `~`):

| Тип страницы | Схема | Пример |
|---|---|---|
| Библиотека (описание) | `<Lib>_P.md` | `NormaCSAPI_P.md` |
| Объект / коллекция (описание) | `<Lib>~<Object>.md` | `NormaCSAPI~Document.md` |
| Метод объекта | `<Lib>~<Object>~<Method>.md` | `NormaCSAPI~Application~Connect.md` |
| Свойство объекта | `<Lib>~<Object>~<Property>.md` | `NormaCSAPI~Document~Designation.md` |
| Событие объекта | `<Lib>~<Object>~<Event>_EV.md` | `NormaCSAPI_Dialogs~Find~ApplyButtonClicked_EV.md` |
| Перечисление | `<Lib>~Enumerations~<Enum>_EN.md` | `NormaCSAPI~Enumerations~NormaCSEventType_EN.md` |

Префиксы библиотек:

- `NormaCSAPI` — основная библиотека типов NormaCS API
- `NormaCSAPI_Dialogs` — библиотека типов NormaCS API Dlg (диалоги)

## Короткая шпаргалка по типовым задачам

- **Подключиться к NormaCS**: `Application.Connect` / `Connect2` + `IsConnected` + `Disconnect`.
- **Найти документ по обозначению/номеру/тексту/названию**: `Application.StartDocumentSearchBy{Number,Text,Title}` + `Application.WaitForEvent(WaitForEventEx)` → получить коллекцию через `Find.Documents`.
- **Получить документ по URL / DomainId10 / DomainId32**: `Application.GetDocumentByURL` / `GetDocumentByDomainId10` / `GetDocumentByDomainId32`.
- **Читать реквизиты документа**: свойства `Document` — `Designation`, `Title`, `Status`, `ApproveDateStr`, `Approver`, `Developers`, `Publications`, `Keywords`, `Area`.
- **Читать текст документа**: `Document.GetFormattedText`, `Document.Contents`, `Document.HasText`, `Document.HasImage`.
- **Работа с изменениями, приложениями, редакциями**: коллекции `Amendments`, `Appendixes`, `Revisions` объекта `Document`.
- **Распознавание ссылок**: `Application.Recognize2` + `Recognize2Pattern(s)` + `Recognize2Settings`.
- **Показать UI-диалог**: объекты `NormaCSAPI_Dialogs.About/Card/Find/SelectDocument*` → метод `ShowModal` или свойство `Visible` + события `*Clicked`, `DialogClosed`.

---

## Библиотека типов NormaCS API
_Описание библиотеки: `NormaCSAPI_P.md`_

### Объекты и коллекции

#### Agreement (Объект)
Страница объекта: `NormaCSAPI~Agreement.md`

**Свойства:**
`Date`, `Index`, `Name`, `Number`

#### Agreements (Коллекция)
Страница объекта: `NormaCSAPI~Agreements.md`

**Свойства:**
`Count`, `Item`

#### Amendment (Объект)
Страница объекта: `NormaCSAPI~Amendment.md`

**Методы:**
`GetFormattedText`

**Свойства:**
`ApprovalDate`, `ApprovalIndex`, `ApprovalName`, `ApprovalNumber`, `ChangingDocument`, `Comment`, `Designation`, `Document`, `Flags`, `HasImage`, `HasText`, `Id10`, `Issued`, `Publication`, `Revoked`, `SysAdded`, `SysUpdated`, `URL`

#### Amendments (Коллекция)
Страница объекта: `NormaCSAPI~Amendments.md`

**Свойства:**
`Count`, `Item`

#### Appendix (Объект)
Страница объекта: `NormaCSAPI~Appendix.md`

**Свойства:**
`Comment`, `Document`, `FileName`, `FileType`, `HasPreview`, `Id10`, `Name`, `URL`

#### Appendixes (Коллекция)
Страница объекта: `NormaCSAPI~Appendixes.md`

**Свойства:**
`Count`, `Item`

#### Application (Объект)
Страница объекта: `NormaCSAPI~Application.md`

**Методы:**
`BuildDocumentURLByDomainId10`, `BuildDocumentURLByDomainId32`, `CancelWait`, `Connect`, `Connect2`, `CreateDateSpan`, `CreateDocuments`, `Disconnect`, `Focus`, `GetAmendmentByURL`, `GetAppendixByURL`, `GetDocumentByDomainId10`, `GetDocumentByDomainId32`, `GetDocumentByURL`, `GetDocumentIconByIndex`, `GetExtraFeatureFlags`, `GetFolderByURL`, `GetOemInfoString`, `GetRevisionByURL`, `GetURLByKodeksDocId`, `GetURLType`, `HasDocument`, `HasExtraFeature`, `IsLaunched`, `IsSupportedURL`, `Launch`, `LaunchCmd`, `SetConnectionParams`, `ShowConnectionMessageBox`, `StartDocumentSearchByNumber`, `StartDocumentSearchByText`, `StartDocumentSearchByTitle`, `StartLog`, `StartTermSearch`, `StopLog`, `UnloadBaseDll`, `UnloadBaseModule`, `WaitForEvent`, `WaitForEventEx`

**Свойства:**
`AddinHelper`, `ConnectionProfilePath`, `CurrentDocument`, `CurrentDocuments`, `DocumentsUnderControl`, `Domains`, `Find`, `IsConnected`, `LogPath`, `ModuleInfo`, `PackageAudit`, `Recognize`, `Recognize2`, `SerialNumber`, `SetlinkLogger`, `ShowConnectionMessages`, `UserDefinedActions`

#### Approval (Объект)
Страница объекта: `NormaCSAPI~Approval.md`

**Свойства:**
`ApprovingDocument`, `Date`, `Index`, `IsMain`, `Name`, `Number`

#### Approvals (Коллекция)
Страница объекта: `NormaCSAPI~Approvals.md`

**Свойства:**
`Count`, `Item`

#### Classifier (Объект)
Страница объекта: `NormaCSAPI~Classifier.md`

**Свойства:**
`Domain`, `Folders`, `Id`, `Name`, `Path`

#### Classifiers (Коллекция)
Страница объекта: `NormaCSAPI~Classifiers.md`

**Методы:**
`Has`

**Свойства:**
`Count`, `Item`

#### DateSpan (Объект)
Страница объекта: `NormaCSAPI~DateSpan.md`

**Свойства:**
`End`, `Start`

#### Developer (Объект)
Страница объекта: `NormaCSAPI~Developer.md`

**Свойства:**
`Address`, `IsMain`, `Name`

#### Developers (Коллекция)
Страница объекта: `NormaCSAPI~Developers.md`

**Свойства:**
`Count`, `Item`

#### Document (Объект)
Страница объекта: `NormaCSAPI~Document.md`

**Методы:**
`CopyHyperlinkToClipboard`, `GetDetailsHtml`, `GetFormattedText`, `IsStatusChangedBetweenDates`

**Свойства:**
`Agreements`, `Amendments`, `Appendixes`, `Approvals`, `Approved`, `ApproveDateStr`, `Approver`, `Area`, `CardXML`, `ChangedDocuments`, `Children`, `Comment`, `Contents`, `Correspondents`, `CurrentPage`, `Designation`, `DesignationAndTitle`, `DesignationAndTitleEx`, `DesignationOrTitle`, `Developers`, `Domain`, `ExtraDesignations`, `Folders`, `HasContent`, `HasImage`, `HasSynonims`, `HasText`, `Icon`, `IconIndex`, `Id`, `Id10`, `ImageFormat`, `Index`, `IsActual`, `IsCollection`, `IsFullyActive`, `IsInactive`, `IsObsoleted`, `IsPartlyActive`, `IsProject`, `IsPurchased`, `IsRevision`, `IsStatusAboutToChange`, `Issued`, `IsUndefinedStatus`, `Keywords`, `MainRevisionDocument`, `NormaLink`, `Number`, `PageCount`, `Parent`, `Publications`, `Refs`, `ReplacedBy`, `Replaces`, `Respondents`, `Restrictions`, `Revisions`, `Revoked`, `StatusHistory`, `Synonims`, `SysAdded`, `SysUpdated`, `TextFormat`, `Title`, `URL`, `URLEx`, `UserFields`

#### Documents (Коллекция)
Страница объекта: `NormaCSAPI~Documents.md`

**Методы:**
`Add`, `Remove`

**Свойства:**
`Count`, `Item`

#### DocumentsUnderControl (Объект)
Страница объекта: `NormaCSAPI~DocumentsUnderControl.md`

**Свойства:**
`AllDocuments`, `HasAnyUnread`, `UnreadCount`, `UnreadDocuments`

#### Domain (Объект)
Страница объекта: `NormaCSAPI~Domain.md`

**Методы:**
`FindDocumentsByReference`, `FindDocumentsWhichReplacedBySpecified`, `FindDocumentsWhichReplaceSpecified`, `FindFolders`, `FindIndex`, `GetNextIdForAmendment`, `GetNormaCSPro`

**Свойства:**
`Classifiers`, `ConnectionString`, `Date`, `DaysAfterLastUpdate`, `Description`, `Developers`, `DocumentCountAvail`, `DocumentCountTotal`, `Icon`, `Indexes`, `IsMain`, `Keywords`, `Name`, `Organizations`, `Publishers`, `Statuses`, `UserFieldDefs`

#### Domains (Коллекция)
Страница объекта: `NormaCSAPI~Domains.md`

**Свойства:**
`Count`, `Item`

#### Find (Объект)
Страница объекта: `NormaCSAPI~Find.md`

**Методы:**
`CreateDesignationCache`, `DestroyDesignationCache`, `Execute`, `Reset`, `SetParametersBySearchString`

**Свойства:**
`ActionIfLimitExceded`, `Approved`, `Approver`, `Changed`, `Classifiers`, `Designation`, `Documents`, `ExcludeAdoptedButNotYetActingFromRevoked`, `FindByDesignationMode`, `FindByTextMode`, `FindByTitleMode`, `Index`, `Issued`, `Keywords`, `Limit`, `Number`, `Revoked`, `SearchSubfolders`, `SysAdded`, `SysUpdated`, `Text`, `Title`, `TOC`, `TotalUnlimitedCount`

#### Folder (Объект)
Страница объекта: `NormaCSAPI~Folder.md`

**Свойства:**
`Classifier`, `Comment`, `Documents`, `Domain`, `Folders`, `Id`, `Name`, `Parent`, `Path`, `Sort`, `URL`

#### Folders (Коллекция)
Страница объекта: `NormaCSAPI~Folders.md`

**Методы:**
`Has`

**Свойства:**
`Count`, `Item`

#### Index (Объект)
Страница объекта: `NormaCSAPI~Index.md`

**Свойства:**
`Name`

#### Indexes (Коллекция)
Страница объекта: `NormaCSAPI~Indexes.md`

**Методы:**
`Has`

**Свойства:**
`Count`, `Item`

#### IPackageAudit (Объект)
Страница объекта: `NormaCSAPI~IPackageAudit.md`

**Методы:**
`CanProcessFile`, `SetFileProcessed`

#### Keyword (Объект)
Страница объекта: `NormaCSAPI~Keyword.md`

**Свойства:**
`Text`

#### Keywords (Коллекция)
Страница объекта: `NormaCSAPI~Keywords.md`

**Свойства:**
`Count`, `Item`

#### LinkFormat (Объект)
Страница объекта: `NormaCSAPI~LinkFormat.md`

**Свойства:**
`Format`, `Name`

#### LinkFormats (Коллекция)
Страница объекта: `NormaCSAPI~LinkFormats.md`

**Методы:**
`Add`, `AssignTo`, `Has`, `Normalize`, `Remove`, `RemoveAll`

**Свойства:**
`Count`, `Item`, `SelectedFormat`, `SelectedIndex`

#### ModuleInfo (Объект)
Страница объекта: `NormaCSAPI~ModuleInfo.md`

**Свойства:**
`BaseLibConfiguration`, `BaseLibConfigurationDescription`, `BaseLibConfigurationVersion`, `BaseLibDescription`, `BaseLibFileVersion`, `BaseLibPath`, `BaseLibProductVersion`, `Is64Bit`, `MainLibConfiguration`, `MainLibConfigurationDescription`, `MainLibConfigurationVersion`, `MainLibDescription`, `MainLibFileVersion`, `MainLibPath`, `MainLibProductVersion`

#### NormaCSPro (Объект)
Страница объекта: `NormaCSAPI~NormaCSPro.md`

**Методы:**
`AddClassifier`, `AddDeveloper`, `AddDocument`, `AddDocumentAgreement`, `AddDocumentAmendment`, `AddDocumentAmendment2`, `AddDocumentAmendmentWithChangingDocument`, `AddDocumentAppendix`, `AddDocumentApproval`, `AddDocumentApproval2`, `AddDocumentChild`, `AddDocumentDeveloper`, `AddDocumentKeyword`, `AddDocumentPublication`, `AddDocumentRef`, `AddDocumentReplacedBy`, `AddDocumentReplaces`, `AddDocumentRespondent`, `AddDocumentStatusHistoryItem`, `AddDocumentSynonim`, `AddDocumentToFolder`, `AddFolder`, `AddIndex`, `AddKeyword`, `AddOrganization`, `AddPublisher`, `AddStatus`, `AddUserFieldDef`, `ChangeDocumentAppendix`, `CreateReplacement`, `ExportDocumentAmendmentImage`, `ExportDocumentAmendmentImage2`, `ExportDocumentAmendmentText`, `ExportDocumentAmendmentText2`, `ExportDocumentAppendix`, `ExportDocumentAppendix2`, `ExportDocumentAppendixPreview`, `ExportDocumentAppendixPreview2`, `ExportDocumentImage`, `ExportDocumentImage2`, `ExportDocumentText`, `ExportDocumentText2`, `ExportDomain`, `ImportDocumentAmendmentImage`, `ImportDocumentAmendmentText`, `ImportDocumentImage`, `ImportDocumentText`, `Optimize`, `RemoveClassifier`, `RemoveDeveloper`, `RemoveDocument`, `RemoveDocumentAgreement`, `RemoveDocumentAmendment`, `RemoveDocumentAmendmentImage`, `RemoveDocumentAmendmentText`, `RemoveDocumentAppendix`, `RemoveDocumentApproval`, `RemoveDocumentChild`, `RemoveDocumentDeveloper`, `RemoveDocumentFromFolder`, `RemoveDocumentImage`, `RemoveDocumentKeyword`, `RemoveDocumentPublication`, `RemoveDocumentRef`, `RemoveDocumentReplacedBy`, `RemoveDocumentReplaces`, `RemoveDocumentRespondent`, `RemoveDocumentStatusHistoryItem`, `RemoveDocumentSynonim`, `RemoveDocumentText`, `RemoveFolder`, `RemoveIndex`, `RemoveKeyword`, `RemoveOrganization`, `RemovePublisher`, `RemoveStatus`, `RemoveUserFieldDef`, `RenameClassifier`, `RenameDeveloper`, `RenameFolder`, `RenameIndex`, `RenameOrganization`, `RenamePublisher`, `RenameStatus`, `RenameUserFieldDef`, `SaveDocument`, `SaveFolder`, `SaveUserFieldDef`, `SetDocumentAmendmentChangingDocument`, `SyncDbWithStorage`

**Свойства:**
`RevisionEditor`, `StopOnPDFImportIndexingError`

#### Organization (Объект)
Страница объекта: `NormaCSAPI~Organization.md`

**Свойства:**
`Name`

#### Organizations (Коллекция)
Страница объекта: `NormaCSAPI~Organizations.md`

**Свойства:**
`Count`, `Item`

#### PackageAudit (Объект)
Страница объекта: `NormaCSAPI~PackageAudit.md`

**Методы:**
`CanProcessFile`, `SetFileProcessed`

#### Publication (Объект)
Страница объекта: `NormaCSAPI~Publication.md`

**Свойства:**
`Name`, `Number`, `Year`

#### Publications (Коллекция)
Страница объекта: `NormaCSAPI~Publications.md`

**Свойства:**
`Count`, `Item`

#### Publisher (Объект)
Страница объекта: `NormaCSAPI~Publisher.md`

**Свойства:**
`Name`

#### Publishers (Коллекция)
Страница объекта: `NormaCSAPI~Publishers.md`

**Свойства:**
`Count`, `Item`

#### Recognize (Объект)
Страница объекта: `NormaCSAPI~Recognize.md`

**Методы:**
`Execute`, `Reset`

**Свойства:**
`CacheDocuments`, `CellMode`, `Classifiers`, `DbTypesRe`, `Designation`, `Documents`, `DoNotSearchForDocuments`, `FoundPos`, `Index`, `MatchedDocumentCount`, `MatchedDocumentIndex`, `NextPos`, `Number`, `RegExp`, `SearchApproxIfNoExactMatches`, `SearchExact`, `SearchForTrailingYear`, `Text`, `UseAddinConfiguration`

#### Recognize2 (Объект)
Страница объекта: `NormaCSAPI~Recognize2.md`

**Методы:**
`Execute`, `Reset`

**Свойства:**
`Designation`, `Documents`, `FoundPos`, `Index`, `IsAmbiguousIndex`, `MatchedDocumentIndex`, `NextPos`, `Number`, `Settings`, `Text`

#### Recognize2Pattern (Объект)
Страница объекта: `NormaCSAPI~Recognize2Pattern.md`

**Методы:**
`Clone`, `GetMacroRegExp`, `Test`, `Validate`

**Свойства:**
`BuiltinIndex`, `DummyRegExp`, `DummyTestStr`, `ExpandedRegExp`, `IsActive`, `IsBuiltin`, `LastError`, `LastErrorOffset`, `Name`, `NumberOfCaptureGroups`, `Position`, `RegExp`, `TestStr`

#### Recognize2Patterns (Коллекция)
Страница объекта: `NormaCSAPI~Recognize2Patterns.md`

**Методы:**
`Add`, `AssignTo`, `Has`, `HasActive`, `Normalize`, `Remove`, `RemoveAll`, `Test`

**Свойства:**
`Count`, `Item`, `RecognizeTranslitForMainDbIndexes`, `RegExp`, `TestStr`

#### Recognize2Settings (Объект)
Страница объекта: `NormaCSAPI~Recognize2Settings.md`

**Методы:**
`AssignTo`, `CreateNewPattern`, `CreateNewSettings`, `CreateNewUnambiguousIndex`, `Load`, `ResetToDefaults`, `Save`

**Свойства:**
`CacheFoundDocuments`, `ConsiderCellTextAsDesignation`, `Domains`, `FindDocuments`, `FindDocumentsWithSameYear`, `Path`, `Patterns`, `Selectivity`, `UnambiguousIndexes`

#### Ref (Объект)
Страница объекта: `NormaCSAPI~Ref.md`

**Методы:**
`GetIdRef10`

**Свойства:**
`Comment`, `Document`, `HRef`, `Id`, `Index`, `Name`, `Number`, `RefType`

#### Refs (Коллекция)
Страница объекта: `NormaCSAPI~Refs.md`

**Свойства:**
`Count`, `Item`

#### Replacement (Объект)
Страница объекта: `NormaCSAPI~Replacement.md`

**Свойства:**
`Comment`, `Document`, `Index`, `Number`, `ReplacementType`, `ReplacementTypeDescription`, `Title`

#### Replacements (Коллекция)
Страница объекта: `NormaCSAPI~Replacements.md`

**Свойства:**
`Count`, `Item`

#### Revision (Объект)
Страница объекта: `NormaCSAPI~Revision.md`

**Свойства:**
`Annotation`, `Comment`, `DateFinish`, `DateStart`, `DocumentForMainRevision`, `DocumentForThisRevision`, `Domain`, `Id10`, `IsMain`, `Issued`, `Name`, `Publication`, `Status`, `Type`, `URL`

#### RevisionEditor (Объект)
Страница объекта: `NormaCSAPI~RevisionEditor.md`

**Методы:**
`CreateFutureRevision`, `CreateMainRevision`, `CreatePastRevision`, `RemoveRevision`, `TurnFutureRevisionIntoMainRevision`, `UpdateRevision`

#### Revisions (Коллекция)
Страница объекта: `NormaCSAPI~Revisions.md`

**Свойства:**
`Count`, `Item`

#### SetlinkLogger (Объект)
Страница объекта: `NormaCSAPI~SetlinkLogger.md`

**Методы:**
`GetLastSessionId`, `GetLogAsHtml`, `GetLogAsXml`, `GetPath`, `GetSummaryAsXml`, `HasLog`, `IsAnalysisOnly`, `LogOperation`, `StartSession`, `StartSessionForAnalysis`

#### Status (Объект)
Страница объекта: `NormaCSAPI~Status.md`

**Свойства:**
`Comment`, `DisplayName`, `Domain`, `GroupId`, `GroupName`, `Id`, `Name`

#### Statuses (Коллекция)
Страница объекта: `NormaCSAPI~Statuses.md`

**Свойства:**
`Count`, `Item`

#### StatusHistory (Коллекция)
Страница объекта: `NormaCSAPI~StatusHistory.md`

**Свойства:**
`Count`, `Item`

#### StatusHistoryItem (Объект)
Страница объекта: `NormaCSAPI~StatusHistoryItem.md`

**Свойства:**
`Comment`, `DateFinish`, `DateStart`, `IsMain`, `Status`

#### Synonim (Объект)
Страница объекта: `NormaCSAPI~Synonim.md`

**Свойства:**
`Designation`, `Index`, `IsMain`, `Number`

#### Synonims (Коллекция)
Страница объекта: `NormaCSAPI~Synonims.md`

**Свойства:**
`Count`, `Item`

#### UnambiguousIndex (Объект)
Страница объекта: `NormaCSAPI~UnambiguousIndex.md`

**Методы:**
`Clone`, `GetMacroRegExp`, `Test`, `Validate`

**Свойства:**
`BuiltinIndex`, `DummyRegExp`, `DummyTestStr`, `ExpandedRegExp`, `IsActive`, `IsBuiltin`, `LastError`, `LastErrorOffset`, `Name`, `NumberOfCaptureGroups`, `Position`, `RegExp`, `TestStr`

#### UnambiguousIndexes (Коллекция)
Страница объекта: `NormaCSAPI~UnambiguousIndexes.md`

**Методы:**
`Add`, `AssignTo`, `Has`, `HasActive`, `IsMatched`, `Normalize`, `Remove`, `RemoveAll`, `Test`

**Свойства:**
`Count`, `Item`, `RegExp`, `TestStr`

#### UserDefinedAction (Объект)
Страница объекта: `NormaCSAPI~UserDefinedAction.md`

**Свойства:**
`Command`, `Description`, `IconFilePath`, `IconIndex`, `IsDocumentToolbar`, `IsHidden`, `Name`, `Seq`

#### UserDefinedActions (Коллекция)
Страница объекта: `NormaCSAPI~UserDefinedActions.md`

**Методы:**
`Add`, `Clear`, `CreateAction`, `ReadForAllUsers`, `ReadForCurrentUser`, `ReadForCurrentUserOrForAllUsers`, `Remove`, `SaveForAllUsers`, `SaveForAllUsersOrForCurrentUser`, `SaveForCurrentUser`

**Свойства:**
`Count`, `Item`

#### UserField (Объект)
Страница объекта: `NormaCSAPI~UserField.md`

**Свойства:**
`Name`, `Value`

#### UserFieldDef (Объект)
Страница объекта: `NormaCSAPI~UserFieldDef.md`

**Свойства:**
`Comment`, `GroupName`, `Length`, `Name`, `Type`

#### UserFieldDefs (Коллекция)
Страница объекта: `NormaCSAPI~UserFieldDefs.md`

**Свойства:**
`Count`, `Item`

#### UserFields (Коллекция)
Страница объекта: `NormaCSAPI~UserFields.md`

**Свойства:**
`Count`, `Item`

#### WantRefinementIndex (Объект)
Страница объекта: `NormaCSAPI~WantRefinementIndex.md`

**Методы:**
`Clone`, `GetMacroRegExp`, `Test`, `Validate`

**Свойства:**
`BuiltinIndex`, `DummyRegExp`, `DummyTestStr`, `ExpandedRegExp`, `IsActive`, `IsBuiltin`, `LastError`, `LastErrorOffset`, `Name`, `NumberOfCaptureGroups`, `Position`, `RegExp`, `TestStr`

#### WantRefinementIndexes (Коллекция)
Страница объекта: `NormaCSAPI~WantRefinementIndexes.md`

**Методы:**
`Add`, `AssignTo`, `Has`, `HasActive`, `Normalize`, `Remove`, `RemoveAll`, `Test`

**Свойства:**
`Count`, `Item`, `RegExp`, `TestStr`

### Перечисления

- `NormaCSAddinHelperColorIndex` → `NormaCSAPI~Enumerations~NormaCSAddinHelperColorIndex_EN.md`
- `NormaCSBuiltinRecognizePatterns` → `NormaCSAPI~Enumerations~NormaCSBuiltinRecognizePatterns_EN.md`
- `NormaCSDateSpanMeasureType` → `NormaCSAPI~Enumerations~NormaCSDateSpanMeasureType_EN.md`
- `NormaCSDocumentDetails` → `NormaCSAPI~Enumerations~NormaCSDocumentDetails_EN.md`
- `NormaCSDocumentImageFormat` → `NormaCSAPI~Enumerations~NormaCSDocumentImageFormat_EN.md`
- `NormaCSDocumentRestrictions` → `NormaCSAPI~Enumerations~NormaCSDocumentRestrictions_EN.md`
- `NormaCSDocumentSearchSelectivity` → `NormaCSAPI~Enumerations~NormaCSDocumentSearchSelectivity_EN.md`
- `NormaCSDocumentTextFormat` → `NormaCSAPI~Enumerations~NormaCSDocumentTextFormat_EN.md`
- `NormaCSEventType` → `NormaCSAPI~Enumerations~NormaCSEventType_EN.md`
- `NormaCSFindActionIfLimitExceded` → `NormaCSAPI~Enumerations~NormaCSFindActionIfLimitExceded_EN.md`
- `NormaCSFindByDesignationMode` → `NormaCSAPI~Enumerations~NormaCSFindByDesignationMode_EN.md`
- `NormaCSFindByTextMode` → `NormaCSAPI~Enumerations~NormaCSFindByTextMode_EN.md`
- `NormaCSFindByTitleMode` → `NormaCSAPI~Enumerations~NormaCSFindByTitleMode_EN.md`
- `NormaCSMatchStringMode` → `NormaCSAPI~Enumerations~NormaCSMatchStringMode_EN.md`
- `NormaCSOptimizeActions` → `NormaCSAPI~Enumerations~NormaCSOptimizeActions_EN.md`
- `NormaCSRefType` → `NormaCSAPI~Enumerations~NormaCSRefType_EN.md`
- `NormaCSReplacementCompleteness` → `NormaCSAPI~Enumerations~NormaCSReplacementCompleteness_EN.md`
- `NormaCSReplacementObligatoriness` → `NormaCSAPI~Enumerations~NormaCSReplacementObligatoriness_EN.md`
- `NormaCSReplacementType` → `NormaCSAPI~Enumerations~NormaCSReplacementType_EN.md`
- `NormaCSRevisionType` → `NormaCSAPI~Enumerations~NormaCSRevisionType_EN.md`
- `NormaCSSetlinkLogOperation` → `NormaCSAPI~Enumerations~NormaCSSetlinkLogOperation_EN.md`
- `NormaCSSetlinkLogReason` → `NormaCSAPI~Enumerations~NormaCSSetlinkLogReason_EN.md`
- `NormaCSSetlinkToolConfirmResult` → `NormaCSAPI~Enumerations~NormaCSSetlinkToolConfirmResult_EN.md`
- `NormaCSSetlinkToolPostParseAction` → `NormaCSAPI~Enumerations~NormaCSSetlinkToolPostParseAction_EN.md`
- `NormaCSSetlinkToolSelectivity` → `NormaCSAPI~Enumerations~NormaCSSetlinkToolSelectivity_EN.md`
- `NormaCSStatusGroups` → `NormaCSAPI~Enumerations~NormaCSStatusGroups_EN.md`
- `NormaCSURLType` → `NormaCSAPI~Enumerations~NormaCSURLType_EN.md`
- `NormaCSUserFieldType` → `NormaCSAPI~Enumerations~NormaCSUserFieldType_EN.md`

## Библиотека типов NormaCS API Dlg
_Описание библиотеки: `NormaCSAPI_Dialogs_P.md`_

### Объекты и коллекции

#### About (Объект)
Страница объекта: `NormaCSAPI_Dialogs~About.md`

**Методы:**
`ShowModal`, `ShowModal2`

#### Card (Объект)
Страница объекта: `NormaCSAPI_Dialogs~Card.md`

**Методы:**
`ShowModal`

#### Find (Объект)
Страница объекта: `NormaCSAPI_Dialogs~Find.md`

**Методы:**
`ClearResults`, `Destroy`, `Hide`, `Search`, `Show`

**Свойства:**
`ApplyButton2Caption`, `ApplyButton2Enabled`, `ApplyButton2LastClickTimeStr`, `ApplyButton2Visible`, `ApplyButtonCaption`, `ApplyButtonEnabled`, `ApplyButtonLastClickTimeStr`, `ApplyButtonVisible`, `Caption`, `Created`, `Locked`, `SearchType`, `SelectedDocumentUrl`, `Settings`, `TextToSearch`, `Topmost`, `Visible`

**События:**
`ApplyButton2Clicked Событие`, `ApplyButtonClicked Событие`

#### FindSettings (Объект)
Страница объекта: `NormaCSAPI_Dialogs~FindSettings.md`

**Методы:**
`ShowModal`

#### RecognizeSettings (Объект)
Страница объекта: `NormaCSAPI_Dialogs~RecognizeSettings.md`

**Методы:**
`ShowModal`, `ShowModal2`

#### SelectDocumentForText (Объект)
Страница объекта: `NormaCSAPI_Dialogs~SelectDocumentForText.md`

**Методы:**
`ShowModal`

**Свойства:**
`ApplyAllButtonCaption`, `ApplyAllButtonHint`, `ApplyAllButtonVisible`, `ApplyButtonCaption`, `ApplyButtonHint`, `ApplyButtonVisible`, `Caption`, `DialogResult`, `Documents`, `FixActivationIssueBySimulateMouseClick`, `HelpButtonCaption`, `HelpButtonVisible`, `MarkedAreaEnd`, `MarkedAreaStart`, `SelectedAreaEnd`, `SelectedAreaStart`, `SelectedDocumentIndex`, `SkipButtonCaption`, `SkipButtonHint`, `SkipButtonVisible`, `Text`

**События:**
`ListItemSelected Событие`

#### SetlinkReport (Объект)
Страница объекта: `NormaCSAPI_Dialogs~SetlinkReport.md`

**Методы:**
`Create`, `Destroy`, `Hide`, `Show`

**Свойства:**
`Created`, `SelectedItemPosition`, `SelectedItemText`, `Visible`

**События:**
`DialogClosed Событие`, `ListItemSelected Событие`

#### SetlinkReportSummary (Объект)
Страница объекта: `NormaCSAPI_Dialogs~SetlinkReportSummary.md`

**Методы:**
`ShowModal`

#### VerifyLinks (Объект)
Страница объекта: `NormaCSAPI_Dialogs~VerifyLinks.md`

**Методы:**
`AddLink`, `ClearLinks`, `Create`, `Destroy`, `Hide`, `Refresh`, `Show`

**Свойства:**
`Created`, `DocumentPath`, `HighlightButtonVisible`, `ProblemItemsPositions`, `SelectedItemPosition`, `SelectedItemText`, `Visible`

**События:**
`DialogClosed Событие`, `HighlightProblemLinksClicked Событие`, `ListItemSelected Событие`, `RefreshClicked Событие`, `UnHighlightProblemLinksClicked Событие`

### Перечисления

- `NormaCSDialogsSearchType` → `NormaCSAPI_Dialogs~Enumerations~NormaCSDialogsSearchType_EN.md`
- `NormaCSDialogsSelectDocumentResultType` → `NormaCSAPI_Dialogs~Enumerations~NormaCSDialogsSelectDocumentResultType_EN.md`


---

## Примечание для ассистента

- Если в задаче упоминаются сущности, которых **нет в этом индексе**, — сообщи пользователю, что такой объект/метод/свойство в NormaCS API не задокументирован, и не придумывай его.
- Все методы-свойства возвращают объекты/коллекции из этой же библиотеки. При разборе цепочки (например `Document.Amendments.Item(0).ChangingDocument`) сверяй типы по индексу.
- Для генерации кода допустимы: **C# / .NET через COM Interop**, **Delphi / Pascal через IDispatch**, **VBA / VB6**, **Python через `pywin32`**. Имена объектов, методов и свойств **одинаковы во всех языках**.
- Флаги и константы берутся из `<Lib>~Enumerations~*_EN.md`.
