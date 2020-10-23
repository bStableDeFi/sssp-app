import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseWalletDlgComponent } from './choose-wallet-dlg.component';

describe('ChooseWalletDlgComponent', () => {
  let component: ChooseWalletDlgComponent;
  let fixture: ComponentFixture<ChooseWalletDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseWalletDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseWalletDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
