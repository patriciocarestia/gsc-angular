import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  nameFocused: boolean = false;
  dateFocused: boolean = false;
  timeFocused: boolean = false;
  addressFocused: boolean = false;
  cityFocused: boolean = false;
  countryFocused: boolean = false;

  constructor(private eventService: EventService, private router: Router, private fb: FormBuilder) {}
  
  

  eventForm = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    location: this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', [Validators.required, Validators.pattern('[A-Z]{2}')]],
    })
  });

  
  ngOnInit(): void {
  }

  onFocus(inputFocused: string): void{
    switch(inputFocused) {
      case "name": {
        this.nameFocused = true;
        break;
      }
      case "date": {
        this.dateFocused = true;
        break;
      }
      case "time": {
        this.timeFocused = true;
        break;
      }
      case "address": {
        this.addressFocused = true;
        break;
      }
      case "city": {
        this.cityFocused = true;
        break;
      }
      case "country": {
        this.countryFocused = true;
        break;
      }
    }
  }
  onBlur(inputFocused: string): void{
    switch(inputFocused) {
      case "name": {
        this.nameFocused = false;
        break;
      }
      case "date": {
        this.dateFocused = false;
        break;
      }
      case "time": {
        this.timeFocused = false;
        break;
      }
      case "address": {
        this.addressFocused = false;
        break;
      }
      case "city": {
        this.cityFocused = false;
        break;
      }
      case "country": {
        this.countryFocused = false;
        break;
      }
    }
  }

  onSubmit(): void {
    this.eventService.saveEvent(this.eventForm.value);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
