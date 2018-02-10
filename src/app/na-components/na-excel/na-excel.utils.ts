import { ColumnForExport, EntityFactory, ExcelDefinition, ExcelResourceClass, Selector } from './na-excel.decorator';

function select<T>(input: T, selector: Selector<T>) {
  if (typeof  selector === 'string') return input[selector];
  return (selector as (data: T) => any)(input);
}

export function getExcelDefinitionByItem(item: any) {
  const resourceClass = (item as any).constructor as ExcelResourceClass<any>;
  const res = resourceClass.$excelDefinition;
  if (!res)
    throw new Error('missing excel definition, ' +
      'have you put @NaExcel decorator on the class?');
  else
    return res;
}

export function getExcelDefinitionByClass<T>(
  clazz: new(dto?: any) => T
): ExcelDefinition<T> {
  const resourceClass = clazz as any as ExcelResourceClass<T>;
  const res = resourceClass.$excelDefinition;
  if (!res)
    throw new Error('missing excel definition, ' +
      'have you put @NaExcel decorator on the class?');
  else
    return res;
}

export function getExportRows<T>(items: T[], columns: ColumnForExport<T>[]) {
  const titleRow = columns.map(e => e.title);
  const dataRows = items.map(item => {
    return columns.map(column => {
      return select(item, column.toCell);
    });
  });
  return [titleRow, ...dataRows];
}

export function getDefaultEntityFactory<T>(
  clazz: new (dto?: any) => T
): EntityFactory<T> {
  return (row, columns) => {
    const meta = columns.reduce((acc, curr, index) => {
      if (!curr.key) return acc;
      const value = curr.fromCell
        ? curr.fromCell(row[index], row)
        : row[index];
      return { ...acc, [curr.key]: value };
    }, {});
    return new clazz(meta);
  };
}
