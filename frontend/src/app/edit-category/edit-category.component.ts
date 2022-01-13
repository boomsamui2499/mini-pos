import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getCategoryFormData(dataAdd:any) { 
    console.log(dataAdd);
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id);
    this.apiServiceService.editCategory(id, dataAdd).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/category')
    })
  }
}
