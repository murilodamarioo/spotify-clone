import { Routes } from '@angular/router';
import { HomeComponent, PlayerComponent } from '..';

export const PlayerRoutes: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]