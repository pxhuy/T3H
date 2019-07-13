import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-produc-lists',
  templateUrl: './produc-lists.component.html',
  styleUrls: ['./produc-lists.component.css']
})
export class ProducListsComponent implements OnInit {

  products = [new Product({ Id: 1, Name: 'Product-1', Price: 20})];

  constructor() { }

  ngOnInit() {
  }
  AddNewProduct(){
    const next = this.products.length + 1;
    const productToAdd = new Product
  }

}
