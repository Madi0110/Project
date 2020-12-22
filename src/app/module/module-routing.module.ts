import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StadiumpageComponent} from '../stadiumpage/stadiumpage.component';

const routes: Routes = [
  {path : 'stadium', component: StadiumpageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
