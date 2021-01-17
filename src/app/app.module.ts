import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { SetHeaderInterceptor } from './set-header.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ {provide : HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
