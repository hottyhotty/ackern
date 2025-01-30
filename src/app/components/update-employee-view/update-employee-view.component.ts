import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeModel} from "../../Model/EmployeeModel";
import {firstValueFrom} from "rxjs";
import {DeleteEmployeePopupComponent} from "../delete-employee-popup/delete-employee-popup.component";
import {HttpService} from "../../Service/http.service";
import {MatDialog} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";

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

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employee = { ...params } as EmployeeModel;
    });
  }

  async navigateUpdateEmployee() {
    try {
      this.employee.skillSet= []
      const data = await firstValueFrom(this.httpService.updateEmployee(this.employee));
      console.log('Employee updated: ', data);
      alert('Employee Updated successfully!');
    } catch (error) {
      console.log('Error while updating Employee: ', error);
      alert('Employed Error while updating Employee!');
    }
  }
  async NavigationAfterUpdate() {
    await this.navigateUpdateEmployee()
    this.router.navigate(['/main-employee-view'],{ replaceUrl: true })
  }

  NavigationBack() {
    this.router.navigate(['/main-employee-view'])
  }

  NavigationDeleteEmployee() {
    const dialogRef = this.dialog.open(DeleteEmployeePopupComponent, {
      data: { id: this.employee.id }
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
    if (this.validateEmployee()) {
      console.log('Formular ist gültig', this.employee);
      await this.NavigationAfterUpdate();
    } else {
      console.log('Formular ist ungültig');
    }
  }


}

