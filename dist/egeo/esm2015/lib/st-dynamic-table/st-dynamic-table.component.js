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
let StDynamicTableComponent = /**
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
class StDynamicTableComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
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
    /**
     * \@Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content
     * @return {?}
     */
    get templateContentFilter() {
        return this._templateContentFilter;
    }
    /**
     * @param {?} _templateRef
     * @return {?}
     */
    set templateContentFilter(_templateRef) {
        this._templateContentFilter = _templateRef;
    }
    /**
     * \@Input {JSONSchema4} [jsonSchema=] Json schema to define its structure
     * @return {?}
     */
    get jsonSchema() {
        return this._jsonSchema;
    }
    /**
     * @param {?} _jsonSchema
     * @return {?}
     */
    set jsonSchema(_jsonSchema) {
        this._jsonSchema = _jsonSchema;
        this._manageFieldsUpdate();
    }
    /**
     * \@Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field
     * @return {?}
     */
    get uiDefinitions() {
        return this._uiDefinitions;
    }
    /**
     * @param {?} _uiDefinitions
     * @return {?}
     */
    set uiDefinitions(_uiDefinitions) {
        this._uiDefinitions = _uiDefinitions;
        this._manageFieldsUpdate();
    }
    /**
     * @param {?} selectedFilter
     * @return {?}
     */
    onFilterClick(selectedFilter) {
        this.clickFilter.emit(selectedFilter);
    }
    /**
     * @param {?} order
     * @return {?}
     */
    onChangeOrder(order) {
        if (order) {
            this.changeOrder.emit(order);
        }
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    onSelectAll(checked) {
        this.selectAll.emit(checked);
    }
    /**
     * @param {?} selectedFilters
     * @return {?}
     */
    onSelectedFilters(selectedFilters) {
        this.selectFilters.emit(selectedFilters);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    onShowHoverMenu(row) {
        this.showHoverMenu.emit(row);
    }
    /**
     * @return {?}
     */
    onLeaveRow() {
        this.showHoverMenu.emit(undefined);
    }
    /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    onClickFk(item, field) {
        this.clickFk.emit({
            fk: field.fk,
            value: item[field.id]
        });
    }
    /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    getCellContent(item, field) {
        if (field.group) {
            /** @type {?} */
            const groupLabel = field.group.split(this._fkSeparator)
                .map((/**
             * @param {?} _groupKey
             * @return {?}
             */
            _groupKey => item[_groupKey]))
                .join(this._fkSeparator);
            return groupLabel.length > this._fkSeparator.length ? groupLabel : item[field.id];
        }
        return item[field.id];
    }
    /**
     * @param {?} field
     * @return {?}
     */
    getCellClasses(field) {
        /** @type {?} */
        let classes = {};
        if (field.reference) {
            classes.clickable = true;
        }
        return classes;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    getCellStyles(field) {
        /** @type {?} */
        const uiDefinition = this.uiDefinitions && this.uiDefinitions[field.id];
        return uiDefinition && uiDefinition.styles;
    }
    /**
     * @param {?} checkboxEvent
     * @param {?} row
     * @return {?}
     */
    onSelectRow(checkboxEvent, row) {
        this.selectRow.emit({ checked: checkboxEvent.checked, row: row });
    }
    /**
     * @param {?} row
     * @param {?} fieldId
     * @param {?} label
     * @return {?}
     */
    onClickCellLabel(row, fieldId, label) {
        this.clickCell.emit({ row, fieldId, label });
    }
    /**
     * @private
     * @return {?}
     */
    _manageFieldsUpdate() {
        this.fields = StDynamicTableUtils.getHeaderFieldsFromJsonSchema(this._jsonSchema, this._uiDefinitions);
        this.updateFields.emit(this.fields);
        this._cd.markForCheck();
    }
};
StDynamicTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StDynamicTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-dynamic-table',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-table *ngIf=\"fields && fields.length && items\"\n          class=\"st-dynamic-table\"\n          [fields]=\"fields\"\n          [header]=\"header\"\n          [sortable]=\"sortable\"\n          [filterable]=\"filterable\"\n          [selectableAll]=\"selectableAll\"\n          [hasHoverMenu]=\"hasHoverMenu\"\n          [fixedHeader]=\"fixedHeader\"\n          [stickyHoverMenu]=\"stickyHoverMenu\"\n          [currentOrder]=\"currentOrder\"\n          [customClasses]=\"customClasses\"\n          [selectedAll]=\"selectedAll\"\n          [templateContentFilter]=\"templateContentFilter\"\n          [statusFilter]=\"statusFilter\"\n          [iconClasses]=\"iconClasses\"\n          (selectAll)=\"onSelectAll($event)\"\n          (changeOrder)=\"onChangeOrder($event)\"\n          (selectFilters)=\"onSelectedFilters($event)\"\n          (clickFilter)=\"onFilterClick($event)\">\n   <tbody>\n   <tr st-table-row *ngFor=\"let item of items; let row = index\" [selected]=\"selected[row]\" (mouseleave)=\"onLeaveRow()\">\n      <td st-table-cell st-table-row-content\n          *ngFor=\"let field of fields; let cell = index\"\n          [ngClass]=\"getCellClasses(fields[cell])\"\n          [ngStyle]=\"getCellStyles(fields[cell])\">\n\n         <st-checkbox *ngIf=\"selectable && !cell\"\n                      class=\"st-table__checkbox\"\n                      [checked]=\"selected[row]\"\n                      (change)=\"onSelectRow($event, row)\">\n         </st-checkbox>\n         <span (click)=\"onClickCellLabel(row, field.id, item[field.id])\" *ngIf=\"!field.fk; else hasFk\">\n            {{item[field.id]}}\n         </span>\n         <ng-template #hasFk>\n            <a (click)=\"onClickFk(item, field)\" class=\"hasFk\">{{getCellContent(item, field)}}</a>\n         </ng-template>\n      </td>\n      <td st-table-row-hover class=\"st-table-hover\" *ngIf=\"hasHoverMenu\">\n         <i class=\"icon {{hoverButton}}\" (click)=\"onShowHoverMenu(row)\"></i>\n         <ng-content select='[st-dynamic-table-hover-menu]' *ngIf=\"activeHoverMenu === row\"></ng-content>\n      </td>\n   </tr>\n   </tbody>\n</st-table>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{width:100%}:host .st-dynamic-table{max-height:100%;min-width:100%}:host .st-table-hover>i{cursor:pointer}:host .hasFk{color:var(--egeo-theme-action,#0776df);cursor:pointer}"]
            }] }
];
/** @nocollapse */
StDynamicTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHluYW1pYy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWR5bmFtaWMtdGFibGUvc3QtZHluYW1pYy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hJLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBYyxNQUFNLDBCQUEwQixDQUFDO0FBRTdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBOEN2RCx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUF2Qix1QkFBdUI7Ozs7SUFzR2pDLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBL0ZqQyxXQUFNLEdBQVksSUFBSSxDQUFDOzs7OztRQUt2QixhQUFRLEdBQVksSUFBSSxDQUFDOzs7OztRQUt6QixlQUFVLEdBQVksS0FBSyxDQUFDOzs7O1FBSTVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Ozs7O1FBSzVCLGtCQUFhLEdBQVksS0FBSyxDQUFDOzs7O1FBRy9CLGFBQVEsR0FBZSxFQUFFLENBQUM7Ozs7UUFTMUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7Ozs7UUFFN0Isb0JBQWUsR0FBWSxLQUFLLENBQUM7Ozs7UUFFakMsZ0JBQVcsR0FBd0IsSUFBSSxrQkFBa0Is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QUVqQyx3Q0FBdUQ7Ozs7O0lBR3ZELHdDQUF1Qjs7Ozs7SUFFdkIseUNBQWdDOzs7Ozs7SUFLaEMsMkNBQWtDOzs7Ozs7SUFLbEMsNkNBQXFDOzs7OztJQUlyQyw2Q0FBcUM7Ozs7OztJQUtyQyxnREFBd0M7Ozs7O0lBR3hDLDJDQUFtQzs7Ozs7SUFHbkMsK0NBQTZCOzs7OztJQUc3QixnREFBK0I7Ozs7O0lBRy9CLDhDQUFzQzs7Ozs7SUFFdEMsa0RBQTBDOzs7OztJQUUxQyw4Q0FBcUU7Ozs7O0lBYXJFLCtDQUF1Qzs7Ozs7SUFHdkMsa0RBQWtDOzs7Ozs7SUFLbEMsK0NBQWdDOzs7OztJQUdoQyw4Q0FBK0M7Ozs7O0lBRy9DLDhDQUErQjs7Ozs7SUFHL0IsOENBQXVFOzs7Ozs7SUFJdkUsNENBQXlFOzs7OztJQUV6RSwrQ0FBNEY7Ozs7O0lBRzVGLDhDQUF3RTs7Ozs7SUFHeEUsZ0RBQTZGOzs7OztJQUU3RixnREFBMkU7Ozs7O0lBRTNFLDRDQUE2SDs7Ozs7SUFFN0gsNENBQXlKOzs7OztJQUV6SiwwQ0FBbUc7O0lBRW5HLHlDQUEyQzs7Ozs7SUFFM0MsOENBQWlDOzs7OztJQUNqQyxpREFBb0Q7Ozs7O0lBRXBELHlEQUFpRDs7Ozs7SUFDakQsK0NBQXFDOzs7OztJQUV6QixzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKU09OU2NoZW1hNCB9IGZyb20gJ2pzb24tc2NoZW1hJztcblxuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXIsIE9SREVSX1RZUEUgfSBmcm9tICcuLi9zdC10YWJsZS9zaGFyZWQvb3JkZXInO1xuaW1wb3J0IHsgU3RUYWJsZUhlYWRlciB9IGZyb20gJy4uL3N0LXRhYmxlL3NoYXJlZC90YWJsZS1oZWFkZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0RHluYW1pY1RhYmxlVXRpbHMgfSBmcm9tICcuL3V0aWxzL3N0LWR5bmFtaWMtdGFibGUudXRpbHMnO1xuaW1wb3J0IHsgU3REeW5hbWljVGFibGVIZWFkZXIsIFN0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZSwgU3REeW5hbWljVGFibGVGa0V2ZW50IH0gZnJvbSAnLi9zdC1keW5hbWljLXRhYmxlLm1vZGVsJztcbmltcG9ydCB7IFN0VGFibGVJY29uQ2xhc3NlcyB9IGZyb20gJy4uL3N0LXRhYmxlL3N0LXRhYmxlLmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtEeW5hbWljIFRhYmxlXVxuICpcbiAqIFRoZSB0YWJsZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzaWduZWQgdG8gYmUgYWJsZSB0byBjcmVhdGUgYSB0YWJsZSBkZWR1Y2luZyBpdHMgY29sdW1ucyB1c2luZyBhIGpzb24gc2NoZW1hXG4gKlxuICogKiBAbW9kZWxcbiAqXG4gKiAgIFtTdER5bmFtaWNUYWJsZUhlYWRlcl0gey4vc3QtZHluYW1pYy10YWJsZS5tb2RlbC50cyNTdER5bmFtaWNUYWJsZUhlYWRlcn1cbiAqICAgW1N0RHluYW1pY1RhYmxlVUlTcGVjaWZpY2F0aW9uXSB7Li9zdC1keW5hbWljLXRhYmxlLm1vZGVsLnRzI1N0RHluYW1pY1RhYmxlVUlTcGVjaWZpY2F0aW9ufVxuICogICBbU3REeW5hbWljVGFibGVVc2VySW50ZXJmYWNlXSB7Li9zdC1keW5hbWljLXRhYmxlLm1vZGVsLnRzI1N0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZX1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWR5bmFtaWMtdGFibGUgW2pzb25TY2hlbWFdPVwianNvblNjaGVtYVwiXG4gKiAgICBbaXRlbXNdPVwic29ydGVkVXNlcnNcIlxuICogICAgW3NvcnRhYmxlXT1cInRydWVcIlxuICogICAgW2ZpbHRlcmFibGVdPVwidHJ1ZVwiXG4gKiAgICBbaGFzSG92ZXJNZW51XT1cInRydWVcIlxuICogICAgW2N1cnJlbnRPcmRlcl09XCJjdXJyZW50T3JkZXJcIlxuICogICAgW2FjdGl2ZUhvdmVyTWVudV09XCJhY3RpdmVIb3Zlck1lbnVQb3NpdGlvblwiXG4gKiAgICBbdGVtcGxhdGVDb250ZW50RmlsdGVyXT1cImZpbHRlckNvbnRlbnRcIlxuICogICAgKGNoYW5nZU9yZGVyKT1cIm9uU29ydFRhYmxlKCRldmVudClcIlxuICogICAgKHNob3dIb3Zlck1lbnUpPVwib25TaG93SG92ZXJNZW51KCRldmVudClcIj5cbiAqICAgICAgICA8c3QtZHJvcGRvd24tbWVudSBzdC1keW5hbWljLXRhYmxlLWhvdmVyLW1lbnVcbiAqICAgICAgICAgIGNsYXNzPVwiaG92ZXItbWVudVwiXG4gKiAgICAgICAgICBbaXRlbXNdPVwicm93QWN0aW9uc1wiXG4gKiAgICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZUhvdmVyTWVudVBvc2l0aW9uWzNdICE9PSB1bmRlZmluZWRcIlxuICogICAgICAgICAgW3Zpc3VhbE1vZGVdPVwiMVwiPlxuICogICAgICAgPC9zdC1kcm9wZG93bi1tZW51PlxuICogPC9zdC1keW5hbWljLXRhYmxlPlxuICogYGBgXG4gKlxuICovXG5AU3RFZ2VvKClcbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1keW5hbWljLXRhYmxlJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1keW5hbWljLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWR5bmFtaWMtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3REeW5hbWljVGFibGVDb21wb25lbnQge1xuICAgLyoqIEBJbnB1dCB7T2JqZWN0KFtrZXk6IHN0cmluZ106IGFueSlbXX0gW2l0ZW1zPScnXSBJdGVtIGxpc3QgZGlzcGxheWVkIGFzIHRhYmxlIHJvd3MgKi9cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgaXRlbXM6IHsgW2tleTogc3RyaW5nXTogYW55IH1bXTtcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcWFUYWc9JyddIFByZWZpeCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBpZCB2YWx1ZXMgZm9yIHFhIHRlc3RzICovXG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2hlYWRlcj10cnVlXSBCb29sZWFuIHRvIHNob3cgb3IgaGlkZSB0aGUgaGVhZGVyICovXG4gICBASW5wdXQoKSBoZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqXG4gICAgKiBASW5wdXQge2Jvb2xlYW59IFtzb3J0YWJsZT10cnVlXSBCb29sZWFuIHRvIG1ha2Ugc29ydGFibGUgdGhlIHRhYmxlLCBUbyBlbmFibGUgc29ydGluZyBvZiBjb2x1bW5zIHVzZVxuICAgICogdGhlIG5ldyBcInNvcnRhYmxlXCIgZmllbGQgaW5zaWRlIHN0VGFibGVIZWFkZXIgbW9kZWxcbiAgICAqL1xuICAgQElucHV0KCkgc29ydGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqXG4gICAgKiBASW5wdXQge2Jvb2xlYW59IFtmaWx0ZXJhYmxlPWZhbHNlXSBCb29sZWFuIHRvIG1ha2UgZmlsdGVyYWJsZSB0aGUgdGFibGUsIFRvIGVuYWJsZSBmaWx0ZXJpbmcgb2YgY29sdW1ucyB1c2VcbiAgICAqIHRoZSBuZXcgXCJmaWx0ZXJhYmxlXCIgZmllbGQgaW5zaWRlIHN0VGFibGVIZWFkZXIgbW9kZWwgKG5lY2VzYXJ5IGRlZmluZSBmaWx0ZXJDb25maWcpLlxuICAgICovXG4gICBASW5wdXQoKSBmaWx0ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAvKipcbiAgICAqIEBJbnB1dCB7Ym9vbGVhbn0gW3NlbGVjdGFibGU9ZmFsc2VdIEJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgY2hlY2tib3hlcyBpbiB0aGUgZmlyc3QgY2VsbCBvZiByb3dzXG4gICAgKi9cbiAgIEBJbnB1dCgpIHNlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKlxuICAgICogQElucHV0IHtib29sZWFufSBbc2VsZWN0YWJsZUFsbD1mYWxzZV0gQm9vbGVhbiB0byBzaG93IG9yIGhpZGUgYSBjaGVja2JveCBpbiB0aGUgaGVhZGVyIHRvIHNlbGVjdCBvclxuICAgICogIGRlc2VsZWN0IGFsbCByb3dzXG4gICAgKi9cbiAgIEBJbnB1dCgpIHNlbGVjdGFibGVBbGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbltdfSBbc2VsZWN0ZWQ9JyddIEJvb2xlYW4gbGlzdCB0byBpbmRpY2F0ZSBpZiBhIHJvdyBpcyBzZWxlY3RlZCAqL1xuICAgQElucHV0KCkgc2VsZWN0ZWQ/OiBib29sZWFuW10gPSBbXTtcblxuICAgLyoqIEBJbnB1dCB7T3JkZXJ9IFtjdXJyZW50T3JkZXI9JyddIEl0IHNwZWNpZmllcyB3aGF0IGlzIHRoZSBjdXJyZW50IG9yZGVyIGFwcGxpZWQgdG8gdGhlIHRhYmxlICovXG4gICBASW5wdXQoKSBjdXJyZW50T3JkZXI6IE9yZGVyO1xuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtjdXN0b21DbGFzc2VzPV0gQ2xhc3NlcyBmb3IgYWRkaW5nIHN0eWxlcyB0byB0YWJsZSB0YWcgZnJvbSBvdXRzaWRlLiBUaGVzZSBjYW4gYmU6IHNlcGFyYXRlZC1yb3dzICovXG4gICBASW5wdXQoKSBjdXN0b21DbGFzc2VzOiBzdHJpbmc7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtmaXhlZEhlYWRlcj1mYWxzZV0gQm9vbGVhbiB0byBmaXggdGhlIHRhYmxlIGhlYWRlciAqL1xuICAgQElucHV0KCkgZml4ZWRIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzdGlja3lIb3Zlck1lbnU9ZmFsc2VdIEJvb2xlYW4gdG8gZml4IGhvdmVyIG1lbnUgYWx3YXlzIHZpc2libGUgKi9cbiAgIEBJbnB1dCgpIHN0aWNreUhvdmVyTWVudTogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBJbnB1dCB7U3RUYWJsZUljb25DbGFzc2VzfSBbaWNvbkNsYXNzZXM9JyddIExpc3Qgb2YgaWNvbiBjbGFzc2VzICovXG4gICBASW5wdXQoKSBpY29uQ2xhc3Nlcz86IFN0VGFibGVJY29uQ2xhc3NlcyA9IG5ldyBTdFRhYmxlSWNvbkNsYXNzZXMoKTtcblxuICAgLyoqIEBJbnB1dCB7VGVtcGxhdGVSZWZ9IFt0ZW1wbGF0ZUNvbnRlbnRGaWx0ZXI9dW5kZWZpbmVkXSBSZWZlcmVuY2UgdG8gcGFpbnQgYSBjdXN0b20gdGVtcGxhdGUgaW5zaWRlIHBvcG92ZXIgY29udGVudCAqL1xuICAgQElucHV0KClcbiAgIGdldCB0ZW1wbGF0ZUNvbnRlbnRGaWx0ZXIoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVDb250ZW50RmlsdGVyO1xuICAgfVxuXG4gICBzZXQgdGVtcGxhdGVDb250ZW50RmlsdGVyKF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgICAgdGhpcy5fdGVtcGxhdGVDb250ZW50RmlsdGVyID0gX3RlbXBsYXRlUmVmO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtib29sZWFuW119IFtzdGF0dXNGaWx0ZXI9XSBMaXN0IG9mIHN0YXR1cyBmaWx0ZXIgYnkgY29sdW1uLCBuZWVkZWQgd2l0aCB0ZW1wbGF0ZUNvbnRlbnRGaWx0ZXIgKi9cbiAgIEBJbnB1dCgpIHN0YXR1c0ZpbHRlcj86IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFthY3RpdmVIb3Zlck1lbnU9XSBQb3NpdGlvbiBvZiB0aGUgY3VycmVudCBhY3RpdmUgaG92ZXIgbWVudSAqL1xuICAgQElucHV0KCkgYWN0aXZlSG92ZXJNZW51PzogbnVtYmVyO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbaGFzSG92ZXJNZW51PV0gSXQgc3BlY2lmaWVzIGlmIGEgbWVudSBoYXMgdG8gYmUgZGlzcGxheWVkIHdoZW4gdXNlciBwdXRzIHRoZSBtb3VzZSBvdmVyXG4gICAgKiB0aGUgcm93cy4gUmVtZW1iZXIgdG8gYWRkIGEgY2VsbCB3aXRoIHRoZSBzZWxlY3RvciBzdC10YWJsZS1yb3ctaG92ZXIgZm9yIGFkZGluZyBjb250ZW50IHRvIHRoZSBtZW51XG4gICAgKi9cbiAgIEBJbnB1dCgpIGhhc0hvdmVyTWVudT86IGJvb2xlYW47XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtob3ZlckJ1dHRvbj0naWNvbi1lbGxpcHNpcyddIEl0IHNwZWNpZmllcyB0aGUgaWNvbiBjbGFzcyBvZiB0aGUgaG92ZXIgYnV0dG9uIGRpc3BsYXllZCB3aGVuIHVzZXIgcHV0cyBtb3VzZSBvdmVyIGEgcm93XG4gICAgKi9cbiAgIEBJbnB1dCgpIGhvdmVyQnV0dG9uOiBzdHJpbmcgPSAnaWNvbi1lbGxpcHNpcyc7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzZWxlY3RlZEFsbD1dIEl0IHNwZWNpZmllcyBpZiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQgKi9cbiAgIEBJbnB1dCgpIHNlbGVjdGVkQWxsPzogYm9vbGVhbjtcblxuICAgLyoqIEBPdXRwdXQge09yZGVyfSBbY2hhbmdlT3JkZXI9JyddIEV2ZW50IGVtaXR0ZWQgd2l0aCB0aGUgbmV3IG9yZGVyIHdoaWNoIGhhcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB0YWJsZSByb3dzICovXG4gICBAT3V0cHV0KCkgY2hhbmdlT3JkZXI6IEV2ZW50RW1pdHRlcjxPcmRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPE9yZGVyPigpO1xuICAgLyoqIEBPdXRwdXQge2Jvb2xlYW59IFtzZWxlY3RBbGw9JyddIEV2ZW50IGVtaXR0ZWQgIHdoZW4gdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgY2hlY2tib3ggdG8gc2VsZWN0IG9yIGRlc2VsZWN0XG4gICAgKiBhbGwgcm93c1xuICAgICovXG4gICBAT3V0cHV0KCkgc2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAvKiogQE91dHB1dCB7RXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXJbXT59IFtmaWVsZHM9XSBFdmVudCBlbWl0dGVkIHdoZW4gaGVhZGVyIGZpZWxkcyBhcmUgYmVpbmcgbG9hZGVkICovXG4gICBAT3V0cHV0KCkgdXBkYXRlRmllbGRzOiBFdmVudEVtaXR0ZXI8U3RUYWJsZUhlYWRlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUYWJsZUhlYWRlcltdPigpO1xuXG4gICAvKiogQE91dHB1dCB7c3RyaW5nfSBbY2xpY2tGaWx0ZXI9XSBFdmVudCBlbWl0dGVkIHdoZW4gdXNpbmcgZmlsdGVycyBjdXN0b20gdGVtcGxhdGUgICovXG4gICBAT3V0cHV0KCkgY2xpY2tGaWx0ZXI6IEV2ZW50RW1pdHRlcjxTdFRhYmxlSGVhZGVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgLyoqIEBPdXRwdXQge1N0VGFibGVIZWFkZXJbXX0gW3NlbGVjdEZpbHRlcnM9XSBFdmVudCBlbWl0dGVkICB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggZmlsdGVyIGJ1dHRvbiB3aXRob3V0IGEgY3VzdG9tIHRlbXBsYXRlICovXG4gICBAT3V0cHV0KCkgc2VsZWN0RmlsdGVyczogRXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXJbXT4oKTtcbiAgIC8qKiBAT3V0cHV0IHtFdmVudEVtaXR0ZXI8bnVtYmVyfSBbc2hvd0hvdmVyTWVudT1dIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiBob3ZlciBidXR0b24gb2YgYSByb3cgKi9cbiAgIEBPdXRwdXQoKSBzaG93SG92ZXJNZW51OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAgLyoqIEBPdXRwdXQge09iamVjdChjaGVja2VkOiBib29sZWFuLCByb3c6IG51bWJlcil9IFtzZWxlY3RSb3c9XSBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBjbGlja3Mgb24gY2hlY2tib3ggb2YgYSByb3cgKi9cbiAgIEBPdXRwdXQoKSBzZWxlY3RSb3c6IEV2ZW50RW1pdHRlcjx7IGNoZWNrZWQ6IGJvb2xlYW4sIHJvdzogbnVtYmVyIH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGNoZWNrZWQ6IGJvb2xlYW4sIHJvdzogbnVtYmVyIH0+KCk7XG4gICAvKiogQE91dHB1dCB7T2JqZWN0KGNoZWNrZWQ6IGJvb2xlYW4sIHJvdzogbnVtYmVyKX0gW2NsaWNrQ2VsbD1dIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiBjaGVja2JveCBvZiBhIHJvdyAqL1xuICAgQE91dHB1dCgpIGNsaWNrQ2VsbDogRXZlbnRFbWl0dGVyPHsgcm93OiBudW1iZXIsIGZpZWxkSWQ6IHN0cmluZywgbGFiZWw6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyByb3c6IG51bWJlciwgZmllbGRJZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nIH0+KCk7XG4gICAvKiogQE91dHB1dCB7U3REeW5hbWljVGFibGVGa0V2ZW50fSBbY2xpY2tGaz1dIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiBGayBjZWxsICovXG4gICBAT3V0cHV0KCkgY2xpY2tGazogRXZlbnRFbWl0dGVyPFN0RHluYW1pY1RhYmxlRmtFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0RHluYW1pY1RhYmxlRmtFdmVudD4oKTtcblxuICAgcHVibGljIGZpZWxkczogU3REeW5hbWljVGFibGVIZWFkZXJbXSA9IFtdO1xuXG4gICBwcml2YXRlIF9qc29uU2NoZW1hOiBKU09OU2NoZW1hNDtcbiAgIHByaXZhdGUgX3VpRGVmaW5pdGlvbnM6IFN0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZTtcblxuICAgcHJpdmF0ZSBfdGVtcGxhdGVDb250ZW50RmlsdGVyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgcHJpdmF0ZSBfZmtTZXBhcmF0b3I6IHN0cmluZyA9ICcgLSAnO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7SlNPTlNjaGVtYTR9IFtqc29uU2NoZW1hPV0gSnNvbiBzY2hlbWEgdG8gZGVmaW5lIGl0cyBzdHJ1Y3R1cmUgKi9cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKClcbiAgIGdldCBqc29uU2NoZW1hKCk6IEpTT05TY2hlbWE0IHtcbiAgICAgIHJldHVybiB0aGlzLl9qc29uU2NoZW1hO1xuICAgfVxuXG4gICBzZXQganNvblNjaGVtYShfanNvblNjaGVtYTogSlNPTlNjaGVtYTQpIHtcbiAgICAgIHRoaXMuX2pzb25TY2hlbWEgPSBfanNvblNjaGVtYTtcbiAgICAgIHRoaXMuX21hbmFnZUZpZWxkc1VwZGF0ZSgpO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtTdER5bmFtaWNUYWJsZVVzZXJJbnRlcmZhY2V9IFt1aURlZmluaXRpb25zPScnXSBVSSBkZWZpbml0aW9uIGZvciBlYWNoIGZpZWxkICovXG4gICBASW5wdXQoKVxuICAgZ2V0IHVpRGVmaW5pdGlvbnMoKTogU3REeW5hbWljVGFibGVVc2VySW50ZXJmYWNlIHtcbiAgICAgIHJldHVybiB0aGlzLl91aURlZmluaXRpb25zO1xuICAgfVxuXG4gICBzZXQgdWlEZWZpbml0aW9ucyhfdWlEZWZpbml0aW9uczogU3REeW5hbWljVGFibGVVc2VySW50ZXJmYWNlKSB7XG4gICAgICB0aGlzLl91aURlZmluaXRpb25zID0gX3VpRGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLl9tYW5hZ2VGaWVsZHNVcGRhdGUoKTtcbiAgIH1cblxuICAgcHVibGljIG9uRmlsdGVyQ2xpY2soc2VsZWN0ZWRGaWx0ZXI6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5jbGlja0ZpbHRlci5lbWl0KHNlbGVjdGVkRmlsdGVyKTtcbiAgIH1cblxuICAgcHVibGljIG9uQ2hhbmdlT3JkZXIob3JkZXI6IE9yZGVyKTogdm9pZCB7XG4gICAgICBpZiAob3JkZXIpIHtcbiAgICAgICAgIHRoaXMuY2hhbmdlT3JkZXIuZW1pdChvcmRlcik7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBvblNlbGVjdEFsbChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGNoZWNrZWQpO1xuICAgfVxuXG4gICBwdWJsaWMgb25TZWxlY3RlZEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJzOiBTdFRhYmxlSGVhZGVyW10pOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsdGVycy5lbWl0KHNlbGVjdGVkRmlsdGVycyk7XG4gICB9XG5cbiAgIHB1YmxpYyBvblNob3dIb3Zlck1lbnUocm93OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2hvd0hvdmVyTWVudS5lbWl0KHJvdyk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkxlYXZlUm93KCk6IHZvaWQge1xuICAgICAgdGhpcy5zaG93SG92ZXJNZW51LmVtaXQodW5kZWZpbmVkKTtcbiAgIH1cblxuICAgcHVibGljIG9uQ2xpY2tGayhpdGVtOiBhbnksIGZpZWxkOiBTdER5bmFtaWNUYWJsZUhlYWRlcik6IHZvaWQge1xuICAgICAgdGhpcy5jbGlja0ZrLmVtaXQoe1xuICAgICAgICAgZms6IGZpZWxkLmZrLFxuICAgICAgICAgdmFsdWU6IGl0ZW1bZmllbGQuaWRdXG4gICAgICB9KTtcbiAgIH1cblxuICAgcHVibGljIGdldENlbGxDb250ZW50KGl0ZW06IHsgW2tleTogc3RyaW5nXTogYW55fSwgZmllbGQ6IFN0RHluYW1pY1RhYmxlSGVhZGVyKTogc3RyaW5nIHtcbiAgICAgIGlmIChmaWVsZC5ncm91cCkge1xuICAgICAgICAgY29uc3QgZ3JvdXBMYWJlbCA9IGZpZWxkLmdyb3VwLnNwbGl0KHRoaXMuX2ZrU2VwYXJhdG9yKVxuICAgICAgICAgICAgLm1hcChfZ3JvdXBLZXkgPT4gaXRlbVtfZ3JvdXBLZXldKVxuICAgICAgICAgICAgLmpvaW4odGhpcy5fZmtTZXBhcmF0b3IpO1xuICAgICAgICAgcmV0dXJuIGdyb3VwTGFiZWwubGVuZ3RoID4gdGhpcy5fZmtTZXBhcmF0b3IubGVuZ3RoID8gZ3JvdXBMYWJlbCA6IGl0ZW1bZmllbGQuaWRdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZW1bZmllbGQuaWRdO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0Q2VsbENsYXNzZXMoZmllbGQ6IFN0RHluYW1pY1RhYmxlSGVhZGVyKTogeyBjbGlja2FibGU/OiBib29sZWFuIH0ge1xuICAgICAgbGV0IGNsYXNzZXM6IHsgY2xpY2thYmxlPzogYm9vbGVhbiB9ID0ge307XG5cbiAgICAgIGlmIChmaWVsZC5yZWZlcmVuY2UpIHtcbiAgICAgICAgIGNsYXNzZXMuY2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXRDZWxsU3R5bGVzKGZpZWxkOiBTdER5bmFtaWNUYWJsZUhlYWRlcik6IGFueSB7XG4gICAgICBjb25zdCB1aURlZmluaXRpb24gPSB0aGlzLnVpRGVmaW5pdGlvbnMgJiYgdGhpcy51aURlZmluaXRpb25zW2ZpZWxkLmlkXTtcbiAgICAgIHJldHVybiB1aURlZmluaXRpb24gJiYgdWlEZWZpbml0aW9uLnN0eWxlcztcbiAgIH1cblxuICAgcHVibGljIG9uU2VsZWN0Um93KGNoZWNrYm94RXZlbnQ6IHsgY2hlY2tlZDogYm9vbGVhbiwgdmFsdWU6IGFueSB9LCByb3c6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5zZWxlY3RSb3cuZW1pdCh7IGNoZWNrZWQ6IGNoZWNrYm94RXZlbnQuY2hlY2tlZCwgcm93OiByb3cgfSk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkNsaWNrQ2VsbExhYmVsKHJvdzogbnVtYmVyLCBmaWVsZElkOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2tDZWxsLmVtaXQoeyByb3csIGZpZWxkSWQsIGxhYmVsIH0pO1xuICAgfVxuXG4gICBwcml2YXRlIF9tYW5hZ2VGaWVsZHNVcGRhdGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmZpZWxkcyA9IFN0RHluYW1pY1RhYmxlVXRpbHMuZ2V0SGVhZGVyRmllbGRzRnJvbUpzb25TY2hlbWEodGhpcy5fanNvblNjaGVtYSwgdGhpcy5fdWlEZWZpbml0aW9ucyk7XG4gICAgICB0aGlzLnVwZGF0ZUZpZWxkcy5lbWl0KHRoaXMuZmllbGRzKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxufVxuIl19