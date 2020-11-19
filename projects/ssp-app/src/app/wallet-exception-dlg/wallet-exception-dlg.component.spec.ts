import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletExceptionDlgComponent } from './wallet-exception-dlg.component';

describe('WalletExceptionDlgComponent', () => {
  let component: WalletExceptionDlgComponent;
  let fixture: ComponentFixture<WalletExceptionDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletExceptionDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletExceptionDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
