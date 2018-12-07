import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from 'src/app/services/product-service.service';
import { ModalService } from '../modal.service';
import { OrderDetailsComponent } from 'src/app/orders/order-details/order-details.component';
import { Detail } from 'src/app/orders/order-details/detail.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    products: Array<Product> = [];
    selectedProduct : Product;
    productSelected = false;
    @Output('counter') counter = new EventEmitter<number>();
    //@Output('quantity') quantity = new EventEmitter();
    @Output('newDetail') newDetail = new EventEmitter<Product>();
    constructor(private productService: ProductService, private modalService: ModalService) { }

    ngOnInit() {
        //Get the Products:
        this.products = [];
        this.productService.getProducts().subscribe((products: Product[]) => {
            console.log(products);
            for(var i=0; i<products.length; i++){
                this.products.push(new Product().deserialize(products[i]));  
            }          
            console.log(this.products);
        });
    }
    closeModal(id: string) {
        this.modalService.close(id);
    }
    onSelect(product: Product){
        this.selectedProduct = product;
        for(var i=0; i<this.products.length; i++){
            if(this.products[i].id != product.id){
                this.products[i].selected = false;
            }else{
                this.products[i].selected = true;
                this.productSelected = true;
            }
        }
    }

    addProductToDetails(product: Product, counter: number){
        console.log(this.selectedProduct);
        this.counter.emit(counter);
        this.newDetail.emit(product);     
        //this.quantity.emit(this.counter);
        console.log(this.counter);
        console.log(this.newDetail);
    }
    cancelDetail(){
        this.counter.emit(null);
        this.newDetail.emit(null);    
    }
}
