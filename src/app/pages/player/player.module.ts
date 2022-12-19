import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent, LeftPanelComponent, MenuButtonComponent } from 'src/app/components';



@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    MenuButtonComponent,
    UserFooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
