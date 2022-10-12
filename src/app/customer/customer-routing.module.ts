import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { CartComponent } from './page/cart/cart.component';
import { ContactComponent } from './page/contact/contact.component';
import { DetailComponent } from './page/detail/detail.component';
import { DkComponent } from './page/dk/dk.component';
import { DnComponent } from './page/dn/dn.component';
import { EmailComponent } from './page/email/email.component';
import { HomeComponent } from './page/home/home.component';
import { NamComponent } from './page/nam/nam.component';
import { NewComponent } from './page/new/new.component';
import { NuComponent } from './page/nu/nu.component';
import { PkComponent } from './page/pk/pk.component';
import { ProductsComponent } from './page/products/products.component';
import { ShopComponent } from './page/shop/shop.component';
import { SizeComponent } from './page/size/size.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'new', component: NewComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: "size", component:SizeComponent},
  {path:"cart", component:CartComponent},
  {path:"pk", component:PkComponent},
  {path:"dn", component:DnComponent},
  {path:"dk", component:DkComponent},
  {path:"nu", component:NuComponent},
  {path:"nam", component:NamComponent},
  {path:"email", component:EmailComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
