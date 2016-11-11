import { Component, Input } from '@angular/core';

import { User }                from './user';

@Component({
  selector:    'user-detail',
  templateUrl: '/templates/user-detail.component.html',
  styleUrls:   [ '../css/user-detail.component.css' ]
})

export class UserDetailComponent {

  @Input()
  user: User;

}
