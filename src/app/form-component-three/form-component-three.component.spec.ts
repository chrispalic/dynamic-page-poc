import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentThreeComponent } from './form-component-three.component';

describe('FormComponentThreeComponent', () => {
  let component: FormComponentThreeComponent;
  let fixture: ComponentFixture<FormComponentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
