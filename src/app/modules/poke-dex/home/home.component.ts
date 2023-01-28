import { Component, OnInit } from '@angular/core';
import { PokemonItem } from 'src/app/shared/models/pokemon-models';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokeList: PokemonItem[] = [];

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeApiService.getAllPokemons(10).subscribe(res => {
      console.log(res);
      this.pokeList = res.results;
      console.log(this.pokeList.length);
    });
  }

}
