import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  menuSelected: string = 'Início'

  // Icons
  homeIcon: IconDefinition = faHome
  searchIcon: IconDefinition = faSearch
  artistsIcon: IconDefinition = faGuitar
  playlistIcon: IconDefinition = faMusic

  playlists: IPlaylist[] = []

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.searchPlaylists()
  }

  buttonClick(button: string) {
    this.menuSelected = button
  }

  async searchPlaylists() {
    this.playlists = await this.spotifyService.searchPlaylistsUser()
  }

}
