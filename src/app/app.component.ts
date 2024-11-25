import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputsBarComponent } from './inputs-bar/inputs-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent,NavbarComponent,InputsBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'countries-api';
}
