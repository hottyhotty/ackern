import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:3000'; // API-URL aus Umgebungsvariablen laden

  constructor(private http: HttpClient) { }

  // Beispielmethode für eine GET-Anfrage
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`)
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

  // Fehlerbehandlungsmethode
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-seitiger Fehler
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-seitiger Fehler
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
