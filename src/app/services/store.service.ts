import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: IProduct[] = []

  constructor() { }

  addProduct(product: IProduct) {
    this.myShoppingCart.push(product)
  }

  getShoppingCart() {
    return this.myShoppingCart
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)

  }
}
