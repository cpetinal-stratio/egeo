(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-dynamic-table-demo-st-dynamic-table-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/cpetinal/datos/ws/pit/cpetinal/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"demo-layout\">\n         <p class=\"introduction\">Dynamic tables are structured grids of information created automatically using a json\n            schema to define their structures</p>\n         <span class=\"separator\"></span>\n         <h1 class=\"title\">Design and behaviour</h1>\n         <p class=\"paragraph\">\n            Dynamic tables are based on egeo table component so they have the same design and behaviour.\n         </p>\n         <h1 class=\"title\">Theme customization</h1>\n         <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\n      </div>\n\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\n\n      <h2 class=\"subtitle\">Selectable and filterable tables</h2>\n      <div class=\"row\">\n         <div class=\"col-sm-12 col-lg-12 col-xs-12\">\n            <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                              [items]=\"users\"\n                              [sortable]=\"false\"\n                              [filterable]=\"true\"\n                              [selectable]=\"true\"\n                              [selectableAll]=\"true\"\n                              [hasHoverMenu]=\"true\"\n                              [activeHoverMenu]=\"activeHoverMenuPosition[0]\"\n                              (selectAll)=\"onSelectAll($event, 0)\"\n                              (selectRow)=\"onSelectRow($event, 0)\"\n                              (showHoverMenu)=\"onShowHoverMenu($event, 0)\">\n               <st-dropdown-menu st-dynamic-table-hover-menu\n                                 class=\"row-menu\"\n                                 [items]=\"rowActions\"\n                                 [active]=\"activeHoverMenuPosition[0] !== undefined\"\n                                 [visualMode]=\"1\">\n               </st-dropdown-menu>\n            </st-dynamic-table>\n         </div>\n      </div>\n\n      <h2 class=\"subtitle\">Sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific\n         fields as sortable using <b>uiDefinition</b> input. In this example, we have marked \"company\" column as not\n         sortable.</p>\n      <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                        [items]=\"sortedUsers\"\n                        [sortable]=\"true\"\n                        [filterable]=\"false\"\n                        [currentOrder]=\"currentOrder\"\n                        [hasHoverMenu]=\"true\"\n                        [uiDefinitions]=\"{company: {sortable: false}}\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[1]\"\n                        (changeOrder)=\"onSortTable($event)\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 1)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[1] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Filterable and sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\n         fields as filterable </p>\n      <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                        [items]=\"sortedUsers\"\n                        [sortable]=\"true\"\n                        [filterable]=\"true\"\n                        [hasHoverMenu]=\"true\"\n                        [currentOrder]=\"currentOrder\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[2]\"\n                        (changeOrder)=\"onSortTable($event)\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 2)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[2] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Filterable table with custom template</h2>\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\n         fields as filterable </p>\n\n      <ng-template #filterContent>\n         <div>\n            <st-checkbox name=\"nameA\" value=\"1\">\n               <span>Option A</span>\n            </st-checkbox>\n            <st-checkbox name=\"nameB\" value=\"2\">\n               <span>Option B</span>\n            </st-checkbox>\n            <st-checkbox name=\"nameC\" value=\"3\">\n               <span>Option C</span>\n            </st-checkbox>\n         </div>\n         <button class=\"button button-primary small st-table__popover-button\"\n                 (click)=\"onFilter(index); checkIcon(index)\">\n            <span>Apply</span>\n         </button>\n      </ng-template>\n      <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                        [items]=\"sortedUsers\"\n                        [sortable]=\"true\"\n                        [filterable]=\"true\"\n                        [hasHoverMenu]=\"true\"\n                        [currentOrder]=\"currentOrder\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[3]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (changeOrder)=\"onSortTable($event)\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 3)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[3] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Table with fixed header</h2>\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify\n         to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\n\n      <st-dynamic-table class=\"fixed-header-table\"\n                        [jsonSchema]=\"jsonSchema\"\n                        [items]=\"users\"\n                        [hasHoverMenu]=\"true\"\n                        [fixedHeader]=\"true\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n\n      <h2 class=\"subtitle\">Table with fixed header and sticky hover menu</h2>\n\n      <st-dynamic-table class=\"fixed-header-table\"\n                        style=\"max-width: 60%\"\n                        [jsonSchema]=\"jsonSchema\"\n                        [items]=\"users\"\n                        [hasHoverMenu]=\"true\"\n                        [fixedHeader]=\"true\"\n                        [stickyHoverMenu]=\"true\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n\n      <h2 class=\"subtitle\">Table without header</h2>\n      <st-dynamic-table\n         [jsonSchema]=\"jsonSchema\"\n         [items]=\"users\"\n         [hasHoverMenu]=\"true\"\n         [header]=\"false\"\n         [activeHoverMenu]=\"activeHoverMenuPosition[5]\"\n         [templateContentFilter]=\"filterContent\"\n         (showHoverMenu)=\"onShowHoverMenu($event, 5)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[5] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Table with custom class 'separated rows'</h2>\n      <st-dynamic-table\n         [jsonSchema]=\"jsonSchema\"\n         [items]=\"users\"\n         [hasHoverMenu]=\"true\"\n         [header]=\"true\"\n         [sortable]=\"false\"\n         customClasses=\"separated-rows\"\n         [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n         [templateContentFilter]=\"filterContent\"\n         (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Table with custom css definitions</h2>\n      <st-dynamic-table\n         [jsonSchema]=\"jsonSchema\"\n         [uiDefinitions]=\"uiDefinition\"\n         [currentOrder]=\"currentOrder\"\n         [items]=\"sortedUsers\"\n         [hasHoverMenu]=\"true\"\n         [header]=\"true\"\n         [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n         [templateContentFilter]=\"filterContent\"\n         (showHoverMenu)=\"onShowHoverMenu($event, 4)\"\n         (changeOrder)=\"onSortTable($event)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"row-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Tables with Fks and groups</h2>\n      <div class=\"row\">\n         <div class=\"col-sm-12 col-lg-12 col-xs-12\">\n            <st-dynamic-table [jsonSchema]=\"jsonSchemaFk\" [items]=\"fks\" [sortable]=\"false\" [filterable]=\"true\"\n                              [selectable]=\"true\" [selectableAll]=\"true\" [hasHoverMenu]=\"true\"\n                              [activeHoverMenu]=\"activeHoverMenuPosition[0]\"\n                              (selectAll)=\"onSelectAll($event, 0)\" (selectRow)=\"onSelectRow($event, 0)\"\n                              (showHoverMenu)=\"onShowHoverMenu($event, 0)\">\n               <st-dropdown-menu st-dynamic-table-hover-menu class=\"row-menu\" [items]=\"rowActions\"\n                                 [active]=\"activeHoverMenuPosition[0] !== undefined\" [visualMode]=\"1\">\n               </st-dropdown-menu>\n            </st-dynamic-table>\n         </div>\n      </div>\n   </section>\n\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nst-table {\n  position: relative; }\n.st-table__popover-button {\n  margin-top: 20px;\n  width: 100%; }\n.row-menu {\n  position: absolute;\n  right: 24px;\n  bottom: 14px; }\n.fixed-header-table {\n  width: 100%;\n  display: flex;\n  height: 200px; }\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 1.143rem;\n  line-height: 4px;\n  vertical-align: top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 150px; }\n.subtitle {\n  font-weight: 400;\n  font-size: 1.429rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.714rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding: 26px 0;\n  display: inline-block; }\n.paragraph {\n  font-weight: normal;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.571rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWR5bmFtaWMtdGFibGUtZGVtby9zdC1keW5hbWljLXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9jcGV0aW5hbC9kYXRvcy93cy9waXQvY3BldGluYWwvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1keW5hbWljLXRhYmxlLWRlbW8vc3QtZHluYW1pYy10YWJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19pbmRleC5zY3NzIiwiL2hvbWUvY3BldGluYWwvZGF0b3Mvd3MvcGl0L2NwZXRpbmFsL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2NwZXRpbmFsL2RhdG9zL3dzL3BpdC9jcGV0aW5hbC9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fZm9udHMuc2NzcyIsIi9ob21lL2NwZXRpbmFsL2RhdG9zL3dzL3BpdC9jcGV0aW5hbC9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLGtCQUFrQixFQUFBO0FBSWxCO0VBQ0csZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUlqQjtFQUNHLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Y7RUFDRyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWEsRUFBQTtBQUdoQjtFQUNHLGVBQWU7RUFDZixtQkdieUI7RUhjekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3RCO0VBQ0csaUJBQWlCLEVBQUE7QUFJakI7RUFDRyxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBSW5CO0VBQ0csZ0JBQWdCO0VBQ2hCLG1CRzdCeUI7RUg4QnpCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJHbkIyQjtFSG9CM0Isc0JBQXNCO0VBQ3RCLGNFUGM7RUZRZCxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7QUFHeEI7RUFDRyxtQkFBbUI7RUFDbkIsbUJHMUN5QjtFSDJDekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkdoQzJCO0VIaUMzQixzQkFBc0I7RUFDdEIsY0VuQmM7RUZvQmQsb0JBQW9CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZHluYW1pYy10YWJsZS1kZW1vL3N0LWR5bmFtaWMtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbnN0LXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zdC10YWJsZV9fcG9wb3Zlci1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucm93LW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNHB4O1xuICBib3R0b206IDE0cHg7IH1cblxuLmZpeGVkLWhlYWRlci10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIwMHB4OyB9XG5cbnRkID4gLmljb24tZWxsaXBzaXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xNDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLmJ1dHRvbi10b29sYmFyIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cblxuLnRhYmxlLS1maXhlZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1MHB4OyB9XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS40MjlyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIHBhZGRpbmc6IDI2cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5wYXJhZ3JhcGgge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMjg2cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41NzFyZW07XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMTExMTExO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG5zdC10YWJsZSB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdC10YWJsZSB7XG4gICAmX19wb3BvdmVyLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG59XG5cbi5yb3ctbWVudSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICByaWdodDogMjRweDtcbiAgIGJvdHRvbTogMTRweDtcbn1cblxuLmZpeGVkLWhlYWRlci10YWJsZSB7XG4gICB3aWR0aDogMTAwJTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBoZWlnaHQ6IDIwMHB4O1xufVxuXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE2O1xuICAgbGluZS1oZWlnaHQ6IDRweDtcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5idXR0b24tdG9vbGJhciB7XG4gICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnRhYmxlIHtcbiAgICYtLWZpeGVkLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgIH1cbn1cblxuLnN1YnRpdGxlIHtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0yMDtcbiAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTI0O1xuICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgIGNvbG9yOiAkbmV1dHJhbDtcbiAgIHBhZGRpbmc6IDI2cHggMDtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBhcmFncmFwaCB7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMTg7XG4gICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgIGxpbmUtaGVpZ2h0OiAkZWdlby1saW5lLWhlaWdodC0yMjtcbiAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICBjb2xvcjogJG5ldXRyYWw7XG4gICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xuJGFjdGlvbi0xMDogI0U2RjFGQyAhZGVmYXVsdDtcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xuJGFjdGlvbi04MDogIzM5OTFFNSAhZGVmYXVsdDtcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNlOlxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xuJHNwYWNlLTU6ICNGM0Y2RjggIWRlZmF1bHQ7XG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XG4kc3BhY2UtMzA6ICNBQUI3QzQgIWRlZmF1bHQ7XG4kc3BhY2UtNDA6ICM5QUE5QjggIWRlZmF1bHQ7XG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XG4kc3BhY2UtNzA6ICM2QzdCOEIgIWRlZmF1bHQ7XG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xuXG4vLyBzdWNjZXNzOlxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMDogI0U3RjdGMSAhZGVmYXVsdDtcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcblxuLy8gd2FybmluZzpcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xuJHdhcm5pbmctMTA6ICNGREYyRTcgIWRlZmF1bHQ7XG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XG4kd2FybmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XG5cbi8vIGVycm9yOlxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBkZXByZWNhdGVkOlxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XG4kZWdlby1mb250LXNpemUtMTA6IDAuNzE0cmVtICFkZWZhdWx0OyAvLyAxMHB4XG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XG4kZWdlby1mb250LXNpemUtMTQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XG4kZWdlby1mb250LXNpemUtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XG4kZWdlby1mb250LXNpemUtNDg6IDMuNDI5cmVtICFkZWZhdWx0OyAvLyA0OHB4XG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XG5cbi8vLyBsaW5lLWhlaWdodCAoYmFzZSAxNCk6XG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcblxuLy8gZGVwcmVjYXRlZDpcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXG5cbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweCAoYmFzZSAxNilcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gei1pbmRleFxuXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XG4kbWVudS16LWluZGV4OiA3NTAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.ts ***!
  \********************************************************************************/
/*! exports provided: StDynamicTableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDynamicTableDemoComponent", function() { return StDynamicTableDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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



var StDynamicTableDemoComponent = /** @class */ (function () {
    function StDynamicTableDemoComponent(_cd) {
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-table-demo/st-table-demo.component.html',
            ts: 'demo/st-table-demo/st-table-demo.component.ts',
            component: 'lib/st-table/st-table.component.ts'
        };
        this.jsonSchema = {
            '$schema': 'http://json-schema.org/schema#',
            'title': 'User Table',
            'type': 'object',
            'description': 'User properties',
            'optional': true,
            'properties': {
                'id': {
                    'title': 'Id',
                    'description': 'User identification',
                    'type': 'string'
                },
                'name': {
                    'title': 'Name',
                    'description': 'User name',
                    'type': 'string'
                },
                'lastName': {
                    'title': 'Last Name',
                    'description': 'User last name',
                    'type': 'string'
                },
                'phone': {
                    'title': 'Sub executor',
                    'type': 'string',
                    'description': 'Spark executor properties'
                },
                'company': {
                    'title': 'Company',
                    'type': 'string',
                    'description': 'User company',
                    '$ref': '/companies/names'
                },
                'status': {
                    'title': 'Status',
                    'type': 'string',
                    'description': 'User status',
                    'enum': ['Employed', 'Free', 'Busy']
                }
            }
        };
        this.jsonSchemaFk = {
            '$schema': 'http://json-schema.org/schema#',
            'title': 'Fks Table',
            'type': 'object',
            'description': 'Fks properties',
            'optional': true,
            'properties': {
                'id': {
                    'title': 'Identificador',
                    'description': 'Identificador'
                },
                'codigo': {
                    'title': 'Codigo',
                    'description': 'Codigo'
                },
                'tipo_id': {
                    'title': 'Tipo User Fk',
                    'description': 'Tipo User',
                    'fk': {
                        'table': 'user.bank_user',
                        'field': 'id'
                    },
                    'group_field': {
                        'name': 'tipo_id - descripcion'
                    }
                },
                'descripcion': {
                    'title': 'Descripción',
                    'description': 'Descripción'
                }
            }
        };
        this.uiDefinition = {
            company: { sortable: false },
            id: {
                styles: {
                    width: '25%'
                }
            },
            status: {
                styles: {
                    color: '#DF2935'
                }
            }
        };
        this.users = [
            {
                id: '4545-df56-s341',
                name: 'Antonio',
                lastName: 'López',
                phone: 60052520145,
                company: 'Stratio',
                status: 'Employed'
            },
            {
                id: '4545-df56-s342',
                name: 'Marina',
                lastName: 'Lara',
                phone: 600456520145,
                company: 'Stratio',
                status: 'Free'
            },
            {
                id: '4545-df56-s343',
                name: 'Álvaro',
                lastName: 'García',
                phone: 60052320145,
                company: 'Stratio',
                status: 'Busy'
            },
            {
                id: '4545-df56-s344',
                name: 'Marina',
                lastName: 'González',
                phone: 600455640145,
                company: 'Stratio',
                status: 'Employed'
            }, {
                id: '4545-df56-s345',
                name: 'Pepe',
                lastName: 'Guerrero',
                phone: 6005276845,
                company: 'Stratio',
                status: 'Employed'
            },
            {
                id: '4545-df56-s346',
                name: 'María',
                lastName: 'Rodríguez',
                phone: 60065620145,
                company: 'Stratio',
                status: 'Busy'
            }
        ];
        this.fks = [
            {
                codigo: 'K',
                descripcion: 'admin',
                id: 6,
                tipo_id: 6
            },
            {
                codigo: 'W',
                descripcion: 'read',
                id: 14,
                tipo_id: 6
            },
            {
                codigo: 'D',
                descripcion: 'write',
                id: 2,
                tipo_id: 2
            },
            {
                codigo: 'H',
                descripcion: 'admin',
                id: 4,
                tipo_id: 4
            },
            {
                codigo: 'I',
                descripcion: 'read',
                id: 5,
                tipo_id: 5
            },
            {
                codigo: 'P',
                descripcion: 'write',
                id: 8,
                tipo_id: 8
            },
            {
                codigo: 'C',
                descripcion: 'special',
                id: 1,
                tipo_id: 1
            },
            {
                codigo: 'X',
                descripcion: 'read',
                id: 16,
                tipo_id: 13
            }
        ];
        this.sortedUsers = [];
        this.selectedCheckboxes = [[], []];
        this.statusFilter = [];
        this.selected = [];
        this.rowActions = [
            {
                value: 'edit',
                icon: 'edit-icon',
                label: 'Edit'
            }, {
                value: 'remove',
                icon: 'trash-icon',
                label: 'Delete',
                iconColor: 'red',
                labelColor: 'red'
            }
        ];
        this.activeHoverMenuPosition = [];
        this.cssProperties = [
            {
                name: '--egeo-st-dynamic-table__hover-button--font-size',
                description: 'Hover button font size',
                default: '$egeo-font-size-20'
            },
            {
                name: '--egeo-st-table__header--font-size',
                description: 'Header font size',
                default: '$egeo-font-size-12'
            },
            {
                name: '--egeo-st-table__header--font-weight',
                description: 'Header font weight',
                default: '600'
            },
            {
                name: '--egeo-st-table__header--text-transform',
                description: 'Header text transform',
                default: 'initial'
            },
            {
                name: '--egeo-st-table__header--letter-spacing',
                description: 'Header letter spacing',
                default: 'normal'
            },
            {
                name: '--egeo-st-table__header--text-align',
                description: 'Header text align',
                default: 'left'
            },
            {
                name: '--egeo-st-table__header--border-bottom',
                description: 'Header border bottom color',
                default: '$space-50'
            },
            {
                name: '--egeo-st-table__row--font-size',
                description: 'Row font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-table__row--hover--bg-color',
                description: 'Row background color on hover',
                default: '$action-10'
            },
            {
                name: '--egeo-st-table__row--border-bottom',
                description: 'Row border bottom color',
                default: '$action-10'
            },
            {
                name: '--egeo-st-table__row--selected--bg-color',
                description: 'Selected row background color',
                default: '$space-5'
            }
        ];
        this.sortedUsers = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.users);
    }
    StDynamicTableDemoComponent.prototype.ngOnInit = function () {
    };
    // Selectable tables
    StDynamicTableDemoComponent.prototype.onSelectRow = function (event, tablePosition) {
        if (!this.selected[tablePosition]) {
            this.selected[tablePosition] = [];
        }
        this.selected[tablePosition][event.row] = event.checked;
    };
    StDynamicTableDemoComponent.prototype.onSelectAll = function (selected, tablePosition) {
        this.selectedCheckboxes[tablePosition] = [];
        for (var i = 0; i < this.users.length; ++i) {
            this.selectedCheckboxes[tablePosition].push(selected);
        }
    };
    StDynamicTableDemoComponent.prototype.onShowHoverMenu = function (row, tablePosition) {
        this.activeHoverMenuPosition[tablePosition] = this.activeHoverMenuPosition[tablePosition] === row ? undefined : row;
        this._cd.markForCheck();
    };
    // Sortable tables
    StDynamicTableDemoComponent.prototype.onSortTable = function (order) {
        this.currentOrder = order;
        var reverseConst = order.type === _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["ORDER_TYPE"].ASC ? 1 : -1;
        this.sortedUsers = __spread(this.sortedUsers).sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
    };
    StDynamicTableDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StDynamicTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-dynamic-table-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-dynamic-table-demo.component.scss */ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StDynamicTableDemoComponent);
    return StDynamicTableDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StDynamicTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDynamicTableDemoModule", function() { return StDynamicTableDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-dynamic-table-demo.component */ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.ts");
/* harmony import */ var _egeo_src_lib_st_dynamic_table_st_dynamic_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../egeo/src/lib/st-dynamic-table/st-dynamic-table.module */ "../egeo/src/lib/st-dynamic-table/st-dynamic-table.module.ts");
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






var StDynamicTableDemoModule = /** @class */ (function () {
    function StDynamicTableDemoModule() {
    }
    StDynamicTableDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _egeo_src_lib_st_dynamic_table_st_dynamic_table_module__WEBPACK_IMPORTED_MODULE_4__["StDynamicTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StCheckboxModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StDynamicTableDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StToggleButtonsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDropdownMenuModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__["CssPropertyTableModule"]
            ],
            declarations: [_st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StDynamicTableDemoComponent"]]
        })
    ], StDynamicTableDemoModule);
    return StDynamicTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-dynamic-table-demo-st-dynamic-table-demo-module.js.map