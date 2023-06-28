import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Player } from '../models/Player';
import { FetchPlayersService } from '../services/fetch-players.service';
import { Team } from '../models/Team';

@Injectable()
export class AppConfig {

  private players: Player[] = [];
  private player: Player;
  private teams: Team[] = [];

  constructor(private http: HttpClient) {

  }

  load() {
    return new Promise((resolve) => {
      this.http
        .get<Player[]>(FetchPlayersService.DB + FetchPlayersService.ranking_endpoint)
        .subscribe(data => {
            data.forEach(player => {
                player.competitor.name = player.competitor.name.split(",")[1].trimStart() + " " + player.competitor.name.split(",")[0];
                this.players.push(new Player(player));
              });
              this.http
              .get<Team[]>(FetchPlayersService.DB + "teams.json")
              .subscribe(data => {
                for(var team in data){
                  this.teams.push(new Team(data[team]))
                }
                  resolve(true);
              });  
        });
    });
  }

  public getPlayer() {
    return this.player;
  }

  public setPlayer(player: Player) {
    this.player=player;
  }

  public getPlayers() {
    return this.players;
  }

  public getTeams() {
    return this.teams;
  }

  public setPlayers(players: Player[]) {
    this.players=players;
  }
}