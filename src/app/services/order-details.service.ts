import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  constructor(private httpClient: HttpClient){}

  getOrderDetails(id: number) {
    this.httpClient.get("http://localhost:8080/orders/"+id+"/details").subscribe((res)=>{
      console.log(res);
  });
  }
}
