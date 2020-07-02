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
var StTableComponent = /** @class */ (function () {
    function StTableComponent(_cd) {
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
    Object.defineProperty(StTableComponent.prototype, "fixedHeader", {
        /** @Input {boolean} [fixedHeader=false] Boolean to fix the table header */
        get: /**
         * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
         * @return {?}
         */
        function () {
            return this._fixedHeader;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._fixedHeader = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "stickyHoverMenu", {
        /** @Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible */
        get: /**
         * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
         * @return {?}
         */
        function () {
            return this._stickyHoverMenu;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._stickyHoverMenu = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "customClasses", {
        /** @Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows */
        get: /**
         * \@Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows
         * @return {?}
         */
        function () {
            return this._customClasses;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.tableClasses[this._customClasses] = undefined;
            this._customClasses = newValue;
            this.tableClasses[this._customClasses] = this._customClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "selectedAll", {
        /** @Input {boolean} [selectedAll=false] It specifies if all rows are selected */
        get: /**
         * \@Input {boolean} [selectedAll=false] It specifies if all rows are selected
         * @return {?}
         */
        function () {
            return this._selectedAll;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._selectedAll = newValue;
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "hasHoverMenu", {
        /** @Input {boolean} [hasHoverMenu=false] It specifies if a menu has to be displayed when user puts the mouse over
         * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
         */
        get: /**
         * \@Input {boolean} [hasHoverMenu=false] It specifies if a menu has to be displayed when user puts the mouse over
         * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
         * @return {?}
         */
        function () {
            return this._hasHoverMenu;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._hasHoverMenu = newValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filterable && !this.statusFilter) {
            this.statusFilter = new Array(this.fields.length);
            this.statusFilter.fill(false);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.getHeaderItemClass = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var isOrderAsc = this.isSortedByFieldAndDirection(field, this.orderTypes.ASC);
        return isOrderAsc ? this.iconClasses.sort.asc : this.iconClasses.sort.desc;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.isSortable = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field && field.sortable !== undefined ? field.sortable : this.sortable;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.isSortedByField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return this.currentOrder && this.currentOrder.orderBy === field.id;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.isFilterable = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return this.filterable && (_get(field, 'filters.filterConfig')) ||
            (this.templateContentFilter && _get(field, 'filters')) ||
            _get(field, 'filters.templateRef');
    };
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.onClickPopover = /**
     * @param {?} event
     * @param {?} index
     * @param {?} field
     * @return {?}
     */
    function (event, index, field) {
        event.stopPropagation();
        if (this.visibleFilter === index) {
            this.visibleFilter = -1;
        }
        else {
            this.visibleFilter = index;
        }
        this.clickFilter.emit(field);
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTableComponent.prototype.onHidePopover = /**
     * @return {?}
     */
    function () {
        this.visibleFilter = -1;
        this._cd.markForCheck();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.onChangeOrder = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var _currentOrder;
        if (field && this.isSortable(field)) {
            if (this.currentOrder && this.currentOrder.orderBy === field.id) {
                _currentOrder = this.changeOrderDirection();
            }
            else {
                _currentOrder = new Order(field.id, ORDER_TYPE.ASC);
            }
            this.changeOrder.emit(_currentOrder);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTableComponent.prototype.onSelectAll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectAll.emit(event.checked);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTableComponent.prototype.onSelectedFilters = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var selectedFilters = _cloneDeep(this.fields);
        selectedFilters = selectedFilters.filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (_get(field, 'filters.filterConfig')) {
                field.filters.filterConfig = field.filters.filterConfig.filter((/**
                 * @param {?} conf
                 * @return {?}
                 */
                function (conf) { return conf.selected; }));
                if (field.filters.filterConfig.length > 0) {
                    return field;
                }
            }
        }));
        this.selectFilters.emit(selectedFilters);
    };
    /**
     * @private
     * @return {?}
     */
    StTableComponent.prototype.changeOrderDirection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newDirection = this.currentOrder.type === ORDER_TYPE.ASC ? ORDER_TYPE.DESC : ORDER_TYPE.ASC;
        return new Order(this.currentOrder.orderBy, newDirection);
    };
    /**
     * @private
     * @param {?} field
     * @param {?} orderType
     * @return {?}
     */
    StTableComponent.prototype.isSortedByFieldAndDirection = /**
     * @private
     * @param {?} field
     * @param {?} orderType
     * @return {?}
     */
    function (field, orderType) {
        return this.isSortedByField(field) && this.currentOrder.type === orderType;
    };
    StTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-table',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<table class='st-table' [ngClass]=\"tableClasses\" [attr.id]='qaTag'>\n   <thead>\n   <tr *ngIf=\"header\" class='st-table__header'>\n\n      <th *ngFor='let field of fields; let i = index' class='st-table__header-item' [ngClass]=\"{\n             'st-table__header-item--selected': isSortedByField(field),\n             'st-table__header-item--sortable': isSortable(field),\n             'st-table__header-item--filterable': isFilterable(field)}\">\n         <st-checkbox *ngIf=\"i == 0 && selectableAll\" qaTag=\"select-all-checkbox\" class=\"st-table__checkbox\"\n                      name=\"selectAll\"\n                      [checked]=\"selectedAll\" (change)=\"onSelectAll($event)\">\n         </st-checkbox>\n         <label class='st-table__header-text' (click)=\"onChangeOrder(field)\">\n            <i *ngIf=\"isSortedByField(field)\" class='st-table__order-arrow' [ngClass]=\"getHeaderItemClass(field)\">\n            </i>\n            {{field.label}}\n         </label>\n         <st-popover-filter *ngIf=\"isFilterable(field)\"\n                            [field]=\"field\"\n                            [index]=\"i\"\n                            [templateContentFilter]=\"templateContentFilter\"\n                            [filtered]=\"statusFilter[i]\"\n                            [hidden]=\"visibleFilter !== i\"\n                            [iconClasses]=\"iconClasses?.filter\"\n                            (filter)=\"onSelectedFilters($event)\"\n                            (click)=\"onClickPopover($event, i, field)\"\n                            (clickOutside)=\"onHidePopover()\">\n         </st-popover-filter>\n      </th>\n      <th *ngIf=\"hasHoverMenu\"></th> <!-- For hover cell -->\n   </tr>\n   </thead>\n   <ng-content></ng-content>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-table{width:100%}.st-table__header-item{text-transform:capitalize;position:relative;vertical-align:bottom}.st-table__header-text{position:relative;height:100%;display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;cursor:inherit}"]
                }] }
    ];
    /** @nocollapse */
    StTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return StTableComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10YWJsZS9zdC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNKLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxJQUFJLFVBQVUsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF5S3ZELDBCQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQTNHakMsV0FBTSxHQUFZLElBQUksQ0FBQzs7Ozs7UUFLdkIsYUFBUSxHQUFZLElBQUksQ0FBQzs7Ozs7UUFLekIsZUFBVSxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFLNUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7Ozs7UUFVL0IsZ0JBQVcsR0FBd0IsSUFBSSxrQkFBa0IsRUFBRSxDQUFDOzs7O1FBNEQzRCxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7OztRQUl0RCxjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7Ozs7UUFHdEQsZ0JBQVcsR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUc5RCxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJFLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGVBQVUsR0FBUSxVQUFVLENBQUM7UUFDN0Isa0JBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUUxQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFFbEMsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFJdkMsQ0FBQztJQWhGRCxzQkFHSSx5Q0FBVztRQUpmLDJFQUEyRTs7Ozs7UUFDM0U7WUFJRyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFDRCxVQUFnQixRQUFpQjtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7T0FIQTtJQU9ELHNCQUVJLDZDQUFlO1FBSG5CLHdGQUF3Rjs7Ozs7UUFDeEY7WUFHRyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNoQyxDQUFDOzs7OztRQUNELFVBQW9CLFFBQWlCO1lBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFDSSwyQ0FBYTtRQUZqQix5SEFBeUg7Ozs7O1FBQ3pIO1lBRUcsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzlCLENBQUM7Ozs7O1FBRUQsVUFBa0IsUUFBZ0I7WUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDaEUsQ0FBQzs7O09BTkE7SUFTRCxzQkFDSSx5Q0FBVztRQUZmLGlGQUFpRjs7Ozs7UUFDakY7WUFFRyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFFRCxVQUFnQixRQUFpQjtZQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUxBO0lBVUQsc0JBQ0ksMENBQVk7UUFKaEI7O1dBRUc7Ozs7OztRQUNIO1lBRUcsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzdCLENBQUM7Ozs7O1FBRUQsVUFBaUIsUUFBaUI7WUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7Ozs7SUFnQ0QsbUNBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDSixDQUFDOzs7OztJQUVNLDZDQUFrQjs7OztJQUF6QixVQUEwQixLQUFvQjs7WUFDdkMsVUFBVSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDN0UsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRU0scUNBQVU7Ozs7SUFBakIsVUFBa0IsS0FBb0I7UUFDbkMsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFFTSwwQ0FBZTs7OztJQUF0QixVQUF1QixLQUFvQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7OztJQUVNLHVDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQW9CO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUN6RCxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7O0lBRU0seUNBQWM7Ozs7OztJQUFyQixVQUFzQixLQUFpQixFQUFFLEtBQWEsRUFBRSxLQUFvQjtRQUN6RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVNLHdDQUFhOzs7SUFBcEI7UUFDRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSx3Q0FBYTs7OztJQUFwQixVQUFxQixLQUFvQjs7WUFDbEMsYUFBb0I7UUFDeEIsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTtnQkFDOUQsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzlDO2lCQUFNO2dCQUNKLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0RDtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxzQ0FBVzs7OztJQUFsQixVQUFtQixLQUFVO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVNLDRDQUFpQjs7OztJQUF4QixVQUF5QixLQUFZOztZQUM5QixlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0MsZUFBZSxHQUFHLGVBQWUsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxLQUFLO1lBQzVDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxFQUFFO2dCQUN0QyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNOzs7O2dCQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLEVBQUMsQ0FBQztnQkFDeEYsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN4QyxPQUFPLEtBQUssQ0FBQztpQkFDZjthQUNIO1FBQ0osQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVPLCtDQUFvQjs7OztJQUE1Qjs7WUFDTyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUc7UUFDL0YsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRU8sc0RBQTJCOzs7Ozs7SUFBbkMsVUFBb0MsS0FBb0IsRUFBRSxTQUFxQjtRQUM1RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzlFLENBQUM7O2dCQWpGd0IsaUJBQWlCOzs7Z0JBeEg1QyxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHFyRUFBd0M7b0JBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDakQ7Ozs7Z0JBNURpQyxpQkFBaUI7Ozt5QkFnRS9DLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLOzJCQUtMLEtBQUs7NkJBS0wsS0FBSztnQ0FLTCxLQUFLOytCQUdMLEtBQUs7d0NBR0wsS0FBSzsrQkFFTCxLQUFLOzhCQUVMLEtBQUs7OEJBR0wsS0FBSyxZQUNMLFdBQVcsU0FBQywyQkFBMkIsY0FDdkMsV0FBVyxTQUFDLG9CQUFvQjtrQ0FVaEMsS0FBSyxZQUNMLFdBQVcsU0FBQyx5QkFBeUI7Z0NBU3JDLEtBQUs7OEJBWUwsS0FBSzsrQkFhTCxLQUFLOzhCQVVMLE1BQU07NEJBSU4sTUFBTTs4QkFHTixNQUFNO2dDQUdOLE1BQU07O0lBbkdnQjtRQUFiLFVBQVUsRUFBRTs7b0RBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUZyQyxnQkFBZ0I7UUFSNUIsTUFBTSxFQUFFO2lEQXlIbUIsaUJBQWlCO09BakhoQyxnQkFBZ0IsQ0FtTTVCO0lBQUQsdUJBQUM7Q0FBQSxJQUFBO1NBbk1ZLGdCQUFnQjs7Ozs7O0lBRTFCLGtDQUErQzs7Ozs7SUFFL0MsaUNBQXVCOzs7OztJQUV2QixrQ0FBZ0M7Ozs7OztJQUtoQyxvQ0FBa0M7Ozs7OztJQUtsQyxzQ0FBcUM7Ozs7OztJQUtyQyx5Q0FBd0M7Ozs7O0lBR3hDLHdDQUE2Qjs7Ozs7SUFHN0IsaURBQWtEOzs7OztJQUVsRCx3Q0FBa0M7Ozs7O0lBRWxDLHVDQUFxRTs7Ozs7SUE0RHJFLHVDQUFnRTs7Ozs7O0lBSWhFLHFDQUFnRTs7Ozs7SUFHaEUsdUNBQXdFOzs7OztJQUd4RSx5Q0FBNEU7O0lBRTVFLHdDQUE4Qjs7SUFDOUIsc0NBQW9DOztJQUNwQyx5Q0FBa0M7Ozs7O0lBRWxDLHdDQUFzQzs7Ozs7SUFDdEMsNENBQTBDOzs7OztJQUMxQyx3Q0FBOEI7Ozs7O0lBQzlCLHlDQUF1Qzs7Ozs7SUFDdkMsMENBQStCOzs7OztJQUVuQiwrQkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIEhvc3RCaW5kaW5nLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyLCBPUkRFUl9UWVBFIH0gZnJvbSAnLi9zaGFyZWQvb3JkZXInO1xuaW1wb3J0IHsgU3RUYWJsZUhlYWRlciB9IGZyb20gJy4vc2hhcmVkL3RhYmxlLWhlYWRlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIGFzIF9jbG9uZURlZXAsIGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFN0VGFibGVJY29uQ2xhc3NlcyB9IGZyb20gJy4vc3QtdGFibGUuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1RhYmxlXVxuICpcbiAqIFRoZSB0YWJsZSBjb21wb25lbnQgaGFzIGJlZW4gZGVzaWduZWQgdG8gZGlzcGxheSBhbnkgY29udGVudCBsaWtlIGltYWdlcywgdGV4dCwgZ3JhcGhzLCBldGMuXG4gKlxuICogKiBAbW9kZWxcbiAqXG4gKiAgIFtTdFRhYmxlSGVhZGVyXSB7Li9zaGFyZWQvdGFibGUtaGVhZGVyLmludGVyZmFjZS50cyNTdFRhYmxlSGVhZGVyfVxuICogICBbU3REeW5hbWljVGFibGVIZWFkZXJdIHsuL3NoYXJlZC90YWJsZS1oZWFkZXIuaW50ZXJmYWNlLnRzI1N0RmlsdGVyRWxlbWVudH1cbiAqICAgW1N0RmlsdGVySGVhZGVyXSB7Li9zaGFyZWQvdGFibGUtaGVhZGVyLmludGVyZmFjZS50cyNTdEZpbHRlckhlYWRlcn1cbiAqICAgW1N0VGFibGVGaWx0ZXJJY29uQ2xhc3Nlc10gey4vc3QtdGFibGUuaW50ZXJmYWNlLnRzI1N0VGFibGVGaWx0ZXJJY29uQ2xhc3Nlc31cbiAqICAgW1N0VGFibGVJY29uQ2xhc3Nlc10gey4vc3QtdGFibGUuaW50ZXJmYWNlLnRzI1N0VGFibGVJY29uQ2xhc3Nlc31cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXRhYmxlIFtmaWVsZHNdPVwiZmllbGRzXCIgW3NvcnRhYmxlXT1cInRydWVcIiAoY2hhbmdlT3JkZXIpPVwieW91ckZ1bmN0aW9uVG9PcmRlcigkZXZlbnQpXCI+XG4gKiA8dHIgc3QtdGFibGUtcm93ICpuZ0Zvcj1cImxldCB1c2VyRGF0YSBvZiBkYXRhXCI+XG4gKiA8dGQgc3QtdGFibGUtY2VsbCBzdC10YWJsZS1yb3ctY29udGVudD5cbiAqICAgIDxsYWJlbCA+e3t1c2VyRGF0YS5pZH19PC9sYWJlbD5cbiAqIDwvdGQ+XG4gKiA8dGQgc3QtdGFibGUtY2VsbCBzdC10YWJsZS1yb3ctY29udGVudD5cbiAqICAgIDxsYWJlbCA+e3t1c2VyRGF0YS5uYW1lfX08L2xhYmVsPlxuICogPC90ZD5cbiAqIDx0ZCBzdC10YWJsZS1jZWxsIHN0LXRhYmxlLXJvdy1jb250ZW50PlxuICogICAgPGxhYmVsID57e3VzZXJEYXRhLmxhc3ROYW1lfX08L2xhYmVsPlxuICogPC90ZD5cbiAqIDx0ZCBzdC10YWJsZS1jZWxsIHN0LXRhYmxlLXJvdy1jb250ZW50PlxuICogICAgPGxhYmVsID57e3VzZXJEYXRhLnBob25lfX08L2xhYmVsPlxuICogPC90ZD5cbiAqIDx0ZCBzdC10YWJsZS1jZWxsIHN0LXRhYmxlLXJvdy1jb250ZW50PlxuICogICAgPGxhYmVsID57e3VzZXJEYXRhLmNvbXBhbnl9fTwvbGFiZWw+XG4gKiA8L3RkPlxuICogPHRkIHN0LXRhYmxlLWNlbGwgc3QtdGFibGUtcm93LWNvbnRlbnQ+XG4gKiAgICA8bGFiZWwgPnt7dXNlckRhdGEuY29tcGxldGVkUHJvZmlsZX19PC9sYWJlbD5cbiAqIDwvdGQ+XG4gKiA8dGQgc3QtdGFibGUtcm93LWhvdmVyPlxuICogICAgPGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3cyX3JpZ2h0XCI+PC9pPlxuICogPC90ZD5cbiAqIDwvdHI+XG4gKiA8L3N0LXRhYmxlPlxuICogYGBgXG4gKlxuICovXG5AU3RFZ2VvKClcbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10YWJsZScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3RUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAvKiogQElucHV0IHtTdFRhYmxlSGVhZGVyW119IFtmaWVsZHM9JyddIExpc3Qgb2YgZmllbGQgZGlzcGxheWVkIGluIHRoZSBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgZmllbGRzOiBTdFRhYmxlSGVhZGVyW107XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gUHJlZml4IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGlkIHZhbHVlcyBmb3IgcWEgdGVzdHMgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbaGVhZGVyPXRydWVdIEJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIHRoZSBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpIGhlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAvKipcbiAgICAqIEBJbnB1dCB7Ym9vbGVhbn0gW3NvcnRhYmxlPXRydWVdIEJvb2xlYW4gdG8gbWFrZSBzb3J0YWJsZSB0aGUgdGFibGUsIFRvIGVuYWJsZSBzb3J0aW5nIG9mIGNvbHVtbnMgdXNlXG4gICAgKiB0aGUgbmV3IFwic29ydGFibGVcIiBmaWVsZCBpbnNpZGUgc3RUYWJsZUhlYWRlciBtb2RlbFxuICAgICovXG4gICBASW5wdXQoKSBzb3J0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAvKipcbiAgICAqIEBJbnB1dCB7Ym9vbGVhbn0gW2ZpbHRlcmFibGU9dHJ1ZV0gQm9vbGVhbiB0byBtYWtlIGZpbHRlcmFibGUgdGhlIHRhYmxlLCBUbyBlbmFibGUgZmlsdGVyaW5nIG9mIGNvbHVtbnMgdXNlXG4gICAgKiB0aGUgbmV3IFwiZmlsdGVyYWJsZVwiIGZpZWxkIGluc2lkZSBzdFRhYmxlSGVhZGVyIG1vZGVsIChuZWNlc2FyeSBkZWZpbmUgZmlsdGVyQ29uZmlnKS5cbiAgICAqL1xuICAgQElucHV0KCkgZmlsdGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqXG4gICAgKiBASW5wdXQge2Jvb2xlYW59IFtzZWxlY3RhYmxlQWxsPWZhbHNlXSBCb29sZWFuIHRvIHNob3cgb3IgaGlkZSBhIGNoZWNrYm94IGluIHRoZSBoZWFkZXIgdG8gc2VsZWN0IG9yXG4gICAgKiAgZGVzZWxlY3QgYWxsIHJvd3NcbiAgICAqL1xuICAgQElucHV0KCkgc2VsZWN0YWJsZUFsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAvKiogQElucHV0IHtPcmRlcn0gW2N1cnJlbnRPcmRlcj0nJ10gSXQgc3BlY2lmaWVzIHdoYXQgaXMgdGhlIGN1cnJlbnQgb3JkZXIgYXBwbGllZCB0byB0aGUgdGFibGUgKi9cbiAgIEBJbnB1dCgpIGN1cnJlbnRPcmRlcjogT3JkZXI7XG5cbiAgIC8qKiBASW5wdXQge1RlbXBsYXRlUmVmfSBbdGVtcGxhdGVDb250ZW50RmlsdGVyPXVuZGVmaW5lZF0gUmVmZXJlbmNlIHRvIHBhaW50IGEgY3VzdG9tIHRlbXBsYXRlIGluc2lkZSBwb3BvdmVyIGNvbnRlbnQgKi9cbiAgIEBJbnB1dCgpIHRlbXBsYXRlQ29udGVudEZpbHRlcj86IFRlbXBsYXRlUmVmPGFueT47XG4gICAvKiogQElucHV0IHtib29sZWFuW119IFtzdGF0dXNGaWx0ZXI9JyddIExpc3Qgb2Ygc3RhdHVzIGZpbHRlciBieSBjb2x1bW4sIG5lZWRlZCB3aXRoIHRlbXBsYXRlQ29udGVudEZpbHRlciAqL1xuICAgQElucHV0KCkgc3RhdHVzRmlsdGVyPzogYm9vbGVhbltdO1xuICAgLyoqIEBJbnB1dCB7U3RUYWJsZUljb25DbGFzc2VzfSBbaWNvbkNsYXNzZXM9JyddIExpc3Qgb2YgaWNvbiBjbGFzc2VzICovXG4gICBASW5wdXQoKSBpY29uQ2xhc3Nlcz86IFN0VGFibGVJY29uQ2xhc3NlcyA9IG5ldyBTdFRhYmxlSWNvbkNsYXNzZXMoKTtcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2ZpeGVkSGVhZGVyPWZhbHNlXSBCb29sZWFuIHRvIGZpeCB0aGUgdGFibGUgaGVhZGVyICovXG4gICBASW5wdXQoKVxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC1jdXN0b20tc2Nyb2xsYmFyJylcbiAgIEBIb3N0QmluZGluZygnY2xhc3MuZml4ZWQtaGVhZGVyJylcbiAgIGdldCBmaXhlZEhlYWRlcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9maXhlZEhlYWRlcjtcbiAgIH1cbiAgIHNldCBmaXhlZEhlYWRlcihuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5fZml4ZWRIZWFkZXIgPSBuZXdWYWx1ZTtcbiAgIH1cblxuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbc3RpY2t5SG92ZXJNZW51PWZhbHNlXSBCb29sZWFuIHRvIGZpeCBob3ZlciBtZW51IGFsd2F5cyB2aXNpYmxlICovXG4gICBASW5wdXQoKVxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdGlja3ktaG92ZXItbWVudScpXG4gICBnZXQgc3RpY2t5SG92ZXJNZW51KCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0aWNreUhvdmVyTWVudTtcbiAgIH1cbiAgIHNldCBzdGlja3lIb3Zlck1lbnUobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3N0aWNreUhvdmVyTWVudSA9IG5ld1ZhbHVlO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtjdXN0b21DbGFzc2VzPV0gQ2xhc3NlcyBmb3IgYWRkaW5nIHN0eWxlcyB0byB0YWJsZSB0YWcgZnJvbSBvdXRzaWRlLiBUaGVzZSBjYW4gYmU6IHNlcGFyYXRlZC1yb3dzICovXG4gICBASW5wdXQoKVxuICAgZ2V0IGN1c3RvbUNsYXNzZXMoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzc2VzO1xuICAgfVxuXG4gICBzZXQgY3VzdG9tQ2xhc3NlcyhuZXdWYWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLnRhYmxlQ2xhc3Nlc1t0aGlzLl9jdXN0b21DbGFzc2VzXSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2N1c3RvbUNsYXNzZXMgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudGFibGVDbGFzc2VzW3RoaXMuX2N1c3RvbUNsYXNzZXNdID0gdGhpcy5fY3VzdG9tQ2xhc3NlcztcbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3NlbGVjdGVkQWxsPWZhbHNlXSBJdCBzcGVjaWZpZXMgaWYgYWxsIHJvd3MgYXJlIHNlbGVjdGVkICovXG4gICBASW5wdXQoKVxuICAgZ2V0IHNlbGVjdGVkQWxsKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQWxsO1xuICAgfVxuXG4gICBzZXQgc2VsZWN0ZWRBbGwobmV3VmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQWxsID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2hhc0hvdmVyTWVudT1mYWxzZV0gSXQgc3BlY2lmaWVzIGlmIGEgbWVudSBoYXMgdG8gYmUgZGlzcGxheWVkIHdoZW4gdXNlciBwdXRzIHRoZSBtb3VzZSBvdmVyXG4gICAgKiB0aGUgcm93cy4gUmVtZW1iZXIgdG8gYWRkIGEgY2VsbCB3aXRoIHRoZSBzZWxlY3RvciBzdC10YWJsZS1yb3ctaG92ZXIgZm9yIGFkZGluZyBjb250ZW50IHRvIHRoZSBtZW51XG4gICAgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgaGFzSG92ZXJNZW51KCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2hhc0hvdmVyTWVudTtcbiAgIH1cblxuICAgc2V0IGhhc0hvdmVyTWVudShuZXdWYWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5faGFzSG92ZXJNZW51ID0gbmV3VmFsdWU7XG4gICB9XG5cbiAgIC8qKiBAT3V0cHV0IHtPcmRlcn0gW2NoYW5nZU9yZGVyPScnXSBFdmVudCBlbWl0dGVkIHdpdGggdGhlIG5ldyBvcmRlciB3aGljaCBoYXMgdG8gYmUgYXBwbGllZCB0byB0aGUgdGFibGUgcm93cyAqL1xuICAgQE91dHB1dCgpIGNoYW5nZU9yZGVyOiBFdmVudEVtaXR0ZXI8T3JkZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgLyoqIEBPdXRwdXQge2Jvb2xlYW59IFtzZWxlY3RBbGw9JyddIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBjaGVja2JveCB0byBzZWxlY3Qgb3IgZGVzZWxlY3RcbiAgICAqIGFsbCByb3dzXG4gICAgKi9cbiAgIEBPdXRwdXQoKSBzZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgLyoqIEBPdXRwdXQge3N0cmluZ30gW2NsaWNrRmlsdGVyPV0gRXZlbnQgZW1pdHRlZCB3aGVuIGNsaWNraW5nIG9uIGZpbHRlcnMgaWNvbiAgKi9cbiAgIEBPdXRwdXQoKSBjbGlja0ZpbHRlcjogRXZlbnRFbWl0dGVyPFN0VGFibGVIZWFkZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAvKiogQE91dHB1dCB7U3RUYWJsZUhlYWRlcltdfSBbc2VsZWN0RmlsdGVycz0nJ10gRXZlbnQgZW1pdHRlZCAgd2hlbiB1c2VyIGludGVyYWN0cyB3aXRoIGZpbHRlciBidXR0b24gd2l0aG91dCBhIGN1c3RvbSB0ZW1wbGF0ZSAqL1xuICAgQE91dHB1dCgpIHNlbGVjdEZpbHRlcnM6IEV2ZW50RW1pdHRlcjxTdFRhYmxlSGVhZGVyW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBwdWJsaWMgdGFibGVDbGFzc2VzOiBhbnkgPSB7fTtcbiAgIHB1YmxpYyBvcmRlclR5cGVzOiBhbnkgPSBPUkRFUl9UWVBFO1xuICAgcHVibGljIHZpc2libGVGaWx0ZXI6IG51bWJlciA9IC0xO1xuXG4gICBwcml2YXRlIF9maXhlZEhlYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHJpdmF0ZSBfc3RpY2t5SG92ZXJNZW51OiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF9zZWxlY3RlZEFsbDogYm9vbGVhbjtcbiAgIHByaXZhdGUgX2hhc0hvdmVyTWVudTogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHJpdmF0ZSBfY3VzdG9tQ2xhc3Nlczogc3RyaW5nO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJhYmxlICYmICF0aGlzLnN0YXR1c0ZpbHRlcikge1xuICAgICAgICAgdGhpcy5zdGF0dXNGaWx0ZXIgPSBuZXcgQXJyYXkodGhpcy5maWVsZHMubGVuZ3RoKTtcbiAgICAgICAgIHRoaXMuc3RhdHVzRmlsdGVyLmZpbGwoZmFsc2UpO1xuICAgICAgfVxuICAgfVxuXG4gICBwdWJsaWMgZ2V0SGVhZGVySXRlbUNsYXNzKGZpZWxkOiBTdFRhYmxlSGVhZGVyKTogc3RyaW5nIHtcbiAgICAgIGxldCBpc09yZGVyQXNjID0gdGhpcy5pc1NvcnRlZEJ5RmllbGRBbmREaXJlY3Rpb24oZmllbGQsIHRoaXMub3JkZXJUeXBlcy5BU0MpO1xuICAgICAgcmV0dXJuIGlzT3JkZXJBc2MgPyB0aGlzLmljb25DbGFzc2VzLnNvcnQuYXNjIDogdGhpcy5pY29uQ2xhc3Nlcy5zb3J0LmRlc2M7XG4gICB9XG5cbiAgIHB1YmxpYyBpc1NvcnRhYmxlKGZpZWxkOiBTdFRhYmxlSGVhZGVyKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gZmllbGQgJiYgZmllbGQuc29ydGFibGUgIT09IHVuZGVmaW5lZCA/IGZpZWxkLnNvcnRhYmxlIDogdGhpcy5zb3J0YWJsZTtcbiAgIH1cblxuICAgcHVibGljIGlzU29ydGVkQnlGaWVsZChmaWVsZDogU3RUYWJsZUhlYWRlcik6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE9yZGVyICYmIHRoaXMuY3VycmVudE9yZGVyLm9yZGVyQnkgPT09IGZpZWxkLmlkO1xuICAgfVxuXG4gICBwdWJsaWMgaXNGaWx0ZXJhYmxlKGZpZWxkOiBTdFRhYmxlSGVhZGVyKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJhYmxlICYmIChfZ2V0KGZpZWxkLCAnZmlsdGVycy5maWx0ZXJDb25maWcnKSkgfHxcbiAgICAgICAgICAgICh0aGlzLnRlbXBsYXRlQ29udGVudEZpbHRlciAmJiBfZ2V0KGZpZWxkLCAnZmlsdGVycycpKSB8fFxuICAgICAgICAgICAgX2dldChmaWVsZCwgJ2ZpbHRlcnMudGVtcGxhdGVSZWYnKTtcbiAgIH1cblxuICAgcHVibGljIG9uQ2xpY2tQb3BvdmVyKGV2ZW50OiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyLCBmaWVsZDogU3RUYWJsZUhlYWRlcik6IHZvaWQge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy52aXNpYmxlRmlsdGVyID09PSBpbmRleCkge1xuICAgICAgICAgdGhpcy52aXNpYmxlRmlsdGVyID0gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy52aXNpYmxlRmlsdGVyID0gaW5kZXg7XG4gICAgICB9XG4gICAgICB0aGlzLmNsaWNrRmlsdGVyLmVtaXQoZmllbGQpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkhpZGVQb3BvdmVyKCk6IHZvaWQge1xuICAgICAgdGhpcy52aXNpYmxlRmlsdGVyID0gLTE7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcHVibGljIG9uQ2hhbmdlT3JkZXIoZmllbGQ6IFN0VGFibGVIZWFkZXIpOiB2b2lkIHtcbiAgICAgIGxldCBfY3VycmVudE9yZGVyOiBPcmRlcjtcbiAgICAgIGlmIChmaWVsZCAmJiB0aGlzLmlzU29ydGFibGUoZmllbGQpKSB7XG4gICAgICAgICBpZiAodGhpcy5jdXJyZW50T3JkZXIgJiYgdGhpcy5jdXJyZW50T3JkZXIub3JkZXJCeSA9PT0gZmllbGQuaWQpIHtcbiAgICAgICAgICAgIF9jdXJyZW50T3JkZXIgPSB0aGlzLmNoYW5nZU9yZGVyRGlyZWN0aW9uKCk7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2N1cnJlbnRPcmRlciA9IG5ldyBPcmRlcihmaWVsZC5pZCwgT1JERVJfVFlQRS5BU0MpO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5jaGFuZ2VPcmRlci5lbWl0KF9jdXJyZW50T3JkZXIpO1xuICAgICAgfVxuICAgfVxuXG4gICBwdWJsaWMgb25TZWxlY3RBbGwoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5zZWxlY3RBbGwuZW1pdChldmVudC5jaGVja2VkKTtcbiAgIH1cblxuICAgcHVibGljIG9uU2VsZWN0ZWRGaWx0ZXJzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgbGV0IHNlbGVjdGVkRmlsdGVycyA9IF9jbG9uZURlZXAodGhpcy5maWVsZHMpO1xuICAgICAgc2VsZWN0ZWRGaWx0ZXJzID0gc2VsZWN0ZWRGaWx0ZXJzLmZpbHRlcigoZmllbGQpID0+IHtcbiAgICAgICAgIGlmIChfZ2V0KGZpZWxkLCAnZmlsdGVycy5maWx0ZXJDb25maWcnKSkge1xuICAgICAgICAgICAgZmllbGQuZmlsdGVycy5maWx0ZXJDb25maWcgPSBmaWVsZC5maWx0ZXJzLmZpbHRlckNvbmZpZy5maWx0ZXIoKGNvbmYpID0+IGNvbmYuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgaWYgKGZpZWxkLmZpbHRlcnMuZmlsdGVyQ29uZmlnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgIHJldHVybiBmaWVsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RGaWx0ZXJzLmVtaXQoc2VsZWN0ZWRGaWx0ZXJzKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBjaGFuZ2VPcmRlckRpcmVjdGlvbigpOiBPcmRlciB7XG4gICAgICBsZXQgbmV3RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50T3JkZXIudHlwZSA9PT0gT1JERVJfVFlQRS5BU0MgPyBPUkRFUl9UWVBFLkRFU0MgOiBPUkRFUl9UWVBFLkFTQztcbiAgICAgIHJldHVybiBuZXcgT3JkZXIodGhpcy5jdXJyZW50T3JkZXIub3JkZXJCeSwgbmV3RGlyZWN0aW9uKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBpc1NvcnRlZEJ5RmllbGRBbmREaXJlY3Rpb24oZmllbGQ6IFN0VGFibGVIZWFkZXIsIG9yZGVyVHlwZTogT1JERVJfVFlQRSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNTb3J0ZWRCeUZpZWxkKGZpZWxkKSAmJiB0aGlzLmN1cnJlbnRPcmRlci50eXBlID09PSBvcmRlclR5cGU7XG4gICB9XG59XG4iXX0=