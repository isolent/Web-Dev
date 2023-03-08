import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../fake-db';
import {Album} from "../models"
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;

  constructor (private route: ActivatedRoute,
              private albumsService: AlbumService,
              private location: Location) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
      this.route.paramMap.subscribe((params) => {
        const id = Number(params.get('id'));
        
        this.loaded = false;

        this.albumsService.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        });
      })
  }

  updatePost() {
    this.loaded = false;
    this.albumsService.updatePost(this.album).subscribe((albumz) => {
      console.log(albumz);
      this.loaded = true;
    });
  }


  goBack() {
    this.location.back();
  }
}
