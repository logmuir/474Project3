import Itinerary from './Itinerary/models/itinerary.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Travel Express';

  constructor(
  ) { }

  
  ngOnInit(): void {
  }
}