import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  { path: 'about', component: AboutComponent },  
  { path: 'header', component: HeaderComponent },
  { path:  'footer', component:FooterComponent},
  { path:  'services', component:ServicesComponent},
  { path:  'services-details', component:ServicesDetailsComponent},
  { path:  'products', component:ProductsComponent},
  { path:  'product-details', component:ProductDetailsComponent},
  { path:  'order', component:OrderComponent},
  { path:  'order-tracking', component:OrderTrackingComponent},
  { path:  'login', component:LoginComponent},
  { path:  'password', component:PasswordComponent},
  { path:  'signup', component:SignupComponent},


  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
