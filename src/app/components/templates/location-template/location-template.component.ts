import { Component, OnInit } from '@angular/core';
import { PanelFrameComponent } from '../../panels-container/panel/panel-frame/panel-frame.component';
import { PanelsService } from '../../panels-container/service/panels.service';
import { ImageTemplateComponent } from '../image-template/image-template.component';
import { StreetTemplateComponent } from '../street-template/street-template.component';
import { VideoTemplateComponent } from '../video-template/video-template.component';

@Component({
  selector: 'app-location-template',
  templateUrl: './location-template.component.html',
  styleUrls: ['./location-template.component.css']
})
export class LocationTemplateComponent implements OnInit {

  templateData:any;

  constructor(
    private panelService:PanelsService
  ) { }

  ngOnInit(): void {
  }

  
  // this.streetComponent = {
  //   template: StreetTemplateComponent,
  //   templateData: {
  //     title: 'Location Name',
  //     src: "https://www.google.com/maps/embed?pb=!4v1666738018239!6m8!1m7!1sesfVrRKp0vCsjiFhB-TLrg!2m2!1d-34.60395858550137!2d-58.38161712257183!3f43.005085!4f0!5f0.7820865974627469"
  //   }
  // }

  openVideoPanel(){
    let videoComponent = {
      template: VideoTemplateComponent,
      templateData: {
        title: this.templateData.location.properties.name,
        video: this.templateData.location.properties.video
      }
    }
    this.panelService.onAddPanel( 
      this.templateData.location.properties.name, 
      PanelFrameComponent, 
      videoComponent, 
      false, 
      true, 
      true 
    );
  }

  openStreetPanel(){
    let streetComponent = {
      template: StreetTemplateComponent,
      templateData: {
        title: this.templateData.location.properties.name,
        src: this.templateData.location.properties.street_view
      }
    }
    this.panelService.onAddPanel( 
      this.templateData.location.properties.name, 
      PanelFrameComponent, 
      streetComponent, 
      false, 
      true, 
      true 
    );
  }

  openImagePanel(image:string){
    let imageComponent = {
      template: ImageTemplateComponent,
      templateData: {
        title: this.templateData.location.properties.name,
        image: image
      }
    }
    this.panelService.onAddPanel( 
      this.templateData.location.properties.name, 
      PanelFrameComponent, 
      imageComponent, 
      false, 
      true, 
      true 
    );
  }

}
