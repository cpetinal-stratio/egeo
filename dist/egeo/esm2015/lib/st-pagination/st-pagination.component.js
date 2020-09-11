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
export class StPaginationComponent {
    /**
     * @param {?} _cd
     * @param {?} _paginationElement
     */
    constructor(_cd, _paginationElement) {
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
    /**
     * \@Input {number} [currentPage=1] Number of the current page
     * @return {?}
     */
    get currentPage() {
        return this._currentPage;
    }
    /**
     * @param {?} currentPage
     * @return {?}
     */
    set currentPage(currentPage) {
        this._currentPage = currentPage;
        this.updatePages(false);
    }
    /**
     * \@Input {number} [perPage=20] The maximum number of items displayed per page
     * @return {?}
     */
    get perPage() {
        return this._perPage;
    }
    /**
     * @param {?} perPage
     * @return {?}
     */
    set perPage(perPage) {
        this.onChangePerPage(perPage, false);
    }
    /**
     * \@Input {number} [total=''] Total of items
     * @return {?}
     */
    get total() {
        return this._total;
    }
    /**
     * @param {?} total
     * @return {?}
     */
    set total(total) {
        this._total = total;
        this.generateItems();
        this.updatePages(false);
    }
    /**
     * @return {?}
     */
    get hasOptions() {
        return this.items && this.items.length > 1;
    }
    /**
     * @return {?}
     */
    get paginationId() {
        /** @type {?} */
        const pagination = this._paginationElement.nativeElement;
        return pagination.getAttribute('id') !== null ? pagination.id : null;
    }
    /**
     * @return {?}
     */
    get selectId() {
        return this.paginationId !== null ? `${this.paginationId}-select` : null;
    }
    /**
     * @return {?}
     */
    get buttonPrevId() {
        return this.paginationId !== null ? `${this.paginationId}-prev` : null;
    }
    /**
     * @return {?}
     */
    get buttonNextId() {
        return this.paginationId !== null ? `${this.paginationId}-next` : null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePages(false);
        this.generateItems();
    }
    /**
     * @return {?}
     */
    generateItems() {
        this.items = [];
        this.perPageOptions.forEach(this.addPageOption.bind(this));
        if (this.items.length) {
            this.selectedItem = this.items.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item.value === this._perPage)) || this.items[0];
        }
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    nextPage() {
        this.currentPage++;
        this.updatePages();
    }
    /**
     * @return {?}
     */
    prevPage() {
        this.currentPage--;
        this.updatePages();
    }
    /**
     * @param {?} perPage
     * @param {?=} emit
     * @return {?}
     */
    onChangePerPage(perPage, emit = true) {
        if (perPage && typeof perPage === 'number') {
            this._currentPage = 1;
            this._perPage = perPage;
            this.updatePages(emit);
            this.selectedItem = this.items.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item.value === this._perPage));
            if (emit) {
                this.changePerPage.emit(this._perPage);
            }
        }
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    addPageOption(option) {
        if (this._total && (!option.showFrom || option.showFrom <= this._total)) {
            this.items.push({
                label: `${option.value}`,
                value: option.value
            });
        }
    }
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    updatePages(emit = true) {
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
    }
}
StPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-pagination',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-pagination pagination\">\n   <div *ngIf=\"hasOptions\" class=\"label st-pagination__per-page\">\n      <p class=\"st-pagination__label\">{{label.element}} {{label.perPage}}</p>\n      <st-select class=\"st-pagination__selector\" [options]=\"items\" [selected]=\"selectedItem\" (select)=\"onChangePerPage($event)\" [attr.id]=\"selectId\"></st-select>\n   </div>\n\n   <div class=\"label current-page-info\">\n      <p class=\"st-pagination__label\">{{firstItem}}-{{lastItem}} {{label.of || 'of'}} {{total}}</p>\n\n      <div class=\"buttons\">\n         <button class=\"button button-toolbar\" [attr.id]=\"buttonPrevId\" [disabled]=\"disablePrevButton\" type=\"button\" (click)=\"prevPage()\">\n            <i class=\"{{iconClasses?.previous || 'icon-arrow2_left'}}\"></i>\n         </button>\n         <button class=\"button button-toolbar\" [attr.id]=\"buttonNextId\" [disabled]=\"disableNextButton\" type=\"button\" (click)=\"nextPage()\">\n            <i class=\"{{iconClasses?.next || 'icon-arrow2_right'}}\"></i>\n         </button>\n      </div>\n   </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.pagination{display:flex;align-items:center;height:42px}.pagination .label{display:flex;align-items:center}.pagination .label p{margin:0;padding-right:15px}.pagination .current-page-info{flex:1;justify-content:flex-end}.pagination .st-pagination__selector{max-width:93px}.pagination button:first-child{margin:0 5px}"]
            }] }
];
/** @nocollapse */
StPaginationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXBhZ2luYXRpb24vc3QtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDUixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEN2QixNQUFNLE9BQU8scUJBQXFCOzs7OztJQXlFL0IsWUFBb0IsR0FBc0IsRUFDdEIsa0JBQThCO1FBRDlCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBWTs7OztRQXRFekMsVUFBSyxHQUFrQjtZQUM3QixPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLElBQUk7U0FDaEQsQ0FBQzs7Ozs7O1FBTU8sbUJBQWMsR0FBc0I7WUFDMUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO1NBQ3hGLENBQUM7Ozs7UUFHTyxnQkFBVyxHQUF3QixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQzs7Ozs7UUFLOUYsV0FBTSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDOzs7OztRQUs5RCxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBbUNwRSxzQkFBaUIsR0FBWSxLQUFLLENBQUM7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Ozs7Ozs7SUEvQ04sc0NBRUU7Ozs7Ozs7SUFNRiwrQ0FFRTs7Ozs7SUFHRiw0Q0FBd0c7Ozs7OztJQUt4Ryx1Q0FBd0U7Ozs7OztJQUt4RSw4Q0FBMkU7O0lBbUMzRSxrREFBMEM7O0lBQzFDLGtEQUF5Qzs7SUFDekMsMENBQXlCOztJQUN6Qix5Q0FBd0I7O0lBQ3hCLHNDQUF3Qzs7SUFDeEMsNkNBQXdDOzs7OztJQUV4Qyw2Q0FBaUM7Ozs7O0lBQ2pDLHlDQUE4Qjs7Ozs7SUFDOUIsdUNBQXVCOzs7OztJQUVYLG9DQUE4Qjs7Ozs7SUFDOUIsbURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgIENvbXBvbmVudCxcbiAgIEVsZW1lbnRSZWYsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBJbnB1dCxcbiAgIE9uSW5pdCxcbiAgIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgUGFnaW5hdGUsIFBhZ2luYXRlSWNvbkNsYXNzZXMsIFBhZ2luYXRlT3B0aW9ucywgUGFnaW5hdGVUZXh0cyB9IGZyb20gJy4vc3QtcGFnaW5hdGlvbi5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbVGFibGVdXG4gKlxuICogVGhlIHBhZ2luYXRpb24gY29tcG9uZW50IGhhcyBiZWVuIGRlc2lnbmVkIHRvIGFsbG93IGNvbnRlbnQgdG8gYmUgZGlzcGxheWVkIHBlciBwYWdlcy4gVGhpcyBpbmZvcm1zIHVzZXIgYWJvdXQgdGhlXG4gKiBudW1iZXIgb2YgdGhlIGN1cnJlbnQgcGFnZSwgdGhlIGl0ZW1zIGRpc3BsYXllZCBwZXIgcGFnZSBhbmQgdGhlIHRvdGFsIG9mIGl0ZW1zLiBNb3Jlb3Zlciwgd2hlbiB0aGVyZSBhcmUgYSBsb3Qgb2ZcbiAqIGl0ZW1zLCBpdCBhbGxvd3MgdXNlciB0byBjdXN0b21pemUgdGhlIG51bWJlciBvZiBpdGVtcyBkaXNwbGF5ZWQgcGVyIHBhZ2UuXG4gKlxuICogSXQgaXMgbWFkZSBieSB0d28gc3ViLWNvbXBvbmVudHM6XG4gKiAtIEEgcmFuZ2Ugc2VsZWN0b3IsIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHByb3ZpZGVzIGEgZHJvcGRvd24gdG8gc2V0IGhvdyBtYW55IGl0ZW1zIGhlIHdhbnRzIHRvIGJlIGRpc3BsYXllZCBwZXIgcGFnZS5cbiAqIC0gQSBwYWdlIG5hdmlnYXRpb24gY29udHJvbCwgaW4gb3JkZXIgdG8gbGV0IHRoZSB1c2VyIHdoZXJlIGhlIGlzIGFuZCB3aGVyZSBoZSBjYW4gZ28gdG8uXG4gKlxuICogKiBAbW9kZWxcbiAqXG4gKiAgIFtQYWdpbmF0ZV0gey4vc3QtcGFnaW5hdGlvbi5pbnRlcmZhY2UudHMjUGFnaW5hdGV9XG4gKiAgIFtQYWdpbmF0ZU9wdGlvbnNdIHsuL3N0LXBhZ2luYXRpb24uaW50ZXJmYWNlLnRzI1BhZ2luYXRlT3B0aW9uc31cbiAqICAgW1BhZ2luYXRlVGV4dHNdIHsuL3N0LXBhZ2luYXRpb24uaW50ZXJmYWNlLnRzI1BhZ2luYXRlVGV4dHN9XG4gKiAgIFtQYWdpbmF0ZVRleHRzU2NoZW1hXSB7Li9zdC1wYWdpbmF0aW9uLmludGVyZmFjZS50cyNQYWdpbmF0ZVRleHRzU2NoZW1hfVxuICogICBbUGFnaW5hdGVJY29uQ2xhc3Nlc10gey4vc3QtcGFnaW5hdGlvbi5pbnRlcmZhY2UudHMjUGFnaW5hdGVJY29uQ2xhc3Nlc31cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAqICAgICA8c3QtcGFnaW5hdGlvbiBbdG90YWxdPVwiaXRlbXMubGVuZ3RoXCIgW3BlclBhZ2VdPVwicGVyUGFnZVwiIFtjdXJyZW50UGFnZV09XCJwYWdlXCIgW2lkXT1cIidwYWdpbmF0aW9uLWRlbW8nXCJcbiAqICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlUGFnZSgkZXZlbnQpXCI+XG4gKiAgICAgPC9zdC1wYWdpbmF0aW9uPlxuICogICAgIDwvZGl2PlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtcGFnaW5hdGlvbicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgIC8qKiBASW5wdXQge1BhZ2luYXRlVGV4dHN9IFtsYWJlbD17ZWxlbWVudDogJ1Jvd3MnLCBwZXJQYWdlOiAncGVyIHBhZ2UnLCBvZjogJ29mJ31dIFRyYW5zbGF0ZWQgdGV4dHMgZGlzcGxheWVkIGF0IHRoZSBwYWdpbmF0aW9uICovXG4gICBASW5wdXQoKSBsYWJlbDogUGFnaW5hdGVUZXh0cyA9IHtcbiAgICAgIGVsZW1lbnQ6ICdSb3dzJywgcGVyUGFnZTogJ3BlciBwYWdlJywgb2Y6ICdvZidcbiAgIH07XG5cbiAgIC8qKiBASW5wdXQge1BhZ2luYXRlT3B0aW9uc1tdfVxuICAgICogW3BlclBhZ2VPcHRpb25zPUFycmF5KCBPYmplY3QoIHZhbHVlOiAyMCwgc2hvd0Zyb206IDAgKSxPYmplY3QoIHZhbHVlOiA1MCwgc2hvd0Zyb206IDUwICksIE9iamVjdCggdmFsdWU6IDIwMCwgc2hvd0Zyb206IDIwMCApKV1cbiAgICAqICBMaXN0IG9mIG9wdGlvbnMgZGlzcGxheWVkIGF0IGEgc2VsZWN0b3Igd2hlcmUgdXNlciBjYW4gY2hhbmdlIHRoZSBudW1iZXIgb2YgaXRlbXMgZGlzcGxheWVkIHBlciBwYWdlXG4gICAgKi9cbiAgIEBJbnB1dCgpIHBlclBhZ2VPcHRpb25zOiBQYWdpbmF0ZU9wdGlvbnNbXSA9IFtcbiAgICAgIHsgdmFsdWU6IDIwLCBzaG93RnJvbTogMCB9LCB7IHZhbHVlOiA1MCwgc2hvd0Zyb206IDUwIH0sIHsgdmFsdWU6IDIwMCwgc2hvd0Zyb206IDIwMCB9XG4gICBdO1xuXG4gICAvKiogQElucHV0IHtQYWdpbmF0ZUljb25DbGFzc2VzfSBbaWNvbkNsYXNzZXM9T2JqZWN0KHByZXZpb3VzPScnLCBuZXh0PScnKV0gSWNvbiBjbGFzc2VzIGZvciBwcmV2aW91cyBhbmQgbmV4dCBwYWdlIGJ1dHRvbnMgKi9cbiAgIEBJbnB1dCgpIGljb25DbGFzc2VzOiBQYWdpbmF0ZUljb25DbGFzc2VzID0geyBwcmV2aW91czogJ2ljb24tYXJyb3cyX2xlZnQnLCBuZXh0OiAnaWNvbi1hcnJvdzJfcmlnaHQnIH07XG5cbiAgIC8qKiBAT3V0cHV0IHtQYWdpbmF0ZX0gW2NoYW5nZT0nJ10gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggc29tZSBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIHBhZ2luYXRpb24uXG4gICAgKiAgVGhpcyBzZW5kcyB0aGUgbmV3IHBhZ2luYXRpb24gc3RhdHVzIChjdXJyZW50IHBhZ2UgYW5kIGl0ZW1zIHBlciBwYWdlKVxuICAgICovXG4gICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8UGFnaW5hdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdpbmF0ZT4oKTtcblxuICAgLyoqIEBPdXRwdXQge1BhZ2luYXRlT3B0aW9uc30gW2NoYW5nZVBlclBhZ2U9JyddICBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBpbnRlcmFjdHMgd2l0aCBzb21lIG9mIHRoZSBlbGVtZW50cyBpbiB0aGUgc2VsZWN0b3Igb2YgaXRlbXMgZGlzcGxheWVkIHBlciBwYWdlLlxuICAgICogVGhpcyBzZW5kcyB0aGUgY3VycmVudCBpdGVtcyBwZXIgcGFnZS5cbiAgICAqL1xuICAgQE91dHB1dCgpIGNoYW5nZVBlclBhZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgIC8qKiBASW5wdXQge251bWJlcn0gW2N1cnJlbnRQYWdlPTFdIE51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlICovXG4gICBASW5wdXQoKVxuICAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBhZ2U7XG4gICB9XG5cbiAgIHNldCBjdXJyZW50UGFnZShjdXJyZW50UGFnZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xuICAgICAgdGhpcy51cGRhdGVQYWdlcyhmYWxzZSk7XG4gICB9XG5cbiAgIC8qKiBASW5wdXQge251bWJlcn0gW3BlclBhZ2U9MjBdIFRoZSBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBkaXNwbGF5ZWQgcGVyIHBhZ2UgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgcGVyUGFnZSgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX3BlclBhZ2U7XG4gICB9XG5cbiAgIHNldCBwZXJQYWdlKHBlclBhZ2U6IG51bWJlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZVBlclBhZ2UocGVyUGFnZSwgZmFsc2UpO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFt0b3RhbD0nJ10gVG90YWwgb2YgaXRlbXMgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgIH1cblxuICAgc2V0IHRvdGFsKHRvdGFsOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuX3RvdGFsID0gdG90YWw7XG4gICAgICB0aGlzLmdlbmVyYXRlSXRlbXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFnZXMoZmFsc2UpO1xuICAgfVxuXG4gICBwdWJsaWMgZGlzYWJsZU5leHRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBkaXNhYmxlUHJldkJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gICBwdWJsaWMgZmlyc3RJdGVtOiBudW1iZXI7XG4gICBwdWJsaWMgbGFzdEl0ZW06IG51bWJlcjtcbiAgIHB1YmxpYyBpdGVtczogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcbiAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IFN0RHJvcERvd25NZW51SXRlbTtcblxuICAgcHJpdmF0ZSBfY3VycmVudFBhZ2U6IG51bWJlciA9IDE7XG4gICBwcml2YXRlIF9wZXJQYWdlOiBudW1iZXIgPSAyMDtcbiAgIHByaXZhdGUgX3RvdGFsOiBudW1iZXI7XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX3BhZ2luYXRpb25FbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICB9XG5cbiAgIGdldCBoYXNPcHRpb25zKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGggPiAxO1xuICAgfVxuXG4gICBnZXQgcGFnaW5hdGlvbklkKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbjogSFRNTEVsZW1lbnQgPSB0aGlzLl9wYWdpbmF0aW9uRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgcmV0dXJuIHBhZ2luYXRpb24uZ2V0QXR0cmlidXRlKCdpZCcpICE9PSBudWxsID8gcGFnaW5hdGlvbi5pZCA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucGFnaW5hdGlvbklkICE9PSBudWxsID8gYCR7dGhpcy5wYWdpbmF0aW9uSWR9LXNlbGVjdGAgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgYnV0dG9uUHJldklkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uSWQgIT09IG51bGwgPyBgJHt0aGlzLnBhZ2luYXRpb25JZH0tcHJldmAgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgYnV0dG9uTmV4dElkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5wYWdpbmF0aW9uSWQgIT09IG51bGwgPyBgJHt0aGlzLnBhZ2luYXRpb25JZH0tbmV4dGAgOiBudWxsO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMudXBkYXRlUGFnZXMoZmFsc2UpO1xuICAgICAgdGhpcy5nZW5lcmF0ZUl0ZW1zKCk7XG4gICB9XG5cbiAgIGdlbmVyYXRlSXRlbXMoKTogdm9pZCB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICB0aGlzLnBlclBhZ2VPcHRpb25zLmZvckVhY2godGhpcy5hZGRQYWdlT3B0aW9uLmJpbmQodGhpcykpO1xuXG4gICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdGhpcy5fcGVyUGFnZSkgfHwgdGhpcy5pdGVtc1swXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIG5leHRQYWdlKCk6IHZvaWQge1xuICAgICAgdGhpcy5jdXJyZW50UGFnZSsrO1xuICAgICAgdGhpcy51cGRhdGVQYWdlcygpO1xuICAgfVxuXG4gICBwcmV2UGFnZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudFBhZ2UtLTtcbiAgICAgIHRoaXMudXBkYXRlUGFnZXMoKTtcbiAgIH1cblxuICAgb25DaGFuZ2VQZXJQYWdlKHBlclBhZ2U6IG51bWJlciwgZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICAgIGlmIChwZXJQYWdlICYmIHR5cGVvZiBwZXJQYWdlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgdGhpcy5fY3VycmVudFBhZ2UgPSAxO1xuICAgICAgICAgdGhpcy5fcGVyUGFnZSA9IHBlclBhZ2U7XG4gICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKGVtaXQpO1xuICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSB0aGlzLl9wZXJQYWdlKTtcbiAgICAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBlclBhZ2UuZW1pdCh0aGlzLl9wZXJQYWdlKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBhZGRQYWdlT3B0aW9uKG9wdGlvbjogUGFnaW5hdGVPcHRpb25zKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fdG90YWwgJiYgKCFvcHRpb24uc2hvd0Zyb20gfHwgb3B0aW9uLnNob3dGcm9tIDw9IHRoaXMuX3RvdGFsKSkge1xuICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBgJHtvcHRpb24udmFsdWV9YCxcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWVcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIHVwZGF0ZVBhZ2VzKGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICB0aGlzLmxhc3RJdGVtID0gdGhpcy5fcGVyUGFnZSAqIHRoaXMuX2N1cnJlbnRQYWdlO1xuXG4gICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPT09IDEpIHtcbiAgICAgICAgIHRoaXMuZmlyc3RJdGVtID0gdGhpcy5fY3VycmVudFBhZ2U7XG4gICAgICAgICB0aGlzLmRpc2FibGVQcmV2QnV0dG9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmZpcnN0SXRlbSA9IHRoaXMuX3BlclBhZ2UgKiAodGhpcy5fY3VycmVudFBhZ2UgLSAxKSArIDE7XG4gICAgICAgICB0aGlzLmRpc2FibGVQcmV2QnV0dG9uID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhc3RJdGVtID49IHRoaXMuX3RvdGFsKSB7XG4gICAgICAgICB0aGlzLmxhc3RJdGVtID0gdGhpcy5fdG90YWw7XG4gICAgICAgICB0aGlzLmRpc2FibGVOZXh0QnV0dG9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmRpc2FibGVOZXh0QnV0dG9uID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLl9jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMuX3BlclBhZ2VcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxufVxuIl19