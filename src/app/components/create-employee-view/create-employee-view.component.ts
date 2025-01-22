import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../Service/http.service";
import { EmployeeModel } from '../../Model/EmployeeModel';

@Component({
  selector: 'app-create-employee-view',
  templateUrl: './create-employee-view.component.html',
  styleUrls: ['./create-employee-view.component.css']
})
export class CreateEmployeeViewComponent implements OnInit {
  constructor(private router: Router, private httpService: HttpService) { }

  newEmployee: EmployeeModel = {
    id: 0,
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
  }

  generateNewId() {
      this.httpService.getAllEmployees().subscribe((employees) => {
      const ids = employees.map(employee => employee.id);
      const maxId = Math.max(...ids);
      this.newEmployee.id = maxId + 1;
    });
  }

  CreateEmployee() {
    this.httpService.updateEmployee(this.newEmployee).subscribe((data) => {
      console.log('Employee created: ', data);
      this.router.navigate(['/main-employee-view']);
    }, error => {
      console.log('Error while creating Employee: ', error);
    });
  }

  SaveEmployee() {
    this.httpService.createEmployee(this.newEmployee).subscribe((data) => {
      console.log('Employee saved: ', data);
      this.router.navigate(['/main-employee-view']);
    });
  }

  ngOnInit(): void {
    // Initialize the component, for example, fetch data from a service
    this.generateNewId();
    this.CreateEmployee();
    this.SaveEmployee();
    console.log('MainEmployeeViewComponent initialized');
  }

  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationForward() {
    this.SaveEmployee();
    this.router.navigate(['/main-employee-view'])
  }
  
}
