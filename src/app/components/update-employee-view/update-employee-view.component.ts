import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { EmployeeModel } from 'src/app/Model/EmployeeModel';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-update-employee-view',
  templateUrl: './update-employee-view.component.html',
  styleUrls: ['./update-employee-view.component.css']
})
export class UpdateEmployeeViewComponent implements OnInit {
  employee: EmployeeModel = {
    id: 0,
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) { }
  
  SaveEmployee() {
    this.httpService.createEmployee(this.employee).subscribe((data: any) => {
      console.log('Employee saved: ', data);
      this.router.navigate(['/main-employee-view']);
    });
  }

  ngOnInit(): void {
    this.SaveEmployee();
    this.route.params.subscribe(params => {
      this.employee = params as EmployeeModel;
    });
  }

  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationDeleteEmployee() {
    this.router.navigate(['/delete-employee-popup'])
  }

  NavigationForward() {
    this.SaveEmployee();
    this.router.navigate(['/main-employee-view']);
  }
}
