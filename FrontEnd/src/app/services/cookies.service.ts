import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookie: CookieService) { }

  // SetCookie(username:String,email:String,token:String)
  // {
  //   this.RemoveCookies();
  //   this.cookie.set('access-token',token.toString());
  //   this.cookie.set('username',username.toString());
  //   this.cookie.set('email',email.toString());
  // }

  // getTokenByCookie()
  // {
  //   return this.cookie.get('access-token');
  // }

  // getUserNameByCookie()
  // {
  //   return this.cookie.get('username');
  // }
  
  // getEmailByCookie()
  // {
  //   return this.cookie.get('email');
  // }

  // RemoveCookies()
  // {
  //   this.cookie.delete('access-token');
  //   this.cookie.deleteAll();
  // }


  // isLogIn()
  // {
  //   return this.cookie.check('access-token');
  // }




  //LocalStorage Part
  setStorage(username:string,email:string,token:string)
  {
    this.deletAll();
    localStorage.setItem('username',username);
    localStorage.setItem('email',email);
    localStorage.setItem('token',token);
  }

  deletAll()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
  }

}
