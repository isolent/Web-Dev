import { Component, OnInit, Input } from '@angular/core';
import {Album} from "../models";
import {ALBUMS} from "../fake-db";
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums: Album[];
  constructor(private albumService: AlbumService) {
    this.albums = [];
  }

  ngOnInit(): void {
    // this.albums = ALBUMS;
    this.getAlbums();
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  removeAlbum(idx: number) {
    this.albums = this.albums.filter((x) => x.id !== idx);
  }
}
