import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { Itinerary } from './../../Itinerary/models/itinerary.model';
import { TripEvent } from './../../TripEvent/models/tripEvent.model';
import { ItineraryService } from '../../Itinerary/services/itinerary.service'
import { createEmptyStateSnapshot } from '@angular/router/src/router_state';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-itinerary-data',
  templateUrl: './itinerary-data.component.html',
  styleUrls: ['./itinerary-data.component.css'],
  providers: [FoursquareService]
})
export class ItineraryDataComponent implements OnInit {
  public items_in_itin = 0;
  public selectedEvent;
  tripEvent: TripEvent = null;
  all_tripEvents: TripEvent[] = [];
  public displayMessage = "Categories";
  public sortOptions = ["*", "Drinks", "Coffee", "Shops", "Arts", "Outdoors", "Sights", "Trending", "Top Picks"]
  public show: boolean = false;
  public buttonName: any = 'Show';
  lastAction: string;
  events: any = null;
  place: string = null;
  category: string = null;
  droppedItems: Object[] = [];
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(private foursquareService: FoursquareService, private itineraryService: ItineraryService, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit() { }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  // saveDate(from: any, to: any){
  //   var start_date:string= from.month + "/" + from.day + "/" + from.year;
  //   var end_date:string= to.month + "/" + to.day + "/" + to.year;
  //   console.log(start_date);
  //   console.log(end_date);
    // var start_date:string={:e.dragData.venue.name,formattedAddress:e.dragData.venue.location.address,order:it_order};
  //}

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  getEvents() {
    this.foursquareService
      .getAllNear(this.place, this.category)
      .subscribe(events => {
        this.events = events;
      });
  }

  onSearchButtonClick(stringToSearchFor: string): void {
    this.place = stringToSearchFor;
    this.show = true;
    this.getEvents();
  }

  onEnter(event) {
    if (event.keyCode == 13) {
      this.onSearchButtonClick(event.target.value);
      return false;
    }
  }

  onSaveButtonClick(title: string, description: string, from: any, to: any): void {
    let generatedItinerary = this.generateItinerary(title, description, from, to);
    console.log(generatedItinerary)
    this.saveItinerary(generatedItinerary);

  }

  saveItinerary(itinerary: Itinerary): void {
    this.itineraryService.createItinerary(itinerary)	
    .subscribe((res) => {	
      console.log(res);
    })
  }

  generateItinerary(title: string, description, from: any, to: any): Itinerary {
    var start_date:string= from.month + "/" + from.day + "/" + from.year;
    var end_date:string= to.month + "/" + to.day + "/" + to.year;
    console.log(start_date);
    console.log(end_date);
    let newItinerary = new Itinerary("test@gmail.com", title, description, start_date, end_date, "incomplete", this.all_tripEvents);
    return newItinerary;
  }

  onDropDownSelect(categoryToSearchFor: string) {
    this.displayMessage = categoryToSearchFor;
    this.category = categoryToSearchFor;
    return this.displayMessage;
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onVerticalDrag(ev) {
    console.log("vertical drag");
    console.log(ev);
    var index = this.droppedItems.indexOf(ev.dragData);
    console.log("index: " + index);
  }

  onItemDelete(ev){
    console.log("delete process start");
    console.log(ev.dragData);
    var index = this.all_tripEvents.indexOf(ev.dragData);
    if(index >-1){
      if(index < this.all_tripEvents.length - 1){
        for(var i=index; i<this.all_tripEvents.length; i++){
          this.all_tripEvents[i].order = this.all_tripEvents[i].order - 1;
        }
      }
      this.all_tripEvents.splice(index, 1);
      console.log("splice");
    }
    console.log(this.all_tripEvents);
    console.log(this.items_in_itin);
  }

  onItemDrop(e: any) {
    console.log("item drop");
    var it_order = this.all_tripEvents.length;
    const record:TripEvent={name:e.dragData.venue.name,formattedAddress:e.dragData.venue.location.address,order:it_order};
    console.log(record);

    this.all_tripEvents.push(record);
    console.log("this.all_tripEvents: " + this.all_tripEvents);
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    console.log(this.droppedItems.indexOf(e.dragData));
  }

}

