import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './app.component';
import { AppBarComponent }     from './app-bar.component';
import { DashboardComponent }  from './dashboard.component';

import { UsersComponent }      from './users.component';
import { UserDetailComponent } from './user-detail.component';

import { ZonesComponent }      from './zones.component';
import { ZoneDetailComponent } from './zone-detail.component';

import { UserService }         from './user.service';
import { ZoneService }         from './zone.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule ],
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
