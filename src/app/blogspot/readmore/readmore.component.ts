import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/admin/manage-blogs/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {
  id = 0;
  list:{};
  constructor(private service:BlogService,private route:ActivatedRoute) { }

  async ngOnInit() {

    this.id = this.route.snapshot.params.id;

    await this.service.blogGetById(this.id).then(res => {
      this.list = res;
    })
  }

}
