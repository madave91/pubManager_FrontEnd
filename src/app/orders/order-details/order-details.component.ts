import { Component, OnInit } from '@angular/core';
import { Detail } from './detail.model'

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  details: Detail[] = [
    new Detail(1, 1, "Absolut Vodka", 3, 1800, "citrommal"),
    new Detail(2, 1, "Jim Beam", 2, 1400, "jéggel"),
    new Detail(1, 2, "Bacardi Rum", 2, 1400, ""),
    new Detail(2, 2, "Chivas Regal 12", 2, 1200, "1 db jéggel"),
    new Detail(1, 3, "Finlandia", 2, 1500, ""),
    new Detail(2, 3, "Becherovka", 2, 1200, ""),
    new Detail(3, 3, "Captain Morgan Spice", 2, 1500, ""),
    new Detail(1, 4, "Aperol", 1, 900, "cocktail: Aperol Spritz"),
    new Detail(2, 4, "Pezsgő", 2, 800, "coctail: Aperol Spritz")
  ]
  selectedDetail : Detail;
  constructor() { }

  ngOnInit() {
  }

  onSelect(detail: Detail): void{
    this.selectedDetail = detail;
    for(let i of this.details){
      i.selected = false;
    }
    detail.selected = true;
  }
}
