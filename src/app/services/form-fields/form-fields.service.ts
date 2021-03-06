import { Injectable } from '@angular/core';
import { FormFieldInput } from '../../entities/form-field-input';
import { FormFieldCurrency } from '../../entities/form-field-currency';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { keyBy } from 'lodash';
import { FormFieldBase } from '../../entities/form-field-base';
import { SectionClass } from '../../entities/form-data.class';

@Injectable()
export class FormFieldsService {
  formFields: any[] = [];
  formControlsArray: any = {};
  form: FormGroup;

  prepareFormFields(sections: any[]) {
    /**
     * Process one section at a time
     */
    sections.forEach((section: SectionClass) => {
      const sectionNameCamelized = this.camelize(section.header);

      /**
       * We're going over "items" in our "section" array, doing couple things:
       *    1. Create FormFieldBase object via createFormField()
       *    2. Put it into this.formFields array - needed for next iteration
       *    3. Change current "iteM' in SectionClass to typehinted (input, currency) FormField, just because we can
       */
      this.formFields[sectionNameCamelized] = section.items.map((field, index, sectionArray) => {
        const formField = this.createFormField(field);
        sectionArray[index] = formField;
        return formField;
      });

      /**
       * Push Angular FormControl 's to array.
       * While not part of the task, I wanted to have model <-> view binding working, so had to create a FormGroup
       */
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

    /**
     * keyBy is a lodash function.
     * I wanted sections to have keys according to the camelized name of the section
     */
    return {
      'sections': (<SectionClass[]>keyBy(sections, section => this.camelize(section.header))),
      'form': this.form
    };
  }

  /**
   * Creates form field based on 'options' provided.
   *
   * @param options
   * @returns {FormFieldBase<any>}
   */
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
   * Creates Angular FormControl based on FormFieldBase<any> input
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

  /**
   * Camelize input string
   *
   * @param text
   * @param {string} separator
   * @returns {string}
   */
  camelize(text, separator = ' ') {
    const words = text.split(separator);
    return [words[0], words.slice(1).map((word) => this.capitalize(word))].join('');
  }


  /**
   * Capitalize input string
   *
   * @param word
   * @returns {string}
   */
  capitalize(word) {
    return `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`;
  }
}
