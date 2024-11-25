import { Component } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';

@Component({
  selector: 'app-maingrid',
  standalone: true,
  imports: [CountryCardComponent],
  templateUrl: './maingrid.component.html',
  styleUrl: './maingrid.component.css'
})
export class MainGridComponent {

}
