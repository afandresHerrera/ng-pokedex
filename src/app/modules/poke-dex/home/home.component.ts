import { Component, OnInit } from '@angular/core';
import { PokemonItem } from 'src/app/shared/models/pokemon-list.model';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonItem[] = [];
  pokeViewList: PokemonItem[] = [];
  testItem = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  };

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
    console.log("entre al cooso");
    this.pokeApiService.searchString.subscribe(res => {
      this.filter(res);
    })
  }

  getPokemons() {
    this.pokeApiService.getAllPokemons().subscribe(res => {
      this.pokemonList = res.results;
      this.pokeViewList = this.pokemonList;
    });
  }

  filter(name: string) {
    console.log(name);
    this.pokeViewList = this.pokemonList.filter(x => x.name.startsWith(name));
  }

}
