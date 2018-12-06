import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from 'src/app/services/product-service.service';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
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

}
