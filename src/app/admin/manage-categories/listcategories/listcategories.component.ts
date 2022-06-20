import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent implements OnInit {
  addcategories:{};
  constructor(private service:CategoryService,private rut:Router,private messageService:MessageService) { }

  async ngOnInit() {
    await this.service.categoryGet().then(res => {
      this.addcategories = res;
    })
  }
  delete(value){
    
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Deleted'});
    console.log(value);
    this.service.categoryDelete(value).subscribe(res => {
      console.log("Deleted : "+res);
    })
    this.rut.navigate(['/admin/manage-categories/listcategories']);
  }
}
