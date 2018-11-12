import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { WorkscheduleComponent } from './workschedule/workschedule.component';
import { SettingsComponent } from './settings/settings.component';
import { ReservationListComponent } from './reservations/reservation-list/reservation-list.component';
import { TablesComponent } from './reservations/tables/tables.component';
import { ReservationDetailsComponent } from './reservations/reservation-details/reservation-details.component';
import { DetailComponent } from './orders/order-details/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    OrderListComponent,
    OrderDetailsComponent,
    ReservationsComponent,
    WorkscheduleComponent,
    SettingsComponent,
    ReservationListComponent,
    TablesComponent,
    ReservationDetailsComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
