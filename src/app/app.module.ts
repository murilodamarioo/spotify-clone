import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { RecentSearchesComponent } from './components/recent-searches/recent-searches.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    TopArtistsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
