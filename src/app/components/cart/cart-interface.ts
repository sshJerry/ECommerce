import { CatogoriesInterface } from "../catogories/catogories-interface"
import { ProductsInterface } from "../products/products-interface"

export interface CartInterface {
    catogoryIdToProduct?:CatogoriesInterface;
    productIdToProduct?:ProductsInterface;
    cartItem:string;
    cartItemPrice:number;
    totalCartPrice?:number;
    totalCartQuanity?:number;
}
