import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { PanelTemplate } from '../models/IPanel';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {

  constructor() {}

  addPanel = new EventEmitter();    
  subsVar!: Subscription;
    
  onAddPanel( title:string , panelFrame:any , template:any, backdrop:boolean, externalWindows:boolean, animation:boolean ) {    
    this.addPanel.emit({
      title:title,
      panelFrame:panelFrame,
      dataTemplate:template,
      backdrop:backdrop,
      externalWindows:externalWindows,
      animation:animation 
    });    
  }

  removePanel = new EventEmitter();
  onRemovePanel( panelId:string ){
    this.removePanel.emit( panelId )
  }

  removePanelFromArray = new EventEmitter();
  onRemovePanelFromArray(panelId:string){
    this.removePanelFromArray.emit( panelId )
  }

  removeAll = new EventEmitter();
  onRemoveAll() {
    this.removeAll.emit()
  }

}
