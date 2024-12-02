import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-maingrid',
  standalone: true,
  imports: [CountryCardComponent,HttpClientModule],
  templateUrl: './maingrid.component.html',
  styleUrl: './maingrid.component.css',
  providers:[CountryApiService]
})
export class MainGridComponent {

private countries:any[] = []

constructor(private CountryApiService:CountryApiService){}

fetchAllCountries(): Observable<any> {
  return this.CountryApiService.getAll();
}

getAllCountries():void{
  this.fetchAllCountries().subscribe(
    (response:any[])=>{
      this.countries = response
      console.log("se llamò")
      console.log(this.countries)
    },
    (error:any)=>{
      console.log("No se pudo consultar la API",error)
    }
  )
}
  
}
