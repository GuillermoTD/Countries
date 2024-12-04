import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
 
  private base_url: string = '/api/countries';

  private apiKey: string = '1744|wchhhBvRTeJl0J0uM8p9ao47hYmg4YwzAPDl17JA';
  
  private countries: any[] = [];

  private _headers!: HttpHeaders;

  private _headersConfig = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.apiKey}`
  }; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    this._headers = new HttpHeaders(this._headersConfig);
    // const headers: HttpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.apiKey}`
    // });
    return this.http.get<any>(this.base_url, { headers:this._headers });
  }

  // getCountriesByRegion(){
  // }

  getCountriesById(countryId:string):Observable<any>{
    this._headers = new HttpHeaders(this._headersConfig);
    console.log(countryId)

    return this.http.get<any>(`${this.base_url}/${countryId}`, { headers:this._headers });

  }

  getCountriesByName(): any[] {
    return this.countries;
  }
 
}
