/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/st-table.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, HostBinding, Host } from '@angular/core';
import { StEgeo, StRequired } from '../decorators/require-decorators';
import { Order, ORDER_TYPE } from './shared/order';
import { cloneDeep as _cloneDeep, get as _get } from 'lodash';
import { StTableIconClasses } from './st-table.interface';
/**
 * \@description {Component} [Table]
 *
 * The table component has been designed to display any content like images, text, graphs, etc.
 *
 * * \@model
 *
 *   [StTableHeader] {./shared/table-header.interface.ts#StTableHeader}
 *   [StDynamicTableHeader] {./shared/table-header.interface.ts#StFilterElement}
 *   [StFilterHeader] {./shared/table-header.interface.ts#StFilterHeader}
 *   [StTableFilterIconClasses] {./st-table.interface.ts#StTableFilterIconClasses}
 *   [StTableIconClasses] {./st-table.interface.ts#StTableIconClasses}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-table [fields]="fields" [sortable]="true" (changeOrder)="yourFunctionToOrder($event)">
 * <tr st-table-row *ngFor="let userData of data">
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.id}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.name}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.lastName}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.phone}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.company}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.completedProfile}}</label>
 * </td>
 * <td st-table-row-hover>
 *    <i class="icon icon-arrow2_right"></i>
 * </td>
 * </tr>
 * </st-table>
 * ```
 *
 */
let StTableComponent = /**
 * \@description {Component} [Table]
 *
 * The table component has been designed to display any content like images, text, graphs, etc.
 *
 * * \@model
 *
 *   [StTableHeader] {./shared/table-header.interface.ts#StTableHeader}
 *   [StDynamicTableHeader] {./shared/table-header.interface.ts#StFilterElement}
 *   [StFilterHeader] {./shared/table-header.interface.ts#StFilterHeader}
 *   [StTableFilterIconClasses] {./st-table.interface.ts#StTableFilterIconClasses}
 *   [StTableIconClasses] {./st-table.interface.ts#StTableIconClasses}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-table [fields]="fields" [sortable]="true" (changeOrder)="yourFunctionToOrder($event)">
 * <tr st-table-row *ngFor="let userData of data">
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.id}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.name}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.lastName}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.phone}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.company}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.completedProfile}}</label>
 * </td>
 * <td st-table-row-hover>
 *    <i class="icon icon-arrow2_right"></i>
 * </td>
 * </tr>
 * </st-table>
 * ```
 *
 */
