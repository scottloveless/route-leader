import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Zone }        from './zone';
import { ZoneService } from './zone.service';

declare let $: any;
declare let svgPanZoom: any;

@Component({
  moduleId:    module.id,
  selector:    'zone-detail',
  templateUrl: '/templates/zone-detail.component.html',
  styleUrls:   [ '../css/zone-detail.component.css' ]
})

export class ZoneDetailComponent implements OnInit {

  zone: Zone;

  constructor(
    private zoneService: ZoneService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.zoneService.getZone(id)
        .then(zone => this.zone = zone);
    });

    $(function() {
      let panZoomInstance = svgPanZoom('#map', {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 1
      });
  
      // zoom out
      panZoomInstance.zoom(1);

    });
  }

  goBack(): void {
    this.location.back();
  }

  getCoords(evt): void {
    var e = evt.target;
    var dim = e.getBoundingClientRect();
    var x = evt.clientX - dim.left;
    var y = evt.clientY - dim.top;
    console.log("x: " + x + " y:" + y);
  }

}

/*
      // Don't use window.onLoad like this in production, because it can only listen to one function.
      window.onload = function() {
        var beforePan

        beforePan = function(oldPan, newPan){
          var stopHorizontal = false
            , stopVertical = false
            , gutterWidth = 100
            , gutterHeight = 100
              // Computed variables
            , sizes = this.getSizes()
            , leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth
            , rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom)
            , topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight
            , bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom)

          customPan = {}
          customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x))
          customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y))

          return customPan
        }

        // Expose to window namespace for testing purposes
        window.panZoom = svgPanZoom('#limit-svg', {
          zoomEnabled: true
        , controlIconsEnabled: true
        , fit: 1
        , center: 1
        , beforePan: beforePan
        });

        // panZoom.setBeforePan(beforePan)
      };
*/
