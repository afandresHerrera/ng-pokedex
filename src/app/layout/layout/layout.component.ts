import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
 * Este metodo se encarga de formatear la busqueda y pasarsela por url 
 *  a el componente item list
 * @param search Este parametro es el string del input
 */
  sendSearch(search: string) {
    console.log(search);
  }
}
