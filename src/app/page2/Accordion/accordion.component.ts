import {AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, } from '@angular/core';
import {ServiceService} from '../service.service';
import {Inf} from '../../inf';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',

})
export class AccordionComponent implements OnChanges, AfterContentInit{
  today: number = Date.now();

constructor (private service:ServiceService ){}
cards = this.service.getInf();


  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnChanges() {
    console.log("It's working)");
  }

  ngAfterContentInit() {
    console.log("This is working!")
    this.slides = this.chunk(this.cards, 3);
  }

}




