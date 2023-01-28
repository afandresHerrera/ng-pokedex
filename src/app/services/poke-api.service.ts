import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(
    private http: HttpClient
  ) { }

  getAllPokemons() {
    const limit = 1500;

    return this.http.get(`${environment.apiUrl}pokemon/?limit=${limit}`);
  }
}
