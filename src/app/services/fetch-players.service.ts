import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/Player';


@Injectable({
  providedIn: 'root'
})
export class FetchPlayersService {
  public static DB="https://monpetittennis-default-rtdb.europe-west1.firebasedatabase.app/";
  public static ranking_endpoint="competitor_rankings.json";



  constructor(
    private readonly http: HttpClient
    ) { 
    }

    public getApiRank() : Observable<Player[]> {
      return this.http.get<Player[]>(FetchPlayersService.DB + FetchPlayersService.ranking_endpoint);
    } 
}
