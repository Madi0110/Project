import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',

})
export class CarouselComponent implements AfterViewInit{
  ngAfterViewInit() {​​​​
  console.log("Carousel started");
  }
}
