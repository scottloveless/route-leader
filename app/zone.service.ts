import { Injectable } from '@angular/core';

import { Zone}   from './zone';
import { ZONES } from './mock-zones';

@Injectable()

export class ZoneService {

  getZones(): Promise<Zone[]> {
    return Promise.resolve(ZONES);
  }

  getZone(id: number): Promise<Zone> {
  return this.getZones()
             .then(zones => zones.find(zone => zone.id === id));
  }


}
