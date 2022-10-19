import { Component, OnInit, ViewChild } from '@angular/core';
import { ExampleComponent } from '../example/example.component';
import { PanelFrameComponent } from '../panels-container/panel/panel-frame/panel-frame.component';
import { PanelsContainerComponent } from '../panels-container/panels-container.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  Data:any;
  Backdrop:boolean = false;
  Escape:boolean = false;
  Animation:boolean = true;

  exampleHTML:any = {
    content : "<div class=\"card\" style=\"width: 10px !important;\">\r\n  <div class=\"card-body text-dark\">\r\n    <h5 class=\"card-title\">Card title</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>"
  }

  @ViewChild(PanelsContainerComponent, {static: false}) panels: PanelsContainerComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  OpenPanel(){
    this.panels!.AddPanel( "Location" , PanelFrameComponent, this.Data, this.Backdrop, this.Escape, this.Animation);
  }

}
