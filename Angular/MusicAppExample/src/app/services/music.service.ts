import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  //tiền tố API URL để lấy dữ liệu.
  PREFIX_API_URL = 'http://api.openweathermap.org/data/2.5/weather';
  API_KEY = '180f734ca78125afb021e7f1d162f4a2';
  //inject(truyền vào) các service cần dùng vào constructor.
  constructor(private httpClient: HttpClient) { }

  //#region GET methods
  //
  getRecentSongs(cityname: string): any{
    return this.httpClient.get(this.PREFIX_API_URL
      + '?q' + cityname
      + '&APPID' + this.API_KEY)
  }
  //#endregion
}
