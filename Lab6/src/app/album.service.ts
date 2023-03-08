import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Album, AlbumPhotos } from './models';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';
  
  constructor(private client: HttpClient) {  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album: Album) {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  getAlbumPhotos(id: number): Observable<AlbumPhotos[]> {
    return this.client.get<AlbumPhotos[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }

  updatePost(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

}
