import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from './Service/http.service';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeViewComponent } from './components/create-employee-view/create-employee-view.component';
import { UpdateEmployeeViewComponent } from './components/update-employee-view/update-employee-view.component';
import { MainEmployeeViewComponent } from './components/main-employee-view/main-employee-view.component';
import { DeleteEmployeePopupComponent } from './components/delete-employee-popup/delete-employee-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeViewComponent,
    UpdateEmployeeViewComponent,
    MainEmployeeViewComponent,
    DeleteEmployeePopupComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
