import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeModel} from "../../Model/EmployeeModel";
import {firstValueFrom} from "rxjs";
import {DeleteEmployeePopupComponent} from "../delete-employee-popup/delete-employee-popup.component";
import {HttpService} from "../../Service/http.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-update-employee-view',
  templateUrl: './update-employee-view.component.html',
  styleUrls: ['./update-employee-view.component.css']
})
export class UpdateEmployeeViewComponent implements OnInit {

  employee: EmployeeModel = {
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    skillSet: []
  };

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employee = { ...params } as EmployeeModel;
    });
  }

  async navigateUpdateEmployee() {
    try {
      this.employee.skillSet= []
      const data = await firstValueFrom(this.httpService.updateEmployee(this.employee));
      console.log('Employee updated: ', data);
      alert('Employee Updated successfully!');
    } catch (error) {
      console.log('Error while updating Employee: ', error);
      alert('Employed Error while updating Employee!');
    }
  }
  async NavigationAfterUpdate() {
    await this.navigateUpdateEmployee()
    this.router.navigate(['/main-employee-view'],{ replaceUrl: true })
  }

  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationDeleteEmployee() {
    const dialogRef = this.dialog.open(DeleteEmployeePopupComponent, {
      data: { id: this.employee.id }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(`Dialog result: ${result}`);
        this.router.navigate(['/main-employee-view']);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}

