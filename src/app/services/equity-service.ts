import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquityService {
  private baseUrl = 'http://localhost:8080/equity';

  constructor(private http: HttpClient) { }

  getAllEquity(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEquityById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEquity(equity: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, equity);
  }

  updateEquity(id: number, equity: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, equity);
  }

  deleteEquity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

   getEquityPositions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/calPosition`);
  }
 
}
