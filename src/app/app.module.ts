import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DieuHuongComponent } from './dieu-huong/dieu-huong.component';
import { SvgComponent } from './svg/svg.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FromthemComponent } from './fromthem/fromthem.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerKhachhangComponent } from './customer-khachhang/customer-khachhang.component';
@NgModule({
  declarations: [
    AppComponent,
    DieuHuongComponent,
    SvgComponent,
    ToggleComponent,
    FromthemComponent,
    CustomerKhachhangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
