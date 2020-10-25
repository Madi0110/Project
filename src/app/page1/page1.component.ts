import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements  OnInit{
  today: number = Date.now();
  @Input() item: string;
  ngOnInit(): void {
  }

}
