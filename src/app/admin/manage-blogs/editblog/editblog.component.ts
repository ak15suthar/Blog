import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../manage-categories/category.service';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  myForm:FormGroup;
  blog={};
  id=0;
  category={};
  constructor(private service1:CategoryService,private service2:BlogService,private routes:ActivatedRoute,private messageService:MessageService,private rut:Router) { }

  async ngOnInit(){
     this.id = this.routes.snapshot.params.id;
     console.log("Blog ID : "+this.id);
    
    await this.service1.categoryGet().then(res => {
      this.category = res;
    }) 
     
    await this.service2.blogGetById(this.id).then(res => {
      this.blog = res;
      console.log(this.blog);
    })

    this.myForm = new FormGroup({
      bid : new FormControl(this.blog[0].bid,Validators.required),
      title : new FormControl(this.blog[0].title,Validators.required),
      cat_id : new FormControl(this.blog[0].cat_id,Validators.required),
      isfeatured : new FormControl(this.blog[0].isfeatured,Validators.required),
      isactive : new FormControl(this.blog[0].isactive,Validators.required),
      description : new FormControl(this.blog[0].description,Validators.required)
    })
  }

  update(){
    if(this.myForm.valid){
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Updated'});
      this.service2.blogUpdate(this.myForm.value).subscribe(res => {
        console.log(res);
      })
      this.rut.navigate(['/admin/manage-blogs/listblog']);
    }
  }
}
