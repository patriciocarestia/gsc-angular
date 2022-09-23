import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ResolveGuard } from './guards/resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
