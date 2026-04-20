# VB Script

## Исходный текст

Set app = CreateObject("NormaCS.Application") Set userDomain = app.domains("my.test.ru") Set pro = userDomain.GetNormaCSPro("1") Set ufd = userDomain.UserFieldDefs("Поле1") pro.RenameUserFieldDef ufd, "Поле2"
