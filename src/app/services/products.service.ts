import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  fetchProducts() {
    return this.httpClient.get('https://fakestoreapi.co/products');
  }
}
