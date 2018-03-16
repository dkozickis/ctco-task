import { Component, Input } from '@angular/core';
import { FormFieldBase } from './form-field-base';
import { FormGroup } from '@angular/forms';
import * as getSymbolFromCurrency from 'currency-symbol-map/currency-symbol-map.js';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.style.scss']
})
export class FormFieldComponent {
  @Input() field: FormFieldBase<any>;
  @Input() form: FormGroup;

  /**
   * Calculates step parameter for number fields
   * @param {number} precision
   * @returns {number}
   */
  calculateStep(precision: number) {
    return 1 / (10 ** precision);
  }

  /**
   * Converting USD to $, EUR to Euro sign etc.
   * @param {string} currency
   */
  getCurrencySymbol(currency: string) {
    return getSymbolFromCurrency(currency);
  }
}
