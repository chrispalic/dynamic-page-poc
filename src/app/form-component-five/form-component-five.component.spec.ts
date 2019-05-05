import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentFiveComponent } from './form-component-five.component';

describe('FormComponentFiveComponent', () => {
  let component: FormComponentFiveComponent;
  let fixture: ComponentFixture<FormComponentFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
