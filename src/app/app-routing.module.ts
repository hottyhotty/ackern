import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {MainEmployeeComponent} from "./components/main-employee/main-employee.component";
import {DeleteEmployeeComponent} from "./components/delete-employee/delete-employee.component";

const routes: Routes = [
  {
    path: 'main-employee-view',
    component: MainEmployeeComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-employee-view',
    component: CreateEmployeeComponent
  },

  {
    path: 'update-employee-view',
    component: UpdateEmployeeComponent
  },

  {
    path: 'delete-employee-view',
    component: DeleteEmployeeComponent
  },
  // Fallback-Route für unbekannte URLs (optional)
  { path: '**', redirectTo: '/main-employee-view' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
