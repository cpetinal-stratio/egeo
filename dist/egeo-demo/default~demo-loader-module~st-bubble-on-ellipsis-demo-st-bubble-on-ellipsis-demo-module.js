(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-bubble-on-ellipsis-demo-st-bubble-on-ellipsis-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"bubble-demo-container\">\n         <div class=\"buttons\">\n            <st-switch label=\"Open to left\" [(formControl)]=\"openToLeftFormControl\">\n            </st-switch>\n            <st-input label=\"Max with of container\" [(formControl)]=\"containerMaxWidthFormControl\"\n                      [fieldType]=\"'number'\"></st-input>\n         </div>\n         <div class=\"bubble-container\" [style.max-width]=\"containerMaxWidthFormControl.value + 'px'\">\n            <st-bubble-on-ellipsis\n               [text]=\"'Put mouse over to display a bubble when there is ellipsis'\"\n               [openToLeft]=\"openToLeftFormControl.value\">\n               Put mouse over to display a bubble when there is ellipsis\n            </st-bubble-on-ellipsis>\n            <br>\n            <st-bubble-on-ellipsis\n               [text]=\"'This is a long text and we want to display it with ellipsis only if it takes up more than two lines'\"\n               [openToLeft]=\"openToLeftFormControl.value\"\n               [lines]=\"2\">\n               This is a long text and we want to display it with ellipsis only if it takes up more than <b>two lines</b>\n            </st-bubble-on-ellipsis>\n            <br>\n            <st-bubble-on-ellipsis\n               [text]=\"'This is a long text and we want to display it with ellipsis only if it takes up more than three lines'\"\n               [openToLeft]=\"openToLeftFormControl.value\"\n               [lines]=\"3\">\n               This is a long text and we want to display it with ellipsis only if it takes up more than <b>three lines</b>\n            </st-bubble-on-ellipsis>\n         </div>\n      </div>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.bubble-demo-container {\n  width: 800px;\n  height: 300px;\n  padding: 20px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.buttons {\n  float: left; }\n.bubble-container {\n  float: right; }\nst-switch {\n  display: block;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy1kZW1vL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy1kZW1vLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtYnViYmxlLW9uLWVsbGlwc2lzLWRlbW8vc3QtYnViYmxlLW9uLWVsbGlwc2lzLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBQ0VGO0VBQ0csWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFHaEI7RUFDRyxZQUFZLEVBQUE7QUFHZjtFQUNHLGNBQWMsRUFBQTtBQUdqQjtFQUNHLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHdEI7RUFDRyxXQUFXLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0csY0FBYztFQUNkLFlBQVksRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1idWJibGUtb24tZWxsaXBzaXMtZGVtby9zdC1idWJibGUtb24tZWxsaXBzaXMtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi5idWJibGUtZGVtby1jb250YWluZXIge1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7IH1cblxuLmJ1YmJsZS1kZW1vLWl0ZW1zIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5idWJibGUtZGVtby1idXR0b24ge1xuICBmbG9hdDogaW5oZXJpdDsgfVxuXG4uYnViYmxlLWRlbW8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5idXR0b25zIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmJ1YmJsZS1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuc3Qtc3dpdGNoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5cbi5idWJibGUtZGVtby1jb250YWluZXIge1xuICAgd2lkdGg6IDgwMHB4O1xuICAgaGVpZ2h0OiAzMDBweDtcbiAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5idWJibGUtZGVtby1pdGVtcyB7XG4gICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idWJibGUtZGVtby1idXR0b24ge1xuICAgZmxvYXQ6IGluaGVyaXQ7XG59XG5cbi5idWJibGUtZGVtby1jb250ZW50IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5idXR0b25zIHtcbiAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uYnViYmxlLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuc3Qtc3dpdGNoIHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgbWFyZ2luOiAxNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StBubbleOnEllipsisDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleOnEllipsisDemoComponent", function() { return StBubbleOnEllipsisDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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


var StBubbleOnEllipsisDemoComponent = /** @class */ (function () {
    function StBubbleOnEllipsisDemoComponent() {
        this.configDoc = {
            html: 'demo/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html',
            ts: 'demo/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts',
            component: 'lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.component.ts'
        };
        this.text = 'What needed to deploy Crossdata?';
        this.hidden = true;
        this.openToLeftFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.containerMaxWidthFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](500);
    }
    StBubbleOnEllipsisDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-bubble-on-ellipsis-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-bubble-on-ellipsis-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-bubble-on-ellipsis-demo.component.scss */ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.scss")).default]
        })
    ], StBubbleOnEllipsisDemoComponent);
    return StBubbleOnEllipsisDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.module.ts ***!
  \***************************************************************************************/
/*! exports provided: StBubbleOnEllipsisDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleOnEllipsisDemoModule", function() { return StBubbleOnEllipsisDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_bubble_on_ellipsis_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-bubble-on-ellipsis-demo.component */ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts");
/* harmony import */ var _egeo_src_lib_st_bubble_on_ellipsis_st_bubble_on_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../egeo/src/lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.module */ "../egeo/src/lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.module.ts");
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







var StBubbleOnEllipsisDemoModule = /** @class */ (function () {
    function StBubbleOnEllipsisDemoModule() {
    }
    StBubbleOnEllipsisDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _egeo_src_lib_st_bubble_on_ellipsis_st_bubble_on_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["StBubbleOnEllipsisModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_bubble_on_ellipsis_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleOnEllipsisDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"]
            ],
            declarations: [_st_bubble_on_ellipsis_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleOnEllipsisDemoComponent"]],
            providers: []
        })
    ], StBubbleOnEllipsisDemoModule);
    return StBubbleOnEllipsisDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-bubble-on-ellipsis-demo-st-bubble-on-ellipsis-demo-module.js.map