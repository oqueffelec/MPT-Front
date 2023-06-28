import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Team } from '../models/Team';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/app.config';
import { Player } from '../models/Player';
import { MatSort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';
import { FetchPlayersService } from '../services/fetch-players.service';

@Component({
  selector: 'app-team-ranks',
  templateUrl: './team-ranks.component.html',
  styleUrls: ['./team-ranks.component.scss']
})
export class TeamRanksComponent implements OnInit{
  @ViewChild(MatSort) sort: MatSort;
  @Input('players')
  public players: Player[];
  
  public teams: Team[] = [];

  public evolutionRanges = [-15,-5,0,5,15,25]

  @Input() events: Observable<Team>;
  

  public displayedColumns: string[] = ['name', 'score', 'playerTop10', 'playerTop20', 'playerTop30', 'playerTop40', 'playerTop50', 'playerTop60', 'playerTop70', 'playerTop80', 'playerTop90', 'playerTop100', 'supprimer équipe'];

  
  constructor(
    private readonly http: HttpClient,
    private readonly appConfig: AppConfig
    ) { 
    
      }

  ngOnInit() {
    this.teams = this.appConfig.getTeams();
    this.setColorEvolution();
    this.scoreMPT();
    this.events.subscribe((team) => {
      this.teams = this.teams.concat(new Team(team));
      this.scoreMPT();
      this.setColorEvolution();
    });
  }

  private scoreMPT() {
    this.teams.forEach(team => {

      team.score = 
      this.getEvolutionByPlayerByName(team.playerTop10) +  
      this.getEvolutionByPlayerByName(team.playerTop20) +  
      this.getEvolutionByPlayerByName(team.playerTop30) +  
      this.getEvolutionByPlayerByName(team.playerTop40) +  
      this.getEvolutionByPlayerByName(team.playerTop50) +  
      this.getEvolutionByPlayerByName(team.playerTop60) +  
      this.getEvolutionByPlayerByName(team.playerTop70) +  
      this.getEvolutionByPlayerByName(team.playerTop80)+  
      this.getEvolutionByPlayerByName(team.playerTop90) +  
      this.getEvolutionByPlayerByName(team.playerTop100);
     
    });
    this.teams.sort((a: Team, b: Team) => b.score - a.score);
  }

  private getEvolutionByPlayerByName(name: String): number {
    let player = this.players.find(player => player.competitor.name === name);
    return player ? player.movement : 0;
  }

  private setColorEvolution() : void{
    this.teams.forEach(team => {
      team.playerTop10Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop10));
      team.playerTop20Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop20));
      team.playerTop30Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop30));
      team.playerTop40Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop40));
      team.playerTop50Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop50));
      team.playerTop60Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop60));
      team.playerTop70Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop70));
      team.playerTop80Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop80));
      team.playerTop90Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop90));
      team.playerTop100Category = this.getRangeColours(this.getEvolutionByPlayerByName(team.playerTop100));
    })
  }

  private getRangeColours(evolution: number) : number {
    let current = this.evolutionRanges[0];
     this.evolutionRanges.forEach(value => {
      if(Math.abs(value - evolution) < Math.abs(current - evolution)) {
        current = value;
      }
     });
     return this.evolutionRanges.indexOf(current);
  }


  public deleteTeam(element: Team): void {
    this.http
        .delete<Player[]>(FetchPlayersService.DB + "teams/" + element.name + ".json")
        .subscribe(data => {    
          this.teams = this.teams.filter(team => team.name!=element.name)
        });
  }
}
