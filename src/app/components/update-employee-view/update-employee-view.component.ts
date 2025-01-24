import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/Model/EmployeeModel';
import { HttpService } from 'src/app/Service/http.service';
import { firstValueFrom } from 'rxjs';

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
    phone: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) { }


  async UpdateEmployee() {
    try {
      const data = await firstValueFrom(this.httpService.updateEmployee(this.employee));
      console.log('Employee updated: ', data);
      this.router.navigate(['/main-employee-view']);
    } catch (error) {
      console.log('Error while updating Employee: ', error);
    }
  }

  async SaveEmployee() {
    try {
      const data = await firstValueFrom(this.httpService.createEmployee(this.employee));
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
    this.router.navigate(['/delete-employee-popup'])
  }

  NavigationSaveEmployee() {
    this.UpdateEmployee();
    this.SaveEmployee();
    this.router.navigate(['/main-employee-view']);
  }
}

