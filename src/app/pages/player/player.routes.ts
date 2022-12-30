import { Routes } from '@angular/router';
import { HomeComponent, ListMusicComponent, PlayerComponent } from '..';

export const PlayerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'list/:type/:id',
                component: ListMusicComponent
            }
        ]
    }
]