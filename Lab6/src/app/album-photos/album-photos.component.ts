import { Component, OnInit} from '@angular/core';
import { Album} from "../models";
import { AlbumPhotos} from "../models";
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  // "!" non-null assertion operator - переменная никогда не будет 
  // null/undefined во врем выполнения
  
  albums!: Album;
  photos!: AlbumPhotos[];
  loaded: boolean = true;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.getAlbum();
    this.getPhotos();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((albumas) => {
        this.albums = albumas;
      });
    });
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbumPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  goBack() {
    this.location.back();
  }

}
