import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  constructor(private router: Router) {}
  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }
}
