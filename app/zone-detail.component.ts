import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { Zone }        from './zone';
import { ZoneService } from './zone.service';

import { Mission } from './mission';
 
declare let $: any;
declare let svgPanZoom: any;

@Component({
  moduleId:    module.id,
  selector:    'zone-detail',
  templateUrl: '/templates/zone-detail.component.html',
  styleUrls:   [ '../css/zone-detail.component.css' ]
})

export class ZoneDetailComponent implements OnInit {
  panZoomInstance: any;
  zone: Zone;

  activeMissions: Mission[] = [];
  selectedMission: Mission;

  constructor(
    private zoneService: ZoneService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.zoneService.getZone(id)
        .then(zone => this.zone = zone);
    });

    let self = this; // hax

    $('#map').css('cursor', 'wait');

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
          let stopHorizontal = false
            , stopVertical = false
              // Computed variables
            , sizes = this.getSizes()
            , leftLimit = sizes.width - sizes.viewBox.width * sizes.realZoom
            , rightLimit = 0
            , topLimit = sizes.height - sizes.viewBox.height * sizes.realZoom
            , bottomLimit = 0;

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
  onSelect(mission: Mission): void {
      this.selectedMission = mission;
    }

  getCoords(evt): void {
    let sizes = this.panZoomInstance.getSizes();
    let e = evt.target;
    let dim = e.getBoundingClientRect();
    let x = (evt.clientX - dim.left) / sizes.realZoom;
    let y = (evt.clientY - dim.top) / sizes.realZoom;
    console.log("x: " + x + " y:" + y);
    console.log(sizes.realZoom);
  };    

  goBack(): void {
    this.location.back();
  }

  addNew(): void {
    this.router.navigate(['/add-mission', this.zone.id]);
  }

  toggleMission(mission: Mission): void {
    let index = this.activeMissions.indexOf(mission);
      if (index === -1) {         
          this.activeMissions.push(mission);
      } else {
          this.activeMissions.splice(index, 1);
      }
  }

  isActive(mission) {
    return this.activeMissions.includes(mission);
  }
  
}




