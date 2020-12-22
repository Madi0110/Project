import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {ComponentCanDeactivate} from '../exit.about.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,ComponentCanDeactivate {


  registerForm = new FormGroup({
    firstName: new FormControl(),
    txtEmail: new FormControl(),
    txtMsg: new FormControl()
  });


  saved: boolean = false;
  save(){
    this.saved = true;
  }
  canDeactivate() : boolean | Observable<boolean>{

    if(!this.saved){
      return confirm(" Your message wasn't saved, are you want to leave this page?");
    }
    else{
      return true;
    }
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
