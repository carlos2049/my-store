import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { IProduct } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: IProduct[] = []
  private myCart = new BehaviorSubject<IProduct[]>([])

  myCart$ = this.myCart.asObservable()

  constructor() { }

  addProduct(product: IProduct) {
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart() {
    return this.myShoppingCart
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)

  }
}
