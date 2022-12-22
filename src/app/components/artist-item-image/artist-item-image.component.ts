import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IArtist } from 'src/app/interfaces';

@Component({
  selector: 'app-artist-item-image',
  templateUrl: './artist-item-image.component.html',
  styleUrls: ['./artist-item-image.component.scss']
})
export class ArtistItemImageComponent implements OnInit{

  artists: IArtist[] = []

  @Input()
  imageSrc = ''

  @Output()
  click = new EventEmitter<void>()

  constructor() {}

  ngOnInit(): void {
      
  }

  onClick() {
    this.click.emit( )
  }

}
