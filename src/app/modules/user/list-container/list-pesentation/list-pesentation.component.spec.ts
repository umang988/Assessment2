import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPesentationComponent } from './list-pesentation.component';

describe('ListPesentationComponent', () => {
  let component: ListPesentationComponent;
  let fixture: ComponentFixture<ListPesentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPesentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPesentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
