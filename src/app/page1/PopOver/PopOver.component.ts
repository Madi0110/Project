import {AfterViewInit, Component, OnInit, EventEmitter, Output} from '@angular/core';
import {LogService} from '../log,service';
import {ComponentCanDeactivate} from '../../exit.about.guard';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-popover',
  templateUrl: './PopOver.component.html',
  styleUrls: ['./Popover.component.css']

})
export class PopOverComponent implements ComponentCanDeactivate,AfterViewInit {

  saved: boolean = false;
  save(){
    this.saved = true;
  }
  canDeactivate() : boolean | Observable<boolean>{

    if(!this.saved){
      return confirm("Вы хотите покинуть страницу?");
    }
    else{
      return true;
    }
  }



  ngAfterViewInit() {​​​​
  console.log("Carousel started");
  }
  name: string;

  constructor(private logger: LogService) {
  }

  count: number = 0;
  @Output() newTaskEvent = new EventEmitter<string>();

  addNewTask(value: string) {
    this.newTaskEvent.emit(value);
    alert(value + "is added to your list");
    this.count = this.count + 1;
    console.log("Button Clicked");
    this.logger.log("Test the `log()` Method");

  }
  }



