import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { Itinerary } from "../../Itinerary/models/itinerary.model";
import { TripEvent } from './../../TripEvent/models/tripEvent.model';
import { ItineraryService } from '../../Itinerary/services/itinerary.service'
import { createEmptyStateSnapshot } from '@angular/router/src/router_state';

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

  constructor(private foursquareService: FoursquareService, private itineraryService: ItineraryService) { }

  ngOnInit() { }

  getEvents() {
    this.foursquareService
      .getAllNear(this.place, this.category)
      .subscribe(events => {
        this.events = events;
      });
  }

  getId() {
    //this.foursquareService.
  }

  onSearchButtonClick(stringToSearchFor: string): void {
    this.place = stringToSearchFor;
    this.show = true;
    this.getEvents();
  }

  onSaveButtonClick(): void {
    let generatedItinerary = this.generateItinerary();
    console.log(generatedItinerary)
    this.saveItinerary(generatedItinerary);

  }

  saveItinerary(itinerary: Itinerary): void {
    
    this.itineraryService.createItinerary(itinerary);

    this.itineraryService.createItinerary(itinerary)	
    .subscribe((res) => {	
      console.log(res);
    })
  }

  generateItinerary(): Itinerary {
    

    let newItinerary = new Itinerary("test@gmail.com", "Title Goes Here!", "Description goes here!", new Date( 2018, 1, 4), "Itinerary Status", this.all_tripEvents);

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
    //ev.dataTransfer.setData("text", ev.target.id);
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
    
    //this.record.order = order;
    this.all_tripEvents.push(record);
    console.log("this.all_tripEvents: " + this.all_tripEvents);
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    console.log(this.droppedItems.indexOf(e.dragData));
  }

}

