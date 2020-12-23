import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule,CollapseModule, WavesModule } from 'angular-bootstrap-md';

import { AppRouting } from './app-routing';
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
import {ModuleModule} from './module/module.module';
import {ModuleRoutingModule} from './module/module-routing.module';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersEditComponent } from './players/players-edit/players-edit.component';
import { PlayersCreateComponent } from './players/players-create/players-create.component';
import { PlayersComponent } from './players/players.component';
import {HttpClientModule} from '@angular/common/http';



const routes = [
  { path: '', component: MainpageComponent,   },
  { path: 'about', component: AboutpageComponent, canActivate: [AboutGuard] },
  { path: 'contact', component: ContactComponent, canDeactivate: [ExitAboutGuard]},
  { path: 'players', component: PlayersComponent },


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
    CompComponent,
    ContactComponent,
    PlayersListComponent,
    PlayersEditComponent,
    PlayersCreateComponent,
    PlayersComponent,





  ],
  imports: [
    BrowserModule,
    AppRouting,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    CollapseModule,
    WavesModule,
    AccordionModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    ModuleModule,
    ModuleRoutingModule,
    HttpClientModule,



  ],
  providers: [LogService, ServiceService, LoggService,AboutGuard,ExitAboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
