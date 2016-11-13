"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var app_bar_component_1 = require('./app-bar.component');
var dashboard_component_1 = require('./dashboard.component');
var users_component_1 = require('./users.component');
var user_detail_component_1 = require('./user-detail.component');
var zones_component_1 = require('./zones.component');
var zone_detail_component_1 = require('./zone-detail.component');
var user_service_1 = require('./user.service');
var zone_service_1 = require('./zone.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'users',
                        component: users_component_1.UsersComponent
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'patroller/:id',
                        component: user_detail_component_1.UserDetailComponent
                    },
                ])
            ],
            declarations: [app_component_1.AppComponent,
                app_bar_component_1.AppBarComponent,
                dashboard_component_1.DashboardComponent,
                users_component_1.UsersComponent,
                user_detail_component_1.UserDetailComponent,
                zones_component_1.ZonesComponent,
                zone_detail_component_1.ZoneDetailComponent],
            providers: [user_service_1.UserService,
                zone_service_1.ZoneService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map