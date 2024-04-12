import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
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
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    OrderComponent,
    OrderTrackingComponent,
    LoginComponent,
    PasswordComponent,
    SignupComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
