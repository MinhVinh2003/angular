import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { DieuHuongComponent } from './dieu-huong/dieu-huong.component';
import { AppComponent } from './app.component';
import { FromthemComponent } from './fromthem/fromthem.component';
import { ToggleComponent } from './toggle/toggle.component';
import { CustomerKhachhangComponent } from './customer-khachhang/customer-khachhang.component';

const routes: Routes =
[
  {path:'',component:CustomerKhachhangComponent},
  {path:'app',component:AppComponent},
  {path:'fromthem',component:FromthemComponent},
  {path:'dieuhuong',component:DieuHuongComponent},
  {path:'login',component:ToggleComponent},
  {path:'khachhang',component:CustomerKhachhangComponent}

];

@NgModule({
  declarations: [],
  imports:
  [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
