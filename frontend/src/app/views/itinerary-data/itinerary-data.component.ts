import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { TripEvent } from './../../TripEvent/models/tripEvent.model';
import { ItineraryService } from '../../Itinerary/services/itinerary.service'
import { Itinerary } from "../../Itinerary/models/itinerary.model";


@Component({
  selector: 'app-itinerary-data',
  templateUrl: './itinerary-data.component.html',
  styleUrls: ['./itinerary-data.component.css'],
  providers: [FoursquareService]
})
export class ItineraryDataComponent implements OnInit {
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

  constructor(private foursquareService: FoursquareService) { }

  ngOnInit() { }

  getEvents() {
    this.foursquareService
      .getAllNear(this.place, this.category)
      .subscribe(events => {
        console.log(events);
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
    console.log(stringToSearchFor)
  }

  onSaveButtonClick(): void {
    console.log(this.droppedItems);
    this.generateItineraryFromDroppedItems();
  }

  generateItineraryFromDroppedItems(): void {

  }

  onDropDownSelect(categoryToSearchFor: string) {
    this.displayMessage = categoryToSearchFor;
    this.category = categoryToSearchFor;
    console.log(this.displayMessage);
    return this.displayMessage;
  }

  drop(ev) {
    console.log(ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    console.log(ev);
    ev.preventDefault();
  }

  drag(ev) {
    console.log(ev);
    ev.dataTransfer.setData("text", ev.target.id);
  }

  onItemDrop(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    console.log(this.droppedItems);
    //console.log("drag Data " + e.dragData);
    //console.log("dropepd Items " + this.droppedItems);
    //var t1 = new TripEvent(e.response.groups.items.venue.name, e.response.groups.items.venue.location.address, new Date(), "", 2);
    //console.log(t1);
    //this.setData(e.dragData);
  }

  setNameData(e: any, place: any) {
    var t1 = new TripEvent();
    console.log(t1);
  }

  // onItemDelete(e: any){
  //    var remove_index = this.droppedItems.indexOf(e.dragData);
  //    if(remove_index > -1){
  //      this.droppedItems.splice(remove_index, 1);
  //    }
  //    console.log(this.droppedItems);
  //   //  var remove_index = this.all_tripEvents.indexOf(e.dragData);
  //   //  if(remove_index > -1){
  //   //    this.all_tripEvents.splice(remove_index, 1);
  //   //  }
  //   //  console.log(this.all_tripEvents);
  // }

}

