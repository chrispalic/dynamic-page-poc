import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentOneComponent } from './form-component-one.component';

describe('FormComponentOneComponent', () => {
  let component: FormComponentOneComponent;
  let fixture: ComponentFixture<FormComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
