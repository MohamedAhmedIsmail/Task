(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/Awqaf-dashboard/src/main.ts */"zUnb");


/***/ }),

/***/ "14Bz":
/*!*********************************************************!*\
  !*** ./src/app/Services/Shared/can-activate.service.ts ***!
  \*********************************************************/
/*! exports provided: CanActivateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateService", function() { return CanActivateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.service */ "ogXs");



let CanActivateService = class CanActivateService {
    constructor(shared) {
        this.shared = shared;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let path = route.routeConfig.path;
            let check = yield this.shared.checkIfUserCanAuthenticate(path);
            return check;
        });
    }
};
CanActivateService.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
CanActivateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
], CanActivateService);



/***/ }),

/***/ "2hxB":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User, UserAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAdapter", function() { return UserAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class User {
    constructor(id, name, type, assigned) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.assigned = assigned;
    }
}
let UserAdapter = class UserAdapter {
    adapt(item) {
        return new User(item.user.id, item.user.name, item.type, item.assigned);
    }
};
UserAdapter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UserAdapter);



/***/ }),

/***/ "3wAj":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat/chat.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"green-background\"></div>\n<div class=\"wrap\">\n    <section class=\"left\">\n        <div class=\"profile\">\n            <a routerLink='/dashboard' class=\"back\">\n                <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back To Dashboard\n            </a>\n        </div>\n        <div class=\"wrap-search\">\n            <div class=\"search\">\n                <i class=\"fa fa-search fa\" aria-hidden=\"true\"></i>\n                <input type=\"text\" class=\"input-search\" placeholder=\"Search\">\n            </div>\n        </div>\n        <div class=\"contact-list\">\n            <!--  -->\n            <div id=\"ContactLoader\">\n                <div class=\"spinner-border\" role=\"status\">\n                    <span class=\"sr-only\" id=\"loading\"></span>\n                </div>\n            </div>\n            <!--  -->\n            <div (click)=\"getItem(user)\" class=\"person contact\" *ngFor=\"let user of data\" data-chat=\"person1\">\n                <img src=\"assets/img/chathead.png\" alt=\"profilpicture\">\n                <div class=\"contact-preview\">\n                    <div class=\"contact-text\">\n                        <h1 class=\"font-name\">{{user.name}}</h1>\n                    </div>\n                </div>\n                <div class=\"contact-time\">\n                    <p>17:54</p>\n                    <button class=\"clk\" (click)=\"end(user)\">End</button>\n                </div>\n            </div>\n            <!--  -->\n            <div (click)=\"getItem(user)\" class=\"contact user\" *ngFor=\"let user of update\" data-chat=\"person1\">\n                <img src=\"assets/img/chathead.png\" alt=\"profilpicture\">\n                <div class=\"contact-preview\">\n                    <div class=\"contact-text\">\n                        <h1 class=\"font-name\">{{user.name}}</h1>\n                    </div>\n                </div>\n                <div class=\"contact-time\">\n                    <p>17:54</p>\n                    <button class=\"clkStart\" (click)=\"start(user)\">Start</button>\n                </div>\n            </div>\n            <!--  -->\n        </div>\n    </section>\n\n    <section class=\"right\">\n        <div class=\"chat-head\">\n            <img alt=\"profilepicture\" src=\"assets/img/chathead.png\">\n            <div class=\"chat-name\">\n                <h1 class=\"font-name\">{{userData.name}}</h1>\n                <i class=\"fa fa-circle\" aria-hidden=\"true\" style=\"color: #28a745; text-align: left;  font-size: 0.5rem;\"></i>\n                <span class=\"font-online\" style=\"position: relative;  right: 7%;\">\n                     online\n                </span>\n            </div>\n        </div>\n        <!--  -->\n        <div id=\"loadChat\" style=\"display: none;\">\n            <div class=\"spinner-border\" role=\"status\">\n                <span class=\"sr-only\" id=\"loading\"></span>\n            </div>\n        </div>\n        <!--  -->\n        <div class=\"wrap-chat\">\n            <div class=\"chat\">\n                <div class=\"chat-bubble\" [ngClass]=\"{ 'chat-left' : log.type == 0,'chat-right' : log.type == 1}\" *ngFor=\"let log of logs\">\n                    <div class=\"your-mouth\"></div>\n                    <h4 *ngIf='log.type == 0' style=\"color: #085373; font-weight: bold;  font-size: 1rem;\">Bot</h4>\n                    <h4 *ngIf='log.type == 1' style=\"color: #2ba9cd; font-weight: bold; font-size: 1rem;\">{{userData.name}}</h4>\n                    <div class=\"content\">\n                        <div *ngIf='log.type == 0' class=\"chat-text\">{{log.text}}</div>\n                        <div *ngIf='log.type == 0' class=\"chat-hour\">{{log.created_at}}</div>\n                        <div *ngIf='log.type == 1' class=\"chat-hour\">{{log.created_at}}</div>\n                        <div *ngIf='log.type == 1 && !log.isFile' class=\"chat-text\">{{log.text}}</div>\n                        <div *ngIf='log.type == 1 && log.isFile' class=\"chat-file\"><a href=\"http://shjpolice.mworld.ae/Sharjah-Police/storage/app/public/uploads/{{log.text}}\" target=\"_blank\"> click to show the file</a></div>\n\n                    </div>\n                    <div class=\"time\">17:40</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"wrap-message\">\n            <div class=\"message\">\n                <input value=\"{{message}}\" (keydown.enter)=\"sendMessage(userData.id)\" id=\"message\" [(ngModel)]=\"message\" name=\"message\" type=\"text\" class=\"input-message\" placeholder=\"Type your message here...\">\n            </div>\n            <button type=\"button\" (click)=\"sendMessage(userData.id)\" class=\"btn send\">\n        <i class=\"fa fa-paper-plane fa-lg\" aria-hidden=\"true\" style=\"color: #fff;\"></i>\n      </button>\n\n        </div>\n    </section>\n</div>");

