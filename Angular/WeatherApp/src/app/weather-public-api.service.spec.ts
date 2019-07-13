import { TestBed } from '@angular/core/testing';

import { WeatherPublicApiService } from './weather-public-api.service';

describe('WeatherPublicApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherPublicApiService = TestBed.get(WeatherPublicApiService);
    expect(service).toBeTruthy();
  });
});
