import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

LastFM.prototype._searchArtists = function (artist, options) {
  if (options === void 0) { options = {}; }
  var settings = {
    artist: artist,
    method: 'artist.search'
    // limit: 10,
    // page: 1
  };
  return this._http(settings, options);
};
LastFM.prototype.searchArtists = function (artist, options) {
  var _this = this;
  if (options === void 0) { options = {}; }
  return this._searchArtists.apply(this, arguments)
    .map(function (data: any) { return _this.validateData(data, 'results.artistmatches.artist', []); })
    .map(function (artists: any[]) {
      return artists
        .filter(function (artist) { return _this.checkUsableImage(artist); })
        .map(function (artist) { return Artist.fromJSON(artist); });
    });
};

LastFM.prototype.getTopArtists = function (options: {} | undefined) {
  var _this = this;
  if (options === void 0) { options = {}; }
  return this._getTopArtists.apply(this, arguments)
    .map(function (data: any) { return _this.validateData(data, 'artists.artist'); })
    .map(function (artists: any[]) {
      return artists
        .map(function (artist) { return Artist.fromJSON(artist); });
    });
};


