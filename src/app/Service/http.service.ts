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

  saveEmployee(Data: any) {
    return this.http.post(this.apiURL, Data);
  }

  updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.apiURL}${employee.id}, ${employee.lastName}, ${employee.firstName}, ${employee.street}, ${employee.postcode}, ${employee.city}, ${employee.phone}`, employee)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteEmployeeByID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.apiURL}`, employee)
      .pipe(
        catchError(this.handleError)
      );
  };



/*  getId(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setId(id: number): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/employee`, id)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLastName(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/main-employee-view`)
      .pipe(
        catchError(this.handleError)
      );
  }

  lastName(lastName: string): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/main-employee-view`, lastName)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFirstName(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/main-employee-view`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setFirstName(firstName: string): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/main-employee-view`, firstName)
      .pipe(
        catchError(this.handleError)
      );
  }

  getStreet(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setStreet(street: string): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/employee`, street)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPostcode(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setPostcode(postcode: string): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/employee`, postcode)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCity(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setCity(city: string): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/employee`, city)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPhone(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setPhone(phone: string): Observable<EmployeeModel[]> {
    return this.http.put<EmployeeModel[]>(`${this.apiUrl}/employee`, phone)
      .pipe(
        catchError(this.handleError)
      );
  }*/

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
