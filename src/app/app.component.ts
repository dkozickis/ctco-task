import {Component} from '@angular/core';
import {FormDataService} from './form-data-service/form-data.service';
import {filter} from 'lodash';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormDataService]
})
export class AppComponent {
  widgets: any[];
  loadRequested = false;
  dataLoaded = false;

  loadUrlData(form: NgForm) {
    this.loadRequested = true;

    FormDataService.getRemoteJson(form.value.url)
      .then(jsonData => {
        this.filterAndShow(jsonData);
      })
      .catch(reason => {
        alert('Data not loading :(');
        this.loadRequested = false;
      });
  }

  loadRawData(form: NgForm) {
    this.loadRequested = true;

    try {
      this.filterAndShow(FormDataService.processLocalJson(form.value.raw));
    } catch (err) {
      this.loadRequested = false;
      alert('JSON is not valid');
    }
  }

  private filterAndShow(jsonData) {
    this.widgets = filter(jsonData.widgets, widget => widget.type === 'form');
    this.dataLoaded = true;
  }

  receiveMessage() {
    this.dataLoaded = false;
    this.loadRequested = false;
  }
}
