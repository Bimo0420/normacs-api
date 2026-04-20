# VB Script

## Исходный текст

rz.RegExp = "((?-i)" & vbCrLf & _ " [А-Я]" & vbCrLf & _ " [А-Яа-я]{1,30}" & vbCrLf & _ " (?:[\x20\xA0]*[-\x96\x97\x1e\/][\x20\xA0]*)?" & vbCrLf & _ " (?:[А-Яа-я\/\x20\xA0]{1,30})?" & vbCrLf & _ ")" & vbCrLf & _ "(?:[\x20\xA0]+|(?:[\x20\xA0]*[-\x96\x97\x1e][\x20\xA0]*)(?=\d))" & vbCrLf & _ "(" & vbCrLf & _ " (?:" & vbCrLf & _ " \d+" & vbCrLf & _ " |" & vbCrLf & _ " (?:[A-Яa-я]{1,10}(?=[\x20\xA0]*[-\d\x96\x97\x1e\.\:][\x20\xA0]*))" & vbCrLf & _ " |" & vbCrLf & _ " [IVX]+" & vbCrLf & _ " |" & vbCrLf & _ " (?:[\x20\xA0]*[-\x96\x97\x1e\.\:][\x20\xA0]*)" & vbCrLf & _ " ){0,10}" & vbCrLf & _ " \d+" & vbCrLf & _ " (?:[\x20\xA0]*[-\x96\x97\x1e\.\:\/][\x20\xA0]*\d+)*" & vbCrLf & _ " \**" & vbCrLf & _ ")"
