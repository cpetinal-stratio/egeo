(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-launcher-demo-st-launcher-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-launcher-demo/st-launcher-demo.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-launcher-demo/st-launcher-demo.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"launcher-container\">\n         <st-launcher qaTag=\"launcher-demo\" [items]=\"items\" [groupLimit]=\"4\" [groupLimitLabel]=\"'View more'\" (toggle)=\"onToggle($event)\" (select)=\"onSelect($event)\"\n             (viewMore)=\"onViewMore($event)\">\n         </st-launcher>\n      </div>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-launcher-demo/st-launcher-demo.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/demos/st-launcher-demo/st-launcher-demo.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.launcher-container {\n  width: 800px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWxhdW5jaGVyLWRlbW8vc3QtbGF1bmNoZXItZGVtby5jb21wb25lbnQuc2NzcyIsIi9ob21lL2NwZXRpbmFsL2RhdG9zL3dzL3BpdC9jcGV0aW5hbC9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWxhdW5jaGVyLWRlbW8vc3QtbGF1bmNoZXItZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FDRUY7RUFDRyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWEsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1sYXVuY2hlci1kZW1vL3N0LWxhdW5jaGVyLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4ubGF1bmNoZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAyMHB4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cblxuLmxhdW5jaGVyLWNvbnRhaW5lciB7XG4gICB3aWR0aDogODAwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-launcher-demo/st-launcher-demo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-launcher-demo/st-launcher-demo.component.ts ***!
  \**********************************************************************/
/*! exports provided: StLauncherDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StLauncherDemoComponent", function() { return StLauncherDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

var StLauncherDemoComponent = /** @class */ (function () {
    function StLauncherDemoComponent() {
        this.configDoc = {
            html: 'demo/st-launcher-demo/st-launcher-demo.component.html',
            ts: 'demo/st-launcher-demo/st-launcher-demo.component.ts',
            component: 'lib/st-launcher/st-launcher.component.ts'
        };
        this.items = [
            {
                label: 'Egeo',
                items: [{
                        label: 'Egeo',
                        url: 'https://github.com/Stratio/egeo'
                    },
                    {
                        label: 'Egeo Web',
                        url: 'https://github.com/Stratio/egeo-web'
                    },
                    {
                        label: 'Egeo Starter',
                        url: 'https://github.com/Stratio/egeo-starter'
                    }]
            },
            {
                label: 'Angular',
                items: [{
                        label: 'Docs',
                        url: 'https://angular.io/docs'
                    },
                    {
                        label: 'Github',
                        url: 'https://github.com/angular/angular'
                    }]
            },
            {
                label: 'Stratio',
                items: [{
                        label: 'Stratio',
                        url: 'http://www.stratio.com/'
                    },
                    {
                        label: 'Linkedn',
                        url: 'https://www.linkedin.com/company/5122962/'
                    },
                    {
                        label: 'Twitter',
                        url: 'https://twitter.com/stratiobd'
                    },
                    {
                        label: 'Youtube',
                        url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw'
                    },
                    {
                        label: 'Paradigma Digital',
                        url: 'https://www.paradigmadigital.com'
                    }]
            }
        ];
    }
    StLauncherDemoComponent.prototype.onToggle = function (groupItem) {
        var e_1, _a;
        console.log('toggle group item:', groupItem);
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (groupItem !== item) {
                    item.expanded = false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    StLauncherDemoComponent.prototype.onSelect = function (item) {
        console.log('select item:', item);
        window.open(item.url, '_blank');
    };
    StLauncherDemoComponent.prototype.onViewMore = function (groupItem) {
        console.log('view more group item:', groupItem);
    };
    StLauncherDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-launcher-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-launcher-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-launcher-demo/st-launcher-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-launcher-demo.component.scss */ "./src/app/demos/st-launcher-demo/st-launcher-demo.component.scss")).default]
        })
    ], StLauncherDemoComponent);
    return StLauncherDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-launcher-demo/st-launcher-demo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demos/st-launcher-demo/st-launcher-demo.module.ts ***!
  \*******************************************************************/
/*! exports provided: StLauncherDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StLauncherDemoModule", function() { return StLauncherDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_launcher_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-launcher-demo.component */ "./src/app/demos/st-launcher-demo/st-launcher-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */




var StLauncherDemoModule = /** @class */ (function () {
    function StLauncherDemoModule() {
    }
    StLauncherDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StLauncherModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_launcher_demo_component__WEBPACK_IMPORTED_MODULE_3__["StLauncherDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_launcher_demo_component__WEBPACK_IMPORTED_MODULE_3__["StLauncherDemoComponent"]],
            providers: []
        })
    ], StLauncherDemoModule);
    return StLauncherDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-launcher-demo-st-launcher-demo-module.js.map