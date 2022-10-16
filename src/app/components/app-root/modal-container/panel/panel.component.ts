import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef }) content: any;

  uniqueID:string = "";
  Self;
  Component;

  //Data values
  Data:any;
  Center:boolean = false;
  Position:any = {Top:'10%', Left:'10%'}
  ModalBackdrop:boolean = false;
  ModalEscape:boolean = false;
  Animation:boolean = true;

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.addComponent();
    this.dragElement(document.getElementById("modal-" + this.uniqueID));
    this.TouchDragElement(document.getElementById("modal-" + this.uniqueID)!.getElementsByClassName("draggable")[0]);
  }



  addComponent() {
    // Create component 
    const component = this.content.createComponent(this.Component);
    //Init data and detectChanges  
    ((component.instance)).Data = this.Data;
    ((component.instance)).ModalId = this.uniqueID;
    component.changeDetectorRef.detectChanges();
  }

}
