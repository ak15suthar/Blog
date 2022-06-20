import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  blogAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addBlog`,model);
  }

  blogGet():Promise<any>{
    return this.http.get(`${environment.base_URL}getBlog`).toPromise();
  }
  
  blogGetById(id:number):Promise<any>{
    return this.http.get(`${environment.base_URL}getBlogById/${id}`).toPromise();
  }

  blogUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateBlog`,model);
  } 

  blogDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteBlog/${id}`);
  }

  blogGetFeatured():Promise<any>{
    return this.http.get(`${environment.base_URL}getBlogFeatured`).toPromise();
  }

  blogGetActive():Promise<any>{
    return this.http.get(`${environment.base_URL}getBlogActive`).toPromise();
  }

  postFile(fileToUpload:File):Observable<any>{
    const endpoint = environment.base_URL + 'upload';
    const formData : FormData=new FormData();
    formData.append('image',fileToUpload,fileToUpload.name);
    return this.http.post(endpoint,formData).pipe(map(i => {return i}));
  }

  blogCount():Promise<any>{
    return this.http.get(`${environment.base_URL}countBlogs`).toPromise();
  }

  blogCountActive():Promise<any>{
    return this.http.get(`${environment.base_URL}countActive`).toPromise();
  }

  blogCountFeatured():Promise<any>{
    return this.http.get(`${environment.base_URL}countFeatured`).toPromise();
  }

  featuredUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateFeatured`,model);
  }
}
