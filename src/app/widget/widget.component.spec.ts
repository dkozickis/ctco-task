import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { FormFieldComponent } from './section/form-fields/form-field.component';
import { AppComponent } from '../app.component';
import { ControlComponent } from '../control/control.component';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, WidgetComponent, SectionComponent, FormFieldComponent, ControlComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;

    component.widgetData = JSON.parse('{\n' +
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

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
