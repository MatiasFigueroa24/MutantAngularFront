import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './proyecto/list/list.component';
import { AddComponent } from './proyecto/add/add.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './proyecto/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
