import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct, createProductDTO } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<IProduct[]>(this.apiUrl)
  }

  getProduct(id: string) {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`)

  }

  create(data: createProductDTO) {
    return this.http.post<IProduct>(`${this.apiUrl}`, data)
  }
}
