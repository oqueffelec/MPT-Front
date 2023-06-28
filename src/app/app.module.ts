import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { NewTeamComponent } from './new-team/new-team.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {AppConfig} from './config/app.config';
import { TeamRanksComponent } from './team-ranks/team-ranks.component';
import { MatSortModule } from '@angular/material/sort';



export function loadConfig(config: AppConfig) {
  return () => config.load();
}


@NgModule({
  declarations: [
    AppComponent,
    NewTeamComponent,
    TeamRanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [
    AppConfig,
    {provide: APP_INITIALIZER, useFactory: loadConfig, deps: [AppConfig], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
