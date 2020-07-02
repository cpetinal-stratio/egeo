var StSwitchComponent_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-switch/st-switch.component.ts
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
import { Component, Input, ChangeDetectionStrategy, forwardRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { StEgeo } from '../decorators/require-decorators';
let StSwitchComponent = StSwitchComponent_1 = class StSwitchComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get labelQaTag() {
        return (this.qaTag || this.name) + '-label';
    }
    /**
     * @return {?}
     */
    get relatedInput() {
        return `${this.name}-input`;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) { }
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!this._disabled) {
            this._value = value;
            this.change.emit(this._value);
            if (this.registeredOnChange) {
                this.registeredOnChange(value);
            }
        }
    }
    // internal change callback
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.registeredOnChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @param {?} disable
     * @return {?}
     */
    setDisabledState(disable) {
        this.disabled = disable;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        event.stopPropagation();
        /** @type {?} */
        let value = ((/** @type {?} */ (event.target))).checked;
        this._value = value;
        this.writeValue(value);
    }
};
StSwitchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-switch',
                host: { class: 'st-switch' },
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label st-label [attr.for]=\"relatedInput\" [attr.title]=\"contextualHelp\" [attr.id]=\"labelQaTag\" >\n   {{label}}\n</label>\n<div class=\"st-switch__toggle sth-switch__toggle\" (click)=\"writeValue(!value)\" [attr.id]=\"labelQaTag\" [ngClass]=\"{ 'st-switch--disabled': disabled, 'st-switch--on': value, 'st-switch--off': !value}\">\n   <div class=\"st-switch__box sth-switch__box\">\n      <span class=\"st-switch__circle sth-switch__circle\"></span>\n   </div>\n   <input class=\"st-switch__input\" [name]=\"name\" [attr.type]=\"'checkbox'\" [checked]=\"value\" (click)=\"onChange($event)\" [attr.id]=\"relatedInput\"\n   [disabled]=\"disabled\" />\n</div>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StSwitchComponent_1)), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StSwitchComponent_1)), multi: true }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-switch__input{visibility:hidden;position:absolute}.st-switch__toggle{margin-left:15px;vertical-align:middle;position:relative;height:25px;width:45px;display:inline-block;cursor:pointer}.st-switch__box{border-radius:42px;height:100%;width:100%}.st-switch__circle{width:19px;height:19px;top:3px;left:3px;border-radius:100%;position:absolute;transition:.3s}.st-switch--disabled{opacity:.5}.st-switch--on .st-switch__circle{margin-left:21px}"]
            }] }
];
/** @nocollapse */
StSwitchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StSwitchComponent.propDecorators = {
    qaTag: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    contextualHelp: [{ type: Input }],
    change: [{ type: Output }],
    value: [{ type: Input }],
    disabled: [{ type: Input }]
};
StSwitchComponent = StSwitchComponent_1 = tslib_1.__decorate([
    StEgeo(),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
], StSwitchComponent);
export { StSwitchComponent };
if (false) {
    /** @type {?} */
    StSwitchComponent.prototype.qaTag;
    /** @type {?} */
    StSwitchComponent.prototype.label;
    /** @type {?} */
    StSwitchComponent.prototype.name;
    /** @type {?} */
    StSwitchComponent.prototype.contextualHelp;
    /** @type {?} */
    StSwitchComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    StSwitchComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    StSwitchComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    StSwitchComponent.prototype.registeredOnChange;
    /**
     * @type {?}
     * @private
     */
    StSwitchComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtc3dpdGNoL3N0LXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQ0osU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQ3pDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFHSixpQkFBaUIsRUFBRSxhQUFhLEVBQ2xDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0lBZTdDLGlCQUFpQiwrQkFBakIsaUJBQWlCOzs7O0lBVzNCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTmhDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQU90RSxDQUFDOzs7O0lBRUQsSUFDSSxLQUFLO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUNJLFFBQVE7UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLFFBQVEsQ0FBQyxRQUFpQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQW9CLElBQVEsQ0FBQzs7Ozs7O0lBR3RDLFVBQVUsQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO1NBQ0g7SUFDSixDQUFDOzs7Ozs7SUFJRCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztJQUNoQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQWdCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWlCO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7WUFDcEIsS0FBSyxHQUFZLENBQUMsbUJBQWtCLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLE9BQU87UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0gsQ0FBQTs7WUEvRDJCLGlCQUFpQjs7O1lBeEI1QyxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUM7Z0JBQzFCLHlsQ0FBK0I7Z0JBRS9CLFNBQVMsRUFBRTtvQkFDUixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFpQixFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDN0YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsbUJBQWlCLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUMzRjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7Ozs7WUFuQkUsaUJBQWlCOzs7b0JBdUJoQixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3FCQUNMLE1BQU07b0JBU04sS0FBSzt1QkFVTCxLQUFLOztBQXhCSSxpQkFBaUI7SUFEN0IsTUFBTSxFQUFFOzZDQVltQixpQkFBaUI7R0FYaEMsaUJBQWlCLENBMEU3QjtTQTFFWSxpQkFBaUI7OztJQUMzQixrQ0FBdUI7O0lBQ3ZCLGtDQUF1Qjs7SUFDdkIsaUNBQXNCOztJQUN0QiwyQ0FBZ0M7O0lBQ2hDLG1DQUFzRTs7Ozs7SUFFdEUsbUNBQXdCOzs7OztJQUN4QixzQ0FBMkI7Ozs7O0lBQzNCLCtDQUE2Qzs7Ozs7SUFFakMsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ29tcG9uZW50LFxuICAgSW5wdXQsXG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIGZvcndhcmRSZWYsXG4gICBDaGFuZ2VEZXRlY3RvclJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgRm9ybUNvbnRyb2wsXG4gICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgIE5HX1ZBTFVFX0FDQ0VTU09SLCBOR19WQUxJREFUT1JTXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0RWdlbyB9IGZyb20gJy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXN3aXRjaCcsXG4gICBob3N0OiB7Y2xhc3M6ICdzdC1zd2l0Y2gnfSxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1zd2l0Y2guaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1zd2l0Y2guc2NzcyddLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdFN3aXRjaENvbXBvbmVudCksIG11bHRpOiB0cnVlIH0sXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0U3dpdGNoQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICAgXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5AU3RFZ2VvKClcbmV4cG9ydCBjbGFzcyBTdFN3aXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgQElucHV0KCkgY29udGV4dHVhbEhlbHA6IHN0cmluZztcbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW47XG4gICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgIHByaXZhdGUgcmVnaXN0ZXJlZE9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgQElucHV0KClcbiAgIGdldCB2YWx1ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgIH1cblxuICAgc2V0IHZhbHVlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIEBJbnB1dCgpXG4gICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gICB9XG5cbiAgIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBnZXQgbGFiZWxRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0aGlzLnFhVGFnIHx8IHRoaXMubmFtZSkgKyAnLWxhYmVsJztcbiAgIH1cblxuICAgZ2V0IHJlbGF0ZWRJbnB1dCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0taW5wdXRgO1xuICAgfVxuXG4gICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCk6IGFueSB7fVxuXG4gICAvLyBsb2FkIGV4dGVybmFsIGNoYW5nZVxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgICAgaWYgKHRoaXMucmVnaXN0ZXJlZE9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWRPbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cblxuICAgLy8gaW50ZXJuYWwgY2hhbmdlIGNhbGxiYWNrXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRPbkNoYW5nZSA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgfVxuXG4gICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlO1xuICAgfVxuXG4gICBvbkNoYW5nZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBsZXQgdmFsdWU6IGJvb2xlYW4gPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jaGVja2VkO1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICB9XG59XG4iXX0=