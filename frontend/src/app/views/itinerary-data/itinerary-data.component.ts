import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';
import { TripEvent } from './../../TripEvent/models/tripEvent.model';

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
  public show:boolean = false;
  public buttonName:any = 'Show';
  lastAction: string;
  events:any = null;
  place: string = null;
  category: string = null;
  droppedItems: Object[] = [];
  
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

  getId(){
    //this.foursquareService.
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

  // RowSelected(event:any){
  //   this.selectedEvent = event;   // declare variable in component.
  //   console.log(this.selectedEvent);
  // }

  // onRowSelect(e: any){
  //   console.log(e);
  //   //this.selectedEvent = event;
  //   //console.log(e);
  // }

  onItemDrop(e: any) {
    // Get the dropped data here
    this.droppedItems.push(e.dragData);

    // var remove_index = this.events.indexOf(e.dragData);
    //  if(remove_index > -1){
    //    this.events.splice(remove_index, 1);
    //  }

    //this.tripEvent = new TripEvent(e.dragData);
    //this.all_tripEvents.push(this.tripEvent);
    console.log(this.droppedItems);
    //console.log(this.all_tripEvents);
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

