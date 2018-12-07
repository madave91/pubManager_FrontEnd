import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Order } from '../orders/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient){}

  getOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>("http://localhost:8080/orders/");
  }
  addOrder(order: Order){
    this.httpClient.post("http://localhost:8080/orders/", order);
  }
  deleteOrder(id:number){
    this.httpClient.delete("http://localhost:8080/orders/"+id);
  }
}
