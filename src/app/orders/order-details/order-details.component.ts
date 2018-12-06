import { Component, OnInit, Input } from '@angular/core';
import { Detail } from './detail.model';
import { OrderDetailsService } from '../../services/order-details.service'
import { ModalService } from '../../products/modal.service'
import { Product } from 'src/app/products/product/product.model';
import { ProductComponent } from 'src/app/products/product/product.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  details: Array<Detail> = [];
  /* = [
    new Detail(1, 1, "Absolut Vodka", 3, 1800, "citrommal"),
    new Detail(2, 1, "Jim Beam", 2, 1400, "jéggel"),
    new Detail(1, 2, "Bacardi Rum", 2, 1400, ""),
    new Detail(2, 2, "Chivas Regal 12", 2, 1200, "1 db jéggel"),
    new Detail(1, 3, "Finlandia", 2, 1500, ""),
    new Detail(2, 3, "Becherovka", 2, 1200, ""),
    new Detail(3, 3, "Captain Morgan Spice", 2, 1500, ""),
    new Detail(1, 4, "Aperol", 1, 900, "cocktail: Aperol Spritz"),
    new Detail(2, 4, "Pezsgő", 2, 800, "coctail: Aperol Spritz")
  ]*/
  @Input('orderIdValue') orderId: number = 0;
  selectedDetail : Detail;
  newDetail: Detail;
  orderSelected= false;

  constructor(private os: OrderDetailsService, private modalService: ModalService) { }

  ngOnInit() {
    this.details = [];
    this.os.getOrderDetails(this.orderId).subscribe((details: Detail[]) => {
      console.log(details);
      for(var i=0; i<details.length; i++){
        this.details.push(new Detail().deserialize(details[i]));  
      }
      console.log(this.details);
    });
  }
   
  openModal(id: string) {
    this.modalService.open(id);
}
  setShow(): void{
    this.orderSelected = true;
    this.ngOnInit(); 
  }
  onSelect(detail: Detail){
    for(var i=0; i<this.details.length; i++){
      if(this.details[i].id != detail.id){
        this.details[i].selected = false;
      }else{
        this.details[i].selected = true;
      }
    }
  }

  addNewDetail(product: Product, quantity: number){
    var detail = new Detail().deserialize(product);
    detail.quantity = quantity;
    this.details.push(detail);
  }
}
