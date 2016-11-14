import { Component, Input } from '@angular/core';
import { Zone } from './zone';

@Component({
  moduleId: module.id,
  selector: 'zone-detail',
  templateUrl: '/templates/zone-detail.component.html'
})
export class ZoneDetailComponent {
  @Input()
  zone: Zone;

}