/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "zvoc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/Services/Shared/shared.service */ "ogXs");





const ROUTES = [
    { path: '/home', title: 'Home', icon: 'nc-spaceship', type: '0', type2: null, type3: '0' },
    { path: '/answers', title: 'Answers', icon: 'nc-spaceship', type: '0', type2: null, type3: '0' },
    { path: '/users', title: 'Users', icon: 'nc-spaceship', type: '0', type2: null, type3: '0' },
    // { path: '/service',       title: 'Service Inquiry',              icon:'nc-spaceship',  type: '0',type2:null,type3:'4'},
    // { path: '/buisness',        title: 'Buisness Inquiry',              icon:'nc-spaceship',  type: '0',type2:null,type3:'4'},
    // { path: '/suggestions',   title: 'Suggestion',        icon:'nc-spaceship',  type: '0',type2:null,type3:'4'},
    // { path: '/rating',        title: 'Rating',              icon:'nc-spaceship',  type: '0',type2:null,type3:'4'},
    // { path: '/answer-report',        title: 'Answer Report',              icon:'nc-spaceship',  type: '2',type2:null,type3:'4'},
    { path: '/agent-report', title: 'Agent Report', icon: 'nc-spaceship', type: '2', type2: '3', type3: '0' },
    { path: '/chat', title: 'Chat', icon: 'nc-spaceship', type: '1', type2: '3', type3: '4' }
];
let SidebarComponent = class SidebarComponent {
    constructor(router, shared) {
        this.router = router;
        this.shared = shared;
    }
    ngOnInit() {
        this.shared.getAgent().then((data) => {
            console.log(data);
            this.menuItems = ROUTES.filter((menuItem) => {
                if (data == menuItem.type || data == menuItem.type2 || data == menuItem.type3) {
                    return menuItem;
                }
            });
        });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
], SidebarComponent);



/***/ }),

/***/ "550G":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "5My1":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedPluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function() { return FixedPluginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fixedplugin.component */ "Pqk8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






let FixedPluginModule = class FixedPluginModule {
};
FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })
], FixedPluginModule);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "CpO+":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.component */ "EtQq");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






let NavbarModule = class NavbarModule {
};
NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })
], NavbarModule);



/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "pG9d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/compiler/src/util */ "Yoyx");
/* harmony import */ var _angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Services/Shared/shared.service */ "ogXs");








const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let LoginComponent = class LoginComponent {
    constructor(http, router, shared) {
        this.http = http;
        this.router = router;
        this.shared = shared;
        this.username = '';
        this.password = '';
        this.api = shared.api;
        this.url = `${this.api}/api/auth/login`;
        this.profile = `${this.api}/api/auth/profile`;
    }
    ngOnInit() {
    }
    login() {
        this.body =
            {
                'username': this.username,
                'password': this.password
            };
        this.http.post(this.url, this.body, httpOptions).subscribe((res) => {
            localStorage.setItem('token', res['access_token']);
            let setIntervalLogin = setInterval(function () {
                if (localStorage.getItem('token') != 'null') {
                    let url = Object(_angular_compiler_src_util__WEBPACK_IMPORTED_MODULE_4__["stringify"])(window.location);
                    url = url.replace('login', 'dashboard');
                    window.location.replace(url);
                    console.log(localStorage.getItem('token'));
                    clearInterval(setIntervalLogin);
                }
            }, 200);
        }, (error) => {
            let errorElem = document.getElementById('error');
            errorElem.innerHTML = 'The Email or Password is not correct';
            errorElem.style.display = 'block';
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
], LoginComponent);



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







let NavbarComponent = class NavbarComponent {
    constructor(document, location, renderer, element, router) {
        this.document = document;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
        });
    }
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel = document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = '';
            }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }
    ;
    collapse() {
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
        }
        else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
        }
    }
    logout() {
        // let url = window.location.href;
        // let index = url.indexOf('dist');
        // url = url.slice(0,index);
        // window.location.replace(url);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent.propDecorators = {
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["navbar-cmp", { static: false },] }]
};
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Document, _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "GPNb":
/*!*************************************************!*\
  !*** ./node_modules/@angular/compiler/src sync ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "GPNb";

/***/ }),

/***/ "Gl/P":
/*!***************************************************************!*\
  !*** ./src/app/Services/Shared/can-activate-token.service.ts ***!
  \***************************************************************/
/*! exports provided: CanActivateTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateTokenService", function() { return CanActivateTokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CanActivateTokenService = class CanActivateTokenService {
    constructor() { }
    canActivate(route, state) {
        if (localStorage.getItem('token') != 'null') {
            return true;
        }
        else {
            return false;
        }
    }
};
CanActivateTokenService.ctorParameters = () => [];
CanActivateTokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CanActivateTokenService);



/***/ }),

/***/ "GodB":
/*!****************************************!*\
  !*** ./src/app/interfaces/services.ts ***!
  \****************************************/
/*! exports provided: ServiceGeneral */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceGeneral", function() { return ServiceGeneral; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class ServiceGeneral {
    constructor(http) {
        this.http = http;
        this.index = 1;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            })
        };
    }
    getData(adapter) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(`${this.url}?page=${this.index}`, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.total = data.last_page;
            return data.data.map((item) => {
                return adapter.adapt(item);
            });
        }));
    }
    showItem(adapter, id) {
        return this.http.get(`${this.url}/${id}`, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data.map((item) => adapter.adapt(item))));
    }
    getItem(adapter, id) {
        return this.http.get(`${this.url}/${id}`, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.data.map((item) => adapter.adapt(item))));
    }
    getHeaders() {
        return this.headers;
    }
    deleteData(id) {
        return this.http.delete(`${this.url}/${id}`, this.httpOptions);
    }
    updateData(data) {
        return this.http.post(`${this.url}/${data.id}`, data, this.httpOptions);
    }
    showData(data) {
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](data);
        this.sharedMessage = this.message.asObservable();
    }
    saveData(data) {
        return this.http.post(this.url, data, this.httpOptions);
    }
    showAll(adapter) {
        return this.http.get(`${this.all}`, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            this.total = data.last_page;
            return data.data.map((item) => {
                return adapter.adapt(item);
            });
        }));
    }
}


