import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit(): void {
    this.checkTkoenUrlCallback()
  }

  checkTkoenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback()
    
    if (!!token) {
      this.spotifyService.handleAccessToken(token)
      this.router.navigate(['/player'])
    }
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl()
  }

}
