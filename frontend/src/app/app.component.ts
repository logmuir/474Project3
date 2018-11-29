import { Response } from '@angular/http';
import { ItineraryService } from './Itinerary/services/itinerary.service';
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
    //Private itineraryservice will be injected into the component by Angular Dependency Injector
    private itineraryService: ItineraryService
  ) { }

  //Declaring the new itinerary Object and initilizing it
  public newItinerary: Itinerary = new Itinerary()

  //An Empty list for the visible itinerary list
  itinerarysList: Itinerary[];
  editItinerarys: Itinerary[] = [];


  create() {
    this.itineraryService.createItinerary(this.newItinerary)
      .subscribe((res) => {
        this.itinerarysList.push(res.data)
        this.newItinerary = new Itinerary()
      })
  }

  editItinerary(itinerary: Itinerary) {
    console.log(itinerary)
    if (this.itinerarysList.includes(itinerary)) {
      if (!this.editItinerarys.includes(itinerary)) {
        this.editItinerarys.push(itinerary)
      } else {
        this.editItinerarys.splice(this.editItinerarys.indexOf(itinerary), 1)
        this.itineraryService.editItinerary(itinerary).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editItinerary(itinerary)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneItinerary(itinerary: Itinerary) {
    itinerary.status = 'Done'
    this.itineraryService.editItinerary(itinerary).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editItinerary(itinerary)
      console.error('Update Unsuccesful')
    })
  }

  submitItinerary(event, itinerary: Itinerary) {
    if (event.keyCode == 13) {
      this.editItinerary(itinerary)
    }
  }

  deleteItinerary(itinerary: Itinerary) {
    this.itineraryService.deleteItinerary(itinerary._id).subscribe(res => {
      this.itinerarysList.splice(this.itinerarysList.indexOf(itinerary), 1);
    })
  }

  ngOnInit(): void {

    //At component initialization the 
    this.itineraryService.getItinerarys()
      .subscribe(itinerarys => {
        //assign the itinerarylist property to the proper http response
        this.itinerarysList = itinerarys
        console.log(itinerarys)
      })
  }
}