/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AdminLayoutComponent);



/***/ }),

/***/ "Pqk8":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedPluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function() { return FixedPluginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fixedplugin.component.html */ "550G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FixedPluginComponent = class FixedPluginComponent {
    constructor() {
        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
    }
    changeSidebarColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
        }
    }
    changeSidebarActiveColor(color) {
        var sidebar = document.querySelector('.sidebar');
        this.sidebarActiveColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
        }
    }
    ngOnInit() { }
};
FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], FixedPluginComponent);



/***/ }),

/***/ "Qkad":
/*!**********************************************!*\
  !*** ./src/app/Services/logs/log.service.ts ***!
  \**********************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_interfaces_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/interfaces/services */ "GodB");
/* harmony import */ var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/shared.service */ "ogXs");





let LogService = class LogService extends app_interfaces_services__WEBPACK_IMPORTED_MODULE_3__["ServiceGeneral"] {
    constructor(http, shared) {
        super(http);
        this.http = http;
        this.shared = shared;
        this.api = shared.api;
        this.url = `${this.api}/api/logs`;
    }
};
LogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _Shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
LogService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
], LogService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        if (localStorage.getItem('token') == null) {
            router.navigate(['/login']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WSoB":
/*!**********************************************!*\
  !*** ./src/app/pages/chat/chat.component.ts ***!
  \**********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "3wAj");
/* harmony import */ var _chat_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component.css */ "gVJk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_models_logs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/models/logs */ "WnUU");
/* harmony import */ var app_models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/models/user */ "2hxB");
/* harmony import */ var app_Services_agent_agent_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/Services/agent/agent.service */ "z86Y");
/* harmony import */ var app_Services_logs_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/Services/logs/log.service */ "Qkad");
/* harmony import */ var app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/Services/Shared/shared.service */ "ogXs");










const io = __webpack_require__(/*! socket.io-client */ "jifJ");
let ChatComponent = class ChatComponent {
    constructor(agentService, adapter, logService, adapter2, router, shared) {
        this.agentService = agentService;
        this.adapter = adapter;
        this.logService = logService;
        this.adapter2 = adapter2;
        this.router = router;
        this.shared = shared;
        // public host = "localhost"
        this.data = [];
        this.update = [];
        this.userData = new app_models_user__WEBPACK_IMPORTED_MODULE_6__["User"](0, '', 0, false);
        this.message = '';
        this.getMessages = () => {
            this.socket.on('message', (message) => {
                console.log(message.user_id, this.userData.id);
                if (message.user_id == this.userData.id) {
                    console.log(message);
                    this.logs.push(new app_models_logs__WEBPACK_IMPORTED_MODULE_5__["Log"](message.message, 1, 'asvdsv', message.isFile));
                    console.log(this.logs);
                }
            });
        };
        this.updateUsers = () => {
            this.socket.on('update', (user) => {
                console.log('tttt', user.flag, user);
                if (this.agentType == user.flag) {
                    console.log('tttt', user.flag);
                    this.update.push(new app_models_user__WEBPACK_IMPORTED_MODULE_6__["User"](user.id, user.name, user.flag, false));
                }
            });
        };
        this.api = shared.api;
        this.host = shared.host;
        this.socket = io(`${this.shared.hostForChat}:3000`, { withCredentials: true });
        this.agentService.index = 1;
        this.shared.getId().then((data) => {
            this.agentType = data;
            this.agent = data;
        });
        this.agentService.getData(this.adapter).subscribe((data) => {
            console.log(data);
            if (data) {
                hideloader();
            }
            this.data = data;
            console.log(this.data);
            if (this.data.length != 0) {
                this.userData = data[0];
                this.getItem(this.userData);
            }
            // Function is defined
            function hideloader() {
                // Setting display of spinner
                // element to none
                document.getElementById('ContactLoader')
                    .style.display = 'none';
            }
        });
        this.agentService.getUpdate(this.adapter).subscribe((data) => {
            this.update = data;
        });
    }
    ngOnInit() {
        this.getMessages();
        this.updateUsers();
        this.assigned();
    }
    ngAfterViewChecked() {
        let scrollDiv = document.getElementsByClassName('chat')[0];
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
    getItem(user) {
        this.userData = user;
        this.logService.showItem(this.adapter2, user.id).subscribe((data) => {
            this.logs = data;
        });
    }
    assigned() {
        this.socket.on('assign', (data) => {
            this.update = this.update.filter((user) => {
                console.log(user.id, data.agent, this.agent, data.user.id);
                if (user.id == data.user.id && data.agent == this.agent) {
                    this.data.push(user);
                    this.userData = user;
                    this.getItem(this.userData);
                    return false;
                }
                else if (user.id == data.user.id && data.agent != this.agent) {
                    return false;
                }
                else {
                    return true;
                }
            });
        });
    }
    start(user) {
        document.getElementById('loadChat')
            .style.display = 'block';
        let data = { 'user': user };
        this.agentService.start(data).subscribe((data) => {
            if (data) {
                hideloader();
            }
        });
        // Function is defined
        function hideloader() {
            // Setting display of spinner
            // element to none
            document.getElementById('loadChat')
                .style.display = 'none';
        }
    }
    end(user) {
        let data = { 'user': user };
        this.agentService.end(data).subscribe((data) => {
            if (data == 'success') {
                this.data = this.data.filter((dataUser) => {
                    if (user.id == dataUser.id) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
            }
        }, (error) => { console.log(error); }, () => {
            if (this.data.length != 0) {
                this.getItem(this.data[0]);
            }
            else {
                this.userData = new app_models_user__WEBPACK_IMPORTED_MODULE_6__["User"](0, '', 0, false);
                this.logs = [];
            }
        });
    }
    sendMessage(id) {
        document.getElementById('loadChat')
            .style.display = 'block';
        this.body = {
            'user_id': id,
            'answer_id': this.message,
            'type': 0
        };
        this.agentService.sendMessage(this.body).subscribe((data) => {
            if (data) {
                hideloader();
            }
            this.logs.push(new app_models_logs__WEBPACK_IMPORTED_MODULE_5__["Log"](this.message, 0, data.created_at, data.isFile));
            this.message = '';
        });
        // Function is defined
        function hideloader() {
            // Setting display of spinner
            // element to none
            document.getElementById('loadChat')
                .style.display = 'none';
        }
    }
};
ChatComponent.ctorParameters = () => [
    { type: app_Services_agent_agent_service__WEBPACK_IMPORTED_MODULE_7__["AgentService"] },
    { type: app_models_user__WEBPACK_IMPORTED_MODULE_6__["UserAdapter"] },
    { type: app_Services_logs_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"] },
    { type: app_models_logs__WEBPACK_IMPORTED_MODULE_5__["LogAdapter"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] }
];
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_Services_agent_agent_service__WEBPACK_IMPORTED_MODULE_7__["AgentService"], app_models_user__WEBPACK_IMPORTED_MODULE_6__["UserAdapter"], app_Services_logs_log_service__WEBPACK_IMPORTED_MODULE_8__["LogService"], app_models_logs__WEBPACK_IMPORTED_MODULE_5__["LogAdapter"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_Services_Shared_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
], ChatComponent);



/***/ }),

/***/ "WnUU":
/*!********************************!*\
  !*** ./src/app/models/logs.ts ***!
  \********************************/
/*! exports provided: Log, LogAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogAdapter", function() { return LogAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Log {
    constructor(text, type, date, isFile) {
        this.text = text;
        this.type = type;
        this.date = date;
        this.isFile = isFile;
    }
}
let LogAdapter = class LogAdapter {
    adapt(item) {
        return new Log(item.text, item.type, item.created_at, item.isFile);
    }
};
LogAdapter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LogAdapter);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.module */ "cNqA");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "CpO+");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "5My1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/chat/chat.component */ "WSoB");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");

















