import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { filter } from 'lodash';
import { FormGroup } from '@angular/forms';
import { FormFieldsService } from '../form-fields-service/form-fields.service';
import { SectionClass, WidgetClass } from '../form-data/form-data.class';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers: [FormFieldsService]
})
export class WidgetComponent implements OnInit {
  @Input() widgetData: WidgetClass;
  @Output() resetWidgetsEvent = new EventEmitter<string>();
  sections: SectionClass[];
  form: FormGroup;
  sectionKeys: any[];

  /**
   * Need to instance FormFieldsService provider
   * @param {FormFieldsService} formFieldsService
   */
  constructor(private formFieldsService: FormFieldsService) {
  }

  ngOnInit() {
    /* Filter sections that are not sections :) */
    this.sections = filter(this.widgetData.items, (item: SectionClass) => item.type === 'section');
    /* Modify sections (add an array of FormFieldBase<any> relevant to section) and get our FormGroup object */
    ({sections: this.sections, form: this.form} = this.formFieldsService.prepareFormFields(this.sections));
    /* Get keys of sections. Because template 'let ... of ...' cannot operate on object :( */
    this.sectionKeys = Object.keys(this.sections);
  }

  /**
   * Simple handler for click on 'Save' button
   */
  formSubmit() {
    console.log(JSON.stringify(this.form.value));
  }

  /**
   * Hander for click on 'Close' button
   */
  askToResetWidgets() {
    this.resetWidgetsEvent.emit('');
  }

}
