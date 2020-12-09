import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComponentCanDeactivate} from '../exit.about.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,ComponentCanDeactivate {

  saved: boolean = false;
  save(){
    this.saved = true;
  }
  canDeactivate() : boolean | Observable<boolean>{

    if(!this.saved){
      return confirm("Are you want to leave this page?");
    }
    else{
      return true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
