import { Component, OnInit } from '@angular/core';
import { FetchPlayersService } from './services/fetch-players.service';
import { Player } from './models/Player';
import { HttpClient } from '@angular/common/http';
import { Team } from './models/Team';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AppConfig } from './config/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MPT';

  public players: Player[]=[];

  displayedColumns: string[] = ['rank', 'movement', 'name', 'country'];

  constructor(
    private readonly fetchPlayersService: FetchPlayersService,
    private readonly http: HttpClient,
    public dialog: MatDialog,
    private config: AppConfig
    ) { 
      
      }

      ngOnInit(){
        this.players = this.config.getPlayers();
      }
    }
  
