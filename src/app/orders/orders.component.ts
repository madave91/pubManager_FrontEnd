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
   // this.child.setShow();
    if(this.selectedOrderNumber != null && this.child2.called == true){
      this.child.os.getOrderDetails(this.selectedOrderNumber);
      this.child2.called = false;
    }  
  }
}
