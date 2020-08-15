import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesService } from './services/cookies.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [CookiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
