import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { User }        from './user';
import { UserService } from './user.service';


@Component({
  moduleId:    module.id,
  selector:    'user-detail',
  templateUrl: '/templates/user-detail.component.html',
  styleUrls:   [ '../css/user-detail.component.css' ]
})

export class UserDetailComponent implements OnInit {

  user: User;

  users: User[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['z id'];
      this.userService.getUser(id)
        .then(user => this.user = user);
    });
  }

  goBack(): void {
    this.location.back();
  }

}

