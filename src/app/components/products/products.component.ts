import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { ProductsInterface } from './products-interface';
import { CartInterface } from '../cart/cart-interface';
import { Router} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() componentCatogory : any;
  componentProduct: ProductsInterface = {} as ProductsInterface;
  componentProducts: ProductsInterface[] = [];
  subscription: Subscription;

  constructor(
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges){
    this.dataService.currentCatogory.subscribe(componentCatogory => this.componentCatogory = componentCatogory);
    this.getProductsById(this.componentCatogory.catogoryId);
  }
  ngOnInit():void{
  }
  
  getProductsById(productCatogoryId:number) : void{
    this.dataService.getProducts().subscribe({
      next:(data)=>{
        this.filterProductForProducts(data,productCatogoryId);
      }
    });
  }

  filterProductForProducts(productList:ProductsInterface[], id:number): void{
    this.componentProducts = [];
    productList.forEach((componentProduct) =>{
      if(componentProduct.catorgoryGroup?.catogoryId == id){
        this.componentProducts.push(componentProduct);
      }
    });
  }

  currentProductCart: CartInterface[] = [];
  cartItem:string;
  cartItemPrice:number;
  buy(product: ProductsInterface){
    this.currentProductCart.push({
      cartItem: product.catorgoryGroup!.catogoryName, 
      cartItemPrice: product.productPrice
    });
    this.dataService.addToCart(this.currentProductCart);
    console.log("You Chill? ", this.currentProductCart);
    this.router.navigate(['/']);
  }
}
