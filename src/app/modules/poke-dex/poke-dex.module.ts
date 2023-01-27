import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    PokeDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokeDexModule { }
