import { Component, Input } from '@angular/core';
import { OnInit }           from '@angular/core';

import { Zone }                from './zone';
import { ZoneService }         from './zone.service';
import { ZoneDetailComponent } from './zone-detail.component';

@Component({
  selector: 'zones',
  templateUrl: '/templates/zones.component.html',
  styleUrls: [ '../css/zones.component.css' ]
})

export class ZonesComponent implements OnInit {

  zones: Zone[];

  constructor(private zoneService: ZoneService) { }

  selectedZone: Zone;

  onSelect(zone: Zone): void {
    this.selectedZone = zone;
  }

  getZones(): void {
    this.zoneService.getZones().then(zones => this.zones = zones);
  }

    ngOnInit(): void {
      this.getZones();
    }

}


