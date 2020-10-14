import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  @Input() item: string;
  ngOnInit(): void {
  }
}
