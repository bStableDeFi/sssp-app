import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntallWalletDlgComponent } from './intall-wallet-dlg.component';

describe('IntallWalletDlgComponent', () => {
  let component: IntallWalletDlgComponent;
  let fixture: ComponentFixture<IntallWalletDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntallWalletDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntallWalletDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
