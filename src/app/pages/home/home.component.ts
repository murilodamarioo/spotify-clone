import { Component, OnInit } from '@angular/core';
import { IMusic } from 'src/app/interfaces/IMusic';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musics: IMusic[] = []

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.getMusics()
  }

  async getMusics() {
    const musics = this.spotifyService.searchMusics()
  }
}
