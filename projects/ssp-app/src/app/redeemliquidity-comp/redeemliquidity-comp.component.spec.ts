import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemliquidityCompComponent } from './redeemliquidity-comp.component';

describe('RedeemliquidityCompComponent', () => {
  let component: RedeemliquidityCompComponent;
  let fixture: ComponentFixture<RedeemliquidityCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemliquidityCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemliquidityCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
