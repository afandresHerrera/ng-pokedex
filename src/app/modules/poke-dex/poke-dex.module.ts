import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { RouterModule, Routes } from '@angular/router';

// Vistual scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

// estas son las rutas del layout que dibuja la app principal
// el home tiene la capacidad de mostrar pantalla de bienvenida y de no resultados
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'poke-detail/:id', component: PokeDetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    PokeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    CdkScrollableModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    PokeDetailComponent
  ],
})
export class PokeDexModule { }
