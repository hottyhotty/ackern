import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from "../../Service/http.service";
import { EmployeeModel } from "../../Model/EmployeeModel";
import { firstValueFrom } from 'rxjs';
import Swal from "sweetalert2";

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
      await firstValueFrom(this.httpService.deleteEmployeeByID(this.EmployeeModel.id!));

      Swal.fire({
        title: 'Gelöscht!',
        text: 'Der Mitarbeiter wurde erfolgreich gelöscht.',
        icon: 'success'
      }).then(() => {
        this.router.navigate(['/main-employee-view']).then(() => {
          window.location.reload();
        });
      });

    } catch (error: any) {
      console.error('Error while deleting Employee: ', error);

      Swal.fire({
        title: 'Fehlgeschlagen!',
        text: 'Der Mitarbeiter konnte nicht gelöscht werden: ' + (error.message || error),
        icon: 'error',
      });
    }
  }


  closeDialog() {
    this.dialogRef.close(false);
  }
}