// const config: SocketIoConfig = { url: 'http://localhost:3000', options: { transports:['websocket']} };
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"],
            _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_13__["ChatComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_11__["AppRoutes"], {
                useHash: true
            }),
            _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
            _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
            _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_9__["FixedPluginModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            // SocketIoModule.forRoot(config),
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/chat/chat.component */ "WSoB");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _Services_Shared_can_activate_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/Shared/can-activate-token.service */ "Gl/P");
/* harmony import */ var _Services_Shared_can_activate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/Shared/can-activate.service */ "14Bz");





const AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_Services_Shared_can_activate_token_service__WEBPACK_IMPORTED_MODULE_3__["CanActivateTokenService"]]
    },
    {
        path: 'chat',
        component: _pages_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"],
        canActivate: [_Services_Shared_can_activate_service__WEBPACK_IMPORTED_MODULE_4__["CanActivateService"]]
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];


/***/ }),

/***/ "cNqA":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.component */ "jQpT");





let FooterModule = class FooterModule {
};
FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })
], FooterModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "gVJk":
/*!***********************************************!*\
  !*** ./src/app/pages/chat/chat.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background: #dbdbdb;\n}\n\ni {\n    width: 60px;\n    margin: auto;\n}\n\n@font-face {\n    font-family: 'DroidNaskh';\n    src: url('DroidNaskh-Regular.ttf');\n}\n\n/* ------ FONTS ------ */\n\n.font-name {\n    color: #000000;\n    font-size: 1em;\n    font-weight: inherit;\n    margin: 0;\n}\n\n.font-preview {\n    color: #444444;\n    font-size: 0.9em;\n    font-weight: inherit;\n}\n\n.font-online {\n    color: #777777;\n    font-size: 0.8em;\n    font-weight: inherit;\n}\n\n.back {\n    color: #398b3f;\n    padding-top: 1.5rem;\n    font-size: 1rem;\n}\n\n.back i {\n    text-align: center;\n}\n\n.btn.send {\n    background-color: #398b3f;\n    border-color: #398b3f;\n}\n\n.green-background {\n    background: #bcf3cc;\n    height: 130px;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    z-index: -100;\n}\n\n.wrap {\n    display: flex;\n    height: 100vh;\n    min-width: 600px;\n    max-width: 1200px;\n    margin: auto;\n    box-shadow: 0 2px 2px #aaaaaa;\n}\n\n/* ------ LEFT SIDE ------ */\n\n.left {\n    width: 400px;\n}\n\n.profile {\n    width: 100%;\n    height: 60px;\n    background: #eeeeee;\n    border-right: 1px solid #dbdbdb;\n    display: flex;\n    justify-content: space-between;\n}\n\n.profile img {\n    width: 40px;\n    height: 40px;\n    margin: 10px;\n    border-radius: 50%;\n}\n\n.icons {\n    color: #777777;\n    display: flex;\n}\n\n.wrap-search {\n    width: 100%;\n    height: 45px;\n    background: #fbfbfb;\n    display: flex;\n}\n\n.search {\n    width: calc(100% - 20px);\n    height: 30px;\n    background: #ffffff;\n    margin: auto;\n    border: 1px solid #eeeeee;\n    border-radius: 5px;\n    display: flex;\n}\n\n.search i {\n    widht: 60px;\n}\n\n.search i,\n.wrap-message i {\n    color: #aaaaaa;\n    text-align: center;\n}\n\n.input-search {\n    width: 100%;\n    border: none;\n}\n\n.input-search:focus {\n    outline: none;\n}\n\n.contact-list {\n    background-color: #ffffff;\n    width: 100%;\n    height: calc(100% - 105px);\n    overflow-y: auto;\n}\n\n.contact,\n.active-contact,\n.new-message-contact {\n    height: 70px;\n    background-color: #ffffff;\n    display: flex;\n}\n\n.contact img,\n.active-contact img,\n.new-message-contact img {\n    width: 50px;\n    height: 50px;\n    margin: 10px;\n    border-radius: 50%;\n}\n\n.active-contact {\n    background-color: #ebebeb;\n}\n\n.contact:hover,\n.new-message-contact:hover {\n    background-color: #f5f5f5;\n}\n\n.new-message-contact {\n    font-weight: bold;\n}\n\n.contact-preview {\n    width: 100%;\n    height: 70px;\n    border-bottom: 1px solid #eeeeee;\n    display: flex;\n    overflow: hidden;\n}\n\n.contact-text {\n    height: 40px;\n    margin: auto 0;\n    overflow: hidden;\n}\n\n.contact-time {\n    width: 55px;\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 0.8em;\n    display: inline-block;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n    border-bottom: 1px solid #eeeeee;\n}\n\n.new-message {\n    background: #09d261;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    display: flex;\n    margin: auto;\n    flex-direction: column;\n    color: white;\n}\n\n.new-message p {\n    margin: auto;\n}\n\n/* ------ RIGHT SIDE ------ */\n\n.right {\n    min-width: calc(100% - 400px);\n}\n\n.chat-head {\n    background-color: #eeeeee;\n    width: 100%;\n    height: 60px;\n    display: flex;\n}\n\n.chat-head img {\n    width: 40px;\n    height: 40px;\n    margin: 10px;\n    border-radius: 50%;\n}\n\n.chat-head i {\n    color: #aaaaaa;\n    width: 60px;\n    margin: auto;\n    text-align: center;\n}\n\n#close-contact-information {\n    display: none;\n}\n\n.chat-name {\n    width: 100%;\n    margin: auto;\n}\n\n.wrap-chat {\n    height: calc(100% - 120px);\n    display: flex;\n}\n\n.chat {\n    background-color: #e5ddd5;\n    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1089577/background.png);\n    width: 100%;\n    padding: 0px 10%;\n    padding-top: 7px;\n    overflow-y: auto;\n}\n\n.information {\n    width: 100%;\n    position: relative;\n    background: #f7f7f7;\n    display: none;\n    flex-direction: column;\n    overflow: auto;\n}\n\n.information div {\n    background: #ffffff;\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\n.information img {\n    width: 200px;\n    height: 200px;\n    margin: 20px auto;\n    border-radius: 50%;\n    float: left;\n}\n\n.information h1 {\n    color: #009688;\n    font-size: 14px;\n    margin-bottom: 5px;\n}\n\n.listGroups {\n    display: flex;\n    margin: 0px !important;\n}\n\n.listGroups img {\n    width: 40px;\n    height: 40px;\n    margin: 0px 10px 0px 0px;\n}\n\n.listGroups p {\n    margin: auto 0px;\n}\n\n/* ------ CHAT ------ */\n\n.chat-bubble {\n    border-radius: 7px;\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);\n    padding: 5px 7px;\n    width: 350px;\n    max-width: 100%;\n    position: relative;\n}\n\n.your-mouth {\n    width: 0;\n    height: 0;\n    border-bottom: 10px solid white;\n    border-left: 10px solid transparent;\n    position: absolute;\n    bottom: 10px;\n    left: -10px;\n}\n\n.my-mouth {\n    width: 0;\n    height: 0;\n    border-bottom: 10px solid #dcf8c6;\n    border-right: 10px solid transparent;\n    position: absolute;\n    bottom: 10px;\n    left: 100%;\n}\n\n.content {\n    margin: 0.5em 0;\n    line-height: 120%;\n    font-size: 0.9em;\n}\n\n.content img {\n    width: 100%;\n}\n\n.time {\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 1rem;\n    text-align: right;\n    margin-top: -10px;\n}\n\n.pink {\n    color: #EE33AA;\n}\n\n.green {\n    color: #44FF66;\n}\n\n.orange {\n    color: #FF8811;\n}\n\n.wrap-message {\n    width: 100%;\n    height: 60px;\n    background: #f1f1f1;\n    display: flex;\n}\n\n.message {\n    width: 100%;\n    height: 45px;\n    background: #ffffff;\n    margin: auto;\n    border: 1px solid #eeeeee;\n    border-radius: 5px;\n    display: flex;\n}\n\n.input-message {\n    width: 100%;\n    margin: 0px 10px;\n    border: none;\n}\n\n.input-message:focus {\n    outline: none;\n}\n\n/* ------ SCROLLBAR ------ */\n\nbody::-webkit-scrollbar,\n.contact-list::-webkit-scrollbar,\n.chat::-webkit-scrollbar,\n.information::-webkit-scrollbar {\n    width: 0.4em;\n    height: 0.4em;\n}\n\nbody::-webkit-scrollbar-thumb,\n.contact-list::-webkit-scrollbar-thumb,\n.chat::-webkit-scrollbar-thumb,\n.information::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.2);\n}\n\n/* ------ MEDIA QUERIES ------ */\n\n@media (min-width: 1200px) {\n    .wrap {\n        margin-bottom: 2vh;\n        margin-top: 25px;\n        height: calc(98vh - 25px);\n    }\n}\n\n@media (max-width: 600px) {\n    .wrap {\n        height: calc(100vh - 0.4em);\n    }\n}\n\n.contact .clk {\n    background-color: #085373;\n    border: 1px solid #085373;\n    color: #fff;\n}\n\n.contact .clk:focus {\n    outline: none;\n}\n\n.contact .clkStart {\n    background-color: #398b3f;\n    border: 1px solid #398b3f;\n    color: #fff;\n    text-align: center;\n}\n\n.contact .clkStart:focus {\n    outline: none;\n}\n\n.chat-right {\n    background: #ffffff;\n    margin: 0px auto 10px 0px;\n    font-family: 'DroidNaskh';\n}\n\n.chat-left {\n    background: #dcf8c6;\n    margin: 0px 0px 10px auto;\n    font-family: 'DroidNaskh';\n}\n\n.chat-left .your-mouth {\n    width: 0;\n    height: 0;\n    border-bottom: 10px solid #dcf8c6;\n    border-right: 10px solid transparent;\n    position: absolute;\n    bottom: 10px;\n    left: 100%;\n    border-left: none;\n}\n\n.chat .content {\n    font-family: 'DroidNaskh';\n    font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,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ZmlsZSI6ImNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG59XG5cbmkge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdEcm9pZE5hc2toJztcbiAgICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvZm9udHMvRHJvaWROYXNraC1SZWd1bGFyLnR0Zik7XG59XG5cblxuLyogLS0tLS0tIEZPTlRTIC0tLS0tLSAqL1xuXG4uZm9udC1uYW1lIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mb250LXByZXZpZXcge1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5mb250LW9ubGluZSB7XG4gICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLmJhY2sge1xuICAgIGNvbG9yOiAjMzk4YjNmO1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYmFjayBpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4uc2VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGIzZjtcbiAgICBib3JkZXItY29sb3I6ICMzOThiM2Y7XG59XG5cbi5ncmVlbi1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjYmNmM2NjO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAtMTAwO1xufVxuXG4ud3JhcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAjYWFhYWFhO1xufVxuXG5cbi8qIC0tLS0tLSBMRUZUIFNJREUgLS0tLS0tICovXG5cbi5sZWZ0IHtcbiAgICB3aWR0aDogNDAwcHg7XG59XG5cbi5wcm9maWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGJkYmRiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvZmlsZSBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaWNvbnMge1xuICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi53cmFwLXNlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlYXJjaCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2VhcmNoIGkge1xuICAgIHdpZGh0OiA2MHB4O1xufVxuXG4uc2VhcmNoIGksXG4ud3JhcC1tZXNzYWdlIGkge1xuICAgIGNvbG9yOiAjYWFhYWFhO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0LXNlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5wdXQtc2VhcmNoOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFjdC1saXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTA1cHgpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5jb250YWN0LFxuLmFjdGl2ZS1jb250YWN0LFxuLm5ldy1tZXNzYWdlLWNvbnRhY3Qge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWN0IGltZyxcbi5hY3RpdmUtY29udGFjdCBpbWcsXG4ubmV3LW1lc3NhZ2UtY29udGFjdCBpbWcge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWN0aXZlLWNvbnRhY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi5jb250YWN0OmhvdmVyLFxuLm5ldy1tZXNzYWdlLWNvbnRhY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5uZXctbWVzc2FnZS1jb250YWN0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRhY3QtcHJldmlldyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhY3QtdGV4dCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogYXV0byAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWN0LXRpbWUge1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcbn1cblxuLm5ldy1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDlkMjYxO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXctbWVzc2FnZSBwIHtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cblxuLyogLS0tLS0tIFJJR0hUIFNJREUgLS0tLS0tICovXG5cbi5yaWdodCB7XG4gICAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSA0MDBweCk7XG59XG5cbi5jaGF0LWhlYWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jaGF0LWhlYWQgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNoYXQtaGVhZCBpIHtcbiAgICBjb2xvcjogI2FhYWFhYTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2xvc2UtY29udGFjdC1pbmZvcm1hdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNoYXQtbmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ud3JhcC1jaGF0IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2hhdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZGRkNTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTA4OTU3Ny9iYWNrZ3JvdW5kLnBuZyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4IDEwJTtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaW5mb3JtYXRpb24gZGl2IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmluZm9ybWF0aW9uIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uaW5mb3JtYXRpb24gaDEge1xuICAgIGNvbG9yOiAjMDA5Njg4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5saXN0R3JvdXBzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0R3JvdXBzIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmxpc3RHcm91cHMgcCB7XG4gICAgbWFyZ2luOiBhdXRvIDBweDtcbn1cblxuXG4vKiAtLS0tLS0gQ0hBVCAtLS0tLS0gKi9cblxuLmNoYXQtYnViYmxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgcGFkZGluZzogNXB4IDdweDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnlvdXItbW91dGgge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogLTEwcHg7XG59XG5cbi5teS1tb3V0aCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2RjZjhjNjtcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAwLjVlbSAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50aW1lIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLnBpbmsge1xuICAgIGNvbG9yOiAjRUUzM0FBO1xufVxuXG4uZ3JlZW4ge1xuICAgIGNvbG9yOiAjNDRGRjY2O1xufVxuXG4ub3JhbmdlIHtcbiAgICBjb2xvcjogI0ZGODgxMTtcbn1cblxuLndyYXAtbWVzc2FnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtbWVzc2FnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbnB1dC1tZXNzYWdlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5cbi8qIC0tLS0tLSBTQ1JPTExCQVIgLS0tLS0tICovXG5cbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuLmNvbnRhY3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIsXG4uY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIsXG4uaW5mb3JtYXRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMC40ZW07XG4gICAgaGVpZ2h0OiAwLjRlbTtcbn1cblxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4uY29udGFjdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbi5jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbi5pbmZvcm1hdGlvbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuXG4vKiAtLS0tLS0gTUVESUEgUVVFUklFUyAtLS0tLS0gKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC53cmFwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoOTh2aCAtIDI1cHgpO1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLndyYXAge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAwLjRlbSk7XG4gICAgfVxufVxuXG4uY29udGFjdCAuY2xrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg1MzczO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwODUzNzM7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jb250YWN0IC5jbGs6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jb250YWN0IC5jbGtTdGFydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OGIzZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzk4YjNmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QgLmNsa1N0YXJ0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2hhdC1yaWdodCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnRHJvaWROYXNraCc7XG59XG5cbi5jaGF0LWxlZnQge1xuICAgIGJhY2tncm91bmQ6ICNkY2Y4YzY7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHggYXV0bztcbiAgICBmb250LWZhbWlseTogJ0Ryb2lkTmFza2gnO1xufVxuXG4uY2hhdC1sZWZ0IC55b3VyLW1vdXRoIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZGNmOGM2O1xuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5jaGF0IC5jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ0Ryb2lkTmFza2gnO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n\n        </nav>\n        <div class=\"copyright pull-right\">\n             by <a href=\"https://mworld.ae/\">MWORLD</a>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], FooterComponent);



/***/ }),

