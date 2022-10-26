import { Component, OnInit, ViewChild } from '@angular/core';
import { ExampleTemplateComponent } from '../example-template/example-template.component';
import { PanelFrameComponent } from '../panels-container/panel/panel-frame/panel-frame.component';
import { PanelsContainerComponent } from '../panels-container/panels-container.component';
import { PanelsService } from '../panels-container/service/panels.service';
import { DewiProfileTemplateComponent } from '../templates/dewi-profile-template/dewi-profile-template.component';
import { ImageTemplateComponent } from '../templates/image-template/image-template.component';
import { LocationTemplateComponent } from '../templates/location-template/location-template.component';
import { StreetTemplateComponent } from '../templates/street-template/street-template.component';
import { VideoTemplateComponent } from '../templates/video-template/video-template.component';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  data:any;
  backdrop:boolean = false;
  externalWindows:boolean = true;
  animation:boolean = true;

  isTestData:boolean = true;

  exampleHTML:any = {
    content : "<div class=\"card\" style=\"width: 10px !important;\">\r\n  <div class=\"card-body text-dark\">\r\n    <h5 class=\"card-title\">Card title</h5>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n  </div>\r\n</div>"
  }

  exampleComponent:any;
  imageComponent:any;
  videoComponent:any;
  streetComponent:any;
  dewiProfileComponent:any;
  locationComponent:any;

  @ViewChild(PanelsContainerComponent, {static: false}) panels: PanelsContainerComponent | undefined;

  constructor(
    private panelService:PanelsService
  ) { }

  // <iframe src="https://www.google.com/maps/embed?pb=!4v1666738018239!6m8!1m7!1sesfVrRKp0vCsjiFhB-TLrg!2m2!1d-34.60395858550137!2d-58.38161712257183!3f43.005085!4f0!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

//   {
//     "id": "634359575841ea8601461ce9",
//     "username": "Woodard87",
//     "picture": "https://picsum.photos/id/639/200/200",
//     "name": "Stanley Valencia",
//     "email": "stanleyvalencia@ecrater.com",
//     "phone": "+1 (905) 463-2208",
//     "address": "540 Lincoln Place, Gordon, Puerto Rico, 1231",
//     "average_performance": 1.74,
//     "pools_amount": 5
// }

  ngOnInit(): void {
    this.exampleComponent = {
      template: ExampleTemplateComponent,
      templateData: "Un string"
    }
    this.imageComponent = {
      template: ImageTemplateComponent,
      templateData: {
        title: 'Image Name',
        image: 'https://picsum.photos/id/237/900/700'
      }
    }
    this.videoComponent = {
      template: VideoTemplateComponent,
      templateData: {
        title: 'Video Name',
        video: 'https://www.youtube.com/embed/-4ZEuzKonss'
      }
    }
    this.streetComponent = {
      template: StreetTemplateComponent,
      templateData: {
        title: 'Location Name',
        src: "https://www.google.com/maps/embed?pb=!4v1666738018239!6m8!1m7!1sesfVrRKp0vCsjiFhB-TLrg!2m2!1d-34.60395858550137!2d-58.38161712257183!3f43.005085!4f0!5f0.7820865974627469"
      }
    }
    this.dewiProfileComponent = {
      template: DewiProfileTemplateComponent,
      templateData: {
        title: 'DeWi Builder Name',
        dewiBuilder: {
          id: "634359575841ea8601461ce9",
          username: "Woodard87",
          picture: "https://picsum.photos/id/639/200/200",
          name: "Stanley Valencia",
          email: "stanleyvalencia@ecrater.com",
          phone: "+1 (905) 463-2208",
          address: "540 Lincoln Place, Gordon, Puerto Rico, 1231",
          average_performance: 1.74,
          pools_amount: 5
        }
      }
    }
    this.locationComponent = {
      template: LocationTemplateComponent,
      templateData: {
        title: 'Location Name',
        location: {
          type: "Feature",
          properties: {
            name: "location-8362346",
            owner: "14A7pwCsFtPtoFS6LQTV99hdkyDAc7B7ZtNrJX5KbFt9NEDHJYr",
            timestamp_added: "2022-02-02T20:54:30.000000Z",
    
            address: "Arévalo 2357, Buenos Aires, Argentina",
            roof_images: [
              "https://media-cdn.tripadvisor.com/media/photo-s/0b/0e/3b/f7/vista-desde-el-ultimo.jpg",
              "http://emilysalzmann.com.ar/wp-content/uploads/2020/01/getFoto-1.jpg"
            ],
            isVerified: true,
            postal_code: 5042,
            internet: "",
            video: "https://www.youtube.com/embed/-4ZEuzKonss",
            street_view: "https://www.google.com/maps/embed?pb=!4v1666738018239!6m8!1m7!1sesfVrRKp0vCsjiFhB-TLrg!2m2!1d-34.60395858550137!2d-58.38161712257183!3f43.005085!4f0!5f0.7820865974627469"
          },
          geometry: {
            type: "Point",
            coordinates: [-58.503728, -34.63349]
          }
        }
      }
    }
  }

  openPanel(){
    this.panelService.onAddPanel( 
      "Location", 
      PanelFrameComponent, 
      this.exampleComponent, 
      this.backdrop, 
      this.externalWindows, 
      this.animation 
    );
  }

  openDeWiPanel(){
    this.panelService.onAddPanel( 
      this.dewiProfileComponent.templateData.dewiBuilder.username, 
      PanelFrameComponent, 
      this.dewiProfileComponent, 
      this.backdrop, 
      this.externalWindows, 
      this.animation 
    );
  }

  openVideoPanel(){
    this.panelService.onAddPanel( 
      "Video", 
      PanelFrameComponent, 
      this.videoComponent, 
      this.backdrop, 
      this.externalWindows, 
      this.animation 
    );
  }

  openImagePanel(){
    this.panelService.onAddPanel( 
      "Image", 
      PanelFrameComponent, 
      this.imageComponent, 
      this.backdrop, 
      this.externalWindows, 
      this.animation 
    );
  }

  openStreetPanel(){
    this.panelService.onAddPanel( 
      "Street View", 
      PanelFrameComponent, 
      this.streetComponent, 
      this.backdrop, 
      this.externalWindows, 
      this.animation 
    );
  }

  openLocationPanel(){
    this.panelService.onAddPanel( 
      "Location", 
      PanelFrameComponent, 
      this.locationComponent, 
      this.backdrop, 
      this.externalWindows, 
      this.animation 
    );
  }

}
