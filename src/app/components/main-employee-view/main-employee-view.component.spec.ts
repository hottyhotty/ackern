import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEmployeeViewComponent } from './main-employee-view.component';

describe('MainEmployeeViewComponent', () => {
  let component: MainEmployeeViewComponent;
  let fixture: ComponentFixture<MainEmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEmployeeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
