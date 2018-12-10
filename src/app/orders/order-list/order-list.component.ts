import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Order } from '../order.model'
import { OrderService } from '../../services/order.service'
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/products/modal.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  orders: Array<Order> = [];
  /* = [
    new Order(1, new Date('2018-10-15'), 3500),
    new Order(2, new Date('2018-10-15'), 2700),
    new Order(3, new Date('2018-10-14'), 1800),
    new Order(4, new Date('2018-10-13'), 12000)
  ];*/

  @Output() orderWasSelected =new EventEmitter<number>();
  @Input('price') price: number = 0;
  called = false;
  constructor(private os: OrderService, private modalService: ModalService) {
   }
    
  ngOnInit() {
    this.os.getOrders().subscribe((orders: Order[]) => {
      console.log(orders);
      for(var i=0; i<orders.length; i++){
        this.orders.push(new Order().deserialize(orders[i]));
        
      }
      console.log(this.orders);
    });
    
  }

  onSelect(order: Order): void{
    this.orderWasSelected.emit(order.orderId);
    this.called = true;
    console.log(order.orderId);
    for(let i of this.orders){
      i.selected = false;
    }
    order.selected = true;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  newOrder(){
    var order: Order = new Order();
    order.orderId = this.orders[this.orders.length-1].orderId+1;
    order.paid = false;
    order.price = 0;
    order.selected = false;
    order.orderDate = new Date();
    //order.customerOrderProducts = null;
    new Order().deserialize(order);
    this.orders.push(order);
    this.os.addOrder(order).subscribe()

  }

  deleteOrder(){
    for(var i=0; i<this.orders.length; i++){
      if(this.orders[i].selected == true){
        this.os.deleteOrder(this.orders[i].orderId).subscribe();  
        this.orders.splice(i, 1);        
      }
    }
  }
}
