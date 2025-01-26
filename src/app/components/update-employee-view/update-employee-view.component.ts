import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { EmployeeModel } from 'src/app/Model/EmployeeModel';
import { HttpService } from 'src/app/Service/http.service';
import {firstValueFrom, lastValueFrom} from 'rxjs';
import { DeleteEmployeePopupComponent } from '../delete-employee-popup/delete-employee-popup.component';

@Component({
  selector: 'app-update-employee-view',
  templateUrl: './update-employee-view.component.html',
  styleUrls: ['./update-employee-view.component.css']
})
export class UpdateEmployeeViewComponent implements OnInit {

  employee: EmployeeModel = {
    id: 0,
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    skillSet: []
  };

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) { }


async UpdateEmployee() {
  try {
    const data = await lastValueFrom(this.httpService.updateEmployee(this.employee));
    console.log('Employee updated: ', data);
    this.router.navigate(['/main-employee-view']);
  } catch (error) {
    console.log('Error while updating Employee: ', error);
  }
}

  async SaveEmployee() {
    try {
      const data = await this.httpService.createEmployee(this.employee);
      console.log('Employee saved: ', data);
      this.router.navigate(['/main-employee-view']);
    } catch (error) {
      console.log('Error while saving Employee: ', error);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employee = { ...params } as EmployeeModel;
    });
  }

  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationDeleteEmployee() {
    const dialogRef = this.dialog.open(DeleteEmployeePopupComponent, {
      data: { id: this.employee.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`Dialog result: ${result}`);
        this.router.navigate(['/main-employee-view']);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  NavigationSaveEmployee() {
    this.UpdateEmployee();
    this.router.navigate(['/main-employee-view']);
  }
}

