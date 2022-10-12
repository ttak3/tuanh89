import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { NewComponent } from './page/new/new.component';
import { ShopComponent } from './page/shop/shop.component';
import { ContactComponent } from './page/contact/contact.component';
import { DetailComponent } from './page/detail/detail.component';
import { ProductsComponent } from './page/products/products.component';
import { SizeComponent } from './page/size/size.component';
import { CartComponent } from './page/cart/cart.component';
import { PkComponent } from './page/pk/pk.component';
import { NamComponent } from './page/nam/nam.component';
import { NuComponent } from './page/nu/nu.component';
import { DnComponent } from './page/dn/dn.component';
import { DkComponent } from './page/dk/dk.component';
import { EmailComponent } from './page/email/email.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    NewComponent,
    ShopComponent,
    ContactComponent,
    DetailComponent,
    ProductsComponent,
    SizeComponent,
    CartComponent,
    PkComponent,
    NamComponent,
    NuComponent,
    DnComponent,
    DkComponent,
    EmailComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
