/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-checkbox/st-checkbox.component.ts
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
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var CHECKBOX_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return StCheckboxComponent; })),
    multi: true
};
/**
 * \@description {Component} [Checkbox]
 *
 * The checkbox component represents a custom input of the checkbox type.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-checkbox name="option" value="1">
 *    Option 1
 * </st-checkbox>
 * ```
 *
 */
var StCheckboxComponent = /** @class */ (function () {
    function StCheckboxComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * \@Output {{ checked: boolean, value: any }} [change=''] This is emitted when user clicks on the checkbox
         */
        this.change = new EventEmitter();
        this._checked = false;
        this._controlValueAccessorChangeFn = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(StCheckboxComponent.prototype, "checked", {
        /** @Input {boolean} [checked='']  */
        get: /**
         * \@Input {boolean} [checked='']
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} checked
         * @return {?}
         */
        function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StCheckboxComponent.prototype, "labelQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.qaTag || this.name) + '-label';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StCheckboxComponent.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        if (!this.readonly) {
            if (!this.disabled) {
                this._checked = !this._checked;
                this._controlValueAccessorChangeFn(this._checked);
                this.change.emit({ checked: this.checked, value: this.value });
            }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StCheckboxComponent.prototype.handleChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StCheckboxComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._checked = value;
        this._changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StCheckboxComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StCheckboxComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    StCheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    };
    StCheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-checkbox',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label st-label class=\"st-checkbox\" [ngClass]=\"{'disabled' : disabled}\" [attr.id]=\"labelQaTag\" [attr.title]=\"contextualHelp\">\n   <div class=\"st-checkbox-container\">\n      <input\n         type=\"checkbox\"\n         [id]=\"qaTag\"\n         [name]=\"name\"\n         [required]=\"required\"\n         [checked]=\"checked\"\n         [disabled]=\"disabled\"\n         [value]=\"value\"\n         [hidden]=\"true\"\n         [readonly]=\"readonly\"\n         (click)=\"handleClick()\"\n         (change)=\"handleChange($event)\" />\n   </div>\n   <div class=\"custom-checkbox st-checkbox-custom\" [ngClass]=\"{'custom-checkbox--checked' : checked}\"></div><ng-content></ng-content>\n</label>\n",
                    providers: [CHECKBOX_CONTROL_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StCheckboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StCheckboxComponent.propDecorators = {
        checked: [{ type: Input }],
        name: [{ type: Input }],
        qaTag: [{ type: Input }],
        disabled: [{ type: Input }],
        required: [{ type: Input }],
        readonly: [{ type: Input }],
        value: [{ type: Input }],
        contextualHelp: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StCheckboxComponent;
}());
export { StCheckboxComponent };
if (false) {
    /**
     * \@Input {boolean} [name=''] This parameter shows the final name of the input
     * @type {?}
     */
    StCheckboxComponent.prototype.name;
    /**
     * \@Input {boolean} [qaTag=''] Id value for qa test
     * @type {?}
     */
    StCheckboxComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [disabled=''] It allows to disable the input component of the checkbox
     * @type {?}
     */
    StCheckboxComponent.prototype.disabled;
    /**
     * \@Input {boolean} [required=''] It converts the component into a mandatory field in a form
     * @type {?}
     */
    StCheckboxComponent.prototype.required;
    /**
     * \@Input {boolean} [readonly=''] This parameter disables the checkbox and it can not be modified by the user
     * @type {?}
     */
    StCheckboxComponent.prototype.readonly;
    /**
     * \@Input {any} [value=''] The value of the checkbox
     * @type {?}
     */
    StCheckboxComponent.prototype.value;
    /**
     * \@Input {string} [contextualHelp=''] Information displayed at a tooltip
     * @type {?}
     */
    StCheckboxComponent.prototype.contextualHelp;
    /**
     * \@Output {{ checked: boolean, value: any }} [change=''] This is emitted when user clicks on the checkbox
     * @type {?}
     */
    StCheckboxComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    StCheckboxComponent.prototype._checked;
    /** @type {?} */
    StCheckboxComponent.prototype._controlValueAccessorChangeFn;
    /** @type {?} */
    StCheckboxComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StCheckboxComponent.prototype._changeDetectorRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1jaGVja2JveC9zdC1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLEtBQU8seUJBQXlCLEdBQVE7SUFDM0MsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCRDtJQXNDRyw2QkFDVyxrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjs7OztRQUx0QyxXQUFNLEdBQW1ELElBQUksWUFBWSxFQUFvQyxDQUFDO1FBRWhILGFBQVEsR0FBWSxLQUFLLENBQUM7UUFRbEMsa0NBQTZCOzs7O1FBQXlCLFVBQUMsS0FBSyxJQUFPLENBQUMsRUFBQztRQUVyRSxjQUFTOzs7UUFBYyxjQUFRLENBQUMsRUFBQztJQUpqQyxDQUFDO0lBakNELHNCQUFhLHdDQUFPO1FBRHBCLHFDQUFxQzs7Ozs7UUFDckM7WUFDRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFFRCxVQUFZLE9BQWdCO1lBQ3pCLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDekM7UUFDSixDQUFDOzs7T0FQQTtJQXFDRCxzQkFBSSwyQ0FBVTs7OztRQUFkO1lBQ0csT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDakU7U0FDSDtJQUNKLENBQUM7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLE1BQWE7UUFDdkIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXdCO1FBQ3RDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Z0JBbEZILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsaW9DQUEyQztvQkFDM0MsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNqRDs7OztnQkEvQjRELGlCQUFpQjs7OzBCQW1DMUUsS0FBSzt1QkFXTCxLQUFLO3dCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7d0JBRUwsS0FBSztpQ0FFTCxLQUFLO3lCQUVMLE1BQU07O0lBa0RWLDBCQUFDO0NBQUEsQUFwRkQsSUFvRkM7U0E3RVksbUJBQW1COzs7Ozs7SUFhN0IsbUNBQXNCOzs7OztJQUV0QixvQ0FBdUI7Ozs7O0lBRXZCLHVDQUEyQjs7Ozs7SUFFM0IsdUNBQTJCOzs7OztJQUUzQix1Q0FBMkI7Ozs7O0lBRTNCLG9DQUFvQjs7Ozs7SUFFcEIsNkNBQWdDOzs7OztJQUVoQyxxQ0FBd0g7Ozs7O0lBRXhILHVDQUFrQzs7SUFRbEMsNERBQXFFOztJQUVyRSx3Q0FBaUM7Ozs7O0lBUDlCLGlEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfQ09OVFJPTF9BQ0NFU1NPUjogYW55ID0ge1xuICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdENoZWNrYm94Q29tcG9uZW50KSxcbiAgIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbQ2hlY2tib3hdXG4gKlxuICogVGhlIGNoZWNrYm94IGNvbXBvbmVudCByZXByZXNlbnRzIGEgY3VzdG9tIGlucHV0IG9mIHRoZSBjaGVja2JveCB0eXBlLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtY2hlY2tib3ggbmFtZT1cIm9wdGlvblwiIHZhbHVlPVwiMVwiPlxuICogICAgT3B0aW9uIDFcbiAqIDwvc3QtY2hlY2tib3g+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1jaGVja2JveCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfQ09OVFJPTF9BQ0NFU1NPUl0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN0Q2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbY2hlY2tlZD0nJ10gICovXG4gICBASW5wdXQoKSBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICAgfVxuXG4gICBzZXQgY2hlY2tlZChjaGVja2VkOiBib29sZWFuKSB7XG4gICAgICBpZiAoY2hlY2tlZCAhPT0gdGhpcy5jaGVja2VkKSB7XG4gICAgICAgICB0aGlzLl9jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgfVxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW25hbWU9JyddIFRoaXMgcGFyYW1ldGVyIHNob3dzIHRoZSBmaW5hbCBuYW1lIG9mIHRoZSBpbnB1dCAqL1xuICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3FhVGFnPScnXSBJZCB2YWx1ZSBmb3IgcWEgdGVzdCAqL1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtkaXNhYmxlZD0nJ10gSXQgYWxsb3dzIHRvIGRpc2FibGUgdGhlIGlucHV0IGNvbXBvbmVudCBvZiB0aGUgY2hlY2tib3ggKi9cbiAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3JlcXVpcmVkPScnXSBJdCBjb252ZXJ0cyB0aGUgY29tcG9uZW50IGludG8gYSBtYW5kYXRvcnkgZmllbGQgaW4gYSBmb3JtICovXG4gICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtyZWFkb25seT0nJ10gVGhpcyBwYXJhbWV0ZXIgZGlzYWJsZXMgdGhlIGNoZWNrYm94IGFuZCBpdCBjYW4gbm90IGJlIG1vZGlmaWVkIGJ5IHRoZSB1c2VyICovXG4gICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcbiAgIC8qKiBASW5wdXQge2FueX0gW3ZhbHVlPScnXSBUaGUgdmFsdWUgb2YgdGhlIGNoZWNrYm94ICovXG4gICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbY29udGV4dHVhbEhlbHA9JyddIEluZm9ybWF0aW9uIGRpc3BsYXllZCBhdCBhIHRvb2x0aXAgKi9cbiAgIEBJbnB1dCgpIGNvbnRleHR1YWxIZWxwOiBzdHJpbmc7XG4gICAvKiogQE91dHB1dCB7eyBjaGVja2VkOiBib29sZWFuLCB2YWx1ZTogYW55IH19IFtjaGFuZ2U9JyddIFRoaXMgaXMgZW1pdHRlZCB3aGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBjaGVja2JveCAqL1xuICAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY2hlY2tlZDogYm9vbGVhbiwgdmFsdWU6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjaGVja2VkOiBib29sZWFuLCB2YWx1ZTogYW55IH0+KCk7XG5cbiAgIHByaXZhdGUgX2NoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICkge1xuXG4gICB9XG5cbiAgIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICh2YWx1ZSkgPT4geyB9O1xuXG4gICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHsgfTtcblxuICAgZ2V0IGxhYmVsUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAodGhpcy5xYVRhZyB8fCB0aGlzLm5hbWUpICsgJy1sYWJlbCc7XG4gICB9XG5cbiAgIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrZWQgPSAhdGhpcy5fY2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy5fY2hlY2tlZCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgY2hlY2tlZDogdGhpcy5jaGVja2VkLCB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgaGFuZGxlQ2hhbmdlKCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLl9jaGVja2VkID0gdmFsdWU7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG59XG4iXX0=