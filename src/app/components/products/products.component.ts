import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/core/consants/mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = PRODUCTS;

  ngOnInit(): void{
    console.log(this.products);
  }
}
