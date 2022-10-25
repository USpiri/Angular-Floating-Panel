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
  template:any;
  component:any;
  externalWindows:boolean = true;

  constructor() { }
  ngAfterViewInit(): void {
    const content = this.viewer.createComponent(this.template.template);
    ((content.instance)).templateData = this.template.templateData;
    content.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
  }

  showData(){
    this.isShowingData = !this.isShowingData;
  }

}
