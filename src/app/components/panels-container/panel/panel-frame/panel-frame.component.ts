import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-frame',
  templateUrl: './panel-frame.component.html',
  styleUrls: ['./panel-frame.component.css']
})
export class PanelFrameComponent implements OnInit {

  isShowingData:boolean = true;
  showPortal = false; // TODO: Make it usable again

  title:string = "";
  data:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.data); // TO DELETE
  }

  showData(){
    this.isShowingData = !this.isShowingData;
  }

}
