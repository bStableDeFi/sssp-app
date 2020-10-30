import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolInfoComponent } from './pool-info.component';

describe('PoolInfoComponent', () => {
  let component: PoolInfoComponent;
  let fixture: ComponentFixture<PoolInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
