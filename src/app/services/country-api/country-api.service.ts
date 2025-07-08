import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/DataInterface';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private base_url: string = "/api";

  constructor(private http: HttpClient) { }

  // Los endpoints suelen devolver arrays de países, así que Observable<Country[]>
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`https://corsproxy.io/?https://www.apicountries.com/countries`);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://corsproxy.io/?https://www.apicountries.com/region/${region}`);
  }

  getCountriesByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`https://corsproxy.io/?https://www.apicountries.com/name/${name}`);
  }
}
