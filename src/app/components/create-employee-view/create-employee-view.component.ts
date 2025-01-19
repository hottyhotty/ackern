import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee-view',
  templateUrl: './create-employee-view.component.html',
  styleUrls: ['./create-employee-view.component.css']
})
export class CreateEmployeeViewComponent {
  constructor(private router: Router) {}


  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

}
