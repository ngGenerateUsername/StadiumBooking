import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookiesService } from '../services/cookies.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  
})
export class NavBarComponent implements OnInit {
  
 
  isLogged:boolean = false;
 username:String;
 email:String;
 constructor(private cookies:CookiesService, private router:Router){
    
 }
 
 ngOnInit(): void {
//event kol ma ysir routing (bech nbaddel biha navbar)
this.router.events.subscribe((event)=>{
  if(event instanceof NavigationStart)
  {
  
      if(localStorage.getItem('token'))
    {
      this.isLogged = true;
      this.username = localStorage.getItem('username');
      this.email = localStorage.getItem('email');
    }
    else{
      this.isLogged = false;
      this.username = null;
      this.email = null;
    }
  }
});
  
  }
 
  logout()
  {
    this.cookies.deletAll();
    this.router.navigate(['login']);
  }


 
}
