import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentFourComponent } from './form-component-four.component';

describe('FormComponentFourComponent', () => {
  let component: FormComponentFourComponent;
  let fixture: ComponentFixture<FormComponentFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
