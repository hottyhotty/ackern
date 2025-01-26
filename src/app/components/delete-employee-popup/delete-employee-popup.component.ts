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
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private router: Router,
    private httpService: HttpService
  ) { }

  EmployeeModel: EmployeeModel[] = [];



  async deleteEmployee() {
    try {
      const data = await firstValueFrom(this.httpService.deleteEmployeeByID(this.data.id));
      this.dialogRef.close(true);
      this.router.navigate(['/main-employee-view']);

    } catch (error) {
      console.log('Error while deleting Employee: ', error);
    }
  }

  ngOnInit(): void {
    // Initialize the component, for example, fetch data from a service
    console.log('MainEmployeeViewComponent initialized');
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  NavigationForward() {
    this.deleteEmployee();
    this.router.navigate(['/main-employee-view'])
  }
}
  /*openDialog(){
    this.dialogRef.open(DeleteEmployeePopupComponent)
  }

  navigateMainView() {
    this.router.navigate(['/update-employee-view'])
  }

  deleteEmployee() {
    this.router.navigate(['/main-employee-view'])
  }

}
function inject(MAT_DIALOG_DATA: InjectionToken<any>): (target: typeof DeleteEmployeePopupComponent, propertyKey: undefined, parameterIndex: 1) => void {
  throw new Error('Function not implemented.');
}*/

