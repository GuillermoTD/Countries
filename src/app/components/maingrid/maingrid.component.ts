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

// fetchAllCountries(): Observable<any> {
//   return this.countriesService.getAll();
// }

// getAllCountries():void{
//   this.fetchAllCountries().subscribe(
//     (response:any[])=>{
//       this.countries = response
//       console.log("se llamò")
//       console.log(this.countries)
//     },
//     (error:any)=>{
//       console.log("No se pudo consultar la API",error)
//     }
//   )
// }
ngOnInit():void{
  this.countriesService.getAll().subscribe(fetchedCountries=>{
    this.countries = fetchedCountries.data
  })
}
}
