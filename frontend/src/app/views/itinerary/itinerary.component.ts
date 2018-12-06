import { Response } from '@angular/http';
import { ItineraryService } from './../../Itinerary/services/itinerary.service';
import Itinerary from './../../Itinerary/models/itinerary.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Auth0/auth.service';

@Component({
  selector: 'itineraryComponentSelector',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  constructor(
    //Private itineraryservice will be injected into the component by Angular Dependency Injector
    private itineraryService: ItineraryService,
    private authService: AuthService
  ) { }

  
  //An Empty list for the visible itinerary list
  existingItinerarys: Itinerary[];
  editItinerarys: Itinerary[] = [];

  private currentUserEmail: string;

  editItinerary(itinerary: Itinerary) {
    if (this.existingItinerarys.includes(itinerary)) {
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
      this.existingItinerarys.splice(this.existingItinerarys.indexOf(itinerary), 1);
    })
  }

  ngOnInit(): void {
    //this.currentUserEmail = 'test@gmail.com';
    // this.currentUserEmail = 'anotherTest@gmail.com';
    this.itineraryService.getItinerarys(this.currentUserEmail)
      .subscribe(itinerarys => {
        this.existingItinerarys = itinerarys
      })

    console.log(this.authService.getEmail())
  }
}
