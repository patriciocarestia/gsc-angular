import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../events.service';

@Injectable({
  providedIn: 'root'
})

export class ResolveGuard implements Resolve<any> {
  constructor(private eventsService: EventsService) {

  }

  resolve(){
    return this.eventsService.getEvents();
  }
  
}
