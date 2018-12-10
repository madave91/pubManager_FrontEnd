import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  quantity = 0;
  comment = "";
  total = 0;

  constructor(private os: OrderDetailsService, private modalService: ModalService) { }

  ngOnInit() {
    this.details = [];
    this.total = 0;
    this.os.getOrderDetails(this.orderId).subscribe((details: Detail[]) => {
      console.log(details);
      for(var i=0; i<details.length; i++){
        var detail: Detail = new Detail().deserialize(details[i])
        this.details.push(detail);
        this.total += detail.sum;
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
    this.selectedDetail = detail;
    for(var i=0; i<this.details.length; i++){
      if(this.details[i].id != detail.id){
        this.details[i].selected = false;
      }else{
        this.details[i].selected = true;
      }
    }
  }

  //functions to get a new detail
  addNewDetail(product: Product){
    if(product != null){
      product = new Product().deserialize(product);
      var detail: Detail = new Detail();
      detail.id = product.id;
      detail.productName = product.productName;
      detail.quantity = this.quantity;
      detail.price = product.price;
      detail.sum = product.price*this.quantity;
      detail.comment = this.comment;
      new Detail().deserialize(detail);
      this.details.push(detail);
      this.total += detail.sum;
      this.os.addOrderDetail(this.orderId, detail).subscribe();
    }
  }

  getNewQuantity(quantity){
    console.log(quantity);
    if(quantity != null && quantity != 0){     
      this.quantity = quantity;
    }   
  }
  setComment(comment){
    if(comment != "" || comment != null){
      this.comment = comment;
    }
  }

  deleteDetail(){
    this.total -= this.details[this.details.length-1].sum;
    this.os.deleteDetail(this.orderId, this.details[this.details.length-1].id).subscribe();
    this.details.splice(this.details.length-1, 1);
    
    /*for(var i=0; i<this.details.length; i++){
      if(this.details[i]==this.selectedDetail){
        console.log("found! orderID: " + this.orderId + "selectedDetailId: " + this.selectedDetail.id);
        this.details.splice(i, 1);
        this.os.deleteDetail(this.orderId, this.selectedDetail.id).subscribe();
      }
    }*/
  }
}
