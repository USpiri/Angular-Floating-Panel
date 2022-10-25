import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-template',
  templateUrl: './image-template.component.html',
  styleUrls: ['./image-template.component.css']
})
export class ImageTemplateComponent implements OnInit {

  templateData:any

  constructor() { }

  ngOnInit(): void {
  }

}
