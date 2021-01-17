import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsUrl: string = "http://www.pathofexile.com/api/public-stash-tabs?id=";
  initialId: string = "220-1652-744-1341-230";
  
  
  constructor(private httpService: HttpClient) { }

  getItems() {
    return new Observable((obs)=> {
      this.httpService.get(this.itemsUrl + this.initialId) // setting header to bypass cors error
        .subscribe((data : ApiResponse) => {
        this.initialId = data.next_change_id;
        obs.next(data.stashes)
      }, (error)=> {
        obs.error(error);
      })

    })
    
  }
}
