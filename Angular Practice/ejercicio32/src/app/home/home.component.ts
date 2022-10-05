import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myText = "Este título debería tener la primer letra mayúscula de cada palabra";

  constructor() { }

  ngOnInit() {
  }

}

