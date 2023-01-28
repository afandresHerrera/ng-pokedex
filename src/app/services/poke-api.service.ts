import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from 'src/environments/environment';
import { PokemonItem, PokemonListResponse } from '../shared/models/pokemon-list.model';
import { Pokemon } from '../shared/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private _searchString = new Subject<string>();
  public currentPokemonDetail?: Pokemon;

  constructor(
    private http: HttpClient
  ) { }

  public get searchString() {
    return this._searchString;
  }

  setSearch(searchText: string) {
    this._searchString.next(searchText);
  }

  getAllPokemons(limit = 1500) {
    return this.http.get<PokemonListResponse>(`${environment.apiUrl}pokemon/?limit=${limit}`);
  }

  getPokemonInfo(id: string) {
    return this.http.get<Pokemon>(`${environment.apiUrl}pokemon/${id}`);
  }

  getPokemonForms(id: string) {
    return this.http.get<Pokemon>(`${environment.apiUrl}evolution-chain/${id}`);
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
