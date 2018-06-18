import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-page',
  templateUrl: './time-page.component.html',
  styleUrls: ['./time-page.component.css']
})
export class TimePageComponent implements OnInit {

  intervall: boolean;

  constructor() { }

  ngOnInit() {
    this.intervall = false;
  }


  toggleEditable(event) {
    if ( event.target.checked ) {
      this.intervall = true;
    } else {
      this.intervall = false;
    }
  }

}
