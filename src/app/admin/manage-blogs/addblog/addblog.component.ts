import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../manage-categories/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  category: {};
  myForm: FormGroup;
  fileToUpload: File = null;
  uploadedFiles = [];
  id = 0;
  uploadBlog: {};
  imagePath:string;
  constructor(private service1: CategoryService, private service2: BlogService, private messageService: MessageService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.routes.snapshot.params.id;

    if (this.id) {
      this.service2.blogGetById(this.id).then(res => {
        this.uploadBlog = res;

        this.myForm = new FormGroup({
          bid : new FormControl(this.uploadBlog[0].bid,Validators.required),
          title: new FormControl(this.uploadBlog[0].title, Validators.required),
          isfeatured: new FormControl(this.uploadBlog[0].isfeatured, Validators.required),
          isactive: new FormControl(this.uploadBlog[0].isactive, Validators.required),
          description: new FormControl(this.uploadBlog[0].description, Validators.required),
          cat_id: new FormControl(this.uploadBlog[0].cat_id, Validators.required),
          date: new FormControl(new Date()),
          image: new FormControl(this.uploadedFiles)
        })
        this.imagePath = this.uploadBlog[0].image;
      })
    }

    this.myForm = new FormGroup({
      title: new FormControl('', Validators.required),
      isfeatured: new FormControl('', Validators.required),
      isactive: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cat_id: new FormControl('', Validators.required),
      date: new FormControl(new Date()),
      image: new FormControl(this.uploadedFiles)
    })

    this.service1.categoryGet().then(res => {
      this.category = res;
    })

  }

  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.fileToUpload = files.item(0);
      this.service2.postFile(files.item(0)).subscribe(i => {
        this.uploadedFiles.push(i["name"]);
      })
    }
  }


  submit() {
    if (this.id) {
      this.service2.blogUpdate(this.myForm.value).subscribe(res => {
        console.log('Updated');
      })
    }
    else {
      // if (this.myForm.valid) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Successfully Added Category' });
        this.service2.blogAdd(this.myForm.value).subscribe(res => {
          console.log(res);
        });
        console.log(this.myForm.value);
      }
    // }
  }
}
