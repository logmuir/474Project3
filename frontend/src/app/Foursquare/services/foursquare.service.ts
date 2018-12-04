import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { TripEvent } from './../../TripEvent/models/tripEvent.model';
import { Adapter } from 'src/app/adapter';

@Injectable({
    providedIn: 'root'
  })
  export class FoursquareService {
    baseUri: string;
    category: string = null;
    private headers = new Headers({
    });
    extra: string;

    constructor(private http: HttpClient) {
      this.baseUri = 'https://api.foursquare.com/v2/venues/explore';
      this.extra = '&client_id=BEYZLUHIFTJIUFIZ1C5FYY5RCC0ULGFECYLK3GTKSNRP35HF&client_secret=NBYG53A5OFA0NKTYZE4SLLWBICTMWWSNZFSBWYYAL21QAFO1&v=20160201&m=foursquare';
    }

    getAllNear(place : string, category : string): Observable<Array<any>>{
      if (this.category === "*"){
        const url = this.baseUri + '?near=' + place + this.extra;
        console.log(url);
        return this.http.get<any[]>(url).pipe(map(data => data));
      }
      else{
        const url = this.baseUri + '?near=' + place + '&section=' + category + this.extra;
        console.log(url);
        return this.http.get<any[]>(url).pipe(map(data => data));
      }
    }


  }



