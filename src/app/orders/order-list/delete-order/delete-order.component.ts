import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/products/modal.service';
import { OrderListComponent} from 'src/app/orders/order-list/order-list.component'

import { Order } from '../../order.model';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent implements OnInit {
  @Output('delOrder') delOrder = new EventEmitter<Order>();
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  deleteOrder(order: Order){
    this.delOrder.emit(order);
    this.closeModal("deleteOrder")
  }
}
