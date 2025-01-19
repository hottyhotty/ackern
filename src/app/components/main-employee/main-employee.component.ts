import { Component } from '@angular/core';
import {Employee} from "../../Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-employee',
  templateUrl: './main-employee.component.html',
  styleUrls: ['./main-employee.component.css']
})
export class MainEmployeeComponent {

  editShow : Employee[] = [
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



  showDetails(Employee: Employee){ console.log("hallo, hier bin ich ");   }




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

  NavigationEmployeeDetails(s: Employee) {
    this.router.navigate(['/update-employee-view'])
  }
}
