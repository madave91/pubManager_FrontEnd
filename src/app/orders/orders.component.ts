import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { OrderDetailsComponent } from './order-details/order-details.component'
import { OrderListComponent } from './order-list/order-list.component'
import {  } from 'protractor';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @ViewChild(OrderDetailsComponent) child: OrderDetailsComponent;
  @ViewChild(OrderListComponent) child2: OrderListComponent;
  selectedOrderNumber: number;
  constructor() {
   }

  ngOnInit() { 
    
  }
  refreshDetails(){
    if(this.selectedOrderNumber != null && this.child2.called == true){
      console.log("selected order number: " + this.selectedOrderNumber);
      //console.log(this.child2.orders.indexOf(this.selectedOrderNumber);
      //if(this.child2.orders[this.selectedOrderNumber].customerOrderProducts != null){
        this.child.setShow();
      //}
      this.child2.called = false;
    }  
  }
}
