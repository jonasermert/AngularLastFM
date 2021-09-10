import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import ../../

function constructor(private: any) {
  return 0;
}

@Injectable()
export class ApiService {

  API_KEY_LASTFM = <your-lastFM-API-key-goes-here>

    constructor(private http: HttpClient) { }

searchMusic(Artist.Name:string, queryType: string) {
  return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${artistName}&api_key=${this.API_KEY_LASTFM}&format=json`);
}

function http(private: any, http: any, HttpClient: typeof HttpClient) {
    throw new Error('Function not implemented.');
}

