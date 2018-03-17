import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../form-fields/form-field.component';
import { FormFieldsService } from '../form-fields-service/form-fields.service';

import { filter } from 'lodash';
import {SectionClass} from '../form-data/form-data.class';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;
  let ffs: FormFieldsService;
  let sections: any;
  let form: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponent, FormFieldComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    ffs = new FormFieldsService();

    let data = JSON.parse('{\n' +
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
    data = filter(data.items, (item: SectionClass) => item.type === 'section');
    ({sections: sections, form: form} = ffs.prepareFormFields(data));

    component.sectionData = sections.OpportunityDetails;
    component.form = form;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
