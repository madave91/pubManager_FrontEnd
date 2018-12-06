import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/product/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:8080/products/");
  }
}
