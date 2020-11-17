import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlpSlippageConfirmComponent } from './addlp-slippage-confirm.component';

describe('AddlpSlippageConfirmComponent', () => {
  let component: AddlpSlippageConfirmComponent;
  let fixture: ComponentFixture<AddlpSlippageConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlpSlippageConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlpSlippageConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
