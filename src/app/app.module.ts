import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummonerComponent } from './summoner/summoner.component';
import {HttpClientModule} from "@angular/common/http";
import {SummonerDataService} from "./summoner/summoner-data.service";

@NgModule({
  declarations: [
    AppComponent,
    SummonerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SummonerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
