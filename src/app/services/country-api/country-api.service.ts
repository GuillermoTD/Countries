import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  // private base_url: string = "https://restcountries.com/v3.1/all"
  // private base_url: string = "https://freetestapi.com/api/v1/countries"
  private base_url: string = '/api/countries?per_page=10';
  private apiKey: string = '1744|wchhhBvRTeJl0J0uM8p9ao47hYmg4YwzAPDl17JA';
  private countries: any[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get<any>(this.base_url, { headers });
  }

  getCountriesByRegion(): any[] {
    return this.countries;
  }

  getCountriesByName(): any[] {
    return this.countries;
  }
}
