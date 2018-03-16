import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormFieldComponent} from './form-fields/form-field.component';
import {WidgetComponent} from './widget/widget.component';
import {SectionComponent} from './section/section.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    WidgetComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
