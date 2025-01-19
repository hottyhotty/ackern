import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeViewComponent } from './update-employee-view.component';

describe('UpdateEmployeeViewComponent', () => {
  let component: UpdateEmployeeViewComponent;
  let fixture: ComponentFixture<UpdateEmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
