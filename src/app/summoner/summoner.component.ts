import { Component, OnInit } from '@angular/core';
import {SummonerDataService} from "./summoner-data.service";

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
  public summoner: any;
  constructor(private dataService: SummonerDataService) { }

  ngOnInit() {
    return this.dataService.sendGet().subscribe(data=>{
      this.summoner = data;
    });
  }

}
