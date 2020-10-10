import {AfterViewInit, Component, OnChanges} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',

})
export class AccordionComponent implements OnChanges{
  today: number = Date.now();

  ngOnChanges() {
   console.log("It's working)");


 }
}




