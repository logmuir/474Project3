import { Component, OnInit } from '@angular/core';
import { FoursquareService } from '../../Foursquare/services/foursquare.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-itinerary-data',
  templateUrl: './itinerary-data.component.html',
  styleUrls: ['./itinerary-data.component.css'],
  providers: [FoursquareService]
})
export class ItineraryDataComponent implements OnInit {
  public displayMessage = "Categories";
  public sortOptions = ["*", "Drinks", "Coffee", "Shops", "Arts", "Outdoors", "Sights", "Trending", "Top Picks"]
  public show:boolean = false;
  public buttonName:any = 'Show';
  lastAction: string;
  events:any = null;
  place: string = null;
  category: string = null;
  itinerary_items: Object[] = null;

  p: number = 1;
  
  constructor(private foursquareService: FoursquareService) {}

  ngOnInit() {
    this.getEvents();
  }

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

  // onCheckBoxSelect(placeSelection: Object){
  //   console.log(placeSelection);
  //   this.itinerary_items.push(placeSelection);
  //   console.log(this.itinerary_items);
  // }

  onChange(event, index, item) {

    item.checked = !item.checked;

    this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;

    console.log(index, event, item);

}

}

