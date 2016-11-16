import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Zone }        from './zone';
import { ZoneService } from './zone.service';

import { Mission } from './mission';

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
  newMission: Mission = {
    id: 123,
    date: "date",
    patrollers: ["Scott"],
    elements: ["stuff"],
  };

  constructor(
    private zoneService: ZoneService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

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

  addShot(evt): void {
    let sizes = this.panZoomInstance.getSizes();
    let e = evt.target;
    let dim = e.getBoundingClientRect();
    let x = (evt.clientX - dim.left) / sizes.realZoom;
    let y = (evt.clientY - dim.top) / sizes.realZoom;
    let newGroup = document.getElementById('missions'); 
    let newElement: any = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    newElement.setAttribute("cx", x);
    newElement.setAttribute("cy", y);
    newElement.setAttribute("r", "15");
    newElement.style.stroke = "none";
    newElement.style.fill = "red";
    newGroup.appendChild(newElement);
  };

  goBack(): void {
    this.location.back();
  }

}
