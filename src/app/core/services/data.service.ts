import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatogoriesInterface } from 'src/app/components/catogories/catogories-interface';
import { ProductsInterface } from 'src/app/components/products/products-interface';
import { CartInterface } from 'src/app/components/cart/cart-interface';
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

  private _cartSource = new BehaviorSubject([]);
  currentCartItems = this._cartSource.asObservable();


  constructor() { }

  changeCatogory (catogory: CatogoriesInterface){
    this.currentCatogorySource.next(catogory);
    console.log("DATA CATOGORY OBSERABLE CHANGE TO: " + catogory);
  }

  getProducts(): Observable<ProductsInterface[]> {
    const products = of (PRODUCTS);
    return products;
  }
  
  addToCart(cartItems: CartInterface[]):void {
    this._cartSource.next(cartItems);
  }


}
