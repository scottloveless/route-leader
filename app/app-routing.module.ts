import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }          from '@angular/forms';

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { UsersComponent }      from './users.component';
import { UserDetailComponent } from './user-detail.component';
import { ZonesComponent }      from './zones.component';
import { ZoneDetailComponent } from './zone-detail.component';
import { CreateMissionComponent } from './create-mission.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'patroller/:id', component: UserDetailComponent },
  { path: 'patrollers', component: UsersComponent },
  { path: 'zone/:id', component: ZoneDetailComponent },
  { path: 'zones', component: ZonesComponent },
  { path: 'add-mission/:id', component: CreateMissionComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
