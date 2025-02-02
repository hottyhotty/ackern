import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeModel} from "../../Model/EmployeeModel";
import {firstValueFrom} from "rxjs";
import {DeleteEmployeePopupComponent} from "../delete-employee-popup/delete-employee-popup.component";
import {HttpService} from "../../Service/http.service";
import {MatDialog} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-update-employee-view',
  templateUrl: './update-employee-view.component.html',
  styleUrls: ['./update-employee-view.component.css']
})
export class UpdateEmployeeViewComponent implements OnInit {

  employee: EmployeeModel = {
    lastName: '',
    firstName: '',
    street: '',
    postcode: '',
    city: '',
    phone: '',
    skillSet: []
  };
  isReadOnly: boolean | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isReadOnly = true;
    this.route.params.subscribe(params => {
      this.employee = { ...params } as EmployeeModel;
    });
  }

  changeReadOnly() {
  if (this.isReadOnly) this.isReadOnly = false;
  }

  async navigateUpdateEmployee() {
    try {
      this.employee.skillSet = [];
      await firstValueFrom(this.httpService.updateEmployee(this.employee));

      Swal.fire({
        title: 'Aktualisiert!',
        text: 'Der Mitarbeiter wurde erfolgreich aktualisiert.',
        icon: 'success'
      }).then(() => {
        this.router.navigate(['/main-employee-view']).then(() => {
          window.location.reload();
        });
      });

    } catch (error: any) {
      console.error('Error while updating Employee: ', error);

      Swal.fire({
        title: 'Fehlgeschlagen!',
        text: 'Der Mitarbeiter konnte nicht aktualisiert werden: ' + (error.message || error),
        icon: 'error',
      });
    }
  }


  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationDeleteEmployee() {

    const dialogRef = this.dialog.open(DeleteEmployeePopupComponent, {
      data: this.employee,
      width: '500px',
      height: '300px'
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(`Dialog result: ${result}`);
        this.router.navigate(['/main-employee-view']);
      }
      console.log(`Dialog result: ${result}`);
    });
  }

  validateEmployee(): boolean {
    const { firstName, lastName, street, postcode, city, phone } = this.employee;

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
      alert('Die Telefonnummer darf nur Zahlen enthalten.');
      return false;
    }
    return true;
  }

  async onSubmit(employeeForm: NgForm) {
    if (this.isReadOnly) {
      this.changeReadOnly()
      return;
    }
    if (this.validateEmployee() && this.isReadOnly == false) {
      console.log('Formular ist gültig', this.employee);
      await this.navigateUpdateEmployee();
    } else {
      console.log('Formular ist ungültig');
    }
  }


}

