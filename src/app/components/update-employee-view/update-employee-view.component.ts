import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-employee-view',
  templateUrl: './update-employee-view.component.html',
  styleUrls: ['./update-employee-view.component.css']
})
export class UpdateEmployeeViewComponent {
  constructor(private router: Router) {}
  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }
}
