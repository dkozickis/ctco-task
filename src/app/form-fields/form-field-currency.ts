import {FormFieldBase} from './form-field-base';

export class FormFieldCurrency extends FormFieldBase<number> {
  symbol: string;
  precision: number;

  controlType = 'currency';

  constructor(options: {} = {}) {
    super(options);
    this.symbol = options['symbol'];
    this.precision = options['precision'] || 0;
  }
}
