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
export class StPopoverFilterComponent {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
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
    /**
     * \@Input {boolean} [hidden=''] field to show popover
     * @return {?}
     */
    get hidden() {
        return this._hidden;
    }
    /**
     * @param {?} hidden
     * @return {?}
     */
    set hidden(hidden) {
        if (!hidden) {
            this.offsetX = (this._elementRef.nativeElement.offsetLeft - this._elementRef.nativeElement.offsetWidth) * -1;
        }
        this._hidden = hidden;
    }
    /**
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    getConfigField(field, config) {
        return _get(field, `filters.${config}`);
    }
    /**
     * @return {?}
     */
    getFilteredIcon() {
        return this.filtered ? this.iconClasses.selected : this.iconClasses.enabled;
    }
    /**
     * @param {?} indexFilter
     * @param {?} event
     * @return {?}
     */
    onChangeFilter(indexFilter, event) {
        this.field.filters.filterConfig[indexFilter].selected = ((/** @type {?} */ (event))).checked;
    }
    /**
     * @return {?}
     */
    onFilter() {
        this.filter.emit();
    }
}
StPopoverFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-popover-filter',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop-over  class=\"st-table__popover\" qaTag=\"pop-over-table\"\n              [title]=\"getConfigField(field, 'title')\"\n              [hidden]=\"hidden\"\n              [showArrow]=\"false\"\n              [openToLeft]=\"false\"\n              [offset]=\"{x: offsetX, y: 0}\"\n              [showSettingBtn]=\"getConfigField(field, 'showSettingBtn')\">\n   <i pop-over-button class='st-table__filter-arrow' [ngClass]=\"getFilteredIcon()\">\n   </i>\n   <div pop-over-content class=\"st-table__popover-content\">\n      <ng-container [ngTemplateOutlet]=\"templateContentFilter\" [ngTemplateOutletContext]=\"{index:index}\"></ng-container>\n      <div class=\"st-table__popover-content-filter\" *ngIf=\"!templateContentFilter\">\n         <div *ngFor=\"let filter of field.filters.filterConfig; let indexFilter = index\">\n            <st-checkbox name=\"filter.name\" [checked]=\"filter.selected\" [value]=\"false\" (change)=\"onChangeFilter(indexFilter, $event)\">\n               <span>{{filter.name}}</span>\n            </st-checkbox>\n         </div>\n         <button id=\"filter-button-{{index}}\" class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter()\">\n            <i *ngIf=\"!getConfigField(field, 'buttonText')\" class=\"icon icon-filter\"></i>\n            <span>{{getConfigField(field, 'buttonText')}}</span>\n         </button>\n      </div>\n   </div>\n</st-pop-over>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-table__header-item--filterable{position:initial;text-transform:inherit}.st-table__popover-content{display:flex;flex-wrap:nowrap;padding:15px;white-space:nowrap;margin-left:4px}.st-table__popover-content-filter{width:100%}.st-table__popover-button{margin-top:20px}.st-table__popover{display:inline-flex}.st-table__popover span{position:initial;text-transform:inherit}"]
            }] }
];
/** @nocollapse */
StPopoverFilterComponent.ctorParameters = () => [
    { type: ElementRef }
];
StPopoverFilterComponent.propDecorators = {
    field: [{ type: Input }],
    index: [{ type: Input }],
    filtered: [{ type: Input }],
    templateContentFilter: [{ type: Input }],
    iconClasses: [{ type: Input }],
    filter: [{ type: Output }],
    hidden: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcG9wb3Zlci1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10YWJsZS9zaGFyZWQvc3QtcG9wb3Zlci1maWx0ZXIvc3QtcG9wb3Zlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUdyQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVFwRSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBeUJsQyxZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7OztRQVZsQyxnQkFBVyxHQUE4QixJQUFJLHdCQUF3QixFQUFFLENBQUM7Ozs7UUFHdkUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBU3pELENBQUM7Ozs7O0lBR0QsSUFDSSxNQUFNO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQztTQUNoSDtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVNLGNBQWMsQ0FBQyxLQUFvQixFQUFFLE1BQWM7UUFDdkQsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7O0lBRU0sZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFTSxjQUFjLENBQUMsV0FBbUIsRUFBRSxLQUFZO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxtQkFBSyxLQUFLLEVBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNoRixDQUFDOzs7O0lBRU0sUUFBUTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBOURILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qiw4MERBQWlEO2dCQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7Ozs7WUFYNEMsVUFBVTs7O29CQWVuRCxLQUFLO29CQUdMLEtBQUs7dUJBR0wsS0FBSztvQ0FHTCxLQUFLOzBCQUdMLEtBQUs7cUJBR0wsTUFBTTtxQkFZTixLQUFLOzs7Ozs7O0lBM0JOLHlDQUE4Qjs7Ozs7SUFHOUIseUNBQXVCOzs7OztJQUd2Qiw0Q0FBMkI7Ozs7O0lBRzNCLHlEQUFrRDs7Ozs7SUFHbEQsK0NBQWlGOzs7OztJQUdqRiwwQ0FBeUQ7O0lBRXpELDhDQUEyQjs7SUFDM0IsMkNBQXVCOzs7OztJQUV2QiwyQ0FBeUI7Ozs7O0lBRWIsK0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQgYXMgX2dldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0VGFibGVIZWFkZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdGFibGUtaGVhZGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdFRhYmxlRmlsdGVySWNvbkNsYXNzZXMgfSBmcm9tICcuLi8uLi9zdC10YWJsZS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtcG9wb3Zlci1maWx0ZXInLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXBvcG92ZXItZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXBvcG92ZXItZmlsdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFBvcG92ZXJGaWx0ZXJDb21wb25lbnQge1xuXG4gICAvKiogQElucHV0IHtTdFRhYmxlSGVhZGVyfSBbZmllbGQ9JyddIGZpZWxkIGRpc3BsYXllZCBpbiB0aGUgaGVhZGVyICovXG4gICBASW5wdXQoKSBmaWVsZDogU3RUYWJsZUhlYWRlcjtcblxuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbaW5kZXg9JyddIGluZGV4IG9mIGZpZWxkIGRpc3BsYXllZCBpbiB0aGUgaGVhZGVyICovXG4gICBASW5wdXQoKSBpbmRleDogbnVtYmVyO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbZmlsdGVyZWQ9JyddIFN0YXR1cyBmaWx0ZXIgYnkgY29sdW1uLCBuZWVkZWQgd2l0aCB0ZW1wbGF0ZUNvbnRlbnRGaWx0ZXIgdG8gY2hhbmdlIGZpbHRlcmVkIGljb24gKi9cbiAgIEBJbnB1dCgpIGZpbHRlcmVkOiBib29sZWFuO1xuXG4gICAvKiogQElucHV0IHtUZW1wbGF0ZVJlZn0gW3RlbXBsYXRlQ29udGVudEZpbHRlcj11bmRlZmluZWRdIFJlZmVyZW5jZSB0byBwYWludCBhIGN1c3RvbSB0ZW1wbGF0ZSBpbnNpZGUgcG9wb3ZlciBjb250ZW50ICovXG4gICBASW5wdXQoKSB0ZW1wbGF0ZUNvbnRlbnRGaWx0ZXI/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAvKiogQElucHV0IHt7U3RUYWJsZUZpbHRlckljb25DbGFzc2VzfSBbaWNvbkNsYXNzZXM9JyddIExpc3Qgb2YgaWNvbiBjbGFzc2VzICovXG4gICBASW5wdXQoKSBpY29uQ2xhc3Nlcz86IFN0VGFibGVGaWx0ZXJJY29uQ2xhc3NlcyA9IG5ldyBTdFRhYmxlRmlsdGVySWNvbkNsYXNzZXMoKTtcblxuICAgLyoqIEBPdXRwdXQgW2ZpbHRlcj0nJ10gRXZlbnQgZW1pdHRlZCAgd2hlbiB1c2VyIGludGVyYWN0cyB3aXRoIGZpbHRlciBidXR0b24gd2l0aG91dCBhIGN1c3RvbSB0ZW1wbGF0ZSAqL1xuICAgQE91dHB1dCgpIGZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIHB1YmxpYyBvcGVuVG9MZWZ0OiBib29sZWFuO1xuICAgcHVibGljIG9mZnNldFg6IG51bWJlcjtcblxuICAgcHJpdmF0ZSBfaGlkZGVuOiBib29sZWFuO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgIH1cblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2hpZGRlbj0nJ10gZmllbGQgdG8gc2hvdyBwb3BvdmVyICovXG4gICBASW5wdXQoKVxuICAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gICB9XG5cbiAgIHNldCBoaWRkZW4oaGlkZGVuOiBib29sZWFuKSB7XG4gICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgdGhpcy5vZmZzZXRYID0gKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0IC0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSAgKiAtMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2hpZGRlbiA9IGhpZGRlbjtcbiAgIH1cblxuICAgcHVibGljIGdldENvbmZpZ0ZpZWxkKGZpZWxkOiBTdFRhYmxlSGVhZGVyLCBjb25maWc6IHN0cmluZyk6IGFueSB7XG4gICAgICByZXR1cm4gX2dldChmaWVsZCwgYGZpbHRlcnMuJHtjb25maWd9YCk7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXRGaWx0ZXJlZEljb24oKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcmVkID8gdGhpcy5pY29uQ2xhc3Nlcy5zZWxlY3RlZCA6IHRoaXMuaWNvbkNsYXNzZXMuZW5hYmxlZDtcbiAgIH1cblxuICAgcHVibGljIG9uQ2hhbmdlRmlsdGVyKGluZGV4RmlsdGVyOiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy5maWVsZC5maWx0ZXJzLmZpbHRlckNvbmZpZ1tpbmRleEZpbHRlcl0uc2VsZWN0ZWQgPSAoPGFueT5ldmVudCkuY2hlY2tlZDtcbiAgIH1cblxuICAgcHVibGljIG9uRmlsdGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5maWx0ZXIuZW1pdCgpO1xuICAgfVxufVxuIl19