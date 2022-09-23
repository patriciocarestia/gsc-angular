import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: {
    id: number;
    name: string;
    date: string;
    time: string;
    location: {
        address: string;
        city: string;
        country: string;
    };
    reviewed: boolean;
  } | undefined;

  constructor(private eventsService: EventsService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.event = eventsService.getEventById(id);
    console.log(this.event?.reviewed);
  }

  ngOnInit(): void {
  }

  returnToEvents(): void {
    this.router.navigate(['/events']);
  }

  reviewed(): void{ 
    if(this.event){
      this.event.reviewed = !this.event.reviewed;  
    }
    console.log(this.event?.reviewed);   
  }

  canExit(): boolean {
    if(this.event){
      return this.event.reviewed;  
    }
    return false;
  }
}
