import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  constructor(private dialogRef: MatDialog, private router: Router) {
  }

  openDialog(){
    this.dialogRef.open(DeleteEmployeeComponent)
  }

  navigateMainView() {
    this.router.navigate(['/update-employee-view'])
  }

  deleteEmployee() {
    this.router.navigate(['/main-employee-view'])
  }
}
