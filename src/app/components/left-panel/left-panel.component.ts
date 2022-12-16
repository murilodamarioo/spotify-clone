import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  menuSelected: string = 'Início'

  // Icons
  homeIcon = faHome
  searchIcon = faSearch
  artistsIcon = faGuitar
  playlistIcon = faMusic

  constructor() {}

  ngOnInit(): void {
  }

  buttonClick(button: string) {
    this.menuSelected = button
  }

}
