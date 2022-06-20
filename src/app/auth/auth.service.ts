import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  redirectUrl:string;
  
  getLogin(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}getAdmin`,model);
  }

  isLoggedIn(){
    if(sessionStorage.getItem('islogin')){
      return true;
    }
    return false;
  }
}
