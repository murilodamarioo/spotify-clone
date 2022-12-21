import { Component, OnDestroy, OnInit } from '@angular/core';
import { faClock, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/common/factories';
import { IMusic } from 'src/app/interfaces';
import { PlayerService, SpotifyService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  musics: IMusic[] = []
  currentMusic: IMusic = newMusic()

  subs: Subscription[] = []

  playIcon = faPlay
  timerIcon = faClock

  constructor(private spotifyService: SpotifyService, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getMusics()
    this.getCurrentMusic()
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
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

  getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music
    })

    this.subs.push(sub)
  }

}
