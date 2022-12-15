import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    
  }

  openLoginPage() {
    window.location.href = this.spotifyService.getLoginUrl()
  }

}
