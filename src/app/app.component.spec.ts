import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './widget/section/section.component';
import { FormFieldComponent } from './widget/section/form-fields/form-field.component';
import { ControlComponent } from './control/control.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ControlComponent,
        WidgetComponent,
        SectionComponent,
        FormFieldComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have loadRequested as falsy`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.loadRequested).toBeFalsy();
  }));
  it('should render button with Process URL text', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Process URL');
  }));
});
