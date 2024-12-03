import { Component, Input, OnInit } from '@angular/core';
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
  @Input() country:any;

 
}
