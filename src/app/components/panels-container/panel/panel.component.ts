import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelTemplateData } from '../models/panels-interfaces';
import { PanelsContainerComponent } from '../panels-container.component';
import { PanelsService } from '../service/panels.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit {

  // Template container
  @ViewChild('container', { read: ViewContainerRef }) container:any;

  //Required Variables
  uniqueID:any;
  self:any;
  component:any;

  //Dynamic Data
  title:string = "";
  template:PanelTemplateData | undefined;
  center:boolean = false;
  position:any = {top:'10%', left:'10%'}
  panelBackdrop:boolean = false; // TODO
  resizable:boolean = false; // TODO
  externalWindows:boolean = false;
  animation:boolean = true;

  constructor(
    private panelService:PanelsService
  ) { }

  ngAfterViewInit(): void {
    this.addComponent();
    this.addZIndex();

    // Set backdrop
    if (this.panelBackdrop) {
      document.getElementById("panel-" + this.uniqueID + "-backdrop")!.className += " panel-backdrop";
    }

    // Set position
    if(this.center){
      (<HTMLElement>document.getElementById("panel-" + this.uniqueID)).className += " center-panel";
    }else{
        //Set custom position
        (<HTMLElement>document.getElementById("panel-" + this.uniqueID)).style.top = this.position.top;
        (<HTMLElement>document.getElementById("panel-" + this.uniqueID)).style.left = this.position.left;
    }

    // Set animation
    if (this.animation) { // TODO: Make animation by default?
        document.getElementById("panel-" + this.uniqueID)!.className += " fade-in-out";
        setTimeout(() => {
            document.getElementById("panel-" + this.uniqueID)!.style.opacity = "1";
        }, 150);
    }
    else {
        document.getElementById("panel-" + this.uniqueID)!.style.opacity = "1";
    }

    // Add event listener to close button
    var closeElements =  document.getElementById("panel-" + this.uniqueID)!.getElementsByClassName("close");
    for(let i = 0; i < closeElements.length; i++) {
        closeElements[i].addEventListener("click", ()=> {
            this.panelService.onRemovePanelFromArray(this.uniqueID);
            // this.panelsContainer.removePanelFromArray(this.uniqueID);
            this.destroyPanel();
        });
    }
  }

  ngOnInit(): void {
    
  }

  addComponent() {
    // Create container component (Panel Frame)
    const component = this.container.createComponent(this.component);
    //Init data and detectChanges  
    ((component.instance)).template = this.template;
    ((component.instance)).title = this.title;
    ((component.instance)).panelId = this.uniqueID;
    ((component.instance)).externalWindows = this.externalWindows;
    component.changeDetectorRef.detectChanges();
  }

  // Set a (highest + 2) z-index to show the panel above everything
  addZIndex() {
    var highest = this.findHighestZIndex();
    document.getElementById("panel-" + this.uniqueID)!.style.zIndex = (highest + 2).toString();
    if (this.panelBackdrop) {
        document.getElementById("panel-" + this.uniqueID + "-backdrop")!.style.zIndex = (highest + 1).toString();
    }
  }


  destroyPanel(){
    // Animation first
    document.getElementById("panel-" + this.uniqueID)!.style.opacity = "0";
    // Then destroy
    setTimeout(() => {
        this.self.destroy();
    }, 250);
  }

  findHighestZIndex() {
    var elements = document.getElementsByTagName('*');
    var highest = 0;
    for (var i = 0; i < elements.length; i++) {
        var zindex = parseInt(document.defaultView!.getComputedStyle(elements[i], null).getPropertyValue("z-index"));
        if (zindex > highest) {
            highest = zindex;
        }
    }
    return highest;
  }

  // Check if it is the panel with the highest z-index
  isFocused() {
    var current = parseInt(document.getElementById("panel-" + this.uniqueID)!.style.zIndex);
    var highest = this.findHighestZIndex();
    if (current === highest) {
        return true;
    }
    else
        return false;
}

}
