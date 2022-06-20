import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../admin/manage-blogs/blog.service';
import { BlogspotService } from 'src/app/blogspot/blogspot.service';

@Component({
  selector: 'app-activepage',
  templateUrl: './activepage.component.html',
  styleUrls: ['./activepage.component.css']
})
export class ActivepageComponent implements OnInit {
  blog={};
  constructor(private service:BlogService) { }

  async ngOnInit(){
    await this.service.blogGetActive().then(res => {
      this.blog = res;
      console.log(res+"Aryan");
    })
  }

}
