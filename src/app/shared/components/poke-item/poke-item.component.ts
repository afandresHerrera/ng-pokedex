import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { PokemonItem } from '../../models/pokemon-list.model';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PokeItemComponent implements OnInit, OnChanges {
  @Input() pokeItem!: PokemonItem;
  pokemonInfo?: Pokemon;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    if (!!this.pokeItem) {
      this.getPokeInfo(this.pokeItem)
    }
  }

  ngOnChanges() {
    console.log(this.pokeItem);
  }

  getPokeInfo(pokemonItem: PokemonItem) {
    const id = this.pokeApiService.getPokemonId(pokemonItem);

    this.pokeApiService.getPokemonInfo(id).subscribe(res => {
      console.log(res);
      this.pokemonInfo = res;
    })
  }
}
