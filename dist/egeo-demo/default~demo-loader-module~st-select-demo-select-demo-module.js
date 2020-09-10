(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-select-demo-select-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-select-demo/select-demo.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-select-demo/select-demo.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n\n      <st-select placeholder=\"Select option\" [options]=\"options\" [disabled]=\"disabled\" [keyBoardMove]=\"true\"\n                 [default]=\"options[2].value\">\n      </st-select>\n\n      <div class=\"separator\"></div>\n      <button class=\"button button-primary\" (click)=\"changeOptions()\">Change options</button>\n\n      <div class=\"separator\"></div>\n      <br><br>\n      <h1>TEMPLATE DRIVEN EXAMPLE</h1>\n      <form #templateDrivenForm=\"ngForm\" novalidate autocomplete=\"off\" class=\"col-md-3\">\n         <div class=\"form-group\">\n\n            <st-select stCheckValidations errorMessage=\"This field is required\" label=\"Option 1\"\n                       [forceValidations]=\"true\" [formControl]=\"formControl\" tooltip=\"This field is required\"\n                       placeholder=\"Select option\" [options]=\"options\" name=\"option1\" required id=\"test\"\n                       (select)=\"onSelect($event)\" class=\"st-form-field\">\n            </st-select>\n            <div class=\"separator\"></div>\n\n\n            Disabled select\n\n            <st-select stCheckValidations label=\"Option 1\" tooltip=\"Disabled field\" placeholder=\"Select option\"\n                       [options]=\"options\" [(ngModel)]=\"model.option1\"\n                       name=\"option1\" required [disabled]=\"true\" id=\"disabled-test\" (select)=\"onSelect($event)\"\n                       class=\"st-form-field\">\n            </st-select>\n\n            <button class=\"button button-primary\"><span>Submit</span></button>\n\n            <div class=\"separator\"></div>\n\n            <p>Form value: {{ templateDrivenForm.value | json }}</p>\n            <p>Form status: {{ templateDrivenForm.disabled ? 'DISABLED' : templateDrivenForm.valid ? 'VALID' : 'INVALID'\n               }}</p>\n         </div>\n      </form>\n\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n      <div class=\"separator\"></div>\n\n      <h1>MODEL DRIVEN / REACTIVE EXAMPLE</h1>\n      <form [formGroup]=\"reactiveForm\" novalidate autocomplete=\"off\" class=\"col-md-3\">\n         <div class=\"form-group\">\n\n            <st-select stCheckValidations formControlName=\"option1\" placeholder=\"Select option\" [options]=\"options\"\n                       class=\"st-form-field\">\n            </st-select>\n         </div>\n\n         <div class=\"separator\"></div>\n\n         <button class=\"button button-primary\"><span>Submit</span></button>\n\n         <div class=\"separator\"></div>\n\n         <p>Form value: {{ reactiveForm.value | json }}</p>\n         <p>Form status: {{ reactiveForm.status | json }}</p>\n      </form>\n\n      <br><br>\n      <h1>TEMPLATE DRIVEN EXAMPLE</h1>\n      <br>\n      <button class=\"button button-primary\" (click)=\"changeDisabled()\">Change disable</button>\n\n      <div class=\"separator\"></div>\n\n      <h1>SEARCH OPTION EXAMPLE</h1>\n\n      <st-select [enabledSearcher]=\"true\" placeholder=\"Select option\" placeholderSearch=\"Search...\"\n                 [options]=\"filteredOptions\"\n                 [disabled]=\"disabled\"\n                 (search)=\"onSearch($event)\">\n      </st-select>\n\n      <div class=\"separator\"></div>\n\n      <h1>SCROLL WITH SPINNER OPTION</h1>\n      <st-select [enabledSearcher]=\"true\" placeholder=\"Select option\" placeholderSearch=\"Search...\" [options]=\"filteredOptions\"\n                 [disabled]=\"disabled\" [isLoading]=\"isLoading\" (scrollAtBottom)=\"onScrollAtBottom()\" (search)=\"onSearch($event)\">\n      </st-select>\n\n      <div class=\"separator\"></div>\n\n      <h1>WITHOUT FORM</h1>\n\n      <st-select class=\"st-pagination__selector\"\n         [options]=\"options\"\n         label=\"Select option\"\n         [selected]=\"options[1]\"\n         [attr.id]=\"selectId\"\n         (select)=\"onChangePerPage($event)\"></st-select>\n      <br>\n      <br>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.module.ts ***!
  \************************************************************/
/*! exports provided: StSelectDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSelectDemoModule", function() { return StSelectDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _select_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-demo */ "./src/app/demos/st-select-demo/select-demo.ts");
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





