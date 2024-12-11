import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SkeletonLoadingCountriesComponent } from '../skeleton-loading-countries/skeleton-loading-countries.component';
import { InputsBarComponent } from '../inputs-bar/inputs-bar.component';

@Component({
  selector: 'app-maingrid',
  standalone: true,
  imports: [
    CountryCardComponent,
    HttpClientModule,
    CommonModule,
    SkeletonLoadingCountriesComponent,
    InputsBarComponent,
  ],
  templateUrl: './maingrid.component.html',
  styleUrl: './maingrid.component.css',
  providers: [CountryApiService],
})
export class MainGridComponent {
  countries: any[] = [];
  isLoading: boolean = false;

  constructor(private countriesService: CountryApiService) {}

  ngOnInit(): void {
    this.countriesService.getAll().subscribe((fetchedCountries) => {
      this.countries = fetchedCountries.data;
      this.isLoading = true;
    });


    this.countriesService.getCountries().subscribe((fetchedCountries) => {
      this.countries = fetchedCountries.data;
      this.isLoading = true;
    });

  }
  
  
}
