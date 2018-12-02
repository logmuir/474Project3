import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import { MatTableDataSource } from '@angular/material';
import 'rxjs/Rx';
import { toArray } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-itinerary-data',
  templateUrl: './itinerary-data.component.html',
  styleUrls: ['./itinerary-data.component.css'],
  providers: [FoursquareService]
})
export class ItineraryDataComponent implements OnInit {
  form: FormGroup;
  public show:boolean = false;
  public buttonName:any = 'Show';
  events:any = null;
  place: string = null;

  p: number = 1;
  
  constructor(private foursquareService: FoursquareService) {
    // Create a new array with a form control for each order
    //const controls = this.orders.map(c => new FormControl(false));
    //controls[0].setValue(true); // Set the first checkbox to true (checked)
    // this.form = this.formBuilder.group({
    //   orders: []
    // });
  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.foursquareService
    .getAllNear(this.place)
      .subscribe(events => {
        console.log(events);
        this.events = events;
      });
  }

  onButtonClick(stringToSearchFor: string): void {
    this.place = stringToSearchFor;
    this.show = true;
    this.getEvents();
    console.log(stringToSearchFor)
  }

}

