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
import {AccordionComponent} from './page1/Accordion/accordion.component';
import {AccordionModule} from 'ng-uikit-pro-standard';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page1Component,
    CarouselComponent,
    PopOverComponent,
    AccordionComponent



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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
