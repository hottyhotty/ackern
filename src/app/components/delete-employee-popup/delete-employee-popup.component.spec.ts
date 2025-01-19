import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeePopupComponent } from './delete-employee-popup.component';

describe('DeleteEmployeePopupComponent', () => {
  let component: DeleteEmployeePopupComponent;
  let fixture: ComponentFixture<DeleteEmployeePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
