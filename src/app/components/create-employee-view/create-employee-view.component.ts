import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../Service/http.service";
import { EmployeeModel } from '../../Model/EmployeeModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee-view',
  templateUrl: './create-employee-view.component.html',
  styleUrls: ['./create-employee-view.component.css']
})
export class CreateEmployeeViewComponent {
  constructor(private router: Router, private httpService: HttpService) { }

  imports: [
    FormsModule
  ]
  EmployeeModel: EmployeeModel = new EmployeeModel = {
    id: formGroupExampleInput,
    lastName: '',
    firstName: '',
    city: ''
  }
    
  CreateEmployee() {
    this.httpService.createEmployee(this.EmployeeModel).subscribe((data) => {
      console.log('Employee created: ', data);
      this.router.navigate(['/main-employee-view']);
    }, error => {
      console.log('Error while creating Employee: ', error);
    });
  }
  ngOnInit(): void {
    // Initialize the component, for example, fetch data from a service
    this.CreateEmployee();
    console.log('MainEmployeeViewComponent initialized');
  }

  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  
}
