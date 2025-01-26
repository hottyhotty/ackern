import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeModel } from '../Model/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiURL = 'http://localhost:8089/employees/';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiURL}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getEmployeeByID(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiURL}${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {


    return this.http.put<EmployeeModel>(`${this.apiURL}${employee.id}`, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.apiURL, employee)
      .pipe(
        catchError(this.handleError)
      );
  };

  deleteEmployeeByID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
