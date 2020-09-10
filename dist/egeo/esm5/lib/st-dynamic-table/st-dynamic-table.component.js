/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dynamic-table/st-dynamic-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { StEgeo, StRequired } from '../decorators/require-decorators';
import { Order } from '../st-table/shared/order';
import { StDynamicTableUtils } from './utils/st-dynamic-table.utils';
import { StTableIconClasses } from '../st-table/st-table.interface';
/**
 * \@description {Component} [Dynamic Table]
 *
 * The table component has been designed to be able to create a table deducing its columns using a json schema
 *
 * * \@model
 *
 *   [StDynamicTableHeader] {./st-dynamic-table.model.ts#StDynamicTableHeader}
 *   [StDynamicTableUISpecification] {./st-dynamic-table.model.ts#StDynamicTableUISpecification}
 *   [StDynamicTableUserInterface] {./st-dynamic-table.model.ts#StDynamicTableUserInterface}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-dynamic-table [jsonSchema]="jsonSchema"
 *    [items]="sortedUsers"
 *    [sortable]="true"
 *    [filterable]="true"
 *    [hasHoverMenu]="true"
 *    [currentOrder]="currentOrder"
 *    [activeHoverMenu]="activeHoverMenuPosition"
 *    [templateContentFilter]="filterContent"
 *    (changeOrder)="onSortTable($event)"
 *    (showHoverMenu)="onShowHoverMenu($event)">
 *        <st-dropdown-menu st-dynamic-table-hover-menu
 *          class="hover-menu"
 *          [items]="rowActions"
 *          [active]="activeHoverMenuPosition[3] !== undefined"
 *          [visualMode]="1">
 *       </st-dropdown-menu>
 * </st-dynamic-table>
 * ```
 *
 */
