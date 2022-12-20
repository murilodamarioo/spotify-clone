import { Component, OnInit } from '@angular/core';
import { newArtist } from 'src/app/common/factories';
import { IArtist } from 'src/app/interfaces';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.scss']
})
export class TopArtistComponent implements OnInit {

  topArtist: IArtist = newArtist()
  
  constructor (private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.searchArtist()
  }

  async searchArtist() {
    const artists = await this.spotifyService.searchTopArtists(1)

    if (!!artists) {
      this.topArtist = artists.pop()
    }

    console.log(this.topArtist)
  }
}
