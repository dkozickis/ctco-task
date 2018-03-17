import { FormFieldBase } from '../form-fields/form-field-base';

export class FormDataClass {
  widgets: WidgetClass[];
}

export class WidgetClass {
  id: number;
  name: string;
  type: string;
  items: SectionClass[];
}

export class SectionClass {
  type: string;
  header: string;
  columns: number;
  items: FormFieldBase<any>[];
}
