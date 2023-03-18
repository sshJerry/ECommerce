import { CatogoriesInterface } from "../catogories/catogories-interface"
import { ProductsInterface } from "../products/products-interface"

export interface CartInterface {
    //cartId:
    catogoryIdToProduct?:CatogoriesInterface;
    productIdToProduct?:ProductsInterface;
    cartItem:number;
    cartItemPrice:number;
    totalCartPrice?:number;
    totalCartQuanity?:number;
}
