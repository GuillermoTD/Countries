import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private base_url: string = "https://restcountries.com/v3.1/"
  private countries: any[] = []

  constructor(param: string) { }

  getAllCountries():any[]{
    return this.countries
  }

  getCountriesByRegion():any[]{
    return this.countries
  }

  getCountriesByName():any[]{
    return this.countries
  }

}