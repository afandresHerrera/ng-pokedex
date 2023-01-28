import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {
  id?: string | null;
  pokemonInfo!: Pokemon;
  pokeHp: any;
  pokeAttack: any;
  pokeSpeed: any;
  pokeDefense: any;
  pokeForms: any;

  constructor(
    private pokeApiService: PokeApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Captura el id de la url
  // si este no existe envia a la pagina de home
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');

      if (this.id && this.id !== '') {
        this.getDetails();
      } else {
        this.goBack();
      }
    });
  }

  /**
 * Este metodo envia a no content del home
 */
  goBack() {
    this.router.navigate(['/'], { queryParams: { searchResults: 'no-content' } });
  }

  getDetails() {
    const id = this.id?.toString() || '';
    const pokeDetail = this.pokeApiService.currentPokemonDetail;
    if (pokeDetail?.id.toString() === id || pokeDetail?.name.toString() === id) {
      this.pokemonInfo = pokeDetail;
      this.makeStats(this.pokemonInfo);
    } else {
      this.pokeApiService.getPokemonInfo(id).subscribe(res => {
        this.pokemonInfo = res;
        this.makeStats(this.pokemonInfo);
      }, err => {
        console.log('ha ocurrido un error: ' + err);
      });
    }
  }

  getPokemonForms() {

  }

  makeStats(poke: Pokemon) {
    const stats = poke.stats;

    this.pokeHp = stats.find(x => x.stat.name === 'hp');
    this.pokeAttack = stats.find(x => x.stat.name === 'attack');
    this.pokeSpeed = stats.find(x => x.stat.name === 'speed');
    this.pokeDefense = stats.find(x => x.stat.name === 'defense');
  }
}
