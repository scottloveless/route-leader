import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { User }                from './user';
import { UserService }         from './user.service';
import { UserDetailComponent } from './user-detail.component';

@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: '/templates/users.component.html',
  styleUrls: [ '../css/users.component.css' ]
})

export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

}


