import { AfterViewInit, Component, HostListener, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PanelsContainerComponent } from '../panels-container.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef }) container:any;

  uniqueID:any;
  Self:any;
  Component:any;

  //Passed Data
  title:string = "";
  Data:any;
  Center:boolean = false;
  Position:any = {Top:'10%', Left:'10%'}
  PanelBackdrop:boolean = false;
  PanelEscape:boolean = false;
  Animation:boolean = true;

  constructor(
    private PanelsContainer:PanelsContainerComponent
  ) { }

  ngAfterViewInit(): void {
    this.addComponent();
    this.AddzIndex();
    if (this.PanelBackdrop) {
      document.getElementById("panel-" + this.uniqueID + "-backdrop")!.className += " panel-backdrop";
    }

    if(this.Center){
      (<HTMLElement>document.getElementById("panel-" + this.uniqueID)).className += " center-panel";
    }else{
        //Set CSS
        (<HTMLElement>document.getElementById("panel-" + this.uniqueID)).style.top = this.Position.Top;
        (<HTMLElement>document.getElementById("panel-" + this.uniqueID)).style.left = this.Position.Left;
    }

    if (this.Animation) {
        document.getElementById("panel-" + this.uniqueID)!.className += " fade-in-out";
        setTimeout(() => {
            document.getElementById("panel-" + this.uniqueID)!.style.opacity = "1";
        }, 150);
    }
    else {
        document.getElementById("panel-" + this.uniqueID)!.style.opacity = "1";
    }
    var closeElements =  document.getElementById("panel-" + this.uniqueID)!.getElementsByClassName("close");
    for(let i = 0; i < closeElements.length; i++) {
        closeElements[i].addEventListener("click", ()=> {
            this.PanelsContainer.RemovePanelFromArray(this.uniqueID);
            this.DestroyPanel();
        });
    }
  }

  ngOnInit(): void {
    
  }

  addComponent() {
    // Create component 
    const component = this.container.createComponent(this.Component);
    //Init data and detectChanges  
    ((component.instance)).Data = this.Data;
    ((component.instance)).title = this.title;
    ((component.instance)).PanelId = this.uniqueID;
    component.changeDetectorRef.detectChanges();
  }

  AddzIndex() {
    var highest = this.findHighestZIndex();
    document.getElementById("panel-" + this.uniqueID)!.style.zIndex = (highest + 2).toString();
    if (this.PanelBackdrop) {
        document.getElementById("panel-" + this.uniqueID + "-backdrop")!.style.zIndex = (highest + 1).toString();
    }
  }

  DestroyPanel(){
    document.getElementById("panel-" + this.uniqueID)!.style.opacity = "0";
    setTimeout(() => {
        this.Self.destroy();
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

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event:any) {
    if (this.PanelEscape) {
        if (event.keyCode === 27) {
            if (this.IsFocused()) {
              (<HTMLElement>(document.getElementById("panel-" + this.uniqueID)!.getElementsByClassName("close")[0])).click();
            }
        }
    }
  }

  IsFocused() {
    var current = parseInt(document.getElementById("panel-" + this.uniqueID)!.style.zIndex);
    var highest = this.findHighestZIndex();
    if (current === highest) {
        return true;
    }
    else
        return false;
}

}
