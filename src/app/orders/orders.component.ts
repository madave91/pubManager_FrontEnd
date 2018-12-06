import { Component, OnInit, ViewChild} from '@angular/core';
import { OrderDetailsComponent } from './order-details/order-details.component'
import { OrderListComponent } from './order-list/order-list.component'


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
      if(this.child2.orders[this.selectedOrderNumber-1].customerOrderProducts != null){
        this.child.setShow();
      }
      this.child2.called = false;
    }  
  }
}
