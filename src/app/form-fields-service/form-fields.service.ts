import {Inject, Injectable} from '@angular/core';
import {FormFieldInput} from '../form-fields/form-field-input';
import {FormFieldCurrency} from '../form-fields/form-field-currency';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {keyBy} from 'lodash';
import {FormFieldBase} from '../form-fields/form-field-base';

@Injectable()
export class FormFieldsService {
  formFields: any[] = [];
  formControlsArray: any = {};
  form: FormGroup;

  prepareFormFields(sections: any[]) {
    /**
     * Process one section at a time
     */
    sections.forEach((section, sectionIndex, sectionArray) => {
      const sectionNameCamelized = this.camelize(section.header);

      /**
       * We're going over "items" in our "section" array, doing couple things:
       *    1. Create FormFieldBase object via createFormField()
       *    2. Put it into this.formFields array - needed for next iteration
       *    3. Put it into "section" array, under formFields array - needed for further display in section @Component
       */
      sectionArray[sectionIndex]['formFields'] = this.formFields[sectionNameCamelized] = section.items.map((field) => {
        return this.createFormField(field);
      });

      this.formFields[sectionNameCamelized].forEach((element) => {
        const normalizedLabel = element.label.replace(/[^a-z0-9]+/gi, '');
        this.formControlsArray[normalizedLabel] = this.createFormControl(element);
      });

    });

    /**
     * Finally get ourselves a FormGroup
     * @type {FormGroup}
     */
    this.form = new FormGroup(
      this.formControlsArray
    );

    return {
      'sections': keyBy(sections, section => this.camelize(section.header)),
      'form': this.form
    };
  }

  private createFormField(options) {
    switch (options.type) {
      case 'input': {
        return new FormFieldInput(options);
      }
      case 'currency': {
        return new FormFieldCurrency(options);
      }
    }
  }


  /**
   *
   * @param {FormFieldBase<any>} element
   * @returns {FormControl}
   */
  private createFormControl(element: FormFieldBase<any>) {
    let formControl: FormControl;

    if (element.controlType === 'input') {
      formControl = new FormControl(element.value);
    } else if (element.controlType === 'currency') {
      formControl = new FormControl(element.value.toFixed((<FormFieldCurrency>element).precision));
    }

    if (element.required) {
      formControl.validator = Validators.required;
    }

    return formControl;
  }

  capitalize(word) {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
  }

  camelize(text, separator = ' ') {
    const words = text.split(separator);
    return [words[0], words.slice(1).map((word) => this.capitalize(word))].join('');
  }
}
