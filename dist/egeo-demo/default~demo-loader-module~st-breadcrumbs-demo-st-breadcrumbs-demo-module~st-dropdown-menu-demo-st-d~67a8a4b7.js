(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-logger\" [ngStyle]=\"{'width': width + 'px', 'right': expanded ? 0 : ((width * -1) + 'px')}\">\n   <div class=\"st-logger-tab\" (click)=\"toggle()\"></div>\n   <div class=\"drag-icon\" draggable=\"true\"(dragend)=\"notifyEnd($event)\"><i class=\"icon-actions\"></i><i class=\"icon-actions\"></i></div>\n   <div class=\"st-logger-container\">\n      <p *ngFor=\"let log of ((logStream | async) || [])\" [ngClass]=\"getSeverityClass(log)\">{{log.message}}</p>\n   </div>\n</div>\n");

/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts ***!
  \********************************************************************/
/*! exports provided: StDemoLoggerSeverity, StDemoLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerSeverity", function() { return StDemoLoggerSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLogger", function() { return StDemoLogger; });
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
var StDemoLoggerSeverity;
(function (StDemoLoggerSeverity) {
    StDemoLoggerSeverity[StDemoLoggerSeverity["INFO"] = 0] = "INFO";
    StDemoLoggerSeverity[StDemoLoggerSeverity["WARN"] = 1] = "WARN";
    StDemoLoggerSeverity[StDemoLoggerSeverity["ERROR"] = 2] = "ERROR";
    StDemoLoggerSeverity[StDemoLoggerSeverity["DEBUG"] = 3] = "DEBUG";
})(StDemoLoggerSeverity || (StDemoLoggerSeverity = {}));
var StDemoLogger = /** @class */ (function () {
    function StDemoLogger(message) {
        this.severity = StDemoLoggerSeverity.INFO;
        this.message = message;
    }
    return StDemoLogger;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts ***!
  \**********************************************************************/
/*! exports provided: StDemoLoggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerModule", function() { return StDemoLoggerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _st_demo_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-logger */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.ts");
/* harmony import */ var _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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




var StDemoLoggerModule = /** @class */ (function () {
    function StDemoLoggerModule() {
    }
    StDemoLoggerModule_1 = StDemoLoggerModule;
    StDemoLoggerModule.withService = function () {
        return {
            ngModule: StDemoLoggerModule_1,
            providers: [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_3__["StDemoLoggerService"]]
        };
    };
    var StDemoLoggerModule_1;
    StDemoLoggerModule = StDemoLoggerModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_st_demo_logger__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerComponent"]],
            exports: [_st_demo_logger__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerComponent"]]
        })
    ], StDemoLoggerModule);
    return StDemoLoggerModule;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.st-logger {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 400px;\n  transition: right 0.8s ease; }\n.drag-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 20px; }\n.st-logger-tab {\n  background-color: #FFFFFF;\n  box-shadow: 0px 2px 14px 0 #DBDBDB;\n  position: relative;\n  border-radius: 0 0 0 5px;\n  position: absolute;\n  left: -32px; }\n.st-logger-tab:after {\n    height: 100%;\n    width: 5px;\n    background-color: #FFFFFF;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: -5px; }\n.st-logger-tab:before {\n    display: flex;\n    padding: 7px;\n    font-family: \"ico_stratio\";\n    font-size: 1.429rem;\n    line-height: 1.429rem;\n    content: '\\e90c';\n    cursor: pointer; }\n.st-logger-container {\n  height: 100%;\n  padding: 30px;\n  box-shadow: 0 2px 14px 0 #DBDBDB;\n  border-left: solid 1px #f6f6f6;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  flex-grow: 1; }\n.st-logger-container p:first-child {\n    border-top: solid 1px #E7E7E7; }\n.info,\n.warning,\n.critical,\n.debug {\n  color: #707070;\n  font-weight: 400;\n  font-size: 0.938rem;\n  line-height: 1.286rem;\n  display: inline-flex;\n  border-bottom: solid 1px #E7E7E7;\n  padding: 3px;\n  width: 100%; }\n.info:before,\n  .warning:before,\n  .critical:before,\n  .debug:before {\n    font-size: 1.143rem;\n    line-height: 1.063rem;\n    font-family: \"ico_stratio\";\n    margin-right: 7px; }\n.info {\n  color: #065EB2; }\n.info:before {\n    content: '\\e615'; }\n.warning {\n  color: #EC7E13; }\n.warning:before {\n    content: '\\e613'; }\n.critical {\n  color: #DF2935; }\n.critical:before {\n    content: '\\e043'; }\n.debug {\n  padding-left: 23px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3NoYXJlZC9zdC1kZW1vLWxvZ2dlci9zdC1kZW1vLWxvZ2dlci5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL3N0LWRlbW8tbG9nZ2VyLnNjc3MiLCIvaG9tZS9jcGV0aW5hbC9kYXRvcy93cy9waXQvY3BldGluYWwvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9jcGV0aW5hbC9kYXRvcy93cy9waXQvY3BldGluYWwvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDdENGO0VBQ0csZUFBZTtFQUNmLFFBQVE7RUFDUixNQUFNO0VBQ04sYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTtBQUc5QjtFQUNHLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR2Y7RUFDRyx5QkVvQ21CO0VGbkNuQixrQ0UyQmlCO0VGMUJqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFOZDtJQVFNLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJFMkJnQjtJRjFCaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVcsRUFBQTtBQWZqQjtJQWtCTSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDBCR2hDMkM7SUhpQzNDLG1CR3hCc0I7SUh5QnRCLHFCR2R3QjtJSGV4QixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBSXJCO0VBQ0csWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0VGaUI7RUZHakIsOEJBQXlDO0VBQ3pDLHlCRUltQjtFRkhuQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBUGY7SUFVTSw2QkVWYyxFQUFBO0FGY3BCOzs7O0VBSUcsY0VaaUI7RUZhakIsZ0JBQWdCO0VBQ2hCLG1CR3ZCZ0M7RUh3QmhDLHFCRzFDMkI7RUgyQzNCLG9CQUFvQjtFQUNwQixnQ0V2QmlCO0VGd0JqQixZQUFZO0VBQ1osV0FBVyxFQUFBO0FBWGQ7Ozs7SUFhTSxtQkc1RHNCO0lINkR0QixxQkcxQmdDO0lIMkJoQywwQkdyRTJDO0lIc0UzQyxpQkFBaUIsRUFBQTtBQUl2QjtFQUNHLGNFekVpQixFQUFBO0FGd0VwQjtJQUdNLGdCQUFnQixFQUFBO0FBSXRCO0VBQ0csY0UxRGMsRUFBQTtBRnlEakI7SUFHTSxnQkFBZ0IsRUFBQTtBQUl0QjtFQUNHLGNFM0RZLEVBQUE7QUYwRGY7SUFHTSxnQkFBZ0IsRUFBQTtBQUl0QjtFQUNHLGtCQUFrQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3NoYXJlZC9zdC1kZW1vLWxvZ2dlci9zdC1kZW1vLWxvZ2dlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLnN0LWxvZ2dlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDQwMHB4O1xuICB0cmFuc2l0aW9uOiByaWdodCAwLjhzIGVhc2U7IH1cblxuLmRyYWctaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyMHB4OyB9XG5cbi5zdC1sb2dnZXItdGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxNHB4IDAgI0RCREJEQjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMycHg7IH1cbiAgLnN0LWxvZ2dlci10YWI6YWZ0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogLTVweDsgfVxuICAuc3QtbG9nZ2VyLXRhYjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcImljb19zdHJhdGlvXCI7XG4gICAgZm9udC1zaXplOiAxLjQyOXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40MjlyZW07XG4gICAgY29udGVudDogJ1xcZTkwYyc7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5zdC1sb2dnZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxNHB4IDAgI0RCREJEQjtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjZjZmNmY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7IH1cbiAgLnN0LWxvZ2dlci1jb250YWluZXIgcDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNFN0U3RTc7IH1cblxuLmluZm8sXG4ud2FybmluZyxcbi5jcml0aWNhbCxcbi5kZWJ1ZyB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOTM4cmVtO1xuICBsaW5lLWhlaWdodDogMS4yODZyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI0U3RTdFNztcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogMTAwJTsgfVxuICAuaW5mbzpiZWZvcmUsXG4gIC53YXJuaW5nOmJlZm9yZSxcbiAgLmNyaXRpY2FsOmJlZm9yZSxcbiAgLmRlYnVnOmJlZm9yZSB7XG4gICAgZm9udC1zaXplOiAxLjE0M3JlbTtcbiAgICBsaW5lLWhlaWdodDogMS4wNjNyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiaWNvX3N0cmF0aW9cIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDsgfVxuXG4uaW5mbyB7XG4gIGNvbG9yOiAjMDY1RUIyOyB9XG4gIC5pbmZvOmJlZm9yZSB7XG4gICAgY29udGVudDogJ1xcZTYxNSc7IH1cblxuLndhcm5pbmcge1xuICBjb2xvcjogI0VDN0UxMzsgfVxuICAud2FybmluZzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXGU2MTMnOyB9XG5cbi5jcml0aWNhbCB7XG4gIGNvbG9yOiAjREYyOTM1OyB9XG4gIC5jcml0aWNhbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXGUwNDMnOyB9XG5cbi5kZWJ1ZyB7XG4gIHBhZGRpbmctbGVmdDogMjNweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcblxuLnN0LWxvZ2dlciB7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICByaWdodDogMDtcbiAgIHRvcDogMDtcbiAgIGhlaWdodDogMTAwdmg7XG4gICB3aWR0aDogNDAwcHg7XG4gICB0cmFuc2l0aW9uOiByaWdodCAwLjhzIGVhc2U7O1xufVxuXG4uZHJhZy1pY29uIHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IDA7XG4gICB0b3A6IDA7XG4gICBib3R0b206IDA7XG4gICBtYXJnaW46IGF1dG87XG4gICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zdC1sb2dnZXItdGFiIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XG4gICBib3gtc2hhZG93OiAwcHggMnB4IDE0cHggMCAkbmV1dHJhbC0xNTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IC0zMnB4O1xuICAgJjphZnRlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogLTVweDtcbiAgIH1cbiAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICBmb250LWZhbWlseTogJGVnZW8tc3RyYXRpby1pY29ucztcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTIwO1xuICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTIwO1xuICAgICAgY29udGVudDogJ1xcZTkwYyc7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICB9XG59XG5cbi5zdC1sb2dnZXItY29udGFpbmVyIHtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHBhZGRpbmc6IDMwcHg7XG4gICBib3gtc2hhZG93OiAwIDJweCAxNHB4IDAgJG5ldXRyYWwtMTU7XG4gICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYigyNDYsIDI0NiwgMjQ2KTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XG4gICBvdmVyZmxvdy15OiBhdXRvO1xuICAgZmxleC1ncm93OiAxO1xuXG4gICBwOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkbmV1dHJhbC0xMDtcbiAgIH1cbn1cblxuLmluZm8sXG4ud2FybmluZyxcbi5jcml0aWNhbCxcbi5kZWJ1ZyB7XG4gICBjb2xvcjogJG5ldXRyYWwtNjA7XG4gICBmb250LXdlaWdodDogNDAwO1xuICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTE4O1xuICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJG5ldXRyYWwtMTA7XG4gICBwYWRkaW5nOiAzcHg7XG4gICB3aWR0aDogMTAwJTtcbiAgICY6YmVmb3JlIHtcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE2O1xuICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsO1xuICAgICAgZm9udC1mYW1pbHk6ICRlZ2VvLXN0cmF0aW8taWNvbnM7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgIH1cbn1cblxuLmluZm8ge1xuICAgY29sb3I6ICRhY3Rpb24tMTIwO1xuICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1xcZTYxNSc7XG4gICB9XG59XG5cbi53YXJuaW5nIHtcbiAgIGNvbG9yOiAkd2FybmluZztcbiAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXGU2MTMnO1xuICAgfVxufVxuXG4uY3JpdGljYWwge1xuICAgY29sb3I6ICRlcnJvcjtcbiAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXGUwNDMnO1xuICAgfVxufVxuXG4uZGVidWcge1xuICAgcGFkZGluZy1sZWZ0OiAyM3B4O1xufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcblxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxuXG4vLyBkZXByZWNhdGVkOlxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcblxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts ***!
  \***********************************************************************/
/*! exports provided: StDemoLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerService", function() { return StDemoLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
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



var StDemoLoggerService = /** @class */ (function () {
    function StDemoLoggerService() {
        this._logList = [];
        this._logStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._maxMessages = 20;
    }
    Object.defineProperty(StDemoLoggerService.prototype, "logStream", {
        get: function () {
            return this._logStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    StDemoLoggerService.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        var strMessages = messages.map(function (message) { return message.toString(); });
        this.notifyAlert(new _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLogger"](strMessages.join(' ')));
    };
    StDemoLoggerService.prototype.notifyAlert = function (severityOrLog, message) {
        if (severityOrLog instanceof _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLogger"]) {
            this._logList.push(severityOrLog);
        }
        else {
            this._logList.push({ severity: severityOrLog, message: message });
        }
        // First check if its over limit
        this.checkLogListCapacity();
        // Then notify new elements to observers
        this._logStream.next(this._logList);
    };
    Object.defineProperty(StDemoLoggerService.prototype, "maxMessages", {
        set: function (maxMessages) {
            this._maxMessages = maxMessages;
        },
        enumerable: true,
        configurable: true
    });
    StDemoLoggerService.prototype.checkLogListCapacity = function () {
        var firstToShow = this._logList.length - this._maxMessages;
        if (firstToShow > 0) {
            this._logList = this._logList.slice(firstToShow);
        }
    };
    StDemoLoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StDemoLoggerService);
    return StDemoLoggerService;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.ts ***!
  \***************************************************************/
/*! exports provided: StDemoLoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerComponent", function() { return StDemoLoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
/* harmony import */ var _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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



var StDemoLoggerComponent = /** @class */ (function () {
    function StDemoLoggerComponent(_loggerService) {
        this._loggerService = _loggerService;
        this.width = 400;
        this.logStream = this._loggerService.logStream;
    }
    StDemoLoggerComponent.prototype.getSeverityClass = function (log) {
        switch (log.severity) {
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].ERROR: return 'critical';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].WARN: return 'warning';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].INFO: return 'info';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].DEBUG: return 'debug';
            default: return 'debug';
        }
    };
    StDemoLoggerComponent.prototype.notifyEnd = function (event) {
        this.width = window.screen.width - event.screenX;
    };
    StDemoLoggerComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    StDemoLoggerComponent.ctorParameters = function () { return [
        { type: _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"] }
    ]; };
    StDemoLoggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-demo-logger',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-demo-logger.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-demo-logger.scss */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss")).default]
        }),
        __metadata("design:paramtypes", [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"]])
    ], StDemoLoggerComponent);
    return StDemoLoggerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7.js.map