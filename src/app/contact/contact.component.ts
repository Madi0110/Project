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


  registerForm = new FormGroup({
    firstName: new FormControl(),
    txtEmail: new FormControl(),
    txtPhone: new FormControl(),
    txtMsg: new FormControl()
  });


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

  onSubmit(){
    console.log(this.registerForm.value);
  }
  constructor() { }

  ngOnInit(): void {
  }


}
