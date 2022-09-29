import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  myEvents: { id:number, name: string; date: string; time: string; location: { address: string; city: string; country: string; }; reviewed: boolean; }[];

  constructor(private eventsService: EventsService, private activatedRoute: ActivatedRoute) {
    this.myEvents = activatedRoute.snapshot.data['data'];
  }

  ngOnInit() {
  }

}
