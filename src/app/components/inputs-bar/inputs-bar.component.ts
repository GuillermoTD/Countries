import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryApiService } from '../../services/country-api/country-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inputs-bar.component.html',
  styleUrl: './inputs-bar.component.css',
})
export class InputsBarComponent {
  @Input() inputText!: string;
  @Input() selectOptions!: string;
  public fetchedData!: any;
  constructor(
    private countriesService: CountryApiService,
    private router: Router
  ) {}

  onInputChange(text: string) {
    console.log(text);
  }

  onSelectChange(option: any) {
    console.log(option.target.value);

    this.countriesService.getCountriesByRegion(option.target.value).subscribe(
      (fetchedCountry) => {
        this.fetchedData = fetchedCountry.data;
        // this.router.navigate([`country?continent=${option.target.value}`]);
        console.log(this.fetchedData);
      },
      (error) => {
        // console.error('Error al buscar el país:', error);
        console.error('Pais no encontrado');
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
        // this.handleError(error);
      }
    );
  }

  SearchCountry() {
    console.log(this.inputText);
    this.countriesService.getCountriesByName(this.inputText).subscribe(
      (fetchedCountry) => {
        this.fetchedData = fetchedCountry.data;
        console.log(this.fetchedData.name);
        this.router.navigate([`country/${this.fetchedData.name}`]);
      },
      (error) => {
        // console.error('Error al buscar el país:', error);
        console.error('Pais no encontrado');
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
        // this.handleError(error);
      }
    );
  }

  ngOnInit() {
    console.log(this.inputText);
  }

  onRegionChange(region: any) {
    if(region){
      console.log(this.countriesService.getCountriesByRegion(region.target.value).subscribe(fetchedData => console.log(fetchedData)))
    }
 
  }
}
