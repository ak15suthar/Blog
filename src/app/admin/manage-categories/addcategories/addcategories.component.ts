import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CategoryService } from '../category.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {
  myForm:FormGroup;
  constructor(private service:CategoryService,private messageService:MessageService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      cname : new FormControl('',Validators.required)
    })
  }
  submit(){
    if(this.myForm.valid){
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Added Category'});
      this.service.categoryAdd(this.myForm.value).subscribe(res =>{
        console.log(res);

      })
    }
  }
}
