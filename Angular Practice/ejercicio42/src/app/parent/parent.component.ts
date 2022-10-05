import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie, MovieResponse } from "../movie";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  movieList!: Movie[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  makeRequest() {
    const req = this.http.get<MovieResponse>(environment.api)
    req.subscribe(data => {
      this.movieList = data.results;
    });
  }
}
