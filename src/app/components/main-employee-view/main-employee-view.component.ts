import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeModel} from "../../Model/EmployeeModel";

@Component({
  selector: 'app-main-employee-view',
  templateUrl: './main-employee-view.component.html',
  styleUrls: ['./main-employee-view.component.css']
})
export class MainEmployeeViewComponent {
  editShow : EmployeeModel[] = [
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},{id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},
    {id:2,city:"Arab states",firstName:"Jamal",lastName:"Nahadi",phone:"+072894938",postcode:"Somewhere", street:"Anywhere"},



  ];


  constructor(private router: Router) {}



  showDetails(Employee: EmployeeModel){ console.log("hallo, hier bin ich ");   }




  /*
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteEmployeePopupComponent, {
      width: '450px',
      height:'150px',
      data: { message: 'Hello World' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Result:', result);
    });
  }
*/
  NavigationCreateEmployee() {
    this.router.navigate(['/create-employee-view'])
  }

  NavigationEmployeeDetails(s: EmployeeModel) {
    this.router.navigate(['/update-employee-view'])
  }
}
