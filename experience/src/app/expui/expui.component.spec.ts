import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpuiComponent } from './expui.component';

describe('ExpuiComponent', () => {
  let component: ExpuiComponent;
  let fixture: ComponentFixture<ExpuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
