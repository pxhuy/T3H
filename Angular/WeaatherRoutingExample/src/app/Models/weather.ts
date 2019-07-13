export class Weather {
  constructor(
    public city: string,
    public coord: {lat: string, lon: string},
    public weather: string,
  ) { }
}
