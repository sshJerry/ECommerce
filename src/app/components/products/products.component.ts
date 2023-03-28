import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/core/consants/mock-products';
import { DataService } from 'src/app/core/services/data.service';
import { ProductsInterface } from './products-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = PRODUCTS;
  componentCatogory : any;
  componentProduct: ProductsInterface = {} as ProductsInterface;
  componentProducts: ProductsInterface[] = [];
  componentProductsTest: ProductsInterface[] = [];

  constructor(private dataService: DataService) {
    this.dataService.currentCatogory.subscribe(
      componentCatogory => this.componentCatogory = componentCatogory);
  }

  ngOnInit(): void{
    console.log(this.products);
    this.dataService.currentCatogory.subscribe(
      componentCatogory => this.componentCatogory = componentCatogory);
    this.getProductsById(this.componentCatogory.catogoryId);
  }
  

  getComponentProducts(): void {
    this.dataService.getProducts().subscribe(
      products => this.products = products
    );
    //console.log(this.products);
  }

  getProductsById(productCatogoryId:number) : void{
    this.dataService.getProducts().subscribe({
      next:(data)=>{
        this.filterProductForProducts(data,productCatogoryId);
      }
    });
  }

  filterProductForProducts(productList:ProductsInterface[], id:number): void{
    let counter:number= 0;
    let list: ProductsInterface[];
    productList.forEach((componentProduct) =>{
      if(componentProduct.catorgoryGroup?.catogoryId == id){
        counter+=1;
        console.log("Log Number: " + counter);
        console.log(componentProduct);
        this.componentProducts.push(componentProduct);
      }
    });
  }
  

}
