import {AfterViewInit, Component, OnInit, EventEmitter, Output} from '@angular/core';
import {style} from '@angular/animations';
import {logger} from 'codelyzer/util/logger';
import {Page1Component} from '../page1.component';
import {LogService} from '../log,service';

@Component({
  selector: 'app-popover',
  templateUrl: './PopOver.component.html',
  styleUrls: ['./Popover.component.css']

})
export class PopOverComponent implements AfterViewInit{
  ngAfterViewInit() {​​​​
  console.log("Carousel started");
  }
  name: string;
  constructor(private logger: LogService) {
  }

  count: number=0;
  @Output() newTaskEvent = new EventEmitter<string>();
  addNewTask(value: string){
    this.newTaskEvent.emit(value);
    alert(value + "is added to your list");
    this.count=this.count+1;
    console.log("Button Clicked");

    this.logger.log("Test the `log()` Method");
  }
}

