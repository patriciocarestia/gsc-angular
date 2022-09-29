import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventGuard } from './guards/event.guard';
import { ResolveGuard } from './guards/resolve.guard';

const routes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: { data: ResolveGuard }},
  { path: 'details/:id', component: EventDetailsComponent, canActivate: [EventGuard], canDeactivate: [EventGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }