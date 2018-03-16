import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {filter} from 'lodash';
import {FormGroup} from '@angular/forms';
import {FormFieldsService} from '../form-fields-service/form-fields.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers: [FormFieldsService]
})
export class WidgetComponent implements OnInit {
  @Input() widgetData;
  @Output() resetWidgetsEvent = new EventEmitter<string>();
  sections: any;
  form: FormGroup;
  sectionKeys: any[];

  constructor(private formFieldsService: FormFieldsService) {
  }

  ngOnInit() {
    this.sections = filter(this.widgetData.items, (item) => item.type === 'section');
    ({sections: this.sections, form: this.form} = this.formFieldsService.prepareFormFields(this.sections));
    this.sectionKeys = Object.keys(this.sections);
  }

  formSubmit() {
    console.log(JSON.stringify(this.form.value));
  }

  askToResetWidgets() {
    this.resetWidgetsEvent.emit('');
  }

}
