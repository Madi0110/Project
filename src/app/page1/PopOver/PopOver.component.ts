import {AfterViewInit, Component, OnInit, EventEmitter, Output} from '@angular/core';
import {style} from '@angular/animations';

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

  count: number=0;
  @Output() newTaskEvent = new EventEmitter<string>();
  addNewTask(value: string){
    this.newTaskEvent.emit(value);
    alert(value + "is added to your list");
    this.count=this.count+1;
    console.log("Button Clicked")
  }
}