var StDynamicTableComponent = /** @class */ (function () {
    function StDynamicTableComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [header=true] Boolean to show or hide the header
         */
        this.header = true;
        /**
         * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
         * the new "sortable" field inside stTableHeader model
         */
        this.sortable = true;
        /**
         * \@Input {boolean} [filterable=false] Boolean to make filterable the table, To enable filtering of columns use
         * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
         */
        this.filterable = false;
        /**
         * \@Input {boolean} [selectable=false] Boolean to show or hide a checkboxes in the first cell of rows
         */
        this.selectable = false;
        /**
         * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
         *  deselect all rows
         */
        this.selectableAll = false;
        /**
         * \@Input {boolean[]} [selected=''] Boolean list to indicate if a row is selected
         */
        this.selected = [];
        /**
         * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
         */
        this.fixedHeader = false;
        /**
         * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
         */
        this.stickyHoverMenu = false;
        /**
         * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
         */
        this.iconClasses = new StTableIconClasses();
        /**
         * \@Input {boolean[]} [statusFilter=] List of status filter by column, needed with templateContentFilter
         */
        this.statusFilter = [];
        /**
         * \@Input {string} [hoverButton='icon-ellipsis'] It specifies the icon class of the hover button displayed when user puts mouse over a row
         */
        this.hoverButton = 'icon-ellipsis';
        /**
         * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
         */
        this.changeOrder = new EventEmitter();
        /**
         * \@Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
         * all rows
         */
        this.selectAll = new EventEmitter();
        /**
         * \@Output {EventEmitter<StTableHeader[]>} [fields=] Event emitted when header fields are being loaded
         */
        this.updateFields = new EventEmitter();
        /**
         * \@Output {string} [clickFilter=] Event emitted when using filters custom template
         */
        this.clickFilter = new EventEmitter();
        /**
         * \@Output {StTableHeader[]} [selectFilters=] Event emitted  when user interacts with filter button without a custom template
         */
        this.selectFilters = new EventEmitter();
        /**
         * \@Output {EventEmitter<number} [showHoverMenu=] Event emitted when user clicks on hover button of a row
         */
        this.showHoverMenu = new EventEmitter();
        /**
         * \@Output {Object(checked: boolean, row: number)} [selectRow=] Event emitted when user clicks on checkbox of a row
         */
        this.selectRow = new EventEmitter();
        /**
         * \@Output {Object(checked: boolean, row: number)} [clickCell=] Event emitted when user clicks on checkbox of a row
         */
        this.clickCell = new EventEmitter();
        /**
         * \@Output {StDynamicTableFkEvent} [clickFk=] Event emitted when user clicks on Fk cell
         */
        this.clickFk = new EventEmitter();
        this.fields = [];
        this._fkSeparator = ' - ';
    }
    Object.defineProperty(StDynamicTableComponent.prototype, "templateContentFilter", {
        /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
        get: /**
         * \@Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content
         * @return {?}
         */
        function () {
            return this._templateContentFilter;
        },
        set: /**
         * @param {?} _templateRef
         * @return {?}
         */
        function (_templateRef) {
            this._templateContentFilter = _templateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDynamicTableComponent.prototype, "jsonSchema", {
        /** @Input {JSONSchema4} [jsonSchema=] Json schema to define its structure */
        get: /**
         * \@Input {JSONSchema4} [jsonSchema=] Json schema to define its structure
         * @return {?}
         */
        function () {
            return this._jsonSchema;
        },
        set: /**
         * @param {?} _jsonSchema
         * @return {?}
         */
        function (_jsonSchema) {
            this._jsonSchema = _jsonSchema;
            this._manageFieldsUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDynamicTableComponent.prototype, "uiDefinitions", {
        /** @Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field */
        get: /**
         * \@Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field
         * @return {?}
         */
        function () {
            return this._uiDefinitions;
        },
        set: /**
         * @param {?} _uiDefinitions
         * @return {?}
         */
        function (_uiDefinitions) {
            this._uiDefinitions = _uiDefinitions;
            this._manageFieldsUpdate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selectedFilter
     * @return {?}
     */
    StDynamicTableComponent.prototype.onFilterClick = /**
     * @param {?} selectedFilter
     * @return {?}
     */
    function (selectedFilter) {
        this.clickFilter.emit(selectedFilter);
    };
    /**
     * @param {?} order
     * @return {?}
     */
    StDynamicTableComponent.prototype.onChangeOrder = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        if (order) {
            this.changeOrder.emit(order);
        }
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    StDynamicTableComponent.prototype.onSelectAll = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.selectAll.emit(checked);
    };
    /**
     * @param {?} selectedFilters
     * @return {?}
     */
    StDynamicTableComponent.prototype.onSelectedFilters = /**
     * @param {?} selectedFilters
     * @return {?}
     */
    function (selectedFilters) {
        this.selectFilters.emit(selectedFilters);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    StDynamicTableComponent.prototype.onShowHoverMenu = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.showHoverMenu.emit(row);
    };
    /**
     * @return {?}
     */
    StDynamicTableComponent.prototype.onLeaveRow = /**
     * @return {?}
     */
    function () {
        this.showHoverMenu.emit(undefined);
    };
    /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.onClickFk = /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        this.clickFk.emit({
            fk: field.fk,
            value: item[field.id]
        });
    };
    /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.getCellContent = /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        if (field.group) {
            /** @type {?} */
            var groupLabel = field.group.split(this._fkSeparator)
                .map((/**
             * @param {?} _groupKey
             * @return {?}
             */
            function (_groupKey) { return item[_groupKey]; }))
                .join(this._fkSeparator);
            return groupLabel.length > this._fkSeparator.length ? groupLabel : item[field.id];
        }
        return item[field.id];
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.getCellClasses = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var classes = {};
        if (field.reference) {
            classes.clickable = true;
        }
        return classes;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.getCellStyles = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var uiDefinition = this.uiDefinitions && this.uiDefinitions[field.id];
        return uiDefinition && uiDefinition.styles;
    };
    /**
     * @param {?} checkboxEvent
     * @param {?} row
     * @return {?}
     */
    StDynamicTableComponent.prototype.onSelectRow = /**
     * @param {?} checkboxEvent
     * @param {?} row
     * @return {?}
     */
    function (checkboxEvent, row) {
        this.selectRow.emit({ checked: checkboxEvent.checked, row: row });
    };
    /**
     * @param {?} row
     * @param {?} fieldId
     * @param {?} label
     * @return {?}
     */
    StDynamicTableComponent.prototype.onClickCellLabel = /**
     * @param {?} row
     * @param {?} fieldId
     * @param {?} label
     * @return {?}
     */
    function (row, fieldId, label) {
        this.clickCell.emit({ row: row, fieldId: fieldId, label: label });
    };
    /**
     * @private
     * @return {?}
     */
    StDynamicTableComponent.prototype._manageFieldsUpdate = /**
     * @private
     * @return {?}
     */
    function () {
        this.fields = StDynamicTableUtils.getHeaderFieldsFromJsonSchema(this._jsonSchema, this._uiDefinitions);
        this.updateFields.emit(this.fields);
        this._cd.markForCheck();
    };
    StDynamicTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StDynamicTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-dynamic-table',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-table *ngIf=\"fields && fields.length && items\"\n          class=\"st-dynamic-table\"\n          [fields]=\"fields\"\n          [header]=\"header\"\n          [sortable]=\"sortable\"\n          [filterable]=\"filterable\"\n          [selectableAll]=\"selectableAll\"\n          [hasHoverMenu]=\"hasHoverMenu\"\n          [fixedHeader]=\"fixedHeader\"\n          [stickyHoverMenu]=\"stickyHoverMenu\"\n          [currentOrder]=\"currentOrder\"\n          [customClasses]=\"customClasses\"\n          [selectedAll]=\"selectedAll\"\n          [templateContentFilter]=\"templateContentFilter\"\n          [statusFilter]=\"statusFilter\"\n          [iconClasses]=\"iconClasses\"\n          (selectAll)=\"onSelectAll($event)\"\n          (changeOrder)=\"onChangeOrder($event)\"\n          (selectFilters)=\"onSelectedFilters($event)\"\n          (clickFilter)=\"onFilterClick($event)\">\n   <tbody>\n   <tr st-table-row *ngFor=\"let item of items; let row = index\" [selected]=\"selected[row]\" (mouseleave)=\"onLeaveRow()\">\n      <td st-table-cell st-table-row-content\n          *ngFor=\"let field of fields; let cell = index\"\n          [ngClass]=\"getCellClasses(fields[cell])\"\n          [ngStyle]=\"getCellStyles(fields[cell])\">\n\n         <st-checkbox *ngIf=\"selectable && !cell\"\n                      class=\"st-table__checkbox\"\n                      [checked]=\"selected[row]\"\n                      (change)=\"onSelectRow($event, row)\">\n         </st-checkbox>\n         <span (click)=\"onClickCellLabel(row, field.id, item[field.id])\" *ngIf=\"!field.fk; else hasFk\">\n            {{item[field.id]}}\n         </span>\n         <ng-template #hasFk>\n            <a (click)=\"onClickFk(item, field)\" class=\"hasFk\">{{getCellContent(item, field)}}</a>\n         </ng-template>\n      </td>\n      <td st-table-row-hover class=\"st-table-hover\" *ngIf=\"hasHoverMenu\">\n         <i class=\"icon {{hoverButton}}\" (click)=\"onShowHoverMenu(row)\"></i>\n         <ng-content select='[st-dynamic-table-hover-menu]' *ngIf=\"activeHoverMenu === row\"></ng-content>\n      </td>\n   </tr>\n   </tbody>\n</st-table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%}:host .st-dynamic-table{max-height:100%;min-width:100%}:host .st-table-hover>i{cursor:pointer}:host .hasFk{color:var(--egeo-theme-action,#0776df);cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    StDynamicTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StDynamicTableComponent.propDecorators = {
        items: [{ type: Input }],
        qaTag: [{ type: Input }],
        header: [{ type: Input }],
        sortable: [{ type: Input }],
        filterable: [{ type: Input }],
        selectable: [{ type: Input }],
        selectableAll: [{ type: Input }],
        selected: [{ type: Input }],
        currentOrder: [{ type: Input }],
        customClasses: [{ type: Input }],
        fixedHeader: [{ type: Input }],
        stickyHoverMenu: [{ type: Input }],
        iconClasses: [{ type: Input }],
        templateContentFilter: [{ type: Input }],
        statusFilter: [{ type: Input }],
        activeHoverMenu: [{ type: Input }],
        hasHoverMenu: [{ type: Input }],
        hoverButton: [{ type: Input }],
        selectedAll: [{ type: Input }],
        changeOrder: [{ type: Output }],
        selectAll: [{ type: Output }],
        updateFields: [{ type: Output }],
        clickFilter: [{ type: Output }],
        selectFilters: [{ type: Output }],
        showHoverMenu: [{ type: Output }],
        selectRow: [{ type: Output }],
        clickCell: [{ type: Output }],
        clickFk: [{ type: Output }],
        jsonSchema: [{ type: Input }],
        uiDefinitions: [{ type: Input }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], StDynamicTableComponent.prototype, "items", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], StDynamicTableComponent.prototype, "jsonSchema", null);
    /**
     * \@description {Component} [Dynamic Table]
     *
     * The table component has been designed to be able to create a table deducing its columns using a json schema
     *
     * * \@model
     *
     *   [StDynamicTableHeader] {./st-dynamic-table.model.ts#StDynamicTableHeader}
     *   [StDynamicTableUISpecification] {./st-dynamic-table.model.ts#StDynamicTableUISpecification}
     *   [StDynamicTableUserInterface] {./st-dynamic-table.model.ts#StDynamicTableUserInterface}
     *
     * \@example
     *
     * {html}
     *
     * ```
     * <st-dynamic-table [jsonSchema]="jsonSchema"
     *    [items]="sortedUsers"
     *    [sortable]="true"
     *    [filterable]="true"
     *    [hasHoverMenu]="true"
     *    [currentOrder]="currentOrder"
     *    [activeHoverMenu]="activeHoverMenuPosition"
     *    [templateContentFilter]="filterContent"
     *    (changeOrder)="onSortTable($event)"
     *    (showHoverMenu)="onShowHoverMenu($event)">
     *        <st-dropdown-menu st-dynamic-table-hover-menu
     *          class="hover-menu"
     *          [items]="rowActions"
     *          [active]="activeHoverMenuPosition[3] !== undefined"
     *          [visualMode]="1">
     *       </st-dropdown-menu>
     * </st-dynamic-table>
     * ```
     *
     */
    StDynamicTableComponent = tslib_1.__decorate([
        StEgeo(),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], StDynamicTableComponent);
    return StDynamicTableComponent;
}());
export { StDynamicTableComponent };
if (false) {
    /**
     * \@Input {Object([key: string]: any)[]} [items=''] Item list displayed as table rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.items;
    /**
     * \@Input {string} [qaTag=''] Prefix used to generate the id values for qa tests
     * @type {?}
     */
    StDynamicTableComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [header=true] Boolean to show or hide the header
     * @type {?}
     */
    StDynamicTableComponent.prototype.header;
    /**
     * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
     * the new "sortable" field inside stTableHeader model
     * @type {?}
     */
    StDynamicTableComponent.prototype.sortable;
    /**
     * \@Input {boolean} [filterable=false] Boolean to make filterable the table, To enable filtering of columns use
     * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
     * @type {?}
     */
    StDynamicTableComponent.prototype.filterable;
    /**
     * \@Input {boolean} [selectable=false] Boolean to show or hide a checkboxes in the first cell of rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectable;
    /**
     * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
     *  deselect all rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectableAll;
    /**
     * \@Input {boolean[]} [selected=''] Boolean list to indicate if a row is selected
     * @type {?}
     */
    StDynamicTableComponent.prototype.selected;
    /**
     * \@Input {Order} [currentOrder=''] It specifies what is the current order applied to the table
     * @type {?}
     */
    StDynamicTableComponent.prototype.currentOrder;
    /**
     * \@Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.customClasses;
    /**
     * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
     * @type {?}
     */
    StDynamicTableComponent.prototype.fixedHeader;
    /**
     * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
     * @type {?}
     */
    StDynamicTableComponent.prototype.stickyHoverMenu;
    /**
     * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
     * @type {?}
     */
    StDynamicTableComponent.prototype.iconClasses;
    /**
     * \@Input {boolean[]} [statusFilter=] List of status filter by column, needed with templateContentFilter
     * @type {?}
     */
    StDynamicTableComponent.prototype.statusFilter;
    /**
     * \@Input {number} [activeHoverMenu=] Position of the current active hover menu
     * @type {?}
     */
    StDynamicTableComponent.prototype.activeHoverMenu;
    /**
     * \@Input {boolean} [hasHoverMenu=] It specifies if a menu has to be displayed when user puts the mouse over
     * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
     * @type {?}
     */
    StDynamicTableComponent.prototype.hasHoverMenu;
    /**
     * \@Input {string} [hoverButton='icon-ellipsis'] It specifies the icon class of the hover button displayed when user puts mouse over a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.hoverButton;
    /**
     * \@Input {boolean} [selectedAll=] It specifies if all rows are selected
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectedAll;
    /**
     * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.changeOrder;
    /**
     * \@Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
     * all rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectAll;
    /**
     * \@Output {EventEmitter<StTableHeader[]>} [fields=] Event emitted when header fields are being loaded
     * @type {?}
     */
    StDynamicTableComponent.prototype.updateFields;
    /**
     * \@Output {string} [clickFilter=] Event emitted when using filters custom template
     * @type {?}
     */
    StDynamicTableComponent.prototype.clickFilter;
    /**
     * \@Output {StTableHeader[]} [selectFilters=] Event emitted  when user interacts with filter button without a custom template
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectFilters;
    /**
     * \@Output {EventEmitter<number} [showHoverMenu=] Event emitted when user clicks on hover button of a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.showHoverMenu;
    /**
     * \@Output {Object(checked: boolean, row: number)} [selectRow=] Event emitted when user clicks on checkbox of a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectRow;
    /**
     * \@Output {Object(checked: boolean, row: number)} [clickCell=] Event emitted when user clicks on checkbox of a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.clickCell;
    /**
     * \@Output {StDynamicTableFkEvent} [clickFk=] Event emitted when user clicks on Fk cell
     * @type {?}
     */
    StDynamicTableComponent.prototype.clickFk;
    /** @type {?} */
    StDynamicTableComponent.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._jsonSchema;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._uiDefinitions;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._templateContentFilter;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._fkSeparator;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHluYW1pYy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWR5bmFtaWMtdGFibGUvc3QtZHluYW1pYy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hJLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLDBCQUEwQixDQUFDO0FBRTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9KakUsaUNBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBL0ZqQyxXQUFNLEdBQVksSUFBSSxDQUFDOzs7OztRQUt2QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7OztRQUt6QixlQUFVLEdBQVksS0FBSyxDQUFDOzs7O1FBSTVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Ozs7O1FBSzVCLGtCQUFhLEdBQVksS0FBSyxDQUFDOzs7O1FBRy9CLGFBQVEsR0FBZSxFQUFFLENBQUM7Ozs7UUFTMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7Ozs7UUFFN0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7Ozs7UUFFakMsZ0JBQVcsR0FBd0IsSUFBSSxrQkFBa0IsRUFBRSxDQUFDOzs7O1FBYTVELGlCQUFZLEdBQWUsRUFBRSxDQUFDOzs7O1FBVzlCLGdCQUFXLEdBQVcsZUFB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R3ZEO1FBRFUsVUFBVSxFQUFFOzs7NkRBR3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBN0dTLHVCQUF1QjtRQVJuQyxNQUFNLEVBQUU7aURBOEdtQixpQkFBaUI7T0F0R2hDLHVCQUF1QixDQXNNbkM7SUFBRCw4QkFBQztDQUFBLElBQUE7U0F0TVksdUJBQXVCOzs7Ozs7SUFFakMsd0NBQXVEOzs7OztJQUd2RCx3Q0FBdUI7Ozs7O0lBRXZCLHlDQUFnQzs7Ozs7O0lBS2hDLDJDQUFrQzs7Ozs7O0lBS2xDLDZDQUFxQzs7Ozs7SUFJckMsNkNBQXFDOzs7Ozs7SUFLckMsZ0RBQXdDOzs7OztJQUd4QywyQ0FBbUM7Ozs7O0lBR25DLCtDQUE2Qjs7Ozs7SUFHN0IsZ0RBQStCOzs7OztJQUcvQiw4Q0FBc0M7Ozs7O0lBRXRDLGtEQUEwQzs7Ozs7SUFFMUMsOENBQXFFOzs7OztJQWFyRSwrQ0FBdUM7Ozs7O0lBR3ZDLGtEQUFrQzs7Ozs7O0lBS2xDLCtDQUFnQzs7Ozs7SUFHaEMsOENBQStDOzs7OztJQUcvQyw4Q0FBK0I7Ozs7O0lBRy9CLDhDQUF1RTs7Ozs7O0lBSXZFLDRDQUF5RTs7Ozs7SUFFekUsK0NBQTRGOzs7OztJQUc1Riw4Q0FBd0U7Ozs7O0lBR3hFLGdEQUE2Rjs7Ozs7SUFFN0YsZ0RBQTJFOzs7OztJQUUzRSw0Q0FBNkg7Ozs7O0lBRTdILDRDQUF5Sjs7Ozs7SUFFekosMENBQW1HOztJQUVuRyx5Q0FBMkM7Ozs7O0lBRTNDLDhDQUFpQzs7Ozs7SUFDakMsaURBQW9EOzs7OztJQUVwRCx5REFBaUQ7Ozs7O0lBQ2pELCtDQUFxQzs7Ozs7SUFFekIsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYTQgfSBmcm9tICdqc29uLXNjaGVtYSc7XG5cbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyLCBPUkRFUl9UWVBFIH0gZnJvbSAnLi4vc3QtdGFibGUvc2hhcmVkL29yZGVyJztcbmltcG9ydCB7IFN0VGFibGVIZWFkZXIgfSBmcm9tICcuLi9zdC10YWJsZS9zaGFyZWQvdGFibGUtaGVhZGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdER5bmFtaWNUYWJsZVV0aWxzIH0gZnJvbSAnLi91dGlscy9zdC1keW5hbWljLXRhYmxlLnV0aWxzJztcbmltcG9ydCB7IFN0RHluYW1pY1RhYmxlSGVhZGVyLCBTdER5bmFtaWNUYWJsZVVzZXJJbnRlcmZhY2UsIFN0RHluYW1pY1RhYmxlRmtFdmVudCB9IGZyb20gJy4vc3QtZHluYW1pYy10YWJsZS5tb2RlbCc7XG5pbXBvcnQgeyBTdFRhYmxlSWNvbkNsYXNzZXMgfSBmcm9tICcuLi9zdC10YWJsZS9zdC10YWJsZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbRHluYW1pYyBUYWJsZV1cbiAqXG4gKiBUaGUgdGFibGUgY29tcG9uZW50IGhhcyBiZWVuIGRlc2lnbmVkIHRvIGJlIGFibGUgdG8gY3JlYXRlIGEgdGFibGUgZGVkdWNpbmcgaXRzIGNvbHVtbnMgdXNpbmcgYSBqc29uIHNjaGVtYVxuICpcbiAqICogQG1vZGVsXG4gKlxuICogICBbU3REeW5hbWljVGFibGVIZWFkZXJdIHsuL3N0LWR5bmFtaWMtdGFibGUubW9kZWwudHMjU3REeW5hbWljVGFibGVIZWFkZXJ9XG4gKiAgIFtTdER5bmFtaWNUYWJsZVVJU3BlY2lmaWNhdGlvbl0gey4vc3QtZHluYW1pYy10YWJsZS5tb2RlbC50cyNTdER5bmFtaWNUYWJsZVVJU3BlY2lmaWNhdGlvbn1cbiAqICAgW1N0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZV0gey4vc3QtZHluYW1pYy10YWJsZS5tb2RlbC50cyNTdER5bmFtaWNUYWJsZVVzZXJJbnRlcmZhY2V9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1keW5hbWljLXRhYmxlIFtqc29uU2NoZW1hXT1cImpzb25TY2hlbWFcIlxuICogICAgW2l0ZW1zXT1cInNvcnRlZFVzZXJzXCJcbiAqICAgIFtzb3J0YWJsZV09XCJ0cnVlXCJcbiAqICAgIFtmaWx0ZXJhYmxlXT1cInRydWVcIlxuICogICAgW2hhc0hvdmVyTWVudV09XCJ0cnVlXCJcbiAqICAgIFtjdXJyZW50T3JkZXJdPVwiY3VycmVudE9yZGVyXCJcbiAqICAgIFthY3RpdmVIb3Zlck1lbnVdPVwiYWN0aXZlSG92ZXJNZW51UG9zaXRpb25cIlxuICogICAgW3RlbXBsYXRlQ29udGVudEZpbHRlcl09XCJmaWx0ZXJDb250ZW50XCJcbiAqICAgIChjaGFuZ2VPcmRlcik9XCJvblNvcnRUYWJsZSgkZXZlbnQpXCJcbiAqICAgIChzaG93SG92ZXJNZW51KT1cIm9uU2hvd0hvdmVyTWVudSgkZXZlbnQpXCI+XG4gKiAgICAgICAgPHN0LWRyb3Bkb3duLW1lbnUgc3QtZHluYW1pYy10YWJsZS1ob3Zlci1tZW51XG4gKiAgICAgICAgICBjbGFzcz1cImhvdmVyLW1lbnVcIlxuICogICAgICAgICAgW2l0ZW1zXT1cInJvd0FjdGlvbnNcIlxuICogICAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmVIb3Zlck1lbnVQb3NpdGlvblszXSAhPT0gdW5kZWZpbmVkXCJcbiAqICAgICAgICAgIFt2aXN1YWxNb2RlXT1cIjFcIj5cbiAqICAgICAgIDwvc3QtZHJvcGRvd24tbWVudT5cbiAqIDwvc3QtZHluYW1pYy10YWJsZT5cbiAqIGBgYFxuICpcbiAqL1xuQFN0RWdlbygpXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtZHluYW1pYy10YWJsZScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtZHluYW1pYy10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1keW5hbWljLXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN0RHluYW1pY1RhYmxlQ29tcG9uZW50IHtcbiAgIC8qKiBASW5wdXQge09iamVjdChba2V5OiBzdHJpbmddOiBhbnkpW119IFtpdGVtcz0nJ10gSXRlbSBsaXN0IGRpc3BsYXllZCBhcyB0YWJsZSByb3dzICovXG4gICBASW5wdXQoKSBAU3RSZXF1aXJlZCgpIGl0ZW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W107XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3FhVGFnPScnXSBQcmVmaXggdXNlZCB0byBnZW5lcmF0ZSB0aGUgaWQgdmFsdWVzIGZvciBxYSB0ZXN0cyAqL1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtoZWFkZXI9dHJ1ZV0gQm9vbGVhbiB0byBzaG93IG9yIGhpZGUgdGhlIGhlYWRlciAqL1xuICAgQElucHV0KCkgaGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKlxuICAgICogQElucHV0IHtib29sZWFufSBbc29ydGFibGU9dHJ1ZV0gQm9vbGVhbiB0byBtYWtlIHNvcnRhYmxlIHRoZSB0YWJsZSwgVG8gZW5hYmxlIHNvcnRpbmcgb2YgY29sdW1ucyB1c2VcbiAgICAqIHRoZSBuZXcgXCJzb3J0YWJsZVwiIGZpZWxkIGluc2lkZSBzdFRhYmxlSGVhZGVyIG1vZGVsXG4gICAgKi9cbiAgIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKlxuICAgICogQElucHV0IHtib29sZWFufSBbZmlsdGVyYWJsZT1mYWxzZV0gQm9vbGVhbiB0byBtYWtlIGZpbHRlcmFibGUgdGhlIHRhYmxlLCBUbyBlbmFibGUgZmlsdGVyaW5nIG9mIGNvbHVtbnMgdXNlXG4gICAgKiB0aGUgbmV3IFwiZmlsdGVyYWJsZVwiIGZpZWxkIGluc2lkZSBzdFRhYmxlSGVhZGVyIG1vZGVsIChuZWNlc2FyeSBkZWZpbmUgZmlsdGVyQ29uZmlnKS5cbiAgICAqL1xuICAgQElucHV0KCkgZmlsdGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqXG4gICAgKiBASW5wdXQge2Jvb2xlYW59IFtzZWxlY3RhYmxlPWZhbHNlXSBCb29sZWFuIHRvIHNob3cgb3IgaGlkZSBhIGNoZWNrYm94ZXMgaW4gdGhlIGZpcnN0IGNlbGwgb2Ygcm93c1xuICAgICovXG4gICBASW5wdXQoKSBzZWxlY3RhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAvKipcbiAgICAqIEBJbnB1dCB7Ym9vbGVhbn0gW3NlbGVjdGFibGVBbGw9ZmFsc2VdIEJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgY2hlY2tib3ggaW4gdGhlIGhlYWRlciB0byBzZWxlY3Qgb3JcbiAgICAqICBkZXNlbGVjdCBhbGwgcm93c1xuICAgICovXG4gICBASW5wdXQoKSBzZWxlY3RhYmxlQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW5bXX0gW3NlbGVjdGVkPScnXSBCb29sZWFuIGxpc3QgdG8gaW5kaWNhdGUgaWYgYSByb3cgaXMgc2VsZWN0ZWQgKi9cbiAgIEBJbnB1dCgpIHNlbGVjdGVkPzogYm9vbGVhbltdID0gW107XG5cbiAgIC8qKiBASW5wdXQge09yZGVyfSBbY3VycmVudE9yZGVyPScnXSBJdCBzcGVjaWZpZXMgd2hhdCBpcyB0aGUgY3VycmVudCBvcmRlciBhcHBsaWVkIHRvIHRoZSB0YWJsZSAqL1xuICAgQElucHV0KCkgY3VycmVudE9yZGVyOiBPcmRlcjtcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbY3VzdG9tQ2xhc3Nlcz1dIENsYXNzZXMgZm9yIGFkZGluZyBzdHlsZXMgdG8gdGFibGUgdGFnIGZyb20gb3V0c2lkZS4gVGhlc2UgY2FuIGJlOiBzZXBhcmF0ZWQtcm93cyAqL1xuICAgQElucHV0KCkgY3VzdG9tQ2xhc3Nlczogc3RyaW5nO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbZml4ZWRIZWFkZXI9ZmFsc2VdIEJvb2xlYW4gdG8gZml4IHRoZSB0YWJsZSBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpIGZpeGVkSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc3RpY2t5SG92ZXJNZW51PWZhbHNlXSBCb29sZWFuIHRvIGZpeCBob3ZlciBtZW51IGFsd2F5cyB2aXNpYmxlICovXG4gICBASW5wdXQoKSBzdGlja3lIb3Zlck1lbnU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBASW5wdXQge1N0VGFibGVJY29uQ2xhc3Nlc30gW2ljb25DbGFzc2VzPScnXSBMaXN0IG9mIGljb24gY2xhc3NlcyAqL1xuICAgQElucHV0KCkgaWNvbkNsYXNzZXM/OiBTdFRhYmxlSWNvbkNsYXNzZXMgPSBuZXcgU3RUYWJsZUljb25DbGFzc2VzKCk7XG5cbiAgIC8qKiBASW5wdXQge1RlbXBsYXRlUmVmfSBbdGVtcGxhdGVDb250ZW50RmlsdGVyPXVuZGVmaW5lZF0gUmVmZXJlbmNlIHRvIHBhaW50IGEgY3VzdG9tIHRlbXBsYXRlIGluc2lkZSBwb3BvdmVyIGNvbnRlbnQgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgdGVtcGxhdGVDb250ZW50RmlsdGVyKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlQ29udGVudEZpbHRlcjtcbiAgIH1cblxuICAgc2V0IHRlbXBsYXRlQ29udGVudEZpbHRlcihfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlQ29udGVudEZpbHRlciA9IF90ZW1wbGF0ZVJlZjtcbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbltdfSBbc3RhdHVzRmlsdGVyPV0gTGlzdCBvZiBzdGF0dXMgZmlsdGVyIGJ5IGNvbHVtbiwgbmVlZGVkIHdpdGggdGVtcGxhdGVDb250ZW50RmlsdGVyICovXG4gICBASW5wdXQoKSBzdGF0dXNGaWx0ZXI/OiBib29sZWFuW10gPSBbXTtcblxuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbYWN0aXZlSG92ZXJNZW51PV0gUG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgYWN0aXZlIGhvdmVyIG1lbnUgKi9cbiAgIEBJbnB1dCgpIGFjdGl2ZUhvdmVyTWVudT86IG51bWJlcjtcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2hhc0hvdmVyTWVudT1dIEl0IHNwZWNpZmllcyBpZiBhIG1lbnUgaGFzIHRvIGJlIGRpc3BsYXllZCB3aGVuIHVzZXIgcHV0cyB0aGUgbW91c2Ugb3ZlclxuICAgICogdGhlIHJvd3MuIFJlbWVtYmVyIHRvIGFkZCBhIGNlbGwgd2l0aCB0aGUgc2VsZWN0b3Igc3QtdGFibGUtcm93LWhvdmVyIGZvciBhZGRpbmcgY29udGVudCB0byB0aGUgbWVudVxuICAgICovXG4gICBASW5wdXQoKSBoYXNIb3Zlck1lbnU/OiBib29sZWFuO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbaG92ZXJCdXR0b249J2ljb24tZWxsaXBzaXMnXSBJdCBzcGVjaWZpZXMgdGhlIGljb24gY2xhc3Mgb2YgdGhlIGhvdmVyIGJ1dHRvbiBkaXNwbGF5ZWQgd2hlbiB1c2VyIHB1dHMgbW91c2Ugb3ZlciBhIHJvd1xuICAgICovXG4gICBASW5wdXQoKSBob3ZlckJ1dHRvbjogc3RyaW5nID0gJ2ljb24tZWxsaXBzaXMnO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2VsZWN0ZWRBbGw9XSBJdCBzcGVjaWZpZXMgaWYgYWxsIHJvd3MgYXJlIHNlbGVjdGVkICovXG4gICBASW5wdXQoKSBzZWxlY3RlZEFsbD86IGJvb2xlYW47XG5cbiAgIC8qKiBAT3V0cHV0IHtPcmRlcn0gW2NoYW5nZU9yZGVyPScnXSBFdmVudCBlbWl0dGVkIHdpdGggdGhlIG5ldyBvcmRlciB3aGljaCBoYXMgdG8gYmUgYXBwbGllZCB0byB0aGUgdGFibGUgcm93cyAqL1xuICAgQE91dHB1dCgpIGNoYW5nZU9yZGVyOiBFdmVudEVtaXR0ZXI8T3JkZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxPcmRlcj4oKTtcbiAgIC8qKiBAT3V0cHV0IHtib29sZWFufSBbc2VsZWN0QWxsPScnXSBFdmVudCBlbWl0dGVkICB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGNoZWNrYm94IHRvIHNlbGVjdCBvciBkZXNlbGVjdFxuICAgICogYWxsIHJvd3NcbiAgICAqL1xuICAgQE91dHB1dCgpIHNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgLyoqIEBPdXRwdXQge0V2ZW50RW1pdHRlcjxTdFRhYmxlSGVhZGVyW10+fSBbZmllbGRzPV0gRXZlbnQgZW1pdHRlZCB3aGVuIGhlYWRlciBmaWVsZHMgYXJlIGJlaW5nIGxvYWRlZCAqL1xuICAgQE91dHB1dCgpIHVwZGF0ZUZpZWxkczogRXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXJbXT4oKTtcblxuICAgLyoqIEBPdXRwdXQge3N0cmluZ30gW2NsaWNrRmlsdGVyPV0gRXZlbnQgZW1pdHRlZCB3aGVuIHVzaW5nIGZpbHRlcnMgY3VzdG9tIHRlbXBsYXRlICAqL1xuICAgQE91dHB1dCgpIGNsaWNrRmlsdGVyOiBFdmVudEVtaXR0ZXI8U3RUYWJsZUhlYWRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIC8qKiBAT3V0cHV0IHtTdFRhYmxlSGVhZGVyW119IFtzZWxlY3RGaWx0ZXJzPV0gRXZlbnQgZW1pdHRlZCAgd2hlbiB1c2VyIGludGVyYWN0cyB3aXRoIGZpbHRlciBidXR0b24gd2l0aG91dCBhIGN1c3RvbSB0ZW1wbGF0ZSAqL1xuICAgQE91dHB1dCgpIHNlbGVjdEZpbHRlcnM6IEV2ZW50RW1pdHRlcjxTdFRhYmxlSGVhZGVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFRhYmxlSGVhZGVyW10+KCk7XG4gICAvKiogQE91dHB1dCB7RXZlbnRFbWl0dGVyPG51bWJlcn0gW3Nob3dIb3Zlck1lbnU9XSBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBjbGlja3Mgb24gaG92ZXIgYnV0dG9uIG9mIGEgcm93ICovXG4gICBAT3V0cHV0KCkgc2hvd0hvdmVyTWVudTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgIC8qKiBAT3V0cHV0IHtPYmplY3QoY2hlY2tlZDogYm9vbGVhbiwgcm93OiBudW1iZXIpfSBbc2VsZWN0Um93PV0gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgY2xpY2tzIG9uIGNoZWNrYm94IG9mIGEgcm93ICovXG4gICBAT3V0cHV0KCkgc2VsZWN0Um93OiBFdmVudEVtaXR0ZXI8eyBjaGVja2VkOiBib29sZWFuLCByb3c6IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjaGVja2VkOiBib29sZWFuLCByb3c6IG51bWJlciB9PigpO1xuICAgLyoqIEBPdXRwdXQge09iamVjdChjaGVja2VkOiBib29sZWFuLCByb3c6IG51bWJlcil9IFtjbGlja0NlbGw9XSBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBjbGlja3Mgb24gY2hlY2tib3ggb2YgYSByb3cgKi9cbiAgIEBPdXRwdXQoKSBjbGlja0NlbGw6IEV2ZW50RW1pdHRlcjx7IHJvdzogbnVtYmVyLCBmaWVsZElkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgcm93OiBudW1iZXIsIGZpZWxkSWQ6IHN0cmluZywgbGFiZWw6IHN0cmluZyB9PigpO1xuICAgLyoqIEBPdXRwdXQge1N0RHluYW1pY1RhYmxlRmtFdmVudH0gW2NsaWNrRms9XSBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBjbGlja3Mgb24gRmsgY2VsbCAqL1xuICAgQE91dHB1dCgpIGNsaWNrRms6IEV2ZW50RW1pdHRlcjxTdER5bmFtaWNUYWJsZUZrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdER5bmFtaWNUYWJsZUZrRXZlbnQ+KCk7XG5cbiAgIHB1YmxpYyBmaWVsZHM6IFN0RHluYW1pY1RhYmxlSGVhZGVyW10gPSBbXTtcblxuICAgcHJpdmF0ZSBfanNvblNjaGVtYTogSlNPTlNjaGVtYTQ7XG4gICBwcml2YXRlIF91aURlZmluaXRpb25zOiBTdER5bmFtaWNUYWJsZVVzZXJJbnRlcmZhY2U7XG5cbiAgIHByaXZhdGUgX3RlbXBsYXRlQ29udGVudEZpbHRlcjogVGVtcGxhdGVSZWY8YW55PjtcbiAgIHByaXZhdGUgX2ZrU2VwYXJhdG9yOiBzdHJpbmcgPSAnIC0gJztcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICB9XG5cbiAgIC8qKiBASW5wdXQge0pTT05TY2hlbWE0fSBbanNvblNjaGVtYT1dIEpzb24gc2NoZW1hIHRvIGRlZmluZSBpdHMgc3RydWN0dXJlICovXG4gICBASW5wdXQoKSBAU3RSZXF1aXJlZCgpXG4gICBnZXQganNvblNjaGVtYSgpOiBKU09OU2NoZW1hNCB7XG4gICAgICByZXR1cm4gdGhpcy5fanNvblNjaGVtYTtcbiAgIH1cblxuICAgc2V0IGpzb25TY2hlbWEoX2pzb25TY2hlbWE6IEpTT05TY2hlbWE0KSB7XG4gICAgICB0aGlzLl9qc29uU2NoZW1hID0gX2pzb25TY2hlbWE7XG4gICAgICB0aGlzLl9tYW5hZ2VGaWVsZHNVcGRhdGUoKTtcbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7U3REeW5hbWljVGFibGVVc2VySW50ZXJmYWNlfSBbdWlEZWZpbml0aW9ucz0nJ10gVUkgZGVmaW5pdGlvbiBmb3IgZWFjaCBmaWVsZCAqL1xuICAgQElucHV0KClcbiAgIGdldCB1aURlZmluaXRpb25zKCk6IFN0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZSB7XG4gICAgICByZXR1cm4gdGhpcy5fdWlEZWZpbml0aW9ucztcbiAgIH1cblxuICAgc2V0IHVpRGVmaW5pdGlvbnMoX3VpRGVmaW5pdGlvbnM6IFN0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZSkge1xuICAgICAgdGhpcy5fdWlEZWZpbml0aW9ucyA9IF91aURlZmluaXRpb25zO1xuICAgICAgdGhpcy5fbWFuYWdlRmllbGRzVXBkYXRlKCk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkZpbHRlckNsaWNrKHNlbGVjdGVkRmlsdGVyOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2tGaWx0ZXIuZW1pdChzZWxlY3RlZEZpbHRlcik7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkNoYW5nZU9yZGVyKG9yZGVyOiBPcmRlcik6IHZvaWQge1xuICAgICAgaWYgKG9yZGVyKSB7XG4gICAgICAgICB0aGlzLmNoYW5nZU9yZGVyLmVtaXQob3JkZXIpO1xuICAgICAgfVxuICAgfVxuXG4gICBwdWJsaWMgb25TZWxlY3RBbGwoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChjaGVja2VkKTtcbiAgIH1cblxuICAgcHVibGljIG9uU2VsZWN0ZWRGaWx0ZXJzKHNlbGVjdGVkRmlsdGVyczogU3RUYWJsZUhlYWRlcltdKTogdm9pZCB7XG4gICAgICB0aGlzLnNlbGVjdEZpbHRlcnMuZW1pdChzZWxlY3RlZEZpbHRlcnMpO1xuICAgfVxuXG4gICBwdWJsaWMgb25TaG93SG92ZXJNZW51KHJvdzogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnNob3dIb3Zlck1lbnUuZW1pdChyb3cpO1xuICAgfVxuXG4gICBwdWJsaWMgb25MZWF2ZVJvdygpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2hvd0hvdmVyTWVudS5lbWl0KHVuZGVmaW5lZCk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkNsaWNrRmsoaXRlbTogYW55LCBmaWVsZDogU3REeW5hbWljVGFibGVIZWFkZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2tGay5lbWl0KHtcbiAgICAgICAgIGZrOiBmaWVsZC5mayxcbiAgICAgICAgIHZhbHVlOiBpdGVtW2ZpZWxkLmlkXVxuICAgICAgfSk7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXRDZWxsQ29udGVudChpdGVtOiB7IFtrZXk6IHN0cmluZ106IGFueX0sIGZpZWxkOiBTdER5bmFtaWNUYWJsZUhlYWRlcik6IHN0cmluZyB7XG4gICAgICBpZiAoZmllbGQuZ3JvdXApIHtcbiAgICAgICAgIGNvbnN0IGdyb3VwTGFiZWwgPSBmaWVsZC5ncm91cC5zcGxpdCh0aGlzLl9ma1NlcGFyYXRvcilcbiAgICAgICAgICAgIC5tYXAoX2dyb3VwS2V5ID0+IGl0ZW1bX2dyb3VwS2V5XSlcbiAgICAgICAgICAgIC5qb2luKHRoaXMuX2ZrU2VwYXJhdG9yKTtcbiAgICAgICAgIHJldHVybiBncm91cExhYmVsLmxlbmd0aCA+IHRoaXMuX2ZrU2VwYXJhdG9yLmxlbmd0aCA/IGdyb3VwTGFiZWwgOiBpdGVtW2ZpZWxkLmlkXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtW2ZpZWxkLmlkXTtcbiAgIH1cblxuICAgcHVibGljIGdldENlbGxDbGFzc2VzKGZpZWxkOiBTdER5bmFtaWNUYWJsZUhlYWRlcik6IHsgY2xpY2thYmxlPzogYm9vbGVhbiB9IHtcbiAgICAgIGxldCBjbGFzc2VzOiB7IGNsaWNrYWJsZT86IGJvb2xlYW4gfSA9IHt9O1xuXG4gICAgICBpZiAoZmllbGQucmVmZXJlbmNlKSB7XG4gICAgICAgICBjbGFzc2VzLmNsaWNrYWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0Q2VsbFN0eWxlcyhmaWVsZDogU3REeW5hbWljVGFibGVIZWFkZXIpOiBhbnkge1xuICAgICAgY29uc3QgdWlEZWZpbml0aW9uID0gdGhpcy51aURlZmluaXRpb25zICYmIHRoaXMudWlEZWZpbml0aW9uc1tmaWVsZC5pZF07XG4gICAgICByZXR1cm4gdWlEZWZpbml0aW9uICYmIHVpRGVmaW5pdGlvbi5zdHlsZXM7XG4gICB9XG5cbiAgIHB1YmxpYyBvblNlbGVjdFJvdyhjaGVja2JveEV2ZW50OiB7IGNoZWNrZWQ6IGJvb2xlYW4sIHZhbHVlOiBhbnkgfSwgcm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0Um93LmVtaXQoeyBjaGVja2VkOiBjaGVja2JveEV2ZW50LmNoZWNrZWQsIHJvdzogcm93IH0pO1xuICAgfVxuXG4gICBwdWJsaWMgb25DbGlja0NlbGxMYWJlbChyb3c6IG51bWJlciwgZmllbGRJZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmNsaWNrQ2VsbC5lbWl0KHsgcm93LCBmaWVsZElkLCBsYWJlbCB9KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBfbWFuYWdlRmllbGRzVXBkYXRlKCk6IHZvaWQge1xuICAgICAgdGhpcy5maWVsZHMgPSBTdER5bmFtaWNUYWJsZVV0aWxzLmdldEhlYWRlckZpZWxkc0Zyb21Kc29uU2NoZW1hKHRoaXMuX2pzb25TY2hlbWEsIHRoaXMuX3VpRGVmaW5pdGlvbnMpO1xuICAgICAgdGhpcy51cGRhdGVGaWVsZHMuZW1pdCh0aGlzLmZpZWxkcyk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cbn1cbiJdfQ==