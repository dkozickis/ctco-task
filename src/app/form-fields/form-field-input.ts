import {FormFieldBase} from './form-field-base';

export class FormFieldInput extends FormFieldBase<string> {
  controlType = 'input';

  constructor(options: {} = {}) {
    super(options);
  }
}
