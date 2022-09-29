import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { EventsService } from '../events.service';

@Injectable({
  providedIn: 'root'
})

export class EventGuard implements CanActivate {
  constructor(private eventsService: EventsService) {};

  canDeactivate(eventDetails: EventDetailsComponent,
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

    return eventDetails.canExit();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.eventsService.events.some(event => event.id == route.params['id'])) {
        return true;
      }
      return false;
  }
  
}
