import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelComponent } from './panel/panel.component';
import { PanelTemplate } from './models/panels-interfaces';
import { PanelsService } from './service/panels.service';

@Component({
  selector: 'app-panels-container',
  templateUrl: './panels-container.component.html',
  styleUrls: ['./panels-container.component.css']
})
export class PanelsContainerComponent implements OnInit {

  // Panel Container
  @ViewChild('panelsContainer', { read: ViewContainerRef }) panelsContainer:any;

  //Variable for pannel frame template (Allows make different panels)
  panelTemplate:any;

  //Variable for store all panels
  panelsArray:any = [];

  constructor(
    private panelService:PanelsService
  ) { 
    // Set Panel Frame Template - TODO: Set it dynamically from "PanelsService"
    this.panelTemplate = PanelComponent
  }

  ngOnInit(): void {
    if (this.panelService.subscriptions.length === 0) {    
      this.panelService.subscriptions.push( 
        this.panelService.addPanel.subscribe((data:PanelTemplate) => {    
          this.addPanel(
            data.title,
            data.panelFrame,
            data.dataTemplate, 
            data.backdrop,
            data.externalWindows,
            data.animation
          );
        }
      ));
      this.panelService.subscriptions.push( 
        this.panelService.removePanel.subscribe(( panelId:string ) => {    
          this.removePanel( panelId );
        }
      ));
      this.panelService.subscriptions.push( 
        this.panelService.removePanelFromArray.subscribe(( panelId:string ) => {    
          this.removePanelFromArray( panelId );
        }
      ));
      this.panelService.subscriptions.push( 
        this.panelService.removeAll.subscribe(( panelId:string ) => {    
          this.removeAll();
        }
      ));
    }
  }

  // TODO: Move functions to a new service "PanelsService"
  addPanel( title:string, panelFrame:any, template:any = {}, backdrop = false, externalWindows = false, animation = true, center = true, position:{top:string, left:string} = {top:"10%", left:"10%"}) {

    // Create component 
    const component = this.panelsContainer.createComponent(this.panelTemplate);

    //Set component data
    var uniqueID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    component.instance.uniqueID = uniqueID;
    component.instance.self = component;
    component.instance.component = panelFrame;
    component.instance.title = title;
    component.instance.template = template;
    component.instance.center = center;
    component.instance.position = position;
    component.instance.panelBackdrop = backdrop;
    component.instance.externalWindows = externalWindows;
    component.instance.animation = animation;
    
    //Add to Panels array
    this.panelsArray.push({Name:title, Id:uniqueID});

    //Returns the Panel uniqueID for future use.
    return uniqueID;
  }

  removePanel(panelId:string){
    // Click on close button
    (<HTMLElement>(document.getElementById("panel-" + panelId)!.getElementsByClassName("close")[0])).click();
  }

  removePanelFromArray(panelId:string){
    for (var i = this.panelsArray.length - 1; i >= 0; --i) {
      if (this.panelsArray[i].Id == panelId) {
        this.panelsArray.splice(i,1);
      }
    } 
  }

  removeAll() {
    this.panelsContainer.clear();
    this.panelsArray = [];
  }

}