var StSelectDemoModule = /** @class */ (function () {
    function StSelectDemoModule() {
    }
    StSelectDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDemoGeneratorModule"].withComponents({ components: [_select_demo__WEBPACK_IMPORTED_MODULE_4__["SelectDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDocsModule"]
            ],
            declarations: [_select_demo__WEBPACK_IMPORTED_MODULE_4__["SelectDemoComponent"]]
        })
    ], StSelectDemoModule);
    return StSelectDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.scss":
/*!*******************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nh1 {\n  font-family: 'Nunito Sans';\n  font-weight: bold;\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px; }\np {\n  font-family: 'Nunito Sans';\n  margin: 0;\n  padding: 0; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\nst-select {\n  width: 100%;\n  position: relative;\n  display: block; }\nform {\n  border: 1px solid black;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlbGVjdC1kZW1vL3NlbGVjdC1kZW1vLnNjc3MiLCIvaG9tZS9jcGV0aW5hbC9kYXRvcy93cy9waXQvY3BldGluYWwvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zZWxlY3QtZGVtby9zZWxlY3QtZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUNBRjtFQUNHLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7QUFHcEI7RUFDRywwQkFBMEI7RUFDMUIsU0FBUztFQUNULFVBQ0gsRUFBQTtBQUVBO0VBQ0csY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUduQjtFQUNHLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBR2pCO0VBQ0csdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zZWxlY3QtZGVtby9zZWxlY3QtZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaDEge1xuICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7IH1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuc3Qtc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuZm9ybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5oMSB7XG4gICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgIHBhZGRpbmc6IDA7XG4gICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxucCB7XG4gICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcbiAgIG1hcmdpbjogMDtcbiAgIHBhZGRpbmc6IDBcbn1cblxuLnNlcGFyYXRvciB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIG1hcmdpbjogMTBweDtcbiAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbnN0LXNlbGVjdCB7XG4gICB3aWR0aDogMTAwJTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5mb3JtIHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.ts ***!
  \*****************************************************/
/*! exports provided: SelectDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoComponent", function() { return SelectDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
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



var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent(_fb, _cd) {
        this._fb = _fb;
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-select-demo/select-demo.html',
            ts: 'demo/st-select-demo/select-demo.ts',
            component: 'lib/st-select/st-select.ts'
        };
        this.options = [];
        this.filteredOptions = [];
        this.model = {
            option1: null
        };
        this.disabled = false;
        this.isLoading = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.formControl.markAsDirty();
        this.options.push({ label: 'Select an option', value: undefined });
        for (var i = 0; i < 10; i++) {
            this.options.push({
                label: "option-" + i,
                value: i
            });
        }
        this.model.option1 = 3;
        this.options[5].selected = true;
        this.filteredOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.options);
        this.reactiveForm = this._fb.group({
            option1: [this.model.option1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SelectDemoComponent.prototype.onSelect = function (value) {
        if (value === undefined) {
            this.model.option1 = undefined;
        }
    };
    SelectDemoComponent.prototype.changeDisabled = function () {
        var controlName = 'option1';
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.reactiveForm.get(controlName).disable();
            this.templateDrivenForm.controls[controlName].disable();
        }
        else {
            this.reactiveForm.get(controlName).enable();
            this.templateDrivenForm.controls[controlName].enable();
        }
    };
    SelectDemoComponent.prototype.onScrollAtBottom = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.options = __spread(_this.options, _this.generateOptions(_this.options.length));
            _this.isLoading = false;
            _this._cd.markForCheck();
        }, 2000);
    };
    SelectDemoComponent.prototype.generateOptions = function (optionsLength) {
        if (optionsLength === void 0) { optionsLength = 0; }
        return Array.from(Array(10)).map(function (_value, i) { return ({
            label: "Option " + (optionsLength + i),
            value: "option-" + (optionsLength + i)
        }); });
    };
    SelectDemoComponent.prototype.onSearch = function (search) {
        this.filteredOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.options);
        this.filteredOptions.forEach(function (option) { return option.selected = false; });
        if (search) {
            this.filteredOptions = this.filteredOptions.filter(function (option) { return option.label.indexOf(search) !== -1; });
        }
        this._cd.markForCheck();
    };
    SelectDemoComponent.prototype.changeOptions = function () {
        this.options = [];
        for (var i = 0; i < 10; i++) {
            this.options.push({
                label: "new options-" + i,
                value: (10 + i)
            });
        }
    };
    SelectDemoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateDrivenForm', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SelectDemoComponent.prototype, "templateDrivenForm", void 0);
    SelectDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./select-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-select-demo/select-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./select-demo.scss */ "./src/app/demos/st-select-demo/select-demo.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-select-demo-select-demo-module.js.map