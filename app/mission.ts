import { User } from './user';

export class Mission {
  id: number;
  date: string;
  patrollers: [string]; // User.id???
  elements: [string];
}

