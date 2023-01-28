import { Component, OnInit } from '@angular/core';
import { PokemonItem } from 'src/app/shared/models/pokemon-list.model';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokeList: PokemonItem[] = [];
  testItem = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/"
  };

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeApiService.getAllPokemons(1).subscribe(res => {
      console.log(res);
      this.pokeList = res.results;
      console.log(this.pokeList.length);
    });
  }

}
