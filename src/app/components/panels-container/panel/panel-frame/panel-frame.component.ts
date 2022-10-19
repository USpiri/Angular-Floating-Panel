import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-frame',
  templateUrl: './panel-frame.component.html',
  styleUrls: ['./panel-frame.component.css']
})
export class PanelFrameComponent implements OnInit {

  isShowingData:boolean = true;
  showPortal = false;

  title:string = "";
  Data:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.Data);
  }

  showData(){
    this.isShowingData = !this.isShowingData;
  }

}
