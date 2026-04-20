# VB Script

## Исходный текст

app.Find.CreateDesignationCache designations = Array(_ "РД-22-01-97", _ "ГОСТ 18227", _ "ГОСТ 8595-83*", _ "НПБ 157-97", _ "НПБ 157", _ "ВСН 13-77", _ "ВСН 39.1-8-008", _ "ВСН 39.1-8-008-2002" _ ) For Each designation In designations app.Find.Reset app.Find.Designation = designation app.Find.Execute For Each item In app.Find.Documents 'assert 2, item.Title <> "" 'assert 3, item.Domain <> "normacs.ru" Or Not item.IsActual Or item.HasText Or item.HasImage Next Next
