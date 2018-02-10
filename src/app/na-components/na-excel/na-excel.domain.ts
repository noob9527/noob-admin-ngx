import { WritingOptions } from 'xlsx';

export interface XlsxExportOptions {
  sheets: XlsxExportSheet[];
  /** save file name, default: `export.xlsx` */
  filename?: string;
  opts?: WritingOptions;
}

export interface XlsxExportSheet {
  /** sheet name */
  name?: string;
  data: any[][];
}

