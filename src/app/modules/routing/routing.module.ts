import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGridComponent } from '../../components/maingrid/maingrid.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { CountryDetailsComponent } from '../../components/country-details/country-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MainGridComponent },
  { path: 'country/1', component: CountryDetailsComponent, pathMatch:"full" },
  { path: '**', component: NotFoundComponent } // Ruta para manejar páginas no encontradas
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainGridComponent,
    NotFoundComponent,
    CountryDetailsComponent,
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
