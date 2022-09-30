import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  eventName = '';
  eventDate = '';
  eventTime = '';
  eventAddress = '';
  eventCity = '';
  eventCountry = '';

  onSubmit() {
    let myEvent: object;
    myEvent = {
      name: this.eventName,
      date: this.eventDate,
      time: this.eventTime,
      location: {
        address: this.eventAddress,
        city: this.eventCity,
        country: this.eventCountry,
      }
    }
    this.eventService.saveEvent(myEvent);
    let day = new Date(this.eventDate)
    this.router.navigate(['/events']);
  }

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
