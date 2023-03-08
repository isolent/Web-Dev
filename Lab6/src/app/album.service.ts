import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { Album } from './models';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  LINK = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) {  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.LINK}/albums`)
  }

  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.LINK}/albums/${id}`)
  }
}
