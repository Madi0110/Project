import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './PopOver.component.html',

})
export class PopOverComponent implements AfterViewInit{
  ngAfterViewInit() {​​​​
  console.log("Carousel started");
  }
}
