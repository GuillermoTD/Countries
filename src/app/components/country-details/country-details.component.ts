import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { SkeletonLoadingCountryDetailsComponent } from '../skeleton-loading-country-details/skeleton-loading-country-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [RouterLink,SkeletonLoadingCountryDetailsComponent,CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {

  public countryName!:string;
  protected country!:any;
  isLoading:boolean = false;
  constructor(private route:ActivatedRoute,private countriesService:CountryApiService){
  }
  
  
  ngOnInit(){
    this.countryName = this.route.snapshot.paramMap.get('name')!;

    this.countriesService.getCountriesByName(this.countryName).subscribe(fetchedCountry=>{
      this.country = fetchedCountry.data
      this.isLoading = true
      console.log(this.country)
    })
    console.log('Country ID:', this.countryName);
  }


}
