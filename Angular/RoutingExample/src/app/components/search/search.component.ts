import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  weather: Weather;
  querryCityName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((route) => {
      if(route['cityName']) {
        this.querryCityName = route['cityName']
      }
    })
  }

  ngOnInit() {
  }

}
