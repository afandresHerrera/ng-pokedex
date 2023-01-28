import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('../modules/poke-dex/poke-dex.module').then(m => m.PokeDexModule) },
            { path: '', redirectTo: '', pathMatch: 'full' }
        ]
    },

    // no lazy loading
    // { path: 'login', component: LoginComponent }

    //ruta 404
    { path: '**', component: LayoutComponent }
];