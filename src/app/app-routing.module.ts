import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CaaqmsComponent } from './caaqms/caaqms.component';
import { CemsComponent } from './cems/cems.component';
import { EqmsComponent } from './eqms/eqms.component';
import { PortComponent } from './port/port.component';
import { GasComponent } from './gas/gas.component';
import { WaterComponent } from './water/water.component';
import { AnalyticalComponent } from './analytical/analytical.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },  
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component:FooterComponent},
  { path: 'services', component:ServicesComponent},
  { path: 'products', component:ProductsComponent},
  {path:'contact',component:ContactComponent},
  {path:'caaqms',component:CaaqmsComponent},
  {path:'cems',component:CemsComponent},
  {path:'eqms',component:EqmsComponent},
  {path:'port',component:PortComponent},
  {path:'water',component:WaterComponent},
  {path:'analytical',component:AnalyticalComponent},
  {path:'gas',component:GasComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
