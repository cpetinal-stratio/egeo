/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
/**
 * \@description {Component} [Table]
 *
 * The pagination component has been designed to allow content to be displayed per pages. This informs user about the
 * number of the current page, the items displayed per page and the total of items. Moreover, when there are a lot of
 * items, it allows user to customize the number of items displayed per page.
 *
 * It is made by two sub-components:
 * - A range selector, that allows the user provides a dropdown to set how many items he wants to be displayed per page.
 * - A page navigation control, in order to let the user where he is and where he can go to.
 *
 * * \@model
 *
 *   [Paginate] {./st-pagination.interface.ts#Paginate}
 *   [PaginateOptions] {./st-pagination.interface.ts#PaginateOptions}
 *   [PaginateTexts] {./st-pagination.interface.ts#PaginateTexts}
 *   [PaginateTextsSchema] {./st-pagination.interface.ts#PaginateTextsSchema}
 *   [PaginateIconClasses] {./st-pagination.interface.ts#PaginateIconClasses}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <div class="pagination">
 *     <st-pagination [total]="items.length" [perPage]="perPage" [currentPage]="page" [id]="'pagination-demo'"
 *     (change)="onChangePage($event)">
 *     </st-pagination>
 *     </div>
 * ```
 *
 */
var StPaginationComponent = /** @class */ (function () {
    function StPaginationComponent(_cd, _paginationElement) {
        this._cd = _cd;
        this._paginationElement = _paginationElement;
        /**
         * \@Input {PaginateTexts} [label={element: 'Rows', perPage: 'per page', of: 'of'}] Translated texts displayed at the pagination
         */
        this.label = {
            element: 'Rows', perPage: 'per page', of: 'of'
        };
        /**
         * \@Input {PaginateOptions[]}
         * [perPageOptions=Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 ))]
         *  List of options displayed at a selector where user can change the number of items displayed per page
         */
        this.perPageOptions = [
            { value: 20, showFrom: 0 }, { value: 50, showFrom: 50 }, { value: 200, showFrom: 200 }
        ];
        /**
         * \@Input {PaginateIconClasses} [iconClasses=Object(previous='', next='')] Icon classes for previous and next page buttons
         */
        this.iconClasses = { previous: 'icon-arrow2_left', next: 'icon-arrow2_right' };
        /**
         * \@Output {Paginate} [change=''] Event emitted when user interacts with some of the elements in the pagination.
         *  This sends the new pagination status (current page and items per page)
         */
        this.change = new EventEmitter();
        /**
         * \@Output {PaginateOptions} [changePerPage='']  Event emitted when user interacts with some of the elements in the selector of items displayed per page.
         * This sends the current items per page.
         */
        this.changePerPage = new EventEmitter();
        this.disableNextButton = false;
        this.disablePrevButton = true;
        this.items = [];
        this._currentPage = 1;
        this._perPage = 20;
    }
    Object.defineProperty(StPaginationComponent.prototype, "currentPage", {
        /** @Input {number} [currentPage=1] Number of the current page */
        get: /**
         * \@Input {number} [currentPage=1] Number of the current page
         * @return {?}
         */
        function () {
            return this._currentPage;
        },
        set: /**
         * @param {?} currentPage
         * @return {?}
         */
        function (currentPage) {
            this._currentPage = currentPage;
            this.updatePages(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "perPage", {
        /** @Input {number} [perPage=20] The maximum number of items displayed per page */
        get: /**
         * \@Input {number} [perPage=20] The maximum number of items displayed per page
         * @return {?}
         */
        function () {
            return this._perPage;
        },
        set: /**
         * @param {?} perPage
         * @return {?}
         */
        function (perPage) {
            this.onChangePerPage(perPage, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "total", {
        /** @Input {number} [total=''] Total of items */
        get: /**
         * \@Input {number} [total=''] Total of items
         * @return {?}
         */
        function () {
            return this._total;
        },
        set: /**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._total = total;
            this.generateItems();
            this.updatePages(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "hasOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.items && this.items.length > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "paginationId", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pagination = this._paginationElement.nativeElement;
            return pagination.getAttribute('id') !== null ? pagination.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "selectId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.paginationId !== null ? this.paginationId + "-select" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "buttonPrevId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.paginationId !== null ? this.paginationId + "-prev" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "buttonNextId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.paginationId !== null ? this.paginationId + "-next" : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePages(false);
        this.generateItems();
    };
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.generateItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items = [];
        this.perPageOptions.forEach(this.addPageOption.bind(this));
        if (this.items.length) {
            this.selectedItem = this.items.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === _this._perPage; })) || this.items[0];
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.currentPage++;
        this.updatePages();
    };
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.currentPage--;
        this.updatePages();
    };
    /**
     * @param {?} perPage
     * @param {?=} emit
     * @return {?}
     */
    StPaginationComponent.prototype.onChangePerPage = /**
     * @param {?} perPage
     * @param {?=} emit
     * @return {?}
     */
    function (perPage, emit) {
        var _this = this;
        if (emit === void 0) { emit = true; }
        if (perPage && typeof perPage === 'number') {
            this._currentPage = 1;
            this._perPage = perPage;
            this.updatePages(emit);
            this.selectedItem = this.items.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === _this._perPage; }));
            if (emit) {
                this.changePerPage.emit(this._perPage);
            }
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    StPaginationComponent.prototype.addPageOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (this._total && (!option.showFrom || option.showFrom <= this._total)) {
            this.items.push({
                label: "" + option.value,
                value: option.value
            });
        }
    };
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    StPaginationComponent.prototype.updatePages = /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.lastItem = this._perPage * this._currentPage;
        if (this._currentPage === 1) {
            this.firstItem = this._currentPage;
            this.disablePrevButton = true;
        }
        else {
            this.firstItem = this._perPage * (this._currentPage - 1) + 1;
            this.disablePrevButton = false;
        }
        if (this.lastItem >= this._total) {
            this.lastItem = this._total;
            this.disableNextButton = true;
        }
        else {
            this.disableNextButton = false;
        }
        if (emit) {
            this.change.emit({
                currentPage: this._currentPage,
                perPage: this._perPage
            });
        }
    };
    StPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-pagination',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-pagination pagination\">\n   <div *ngIf=\"hasOptions\" class=\"label st-pagination__per-page\">\n      <p class=\"st-pagination__label\">{{label.element}} {{label.perPage}}</p>\n      <st-select class=\"st-pagination__selector\" [options]=\"items\" [selected]=\"selectedItem\" (select)=\"onChangePerPage($event)\" [attr.id]=\"selectId\"></st-select>\n   </div>\n\n   <div class=\"label current-page-info\">\n      <p class=\"st-pagination__label\">{{firstItem}}-{{lastItem}} {{label.of || 'of'}} {{total}}</p>\n\n      <div class=\"buttons\">\n         <button class=\"button button-toolbar\" [attr.id]=\"buttonPrevId\" [disabled]=\"disablePrevButton\" type=\"button\" (click)=\"prevPage()\">\n            <i class=\"{{iconClasses?.previous || 'icon-arrow2_left'}}\"></i>\n         </button>\n         <button class=\"button button-toolbar\" [attr.id]=\"buttonNextId\" [disabled]=\"disableNextButton\" type=\"button\" (click)=\"nextPage()\">\n            <i class=\"{{iconClasses?.next || 'icon-arrow2_right'}}\"></i>\n         </button>\n      </div>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.pagination{display:flex;align-items:center;height:42px}.pagination .label{display:flex;align-items:center}.pagination .label p{margin:0;padding-right:15px}.pagination .current-page-info{flex:1;justify-content:flex-end}.pagination .st-pagination__selector{max-width:93px}.pagination button:first-child{margin:0 5px}"]
                }] }
    ];
    /** @nocollapse */
    StPaginationComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    StPaginationComponent.propDecorators = {
        label: [{ type: Input }],
        perPageOptions: [{ type: Input }],
        iconClasses: [{ type: Input }],
        change: [{ type: Output }],
        changePerPage: [{ type: Output }],
        currentPage: [{ type: Input }],
        perPage: [{ type: Input }],
        total: [{ type: Input }]
    };
    return StPaginationComponent;
}());
export { StPaginationComponent };
if (false) {
    /**
     * \@Input {PaginateTexts} [label={element: 'Rows', perPage: 'per page', of: 'of'}] Translated texts displayed at the pagination
     * @type {?}
     */
    StPaginationComponent.prototype.label;
    /**
     * \@Input {PaginateOptions[]}
     * [perPageOptions=Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 ))]
     *  List of options displayed at a selector where user can change the number of items displayed per page
     * @type {?}
     */
    StPaginationComponent.prototype.perPageOptions;
    /**
     * \@Input {PaginateIconClasses} [iconClasses=Object(previous='', next='')] Icon classes for previous and next page buttons
     * @type {?}
     */
    StPaginationComponent.prototype.iconClasses;
    /**
     * \@Output {Paginate} [change=''] Event emitted when user interacts with some of the elements in the pagination.
     *  This sends the new pagination status (current page and items per page)
     * @type {?}
     */
    StPaginationComponent.prototype.change;
    /**
     * \@Output {PaginateOptions} [changePerPage='']  Event emitted when user interacts with some of the elements in the selector of items displayed per page.
     * This sends the current items per page.
     * @type {?}
     */
    StPaginationComponent.prototype.changePerPage;
    /** @type {?} */
    StPaginationComponent.prototype.disableNextButton;
    /** @type {?} */
    StPaginationComponent.prototype.disablePrevButton;
    /** @type {?} */
    StPaginationComponent.prototype.firstItem;
    /** @type {?} */
    StPaginationComponent.prototype.lastItem;
    /** @type {?} */
    StPaginationComponent.prototype.items;
    /** @type {?} */
    StPaginationComponent.prototype.selectedItem;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._currentPage;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._perPage;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._total;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._paginationElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXBhZ2luYXRpb24vc3QtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0N2QjtJQStFRywrQkFBb0IsR0FBc0IsRUFDdEIsa0JBQThCO1FBRDlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBWTs7OztRQXRFekMsVUFBSyxHQUFrQjtZQUM3QixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUk7U0FDaEQsQ0FBQzs7Ozs7O1FBTU8sbUJBQWMsR0FBc0I7WUFDMUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1NBQ3hGLENBQUM7Ozs7UUFHTyxnQkFBVyxHQUF3QixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzs7Ozs7UUFLOUYsV0FBTSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDOzs7OztRQUs5RCxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBbUNwRSxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsc0JBQWlCLEdBQVksSUFB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QyxDQUFDO1NBQ0w7SUFDSixDQUFDOztnQkEvS0gsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxlQUFlO29CQUN6QixrZ0RBQTZDO29CQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQWhERSxpQkFBaUI7Z0JBRWpCLFVBQVU7Ozt3QkFtRFQsS0FBSztpQ0FRTCxLQUFLOzhCQUtMLEtBQUs7eUJBS0wsTUFBTTtnQ0FLTixNQUFNOzhCQUdOLEtBQUs7MEJBV0wsS0FBSzt3QkFVTCxLQUFLOztJQXVIVCw0QkFBQztDQUFBLEFBaExELElBZ0xDO1NBMUtZLHFCQUFxQjs7Ozs7O0lBSS9CLHNDQUVFOzs7Ozs7O0lBTUYsK0NBRUU7Ozs7O0lBR0YsNENBQXdHOzs7Ozs7SUFLeEcsdUNBQXdFOzs7Ozs7SUFLeEUsOENBQTJFOztJQW1DM0Usa0RBQTBDOztJQUMxQyxrREFBeUM7O0lBQ3pDLDBDQUF5Qjs7SUFDekIseUNBQXdCOztJQUN4QixzQ0FBd0M7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFFeEMsNkNBQWlDOzs7OztJQUNqQyx5Q0FBOEI7Ozs7O0lBQzlCLHVDQUF1Qjs7Ozs7SUFFWCxvQ0FBOEI7Ozs7O0lBQzlCLG1EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDb21wb25lbnQsXG4gICBFbGVtZW50UmVmLFxuICAgRXZlbnRFbWl0dGVyLFxuICAgSW5wdXQsXG4gICBPbkluaXQsXG4gICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUl0ZW0gfSBmcm9tICcuLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFBhZ2luYXRlLCBQYWdpbmF0ZUljb25DbGFzc2VzLCBQYWdpbmF0ZU9wdGlvbnMsIFBhZ2luYXRlVGV4dHMgfSBmcm9tICcuL3N0LXBhZ2luYXRpb24uaW50ZXJmYWNlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1RhYmxlXVxuICpcbiAqIFRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudCBoYXMgYmVlbiBkZXNpZ25lZCB0byBhbGxvdyBjb250ZW50IHRvIGJlIGRpc3BsYXllZCBwZXIgcGFnZXMuIFRoaXMgaW5mb3JtcyB1c2VyIGFib3V0IHRoZVxuICogbnVtYmVyIG9mIHRoZSBjdXJyZW50IHBhZ2UsIHRoZSBpdGVtcyBkaXNwbGF5ZWQgcGVyIHBhZ2UgYW5kIHRoZSB0b3RhbCBvZiBpdGVtcy4gTW9yZW92ZXIsIHdoZW4gdGhlcmUgYXJlIGEgbG90IG9mXG4gKiBpdGVtcywgaXQgYWxsb3dzIHVzZXIgdG8gY3VzdG9taXplIHRoZSBudW1iZXIgb2YgaXRlbXMgZGlzcGxheWVkIHBlciBwYWdlLlxuICpcbiAqIEl0IGlzIG1hZGUgYnkgdHdvIHN1Yi1jb21wb25lbnRzOlxuICogLSBBIHJhbmdlIHNlbGVjdG9yLCB0aGF0IGFsbG93cyB0aGUgdXNlciBwcm92aWRlcyBhIGRyb3Bkb3duIHRvIHNldCBob3cgbWFueSBpdGVtcyBoZSB3YW50cyB0byBiZSBkaXNwbGF5ZWQgcGVyIHBhZ2UuXG4gKiAtIEEgcGFnZSBuYXZpZ2F0aW9uIGNvbnRyb2wsIGluIG9yZGVyIHRvIGxldCB0aGUgdXNlciB3aGVyZSBoZSBpcyBhbmQgd2hlcmUgaGUgY2FuIGdvIHRvLlxuICpcbiAqICogQG1vZGVsXG4gKlxuICogICBbUGFnaW5hdGVdIHsuL3N0LXBhZ2luYXRpb24uaW50ZXJmYWNlLnRzI1BhZ2luYXRlfVxuICogICBbUGFnaW5hdGVPcHRpb25zXSB7Li9zdC1wYWdpbmF0aW9uLmludGVyZmFjZS50cyNQYWdpbmF0ZU9wdGlvbnN9XG4gKiAgIFtQYWdpbmF0ZVRleHRzXSB7Li9zdC1wYWdpbmF0aW9uLmludGVyZmFjZS50cyNQYWdpbmF0ZVRleHRzfVxuICogICBbUGFnaW5hdGVUZXh0c1NjaGVtYV0gey4vc3QtcGFnaW5hdGlvbi5pbnRlcmZhY2UudHMjUGFnaW5hdGVUZXh0c1NjaGVtYX1cbiAqICAgW1BhZ2luYXRlSWNvbkNsYXNzZXNdIHsuL3N0LXBhZ2luYXRpb24uaW50ZXJmYWNlLnRzI1BhZ2luYXRlSWNvbkNsYXNzZXN9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG4gKiAgICAgPHN0LXBhZ2luYXRpb24gW3RvdGFsXT1cIml0ZW1zLmxlbmd0aFwiIFtwZXJQYWdlXT1cInBlclBhZ2VcIiBbY3VycmVudFBhZ2VdPVwicGFnZVwiIFtpZF09XCIncGFnaW5hdGlvbi1kZW1vJ1wiXG4gKiAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZVBhZ2UoJGV2ZW50KVwiPlxuICogICAgIDwvc3QtcGFnaW5hdGlvbj5cbiAqICAgICA8L2Rpdj5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXBhZ2luYXRpb24nLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gICAvKiogQElucHV0IHtQYWdpbmF0ZVRleHRzfSBbbGFiZWw9e2VsZW1lbnQ6ICdSb3dzJywgcGVyUGFnZTogJ3BlciBwYWdlJywgb2Y6ICdvZid9XSBUcmFuc2xhdGVkIHRleHRzIGRpc3BsYXllZCBhdCB0aGUgcGFnaW5hdGlvbiAqL1xuICAgQElucHV0KCkgbGFiZWw6IFBhZ2luYXRlVGV4dHMgPSB7XG4gICAgICBlbGVtZW50OiAnUm93cycsIHBlclBhZ2U6ICdwZXIgcGFnZScsIG9mOiAnb2YnXG4gICB9O1xuXG4gICAvKiogQElucHV0IHtQYWdpbmF0ZU9wdGlvbnNbXX1cbiAgICAqIFtwZXJQYWdlT3B0aW9ucz1BcnJheSggT2JqZWN0KCB2YWx1ZTogMjAsIHNob3dGcm9tOiAwICksT2JqZWN0KCB2YWx1ZTogNTAsIHNob3dGcm9tOiA1MCApLCBPYmplY3QoIHZhbHVlOiAyMDAsIHNob3dGcm9tOiAyMDAgKSldXG4gICAgKiAgTGlzdCBvZiBvcHRpb25zIGRpc3BsYXllZCBhdCBhIHNlbGVjdG9yIHdoZXJlIHVzZXIgY2FuIGNoYW5nZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIGRpc3BsYXllZCBwZXIgcGFnZVxuICAgICovXG4gICBASW5wdXQoKSBwZXJQYWdlT3B0aW9uczogUGFnaW5hdGVPcHRpb25zW10gPSBbXG4gICAgICB7IHZhbHVlOiAyMCwgc2hvd0Zyb206IDAgfSwgeyB2YWx1ZTogNTAsIHNob3dGcm9tOiA1MCB9LCB7IHZhbHVlOiAyMDAsIHNob3dGcm9tOiAyMDAgfVxuICAgXTtcblxuICAgLyoqIEBJbnB1dCB7UGFnaW5hdGVJY29uQ2xhc3Nlc30gW2ljb25DbGFzc2VzPU9iamVjdChwcmV2aW91cz0nJywgbmV4dD0nJyldIEljb24gY2xhc3NlcyBmb3IgcHJldmlvdXMgYW5kIG5leHQgcGFnZSBidXR0b25zICovXG4gICBASW5wdXQoKSBpY29uQ2xhc3NlczogUGFnaW5hdGVJY29uQ2xhc3NlcyA9IHsgcHJldmlvdXM6ICdpY29uLWFycm93Ml9sZWZ0JywgbmV4dDogJ2ljb24tYXJyb3cyX3JpZ2h0JyB9O1xuXG4gICAvKiogQE91dHB1dCB7UGFnaW5hdGV9IFtjaGFuZ2U9JyddIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGludGVyYWN0cyB3aXRoIHNvbWUgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBwYWdpbmF0aW9uLlxuICAgICogIFRoaXMgc2VuZHMgdGhlIG5ldyBwYWdpbmF0aW9uIHN0YXR1cyAoY3VycmVudCBwYWdlIGFuZCBpdGVtcyBwZXIgcGFnZSlcbiAgICAqL1xuICAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPFBhZ2luYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnaW5hdGU+KCk7XG5cbiAgIC8qKiBAT3V0cHV0IHtQYWdpbmF0ZU9wdGlvbnN9IFtjaGFuZ2VQZXJQYWdlPScnXSAgRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggc29tZSBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIHNlbGVjdG9yIG9mIGl0ZW1zIGRpc3BsYXllZCBwZXIgcGFnZS5cbiAgICAqIFRoaXMgc2VuZHMgdGhlIGN1cnJlbnQgaXRlbXMgcGVyIHBhZ2UuXG4gICAgKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2VQZXJQYWdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFtjdXJyZW50UGFnZT0xXSBOdW1iZXIgb2YgdGhlIGN1cnJlbnQgcGFnZSAqL1xuICAgQElucHV0KClcbiAgIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQYWdlO1xuICAgfVxuXG4gICBzZXQgY3VycmVudFBhZ2UoY3VycmVudFBhZ2U6IG51bWJlcikge1xuICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZTtcbiAgICAgIHRoaXMudXBkYXRlUGFnZXMoZmFsc2UpO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFtwZXJQYWdlPTIwXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgZGlzcGxheWVkIHBlciBwYWdlICovXG4gICBASW5wdXQoKVxuICAgZ2V0IHBlclBhZ2UoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9wZXJQYWdlO1xuICAgfVxuXG4gICBzZXQgcGVyUGFnZShwZXJQYWdlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VQZXJQYWdlKHBlclBhZ2UsIGZhbHNlKTtcbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbdG90YWw9JyddIFRvdGFsIG9mIGl0ZW1zICovXG4gICBASW5wdXQoKVxuICAgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gICB9XG5cbiAgIHNldCB0b3RhbCh0b3RhbDogbnVtYmVyKSB7XG4gICAgICB0aGlzLl90b3RhbCA9IHRvdGFsO1xuICAgICAgdGhpcy5nZW5lcmF0ZUl0ZW1zKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VzKGZhbHNlKTtcbiAgIH1cblxuICAgcHVibGljIGRpc2FibGVOZXh0QnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgZGlzYWJsZVByZXZCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuICAgcHVibGljIGZpcnN0SXRlbTogbnVtYmVyO1xuICAgcHVibGljIGxhc3RJdGVtOiBudW1iZXI7XG4gICBwdWJsaWMgaXRlbXM6IFN0RHJvcERvd25NZW51SXRlbVtdID0gW107XG4gICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBTdERyb3BEb3duTWVudUl0ZW07XG5cbiAgIHByaXZhdGUgX2N1cnJlbnRQYWdlOiBudW1iZXIgPSAxO1xuICAgcHJpdmF0ZSBfcGVyUGFnZTogbnVtYmVyID0gMjA7XG4gICBwcml2YXRlIF90b3RhbDogbnVtYmVyO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9wYWdpbmF0aW9uRWxlbWVudDogRWxlbWVudFJlZikge1xuICAgfVxuXG4gICBnZXQgaGFzT3B0aW9ucygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoID4gMTtcbiAgIH1cblxuICAgZ2V0IHBhZ2luYXRpb25JZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb246IEhUTUxFbGVtZW50ID0gdGhpcy5fcGFnaW5hdGlvbkVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiBwYWdpbmF0aW9uLmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gbnVsbCA/IHBhZ2luYXRpb24uaWQgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0SWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZ2luYXRpb25JZCAhPT0gbnVsbCA/IGAke3RoaXMucGFnaW5hdGlvbklkfS1zZWxlY3RgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGJ1dHRvblByZXZJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbklkICE9PSBudWxsID8gYCR7dGhpcy5wYWdpbmF0aW9uSWR9LXByZXZgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGJ1dHRvbk5leHRJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbklkICE9PSBudWxsID8gYCR7dGhpcy5wYWdpbmF0aW9uSWR9LW5leHRgIDogbnVsbDtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VzKGZhbHNlKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVJdGVtcygpO1xuICAgfVxuXG4gICBnZW5lcmF0ZUl0ZW1zKCk6IHZvaWQge1xuICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgdGhpcy5wZXJQYWdlT3B0aW9ucy5mb3JFYWNoKHRoaXMuYWRkUGFnZU9wdGlvbi5iaW5kKHRoaXMpKTtcblxuICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IHRoaXMuX3BlclBhZ2UpIHx8IHRoaXMuaXRlbXNbMF07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBuZXh0UGFnZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UrKztcbiAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgIH1cblxuICAgcHJldlBhZ2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmN1cnJlbnRQYWdlLS07XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICB9XG5cbiAgIG9uQ2hhbmdlUGVyUGFnZShwZXJQYWdlOiBudW1iZXIsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICBpZiAocGVyUGFnZSAmJiB0eXBlb2YgcGVyUGFnZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgIHRoaXMuX3BlclBhZ2UgPSBwZXJQYWdlO1xuICAgICAgICAgdGhpcy51cGRhdGVQYWdlcyhlbWl0KTtcbiAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdGhpcy5fcGVyUGFnZSk7XG4gICAgICAgICBpZiAoZW1pdCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQZXJQYWdlLmVtaXQodGhpcy5fcGVyUGFnZSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgYWRkUGFnZU9wdGlvbihvcHRpb246IFBhZ2luYXRlT3B0aW9ucyk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuX3RvdGFsICYmICghb3B0aW9uLnNob3dGcm9tIHx8IG9wdGlvbi5zaG93RnJvbSA8PSB0aGlzLl90b3RhbCkpIHtcbiAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogYCR7b3B0aW9uLnZhbHVlfWAsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlXG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSB1cGRhdGVQYWdlcyhlbWl0OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgdGhpcy5sYXN0SXRlbSA9IHRoaXMuX3BlclBhZ2UgKiB0aGlzLl9jdXJyZW50UGFnZTtcblxuICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgICAgICB0aGlzLmZpcnN0SXRlbSA9IHRoaXMuX2N1cnJlbnRQYWdlO1xuICAgICAgICAgdGhpcy5kaXNhYmxlUHJldkJ1dHRvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5maXJzdEl0ZW0gPSB0aGlzLl9wZXJQYWdlICogKHRoaXMuX2N1cnJlbnRQYWdlIC0gMSkgKyAxO1xuICAgICAgICAgdGhpcy5kaXNhYmxlUHJldkJ1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYXN0SXRlbSA+PSB0aGlzLl90b3RhbCkge1xuICAgICAgICAgdGhpcy5sYXN0SXRlbSA9IHRoaXMuX3RvdGFsO1xuICAgICAgICAgdGhpcy5kaXNhYmxlTmV4dEJ1dHRvbiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5kaXNhYmxlTmV4dEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5fY3VycmVudFBhZ2UsXG4gICAgICAgICAgICBwZXJQYWdlOiB0aGlzLl9wZXJQYWdlXG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==