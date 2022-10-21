import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-template',
  templateUrl: './example-template.component.html',
  styleUrls: ['./example-template.component.css']
})
export class ExampleTemplateComponent implements OnInit {

  //Variables to replace in template
  data:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
