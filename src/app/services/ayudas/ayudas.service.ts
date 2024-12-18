import { Injectable } from '@angular/core';
import { Ayudas } from '../../models/ayudas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AyudasService {
  private url : string = 'http://127.0.0.1:8000/api/v1/ayudas'

  constructor(private http : HttpClient) {}

  getAllAyudas(): Observable<Ayudas[]> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.http.get<{ ayudas: Ayudas[] }>(this.url, { headers }).pipe(
      map(response => response.ayudas),
      catchError(this.handleError)
    );
  }

  getAyudasById(id: number): Observable<Ayudas> {
    return this.http.get<Ayudas>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createAyuda(formData: FormData): Observable<any> {
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
