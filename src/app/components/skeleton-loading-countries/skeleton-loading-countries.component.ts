import { Component } from '@angular/core';
import { SkeletonLoadingCountryComponent } from '../skeleton-loading-country/skeleton-loading-country.component';

@Component({
  selector: 'app-skeleton-loading-countries',
  standalone: true,
  imports: [SkeletonLoadingCountryComponent],
  templateUrl: './skeleton-loading-countries.component.html',
  styleUrl: './skeleton-loading-countries.component.css'
})
export class SkeletonLoadingCountriesComponent {

}
