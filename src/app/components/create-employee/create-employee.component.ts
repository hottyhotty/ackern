import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor(private router: Router) {}


  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }
}

