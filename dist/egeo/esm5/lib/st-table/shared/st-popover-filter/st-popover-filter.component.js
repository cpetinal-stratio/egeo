/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/st-popover-filter/st-popover-filter.component.ts
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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { get as _get } from 'lodash';
import { StTableFilterIconClasses } from '../../st-table.interface';
var StPopoverFilterComponent = /** @class */ (function () {
    function StPopoverFilterComponent(_elementRef) {
        this._elementRef = _elementRef;
        /**
         * \@Input {{StTableFilterIconClasses} [iconClasses=''] List of icon classes
         */
        this.iconClasses = new StTableFilterIconClasses();
        /**
         * \@Output [filter=''] Event emitted  when user interacts with filter button without a custom template
         */
        this.filter = new EventEmitter();
    }
    Object.defineProperty(StPopoverFilterComponent.prototype, "hidden", {
        /** @Input {boolean} [hidden=''] field to show popover */
        get: /**
         * \@Input {boolean} [hidden=''] field to show popover
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        set: /**
         * @param {?} hidden
         * @return {?}
         */
        function (hidden) {
            if (!hidden) {
                this.offsetX = (this._elementRef.nativeElement.offsetLeft - this._elementRef.nativeElement.offsetWidth) * -1;
            }
            this._hidden = hidden;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    StPopoverFilterComponent.prototype.getConfigField = /**
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    function (field, config) {
        return _get(field, "filters." + config);
    };
    /**
     * @return {?}
     */
    StPopoverFilterComponent.prototype.getFilteredIcon = /**
     * @return {?}
     */
    function () {
        return this.filtered ? this.iconClasses.selected : this.iconClasses.enabled;
    };
    /**
     * @param {?} indexFilter
     * @param {?} event
     * @return {?}
     */
    StPopoverFilterComponent.prototype.onChangeFilter = /**
     * @param {?} indexFilter
     * @param {?} event
     * @return {?}
     */
    function (indexFilter, event) {
        this.field.filters.filterConfig[indexFilter].selected = ((/** @type {?} */ (event))).checked;
    };
    /**
     * @return {?}
     */
    StPopoverFilterComponent.prototype.onFilter = /**
     * @return {?}
     */
    function () {
        this.filter.emit();
    };
    StPopoverFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-popover-filter',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop-over  class=\"st-table__popover\" qaTag=\"pop-over-table\"\n              [title]=\"getConfigField(field, 'title')\"\n              [hidden]=\"hidden\"\n              [showArrow]=\"false\"\n              [openToLeft]=\"false\"\n              [offset]=\"{x: offsetX, y: 0}\"\n              [showSettingBtn]=\"getConfigField(field, 'showSettingBtn')\">\n   <i pop-over-button class='st-table__filter-arrow' [ngClass]=\"getFilteredIcon()\">\n   </i>\n   <div pop-over-content class=\"st-table__popover-content\">\n      <ng-container [ngTemplateOutlet]=\"templateContentFilter\" [ngTemplateOutletContext]=\"{index:index}\"></ng-container>\n      <div class=\"st-table__popover-content-filter\" *ngIf=\"!templateContentFilter\">\n         <div *ngFor=\"let filter of field.filters.filterConfig; let indexFilter = index\">\n            <st-checkbox name=\"filter.name\" [checked]=\"filter.selected\" [value]=\"false\" (change)=\"onChangeFilter(indexFilter, $event)\">\n               <span>{{filter.name}}</span>\n            </st-checkbox>\n         </div>\n         <button id=\"filter-button-{{index}}\" class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter()\">\n            <i *ngIf=\"!getConfigField(field, 'buttonText')\" class=\"icon icon-filter\"></i>\n            <span>{{getConfigField(field, 'buttonText')}}</span>\n         </button>\n      </div>\n   </div>\n</st-pop-over>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-table__header-item--filterable{position:initial;text-transform:inherit}.st-table__popover-content{display:flex;flex-wrap:nowrap;padding:15px;white-space:nowrap;margin-left:4px}.st-table__popover-content-filter{width:100%}.st-table__popover-button{margin-top:20px}.st-table__popover{display:inline-flex}.st-table__popover span{position:initial;text-transform:inherit}"]
                }] }
    ];
    /** @nocollapse */
    StPopoverFilterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StPopoverFilterComponent.propDecorators = {
        field: [{ type: Input }],
        index: [{ type: Input }],
        filtered: [{ type: Input }],
        templateContentFilter: [{ type: Input }],
        iconClasses: [{ type: Input }],
        filter: [{ type: Output }],
        hidden: [{ type: Input }]
    };
    return StPopoverFilterComponent;
}());
export { StPopoverFilterComponent };
if (false) {
    /**
     * \@Input {StTableHeader} [field=''] field displayed in the header
     * @type {?}
     */
    StPopoverFilterComponent.prototype.field;
    /**
     * \@Input {number} [index=''] index of field displayed in the header
     * @type {?}
     */
    StPopoverFilterComponent.prototype.index;
    /**
     * \@Input {boolean} [filtered=''] Status filter by column, needed with templateContentFilter to change filtered icon
     * @type {?}
     */
    StPopoverFilterComponent.prototype.filtered;
    /**
     * \@Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content
     * @type {?}
     */
    StPopoverFilterComponent.prototype.templateContentFilter;
    /**
     * \@Input {{StTableFilterIconClasses} [iconClasses=''] List of icon classes
     * @type {?}
     */
    StPopoverFilterComponent.prototype.iconClasses;
    /**
     * \@Output [filter=''] Event emitted  when user interacts with filter button without a custom template
     * @type {?}
     */
    StPopoverFilterComponent.prototype.filter;
    /** @type {?} */
    StPopoverFilterComponent.prototype.openToLeft;
    /** @type {?} */
    StPopoverFilterComponent.prototype.offsetX;
    /**
     * @type {?}
     * @private
     */
    StPopoverFilterComponent.prototype._hidden;
    /**
     * @type {?}
     * @private
     */
    StPopoverFilterComponent.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcG9wb3Zlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10YWJsZS9zaGFyZWQvc3QtcG9wb3Zlci1maWx0ZXIvc3QtcG9wb3Zlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUdyQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRTtJQStCRyxrQ0FBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7Ozs7UUFWbEMsZ0JBQVcsR0FBOEIsSUFBSSx3QkFBd0IsRUFBRSxDQUFDOzs7O1FBR3ZFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVN6RCxDQUFDO0lBR0Qsc0JBQ0ksNENBQU07UUFGVix5REFBeUQ7Ozs7O1FBQ3pEO1lBRUcsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBRUQsVUFBVyxNQUFlO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQzthQUNoSDtZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQVBBOzs7Ozs7SUFTTSxpREFBYzs7Ozs7SUFBckIsVUFBc0IsS0FBb0IsRUFBRSxNQUFjO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFXLE1BQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFTSxrREFBZTs7O0lBQXRCO1FBQ0csT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRU0saURBQWM7Ozs7O0lBQXJCLFVBQXNCLFdBQW1CLEVBQUUsS0FBWTtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsbUJBQUssS0FBSyxFQUFBLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDaEYsQ0FBQzs7OztJQUVNLDJDQUFROzs7SUFBZjtRQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBOURILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qiw4MERBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQVg0QyxVQUFVOzs7d0JBZW5ELEtBQUs7d0JBR0wsS0FBSzsyQkFHTCxLQUFLO3dDQUdMLEtBQUs7OEJBR0wsS0FBSzt5QkFHTCxNQUFNO3lCQVlOLEtBQUs7O0lBMkJULCtCQUFDO0NBQUEsQUEvREQsSUErREM7U0F6RFksd0JBQXdCOzs7Ozs7SUFHbEMseUNBQThCOzs7OztJQUc5Qix5Q0FBdUI7Ozs7O0lBR3ZCLDRDQUEyQjs7Ozs7SUFHM0IseURBQWtEOzs7OztJQUdsRCwrQ0FBaUY7Ozs7O0lBR2pGLDBDQUF5RDs7SUFFekQsOENBQTJCOztJQUMzQiwyQ0FBdUI7Ozs7O0lBRXZCLDJDQUF5Qjs7Ozs7SUFFYiwrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU3RUYWJsZUhlYWRlciB9IGZyb20gJy4uLy4uL3NoYXJlZC90YWJsZS1oZWFkZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0VGFibGVGaWx0ZXJJY29uQ2xhc3NlcyB9IGZyb20gJy4uLy4uL3N0LXRhYmxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1wb3BvdmVyLWZpbHRlcicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcG9wb3Zlci1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtcG9wb3Zlci1maWx0ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0UG9wb3ZlckZpbHRlckNvbXBvbmVudCB7XG5cbiAgIC8qKiBASW5wdXQge1N0VGFibGVIZWFkZXJ9IFtmaWVsZD0nJ10gZmllbGQgZGlzcGxheWVkIGluIHRoZSBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpIGZpZWxkOiBTdFRhYmxlSGVhZGVyO1xuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFtpbmRleD0nJ10gaW5kZXggb2YgZmllbGQgZGlzcGxheWVkIGluIHRoZSBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtmaWx0ZXJlZD0nJ10gU3RhdHVzIGZpbHRlciBieSBjb2x1bW4sIG5lZWRlZCB3aXRoIHRlbXBsYXRlQ29udGVudEZpbHRlciB0byBjaGFuZ2UgZmlsdGVyZWQgaWNvbiAqL1xuICAgQElucHV0KCkgZmlsdGVyZWQ6IGJvb2xlYW47XG5cbiAgIC8qKiBASW5wdXQge1RlbXBsYXRlUmVmfSBbdGVtcGxhdGVDb250ZW50RmlsdGVyPXVuZGVmaW5lZF0gUmVmZXJlbmNlIHRvIHBhaW50IGEgY3VzdG9tIHRlbXBsYXRlIGluc2lkZSBwb3BvdmVyIGNvbnRlbnQgKi9cbiAgIEBJbnB1dCgpIHRlbXBsYXRlQ29udGVudEZpbHRlcj86IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgIC8qKiBASW5wdXQge3tTdFRhYmxlRmlsdGVySWNvbkNsYXNzZXN9IFtpY29uQ2xhc3Nlcz0nJ10gTGlzdCBvZiBpY29uIGNsYXNzZXMgKi9cbiAgIEBJbnB1dCgpIGljb25DbGFzc2VzPzogU3RUYWJsZUZpbHRlckljb25DbGFzc2VzID0gbmV3IFN0VGFibGVGaWx0ZXJJY29uQ2xhc3NlcygpO1xuXG4gICAvKiogQE91dHB1dCBbZmlsdGVyPScnXSBFdmVudCBlbWl0dGVkICB3aGVuIHVzZXIgaW50ZXJhY3RzIHdpdGggZmlsdGVyIGJ1dHRvbiB3aXRob3V0IGEgY3VzdG9tIHRlbXBsYXRlICovXG4gICBAT3V0cHV0KCkgZmlsdGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgcHVibGljIG9wZW5Ub0xlZnQ6IGJvb2xlYW47XG4gICBwdWJsaWMgb2Zmc2V0WDogbnVtYmVyO1xuXG4gICBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW47XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgfVxuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbaGlkZGVuPScnXSBmaWVsZCB0byBzaG93IHBvcG92ZXIgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbjtcbiAgIH1cblxuICAgc2V0IGhpZGRlbihoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICB0aGlzLm9mZnNldFggPSAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgLSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpICAqIC0xO1xuICAgICAgfVxuICAgICAgdGhpcy5faGlkZGVuID0gaGlkZGVuO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0Q29uZmlnRmllbGQoZmllbGQ6IFN0VGFibGVIZWFkZXIsIGNvbmZpZzogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiBfZ2V0KGZpZWxkLCBgZmlsdGVycy4ke2NvbmZpZ31gKTtcbiAgIH1cblxuICAgcHVibGljIGdldEZpbHRlcmVkSWNvbigpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWQgPyB0aGlzLmljb25DbGFzc2VzLnNlbGVjdGVkIDogdGhpcy5pY29uQ2xhc3Nlcy5lbmFibGVkO1xuICAgfVxuXG4gICBwdWJsaWMgb25DaGFuZ2VGaWx0ZXIoaW5kZXhGaWx0ZXI6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmZpZWxkLmZpbHRlcnMuZmlsdGVyQ29uZmlnW2luZGV4RmlsdGVyXS5zZWxlY3RlZCA9ICg8YW55PmV2ZW50KS5jaGVja2VkO1xuICAgfVxuXG4gICBwdWJsaWMgb25GaWx0ZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmZpbHRlci5lbWl0KCk7XG4gICB9XG59XG4iXX0=