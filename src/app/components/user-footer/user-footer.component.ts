import { Component } from '@angular/core';
import { faSignOutAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/interfaces';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.scss']
})
export class UserFooterComponent {

  signOutIcon: IconDefinition = faSignOutAlt
  user: IUser = null

  constructor (private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.user = this.spotifyService.user
  }

  logout() {
    this.spotifyService.logoutAccount()
  }
}
