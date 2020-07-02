(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-bubble-demo-st-bubble-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-demo/st-bubble-demo.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-demo/st-bubble-demo.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid demo-layout\">\n\n      <h1 class=\"title\">Theme customization</h1>\n      <p class=\"paragraph\">You can customize some styles using the following css variables</p>\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\n\n      <section class=\"bubble-demo-container\">\n         <h1 class=\"title\">Example</h1>\n         <div class=\"buttons\">\n            <st-switch label=\"Enabled animation\" [(formControl)]=\"animationFormControl\">\n            </st-switch>\n\n            <st-switch label=\"Small theme\" [(formControl)]=\"smallFormControl\">\n            </st-switch>\n\n            <st-switch label=\"Open to left\" [(formControl)]=\"openToLeftFormControl\">\n            </st-switch>\n         </div>\n         <div class=\"bubble-container\">\n            <st-bubble qaTag=\"bubble-demo\" [text]=\"text\" [hidden]=\"hidden\"\n                       [animation]=\"animationFormControl.value\"\n                       [small]=\" smallFormControl.value\"\n                       [offset]=\"{x: 38, y: 17}\"\n                       [openToLeft]=\"openToLeftFormControl.value\">\n\n               <button bubble-button class=\"bubble-demo-button button button-primary\" (click)=\"onClick()\">\n                  <span>Bubble</span>\n               </button>\n            </st-bubble>\n         </div>\n      </section>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.title {\n  display: block; }\n.bubble-demo-container {\n  width: 800px;\n  height: 300px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.buttons {\n  float: left; }\n.bubble-container {\n  float: right; }\nst-switch {\n  display: block;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1kZW1vL3N0LWJ1YmJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtYnViYmxlLWRlbW8vc3QtYnViYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBQ0NGO0VBQ0csY0FBYyxFQUFBO0FBR2pCO0VBQ0csWUFBWTtFQUNaLGFBQWEsRUFBQTtBQUdoQjtFQUNHLFlBQVksRUFBQTtBQUdmO0VBQ0csY0FBYyxFQUFBO0FBR2pCO0VBQ0csYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTtBQUd0QjtFQUNHLFdBQVcsRUFBQTtBQUdkO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRyxjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1kZW1vL3N0LWJ1YmJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLnRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmJ1YmJsZS1kZW1vLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiAzMDBweDsgfVxuXG4uYnViYmxlLWRlbW8taXRlbXMge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuLmJ1YmJsZS1kZW1vLWJ1dHRvbiB7XG4gIGZsb2F0OiBpbmhlcml0OyB9XG5cbi5idWJibGUtZGVtby1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLmJ1dHRvbnMge1xuICBmbG9hdDogbGVmdDsgfVxuXG4uYnViYmxlLWNvbnRhaW5lciB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG5zdC1zd2l0Y2gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi50aXRsZSB7XG4gICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ1YmJsZS1kZW1vLWNvbnRhaW5lciB7XG4gICB3aWR0aDogODAwcHg7XG4gICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4uYnViYmxlLWRlbW8taXRlbXMge1xuICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYnViYmxlLWRlbW8tYnV0dG9uIHtcbiAgIGZsb2F0OiBpbmhlcml0O1xufVxuXG4uYnViYmxlLWRlbW8tY29udGVudCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiBub3dyYXA7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9ucyB7XG4gICBmbG9hdDogbGVmdDtcbn1cblxuLmJ1YmJsZS1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbnN0LXN3aXRjaCB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIG1hcmdpbjogMTVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: StBubbleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleDemoComponent", function() { return StBubbleDemoComponent; });
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


var StBubbleDemoComponent = /** @class */ (function () {
    function StBubbleDemoComponent() {
        this.configDoc = {
            html: 'demo/st-bubble-demo/st-bubble-demo.component.html',
            ts: 'demo/st-bubble-demo/st-bubble-demo.component.ts',
            component: 'lib/st-bubble/st-bubble.component.ts'
        };
        this.text = 'What needed to deploy Crossdata?';
        this.hidden = true;
        this.animationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.smallFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.openToLeftFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.cssProperties = [
            {
                name: '--egeo-st-bubble__arrow--margin-right',
                description: 'Bubble arrow margin right',
                default: '15px'
            },
            {
                name: '--egeo-st-bubble__text--font-size',
                description: 'Bubble text font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-bubble__text--padding',
                description: 'Bubble text padding',
                default: '15px 20px'
            },
            {
                name: '--egeo-st-bubble__small__text--padding',
                description: 'Small bubble text padding',
                default: '10px 15px'
            }
        ];
    }
    StBubbleDemoComponent.prototype.onClick = function () {
        this.hidden = !this.hidden;
    };
    StBubbleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-bubble-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-bubble-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-demo/st-bubble-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-bubble-demo.component.scss */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss")).default]
        })
    ], StBubbleDemoComponent);
    return StBubbleDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StBubbleDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleDemoModule", function() { return StBubbleDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-bubble-demo.component */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts");
/* harmony import */ var _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/css-property-table/css-property-table.module */ "./src/app/shared/css-property-table/css-property-table.module.ts");
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







var StBubbleDemoModule = /** @class */ (function () {
    function StBubbleDemoModule() {
    }
    StBubbleDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StBubbleModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__["CssPropertyTableModule"]
            ],
            declarations: [_st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleDemoComponent"]],
            providers: []
        })
    ], StBubbleDemoModule);
    return StBubbleDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-bubble-demo-st-bubble-demo-module.js.map