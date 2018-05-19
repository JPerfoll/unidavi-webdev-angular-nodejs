import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {
  fullDate = Date();

  constructor() { }

  ngOnInit() {
    setInterval(()=> this.fullDate = Date(), 1000);
  }

}
