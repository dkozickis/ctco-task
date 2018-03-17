import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent {

  @Output() loadUrlEmit = new EventEmitter<NgForm>();
  @Output() loadRawEmit = new EventEmitter<NgForm>();

  loadUrl(form: NgForm) {
    this.loadUrlEmit.emit(form);
  }

  loadRaw(form: NgForm) {
    this.loadRawEmit.emit(form);
  }


}
