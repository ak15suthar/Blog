import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategories',
  templateUrl: './editcategories.component.html',
  styleUrls: ['./editcategories.component.css']
})
export class EditcategoriesComponent implements OnInit {
  myForm:FormGroup;
  category={};
  id = 0; 
  constructor(private service:CategoryService,private messageService:MessageService,private rut:Router,private route:ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    console.log("Category Id : "+this.id);

    await this.service.categoryGetById(this.id).then(res =>{
      this.category = res;
      console.log(this.category);
    })

    this.myForm = new FormGroup({
      cid : new FormControl(this.category[0].cid,Validators.required), 
      cname : new FormControl(this.category[0].cname,Validators.required)
    })
  }

  update(){
    if(this.myForm.valid){
      this.service.categoryUpdate(this.myForm.value).subscribe(res => {
      console.log(res);
    })
    this.rut.navigate(['/admin/manage-categories/listcategories']);
    }
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Updated'});
  }
}
