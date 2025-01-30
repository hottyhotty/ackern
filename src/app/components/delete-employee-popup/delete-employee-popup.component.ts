import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from "../../Service/http.service";
import { EmployeeModel } from "../../Model/EmployeeModel";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-delete-employee-popup',
  templateUrl: './delete-employee-popup.component.html',
  styleUrls: ['./delete-employee-popup.component.css']
})
export class DeleteEmployeePopupComponent {
  constructor(
    private dialogRef: MatDialogRef<DeleteEmployeePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public EmployeeModel: EmployeeModel,
    private router: Router,
    private httpService: HttpService
  ) { }






  async deleteEmployee() {
    try {
      const data = await firstValueFrom(this.httpService.deleteEmployeeByID(this.EmployeeModel.id!));
      this.dialogRef.close(true);
      this.router.navigate(['/main-employee-view']);

    } catch (error) {
      console.log('Error while deleting Employee: ', error);
    }
  }



  closeDialog() {
    this.dialogRef.close(false);
  }

  NavigationForward() {
    this.deleteEmployee();
    this.router.navigate(['/main-employee-view'])
  }
}

