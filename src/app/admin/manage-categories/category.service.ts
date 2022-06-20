import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  categoryAdd(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addCategory`,model);
  }

  categoryGet():Promise<any> {
    return this.http.get(`${environment.base_URL}getCategory`).toPromise();
  }

  categoryGetById(id:number):Promise<any>{
    return this.http.get(`${environment.base_URL}getCategoryById/${id}`).toPromise();
  }

  categoryUpdate(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updateCategory`,model);
  }

  categoryDelete(id:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deleteCategory/${id}`);
  }
}
