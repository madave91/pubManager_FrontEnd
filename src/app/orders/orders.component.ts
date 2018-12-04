import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Order } from './order.model';
import {  } from 'events';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  selectedOrder: Order;

  constructor() { }

  ngOnInit() {
  }
}
