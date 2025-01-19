import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-employee-popup',
  templateUrl: './delete-employee-popup.component.html',
  styleUrls: ['./delete-employee-popup.component.css']
})
export class DeleteEmployeePopupComponent {
  constructor(private dialogRef: MatDialog, private router: Router) {
  }

  openDialog(){
    this.dialogRef.open(DeleteEmployeePopupComponent)
  }

  navigateMainView() {
    this.router.navigate(['/update-employee-view'])
  }

  deleteEmployee() {
    this.router.navigate(['/main-employee-view'])
  }

}
