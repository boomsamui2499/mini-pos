import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  url = 'http://127.0.0.1:8000/'
  
  constructor(private http:HttpClient) { }
 
  // หน้าจัดการ product
  getProduct() {
    return this.http.get(this.url + 'product');
  }

  addProduct(data: any) {
    return this.http.post(this.url + 'product/add', data)
  }

  editProduct(data: any, updatedBody: any) {
    const endpointURL = this.url + 'product/' + data + '/update'
    return this.http.put(endpointURL, updatedBody)
  }

  deleteProduct(data: any, updatedBody: any) {
    const endpointURL = this.url + 'product/' + data + '/delete'
    return this.http.put(endpointURL, updatedBody)
  }

  // หน้าจัดการ category
  getCategory() {
    return this.http.get(this.url + 'catagory');
  }

  addCategory(data: any) {
    return this.http.post(this.url + 'catagory/add', data)
  }

  editCategory(data: any, updatedBody: any) {
    const endpointURL = this.url + 'catagory/' + data + '/update'
    return this.http.put(endpointURL, updatedBody)
  }

  deleteCategory(data: any, updatedBody: any) {
    const endpointURL = this.url + 'catagory/' + data + '/delete'
    return this.http.put(endpointURL, updatedBody)
  }

  // หน้า pos sale
  showSelectCategory(data: any) {
    return this.http.get(this.url + 'product/searchCatagory/' + data)
  }

  showCurrentBill() {
    return this.http.get(this.url + 'billCurrent');
  }

  addProductToCurrentBill(data: any) {
    return this.http.post(this.url + 'billCurrent/add', data)
  }

  deleteProductInCurrentBill(data: any) {
    return this.http.delete(this.url + 'billCurrent/' + data + '/delete')
  }

  // หน้า payment
  showTotalPrice() {
    return this.http.get(this.url + 'billCurrent/price');
  }
  
  pay() {
    return this.http.get(this.url + 'bill/add')
  }

  showPayingBill() {
    return this.http.get(this.url + 'billLast')
  }
}
