import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import {MainEmployeeViewComponent} from "./components/main-employee-view/main-employee-view.component";
import {CreateEmployeeViewComponent} from "./components/create-employee-view/create-employee-view.component";
import {UpdateEmployeeViewComponent} from "./components/update-employee-view/update-employee-view.component";

const routes: Routes = [
  {
    path: 'main-employee-view',
    component: MainEmployeeViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-employee-view',
    component: CreateEmployeeViewComponent
  },

  {
    path: 'update-employee-view',
    component: UpdateEmployeeViewComponent
  },

  // Fallback-Route für unbekannte URLs (optional)
  { path: '**', redirectTo: '/main-employee-view' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
