import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {AuthGuard} from '../services/auth.guard';
import { StadiumComponent } from './stadium/stadium.component';
import { StadiumListComponent } from './stadium-list/stadium-list.component';


const routes: Routes = [{ path: '', component: DashboardComponent,canActivate:[AuthGuard] },
{path: 'stadium', component: StadiumListComponent,canActivate:[AuthGuard] },
{path: 'stadium/create', component: StadiumComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
