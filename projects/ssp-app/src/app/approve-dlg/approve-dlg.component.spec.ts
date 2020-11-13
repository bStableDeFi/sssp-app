import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDlgComponent } from './approve-dlg.component';

describe('ApproveDlgComponent', () => {
  let component: ApproveDlgComponent;
  let fixture: ComponentFixture<ApproveDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
