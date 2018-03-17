import { Component } from '@angular/core';
import { FormDataService } from './services/form-data/form-data.service';
import { filter } from 'lodash';
import { NgForm } from '@angular/forms';
import { FormDataClass, WidgetClass } from './entities/form-data.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FormDataService]
})
export class AppComponent {
  widgets: WidgetClass[];
  loadRequested = false;
  dataLoaded = false;

  /**
   * Loads data from URL, based on URL input
   *
   * @param {NgForm} form
   */
  loadUrlData(form: NgForm) {
    this.loadRequested = true;

    FormDataService.getRemoteJson(form.value.url)
      .then(jsonData => {
        this.filterAndShow(<FormDataClass>jsonData);
      })
      .catch(reason => {
        alert('Data not loading :(');
        this.loadRequested = false;
      });
  }

  /**
   * Parses data from textarea based on raw input
   *
   * @param {NgForm} form
   */
  loadRawData(form: NgForm) {
    this.loadRequested = true;

    try {
      this.filterAndShow(<FormDataClass>FormDataService.processLocalJson(form.value.raw));
    } catch (err) {
      this.loadRequested = false;
      alert('JSON is not valid');
    }
  }

  receiveMessage() {
    this.dataLoaded = false;
    this.loadRequested = false;
  }

  /**
   *
   * @param {FormDataClass} formData
   */
  private filterAndShow(formData: FormDataClass) {
    this.widgets = filter(formData.widgets, (widget: WidgetClass) => widget.type === 'form');
    this.dataLoaded = true;
  }
}
