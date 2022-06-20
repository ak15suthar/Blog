import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../manage-categories/category.service';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  constructor(private service:CategoryService) { }

  ngOnInit() {
  }

}
