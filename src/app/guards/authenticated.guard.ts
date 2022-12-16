import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad {

  constructor(private router: Router, private spotifyService: SpotifyService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    const token = localStorage.getItem('token')

    if(!token) {
      this.router.navigate(['/login'])
      return false
    }

    return new Promise(async (res) => {
      const userCreated = await this.spotifyService.initializeUser()

      if (userCreated) {
        res(true)
      } else {
        res(this.unauthenticated())
      }
    })      
  }

  unauthenticated() {
    localStorage.clear()
    this.router.navigate(['./login'])
    return false
  }
}
