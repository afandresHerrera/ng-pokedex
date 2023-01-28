import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private pokeApiService: PokeApiService
    ) { }

  ngOnInit(): void {
  }

  /**
 * Este metodo se encarga de pasar la busqueda al servicio
 * @param search Este parametro es el string del input
 */
  sendSearch(search: string) {
    this.pokeApiService.setSearch(search);
  }
}
