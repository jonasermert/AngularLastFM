import {Component, Input, OnInit} from '@angular/core';
import { Artist } from "Shared/models/Artist.model";

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() selectedArtist: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
