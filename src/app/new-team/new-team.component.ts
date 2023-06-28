import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from '../models/Team';
import { Player } from '../models/Player';
import { HttpClient } from '@angular/common/http';
import { FetchPlayersService } from '../services/fetch-players.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit{
  @Input('players')
  public players: Player[];

  public team: Team = new Team();

  eventsSubject: Subject<Team> = new Subject<Team>();


  public playersTop10: Player[];
  public playersTop20: Player[];
  public playersTop30: Player[];
  public playersTop40: Player[];
  public playersTop50: Player[];
  public playersTop60: Player[];
  public playersTop70: Player[];
  public playersTop80: Player[];
  public playersTop90: Player[];
  public playersTop100: Player[];


  constructor(private http: HttpClient
    ) { 
        }

  ngOnInit(){
    this.playersTop10 = this.players.filter(player => +player.rank <= 10);
    this.playersTop20 = this.players.filter(player => +player.rank <= 20 && +player.rank >= 10);
    this.playersTop30 = this.players.filter(player => +player.rank <= 30 && +player.rank >= 20);
    this.playersTop40 = this.players.filter(player => +player.rank <= 40 && +player.rank >= 30);
    this.playersTop50 = this.players.filter(player => +player.rank <= 50 && +player.rank >= 40);
    this.playersTop60 = this.players.filter(player => +player.rank <= 60 && +player.rank >= 50);
    this.playersTop70 = this.players.filter(player => +player.rank <= 70 && +player.rank >= 60);
    this.playersTop80 = this.players.filter(player => +player.rank <= 80 && +player.rank >= 70);
    this.playersTop90 = this.players.filter(player => +player.rank <= 90 && +player.rank >= 80);
    this.playersTop100 = this.players.filter(player => +player.rank <= 100 && +player.rank >= 90);
  }

  onSubmit(form: NgForm) {
    // Appel POST à LA BASE
console.log(JSON.stringify(this.team))
    this.team.creationDate = new Date;
    this.http.put(FetchPlayersService.DB + "teams/" + this.team.name + ".json", JSON.stringify(this.team))
    .subscribe(res =>{
      this.emitEventToChild();
    });
  }

  emitEventToChild() {
    this.eventsSubject.next(this.team);
  }
}