/***/ "ogXs":
/*!***************************************************!*\
  !*** ./src/app/Services/Shared/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let SharedService = class SharedService {
    constructor(http) {
        this.http = http;
        this.host = 'http://shjpolice.mworld.ae/Sharjah-Police/public';
        this.hostForChat = 'http://shjpolice.mworld.ae';
        this.api = this.host;
        // ********************************************
        // public host = 'https://stg-chatbot.shj.ae';
        // public hostForChat = 'https://stg-chatbotapp.shj.ae:3001';
        // public api = this.host + '/AwqafBot/public';
        // ********************************************
        this.profile = `${this.api}/api/auth/profile`;
        this.roles = { 0: ['answers', 'rating', 'suggestions', 'service', 'buisness', 'answer-detail'], 1: ['chat'],
            2: ['answer-report', 'agent-report'], 3: ['agent_report', 'chat'],
            4: ['answers', 'users', 'home', 'rating', 'suggestions', 'service', 'buisness', 'answer-detail', 'chat', 'answer-report', 'agent-report'] };
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getProfile() {
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }) };
        return this.http.get(this.profile, this.httpOptions);
    }
    checkIfUserCanAuthenticate(title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.getAgent();
            let roles = this.roles[data];
            console.log(roles, title);
            if (roles.indexOf(title) > -1) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    getProfilePromise() {
        return new Promise(resolve => {
            this.getProfile().subscribe((data) => {
                resolve(data);
            });
        });
    }
    getAgent() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.getProfilePromise();
            return data['isAgent'];
        });
    }
    getId() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.getProfilePromise();
            return data['id'];
        });
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], SharedService);



/***/ }),

