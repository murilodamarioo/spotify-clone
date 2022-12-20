import { IArtist, IPlaylist, IUser } from '../interfaces';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import  Spotify  from  'spotify-web-api-js'
import { 
  spotifyArtistToArtist, 
  spotifyPlaylistToPlaylist, 
  spotifyTrackToMusic, 
  spotifyUserToUser 
} from '../common/spotifyHelper';
import { Router } from '@angular/router';
import { IMusic } from '../interfaces/IMusic';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null
  user: IUser

  constructor(private router: Router) { 
    this.spotifyApi = new Spotify()
  }

  async initializeUser() {
    if (!!this.user) {
      return true
    }

    const token = localStorage.getItem('token')

    if (!token) {
      return false
    }

    try {

      this.handleAccessToken(token)
      await this.getSpotifyUser()
      return !!this.user
    
    } catch (error) {
      return false
    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe()
    this.user = spotifyUserToUser(userInfo)
  }

  getLoginUrl() {
    const authEndPoint = `${SpotifyConfiguration.authEndPoint}?`
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`

    return authEndPoint + clientId + redirectUrl + scopes  + responseType
  }

  getTokenUrlCallback() {
    if (!window.location.hash) {
      return ''
    }
    const params = window.location.hash.substring(1).split('&')

    const accessToken = params[0].split('=')[1]

    return accessToken
  }

  handleAccessToken(token: string ) {
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
  }

  async  searchPlaylistsUser(offset = 0, limit = 50): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, { offset, limit })

    return playlists.items.map(x => spotifyPlaylistToPlaylist(x))
  }

  async searchTopArtists(limit = 10): Promise<IArtist[]> {
    const artists = await this.spotifyApi.getMyTopArtists({ limit })

    return artists.items.map(x => spotifyArtistToArtist(x))
  }

  async searchMusics(offset = 0, limit = 50): Promise<IMusic[]> {
    const musics = await this.spotifyApi.getMySavedTracks({offset, limit})

    return musics.items.map(x => spotifyTrackToMusic(x.track))
  }

  logoutAccount () {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
