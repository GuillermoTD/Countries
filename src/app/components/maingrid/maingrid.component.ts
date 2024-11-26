import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-maingrid',
  standalone: true,
  imports: [CountryCardComponent,HttpClientModule],
  templateUrl: './maingrid.component.html',
  styleUrl: './maingrid.component.css'
})
export class MainGridComponent {

}
