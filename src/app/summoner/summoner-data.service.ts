import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SummonerDataService {
  public REST_API = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Crasherer";
  constructor(private _http: HttpClient) { }

  sendGet() {
    const httpHeaders = new HttpHeaders({
      'X-Riot-Token': 'RGAPI-d27785ce-192b-4ec5-812f-353d3bd2a9cd',
    });
    return this._http.get(this.REST_API, {headers: httpHeaders});
  }
}
