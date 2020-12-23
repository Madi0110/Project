import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.css']
})
export class PlayersCreateComponent implements OnInit {
  @Input() playerDetails = {name: '', email: '', phone: ''}


  constructor(public restApi: RestApiService, public  router: Router) { }

  ngOnInit(): void {
  }

  addPlayer(){
    this.restApi.createPlayer(this.playerDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/']) })
  }

}
``
