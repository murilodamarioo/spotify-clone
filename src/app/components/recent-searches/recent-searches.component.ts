import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit {

  recentSearches = ['Top Brasil', 'Top Global', 'O Melhor do Trap Brasil', 'Playlist Nostalgia 2010-2012']

  searchField = ''
  
  constructor () {}

  ngOnInit(): void {
      
  }

  setSearch(search: string) {
    this.searchField = search
  }

  searchInputValue() {
    console.log('Searching... ', this.searchField)
  }
}
