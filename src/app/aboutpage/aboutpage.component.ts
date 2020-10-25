import { Component, OnInit } from '@angular/core';
import {LoggService} from '../page2/log.service';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  constructor(private logger: LoggService) {
  }


  displayChild: boolean=false;
  toggle() {
    this.displayChild=!this.displayChild;
    this.logger.log("Test the `log()` Method");
  }

  ngOnInit(): void {
  }
}
