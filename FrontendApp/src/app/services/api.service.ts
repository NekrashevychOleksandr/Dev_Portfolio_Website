import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5014';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get(`${this.baseUrl}/weatherforecast`);
  }
}
