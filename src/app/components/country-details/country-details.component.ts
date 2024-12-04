import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryApiService } from '../../services/country-api/country-api.service';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {

  public countryId!:string;
  private country!:any;
  constructor(private route:ActivatedRoute,private countriesService:CountryApiService){
  }
  
  
  ngOnInit(){
    this.countryId = this.route.snapshot.paramMap.get('id')!;

    this.countriesService.getCountriesById(this.countryId).subscribe(fetchedCountry=>{
      this.country = fetchedCountry.data
      console.log(this.country)
    })
    console.log('Country ID:', this.countryId);
  }


}
