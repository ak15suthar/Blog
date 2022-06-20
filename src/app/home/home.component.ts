import { Component, OnInit } from '@angular/core';
import { BlogService } from '../admin/manage-blogs/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blog:{};
  Difference_In_Time;
  Difference_In_Days;
  bid = 0;
  constructor(private service:BlogService) { }

  ngOnInit() {
    var dat = new Date();

    this.service.blogGetFeatured().then(res => {
      this.blog = res;
      // console.log("Bol "+res);
      // console.log("D "+res[0].date);
      for(var i = 0; i < res.length; i++){
        var dt = new Date(res[i].date);
        this.Difference_In_Time = dat.getTime() - dt.getTime();
        this.Difference_In_Days = Math.round(this.Difference_In_Time / (1000 * 3600 *24));

        if(this.Difference_In_Days > 1){
          this.service.featuredUpdate(res[i].bid).subscribe(res => {
            console.log("Delete "+res);
          })
          this.ngOnInit();
        }
      }
    })
  }

}
