import { Injectable } from '@angular/core';
import { Email } from '../../models/email';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  private url : string = 'http://127.0.0.1:8000/api/v1/emails'

  constructor(private http : HttpClient) {}

  getAllEmails(): Observable<Email[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<{ emails: Email[] }>(this.url, { headers }).pipe(
      map(response => response.emails),
      catchError(this.handleError)
    );
  }  

  getEmailById(id: number): Observable<Email> {
    return this.http.get<Email>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createEmail(formData: FormData): Observable<any> {
    return this.http.post<any>(this.url, formData).pipe(
      catchError(this.handleError)
    );
  }
  
  updateStatus(emailId: number, status: string): Observable<any> {
    return this.http.put(`${this.url}/${emailId}/status`, { status });
  }

  private handleError(error: any) {
    let errorMessage = 'Algo salió mal';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
