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

  ngOnInit(): void {
    // Initialize the component, for example, fetch data from a service
    this.generateNewId();
    console.log('MainEmployeeViewComponent initialized');
  }

  newEmployee: EmployeeModel = {
    id: 0,
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    skillSet: []
  }

  generateNewId() {
      this.httpService.getAllEmployees().subscribe((employees) => {
      const ids = employees.map(employee => employee.id);
      const maxId = Math.max(...ids);
      this.newEmployee.id = maxId + 1;
    });
  }


  SaveEmployee() {
    this.httpService.createEmployee(this.newEmployee).subscribe({
      next: (data) => {
        console.log('Employee saved: ', data);
        alert('Employee saved successfully!'); // Erfolgsmeldung
      },
      error: (error) => {
        console.error('Error saving employee: ', error);
        alert('Error saving employee: ' + error.message); // Fehlermeldung
      }
    });
  }


  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationForward() {
    this.SaveEmployee();
    this.router.navigate(['/main-employee-view'])
  }

}
