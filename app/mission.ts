import { User } from './user';
import { Element } from './element';

export class Mission {
  date: string;
  patrollerIds: string[];
  elements: Element[];
  notes: string;
}

