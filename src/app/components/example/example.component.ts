import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  title:string = "";
  Data:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.Data);
  }

}
