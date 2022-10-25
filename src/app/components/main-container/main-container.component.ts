import { Component, OnInit, ViewChild } from '@angular/core';
import { ExampleTemplateComponent } from '../example-template/example-template.component';
import { PanelFrameComponent } from '../panels-container/panel/panel-frame/panel-frame.component';
import { PanelsContainerComponent } from '../panels-container/panels-container.component';
import { PanelsService } from '../panels-container/service/panels.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  data:any;
  backdrop:boolean = false;
  externalWindows:boolean = false;
  animation:boolean = true;

  exampleHTML:any = {
    content : "<div class=\"card\" style=\"width: 10px !important;\">\r\n  <div class=\"card-body text-dark\">\r\n    <h5 class=\"card-title\">Card title</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>"
  }

  exampleComponent:any;

  @ViewChild(PanelsContainerComponent, {static: false}) panels: PanelsContainerComponent | undefined;

  constructor(
    private panelService:PanelsService
  ) { }

  ngOnInit(): void {
    this.exampleComponent = {
      content: ExampleTemplateComponent,
      templateData: "Un string"
    }
  }

  OpenPanel(){
    this.panelService.onAddPanel( "Location" , PanelFrameComponent, this.exampleComponent, this.backdrop, this.externalWindows, this.animation);
    // this.panels!.addPanel( "Location" , PanelFrameComponent, this.exampleComponent, this.backdrop, this.escape, this.animation);
  }

}
