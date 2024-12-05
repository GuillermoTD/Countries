import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-maingrid',
  standalone: true,
  imports: [CountryCardComponent,HttpClientModule, CommonModule],
  templateUrl: './maingrid.component.html',
  styleUrl: './maingrid.component.css',
  providers:[CountryApiService]
})
export class MainGridComponent {

 countries:any[] = []

constructor(private countriesService:CountryApiService){}


ngOnInit():void{
  this.countriesService.getAll().subscribe(fetchedCountries=>{
    this.countries = fetchedCountries.data
  })
}
}
