import { Component, OnInit } from '@angular/core';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.css'
})

export class CountryCardComponent{
  private countries: any[] = [];
  constructor(private CountryApiService: CountryApiService) { }

  ngOnInit(): void {
    this.CountryApiService.getAll().subscribe(data => {
      this.countries = data
      console.log(this.countries)
      console.log("prueba")
    });
  }
}