/***/ "pG9d":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* BASIC */\n\nhtml {\n    background-color: #359743;\n}\n\nbody {\n    font-family: \"Poppins\", sans-serif;\n    height: 100vh;\n}\n\na {\n    color: #92badd;\n    display: inline-block;\n    text-decoration: none;\n    font-weight: 400;\n}\n\nh2 {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin: 40px 8px 10px 8px;\n    color: #cccccc;\n}\n\n/* STRUCTURE */\n\n.wrapper {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    min-height: 100%;\n    padding: 20px;\n}\n\n#formContent {\n    border-radius: 10px 10px 10px 10px;\n    background: #fff;\n    padding: 30px;\n    width: 90%;\n    max-width: 450px;\n    position: relative;\n    padding: 0px;\n    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n    text-align: center;\n}\n\n#formFooter {\n    background-color: #f6f6f6;\n    border-top: 1px solid #dce8f1;\n    padding: 25px;\n    text-align: center;\n    border-radius: 0 0 10px 10px;\n}\n\n/* TABS */\n\nh2.inactive {\n    color: #cccccc;\n}\n\nh2.active {\n    color: #0d0d0d;\n    border-bottom: 2px solid #359743;\n}\n\n/* FORM TYPOGRAPHY*/\n\ninput[type=button],\ninput[type=submit],\ninput[type=reset] {\n    background-color: #359743;\n    border: none;\n    color: white;\n    padding: 15px 80px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 13px;\n    box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n    border-radius: 5px 5px 5px 5px;\n    margin: 5px 20px 40px 20px;\n    transition: all 0.3s ease-in-out;\n}\n\ninput[type=button]:hover,\ninput[type=submit]:hover,\ninput[type=reset]:hover {\n    background-color: #359743;\n}\n\ninput[type=button]:active,\ninput[type=submit]:active,\ninput[type=reset]:active {\n    transform: scale(0.95);\n}\n\ninput[type=text],\ninput[type=password] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 5px;\n    width: 85%;\n    border: 2px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 5px 5px 5px 5px;\n}\n\ninput[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 2px solid #359743;\n}\n\ninput[type=text]:placeholder {\n    color: #cccccc;\n}\n\n/* ANIMATIONS */\n\n/* Simple CSS3 Fade-in-down Animation */\n\n.fadeInDown {\n    -webkit-animation-name: fadeInDown;\n    animation-name: fadeInDown;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n    0% {\n        opacity: 0;\n        transform: translate3d(0, -100%, 0);\n    }\n    100% {\n        opacity: 1;\n        transform: none;\n    }\n}\n\n@keyframes fadeInDown {\n    0% {\n        opacity: 0;\n        transform: translate3d(0, -100%, 0);\n    }\n    100% {\n        opacity: 1;\n        transform: none;\n    }\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.fadeIn {\n    opacity: 0;\n    -webkit-animation: fadeIn ease-in 1;\n    animation: fadeIn ease-in 1;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n}\n\n.fadeIn.first {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.fadeIn.second {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n}\n\n.fadeIn.third {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n}\n\n.fadeIn.fourth {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n}\n\n/* Simple CSS3 Fade-in Animation */\n\n.underlineHover:after {\n    display: block;\n    left: 0;\n    bottom: -10px;\n    width: 0;\n    height: 2px;\n    background-color: #359743;\n    content: \"\";\n    transition: width 0.2s;\n}\n\n.underlineHover:hover {\n    color: #0d0d0d;\n}\n\n.underlineHover:hover:after {\n    width: 100%;\n}\n\n/* OTHERS */\n\n*:focus {\n    outline: none;\n}\n\n#icon {\n    width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsV0FBVzs7QUFFWDtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJBU0lDICovXG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTk3NDM7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5hIHtcbiAgICBjb2xvcjogIzkyYmFkZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcbiAgICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKiBTVFJVQ1RVUkUgKi9cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cbi8qIFRBQlMgKi9cblxuaDIuaW5hY3RpdmUge1xuICAgIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5oMi5hY3RpdmUge1xuICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzU5NzQzO1xufVxuXG5cbi8qIEZPUk0gVFlQT0dSQVBIWSovXG5cbmlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9c3VibWl0XSxcbmlucHV0W3R5cGU9cmVzZXRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU5NzQzO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsIDE4NiwgMjMzLCAwLjQpO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsXG5pbnB1dFt0eXBlPXJlc2V0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTc0Mztcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSxcbmlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsXG5pbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzU5NzQzO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG4vKiBBTklNQVRJT05TICovXG5cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuXG4uZmFkZUluRG93biB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG59XG5cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlLWluIDE7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5mYWRlSW4uZmlyc3Qge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmZhZGVJbi5zZWNvbmQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmZhZGVJbi50aGlyZCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZmFkZUluLmZvdXJ0aCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5cbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTk3NDM7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICAgIGNvbG9yOiAjMGQwZDBkO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4jaWNvbiB7XG4gICAgd2lkdGg6IDYwJTtcbn0iXX0= */");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ "47Jg");





let SidebarModule = class SidebarModule {
};
SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })
], SidebarModule);



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n<script src=\"https://code.jquery.com/jquery-3.6.0.min.js\" integrity=\"sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=\" crossorigin=\"anonymous\"></script>\n<!------ Include the above in your HEAD tag ---------->\n\n<div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n        <!-- Tabs Titles -->\n\n        <!-- Icon -->\n        <div class=\"fadeIn first\" style=\"height: 235px; margin-top: 10px;\">\n            <img src=\"assets/img/shjpolice.jpg\" id=\"icon\" alt=\"User Icon\" />\n        </div>\n\n        <!-- Login Form -->\n        <form>\n            <input type=\"text\" id=\"login\" [(ngModel)]=\"username\" class=\"fadeIn second\" name=\"username\" placeholder=\"username\" autocomplete=\"off\">\n            <input type=\"text\" [(ngModel)]=\"password\" id=\"password\" class=\"fadeIn third\" name=\"passowrd\" type=\"password\" placeholder=\"password\" autocomplete=\"off\">\n            <span id=\"error\" style=\"display: hide;color:red;\"></span>\n            <input type=\"button\" (click)=\"login()\" class=\"fadeIn fourth\" value=\"Log In\">\n        </form>\n\n        <!-- Remind Passowrd -->\n        <div id=\"formFooter\">\n            <a class=\"underlineHover\" href=\"#\">Forgot Password?</a>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "z86Y":
/*!*************************************************!*\
  !*** ./src/app/Services/agent/agent.service.ts ***!
  \*************************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_interfaces_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/interfaces/services */ "GodB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _Shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/shared.service */ "ogXs");






