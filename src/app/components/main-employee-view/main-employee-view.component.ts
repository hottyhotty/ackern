import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeModel } from "../../Model/EmployeeModel";

@Component({
  selector: 'app-main-employee-view',
  templateUrl: './main-employee-view.component.html',
  styleUrls: ['./main-employee-view.component.css']
})

export class MainEmployeeViewComponent implements OnInit {

  editShow: EmployeeModel[] = [
    { id: 2, city: "Arab states", firstName: "Jamal", lastName: "Nahadi", phone: "+072894938", postcode: "Somewhere", street: "Anywhere" },



  ];

  constructor(private router: Router) { }
  ngOnInit(): void {
    // Initialize the component, for example, fetch data from a service
    console.log('MainEmployeeViewComponent initialized');
  }

  trackById(index: number, item: any): number {

    return item.id;

  }

  NavigationCreateEmployee() {
    this.router.navigate(['/create-employee-view'])
  }

  NavigationEmployeeDetails(s: EmployeeModel) {
    this.router.navigate(['/update-employee-view'])
  }
}