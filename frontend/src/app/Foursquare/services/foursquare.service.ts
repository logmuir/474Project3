import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class FoursquareService {
    baseUri: string;
    private headers = new Headers({
      'Content-Type': 'application/json'
    });
    extra: string;

    constructor(private http: HttpClient) {
      this.baseUri = 'https://api.foursquare.com/v2/venues/explore';
      this.extra = '&client_id=BEYZLUHIFTJIUFIZ1C5FYY5RCC0ULGFECYLK3GTKSNRP35HF&client_secret=NBYG53A5OFA0NKTYZE4SLLWBICTMWWSNZFSBWYYAL21QAFO1&v=20160201&m=foursquare';
    }

    getAllNear(place : string): Observable<Array<any>>{
      place = "newark,nj"
      const url = this.baseUri + '?near=' + place + this.extra;
      //console.log(isArray(this.http.get<any[]>(url).pipe(map(data => data))))
      return this.http.get<any[]>(url).pipe(map(data => data));
    }
} 



