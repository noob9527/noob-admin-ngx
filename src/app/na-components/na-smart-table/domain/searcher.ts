export interface ColumnSearcher {
  key: string;
  icon?: string;
  type: 'text' | 'checkbox';
}

interface TextColumnSearcher extends ColumnSearcher {
  placeholder?: string;
}

interface CheckboxColumnSearcher extends ColumnSearcher {
  options: CheckBoxOption[];
}

export function isTextColumnSearcher(searcher: any): searcher is TextColumnSearcher {
  return searcher.type === 'text';
}

export function isCheckboxColumnSearcher(searcher: any): searcher is CheckboxColumnSearcher {
  return searcher.type === 'checkbox';
}

export class ColumnSearcherFactory {
  private constructor() {
  }

  static text(meta: {
    key?: string,
    placeholder?: string,
    icon?: string,
  } = {}) {
    return new TextColumnSearcherImpl(meta);
  }

  static checkbox(meta: {
    key?: string,
    options: CheckBoxOption[],
    icon?: string,
  }): CheckboxColumnSearcher {
    return new CheckBoxColumnSearcherImpl(meta);
  }
}

export interface SmartTableColumnSearcher extends ColumnSearcher {
  value: Maybe<any>;
}

class TextColumnSearcherImpl
  implements TextColumnSearcher, SmartTableColumnSearcher {

  key: string;
  type: 'text' = 'text';
  value: Maybe<any>;

  constructor(meta: any) {
    Object.assign(
      this,
      {
        icon: 'anticon anticon-search ant-table-filter-icon',
      },
      meta,
    );
  }
}

class CheckBoxColumnSearcherImpl
  implements CheckboxColumnSearcher, SmartTableColumnSearcher {

  options: CheckBoxOption[];
  key: string;
  type: 'checkbox' = 'checkbox';

  constructor(meta: any) {
    Object.assign(
      this,
      {
        icon: 'anticon anticon-filter',
      },
      meta,
      {
        options: [...meta.options],
      },
    );
  }

  get value() {
    return this.options
      .filter(e => e.checked)
      .map(e => e.value);
  }
  set value(values: Maybe<any[]>) {
    if (!values) values = [];
    this.options
      .forEach(e => e.checked = (values as any[]).includes(e.value));
  }
}

interface CheckBoxOption {
  label: string;
  value: any;
  checked?: boolean;
}
