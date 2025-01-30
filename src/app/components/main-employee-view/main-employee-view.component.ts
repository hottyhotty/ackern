import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeModel } from "../../Model/EmployeeModel";
import { HttpService } from "../../Service/http.service";

@Component({
  selector: 'app-main-employee-view',
  templateUrl: './main-employee-view.component.html',
  styleUrls: ['./main-employee-view.component.css']
})

export class MainEmployeeViewComponent implements OnInit {
  EmployeeModel: EmployeeModel[] = [];

  loadEmployee() {
    this.httpService.getAllEmployees().subscribe((data) => {
      this.EmployeeModel = data;
    });
  }

  constructor(private router: Router, private httpService: HttpService) { }
  ngOnInit(): void {
    // Initialize the component, for example, fetch data from a service
    this.loadEmployee();
    console.log('MainEmployeeViewComponent initialized');
  }


  NavigationCreateEmployee() {
    this.router.navigate(['/create-employee-view'])
  }

  NavigationEmployeeDetails(employee: EmployeeModel) {
    this.router.navigate(['/update-employee-view', employee])
  }
}
