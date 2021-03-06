import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormFieldComponent } from './widget/section/form-fields/form-field.component';
import { WidgetComponent } from './widget/widget.component';
import { SectionComponent } from './widget/section/section.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from './control/control.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    SectionComponent,
    FormFieldComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
