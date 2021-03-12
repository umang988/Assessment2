import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPesentationComponent } from './form-pesentation.component';

describe('FormPesentationComponent', () => {
  let component: FormPesentationComponent;
  let fixture: ComponentFixture<FormPesentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPesentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPesentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
