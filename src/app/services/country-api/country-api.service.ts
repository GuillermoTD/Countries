import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CountryApiService {
  private base_url: string = "https://restcountries.com/v3.1/"
  private countries: any[] = []

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get<any>(this.base_url + "all")
  }

  getCountriesByRegion(): any[] {
    return this.countries
  }

  getCountriesByName(): any[] {
    return this.countries
  }

}

