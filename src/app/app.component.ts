import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Liverpool';



  displayChild: boolean=false;
  toggle() { this.displayChild=!this.displayChild; }

  ngOnInit(): void {
  }

}


