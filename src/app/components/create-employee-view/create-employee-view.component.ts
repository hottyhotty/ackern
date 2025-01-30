import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../Service/http.service";
import { EmployeeModel } from '../../Model/EmployeeModel';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-employee-view',
  templateUrl: './create-employee-view.component.html',
  styleUrls: ['./create-employee-view.component.css']
})
export class CreateEmployeeViewComponent implements OnInit {
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
    console.log('MainEmployeeViewComponent initialized');
  }

  newEmployee: EmployeeModel = {
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    skillSet: []
  }


  async SaveEmployee() {
    this.httpService.createEmployee(this.newEmployee).subscribe({
      next: (data) => {
        console.log('Employee saved: ', data);
        alert('Employee saved successfully!'); // Erfolgsmeldung
      },
      error: (error) => {
        console.error('Error saving employee: ', error);
        alert('Error:' + error.message); // Fehlermeldung
      }
    });
  }


  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  async NavigationForward() {
    await this.SaveEmployee();
    await this.router.navigate(['/main-employee-view'], { replaceUrl: true })
}

  validateEmployee(): boolean {
    const { firstName, lastName, street, postcode, city, phone } = this.newEmployee;

    if (!firstName || !lastName || !street || !postcode || !city || !phone) {
      alert('Alle Felder müssen ausgefüllt sein.');
      return false;
    }
    const nameRegex = /^[A-Za-zäöüßÄÖÜ]+$/;
    if (!nameRegex.test(firstName)) {
      alert('Der Vorname darf nur Buchstaben enthalten.');
      return false;
    }
    if (!nameRegex.test(lastName)) {
      alert('Der Nachname darf nur Buchstaben enthalten.');
      return false;
    }
    const postcodeRegex = /^\d{5}$/;
    if (!postcodeRegex.test(postcode)) {
      alert('Die Postleitzahl muss genau 5 Zahlen enthalten.');
      return false;
    }
    if (!nameRegex.test(city)) {
      alert('Die Stadt darf nur Buchstaben enthalten.');
      return false;
    }
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      alert('Die Telefonnummer darf nur Zahlen enthalten.');
      return false;
    }
    return true;
  }

  onSubmit(employeeForm: NgForm) {
    if (this.validateEmployee()) {
      console.log('Formular ist gültig', this.newEmployee);
      this.NavigationForward();
    } else {
      console.log('Formular ist ungültig');
    }
  }


}
