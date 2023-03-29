import { Component } from '@angular/core';
import { CartInterface } from './cart-interface';
import { DataService } from 'src/app/core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  //cartItems : CartInterface [] = [];
  cartItem : CartInterface = {} as CartInterface;
  cartItems : CartInterface[] = [];
  subscription: Subscription;

  constructor(private data: DataService) {}

  ngOnInit():void{
    this.subscription = this.data.currentCartItems.subscribe((cartItems) => {
      this.cartItems = cartItems
    });
    // this.subscription = this.data.currentCart.subscribe((cartItems) => {
    //   this.cartItems = {
    //     cartItem : this.cartItems.cartItem , 
    //     cartItemPrice : this.cartItems.cartItemPrice
    //   }
    // });
    console.log(this.cartItems)
  }

  ngOnDestory(){
    this.subscription.unsubscribe();
  }
  
}
