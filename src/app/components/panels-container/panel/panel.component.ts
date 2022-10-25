import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelsContainerComponent } from '../panels-container.component';

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
  data:any;
  center:boolean = false;
  position:any = {top:'10%', left:'10%'}
  panelBackdrop:boolean = false; // TODO
  resizable:boolean = false; // TODO
  panelEscape:boolean = false;
  animation:boolean = true;

  constructor(
    private panelsContainer:PanelsContainerComponent
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
            this.panelsContainer.removePanelFromArray(this.uniqueID);
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
    ((component.instance)).data = this.data;
    ((component.instance)).title = this.title;
    ((component.instance)).panelId = this.uniqueID;
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

  // Wait for the user to press esc
  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event:any) {
    if (this.panelEscape) {
        if (event.keyCode === 27) {
            if (this.isFocused()) {
              (<HTMLElement>(document.getElementById("panel-" + this.uniqueID)!.getElementsByClassName("close")[0])).click();
            }
        }
    }
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
