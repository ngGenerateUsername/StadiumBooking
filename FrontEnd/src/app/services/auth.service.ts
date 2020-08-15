import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import { CookiesService } from './cookies.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url ="http://localhost:3000/user";

  constructor(private http:HttpClient) { }


  LogIn(username:String,password:String)
  {
    return  this.http.post<User>(`${this.url}/login`,{username:username,password:password});
  }

}
