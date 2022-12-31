import { Subscription } from 'rxjs';
import { faPlay, faClock } from '@fortawesome/free-solid-svg-icons';
import { newMusic } from 'src/app/common/factories';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusic } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';
import { PlayerService, SpotifyService } from 'src/app/services';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit, OnDestroy {

  bannerImageUrl = ''
  bannerText = ''

  musics: IMusic[] = []
  currentMusic: IMusic = newMusic()

  playIcon = faPlay
  timerIcon = faClock

  subs: Subscription[] = []

  title = ''

  constructor(
    private activedRoute: ActivatedRoute, 
    private spotifyService: SpotifyService, 
    private playerService: PlayerService
    ) {}

  ngOnInit(): void {
      this.getMusics()
      this.getCurrentMusic()
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe())
  }

  getCurrentMusic() {
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.currentMusic = music
    })

    this.subs.push(sub)
  }

  getMusics() {
    const sub = this.activedRoute.paramMap.subscribe(async params => {
      const type = params.get('type')
      const id = params.get('id')

      await this.getPageData(type, id)
    })

    this.subs.push(sub)
  }

  async getPageData(type: string, id: string) {
    if (type === 'playlist') {
      await this.getPlaylistData(id)
    } else if (type === 'artist') {
      await this.getArtistData(id)
    }
  }


  async getPlaylistData(playlistId: string) {
    const playlistMusics =  await this.spotifyService.searchMusicsFromPlaylist(playlistId)
    this.setPageData(playlistMusics.name, playlistMusics.imageUrl, playlistMusics.musics)
    this.title = `Músicas Playlist: ${playlistMusics.name}`
  }

  async getArtistData(artistId: string) {

  }

  setPageData(bannerText: string, bannerImage: string, musics: IMusic[]) {
    this.bannerImageUrl = bannerImage
    this.bannerText = bannerText
    this.musics = musics
  }

  async execMusic(music: IMusic) {
    await this.spotifyService.executeMusic(music.id)
    this.playerService.setCurrentMusic(music)
  }

  getArtists(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ')
  }

}
