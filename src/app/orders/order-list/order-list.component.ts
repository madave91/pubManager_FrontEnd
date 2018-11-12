import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model'
import { Detail } from '../order-details/detail.model'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [
    new Order(1, new Date('2018-10-15'), 3500),
    new Order(2, new Date('2018-10-15'), 2700),
    new Order(3, new Date('2018-10-14'), 1800),
    new Order(4, new Date('2018-10-13'), 12000)
  ];
  selectedOrder : Order;
  constructor() { }

  ngOnInit() {
  }

  onSelect(order: Order): void{
    this.selectedOrder = order;
    for(let i of this.orders){
      i.selected = false;
    }
    order.selected = true;
    
  }
}
