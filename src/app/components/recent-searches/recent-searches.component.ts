import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit {

  recentSearches = ['Top Brasil', 'Top Global', 'O Melhor do Trap Brasil']

  searchField = 'Post Malone'
  
  constructor () {}

  ngOnInit(): void {
      
  }
}
