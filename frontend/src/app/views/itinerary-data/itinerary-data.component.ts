import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { TripEvent } from './../../TripEvent/models/tripEvent.model';
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
  public show:boolean = false;
  public buttonName:any = 'Show';
  lastAction: string;
  events:any = null;
  place: string = null;
  category: string = null;
  droppedItems: Object[] = [];
  map: any = null;
  
  constructor(private foursquareService: FoursquareService) {}

  ngOnInit() {}

  getEvents() {
    this.foursquareService
    .getAllNear(this.place, this.category)
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

  onDropDownSelect(categoryToSearchFor: string){
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
    const record:TripEvent={name:e.dragData.venue.name,address:e.dragData.venue.location.address,order:it_order};
    console.log(record);
    
    //this.record.order = order;
    this.all_tripEvents.push(record);
    console.log("this.all_tripEvents: " + this.all_tripEvents);
    // Get the dropped data here
    this.droppedItems.push(e.dragData);
    console.log(this.droppedItems.indexOf(e.dragData));
  }

}

