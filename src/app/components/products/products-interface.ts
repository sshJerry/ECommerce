import {CatogoriesInterface} from "../catogories/catogories-interface"

export interface ProductsInterface {
    catorgoryGroup?:CatogoriesInterface;
    productId:number;
    productDescription:string;
    productPrice:number;
}
