import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-street-template',
  templateUrl: './street-template.component.html',
  styleUrls: ['./street-template.component.css']
})
export class StreetTemplateComponent implements OnInit {

  templateData:any;

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

}
