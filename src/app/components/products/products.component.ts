import { Component, OnInit } from '@angular/core';
import { IProduct, createProductDTO, IUpdateProduct } from '../../models/product.model'
import { StoreService } from '../../services/store.service'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: IProduct[] = []
  total = 0
  today = new Date()
  date = new Date(2021, 1, 21)

  products: IProduct[] = []
  showProductDetail = false
  productChosen: IProduct = {
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

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data

      })
  }

  onAddToShoppingcart(product: IProduct) {
    // this.myShoppingCart.push(product)
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id)
      .subscribe(data => {
        console.log('product', data);
        this.toggleProductDetail()
        this.productChosen = data
      })
  }

  createNewProduct() {
    console.log('mna');

    const product: createProductDTO = {
      title: 'nuevo productos',
      description: 'jii',
      images: [''],
      price: 1000,
      categoryId: 1
    }
    this.productsService.create(product).subscribe({
      next: (_data) => {
        this.products.unshift(_data)
      },
      error: (err) => {
        console.log('jje');

      },
    }
    )
  }

  updateProduct(){

    const changes : IUpdateProduct = {
      title: 'nuevo titulo2'
    }
    const id = this.productChosen.id
    this.productsService.update(id,changes).subscribe({
      next:(data: any)=>{
        const product = this.products.findIndex(x=> x.id === data.id)
        this.products[product] = data
        this.productChosen = data
        
      },
      error:(err)=>{
        console.log('updateError', err);
        
      }
    })
  }

}
