import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapConfirmComponent } from './swap-confirm.component';

describe('SwapConfirmComponent', () => {
  let component: SwapConfirmComponent;
  let fixture: ComponentFixture<SwapConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
