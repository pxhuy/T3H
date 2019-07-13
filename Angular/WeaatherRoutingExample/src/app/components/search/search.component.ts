import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicWeatherService } from 'src/app/services/public-weather.service';
import { Weather } from '../../Models/weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weather: Weather;

  constructor(
    private weatherService: PublicWeatherService,
    private route: ActivatedRoute,
    private router: Router) {

    this.route.params.subscribe(params => {
      if (params.cityname) {
        debugger;
        this.doSearch(params.cityName);

      }
    });
  }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.weatherService.querry(term).toPromise().then(
      (res) => {
        this.weather = this.convertToViewModel(res);
        debugger;
       }
    );
  }

  convertToViewModel(res: any) {
     const ret = new Weather(res.name, res.main.tempy, res.weather[0].description);
     debugger;
     return ret;
  }

  onSearch(term: string) {
    this.router.navigate(['search', { cityName: term }]);
  }
}

