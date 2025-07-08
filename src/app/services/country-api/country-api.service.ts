import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/DataInterface';
// import { provideHttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CountryApiService {
  private base_url: string = "/api"
  private countries: Country | undefined;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get<Country>("/countries")
  }

  getCountriesByRegion(region:string): Observable<Country> {
    return this.http.get<Country>(`${this.base_url }/border/${region}`)
  }

  getCountriesByName(name:string): Observable<Country>  {
    return this.http.get<Country>(`${this.base_url}/region/${name}`)
  }

}

