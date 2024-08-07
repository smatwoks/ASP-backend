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
import { WaterComponent } from './water/water.component';
import { AirComponent } from './air/air.component';
import { PurposeComponent } from './purpose/purpose.component';
import { ProcessComponent } from './process/process.component';
import { LabComponent } from './lab/lab.component';
import { MedicalComponent } from './medical/medical.component';
import { EnvironComponent } from './environ/environ.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  {path:'air',component:AirComponent},
  {path:'purpose',component:PurposeComponent},
  {path:'process',component:ProcessComponent},
  {path:'lab',component:LabComponent},
  {path:'medical',component:MedicalComponent},
  {path:'environ',component:EnvironComponent},
  {path:'attach',component:AttachmentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
