export interface ColumnForImport<T> {
  key?: string;
  fromCell?: (value: any, row: any[]) => any;
  optional?: boolean;
}

export interface ColumnForExport<T> {
  title: string;
  toCell: Selector<T>;
}

export type EntityFactory<T> = (row: any[], columns: ColumnForImport<T>[]) => T;

interface NaExcelOptions<T> {
  exportMeta?: {
    filename?: string
    columns: ColumnForExport<T>[]
  };
  importMeta?: {
    factory?: EntityFactory<T>
    sheetName?: string
    columns: ColumnForImport<T>[]
  };
}

export function NaExcel<T>(
  options: NaExcelOptions<T>
): <TFunction extends Function>(target: TFunction) => TFunction & ExcelResourceClass<T> {
  return (target: any) => {
    (target as ExcelResourceClass<T>).$excelDefinition
      = new ExcelDefinition<T>(options);
    return target;
  };
}

export interface ExcelResourceClass<T> {
  $excelDefinition: ExcelDefinition<T>;
}

export class ExcelDefinition<T> {
  importColumns?: ColumnForImport<T>[];
  importSheetName?: string;
  factory?: EntityFactory<T>;
  exportColumns?: ColumnForExport<T>[];
  exportFileName?: string;

  constructor(
    options: NaExcelOptions<T>,
  ) {
    if (options.importMeta) {
      this.importColumns = options.importMeta.columns;
      this.importSheetName = options.importMeta.sheetName;
      this.factory = options.importMeta.factory;
    }
    if (options.exportMeta) {
      this.exportColumns = options.exportMeta.columns;
      this.exportFileName = options.exportMeta.filename;
    }
  }

  get importable() {
    return this.importColumns !== undefined;
  }

  get exportable() {
    return this.exportColumns !== undefined;
  }
}

export type Selector<T> = (keyof T) | SelectorFn<T>;

type SelectorFn<T> = (data: T) => any | null | undefined;
