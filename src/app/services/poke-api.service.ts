import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonItem, PokemonListResponse } from '../shared/models/pokemon-list.model';
import { Pokemon } from '../shared/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons(limit = 1500) {
    return this.http.get<PokemonListResponse>(`${environment.apiUrl}pokemon/?limit=${limit}`);
  }

  getPokemonInfo(id: string) {
    return this.http.get<Pokemon>(`${environment.apiUrl}pokemon/${id}`);
  }

  getPokemonId(pokemonItem: PokemonItem) {
    const urlArray = pokemonItem.url.split('/');
    const tempId = parseInt(urlArray[urlArray.length - 2]);
    let pokemonId = '';

    if (isNaN(tempId)) {
      pokemonId = tempId.toString();
    } else {
      pokemonId = pokemonItem.name;
    }

    return pokemonId;
  }
}
