import { Component, OnInit, Input } from '@angular/core';
import {Album} from "../models";
import {ALBUMS} from "../fake-db";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[];
  constructor() {
    this.albums = [];
  }

  ngOnInit(): void {
    this.albums = ALBUMS;
  }

  removeAlbum(idx: number) {
    this.albums = this.albums.filter((x) => x.id !== idx);
  }
}
