import Itinerary from '../models/itinerary.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable

@Injectable()
export class ItineraryService {

  api_url = 'http://localhost:3001';
  itineraryUrl = `${this.api_url}/api/itinerarys`;

  constructor(
    private http: HttpClient
  ) { }


  //Create itinerary, takes a Itinerary Object
  createItinerary(itinerary: Itinerary): Observable<any> {
    //returns the observable of http post request 
    return this.http.post(`${this.itineraryUrl}`, itinerary);
  }

  getItinerarys(targetOwnerEmail): Observable<Itinerary[]> {
    console.log("Target Email: " + targetOwnerEmail);
    let params = new HttpParams();
    
    params = params.append("ownerEmail", targetOwnerEmail)
    return this.http.get(this.itineraryUrl, {params: params})
      .pipe(map(res => {
        return res["data"].docs as Itinerary[];
      }))
  }
  
  //Update itinerary, takes a Itinerary Object as parameter
  editItinerary(itinerary: Itinerary) {
    let editUrl = `${this.itineraryUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, itinerary);
  }

  deleteItinerary(id: string): any {
    //Delete the object by the id
    let deleteUrl = `${this.itineraryUrl}/${id}`
    return this.http.delete(deleteUrl)
      .pipe(map(res => {
        return res;
      }))
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}