import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  myEvents: { name: string; date: string; time: string; location: { address: string; city: string; country: string; }; }[];

  constructor(private eventsService: EventsService) {
    this.myEvents = eventsService.getEvents();
  }

  ngOnInit() {
  }

}
