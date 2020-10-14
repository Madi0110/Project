import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule,CollapseModule, WavesModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {Page1Component} from './page1/page1.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselComponent} from './page1/Carousel/carousel.component';
import {PopOverComponent} from './page1/PopOver/PopOver.component';
import {AccordionComponent} from './page2/Accordion/accordion.component';
import {AccordionModule} from 'ng-uikit-pro-standard';
import { Page2Component } from './page2/page2.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { Page3Component } from './page3/page3.component';
import { StadiumpageComponent } from './stadiumpage/stadiumpage.component';
import { MapComponent } from './page3/map/map.component';
import { CompComponent } from './page1/comp/comp.component';


const routes = [
  { path: '', component: MainpageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'stadium', component: StadiumpageComponent },

]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1Component,
    CarouselComponent,
    PopOverComponent,
    AccordionComponent,
    Page2Component,
    MainpageComponent,
    AboutpageComponent,
    LayoutComponent,
    Page3Component,
    StadiumpageComponent,
    MapComponent,
    CompComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    CollapseModule,
    WavesModule,
    AccordionModule,
    RouterModule.forRoot(routes),
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
