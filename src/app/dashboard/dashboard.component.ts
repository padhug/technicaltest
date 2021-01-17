import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'
import { Item } from '../item';
import { DataService } from '../data.service';

@Component({
  selector: 'signicat-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: Item[];
  alertFail: string = "Something went wrong, please try again.";
  failed: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // To query api for every 30 seconds;
    const toQueryContinously = interval(5000);
    toQueryContinously.subscribe(()=> {
      this.getItems();
    })
  }

  getItems() {
    this.dataService.getItems().subscribe((items: Item[])=> {
      this.items = items;
      this.failed = false;
      console.log(this.items);
    }, (error)=>  {
       this.failed = true; // set the failed state to true, to alert users
    })
  }

}
