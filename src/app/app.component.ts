import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputsBarComponent } from './components/inputs-bar/inputs-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { MainGridComponent } from './components/maingrid/maingrid.component';
import { RoutingModule } from './modules/routing/routing.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent,NavbarComponent,InputsBarComponent,HttpClientModule,RoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'countries-api';
}
