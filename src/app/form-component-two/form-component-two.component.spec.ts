import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentTwoComponent } from './form-component-two.component';

describe('FormComponentTwoComponent', () => {
  let component: FormComponentTwoComponent;
  let fixture: ComponentFixture<FormComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
