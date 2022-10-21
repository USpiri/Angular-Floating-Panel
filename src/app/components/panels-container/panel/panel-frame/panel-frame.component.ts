import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-panel-frame',
  templateUrl: './panel-frame.component.html',
  styleUrls: ['./panel-frame.component.css']
})
export class PanelFrameComponent implements OnInit, AfterViewInit {

  @ViewChild('viewer', { read: ViewContainerRef }) viewer:any;

  isShowingData:boolean = true;
  showPortal = false;

  title:string = "";
  data:any;
  component:any;

  constructor() { }
  ngAfterViewInit(): void {
    const content = this.viewer.createComponent(this.data.content);
    ((content.instance)).data = this.data.templateData;
    content.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
  }

  showData(){
    console.log("HOLA");
    
    this.isShowingData = !this.isShowingData;
  }

}
