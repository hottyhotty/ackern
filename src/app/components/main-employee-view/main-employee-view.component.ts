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

  constructor(private router: Router, private httpService: HttpService) { }
  ngOnInit(): void {
    this.loadEmployee();
    console.log('MainEmployeeViewComponent initialized');
  }

    loadEmployee() {
      this.httpService.getAllEmployees().subscribe((data) => {
      this.EmployeeModel = data;
    });}


  NavigationCreateEmployee() {
    this.router.navigate(['/create-employee-view'])
  }

  async NavigationEmployeeDetails(employeeID: number | undefined) {
    if (employeeID === undefined) return;
    this.httpService.getEmployeeByID(employeeID).subscribe((employee) => {
      this.router.navigate(['/update-employee-view', employee])

    })
  }
}
