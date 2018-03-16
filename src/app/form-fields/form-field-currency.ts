import { FormFieldBase } from './form-field-base';

/**
 * Currency Form Field.
 *
 * Has 'symbol' and 'precision' on top of FormFieldBase
 */
export class FormFieldCurrency extends FormFieldBase<number> {
  symbol: string;
  precision: number;

  constructor(options: {} = {}) {
    super(options);
    this.symbol = options['symbol'];
    this.precision = options['precision'] || 0;
    this.controlType = 'currency';
  }
}
