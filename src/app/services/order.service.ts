import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Response } from "@angular/http";
import { Order } from '../orders/order.model';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order_name = "yourstring"; 

  constructor(private httpClient: HttpClient){}

  getOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>("http://localhost:8080/orders/");
  }
}
