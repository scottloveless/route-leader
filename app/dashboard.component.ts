import { Component, OnInit } from '@angular/core';

import { User }        from './user';
import { UserService } from './user.service';

import { Zone }        from './zone';
import { ZoneService } from './zone.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'templates/dashboard.component.html',
  styleUrls: ['../css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  users: User[] = [];
  zones: Zone[] = [];

  constructor(
    private userService: UserService,
    private zoneService: ZoneService

    ) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users = users);

    this.zoneService.getZones()
      .then(zones => this.zones = zones);
  }
}

