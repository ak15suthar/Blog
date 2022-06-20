import { Component, OnInit } from '@angular/core';
import { BlogService } from '../manage-blogs/blog.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  count:{};
  activecount:{};
  featuredcount:{};
  constructor(private service:BlogService) { }

  ngOnInit(){
    this.service.blogCount().then(res => {
      this.count = res[0].blogcount;
      // console.log("Blogs "+res[0].blogcount)
    })

    this.service.blogCountActive().then(res => {
      this.activecount = res[0].activeblogcount;
      // console.log("Active "+res[0].activeblogcount);
    })

    this.service.blogCountFeatured().then(res => {
      this.featuredcount = res[0].featuredblogcount;
      // console.log("Featured "+res[0].featuredblogcount);

    })
  }

}
