import { FormFieldsService } from './form-fields.service';
import { filter } from 'lodash';
import { FormGroup } from '@angular/forms';

describe('FormFieldsService', () => {
  let ffs: FormFieldsService;
  let data: any;
  beforeEach(() => {
    ffs = new FormFieldsService();
    data = JSON.parse('{\n' +
      '      "id": 1,\n' +
      '      "name": "Blobex Corporation",\n' +
      '      "type": "form",\n' +
      '      "items": [\n' +
      '        {\n' +
      '          "type": "section",\n' +
      '          "header": "Opportunity details",\n' +
      '          "columns": 2,\n' +
      '          "items": [\n' +
      '            {\n' +
      '              "type": "input",\n' +
      '              "label": "Test One",\n' +
      '              "value": "Acme - 1200 Widgets (Sample)",\n' +
      '              "required": true\n' +
      '            },\n' +
      '            {\n' +
      '              "type": "currency",\n' +
      '              "label": "Test Two",\n' +
      '              "value": 146,\n' +
      '              "symbol": "AED"\n' +
      '            },\n' +
      '            {\n' +
      '              "type": "currency",\n' +
      '              "label": "Test Three",\n' +
      '              "value": 140000,\n' +
      '              "symbol": "EUR",\n' +
      '              "precision": 5\n' +
      '            }\n' +
      '          ]\n' +
      '        }\n' +
      '      ]\n' +
      '    }');
    data = filter(data.items, (item) => item.type === 'section');
  });

  it('should get proper data', function () {
    const prepareFormFields = ffs.prepareFormFields(data);
    console.log(prepareFormFields);
    expect(prepareFormFields).toEqual(jasmine.any(Object));
    expect(prepareFormFields.form).toEqual(jasmine.any(FormGroup));
    expect(prepareFormFields.sections.OpportunityDetails.header).toBe('Opportunity details');
  });
});
