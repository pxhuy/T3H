import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('message') Message:string;
  @Output('childOutput') childEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }
  //khai báo giá trị trả về của event
  onChange(element){
    debugger;
    this.childEvent.emit(element.value);
  }

}
