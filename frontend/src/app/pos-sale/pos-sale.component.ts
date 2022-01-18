import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pos-sale',
  templateUrl: './pos-sale.component.html',
  styleUrls: ['./pos-sale.component.css']
})
export class PosSaleComponent implements OnInit {

  productList: any //เเสดง product
  categoryList: any //เเสดงชื่อ category
  currentBill: any //แสดง current bill
  selectedCategory: any //เลือก category
  selectedProductInCurrentBill: any //popup เพิ่มลด จำนวน
  value: any

  closeResult: any

  constructor(
    private apiServiceService:ApiServiceService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.selectedCategory = 0
    this.apiServiceService.showSelectCategory(this.selectedCategory).subscribe(data => {
      this.productList = data
      this.productList = this.productList.data
      console.log(this.productList);
    })

    this.apiServiceService.getCategory().subscribe(data => {
      this.categoryList = data;
      this.categoryList = this.categoryList.data
      console.log(this.categoryList);     
    })

    this.apiServiceService.showCurrentBill().subscribe(data => {
      this.currentBill = data;
      this.currentBill = this.currentBill.data
      console.log(this.currentBill);
      console.log('=========');
      
    })
  }

  selectCategoryId() {
    console.log(this.selectedCategory);    
    this.apiServiceService.showSelectCategory(this.selectedCategory).subscribe(data => {
      this.productList = data
      this.productList = this.productList.data
      console.log(this.productList);
    })
  }

  addProduct(id: any, price: any) {
    const product = {
      product_id: id,
      price : price
    }
    console.log(product);
    
    this.apiServiceService.addProductToCurrentBill(product).subscribe(data => {
      console.log(data);
      this.apiServiceService.showCurrentBill().subscribe(data => {
        this.currentBill = data;
        this.currentBill = this.currentBill.data
        console.log(this.currentBill);
      })
    })
  }

  deleteProductInCurrent(id: any) {
    this.apiServiceService.deleteProductInCurrentBill(id).subscribe(data => {
      console.log(data);
      this.apiServiceService.showCurrentBill().subscribe(data => {
        this.currentBill = data;
        this.currentBill = this.currentBill.data
        console.log(this.currentBill);
      })
    })
    
  }

  open(content: any, price: any, name: any, count: any, id: any) {
    this.selectedProductInCurrentBill = {
      name: name,
      price: price,
      count: count,
      id: id
    }
    this.value = {
      id: id,
      count: count
    }
    console.log(this.currentBill);
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  decrease() {
    if(this.value.count > 0) {
      console.log('decrease');
      this.value.count--
      console.log(this.value.count);
    }
  }

  increase() {
    console.log('increase');
    this.value.count++
    console.log(this.value.count);
  }

  saveValue() {
    console.log(this.value.id);
    console.log(this.value.count);
    this.apiServiceService.updateProductValue(this.value.id, {'count': this.value.count}).subscribe(data => {
      console.log(data);
      this.apiServiceService.showCurrentBill().subscribe(data => {
        this.currentBill = data;
        this.currentBill = this.currentBill.data
        console.log(this.currentBill);
      })
    })
    this.modalService.dismissAll()
  }
}
