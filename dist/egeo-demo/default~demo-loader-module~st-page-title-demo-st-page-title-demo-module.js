(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-page-title-demo-st-page-title-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-page-title-demo/st-page-title-demo.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-page-title-demo/st-page-title-demo.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"page-container col-md-24\">\n      <h3>Title without left button:</h3>\n      <st-page-title [title]=\"title\" qaTag=\"page-title\">\n         <div class=\"right-content\">\n            <st-search qa=\"test-page-title\" placeholder=\"search\" class=\"margin-right\"></st-search>\n            <button class=\"button button-primary\">\n               <span>Create</span>\n            </button>\n         </div>\n      </st-page-title>\n   </section>\n\n   <section class=\"page-container col-md-24\">\n      <h3>Title without left button and with pretitle:</h3>\n      <st-page-title title=\"Egeo\" preTitle=\"Project\" qaTag=\"page-title-pretitle\"></st-page-title>\n   </section>\n\n   <section class=\"page-container col-md-24\">\n      <h3>Title with back button:</h3>\n      <st-page-title leftButton=\"icon-reply\" [title]=\"title\" qaTag=\"page-title-button\">\n         <div class=\"right-content\">\n            <st-search qa=\"test-page-title\" placeholder=\"search\" class=\"margin-right\"></st-search>\n            <button class=\"button button-primary\">\n               <span>Create</span>\n            </button>\n         </div>\n      </st-page-title>\n   </section>\n\n   <section class=\"page-container col-md-24\">\n      <h3>Title editable:</h3>\n      <st-page-title [title]=\"title\" qaTag=\"page-title-editable\" [editable]=\"true\" placeholder=\"Page Title Editable\" [maxlength]=\"20\" [minlength]=\"1\">\n         <div class=\"right-content\">\n            <button class=\"button button-primary\">\n               <span>Create</span>\n            </button>\n         </div>\n      </st-page-title>\n   </section>\n\n   <section class=\"page-container col-md-24\">\n      <h3>Title editable with errors:</h3>\n      <st-page-title [title]=\"title\" qaTag=\"page-title-editable\" [editable]=\"true\" placeholder=\"Page Title Editable\" [maxlength]=\"maxlength\"\n          [minlength]=\"minlength\" [error]=\"error\" [errorMessage]=\"errorMsg\" (edit)=editTitle($event)>\n         <div class=\"right-content\">\n            <button class=\"button button-primary\">\n               <span>Create</span>\n            </button>\n         </div>\n      </st-page-title>\n   </section>\n\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-page-title-demo/st-page-title-demo.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/demos/st-page-title-demo/st-page-title-demo.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.box-right {\n  display: inline-block;\n  height: 35px;\n  border: 1px solid #999;\n  margin: 0 5px; }\n.box-content {\n  margin: 0 5px;\n  line-height: 35px; }\n.right-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  min-width: 300px;\n  margin-bottom: 10px;\n  align-content: flex-end; }\n.margin-right {\n  margin-right: 10px; }\n.page-container {\n  width: 100%;\n  margin-bottom: 35px; }\nh3 {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXBhZ2UtdGl0bGUtZGVtby9zdC1wYWdlLXRpdGxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9jcGV0aW5hbC9kYXRvcy93cy9waXQvY3BldGluYWwvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1wYWdlLXRpdGxlLWRlbW8vc3QtcGFnZS10aXRsZS1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUNDRjtFQUNHLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTtBQUdoQjtFQUNHLGFBQWE7RUFDYixpQkFBaUIsRUFBQTtBQUdwQjtFQUNHLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7QUFHMUI7RUFDRyxrQkFBa0IsRUFBQTtBQUdyQjtFQUNHLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtBQUd0QjtFQUNHLGtCQUFrQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXBhZ2UtdGl0bGUtZGVtby9zdC1wYWdlLXRpdGxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uYm94LXJpZ2h0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIG1hcmdpbjogMCA1cHg7IH1cblxuLmJveC1jb250ZW50IHtcbiAgbWFyZ2luOiAwIDVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7IH1cblxuLnJpZ2h0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7IH1cblxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4ucGFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDsgfVxuXG5oMyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4uYm94LXJpZ2h0IHtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIGhlaWdodDogMzVweDtcbiAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gICBtYXJnaW46IDAgNXB4O1xufVxuXG4uYm94LWNvbnRlbnQge1xuICAgbWFyZ2luOiAwIDVweDtcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4ucmlnaHQtY29udGVudCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgbWluLXdpZHRoOiAzMDBweDtcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLm1hcmdpbi1yaWdodCB7XG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wYWdlLWNvbnRhaW5lciB7XG4gICB3aWR0aDogMTAwJTtcbiAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbmgzIHtcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-page-title-demo/st-page-title-demo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demos/st-page-title-demo/st-page-title-demo.component.ts ***!
  \**************************************************************************/
/*! exports provided: StPageTitleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StPageTitleDemoComponent", function() { return StPageTitleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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

var StPageTitleDemoComponent = /** @class */ (function () {
    function StPageTitleDemoComponent() {
        this.configDoc = {
            html: 'demo/st-page-title-demo/st-page-title-demo.component.html',
            ts: 'demo/st-page-title-demo/st-page-title-demo.component.ts',
            component: 'lib/st-page-title/st-page-title.component.ts'
        };
        this.title = 'st page title demo';
        this.error = false;
        this.errorMsg = '';
        this.minlength = 1;
        this.maxlength = 20;
    }
    StPageTitleDemoComponent.prototype.editTitle = function (value) {
        if (value.length === this.maxlength) {
            this.error = true;
            this.errorMsg = 'Error filling page title input';
        }
        else {
            this.error = false;
            this.errorMsg = '';
        }
    };
    StPageTitleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-page-title-demo-example',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-page-title-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-page-title-demo/st-page-title-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-page-title-demo.component.scss */ "./src/app/demos/st-page-title-demo/st-page-title-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StPageTitleDemoComponent);
    return StPageTitleDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-page-title-demo/st-page-title-demo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demos/st-page-title-demo/st-page-title-demo.module.ts ***!
  \***********************************************************************/
/*! exports provided: StPageTitleDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StPageTitleDemoModule", function() { return StPageTitleDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_page_title_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-page-title-demo.component */ "./src/app/demos/st-page-title-demo/st-page-title-demo.component.ts");
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




var StPageTitleDemoModule = /** @class */ (function () {
    function StPageTitleDemoModule() {
    }
    StPageTitleDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StPageTitleModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSearchModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_page_title_demo_component__WEBPACK_IMPORTED_MODULE_3__["StPageTitleDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_page_title_demo_component__WEBPACK_IMPORTED_MODULE_3__["StPageTitleDemoComponent"]],
            providers: []
        })
    ], StPageTitleDemoModule);
    return StPageTitleDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-page-title-demo-st-page-title-demo-module.js.map