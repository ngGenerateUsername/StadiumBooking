import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { StadiumComponent } from './stadium/stadium.component';
import {StadiumService} from '../services/stadium.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StadiumListComponent } from './stadium-list/stadium-list.component';



@NgModule({
  declarations: [DashboardComponent, LeftNavbarComponent, StadiumComponent, StadiumListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[StadiumService]
})
export class DashboardModule { }
