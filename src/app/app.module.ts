import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

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
import { OrderService } from './services/order.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsService } from './services/order-details.service';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [OrderService, OrderDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
