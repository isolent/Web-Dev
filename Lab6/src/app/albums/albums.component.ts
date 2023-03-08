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
  newAlbum: string;
  loaded: boolean;
  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newAlbum = '';
    this.loaded = true;
  }

  ngOnInit(): void {
    // this.albums = ALBUMS;
    this.getAlbums();
   
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  removeAlbum(idx: number) {
    this.albums = this.albums.filter((x) => x.id !== idx);
  }

  addAlbum() {
    console.log(this.newAlbum)

    const album = {
      title: this.newAlbum
    };
    
    this.loaded = false;
    this.albumService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });


  }
}
