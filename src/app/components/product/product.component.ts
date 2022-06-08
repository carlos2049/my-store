import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct = {
    id: '',
    title: '',
    images: [],
    price: 0,
    catogory: {
      id: '',
      name: ''
    },
    description: ''
  }

  @Output() addedProduct = new EventEmitter<IProduct>()

  constructor() {

  }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }

}
