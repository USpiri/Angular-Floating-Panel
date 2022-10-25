import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  constructor() {}

  addPanel = new EventEmitter();    
  subsVar!: Subscription;
    
  onAddPanel( title:string , panelFrame:any , template:any, backdrop:boolean, escape:boolean, animation:boolean ) {    
    this.addPanel.emit( {title:title , panelFrame:panelFrame , template:template, backdrop:backdrop, escape:escape, animation:animation });    
  }

}
