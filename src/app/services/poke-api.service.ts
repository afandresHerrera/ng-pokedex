import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonListResponse } from '../models/pokemon-models';

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
}
