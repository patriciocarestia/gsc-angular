import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventsService {
  constructor() { }
  
  events = [
    {
      id: 1,
      name: 'Angular Connect',
      date: '9/26/2036',
      time: '10am',
      location: {
        address: '1 London Rd',
        city: 'London',
        country: 'England'
      },
      reviewed: true
    },
    {
      id: 2,
      name: 'ng-nl',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: '127 DT ',
        city: 'Amsterdam',
        country: 'NL'
      },
      reviewed: false
    },
    {
      id: 3,
      name: 'ng-conf 2037',
      date: '4/15/2037',
      time: '9am',
      location: {
        address: 'The Palatial America Hotel',
        city: 'Salt Lake City',
        country: 'USA'
      },
      reviewed: true
    },
    {
      id: 4,
      name: 'UN Angular Summit',
      date: '6/10/2037',
      time: '8am',
      location: {
        address: 'The UN Angular Center',
        city: 'New York',
        country: 'USA'
      },
      reviewed: false
    },
  ]

  getEvents() { 
    return this.events;
  }

  getEventById(id: string | null) {
    if(!id) {
      return undefined;
    }
    return this.events.find(event => event.id === +id)
  }

}
