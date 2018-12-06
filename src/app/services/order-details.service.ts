import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Detail } from '../orders/order-details/detail.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  constructor(private httpClient: HttpClient){}

  getOrderDetails(id: number): Observable<Detail[]>{
    return this.httpClient.get<Detail[]>("http://localhost:8080/orders/"+id+"/details");
  }
}
