import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { PosSaleComponent } from './pos-sale/pos-sale.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { BillListComponent } from './bill-list/bill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    AddProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditProductComponent,
    EditCategoryComponent,
    PosSaleComponent,
    PaymentComponent,
    PaymentReceiptComponent,
    BillListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgbModal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
