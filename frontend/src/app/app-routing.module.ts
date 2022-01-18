import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

import { PosSaleComponent } from './pos-sale/pos-sale.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product_create', component: AddProductComponent},
  {path: 'product_edit/:id', component: EditProductComponent},

  {path: 'category', component: CategoryComponent},
  {path: 'category_create', component: AddCategoryComponent},
  {path: 'category_edit/:id', component: EditCategoryComponent},

  {path: 'pos_sale', component: PosSaleComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment_receipt', component: PaymentReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