let AgentService = class AgentService extends app_interfaces_services__WEBPACK_IMPORTED_MODULE_3__["ServiceGeneral"] {
    constructor(http, shared) {
        super(http);
        this.http = http;
        this.shared = shared;
        this.httpOptions = {};
        this.api = shared.api;
        this.sendUrl = `${this.api}/api/push`;
        this.startUrl = `${this.api}/api/start`;
        this.endUrl = `${this.api}/api/end`;
        this.updateUrl = `${this.api}/api/agents/update`;
        this.httpOptions = null;
        this.url = `${this.api}/api/agents`;
    }
    ;
    getUpdate(adapter) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(this.updateUrl, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.data.map((item) => {
                return adapter.adapt(item);
            });
        }));
    }
    sendMessage(data) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.sendUrl, data, this.httpOptions);
    }
    start(data) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.startUrl, data, this.httpOptions);
    }
    end(data) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.endUrl, data, this.httpOptions);
    }
};
AgentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _Shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }
];
AgentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _Shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
], AgentService);



/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <button (click)=\"logout()\" >Logout</button>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

=========================================================
* Paper Dashboard Angular - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zvoc":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a routerLink='/dashboard' class=\"simple-text logo-mini\" style=\"height: 50px;\n        padding: 0; width: 90px;\">\n            <div class=\"logo-image-small\" style=\"height: 100%;\n            width: 100%;\">\n                <img src=\"assets/img/shjpolice.jpg\" style=\"height: 100%;\n                width: 100%;\">\n            </div>\n        </a>\n        <a routerLink='/dashboard' class=\"simple-text logo-normal\" style=\"font-size: 0.9rem;\n        color: #000;\n        font-weight: bold;\">\n      Sharjah Police\n    </a>\n    </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map