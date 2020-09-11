/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-textarea/st-textarea.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, ViewChildren, Output, EventEmitter } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@description {Component} [Textare]
 *
 * The textarea component is for use normally inside a form, you can use too outside a form like a template driven form.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-textarea
 *    label="Components"
 *    placeholder="Number of components"
 *    [forceValidations]="forceValidations"
 *    [errors]="errorsTextarea"
 *    name="components-template"
 *    qaTag="components-textarea-template"
 *    required
 *    [(ngModel)]="model.components"
 *    contextualHelp="This is the contextual help of the components"
 *    [cols]="50" [rows]="10">
 * </st-textarea>
 * ```
 *
 */
var StTextareaComponent = /** @class */ (function () {
    function StTextareaComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {string} [placeholder=''] The text that appears as placeholder of the textarea. It is empty by default
         */
        this.placeholder = '';
        /**
         * \@Input {string} [name=''] Name of the textarea
         */
        this.name = '';
        /**
         * \@Input {string} [label=''] Label to show over the textarea. It is empty by default
         */
        this.label = '';
        /**
         * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the textarea checks the errors before being modified by user
         */
        this.forceValidations = false;
        /**
         * \@Input {boolean} [isFocused=false] If true, the textarea will be focused on view init.
         */
        this.isFocused = false;
        /**
         * \@Input {string} [wrap='soft'] Define type of wrap as html standard
         */
        this.wrap = 'soft';
        /**
         * \@Output {} [blur] Notify when user leaves a field
         */
        this.blur = new EventEmitter();
        this.isDisabled = false; // To check disable
        // To check disable
        this.focus = false;
        this.errorMessage = undefined;
        this.showErrorValue = false;
        this.internalTextareaModel = '';
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} control
     * @return {?}
     */
    StTextareaComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _this = this;
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = control.statusChanges.subscribe((/**
         * @return {?}
         */
        function () { return _this.checkErrors(control); }));
    };
    /**
     * @param {?} change
     * @return {?}
     */
    StTextareaComponent.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (this.forceValidations) {
            this.writeValue(this.internalControl.value);
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.internalControl = new FormControl(this.internalTextareaModel);
        this.valueChangeSub = this.internalControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this.onChange(value); }));
        this.showErrorValue = this.showError();
    };
    /**
     * @return {?}
     */
    StTextareaComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            this.focus = true;
            this.vc.first.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    StTextareaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.valueChangeSub) {
            this.valueChangeSub.unsubscribe();
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    // When value is received from outside
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    StTextareaComponent.prototype.writeValue = 
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.internalControl.setValue(value);
        this.internalTextareaModel = value;
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StTextareaComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // Registry the touch function to propagate internal touch events TODO: make this function.
    // Registry the touch function to propagate internal touch events TODO: make this function.
    /**
     * @param {?} fn
     * @return {?}
     */
    StTextareaComponent.prototype.registerOnTouched = 
    // Registry the touch function to propagate internal touch events TODO: make this function.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disable
     * @return {?}
     */
    StTextareaComponent.prototype.setDisabledState = /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        this.isDisabled = disable;
        if (this.isDisabled && this.internalControl && this.internalControl.enabled) {
            this.internalControl.disable();
        }
        else if (!this.isDisabled && this.internalControl && this.internalControl.disabled) {
            this.internalControl.enable();
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTextareaComponent.prototype.showError = /**
     * @return {?}
     */
    function () {
        return this.errorMessage !== undefined && (!this.internalControl.pristine || this.forceValidations) && !this.focus && !this.isDisabled;
    };
    /** Style functions */
    /**
     * Style functions
     * @param {?} event
     * @return {?}
     */
    StTextareaComponent.prototype.onFocus = /**
     * Style functions
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus = true;
        this.showErrorValue = this.showError();
    };
    /**
     * @param {?} event
     * @param {?} emitEvent
     * @return {?}
     */
    StTextareaComponent.prototype.onFocusOut = /**
     * @param {?} event
     * @param {?} emitEvent
     * @return {?}
     */
    function (event, emitEvent) {
        this.focus = false;
        if (emitEvent) {
            this.blur.emit();
        }
        this.showErrorValue = this.showError();
    };
    /**
     * @return {?}
     */
    StTextareaComponent.prototype.displayResetButton = /**
     * @return {?}
     */
    function () {
        return this.default !== undefined && this.internalControl.dirty && this.internalControl.value !== this.default;
    };
    /**
     * @return {?}
     */
    StTextareaComponent.prototype.resetToDefault = /**
     * @return {?}
     */
    function () {
        this.writeValue(this.default);
        this._cd.markForCheck();
    };
    // When status change call this function to check if have errors
    // When status change call this function to check if have errors
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    StTextareaComponent.prototype.checkErrors = 
    // When status change call this function to check if have errors
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var errors = control.errors;
        this.errorMessage = this.getErrorMessage(errors);
        this.showErrorValue = this.showError();
        this._cd.markForCheck();
    };
    // Get error message in function of error list.
    // Get error message in function of error list.
    /**
     * @private
     * @param {?} errors
     * @return {?}
     */
    StTextareaComponent.prototype.getErrorMessage = 
    // Get error message in function of error list.
    /**
     * @private
     * @param {?} errors
     * @return {?}
     */
    function (errors) {
        if (!errors) {
            return undefined;
        }
        if (!this.errors) {
            return '';
        }
        if (errors.hasOwnProperty('required')) {
            return this.errors.required || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('minlength')) {
            return this.errors.minLength || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('maxlength')) {
            return this.errors.maxLength || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('pattern')) {
            return this.errors.pattern || this.errors.generic || '';
        }
        return '';
    };
    StTextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-textarea',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label st-label [attr.title]=\"contextualHelp\" class=\"st-textarea-title\"\n       [ngClass]=\"{error: showErrorValue, active: focus, disabled: isDisabled}\" [attr.for]=\"name\">\n   {{label}}\n</label>\n<textarea class=\"st-textarea\" #textarea\n          (focus)=\"onFocus($event)\"\n          (focusout)=\"onFocusOut($event, false)\"\n          (blur)=\"onFocusOut($event, true)\"\n          [formControl]=\"internalControl\"\n          [ngClass]=\"{error: showErrorValue, disabled: isDisabled}\"\n          [placeholder]=\"placeholder\" [name]=\"name\" [cols]=\"cols\" [rows]=\"rows || null\" [wrap]=\"wrap\"\n          [attr.maxlength]=\"maxLength\" [attr.id]=\"qaTag\">\n</textarea>\n<span *ngIf=\"displayResetButton()\" class=\"st-form-control-reset-button\" (click)=\"resetToDefault()\"\n      [style.opacity]=\"focus ? 1 : 0\">\n      <i class=\"icon-reload2\"></i>\n</span>\n\n<div class=\"st-textarea-error-layout\">\n   <div *ngIf=\"showErrorValue\">\n      <span class=\"st-textarea-error-message\">{{errorMessage}}</span>\n   </div>\n</div>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StTextareaComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StTextareaComponent; })), multi: true }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{position:relative;display:inline-block;width:100%}.st-textarea-title{padding:0;position:relative;display:block;float:left;width:100%}.st-textarea{min-width:100%;height:100%;display:inline-block}.st-textarea-error-layout{height:15px;bottom:0}"]
                }] }
    ];
    /** @nocollapse */
    StTextareaComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTextareaComponent.propDecorators = {
        placeholder: [{ type: Input }],
        name: [{ type: Input }],
        label: [{ type: Input }],
        errors: [{ type: Input }],
        qaTag: [{ type: Input }],
        forceValidations: [{ type: Input }],
        contextualHelp: [{ type: Input }],
        maxLength: [{ type: Input }],
        isFocused: [{ type: Input }],
        cols: [{ type: Input }],
        rows: [{ type: Input }],
        wrap: [{ type: Input }],
        default: [{ type: Input }],
        blur: [{ type: Output }],
        vc: [{ type: ViewChildren, args: ['textarea',] }]
    };
    return StTextareaComponent;
}());
export { StTextareaComponent };
if (false) {
    /**
     * \@Input {string} [placeholder=''] The text that appears as placeholder of the textarea. It is empty by default
     * @type {?}
     */
    StTextareaComponent.prototype.placeholder;
    /**
     * \@Input {string} [name=''] Name of the textarea
     * @type {?}
     */
    StTextareaComponent.prototype.name;
    /**
     * \@Input {string} [label=''] Label to show over the textarea. It is empty by default
     * @type {?}
     */
    StTextareaComponent.prototype.label;
    /**
     * \@Input {StTextareaError} [errors=''] Error to show for each error case, if you don\'t provide this parameter,
     * the default behaviour is only to change color without message
     * @type {?}
     */
    StTextareaComponent.prototype.errors;
    /**
     * \@Input {string} [qaTag=''] Id for QA test
     * @type {?}
     */
    StTextareaComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the textarea checks the errors before being modified by user
     * @type {?}
     */
    StTextareaComponent.prototype.forceValidations;
    /**
     * \@Input {string} [contextualHelp=''] It will be displayed when user clicks on the info button
     * @type {?}
     */
    StTextareaComponent.prototype.contextualHelp;
    /**
     * \@Input {string} [maxLength=''] Define a max-length for textarea field
     * @type {?}
     */
    StTextareaComponent.prototype.maxLength;
    /**
     * \@Input {boolean} [isFocused=false] If true, the textarea will be focused on view init.
     * @type {?}
     */
    StTextareaComponent.prototype.isFocused;
    /**
     * \@Input {number} [cols=''] Define textarea number of cols
     * @type {?}
     */
    StTextareaComponent.prototype.cols;
    /**
     * \@Input {number} [rows=''] Define textarea number of rows
     * @type {?}
     */
    StTextareaComponent.prototype.rows;
    /**
     * \@Input {string} [wrap='soft'] Define type of wrap as html standard
     * @type {?}
     */
    StTextareaComponent.prototype.wrap;
    /**
     * \@Input {string} [default=] Default value of textarea
     * @type {?}
     */
    StTextareaComponent.prototype.default;
    /**
     * \@Output {} [blur] Notify when user leaves a field
     * @type {?}
     */
    StTextareaComponent.prototype.blur;
    /** @type {?} */
    StTextareaComponent.prototype.vc;
    /** @type {?} */
    StTextareaComponent.prototype.isDisabled;
    /** @type {?} */
    StTextareaComponent.prototype.focus;
    /** @type {?} */
    StTextareaComponent.prototype.internalControl;
    /** @type {?} */
    StTextareaComponent.prototype.errorMessage;
    /** @type {?} */
    StTextareaComponent.prototype.showErrorValue;
    /**
     * @type {?}
     * @private
     */
    StTextareaComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    StTextareaComponent.prototype.valueChangeSub;
    /**
     * @type {?}
     * @private
     */
    StTextareaComponent.prototype.internalTextareaModel;
    /** @type {?} */
    StTextareaComponent.prototype.onChange;
    /** @type {?} */
    StTextareaComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StTextareaComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10ZXh0YXJlYS9zdC10ZXh0YXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUMxQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFDbEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixXQUFXLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJyRztJQW9FRyw2QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUF2RGpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDOzs7O1FBR3pCLFNBQUksR0FBVyxFQUFFLENBQUM7Ozs7UUFHbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQzs7OztRQVduQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFTbEMsY0FBUyxHQUFZLEtBQUssQ0FBQzs7OztRQVMzQixTQUFJLEdBQVcsTUFBTSxDQUFDOzs7O1FBTXJCLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUlyRCxlQUFVLEdBQVksS0FBSyxDQUFDLENBQUMsbUJBQW1COztRQUNoRCxVQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBSS9CLDBCQUFxQixHQUFRLEVBQUUsQ0FBQztRQUt4QyxhQUFROzs7O1FBQUcsVUFBQyxDQUFNLElBQU8sQ0FBQyxFQUFDO1FBQzNCLGNBQVM7OztRQUFHLGNBQVEsQ0FBQyxFQUFDO0lBSHRCLENBQUM7Ozs7O0lBS0Qsc0NB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Qzs7SUFDeEMsNkNBQXVDOzs7OztJQUV2QyxrQ0FBMEI7Ozs7O0lBQzFCLDZDQUFxQzs7Ozs7SUFDckMsb0RBQXdDOztJQUt4Qyx1Q0FBMkI7O0lBQzNCLHdDQUFzQjs7Ozs7SUFKVixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsXG4gICBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGRyZW4sIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdFRleHRhcmVhRXJyb3IgfSBmcm9tICcuL3N0LXRleHRhcmVhLmVycm9yLm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1RleHRhcmVdXG4gKlxuICogVGhlIHRleHRhcmVhIGNvbXBvbmVudCBpcyBmb3IgdXNlIG5vcm1hbGx5IGluc2lkZSBhIGZvcm0sIHlvdSBjYW4gdXNlIHRvbyBvdXRzaWRlIGEgZm9ybSBsaWtlIGEgdGVtcGxhdGUgZHJpdmVuIGZvcm0uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC10ZXh0YXJlYVxuICogICAgbGFiZWw9XCJDb21wb25lbnRzXCJcbiAqICAgIHBsYWNlaG9sZGVyPVwiTnVtYmVyIG9mIGNvbXBvbmVudHNcIlxuICogICAgW2ZvcmNlVmFsaWRhdGlvbnNdPVwiZm9yY2VWYWxpZGF0aW9uc1wiXG4gKiAgICBbZXJyb3JzXT1cImVycm9yc1RleHRhcmVhXCJcbiAqICAgIG5hbWU9XCJjb21wb25lbnRzLXRlbXBsYXRlXCJcbiAqICAgIHFhVGFnPVwiY29tcG9uZW50cy10ZXh0YXJlYS10ZW1wbGF0ZVwiXG4gKiAgICByZXF1aXJlZFxuICogICAgWyhuZ01vZGVsKV09XCJtb2RlbC5jb21wb25lbnRzXCJcbiAqICAgIGNvbnRleHR1YWxIZWxwPVwiVGhpcyBpcyB0aGUgY29udGV4dHVhbCBoZWxwIG9mIHRoZSBjb21wb25lbnRzXCJcbiAqICAgIFtjb2xzXT1cIjUwXCIgW3Jvd3NdPVwiMTBcIj5cbiAqIDwvc3QtdGV4dGFyZWE+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10ZXh0YXJlYScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtdGV4dGFyZWEuY29tcG9uZW50LnNjc3MnXSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RUZXh0YXJlYUNvbXBvbmVudCksIG11bHRpOiB0cnVlIH0sXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0VGV4dGFyZWFDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XG4gICBdLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdFRleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgIHtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3BsYWNlaG9sZGVyPScnXSBUaGUgdGV4dCB0aGF0IGFwcGVhcnMgYXMgcGxhY2Vob2xkZXIgb2YgdGhlIHRleHRhcmVhLiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW25hbWU9JyddIE5hbWUgb2YgdGhlIHRleHRhcmVhICovXG4gICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbbGFiZWw9JyddIExhYmVsIHRvIHNob3cgb3ZlciB0aGUgdGV4dGFyZWEuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcblxuICAgLyoqIEBJbnB1dCB7U3RUZXh0YXJlYUVycm9yfSBbZXJyb3JzPScnXSBFcnJvciB0byBzaG93IGZvciBlYWNoIGVycm9yIGNhc2UsIGlmIHlvdSBkb25cXCd0IHByb3ZpZGUgdGhpcyBwYXJhbWV0ZXIsXG4gICAgKiB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgaXMgb25seSB0byBjaGFuZ2UgY29sb3Igd2l0aG91dCBtZXNzYWdlXG4gICAgKi9cbiAgIEBJbnB1dCgpIGVycm9yczogU3RUZXh0YXJlYUVycm9yO1xuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gSWQgZm9yIFFBIHRlc3QgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtmb3JjZVZhbGlkYXRpb25zPWZhbHNlXSBJZiB5b3Ugc3BlY2lmeSBpdCB0byAndHJ1ZScsIHRoZSB0ZXh0YXJlYSBjaGVja3MgdGhlIGVycm9ycyBiZWZvcmUgYmVpbmcgbW9kaWZpZWQgYnkgdXNlciAqL1xuICAgQElucHV0KCkgZm9yY2VWYWxpZGF0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtjb250ZXh0dWFsSGVscD0nJ10gSXQgd2lsbCBiZSBkaXNwbGF5ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgaW5mbyBidXR0b24gKi9cbiAgIEBJbnB1dCgpIGNvbnRleHR1YWxIZWxwOiBzdHJpbmc7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW21heExlbmd0aD0nJ10gRGVmaW5lIGEgbWF4LWxlbmd0aCBmb3IgdGV4dGFyZWEgZmllbGQgKi9cbiAgIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbaXNGb2N1c2VkPWZhbHNlXSBJZiB0cnVlLCB0aGUgdGV4dGFyZWEgd2lsbCBiZSBmb2N1c2VkIG9uIHZpZXcgaW5pdC4gKi9cbiAgIEBJbnB1dCgpIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFtjb2xzPScnXSBEZWZpbmUgdGV4dGFyZWEgbnVtYmVyIG9mIGNvbHMgKi9cbiAgIEBJbnB1dCgpIGNvbHM6IG51bWJlcjtcblxuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbcm93cz0nJ10gRGVmaW5lIHRleHRhcmVhIG51bWJlciBvZiByb3dzICovXG4gICBASW5wdXQoKSByb3dzOiBudW1iZXI7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3dyYXA9J3NvZnQnXSBEZWZpbmUgdHlwZSBvZiB3cmFwIGFzIGh0bWwgc3RhbmRhcmQgKi9cbiAgIEBJbnB1dCgpIHdyYXA6IHN0cmluZyA9ICdzb2Z0JztcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbZGVmYXVsdD1dIERlZmF1bHQgdmFsdWUgb2YgdGV4dGFyZWEgKi9cbiAgIEBJbnB1dCgpIGRlZmF1bHQ6IHN0cmluZztcblxuICAgLyoqIEBPdXRwdXQge30gW2JsdXJdIE5vdGlmeSB3aGVuIHVzZXIgbGVhdmVzIGEgZmllbGQgKi9cbiAgIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICBAVmlld0NoaWxkcmVuKCd0ZXh0YXJlYScpIHZjOiBhbnk7XG5cbiAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7IC8vIFRvIGNoZWNrIGRpc2FibGVcbiAgIHB1YmxpYyBmb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGludGVybmFsQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gICBwdWJsaWMgc2hvd0Vycm9yVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgIHByaXZhdGUgdmFsdWVDaGFuZ2VTdWI6IFN1YnNjcmlwdGlvbjtcbiAgIHByaXZhdGUgaW50ZXJuYWxUZXh0YXJlYU1vZGVsOiBhbnkgPSAnJztcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICB9XG5cbiAgIG9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICAgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YiA9IGNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGVja0Vycm9ycyhjb250cm9sKSk7XG4gICB9XG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZTogYW55KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5mb3JjZVZhbGlkYXRpb25zKSB7XG4gICAgICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5pbnRlcm5hbFRleHRhcmVhTW9kZWwpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1YiA9IHRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB0aGlzLm9uQ2hhbmdlKHZhbHVlKSk7XG4gICAgICB0aGlzLnNob3dFcnJvclZhbHVlID0gdGhpcy5zaG93RXJyb3IoKTtcblxuICAgfVxuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgICAgICAgdGhpcy52Yy5maXJzdC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMudmFsdWVDaGFuZ2VTdWIpIHtcbiAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2VTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gV2hlbiB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIG91dHNpZGVcbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgdGhpcy5pbnRlcm5hbFRleHRhcmVhTW9kZWwgPSB2YWx1ZTtcbiAgIH1cblxuICAgLy8gUmVnaXN0cnkgdGhlIGNoYW5nZSBmdW5jdGlvbiB0byBwcm9wYWdhdGUgaW50ZXJuYWwgbW9kZWwgY2hhbmdlc1xuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgfVxuXG4gICAvLyBSZWdpc3RyeSB0aGUgdG91Y2ggZnVuY3Rpb24gdG8gcHJvcGFnYXRlIGludGVybmFsIHRvdWNoIGV2ZW50cyBUT0RPOiBtYWtlIHRoaXMgZnVuY3Rpb24uXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSBkaXNhYmxlO1xuICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLmludGVybmFsQ29udHJvbCAmJiB0aGlzLmludGVybmFsQ29udHJvbC5lbmFibGVkKSB7XG4gICAgICAgICB0aGlzLmludGVybmFsQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLmVuYWJsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHNob3dFcnJvcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmICghdGhpcy5pbnRlcm5hbENvbnRyb2wucHJpc3RpbmUgfHwgdGhpcy5mb3JjZVZhbGlkYXRpb25zKSAmJiAhdGhpcy5mb2N1cyAmJiAhdGhpcy5pc0Rpc2FibGVkO1xuICAgfVxuXG4gICAvKiogU3R5bGUgZnVuY3Rpb25zICovXG4gICBvbkZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yVmFsdWUgPSB0aGlzLnNob3dFcnJvcigpO1xuICAgfVxuXG4gICBvbkZvY3VzT3V0KGV2ZW50OiBFdmVudCwgZW1pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG5cbiAgICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgICAgIHRoaXMuYmx1ci5lbWl0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hvd0Vycm9yVmFsdWUgPSB0aGlzLnNob3dFcnJvcigpO1xuICAgfVxuXG4gICBkaXNwbGF5UmVzZXRCdXR0b24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wuZGlydHkgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWUgIT09IHRoaXMuZGVmYXVsdDtcbiAgIH1cblxuICAgcmVzZXRUb0RlZmF1bHQoKTogdm9pZCB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcblxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIC8vIFdoZW4gc3RhdHVzIGNoYW5nZSBjYWxsIHRoaXMgZnVuY3Rpb24gdG8gY2hlY2sgaWYgaGF2ZSBlcnJvcnNcbiAgIHByaXZhdGUgY2hlY2tFcnJvcnMoY29udHJvbDogRm9ybUNvbnRyb2wpOiB2b2lkIHtcbiAgICAgIGxldCBlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSBjb250cm9sLmVycm9ycztcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRFcnJvck1lc3NhZ2UoZXJyb3JzKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yVmFsdWUgPSB0aGlzLnNob3dFcnJvcigpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIC8vIEdldCBlcnJvciBtZXNzYWdlIGluIGZ1bmN0aW9uIG9mIGVycm9yIGxpc3QuXG4gICBwcml2YXRlIGdldEVycm9yTWVzc2FnZShlcnJvcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBzdHJpbmcge1xuICAgICAgaWYgKCFlcnJvcnMpIHtcbiAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5lcnJvcnMpIHtcbiAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLnJlcXVpcmVkIHx8IHRoaXMuZXJyb3JzLmdlbmVyaWMgfHwgJyc7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KCdtaW5sZW5ndGgnKSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLm1pbkxlbmd0aCB8fCB0aGlzLmVycm9ycy5nZW5lcmljIHx8ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eSgnbWF4bGVuZ3RoJykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5tYXhMZW5ndGggfHwgdGhpcy5lcnJvcnMuZ2VuZXJpYyB8fCAnJztcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvcnMuaGFzT3duUHJvcGVydHkoJ3BhdHRlcm4nKSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLnBhdHRlcm4gfHwgdGhpcy5lcnJvcnMuZ2VuZXJpYyB8fCAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgfVxuXG59XG4iXX0=