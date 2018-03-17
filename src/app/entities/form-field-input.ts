import { FormFieldBase } from './form-field-base';

/**
 * Boring input typel
 */
export class FormFieldInput extends FormFieldBase<string> {

  constructor(options: {} = {}) {
    super(options);
    this.controlType = 'input';
  }
}
