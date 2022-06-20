import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogspotService {

  constructor(private http:HttpClient) { }

  blogGetActive():Promise<any>{
    return this.http.get(`${environment.base_URL}getBlogActive`).toPromise();
  }
}
