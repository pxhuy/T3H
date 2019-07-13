export class Weather {
  /**
   * khai báo các thuộc tính của đối tượng(các trường của dữ liệu)
   */
  constructor(
    private city: string,
    private weather: any,
    private coord: Coord) {

  }
}
///

export class Coord {
  lat: string;
  long: string;

  constructor(obj) {
    obj = obj || {};

    this.lat = obj.lat;
    this.long = obj.long;
  }
}


export class Weather2 {

}
