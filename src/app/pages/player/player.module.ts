import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  UserFooterComponent, 
  LeftPanelComponent, 
  MenuButtonComponent, 
  TopArtistComponent, 
  RightPanelComponent, 
  RecentSearchesComponent,
  TopArtistsComponent,
  ArtistItemImageComponent
} from 'src/app/components';
import { HomeComponent } from '..';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    MenuButtonComponent,
    UserFooterComponent,
    HomeComponent,
    TopArtistComponent,
    RightPanelComponent,
    RecentSearchesComponent,
    TopArtistsComponent,
    ArtistItemImageComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
