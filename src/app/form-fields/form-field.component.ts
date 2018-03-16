import {Component, Input, OnInit} from '@angular/core';
import {FormFieldBase} from './form-field-base';
import {FormGroup} from '@angular/forms';
import getSymbolFromCurrency = require('currency-symbol-map/currency-symbol-map.js');

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.style.scss']
})
export class FormFieldComponent {
  @Input() field: FormFieldBase<any>;
  @Input() form: FormGroup;

  calculateStep(precision: number) {
    return 1 / (10 ** precision);
  }

  getCurrencySymbol(currency: string) {
    return getSymbolFromCurrency(currency);
  }
}
