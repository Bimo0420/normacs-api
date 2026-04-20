# Optimize

## Описание

Выполняет уплотнение, переиндексацию и удаление пустых папок базы данных домена. По умолчанию только уплотнение

## Возвращаемое значение

Нет.

## Синтаксис

*object***.Optimize** [*Actions*]

Метод Optimize состоит из:

| Часть | Описание |
| --- | --- |
| объект | Объект типа [NormaCSPro](NormaCSAPI~NormaCSPro.md). |
| Actions | Необязательный. Значение Variant. Комбинация из одного или нескольких значений [NormaCSOptimizeActions](NormaCSAPI~Enumerations~NormaCSOptimizeActions_EN.md). Если этот параметр не указан, то выполняется уплотнение базы данных (ncsOptimizeActionVacuumDatabase). |
