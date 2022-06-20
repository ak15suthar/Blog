import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AuthService,private rut:Router) { }

  ngOnInit(): void {
  }
  get isLoggedIn()
  {
    return this.service.isLoggedIn();
  }
  logout(){
    sessionStorage.removeItem('islogin');
    this.rut.navigate(['/']);
  }
}
