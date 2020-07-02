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
export const CHECKBOX_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => StCheckboxComponent)),
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
export class StCheckboxComponent {
    /**
     * @param {?} _changeDetectorRef
     */
    constructor(_changeDetectorRef) {
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
        (value) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * \@Input {boolean} [checked='']
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} checked
     * @return {?}
     */
    set checked(checked) {
        if (checked !== this.checked) {
            this._checked = checked;
            this._changeDetectorRef.markForCheck();
        }
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
    handleClick() {
        if (!this.readonly) {
            if (!this.disabled) {
                this._checked = !this._checked;
                this._controlValueAccessorChangeFn(this._checked);
                this.change.emit({ checked: this.checked, value: this.value });
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleChange($event) {
        $event.stopPropagation();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._checked = value;
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
    }
}
StCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-checkbox',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label st-label class=\"st-checkbox\" [ngClass]=\"{'disabled' : disabled}\" [attr.id]=\"labelQaTag\" [attr.title]=\"contextualHelp\">\n   <div class=\"st-checkbox-container\">\n      <input\n         type=\"checkbox\"\n         [id]=\"qaTag\"\n         [name]=\"name\"\n         [required]=\"required\"\n         [checked]=\"checked\"\n         [disabled]=\"disabled\"\n         [value]=\"value\"\n         [hidden]=\"true\"\n         [readonly]=\"readonly\"\n         (click)=\"handleClick()\"\n         (change)=\"handleChange($event)\" />\n   </div>\n   <div class=\"custom-checkbox st-checkbox-custom\" [ngClass]=\"{'custom-checkbox--checked' : checked}\"></div><ng-content></ng-content>\n</label>\n",
                providers: [CHECKBOX_CONTROL_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StCheckboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1jaGVja2JveC9zdC1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0gsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLE9BQU8seUJBQXlCLEdBQVE7SUFDM0MsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUErQjdCLFlBQ1csa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Ozs7UUFMdEMsV0FBTSxHQUFtRCxJQUFJLFlBQVksRUFBb0MsQ0FBQztRQUVoSCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBUWxDLGtDQUE2Qjs7OztRQUF5QixDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBRXJFLGNBQVM7OztRQUFjLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztJQUpqQyxDQUFDOzs7OztJQWpDRCxJQUFhLE9BQU87UUFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsSUFBSSxPQUFPLENBQUMsT0FBZ0I7UUFDekIsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekM7SUFDSixDQUFDOzs7O0lBOEJELElBQUksVUFBVTtRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFO1NBQ0g7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFhO1FBQ3ZCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXdCO1FBQ3RDLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7OztZQWxGSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGlvQ0FBMkM7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNqRDs7OztZQS9CNEQsaUJBQWlCOzs7c0JBbUMxRSxLQUFLO21CQVdMLEtBQUs7b0JBRUwsS0FBSzt1QkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLOzZCQUVMLEtBQUs7cUJBRUwsTUFBTTs7Ozs7OztJQWRQLG1DQUFzQjs7Ozs7SUFFdEIsb0NBQXVCOzs7OztJQUV2Qix1Q0FBMkI7Ozs7O0lBRTNCLHVDQUEyQjs7Ozs7SUFFM0IsdUNBQTJCOzs7OztJQUUzQixvQ0FBb0I7Ozs7O0lBRXBCLDZDQUFnQzs7Ozs7SUFFaEMscUNBQXdIOzs7OztJQUV4SCx1Q0FBa0M7O0lBUWxDLDREQUFxRTs7SUFFckUsd0NBQWlDOzs7OztJQVA5QixpREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfQUNDRVNTT1I6IGFueSA9IHtcbiAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RDaGVja2JveENvbXBvbmVudCksXG4gICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0NoZWNrYm94XVxuICpcbiAqIFRoZSBjaGVja2JveCBjb21wb25lbnQgcmVwcmVzZW50cyBhIGN1c3RvbSBpbnB1dCBvZiB0aGUgY2hlY2tib3ggdHlwZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWNoZWNrYm94IG5hbWU9XCJvcHRpb25cIiB2YWx1ZT1cIjFcIj5cbiAqICAgIE9wdGlvbiAxXG4gKiA8L3N0LWNoZWNrYm94PlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtY2hlY2tib3gnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgIHByb3ZpZGVyczogW0NIRUNLQk9YX0NPTlRST0xfQUNDRVNTT1JdLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2NoZWNrZWQ9JyddICAqL1xuICAgQElucHV0KCkgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgIH1cblxuICAgc2V0IGNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbikge1xuICAgICAgaWYgKGNoZWNrZWQgIT09IHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgdGhpcy5fY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtuYW1lPScnXSBUaGlzIHBhcmFtZXRlciBzaG93cyB0aGUgZmluYWwgbmFtZSBvZiB0aGUgaW5wdXQgKi9cbiAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtxYVRhZz0nJ10gSWQgdmFsdWUgZm9yIHFhIHRlc3QgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbZGlzYWJsZWQ9JyddIEl0IGFsbG93cyB0byBkaXNhYmxlIHRoZSBpbnB1dCBjb21wb25lbnQgb2YgdGhlIGNoZWNrYm94ICovXG4gICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtyZXF1aXJlZD0nJ10gSXQgY29udmVydHMgdGhlIGNvbXBvbmVudCBpbnRvIGEgbWFuZGF0b3J5IGZpZWxkIGluIGEgZm9ybSAqL1xuICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gICAvKiogQElucHV0IHtib29sZWFufSBbcmVhZG9ubHk9JyddIFRoaXMgcGFyYW1ldGVyIGRpc2FibGVzIHRoZSBjaGVja2JveCBhbmQgaXQgY2FuIG5vdCBiZSBtb2RpZmllZCBieSB0aGUgdXNlciAqL1xuICAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG4gICAvKiogQElucHV0IHthbnl9IFt2YWx1ZT0nJ10gVGhlIHZhbHVlIG9mIHRoZSBjaGVja2JveCAqL1xuICAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2NvbnRleHR1YWxIZWxwPScnXSBJbmZvcm1hdGlvbiBkaXNwbGF5ZWQgYXQgYSB0b29sdGlwICovXG4gICBASW5wdXQoKSBjb250ZXh0dWFsSGVscDogc3RyaW5nO1xuICAgLyoqIEBPdXRwdXQge3sgY2hlY2tlZDogYm9vbGVhbiwgdmFsdWU6IGFueSB9fSBbY2hhbmdlPScnXSBUaGlzIGlzIGVtaXR0ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgY2hlY2tib3ggKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGNoZWNrZWQ6IGJvb2xlYW4sIHZhbHVlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgY2hlY2tlZDogYm9vbGVhbiwgdmFsdWU6IGFueSB9PigpO1xuXG4gICBwcml2YXRlIF9jaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICApIHtcblxuICAgfVxuXG4gICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAodmFsdWUpID0+IHsgfTtcblxuICAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgIGdldCBsYWJlbFFhVGFnKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKHRoaXMucWFUYWcgfHwgdGhpcy5uYW1lKSArICctbGFiZWwnO1xuICAgfVxuXG4gICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVja2VkID0gIXRoaXMuX2NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuX2NoZWNrZWQpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IGNoZWNrZWQ6IHRoaXMuY2hlY2tlZCwgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGhhbmRsZUNoYW5nZSgkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5fY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxufVxuIl19