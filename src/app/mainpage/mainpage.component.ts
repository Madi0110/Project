import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  items = ['Salah'];
  addTask(newTask:string){
    this.items.push(newTask);
  }
  ngOnInit(): void{
  }

}
