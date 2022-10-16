import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap';
  Data:any; // Property which can be used to transfer any kind of data to the Panel.
  Backdrop:boolean = false;
  Escape:boolean = false;
  Animation:boolean = true;

  constructor(){}
  ngOnInit(){}

  
}
