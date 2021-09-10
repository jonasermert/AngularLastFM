import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Artist} from "../../../Shared/models/Artist";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styles: []
})
export class MainViewComponent implements OnInit {
  @Output() artistSelected = new EventEmitter<Artist>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(artist: Artist) {
    this.artistSelected.emit(artist);
  }

}
