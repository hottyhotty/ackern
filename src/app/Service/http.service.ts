import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EmployeeModel } from '../Model/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`)
      .pipe(
        catchError(this.handleError)
      );
  }

  putData(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/data`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  getId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setId(id: number): Observable<number> {
    return this.http.put<number>(`${this.apiUrl}/employee`, id)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLastName(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  lastName(lastName: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/employee`, lastName)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFirstName(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setFirstName(firstName: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/employee`, firstName)
      .pipe(
        catchError(this.handleError)
      );
  }

  getStreet(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setStreet(street: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/employee`, street)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPostcode(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setPostcode(postcode: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/employee`, postcode)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCity(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setCity(city: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/employee`, city)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPhone(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/employee`)
      .pipe(
        catchError(this.handleError)
      );
  }

  setPhone(phone: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/employee`, phone)
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
