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
    console.log('MainEmployeeViewComponent initialized');
  }

  newEmployee: EmployeeModel = {
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    skillSet: []
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
