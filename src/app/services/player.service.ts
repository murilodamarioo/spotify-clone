import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from '.';
import { newMusic } from '../common/factories';
import { IMusic } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentMusic = new BehaviorSubject<IMusic>(newMusic())
  timerId: any = null

  constructor(private spotifyService: SpotifyService) { 
    this.getCurrentMusicPlaying()
  }

  async getCurrentMusicPlaying() {
    clearTimeout(this.timerId)
    
    const music = await this.spotifyService.getCurrentMusicPlaying()
    this.setCurrentMusic(music)
    
    this.timerId = setInterval(async () => {
      await this.getCurrentMusicPlaying()
    }, 3000)
  }

  setCurrentMusic(music: IMusic) {
    this.currentMusic.next(music)
  }
}
