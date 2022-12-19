import { PlayerComponent } from './player.component';
import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components';

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