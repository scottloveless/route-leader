import { Component, Input, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Zone }        from './zone';
import { ZoneService } from './zone.service';

import { Mission } from './mission';
import { User } from './user';
import { UserService } from './user.service';
import { USERS } from './mock-users';

import { Element } from './element';


declare let $: any;
declare let svgPanZoom: any;

@Component({
  moduleId:    module.id,
  selector:    'create-mission',
  templateUrl: '/templates/create-mission.component.html',
  styleUrls:   [ '../css/create-mission.component.css' ]
})

export class CreateMissionComponent implements OnInit {
  panZoomInstance: any;
  zone: Zone;
  patrollers = USERS;
  newMission: Mission = {
    date: "",
    patrollerIds: [],
    elements: [],
    notes: ""
  };

  constructor(
    private zoneService: ZoneService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  @Input()
  mission: Mission;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.zoneService.getZone(id)
        .then(zone => this.zone = zone);
    });

    let self = this; // hax

    $(function() {
      self.panZoomInstance = svgPanZoom('#zone-map', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: false,
        contain: true,
        center: true,
        minZoom: 1,
        maxZoom: 20,
        beforePan: function(oldPan, newPan){
          let stopHorizontal = false,
              stopVertical = false,
              // Computed variables
              sizes = this.getSizes(),
              leftLimit = sizes.width - sizes.viewBox.width * sizes.realZoom,
              rightLimit = 0,
              topLimit = sizes.height - sizes.viewBox.height * sizes.realZoom,
              bottomLimit = 0;
          let customPan: any = {};
          customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x));
          customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y));
          // console.log(sizes.realZoom);
          return customPan;
        }
      });
  
      // zoom out
      self.panZoomInstance.zoom(1);

    });

  }

  addPatroller(): void {
    console.log("added!");
  }

  addShot(evt): void {
    let sizes = this.panZoomInstance.getSizes();
    let e = evt.target;
    let dim = e.getBoundingClientRect();
    let x = (evt.clientX - dim.left) / sizes.realZoom;
    let y = (evt.clientY - dim.top) / sizes.realZoom;

    let newElement: Element = new Element();
      newElement.patrollerId = "3";
      newElement.x = x;
      newElement.y = y;

    this.newMission.elements.push(newElement);
    console.log(this.newMission);
  };

  saveMission(): void {
    this.zone.missions.push(this.newMission);
    console.log(this.zone);

  }

  goBack(): void {
    this.location.back();
  }

}
