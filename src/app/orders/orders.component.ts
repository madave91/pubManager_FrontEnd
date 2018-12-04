import { Component, OnInit, ViewChild} from '@angular/core';
import { OrderDetailsComponent } from './order-details/order-details.component'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @ViewChild(OrderDetailsComponent) child: OrderDetailsComponent;
  selectedOrderNumber: number;

  constructor() { }

  ngOnInit() { 
  }
  refreshDetails(){
    this.child.setShow();
  }
}
