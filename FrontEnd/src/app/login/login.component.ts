import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { CookiesService } from '../services/cookies.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export interface error{
//   404:{
//     message:"username not found!"
//   },
//   401:{
//     message:"UnAuthorized!"
//   }
 
// }
export class LoginComponent implements OnInit {
  mySubscription: any;
  messageError:String;


  loginForm = this.fb.group({
    username:['',Validators.required],
    password: ['',Validators.required]
  });
  constructor(private auth:AuthService,private fb:FormBuilder,private cookies:CookiesService,private router:Router) { }

  ngOnInit(): void {
    const verif = localStorage.getItem('token');
    if(verif)
    {
      this.router.navigate(['dashboard']);
    }
  }

   Login()
  {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
  
    return this.auth.LogIn(username,password).subscribe(

      (success)=>{
        // this.cookies.SetCookie(success.username,success.email,success.token);
        this.cookies.setStorage(success.username,success.email,success.token);
        this.router.navigate(['dashboard']);
      },
      (error)=>{
        this.messageError = error.error.message;
      }
    )
      
  }


}
