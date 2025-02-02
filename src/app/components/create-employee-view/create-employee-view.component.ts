import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpService } from "../../Service/http.service";
import { EmployeeModel } from '../../Model/EmployeeModel';
import {NgForm} from "@angular/forms";
import Swal from 'sweetalert2';


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


  SaveEmployee() {
    this.httpService.createEmployee(this.newEmployee).subscribe({
      next: (data) => {
        console.log('Employee saved: ', data);
        Swal.fire({
          title: 'Erfolgreich!',
          text: 'Der Mitarbeiter wurde gespeichert',
          icon: 'success',
        }).then(() => {
          this.router.navigate(['/main-employee-view']).then(() => {
            window.location.reload();
          });
        });
      },
      error: (error) => {
        console.error('Error saving employee: ', error);
        Swal.fire({
          title: 'Fehlgeschlagen!',
          text: 'Der Mitarbeiter konnte nicht gespeichert werden: '+ error.Message,
          icon: 'error',
        })
      }
    });
  }


  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
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
    const phoneRegex = /^[0-9+\/]+$/;
    if (!phoneRegex.test(phone)) {
      alert('Die Telefonnummer darf nur Zahlen, '+'+'+'oder / enthalten.');
      return false;
    }
    return true;
  }

  onSubmit(employeeForm: NgForm) {
    if (this.validateEmployee()) {
      console.log('Formular ist gültig', this.newEmployee);
      this.SaveEmployee();
    } else {
      console.log('Formular ist ungültig');
    }
  }


}
