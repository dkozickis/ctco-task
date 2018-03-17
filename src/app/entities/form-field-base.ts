/**
 * Base class for form field storage.
 * Generic so that we can have 'value' as generic as well,
 * as it cann be 'string | number', and we wan't same in same out, I think...
 */
export abstract class FormFieldBase<T> {
  label: string;
  normalizedLabel: string;
  value: T;
  required: boolean;
  controlType: string;

  constructor(options: {
    value?: T,
    label?: string,
    required?: boolean,
  } = {}) {
    this.label = options.label;
    this.normalizedLabel = this.label.replace(/[^a-z0-9]+/gi, '');
    this.value = options.value;
    // Bang Bang you're boolean
    this.required = !!options.required;
  }
}
