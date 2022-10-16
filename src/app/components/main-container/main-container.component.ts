import { Component, OnInit, ViewChild } from '@angular/core';
import { ExampleComponent } from '../example/example.component';
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

  @ViewChild(PanelsContainerComponent, {static: false}) panels: PanelsContainerComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  OpenPanel(){
    this.panels!.AddPanel( "Location" , ExampleComponent, this.Data, this.Backdrop, this.Escape, this.Animation);
  }

}
