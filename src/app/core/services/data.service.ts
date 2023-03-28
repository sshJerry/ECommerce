import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatogoriesInterface } from 'src/app/components/catogories/catogories-interface';
import { ProductsInterface } from 'src/app/components/products/products-interface';
import { PRODUCTS } from '../consants/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentCatogorySource = new BehaviorSubject<CatogoriesInterface>({
    catogoryId: 1, catogoryName: "Wells Fargo Mock"
  });
  currentCatogory = this.currentCatogorySource.asObservable();
  constructor() { }

  changeCatogory (catogory: CatogoriesInterface){
    this.currentCatogorySource.next(catogory);
    console.log("DATA CATOGORY OBSERABLE CHANGE TO: " + catogory);
  }

  getProducts(): Observable<ProductsInterface[]> {
    const products = of (PRODUCTS);
    return products;
  }

  //getProductsById(productCatogoryId:number){}
}
