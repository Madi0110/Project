import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersCreateComponent} from './players/players-create/players-create.component';
import {PlayersEditComponent} from './players/players-edit/players-edit.component';
import {PlayersListComponent} from './players/players-list/players-list.component';

const routes: Routes = [
  {path: 'list-players', pathMatch: 'full', redirectTo:'players-list'},
  {path: 'create-players',  component: PlayersCreateComponent},
  {path: 'players-list',  component: PlayersListComponent},
  {path: 'player-edit/:id',  component: PlayersEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
