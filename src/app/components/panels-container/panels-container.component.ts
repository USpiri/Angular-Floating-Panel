import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-panels-container',
  templateUrl: './panels-container.component.html',
  styleUrls: ['./panels-container.component.css']
})
export class PanelsContainerComponent implements OnInit {

  @ViewChild('panelsContainer', { read: ViewContainerRef }) panelsContainer:any;    
  panelTemplate:any;
  PanelsArray:any = [];

  constructor(
  ) { 
    this.panelTemplate = PanelComponent
  }

  ngOnInit(): void {
  }

  AddPanel( title:string, Template:any, data:any = {}, backdrop = false, escape = false, animation = true, center = true, position:{Top:string, Left:string} = {Top:"10%", Left:"10%"}) {
    // Create component 
    const component = this.panelsContainer.createComponent(this.panelTemplate);
    //Set component data
    var uniqueID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    component.instance.uniqueID = uniqueID;
    component.instance.Self = component;
    component.instance.Component = Template;
    component.instance.title = title;
    component.instance.Data = data;
    component.instance.Center = center;
    component.instance.Position = position;
    component.instance.PanelBackdrop = backdrop;
    component.instance.PanelEscape = escape;
    component.instance.Animation = animation;
    
    //Add to Panels array
    this.PanelsArray.push({Name:title, Id:uniqueID});

    //Returns the Panel uniqueID for future use.
    return uniqueID;
  }

  RemovePanel(panelId:string){
    (<HTMLElement>(document.getElementById("panel-" + panelId)!.getElementsByClassName("close")[0])).click();
  }

  RemovePanelFromArray(panelId:string){
    for (var i = this.PanelsArray.length - 1; i >= 0; --i) {
      if (this.PanelsArray[i].Id == panelId) {
        this.PanelsArray.splice(i,1);
      }
    } 
  }

  RemoveAll() {
    this.panelsContainer.clear();
    this.PanelsArray = [];
  }

}
