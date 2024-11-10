import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private apiUrl = 'http://localhost:5000/api/groceries'; // Adjust URL as needed

  constructor(private http: HttpClient) {}

  getGroceries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addGrocery(grocery: any): Observable<any> {
    return this.http.post(this.apiUrl, grocery);
  }

  deleteGrocery(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}