import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapCompComponent } from './swap-comp.component';

describe('SwapCompComponent', () => {
  let component: SwapCompComponent;
  let fixture: ComponentFixture<SwapCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
