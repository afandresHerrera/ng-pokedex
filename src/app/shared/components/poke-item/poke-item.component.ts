import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  pokemonInfo!: Pokemon;
  pokeHp: any;
  pokeAttack: any;
  pokeSpeed: any;
  pokeDefense: any;


  constructor(
    private pokeApiService: PokeApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!!this.pokeItem) {
      this.getPokeInfo(this.pokeItem)
    }
  }

  ngOnChanges() {
    // console.log(this.pokeItem);
  }

  getPokeInfo(pokemonItem: PokemonItem) {
    const id = this.pokeApiService.getPokemonId(pokemonItem);

    this.pokeApiService.getPokemonInfo(id).subscribe(res => {
      this.pokemonInfo = res;
      this.makeStats(this.pokemonInfo);
    })
  }

  makeStats(poke: Pokemon) {
    const stats = poke.stats;
    
    this.pokeHp = stats.find(x => x.stat.name === 'hp');
    this.pokeAttack = stats.find(x => x.stat.name === 'attack');
    this.pokeSpeed = stats.find(x => x.stat.name === 'speed');
    this.pokeDefense = stats.find(x => x.stat.name === 'defense');

    // console.log(this.pokeHp);
    // console.log(this.pokeAttack);
    // console.log(this.pokeSpeed );
    // console.log(this.pokeDefense);
  }

  redirect(pokemon? : Pokemon) {
    this.pokeApiService.currentPokemonDetail = this.pokemonInfo;
    this.router.navigateByUrl('poke-detail/' + pokemon?.id)
  }
}
