import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }        from './app.component';
import { AppBarComponent }     from './app-bar.component';
import { DashboardComponent }  from './dashboard.component';

import { UsersComponent }      from './users.component';
import { UserDetailComponent } from './user-detail.component';

import { ZonesComponent }      from './zones.component';
import { ZoneDetailComponent } from './zone-detail.component';

import { UserService }         from './user.service';
import { ZoneService }         from './zone.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                      {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                      },
                      {
                        path: 'users',
                        component: UsersComponent
                      },
                      {
                        path: 'dashboard',
                        component: DashboardComponent
                      },
                      {
                        path: 'patroller/:id',
                        component: UserDetailComponent
                      },
                    ])
                  ],
  declarations: [ AppComponent,
                  AppBarComponent,
                  DashboardComponent,
                  UsersComponent,
                  UserDetailComponent,
                  ZonesComponent,
                  ZoneDetailComponent ],
  providers:    [ UserService,
                  ZoneService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
