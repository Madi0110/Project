import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {



  displayChild: boolean=false;
  toggle() { this.displayChild=!this.displayChild; }

  ngOnInit(): void {
  }


}
