import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.css']
})
export class PlayersEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  playerData: any = {};

  constructor(public restApi: RestApiService,
              public actRoute: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.restApi.getPlayer(this.id)
      .subscribe(data => this.playerData = data);
  }

  updatePlayer() {
    if(window.confirm('Are you sure you want update?')){
      this.restApi.updatePlayer(this.id, this.playerData)
        .subscribe(data => {
          this.router.navigate(['/players-list'])
        })
    }
  }

}
