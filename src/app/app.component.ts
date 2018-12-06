import { Component } from '@angular/core';
import './products/modal.less';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pubManagerFrontEnd';
  loadedFeature = 'orders';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
