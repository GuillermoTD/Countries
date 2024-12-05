import { Routes } from '@angular/router';
import { MainGridComponent } from './components/maingrid/maingrid.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SkeletonLoadingCountryDetailsComponent } from './components/skeleton-loading-country-details/skeleton-loading-country-details.component';


export const routes: Routes = [
    { path: '', component: MainGridComponent },
    { path: 'country/:name', component: CountryDetailsComponent, pathMatch: "full" },
    { path: '**', component: NotFoundComponent } // Ruta para manejar páginas no encontradas
  ];
