import { LeftPanelComponent } from './../../components/left-panel/left-panel.component';
import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';



@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
