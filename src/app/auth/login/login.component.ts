import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private service:AuthService,private router:Router,private messageService:MessageService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required)
    })
  }
  login(){
    console.log(this.myForm.value);
    if(this.myForm.valid){
      this.service.getLogin(this.myForm.value).subscribe(res => {
        if(res['data'] != ""){
          sessionStorage.setItem("islogin","true");
          console.log(res);
          // const redirect = this.service
          this.router.navigate(['/admin']);
          this.messageService.add({severity:'success', summary: 'Success Message', detail:'Successfully Login into Admin'});
        }
        else{
          console.log('error');
          this.messageService.add({severity:'error', summary: 'Error Message', detail:'Invalid Username or Pasword'});
        }
      })
    }
  }
  
}
