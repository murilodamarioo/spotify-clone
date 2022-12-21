import { Component, OnInit } from '@angular/core';
import { faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { IMusic } from 'src/app/interfaces';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musics: IMusic[] = []

  playIcon = faPlay
  timerIcon = faClock

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.getMusics()
  }

  async getMusics() {
     this.musics = await this.spotifyService.searchMusics()
     console.log(this.musics)
  }

  getArtists(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ')
  }

  async execMusic(music: IMusic) {
    await this.spotifyService.executeMusic(music.id)
  }

}
