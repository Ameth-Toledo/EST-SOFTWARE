import { Injectable } from '@angular/core';
import { Coments } from '../../models/coments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentsService {
  private url : string = 'http://127.0.0.1:8000/api/v1/coments'

  constructor(private http : HttpClient) {}

  getAllComents(): Observable<Coments[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<{ coments: Coments[] }>(this.url, { headers }).pipe(
      map(response => response.coments),
      catchError(this.handleError)
    );
  }

  getComentsById(id: number): Observable<Coments> {
    return this.http.get<Coments>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createComent(formData: FormData): Observable<any> {
    return this.http.post<any>(this.url, formData).pipe(
      catchError(this.handleError)
    );
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
