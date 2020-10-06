import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddliquidityCompComponent } from './addliquidity-comp.component';

describe('AddliquidityCompComponent', () => {
  let component: AddliquidityCompComponent;
  let fixture: ComponentFixture<AddliquidityCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddliquidityCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddliquidityCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
