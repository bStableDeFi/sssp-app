import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsupportedNetworkComponent } from './unsupported-network.component';

describe('UnsupportedNetworkComponent', () => {
  let component: UnsupportedNetworkComponent;
  let fixture: ComponentFixture<UnsupportedNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsupportedNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsupportedNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