class StTableComponent {
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
         * \@Input {boolean} [filterable=true] Boolean to make filterable the table, To enable filtering of columns use
         * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
         */
        this.filterable = false;
        /**
         * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
         *  deselect all rows
         */
        this.selectableAll = false;
        /**
         * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
         */
        this.iconClasses = new StTableIconClasses();
        /**
         * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
         */
        this.changeOrder = new EventEmitter();
        /**
         * \@Output {boolean} [selectAll=''] Event emitted when user interacts with the checkbox to select or deselect
         * all rows
         */
        this.selectAll = new EventEmitter();
        /**
         * \@Output {string} [clickFilter=] Event emitted when clicking on filters icon
         */
        this.clickFilter = new EventEmitter();
        /**
         * \@Output {StTableHeader[]} [selectFilters=''] Event emitted  when user interacts with filter button without a custom template
         */
        this.selectFilters = new EventEmitter();
        this.tableClasses = {};
        this.orderTypes = ORDER_TYPE;
        this.visibleFilter = -1;
        this._fixedHeader = false;
        this._stickyHoverMenu = false;
        this._hasHoverMenu = false;
    }
    /**
     * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
     * @return {?}
     */
    get fixedHeader() {
        return this._fixedHeader;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set fixedHeader(newValue) {
        this._fixedHeader = newValue;
    }
    /**
     * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
     * @return {?}
     */
    get stickyHoverMenu() {
        return this._stickyHoverMenu;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set stickyHoverMenu(newValue) {
        this._stickyHoverMenu = newValue;
    }
    /**
     * \@Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows
     * @return {?}
     */
    get customClasses() {
        return this._customClasses;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set customClasses(newValue) {
        this.tableClasses[this._customClasses] = undefined;
        this._customClasses = newValue;
        this.tableClasses[this._customClasses] = this._customClasses;
    }
    /**
     * \@Input {boolean} [selectedAll=false] It specifies if all rows are selected
     * @return {?}
     */
    get selectedAll() {
        return this._selectedAll;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set selectedAll(newValue) {
        this._selectedAll = newValue;
        this._cd.markForCheck();
    }
    /**
     * \@Input {boolean} [hasHoverMenu=false] It specifies if a menu has to be displayed when user puts the mouse over
     * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
     * @return {?}
     */
    get hasHoverMenu() {
        return this._hasHoverMenu;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set hasHoverMenu(newValue) {
        this._hasHoverMenu = newValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.filterable && !this.statusFilter) {
            this.statusFilter = new Array(this.fields.length);
            this.statusFilter.fill(false);
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    getHeaderItemClass(field) {
        /** @type {?} */
        let isOrderAsc = this.isSortedByFieldAndDirection(field, this.orderTypes.ASC);
        return isOrderAsc ? this.iconClasses.sort.asc : this.iconClasses.sort.desc;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isSortable(field) {
        return field && field.sortable !== undefined ? field.sortable : this.sortable;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isSortedByField(field) {
        return this.currentOrder && this.currentOrder.orderBy === field.id;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isFilterable(field) {
        return this.filterable && (_get(field, 'filters.filterConfig')) ||
            (this.templateContentFilter && _get(field, 'filters')) ||
            _get(field, 'filters.templateRef');
    }
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} field
     * @return {?}
     */
    onClickPopover(event, index, field) {
        event.stopPropagation();
        if (this.visibleFilter === index) {
            this.visibleFilter = -1;
        }
        else {
            this.visibleFilter = index;
        }
        this.clickFilter.emit(field);
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    onHidePopover() {
        this.visibleFilter = -1;
        this._cd.markForCheck();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    onChangeOrder(field) {
        /** @type {?} */
        let _currentOrder;
        if (field && this.isSortable(field)) {
            if (this.currentOrder && this.currentOrder.orderBy === field.id) {
                _currentOrder = this.changeOrderDirection();
            }
            else {
                _currentOrder = new Order(field.id, ORDER_TYPE.ASC);
            }
            this.changeOrder.emit(_currentOrder);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectAll(event) {
        this.selectAll.emit(event.checked);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectedFilters(event) {
        /** @type {?} */
        let selectedFilters = _cloneDeep(this.fields);
        selectedFilters = selectedFilters.filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            if (_get(field, 'filters.filterConfig')) {
                field.filters.filterConfig = field.filters.filterConfig.filter((/**
                 * @param {?} conf
                 * @return {?}
                 */
                (conf) => conf.selected));
                if (field.filters.filterConfig.length > 0) {
                    return field;
                }
            }
        }));
        this.selectFilters.emit(selectedFilters);
    }
    /**
     * @private
     * @return {?}
     */
    changeOrderDirection() {
        /** @type {?} */
        let newDirection = this.currentOrder.type === ORDER_TYPE.ASC ? ORDER_TYPE.DESC : ORDER_TYPE.ASC;
        return new Order(this.currentOrder.orderBy, newDirection);
    }
    /**
     * @private
     * @param {?} field
     * @param {?} orderType
     * @return {?}
     */
    isSortedByFieldAndDirection(field, orderType) {
        return this.isSortedByField(field) && this.currentOrder.type === orderType;
    }
};
StTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-table',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<table class='st-table' [ngClass]=\"tableClasses\" [attr.id]='qaTag'>\n   <thead>\n   <tr *ngIf=\"header\" class='st-table__header'>\n\n      <th *ngFor='let field of fields; let i = index' class='st-table__header-item' [ngClass]=\"{\n             'st-table__header-item--selected': isSortedByField(field),\n             'st-table__header-item--sortable': isSortable(field),\n             'st-table__header-item--filterable': isFilterable(field)}\">\n         <st-checkbox *ngIf=\"i == 0 && selectableAll\" qaTag=\"select-all-checkbox\" class=\"st-table__checkbox\"\n                      name=\"selectAll\"\n                      [checked]=\"selectedAll\" (change)=\"onSelectAll($event)\">\n         </st-checkbox>\n         <label class='st-table__header-text' (click)=\"onChangeOrder(field)\">\n            <i *ngIf=\"isSortedByField(field)\" class='st-table__order-arrow' [ngClass]=\"getHeaderItemClass(field)\">\n            </i>\n            {{field.label}}\n         </label>\n         <st-popover-filter *ngIf=\"isFilterable(field)\"\n                            [field]=\"field\"\n                            [index]=\"i\"\n                            [templateContentFilter]=\"templateContentFilter\"\n                            [filtered]=\"statusFilter[i]\"\n                            [hidden]=\"visibleFilter !== i\"\n                            [iconClasses]=\"iconClasses?.filter\"\n                            (filter)=\"onSelectedFilters($event)\"\n                            (click)=\"onClickPopover($event, i, field)\"\n                            (clickOutside)=\"onHidePopover()\">\n         </st-popover-filter>\n      </th>\n      <th *ngIf=\"hasHoverMenu\"></th> <!-- For hover cell -->\n   </tr>\n   </thead>\n   <ng-content></ng-content>\n</table>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-table{width:100%}.st-table__header-item{text-transform:capitalize;position:relative;vertical-align:bottom}.st-table__header-text{position:relative;height:100%;display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;cursor:inherit}"]
            }] }
];
/** @nocollapse */
StTableComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StTableComponent.propDecorators = {
    fields: [{ type: Input }],
    qaTag: [{ type: Input }],
    header: [{ type: Input }],
    sortable: [{ type: Input }],
    filterable: [{ type: Input }],
    selectableAll: [{ type: Input }],
    currentOrder: [{ type: Input }],
    templateContentFilter: [{ type: Input }],
    statusFilter: [{ type: Input }],
    iconClasses: [{ type: Input }],
    fixedHeader: [{ type: Input }, { type: HostBinding, args: ['class.st-custom-scrollbar',] }, { type: HostBinding, args: ['class.fixed-header',] }],
    stickyHoverMenu: [{ type: Input }, { type: HostBinding, args: ['class.sticky-hover-menu',] }],
    customClasses: [{ type: Input }],
    selectedAll: [{ type: Input }],
    hasHoverMenu: [{ type: Input }],
    changeOrder: [{ type: Output }],
    selectAll: [{ type: Output }],
    clickFilter: [{ type: Output }],
    selectFilters: [{ type: Output }]
};
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", Array)
], StTableComponent.prototype, "fields", void 0);
/**
 * \@description {Component} [Table]
 *
 * The table component has been designed to display any content like images, text, graphs, etc.
 *
 * * \@model
 *
 *   [StTableHeader] {./shared/table-header.interface.ts#StTableHeader}
 *   [StDynamicTableHeader] {./shared/table-header.interface.ts#StFilterElement}
 *   [StFilterHeader] {./shared/table-header.interface.ts#StFilterHeader}
 *   [StTableFilterIconClasses] {./st-table.interface.ts#StTableFilterIconClasses}
 *   [StTableIconClasses] {./st-table.interface.ts#StTableIconClasses}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-table [fields]="fields" [sortable]="true" (changeOrder)="yourFunctionToOrder($event)">
 * <tr st-table-row *ngFor="let userData of data">
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.id}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.name}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.lastName}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.phone}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.company}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.completedProfile}}</label>
 * </td>
 * <td st-table-row-hover>
 *    <i class="icon icon-arrow2_right"></i>
 * </td>
 * </tr>
 * </st-table>
 * ```
 *
 */
StTableComponent = tslib_1.__decorate([
    StEgeo(),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], StTableComponent);
export { StTableComponent };
if (false) {
    /**
     * \@Input {StTableHeader[]} [fields=''] List of field displayed in the header
     * @type {?}
     */
    StTableComponent.prototype.fields;
    /**
     * \@Input {string} [qaTag=''] Prefix used to generate the id values for qa tests
     * @type {?}
     */
    StTableComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [header=true] Boolean to show or hide the header
     * @type {?}
     */
    StTableComponent.prototype.header;
    /**
     * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
     * the new "sortable" field inside stTableHeader model
     * @type {?}
     */
    StTableComponent.prototype.sortable;
    /**
     * \@Input {boolean} [filterable=true] Boolean to make filterable the table, To enable filtering of columns use
     * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
     * @type {?}
     */
    StTableComponent.prototype.filterable;
    /**
     * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
     *  deselect all rows
     * @type {?}
     */
    StTableComponent.prototype.selectableAll;
    /**
     * \@Input {Order} [currentOrder=''] It specifies what is the current order applied to the table
     * @type {?}
     */
    StTableComponent.prototype.currentOrder;
    /**
     * \@Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content
     * @type {?}
     */
    StTableComponent.prototype.templateContentFilter;
    /**
     * \@Input {boolean[]} [statusFilter=''] List of status filter by column, needed with templateContentFilter
     * @type {?}
     */
    StTableComponent.prototype.statusFilter;
    /**
     * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
     * @type {?}
     */
    StTableComponent.prototype.iconClasses;
    /**
     * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
     * @type {?}
     */
    StTableComponent.prototype.changeOrder;
    /**
     * \@Output {boolean} [selectAll=''] Event emitted when user interacts with the checkbox to select or deselect
     * all rows
     * @type {?}
     */
    StTableComponent.prototype.selectAll;
    /**
     * \@Output {string} [clickFilter=] Event emitted when clicking on filters icon
     * @type {?}
     */
    StTableComponent.prototype.clickFilter;
    /**
     * \@Output {StTableHeader[]} [selectFilters=''] Event emitted  when user interacts with filter button without a custom template
     * @type {?}
     */
    StTableComponent.prototype.selectFilters;
    /** @type {?} */
    StTableComponent.prototype.tableClasses;
    /** @type {?} */
    StTableComponent.prototype.orderTypes;
    /** @type {?} */
    StTableComponent.prototype.visibleFilter;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._fixedHeader;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._stickyHoverMenu;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._selectedAll;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._hasHoverMenu;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._customClasses;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10YWJsZS9zdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNKLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxJQUFJLFVBQVUsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdEN0MsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQWhCLGdCQUFnQjs7OztJQWlIMUIsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUEzR2pDLFdBQU0sR0FBWSxJQUFJLENBQUM7Ozs7O1FBS3ZCLGFBQVEsR0FBWSxJQUFJLENBQUM7Ozs7O1FBS3pCLGVBQVUsR0FBWSxLQUFLLENBQUM7Ozs7O1FBSzVCLGtCQUFhLEdBQVksS0FBSyxDQUFDOzs7O1FBVS9CLGdCQUFXLEdBQXdCLElBQUksa0JBQWtCLEVBQUUsQ0FBQzs7OztRQTREM0QsZ0JBQVcsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7Ozs7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Ozs7O0lBS3JDLHlDQUF3Qzs7Ozs7SUFHeEMsd0NBQTZCOzs7OztJQUc3QixpREFBa0Q7Ozs7O0lBRWxELHdDQUFrQzs7Ozs7SUFFbEMsdUNBQXFFOzs7OztJQTREckUsdUNBQWdFOzs7Ozs7SUFJaEUscUNBQWdFOzs7OztJQUdoRSx1Q0FBd0U7Ozs7O0lBR3hFLHlDQUE0RTs7SUFFNUUsd0NBQThCOztJQUM5QixzQ0FBb0M7O0lBQ3BDLHlDQUFrQzs7Ozs7SUFFbEMsd0NBQXNDOzs7OztJQUN0Qyw0Q0FBMEM7Ozs7O0lBQzFDLHdDQUE4Qjs7Ozs7SUFDOUIseUNBQXVDOzs7OztJQUN2QywwQ0FBK0I7Ozs7O0lBRW5CLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgSG9zdEJpbmRpbmcsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXIsIE9SREVSX1RZUEUgfSBmcm9tICcuL3NoYXJlZC9vcmRlcic7XG5pbXBvcnQgeyBTdFRhYmxlSGVhZGVyIH0gZnJvbSAnLi9zaGFyZWQvdGFibGUtaGVhZGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBjbG9uZURlZXAgYXMgX2Nsb25lRGVlcCwgZ2V0IGFzIF9nZXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU3RUYWJsZUljb25DbGFzc2VzIH0gZnJvbSAnLi9zdC10YWJsZS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbVGFibGVdXG4gKlxuICogVGhlIHRhYmxlIGNvbXBvbmVudCBoYXMgYmVlbiBkZXNpZ25lZCB0byBkaXNwbGF5IGFueSBjb250ZW50IGxpa2UgaW1hZ2VzLCB0ZXh0LCBncmFwaHMsIGV0Yy5cbiAqXG4gKiAqIEBtb2RlbFxuICpcbiAqICAgW1N0VGFibGVIZWFkZXJdIHsuL3NoYXJlZC90YWJsZS1oZWFkZXIuaW50ZXJmYWNlLnRzI1N0VGFibGVIZWFkZXJ9XG4gKiAgIFtTdER5bmFtaWNUYWJsZUhlYWRlcl0gey4vc2hhcmVkL3RhYmxlLWhlYWRlci5pbnRlcmZhY2UudHMjU3RGaWx0ZXJFbGVtZW50fVxuICogICBbU3RGaWx0ZXJIZWFkZXJdIHsuL3NoYXJlZC90YWJsZS1oZWFkZXIuaW50ZXJmYWNlLnRzI1N0RmlsdGVySGVhZGVyfVxuICogICBbU3RUYWJsZUZpbHRlckljb25DbGFzc2VzXSB7Li9zdC10YWJsZS5pbnRlcmZhY2UudHMjU3RUYWJsZUZpbHRlckljb25DbGFzc2VzfVxuICogICBbU3RUYWJsZUljb25DbGFzc2VzXSB7Li9zdC10YWJsZS5pbnRlcmZhY2UudHMjU3RUYWJsZUljb25DbGFzc2VzfVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtdGFibGUgW2ZpZWxkc109XCJmaWVsZHNcIiBbc29ydGFibGVdPVwidHJ1ZVwiIChjaGFuZ2VPcmRlcik9XCJ5b3VyRnVuY3Rpb25Ub09yZGVyKCRldmVudClcIj5cbiAqIDx0ciBzdC10YWJsZS1yb3cgKm5nRm9yPVwibGV0IHVzZXJEYXRhIG9mIGRhdGFcIj5cbiAqIDx0ZCBzdC10YWJsZS1jZWxsIHN0LXRhYmxlLXJvdy1jb250ZW50PlxuICogICAgPGxhYmVsID57e3VzZXJEYXRhLmlkfX08L2xhYmVsPlxuICogPC90ZD5cbiAqIDx0ZCBzdC10YWJsZS1jZWxsIHN0LXRhYmxlLXJvdy1jb250ZW50PlxuICogICAgPGxhYmVsID57e3VzZXJEYXRhLm5hbWV9fTwvbGFiZWw+XG4gKiA8L3RkPlxuICogPHRkIHN0LXRhYmxlLWNlbGwgc3QtdGFibGUtcm93LWNvbnRlbnQ+XG4gKiAgICA8bGFiZWwgPnt7dXNlckRhdGEubGFzdE5hbWV9fTwvbGFiZWw+XG4gKiA8L3RkPlxuICogPHRkIHN0LXRhYmxlLWNlbGwgc3QtdGFibGUtcm93LWNvbnRlbnQ+XG4gKiAgICA8bGFiZWwgPnt7dXNlckRhdGEucGhvbmV9fTwvbGFiZWw+XG4gKiA8L3RkPlxuICogPHRkIHN0LXRhYmxlLWNlbGwgc3QtdGFibGUtcm93LWNvbnRlbnQ+XG4gKiAgICA8bGFiZWwgPnt7dXNlckRhdGEuY29tcGFueX19PC9sYWJlbD5cbiAqIDwvdGQ+XG4gKiA8dGQgc3QtdGFibGUtY2VsbCBzdC10YWJsZS1yb3ctY29udGVudD5cbiAqICAgIDxsYWJlbCA+e3t1c2VyRGF0YS5jb21wbGV0ZWRQcm9maWxlfX08L2xhYmVsPlxuICogPC90ZD5cbiAqIDx0ZCBzdC10YWJsZS1yb3ctaG92ZXI+XG4gKiAgICA8aSBjbGFzcz1cImljb24gaWNvbi1hcnJvdzJfcmlnaHRcIj48L2k+XG4gKiA8L3RkPlxuICogPC90cj5cbiAqIDwvc3QtdGFibGU+XG4gKiBgYGBcbiAqXG4gKi9cbkBTdEVnZW8oKVxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXRhYmxlJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIC8qKiBASW5wdXQge1N0VGFibGVIZWFkZXJbXX0gW2ZpZWxkcz0nJ10gTGlzdCBvZiBmaWVsZCBkaXNwbGF5ZWQgaW4gdGhlIGhlYWRlciAqL1xuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBmaWVsZHM6IFN0VGFibGVIZWFkZXJbXTtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3FhVGFnPScnXSBQcmVmaXggdXNlZCB0byBnZW5lcmF0ZSB0aGUgaWQgdmFsdWVzIGZvciBxYSB0ZXN0cyAqL1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtoZWFkZXI9dHJ1ZV0gQm9vbGVhbiB0byBzaG93IG9yIGhpZGUgdGhlIGhlYWRlciAqL1xuICAgQElucHV0KCkgaGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKlxuICAgICogQElucHV0IHtib29sZWFufSBbc29ydGFibGU9dHJ1ZV0gQm9vbGVhbiB0byBtYWtlIHNvcnRhYmxlIHRoZSB0YWJsZSwgVG8gZW5hYmxlIHNvcnRpbmcgb2YgY29sdW1ucyB1c2VcbiAgICAqIHRoZSBuZXcgXCJzb3J0YWJsZVwiIGZpZWxkIGluc2lkZSBzdFRhYmxlSGVhZGVyIG1vZGVsXG4gICAgKi9cbiAgIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKlxuICAgICogQElucHV0IHtib29sZWFufSBbZmlsdGVyYWJsZT10cnVlXSBCb29sZWFuIHRvIG1ha2UgZmlsdGVyYWJsZSB0aGUgdGFibGUsIFRvIGVuYWJsZSBmaWx0ZXJpbmcgb2YgY29sdW1ucyB1c2VcbiAgICAqIHRoZSBuZXcgXCJmaWx0ZXJhYmxlXCIgZmllbGQgaW5zaWRlIHN0VGFibGVIZWFkZXIgbW9kZWwgKG5lY2VzYXJ5IGRlZmluZSBmaWx0ZXJDb25maWcpLlxuICAgICovXG4gICBASW5wdXQoKSBmaWx0ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAvKipcbiAgICAqIEBJbnB1dCB7Ym9vbGVhbn0gW3NlbGVjdGFibGVBbGw9ZmFsc2VdIEJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgY2hlY2tib3ggaW4gdGhlIGhlYWRlciB0byBzZWxlY3Qgb3JcbiAgICAqICBkZXNlbGVjdCBhbGwgcm93c1xuICAgICovXG4gICBASW5wdXQoKSBzZWxlY3RhYmxlQWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIC8qKiBASW5wdXQge09yZGVyfSBbY3VycmVudE9yZGVyPScnXSBJdCBzcGVjaWZpZXMgd2hhdCBpcyB0aGUgY3VycmVudCBvcmRlciBhcHBsaWVkIHRvIHRoZSB0YWJsZSAqL1xuICAgQElucHV0KCkgY3VycmVudE9yZGVyOiBPcmRlcjtcblxuICAgLyoqIEBJbnB1dCB7VGVtcGxhdGVSZWZ9IFt0ZW1wbGF0ZUNvbnRlbnRGaWx0ZXI9dW5kZWZpbmVkXSBSZWZlcmVuY2UgdG8gcGFpbnQgYSBjdXN0b20gdGVtcGxhdGUgaW5zaWRlIHBvcG92ZXIgY29udGVudCAqL1xuICAgQElucHV0KCkgdGVtcGxhdGVDb250ZW50RmlsdGVyPzogVGVtcGxhdGVSZWY8YW55PjtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW5bXX0gW3N0YXR1c0ZpbHRlcj0nJ10gTGlzdCBvZiBzdGF0dXMgZmlsdGVyIGJ5IGNvbHVtbiwgbmVlZGVkIHdpdGggdGVtcGxhdGVDb250ZW50RmlsdGVyICovXG4gICBASW5wdXQoKSBzdGF0dXNGaWx0ZXI/OiBib29sZWFuW107XG4gICAvKiogQElucHV0IHtTdFRhYmxlSWNvbkNsYXNzZXN9IFtpY29uQ2xhc3Nlcz0nJ10gTGlzdCBvZiBpY29uIGNsYXNzZXMgKi9cbiAgIEBJbnB1dCgpIGljb25DbGFzc2VzPzogU3RUYWJsZUljb25DbGFzc2VzID0gbmV3IFN0VGFibGVJY29uQ2xhc3NlcygpO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbZml4ZWRIZWFkZXI9ZmFsc2VdIEJvb2xlYW4gdG8gZml4IHRoZSB0YWJsZSBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpXG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0LWN1c3RvbS1zY3JvbGxiYXInKVxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maXhlZC1oZWFkZXInKVxuICAgZ2V0IGZpeGVkSGVhZGVyKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZpeGVkSGVhZGVyO1xuICAgfVxuICAgc2V0IGZpeGVkSGVhZGVyKG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9maXhlZEhlYWRlciA9IG5ld1ZhbHVlO1xuICAgfVxuXG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzdGlja3lIb3Zlck1lbnU9ZmFsc2VdIEJvb2xlYW4gdG8gZml4IGhvdmVyIG1lbnUgYWx3YXlzIHZpc2libGUgKi9cbiAgIEBJbnB1dCgpXG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0aWNreS1ob3Zlci1tZW51JylcbiAgIGdldCBzdGlja3lIb3Zlck1lbnUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RpY2t5SG92ZXJNZW51O1xuICAgfVxuICAgc2V0IHN0aWNreUhvdmVyTWVudShuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5fc3RpY2t5SG92ZXJNZW51ID0gbmV3VmFsdWU7XG4gICB9XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2N1c3RvbUNsYXNzZXM9XSBDbGFzc2VzIGZvciBhZGRpbmcgc3R5bGVzIHRvIHRhYmxlIHRhZyBmcm9tIG91dHNpZGUuIFRoZXNlIGNhbiBiZTogc2VwYXJhdGVkLXJvd3MgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgY3VzdG9tQ2xhc3NlcygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1c3RvbUNsYXNzZXM7XG4gICB9XG5cbiAgIHNldCBjdXN0b21DbGFzc2VzKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMudGFibGVDbGFzc2VzW3RoaXMuX2N1c3RvbUNsYXNzZXNdID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fY3VzdG9tQ2xhc3NlcyA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy50YWJsZUNsYXNzZXNbdGhpcy5fY3VzdG9tQ2xhc3Nlc10gPSB0aGlzLl9jdXN0b21DbGFzc2VzO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2VsZWN0ZWRBbGw9ZmFsc2VdIEl0IHNwZWNpZmllcyBpZiBhbGwgcm93cyBhcmUgc2VsZWN0ZWQgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgc2VsZWN0ZWRBbGwoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRBbGw7XG4gICB9XG5cbiAgIHNldCBzZWxlY3RlZEFsbChuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRBbGwgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbaGFzSG92ZXJNZW51PWZhbHNlXSBJdCBzcGVjaWZpZXMgaWYgYSBtZW51IGhhcyB0byBiZSBkaXNwbGF5ZWQgd2hlbiB1c2VyIHB1dHMgdGhlIG1vdXNlIG92ZXJcbiAgICAqIHRoZSByb3dzLiBSZW1lbWJlciB0byBhZGQgYSBjZWxsIHdpdGggdGhlIHNlbGVjdG9yIHN0LXRhYmxlLXJvdy1ob3ZlciBmb3IgYWRkaW5nIGNvbnRlbnQgdG8gdGhlIG1lbnVcbiAgICAqL1xuICAgQElucHV0KClcbiAgIGdldCBoYXNIb3Zlck1lbnUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faGFzSG92ZXJNZW51O1xuICAgfVxuXG4gICBzZXQgaGFzSG92ZXJNZW51KG5ld1ZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9oYXNIb3Zlck1lbnUgPSBuZXdWYWx1ZTtcbiAgIH1cblxuICAgLyoqIEBPdXRwdXQge09yZGVyfSBbY2hhbmdlT3JkZXI9JyddIEV2ZW50IGVtaXR0ZWQgd2l0aCB0aGUgbmV3IG9yZGVyIHdoaWNoIGhhcyB0byBiZSBhcHBsaWVkIHRvIHRoZSB0YWJsZSByb3dzICovXG4gICBAT3V0cHV0KCkgY2hhbmdlT3JkZXI6IEV2ZW50RW1pdHRlcjxPcmRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAvKiogQE91dHB1dCB7Ym9vbGVhbn0gW3NlbGVjdEFsbD0nJ10gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIGNoZWNrYm94IHRvIHNlbGVjdCBvciBkZXNlbGVjdFxuICAgICogYWxsIHJvd3NcbiAgICAqL1xuICAgQE91dHB1dCgpIHNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAvKiogQE91dHB1dCB7c3RyaW5nfSBbY2xpY2tGaWx0ZXI9XSBFdmVudCBlbWl0dGVkIHdoZW4gY2xpY2tpbmcgb24gZmlsdGVycyBpY29uICAqL1xuICAgQE91dHB1dCgpIGNsaWNrRmlsdGVyOiBFdmVudEVtaXR0ZXI8U3RUYWJsZUhlYWRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIC8qKiBAT3V0cHV0IHtTdFRhYmxlSGVhZGVyW119IFtzZWxlY3RGaWx0ZXJzPScnXSBFdmVudCBlbWl0dGVkICB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggZmlsdGVyIGJ1dHRvbiB3aXRob3V0IGEgY3VzdG9tIHRlbXBsYXRlICovXG4gICBAT3V0cHV0KCkgc2VsZWN0RmlsdGVyczogRXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXJbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIHB1YmxpYyB0YWJsZUNsYXNzZXM6IGFueSA9IHt9O1xuICAgcHVibGljIG9yZGVyVHlwZXM6IGFueSA9IE9SREVSX1RZUEU7XG4gICBwdWJsaWMgdmlzaWJsZUZpbHRlcjogbnVtYmVyID0gLTE7XG5cbiAgIHByaXZhdGUgX2ZpeGVkSGVhZGVyOiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF9zdGlja3lIb3Zlck1lbnU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHByaXZhdGUgX3NlbGVjdGVkQWxsOiBib29sZWFuO1xuICAgcHJpdmF0ZSBfaGFzSG92ZXJNZW51OiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF9jdXN0b21DbGFzc2VzOiBzdHJpbmc7XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlcmFibGUgJiYgIXRoaXMuc3RhdHVzRmlsdGVyKSB7XG4gICAgICAgICB0aGlzLnN0YXR1c0ZpbHRlciA9IG5ldyBBcnJheSh0aGlzLmZpZWxkcy5sZW5ndGgpO1xuICAgICAgICAgdGhpcy5zdGF0dXNGaWx0ZXIuZmlsbChmYWxzZSk7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBnZXRIZWFkZXJJdGVtQ2xhc3MoZmllbGQ6IFN0VGFibGVIZWFkZXIpOiBzdHJpbmcge1xuICAgICAgbGV0IGlzT3JkZXJBc2MgPSB0aGlzLmlzU29ydGVkQnlGaWVsZEFuZERpcmVjdGlvbihmaWVsZCwgdGhpcy5vcmRlclR5cGVzLkFTQyk7XG4gICAgICByZXR1cm4gaXNPcmRlckFzYyA/IHRoaXMuaWNvbkNsYXNzZXMuc29ydC5hc2MgOiB0aGlzLmljb25DbGFzc2VzLnNvcnQuZGVzYztcbiAgIH1cblxuICAgcHVibGljIGlzU29ydGFibGUoZmllbGQ6IFN0VGFibGVIZWFkZXIpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBmaWVsZCAmJiBmaWVsZC5zb3J0YWJsZSAhPT0gdW5kZWZpbmVkID8gZmllbGQuc29ydGFibGUgOiB0aGlzLnNvcnRhYmxlO1xuICAgfVxuXG4gICBwdWJsaWMgaXNTb3J0ZWRCeUZpZWxkKGZpZWxkOiBTdFRhYmxlSGVhZGVyKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50T3JkZXIgJiYgdGhpcy5jdXJyZW50T3JkZXIub3JkZXJCeSA9PT0gZmllbGQuaWQ7XG4gICB9XG5cbiAgIHB1YmxpYyBpc0ZpbHRlcmFibGUoZmllbGQ6IFN0VGFibGVIZWFkZXIpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmFibGUgJiYgKF9nZXQoZmllbGQsICdmaWx0ZXJzLmZpbHRlckNvbmZpZycpKSB8fFxuICAgICAgICAgICAgKHRoaXMudGVtcGxhdGVDb250ZW50RmlsdGVyICYmIF9nZXQoZmllbGQsICdmaWx0ZXJzJykpIHx8XG4gICAgICAgICAgICBfZ2V0KGZpZWxkLCAnZmlsdGVycy50ZW1wbGF0ZVJlZicpO1xuICAgfVxuXG4gICBwdWJsaWMgb25DbGlja1BvcG92ZXIoZXZlbnQ6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIGZpZWxkOiBTdFRhYmxlSGVhZGVyKTogdm9pZCB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnZpc2libGVGaWx0ZXIgPT09IGluZGV4KSB7XG4gICAgICAgICB0aGlzLnZpc2libGVGaWx0ZXIgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLnZpc2libGVGaWx0ZXIgPSBpbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xpY2tGaWx0ZXIuZW1pdChmaWVsZCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcHVibGljIG9uSGlkZVBvcG92ZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLnZpc2libGVGaWx0ZXIgPSAtMTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBwdWJsaWMgb25DaGFuZ2VPcmRlcihmaWVsZDogU3RUYWJsZUhlYWRlcik6IHZvaWQge1xuICAgICAgbGV0IF9jdXJyZW50T3JkZXI6IE9yZGVyO1xuICAgICAgaWYgKGZpZWxkICYmIHRoaXMuaXNTb3J0YWJsZShmaWVsZCkpIHtcbiAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRPcmRlciAmJiB0aGlzLmN1cnJlbnRPcmRlci5vcmRlckJ5ID09PSBmaWVsZC5pZCkge1xuICAgICAgICAgICAgX2N1cnJlbnRPcmRlciA9IHRoaXMuY2hhbmdlT3JkZXJEaXJlY3Rpb24oKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfY3VycmVudE9yZGVyID0gbmV3IE9yZGVyKGZpZWxkLmlkLCBPUkRFUl9UWVBFLkFTQyk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLmNoYW5nZU9yZGVyLmVtaXQoX2N1cnJlbnRPcmRlcik7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBvblNlbGVjdEFsbChldmVudDogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnNlbGVjdEFsbC5lbWl0KGV2ZW50LmNoZWNrZWQpO1xuICAgfVxuXG4gICBwdWJsaWMgb25TZWxlY3RlZEZpbHRlcnMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBsZXQgc2VsZWN0ZWRGaWx0ZXJzID0gX2Nsb25lRGVlcCh0aGlzLmZpZWxkcyk7XG4gICAgICBzZWxlY3RlZEZpbHRlcnMgPSBzZWxlY3RlZEZpbHRlcnMuZmlsdGVyKChmaWVsZCkgPT4ge1xuICAgICAgICAgaWYgKF9nZXQoZmllbGQsICdmaWx0ZXJzLmZpbHRlckNvbmZpZycpKSB7XG4gICAgICAgICAgICBmaWVsZC5maWx0ZXJzLmZpbHRlckNvbmZpZyA9IGZpZWxkLmZpbHRlcnMuZmlsdGVyQ29uZmlnLmZpbHRlcigoY29uZikgPT4gY29uZi5zZWxlY3RlZCk7XG4gICAgICAgICAgICBpZiAoZmllbGQuZmlsdGVycy5maWx0ZXJDb25maWcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNlbGVjdEZpbHRlcnMuZW1pdChzZWxlY3RlZEZpbHRlcnMpO1xuICAgfVxuXG4gICBwcml2YXRlIGNoYW5nZU9yZGVyRGlyZWN0aW9uKCk6IE9yZGVyIHtcbiAgICAgIGxldCBuZXdEaXJlY3Rpb24gPSB0aGlzLmN1cnJlbnRPcmRlci50eXBlID09PSBPUkRFUl9UWVBFLkFTQyA/IE9SREVSX1RZUEUuREVTQyA6IE9SREVSX1RZUEUuQVNDO1xuICAgICAgcmV0dXJuIG5ldyBPcmRlcih0aGlzLmN1cnJlbnRPcmRlci5vcmRlckJ5LCBuZXdEaXJlY3Rpb24pO1xuICAgfVxuXG4gICBwcml2YXRlIGlzU29ydGVkQnlGaWVsZEFuZERpcmVjdGlvbihmaWVsZDogU3RUYWJsZUhlYWRlciwgb3JkZXJUeXBlOiBPUkRFUl9UWVBFKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc1NvcnRlZEJ5RmllbGQoZmllbGQpICYmIHRoaXMuY3VycmVudE9yZGVyLnR5cGUgPT09IG9yZGVyVHlwZTtcbiAgIH1cbn1cbiJdfQ==