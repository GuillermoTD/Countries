import { Routes } from '@angular/router';
import { MainGridComponent } from './components/maingrid/maingrid.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



export const routes: Routes = [
    { path: '', component: MainGridComponent },
    { path: 'country/:id', component: CountryDetailsComponent, pathMatch: "full" },
    { path: '**', component: NotFoundComponent } // Ruta para manejar páginas no encontradas
  ];
