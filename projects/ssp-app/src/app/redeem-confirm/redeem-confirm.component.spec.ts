import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemConfirmComponent } from './redeem-confirm.component';

describe('RedeemConfirmComponent', () => {
  let component: RedeemConfirmComponent;
  let fixture: ComponentFixture<RedeemConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
