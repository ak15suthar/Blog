import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-listblog',
  templateUrl: './listblog.component.html',
  styleUrls: ['./listblog.component.css']
})
export class ListblogComponent implements OnInit {
  addblog:{};
  constructor(private service:BlogService,private messageService:MessageService) { }

  async ngOnInit(){
    await this.service.blogGet().then(res => {
      this.addblog = res;
    })
  }
  delete(value){
    this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Deleted'});
    console.log(value);
    this.service.blogDelete(value).subscribe(res => {
      console.log("Deleted : "+res);
    })
  }
}
