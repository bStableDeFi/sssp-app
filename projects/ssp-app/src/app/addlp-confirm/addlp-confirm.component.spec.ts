import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlpConfirmComponent } from './addlp-confirm.component';

describe('AddlpConfirmComponent', () => {
  let component: AddlpConfirmComponent;
  let fixture: ComponentFixture<AddlpConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlpConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlpConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
