import { Subscription } from 'rxjs';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusic } from 'src/app/common/factories';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusic } from 'src/app/interfaces';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services';

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

  subs: Subscription[] = []

  constructor(private activedRoute: ActivatedRoute, private spotifyService: SpotifyService) {}

  ngOnInit(): void {
      this.getMusics()
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe())
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
  }

  async getArtistData(artistId: string) {

  }

  setPageData(bannerText: string, bannerImage: string, musics: IMusic[]) {
    this.bannerImageUrl = bannerImage
    this.bannerText = bannerText
    this.musics = musics
  }

}
