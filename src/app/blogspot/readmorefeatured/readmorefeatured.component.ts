import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/admin/manage-blogs/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readmorefeatured',
  templateUrl: './readmorefeatured.component.html',
  styleUrls: ['./readmorefeatured.component.css']
})
export class ReadmorefeaturedComponent implements OnInit {
  id = 0;
  list : {};
  constructor(private service:BlogService,private routes:ActivatedRoute) { }

  async ngOnInit(){
    this.id = this.routes.snapshot.params.id;
    await this.service.blogGetById(this.id).then(res => {
      this.list = res;
    })
  }

}
