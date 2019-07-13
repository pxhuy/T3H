import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent implements OnInit {

    //định nghĩa cách rõ ràng
    count : number = 4;
    // dynamic type
    message = 'your number is: ';
    // array
    arr = [
      { id: 1, key: "key1", name: "name-1" },
      { id: 2, key: "key2", name: "name-2" },
      { id: 3, key: "key3", name: "name-3" }]
  constructor() { }
  ngOnInit() {
  }
  Increament() {
    this.count++;
    this.message = 'The number is update';
  }
  IncreaArr() {
    var tam = this.arr.length -1;
    var addArr = {
      id: tam++,
      key: 'key'+tam++,
      name: 'name-' + tam++,
    }
    this.arr.push(addArr);
  }
}
