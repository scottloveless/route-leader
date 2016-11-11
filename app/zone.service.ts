import { Injectable } from '@angular/core';

import { Zone}   from './zone';
import { ZONES } from './mock-zones';

@Injectable()

export class ZoneService {

  getZones(): Promise<Zone[]> {
    return Promise.resolve(ZONES);
  }
  
}
