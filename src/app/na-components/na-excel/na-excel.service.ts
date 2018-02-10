import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { XlsxExportOptions } from './na-excel.domain';
import {
  getDefaultEntityFactory, getExcelDefinitionByClass, getExcelDefinitionByItem,
  getExportRows
} from './na-excel.utils';

@Injectable()
export class NaExcelService {

  constructor() {
  }

  import(file: File): Promise<{ [index: string]: any[][] }> {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const wb = XLSX.read(e.target.result, { type: 'binary' });
        resolve(this.read(wb));
      };
      reader.readAsBinaryString(file);
    });
  }

  private read(wb: XLSX.WorkBook): { [key: string]: any[][] } {
    const ret: any = {};
    wb.SheetNames.forEach(name => {
      const sheet: XLSX.WorkSheet = wb.Sheets[name];
      ret[name] = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    });
    return ret;
  }

  export(opt: XlsxExportOptions) {
    const book = XLSX.utils.book_new();
    opt.sheets.forEach((e, index) => {
      const sheet = XLSX.utils.aoa_to_sheet(e.data);
      XLSX.utils.book_append_sheet(book, sheet, e.name || `sheet${index + 1}`);
    });
    const out = XLSX.write(book, {
      bookType: 'xlsx',
      type: 'array',
    });
    saveAs(
      new Blob([out], { type: 'application/octet-stream' }),
      opt.filename || 'export.xlsx'
    );
  }

  exportItems(items: any[]) {
    if (!items.length)
      throw new Error('must have at least one item');
    const def = getExcelDefinitionByItem(items[0]);
    if (!def.exportable)
      throw new Error('resource is not exportable');
    const columns = def.exportColumns!;
    const data = getExportRows(items, columns);
    this.export({
      filename: def.exportFileName,
      sheets: [{ data }]
    });
  }

  importItems<T>(file: File, clazz: Function): Promise<T[]> {
    const targetClass = clazz as new(dto?: any) => T;
    const def = getExcelDefinitionByClass(targetClass);
    if (!def.importable)
      throw new Error('resource is not exportable');

    return this.import(file)
      .then(sheets => {
        if (def.importSheetName) {
          if (!Object.keys(sheets).includes(def.importSheetName)) {
            throw new Error(`missing sheetName:${def.importSheetName}`);
          }
        }
        const sheet = def.importSheetName
          ? sheets[def.importSheetName]
          : sheets[Object.keys(sheets)[0]];

        const factory = def.factory || getDefaultEntityFactory(targetClass);
        const res = sheet
          .filter((e, i) => i) // skip title row
          .map(row => factory(row, def.importColumns!));
        return res as T[];
      });
  }

  isExportable(item: any) {
    try {
      const def = getExcelDefinitionByItem(item);
      return def.exportable;
    } catch (e) {
      return false;
    }
  }

  isImportable(clazz: Function) {
    try {
      const def = getExcelDefinitionByClass(clazz as any);
      return def.importable;
    } catch (e) {
      return false;
    }
  }

}

