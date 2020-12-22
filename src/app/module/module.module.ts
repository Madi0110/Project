import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StadiumpageComponent} from '../stadiumpage/stadiumpage.component';
import {Page3Component} from '../page3/page3.component';
import {MapComponent} from '../page3/map/map.component';



@NgModule({
  declarations: [StadiumpageComponent,
    Page3Component,
    MapComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { }
