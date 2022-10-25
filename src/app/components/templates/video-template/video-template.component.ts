import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-template',
  templateUrl: './video-template.component.html',
  styleUrls: ['./video-template.component.css']
})
export class VideoTemplateComponent implements OnInit {

  templateData:any;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

}
