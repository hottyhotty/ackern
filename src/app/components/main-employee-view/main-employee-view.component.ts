import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { EmployeeModel } from "../../Model/EmployeeModel";
import { HttpService } from "../../Service/http.service";
import Swal from "sweetalert2";

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
    if (this.EmployeeModel.length === 0) {
      this.httpService.getAllEmployees().subscribe({
        next: (data) => {
          this.EmployeeModel = data;
        },
        error: (error) => {
          console.error('Fehler beim Laden der Mitarbeiter:', error);
          Swal.fire({
            title: 'Fehlgeschlagen!',
            text: 'Die Mitarbeiter konnten nicht geladen werden: ' + (error.message || error),
            icon: 'error',
          });
        }
      });
    }
  }


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
