import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private base_url: string = 'https://restfulcountries.com/api/v1/countries';

  // private countriesByIdUrl: string = 'https://restfulcountries.com/api/v1/countries';

  private apiKey: string = '1744|wchhhBvRTeJl0J0uM8p9ao47hYmg4YwzAPDl17JA';

  private countriesSubjetct: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);

  private countries: Observable<any[]>=this.countriesSubjetct.asObservable()

  private _headers!: HttpHeaders;

  private _headersConfig = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.apiKey}`,
  };

  constructor(private http: HttpClient) {}

  getCountries():Observable<any>{
    return this.countriesSubjetct.asObservable()
  }

  getAll(): Observable<any> {
    this._headers = new HttpHeaders(this._headersConfig);
    // const headers: HttpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Authorization': `Bearer ${this.apiKey}`
    // });
    return this.http
      .get<any>(this.base_url, { headers: this._headers })
      .pipe(tap((countries) => this.countriesSubjetct.next(countries)));
  }

  getCountriesByRegion(region: string) {
    this._headers = new HttpHeaders(this._headersConfig);

    console.log(region);

    return this.http
      .get<any>(`${this.base_url}?continent=${region}`, {
        headers: this._headers,
      })
      .pipe(tap((countries) => this.countriesSubjetct.next(countries)));
  }

  getCountriesByName(countryName: string): Observable<any> {
    this._headers = new HttpHeaders(this._headersConfig);
    console.log(countryName);

    return this.http.get<any>(`${this.base_url}/${countryName}`, {
      headers: this._headers,
    });
  }
}
