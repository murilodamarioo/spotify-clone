import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { newMusic } from 'src/app/common/factories';
import { IMusic } from 'src/app/interfaces';
import { PlayerService } from 'src/app/services';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  subs: Subscription[] = []

  music: IMusic = newMusic()

  stepBackwardIcon = faStepBackward
  stepForwardIcon = faStepForward

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getMusicPlaying()
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => { sub.unsubscribe })
  }

  getMusicPlaying() {
    const sub = this.playerService.currentMusic.subscribe(music => {
      this.music = music
      console.log('Current music: ', this.music)
    })

    this.subs.push(sub)
  }

  returnMusic() {
    this.playerService.returnMusic()
  }

  nextMusic() {
    this.playerService.nextMusic
  }
}
