import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

  @ViewChild('PanelsContainer', { read: ViewContainerRef }) panelContainer:any;
  Component:any;
  ModalsArray:any[] = []

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { 
    this.Component = PanelComponent;
  }

  ngOnInit(): void {
  }

  AddModal(modalName="", componentType:any, data:any = {}, backdrop = false, escape = false, animation = true, center = true, position:{Top:string, Left:string} = {Top:"10%", Left:"10%"}) {
    // Create component 
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.Component);
    const component = this.panelContainer.createComponent(this.Component);
    //Set component data
    var uniqueID = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    component.instance.uniqueID = uniqueID;
    component.instance.Self = component;
    component.instance.Component = componentType;
    component.instance.Data = data;
    component.instance.Center = center;
    component.instance.Position = position;
    component.instance.ModalBackdrop = backdrop;
    component.instance.ModalEscape = escape;
    component.instance.Animation = animation;
    
    //add to modals array
    this.ModalsArray.push({Name:modalName, Id:uniqueID});

    //returns the modal uniqueID for future use.
    return uniqueID;
  }

  RemoveModal(modalId:string){
    (<HTMLElement>(document.getElementById("modal-" + modalId)!.getElementsByClassName("close")[0])).click();
  }

  RemoveModalFromArray(modalId:string){
    for (var i = this.ModalsArray.length - 1; i >= 0; --i) {
      if (this.ModalsArray[i].Id == modalId) {
        this.ModalsArray.splice(i,1);
      }
    } 
  }

  RemoveAll() {
    this.panelContainer.clear();
    this.ModalsArray = [];
  }

}
