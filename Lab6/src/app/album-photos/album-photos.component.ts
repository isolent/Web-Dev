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
  // null/undefined во время выполнения
  
  albumPhotos: AlbumPhotos[] = [];
  id : number = 0;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumService) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) =>{
      this.id = Number(params.get("id"));
      this.getAlbumPhotos(this.id);
    })
    
  }

  getAlbumPhotos(id: number) {
    this.albumsService.getAlbumPhotos(id).subscribe((photos) =>{
      this.albumPhotos = photos;
    })
  }

  goBack() {
    this.location.back();
  }

}
