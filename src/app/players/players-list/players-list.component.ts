import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  Player: any = [];


  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    return this.restApi.getPlayers().subscribe(data =>this.Player = data);
  }

  deletePlayer(id){
    if(window.confirm('Are you sure you want to delete?')){
      this.restApi.deletePlayer(id)
        .subscribe(data => this.loadPlayers())
    }
  }
}

