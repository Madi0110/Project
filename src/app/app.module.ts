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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Page3Component } from './page3/page3.component';
import { StadiumpageComponent } from './stadiumpage/stadiumpage.component';
import { MapComponent } from './page3/map/map.component';
import { CompComponent } from './page1/comp/comp.component';
import {ServiceService} from './page2/service.service';
import {LogService} from './page1/log,service';
import {LoggService} from './page2/log.service';
import {AboutGuard} from './aboutpage/about.guard';
import {ExitAboutGuard} from './exit.about.guard';
import { ContactComponent } from './contact/contact.component';


const routes = [
  { path: '', component: MainpageComponent,   },
  { path: 'about', component: AboutpageComponent, canActivate: [AboutGuard] },
  { path: 'stadium', component: StadiumpageComponent },
  { path: 'contact', component: ContactComponent, canDeactivate: [ExitAboutGuard]}

];



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
    Page3Component,
    StadiumpageComponent,
    MapComponent,
    CompComponent,
    ContactComponent,



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
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [LogService, ServiceService, LoggService,AboutGuard,ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
