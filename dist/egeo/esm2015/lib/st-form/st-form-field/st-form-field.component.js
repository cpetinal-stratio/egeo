var StFormFieldComponent_1;
/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form-field/st-form-field.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, HostBinding, Input, Output, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { StEgeo, StRequired } from '../../decorators/require-decorators';
let StFormFieldComponent = StFormFieldComponent_1 = class StFormFieldComponent {
    constructor() {
        this.required = false;
        this.showTooltip = true;
        this.clickLink = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.blur = new EventEmitter();
        this.disabled = false; // To check disable
        // To check disable
        this.focus = false;
        this.errorMessage = undefined;
        this._defaultErrorMessages = {
            generic: 'Error',
            required: 'This field is required',
            minLength: 'The field min length is ',
            maxLength: 'The field max length is ',
            min: 'The number has to be higher than ',
            max: 'The number has to be minor than ',
            pattern: 'Invalid value'
        };
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    get schema() {
        return this._schema;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    set schema(schema) {
        this._schema = schema;
        this.selectOptions = this.getSelectOptions();
    }
    /**
     * @return {?}
     */
    get readOnly() {
        return this._schema && this._schema.value && this._schema.value.readOnly === true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.onChange(value);
        this.valueChange.emit(value);
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        if (this.templateModel && this.templateModel.control && this.templateModel.control.validator) {
            return this.templateModel.control.validator(control);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._schema.value && this._schema.value.enum) {
            this.selectOptions = this.getSelectOptions();
        }
        this._loadErrorMessages();
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.default !== undefined && (this.innerValue === undefined || this.innerValue === null)) {
                this.innerValue = this.default;
                this.onChange(this.innerValue);
            }
            if (this._schema.value.readOnly) {
                this.setDisabledState(true);
            }
        }));
    }
    /**
     * @return {?}
     */
    get type() {
        switch (this._schema.value.type) {
            case 'string':
                return this._schema.value.enum ? 'select' : 'text';
            case 'integer':
                return this._schema.value.enum ? 'select' : 'number';
            default:
                return (/** @type {?} */ (this._schema.value.type));
        }
    }
    /**
     * @return {?}
     */
    get min() {
        return this._schema.value.exclusiveMinimum ? this._schema.value.minimum + this.getInputStep() : this._schema.value.minimum;
    }
    /**
     * @return {?}
     */
    get max() {
        return this._schema.value.exclusiveMaximum ? this._schema.value.maximum - this.getInputStep() : this._schema.value.maximum;
    }
    /**
     * @return {?}
     */
    get label() {
        return this._schema.value.title;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._schema.value.examples && this._schema.value.examples[0] ? this._schema.value.examples[0] : '';
    }
    /**
     * @return {?}
     */
    get default() {
        return this._schema.value.default;
    }
    /**
     * @return {?}
     */
    get description() {
        if (this.showTooltip) {
            return this._schema.value.description;
        }
        else {
            return undefined;
        }
    }
    /**
     * @return {?}
     */
    get minLength() {
        return this._schema.value.minLength;
    }
    /**
     * @return {?}
     */
    get maxLength() {
        return this._schema.value.maxLength;
    }
    /**
     * @return {?}
     */
    get pattern() {
        return this._schema.value.pattern;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    hasType(type) {
        switch (type) {
            case 'input':
                return this.type === 'text' || this.type === 'number' || this.type === 'integer';
            case 'switch':
                return this.type === 'boolean' && this.hasDependencies;
            case 'checkbox':
                return this.type === 'boolean' && !this.hasDependencies;
            default:
                return this.type === type;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.innerValue = value;
        this.valueChange.emit(value);
        this.onChange(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disable
     * @return {?}
     */
    setDisabledState(disable) {
        if (this.templateModel && this.templateModel.control) {
            if (disable) {
                this.templateModel.control.disable();
            }
            else {
                this.templateModel.control.enable();
            }
        }
    }
    /**
     * @return {?}
     */
    getInputStep() {
        if (this._schema.value.type === 'number') {
            return 0.1;
        }
        else {
            return 1;
        }
    }
    /**
     * @return {?}
     */
    getSelectOptions() {
        /** @type {?} */
        let options = [];
        if (this._schema.value.enum) {
            /** @type {?} */
            const placeholder = (this.translations && this.translations.placeholder) || 'Select one option';
            options.push((/** @type {?} */ ({ label: placeholder, value: undefined })));
            /** @type {?} */
            let enumValues = (/** @type {?} */ (this._schema.value.enum));
            /** @type {?} */
            const uiOptions = (this._schema.value.ui && this._schema.value.ui.options) || [];
            options.push(...uiOptions);
            enumValues.forEach((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                if (!options.find((/**
                 * @param {?} _option
                 * @return {?}
                 */
                _option => _option.value === value))) {
                    options.push((/** @type {?} */ ({ label: value, value: value })));
                }
            }));
        }
        return options;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.blur.emit();
    }
    /**
     * @return {?}
     */
    onClickLink() {
        this.clickLink.emit(this._schema.key);
    }
    /**
     * @private
     * @return {?}
     */
    _loadErrorMessages() {
        this.errors = {
            required: (this.errorMessages && this.errorMessages.required) || this._defaultErrorMessages.required,
            pattern: (this.errorMessages && this.errorMessages.pattern) || this._defaultErrorMessages.pattern,
            generic: (this.errorMessages && this.errorMessages.generic) || this._defaultErrorMessages.generic,
            minLength: ((this.errorMessages && this.errorMessages.minLength) || this._defaultErrorMessages.minLength) + this._schema.value.minLength,
            maxLength: ((this.errorMessages && this.errorMessages.maxLength) || this._defaultErrorMessages.maxLength) + this._schema.value.maxLength,
            min: ((this.errorMessages && this.errorMessages.min) || this._defaultErrorMessages.min) + (this.min - this.getInputStep()),
            max: ((this.errorMessages && this.errorMessages.max) || this._defaultErrorMessages.max) + (this.max + this.getInputStep())
        };
    }
};
StFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-form-field',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-input *ngIf=\"hasType('input') && (!maxWidth || (!maxLength || maxLength < maxWidth) && (!minLength || minLength < maxWidth))\"\n          #templateModel=\"ngModel\"\n          [forceValidations]=\"forceValidations\"\n          [fieldType]=\"type\"\n          [label]=\"label\"\n          [name]=\"schema.key\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"innerValue\"\n          (ngModelChange)=\"setValue($event)\"\n          [contextualHelp]=\"description\"\n          [errors]=\"errors\"\n          [default]=\"default\"\n          [max]=\"max\"\n          [min]=\"min\"\n          [minlength]=\"minLength\"\n          [maxlength]=\"maxLength\"\n          [required]=\"required\"\n          [pattern]=\"pattern\"\n          [step]=\"getInputStep()\"\n          [qaTag]=\"qaTag\"\n          (blur)=\"onBlur()\">\n</st-input>\n\n<st-textarea *ngIf=\"hasType('input') && maxWidth && (maxLength >= maxWidth || minLength >= maxWidth)\"\n          #templateModel=\"ngModel\"\n          [label]=\"label\"\n          [name]=\"schema.key\"\n          [default]=\"default\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"innerValue\"\n          (ngModelChange)=\"setValue($event)\"\n          [contextualHelp]=\"description\"\n          [errors]=\"errors\"\n          [minlength]=\"minLength\"\n          [maxlength]=\"maxLength\"\n          [required]=\"required\"\n          [pattern]=\"pattern\"\n          [qaTag]=\"qaTag\"\n          (blur)=\"onBlur()\">\n</st-textarea>\n\n<st-checkbox *ngIf=\"hasType('checkbox')\"\n             #templateModel=\"ngModel\"\n             [ngModel]=\"innerValue\"\n             (ngModelChange)=\"setValue($event)\"\n             [checked]=\"innerValue\"\n             [value]=\"innerValue\"\n             [name]=\"schema.key\"\n             [contextualHelp]=\"description\"\n             [qaTag]=\"qaTag\"><span>{{schema.value.title}}</span>\n</st-checkbox>\n\n<st-select *ngIf=\"hasType('select')\"\n           #templateModel=\"ngModel\"\n           [label]=\"label\"\n           [tooltip]=\"description\"\n           [name]=\"schema.key\"\n           [placeholder]=\"placeholder\"\n           [default]=\"default\"\n           [options]=\"selectOptions\"\n           [ngModel]=\"innerValue\"\n           (ngModelChange)=\"setValue($event)\"\n           [required]=\"required\"\n           [id]=\"qaTag\">\n</st-select>\n\n<st-switch *ngIf=\"hasType('switch')\"\n           #templateModel=\"ngModel\"\n           [label]=\"schema.value.title\"\n           [name]=\"schema.key\"\n           [contextualHelp]=\"description\"\n           [ngModel]=\"innerValue\"\n           (ngModelChange)=\"setValue($event)\"\n           [value]=\"innerValue\"\n           [qaTag]=\"schema.key\"\n           [id]=\"qaTag\">\n</st-switch>\n\n<span *ngIf=\"schema?.value?.ui?.link\" class=\"button button-link small\" (click)=\"onClickLink()\">{{schema.value.ui.link}}</span>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StFormFieldComponent_1)), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StFormFieldComponent_1)), multi: true }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'st-form-field'
                },
                styles: ["@charset \"UTF-8\";"]
            }] }
];
StFormFieldComponent.propDecorators = {
    required: [{ type: Input }],
    errorMessages: [{ type: Input }],
    qaTag: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    hasDependencies: [{ type: Input }],
    forceValidations: [{ type: Input }],
    showTooltip: [{ type: Input }],
    maxWidth: [{ type: Input }],
    translations: [{ type: Input }],
    clickLink: [{ type: Output }],
    valueChange: [{ type: Output }],
    blur: [{ type: Output }],
    templateModel: [{ type: ViewChild, args: ['templateModel', { static: false },] }],
    schema: [{ type: Input }],
    readOnly: [{ type: HostBinding, args: ['class.read-only',] }]
};
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", Object),
    tslib_1.__metadata("design:paramtypes", [Object])
], StFormFieldComponent.prototype, "schema", null);
StFormFieldComponent = StFormFieldComponent_1 = tslib_1.__decorate([
    StEgeo()
], StFormFieldComponent);
export { StFormFieldComponent };
if (false) {
    /** @type {?} */
    StFormFieldComponent.prototype.required;
    /** @type {?} */
    StFormFieldComponent.prototype.errorMessages;
    /** @type {?} */
    StFormFieldComponent.prototype.qaTag;
    /** @type {?} */
    StFormFieldComponent.prototype.name;
    /** @type {?} */
    StFormFieldComponent.prototype.value;
    /** @type {?} */
    StFormFieldComponent.prototype.hasDependencies;
    /** @type {?} */
    StFormFieldComponent.prototype.forceValidations;
    /** @type {?} */
    StFormFieldComponent.prototype.showTooltip;
    /** @type {?} */
    StFormFieldComponent.prototype.maxWidth;
    /** @type {?} */
    StFormFieldComponent.prototype.translations;
    /** @type {?} */
    StFormFieldComponent.prototype.clickLink;
    /** @type {?} */
    StFormFieldComponent.prototype.valueChange;
    /** @type {?} */
    StFormFieldComponent.prototype.blur;
    /** @type {?} */
    StFormFieldComponent.prototype.templateModel;
    /** @type {?} */
    StFormFieldComponent.prototype.disabled;
    /** @type {?} */
    StFormFieldComponent.prototype.focus;
    /** @type {?} */
    StFormFieldComponent.prototype.errorMessage;
    /** @type {?} */
    StFormFieldComponent.prototype.selectOptions;
    /** @type {?} */
    StFormFieldComponent.prototype.innerValue;
    /** @type {?} */
    StFormFieldComponent.prototype.errors;
    /**
     * @type {?}
     * @private
     */
    StFormFieldComponent.prototype._schema;
    /**
     * @type {?}
     * @private
     */
    StFormFieldComponent.prototype._defaultErrorMessages;
    /** @type {?} */
    StFormFieldComponent.prototype.onChange;
    /** @type {?} */
    StFormFieldComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZvcm0vc3QtZm9ybS1maWVsZC9zdC1mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUksT0FBTyxFQUFxQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUcsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztJQXFCNUQsb0JBQW9CLGtDQUFwQixvQkFBb0I7SUFmakM7UUFnQlksYUFBUSxHQUFZLEtBQUssQ0FBQztRQU8xQixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUczQixjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6RCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFHckQsYUFBUSxHQUFZLEtBQUssQ0FBQyxDQUFDLG1CQUFtQjs7UUFDOUMsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQU92QiwwQkFBcUIsR0FBaUI7WUFDcEQsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsR0FBRyxFQUFFLG1DQUFtQztZQUN4QyxHQUFHLEVBQUUsa0NBQWtDO1lBQ3ZDLE9BQU8sRUFBRSxlQUFlO1NBQzFCLENBQUM7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QUNIOzs7dUJBR0csS0FBSzs0QkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxNQUFNOzBCQUNOLE1BQU07bUJBQ04sTUFBTTs0QkFDTixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtxQkFxQjVDLEtBQUs7dUJBVUwsV0FBVyxTQUFDLGlCQUFpQjs7QUFUOUI7SUFEVSxVQUFVLEVBQUU7OztrREFHckI7QUF0Q1Msb0JBQW9CO0lBZmhDLE1BQU0sRUFBRTtHQWVJLG9CQUFvQixDQXVOaEM7U0F2Tlksb0JBQW9COzs7SUFDOUIsd0NBQW1DOztJQUNuQyw2Q0FBcUM7O0lBQ3JDLHFDQUF1Qjs7SUFDdkIsb0NBQXNCOztJQUN0QixxQ0FBb0I7O0lBQ3BCLCtDQUFrQzs7SUFDbEMsZ0RBQW1DOztJQUNuQywyQ0FBcUM7O0lBQ3JDLHdDQUEwQjs7SUFDMUIsNENBQWdEOztJQUNoRCx5Q0FBdUU7O0lBQ3ZFLDJDQUFtRTs7SUFDbkUsb0NBQTREOztJQUM1RCw2Q0FBc0U7O0lBRXRFLHdDQUFpQzs7SUFDakMscUNBQThCOztJQUM5Qiw0Q0FBd0M7O0lBQ3hDLDZDQUEyQzs7SUFDM0MsMENBQXVCOztJQUN2QixzQ0FBNEI7Ozs7O0lBRTVCLHVDQUFzRDs7Ozs7SUFFdEQscURBUUU7O0lBaUJGLHdDQUNDOztJQUVELHlDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN0SW5wdXRFcnJvciB9IGZyb20gJy4uLy4uL3N0LWlucHV0L3N0LWlucHV0LmVycm9yLm1vZGVsJztcbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uLy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSlNPTlNjaGVtYTRUeXBlLCBKU09OU2NoZW1hNFR5cGVOYW1lIH0gZnJvbSAnanNvbi1zY2hlbWEnO1xuaW1wb3J0IHsgU3RGb3JtU2NoZW1hIH0gZnJvbSAnLi4vc3QtZm9ybS5tb2RlbCc7XG5pbXBvcnQgeyBTdEZvcm1GaWVsZFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vc3QtZm9ybS1maWVsZC5pbnRlcmZhY2UnO1xuXG5AU3RFZ2VvKClcbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1mb3JtLWZpZWxkJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1mb3JtLWZpZWxkLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWZvcm0tZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RGb3JtRmllbGRDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdEZvcm1GaWVsZENvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgIF0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgIGhvc3Q6IHtcbiAgICAgIGNsYXNzOiAnc3QtZm9ybS1maWVsZCdcbiAgIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdEZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZXM6IFN0SW5wdXRFcnJvcjtcbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICBASW5wdXQoKSB2YWx1ZTogYW55O1xuICAgQElucHV0KCkgaGFzRGVwZW5kZW5jaWVzOiBib29sZWFuO1xuICAgQElucHV0KCkgZm9yY2VWYWxpZGF0aW9uczogYm9vbGVhbjtcbiAgIEBJbnB1dCgpIHNob3dUb29sdGlwOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7IC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIGZyb20gd2l0Y2ggaW5wdXRzIHdpbGwgYmUgZGlzcGxheWVkIGFzIHRleHRhcmVhXG4gICBASW5wdXQoKSB0cmFuc2xhdGlvbnM/OiBTdEZvcm1GaWVsZFRyYW5zbGF0aW9ucztcbiAgIEBPdXRwdXQoKSBjbGlja0xpbms6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlTW9kZWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGVtcGxhdGVNb2RlbDogTmdNb2RlbDtcblxuICAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7IC8vIFRvIGNoZWNrIGRpc2FibGVcbiAgIHB1YmxpYyBmb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICAgcHVibGljIHNlbGVjdE9wdGlvbnM6IFN0RHJvcERvd25NZW51SXRlbVtdO1xuICAgcHVibGljIGlubmVyVmFsdWU6IGFueTtcbiAgIHB1YmxpYyBlcnJvcnM6IFN0SW5wdXRFcnJvcjtcblxuICAgcHJpdmF0ZSBfc2NoZW1hOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogU3RGb3JtU2NoZW1hIH07XG5cbiAgIHByaXZhdGUgcmVhZG9ubHkgX2RlZmF1bHRFcnJvck1lc3NhZ2VzOiBTdElucHV0RXJyb3IgPSB7XG4gICAgICBnZW5lcmljOiAnRXJyb3InLFxuICAgICAgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgIG1pbkxlbmd0aDogJ1RoZSBmaWVsZCBtaW4gbGVuZ3RoIGlzICcsXG4gICAgICBtYXhMZW5ndGg6ICdUaGUgZmllbGQgbWF4IGxlbmd0aCBpcyAnLFxuICAgICAgbWluOiAnVGhlIG51bWJlciBoYXMgdG8gYmUgaGlnaGVyIHRoYW4gJyxcbiAgICAgIG1heDogJ1RoZSBudW1iZXIgaGFzIHRvIGJlIG1pbm9yIHRoYW4gJyxcbiAgICAgIHBhdHRlcm46ICdJbnZhbGlkIHZhbHVlJ1xuICAgfTtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKVxuICAgZ2V0IHNjaGVtYSgpOiB7IGtleTogc3RyaW5nLCB2YWx1ZTogU3RGb3JtU2NoZW1hIH0ge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYTtcbiAgIH1cblxuICAgc2V0IHNjaGVtYShzY2hlbWE6IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBTdEZvcm1TY2hlbWEgfSkge1xuICAgICAgdGhpcy5fc2NoZW1hID0gc2NoZW1hO1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb25zID0gdGhpcy5nZXRTZWxlY3RPcHRpb25zKCk7XG4gICB9XG5cbiAgIEBIb3N0QmluZGluZygnY2xhc3MucmVhZC1vbmx5JylcbiAgIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2hlbWEgJiYgdGhpcy5fc2NoZW1hLnZhbHVlICYmIHRoaXMuX3NjaGVtYS52YWx1ZS5yZWFkT25seSA9PT0gdHJ1ZTtcbiAgIH1cblxuICAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gICB9XG5cbiAgIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgIH1cblxuICAgc2V0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgfVxuXG4gICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgICBpZiAodGhpcy50ZW1wbGF0ZU1vZGVsICYmIHRoaXMudGVtcGxhdGVNb2RlbC5jb250cm9sICYmIHRoaXMudGVtcGxhdGVNb2RlbC5jb250cm9sLnZhbGlkYXRvcikge1xuICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVNb2RlbC5jb250cm9sLnZhbGlkYXRvcihjb250cm9sKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fc2NoZW1hLnZhbHVlICYmIHRoaXMuX3NjaGVtYS52YWx1ZS5lbnVtKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xvYWRFcnJvck1lc3NhZ2VzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIGlmICh0aGlzLmRlZmF1bHQgIT09IHVuZGVmaW5lZCAmJiAodGhpcy5pbm5lclZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy5pbm5lclZhbHVlID09PSBudWxsKSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lclZhbHVlID0gdGhpcy5kZWZhdWx0O1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmlubmVyVmFsdWUpO1xuICAgICAgICAgfVxuICAgICAgICAgaWYgKHRoaXMuX3NjaGVtYS52YWx1ZS5yZWFkT25seSkge1xuICAgICAgICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKHRydWUpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG5cbiAgIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKHRoaXMuX3NjaGVtYS52YWx1ZS50eXBlKSB7XG4gICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYS52YWx1ZS5lbnVtID8gJ3NlbGVjdCcgOiAndGV4dCc7XG4gICAgICAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zY2hlbWEudmFsdWUuZW51bSA/ICdzZWxlY3QnIDogJ251bWJlcic7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDxKU09OU2NoZW1hNFR5cGVOYW1lPiB0aGlzLl9zY2hlbWEudmFsdWUudHlwZTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYS52YWx1ZS5leGNsdXNpdmVNaW5pbXVtID8gdGhpcy5fc2NoZW1hLnZhbHVlLm1pbmltdW0gKyB0aGlzLmdldElucHV0U3RlcCgpIDogdGhpcy5fc2NoZW1hLnZhbHVlLm1pbmltdW07XG4gICB9XG5cbiAgIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2hlbWEudmFsdWUuZXhjbHVzaXZlTWF4aW11bSA/IHRoaXMuX3NjaGVtYS52YWx1ZS5tYXhpbXVtIC0gdGhpcy5nZXRJbnB1dFN0ZXAoKSA6IHRoaXMuX3NjaGVtYS52YWx1ZS5tYXhpbXVtO1xuICAgfVxuXG4gICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2hlbWEudmFsdWUudGl0bGU7XG4gICB9XG5cbiAgIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYS52YWx1ZS5leGFtcGxlcyAmJiB0aGlzLl9zY2hlbWEudmFsdWUuZXhhbXBsZXNbMF0gPyB0aGlzLl9zY2hlbWEudmFsdWUuZXhhbXBsZXNbMF0gOiAnJztcbiAgIH1cblxuICAgZ2V0IGRlZmF1bHQoKTogSlNPTlNjaGVtYTRUeXBlIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2hlbWEudmFsdWUuZGVmYXVsdDtcbiAgIH1cblxuICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy5zaG93VG9vbHRpcCkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYS52YWx1ZS5kZXNjcmlwdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgfVxuXG4gICBnZXQgbWluTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NoZW1hLnZhbHVlLm1pbkxlbmd0aDtcbiAgIH1cblxuICAgZ2V0IG1heExlbmd0aCgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYS52YWx1ZS5tYXhMZW5ndGg7XG4gICB9XG5cbiAgIGdldCBwYXR0ZXJuKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NoZW1hLnZhbHVlLnBhdHRlcm47XG4gICB9XG5cbiAgIGhhc1R5cGUodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICd0ZXh0JyB8fCB0aGlzLnR5cGUgPT09ICdudW1iZXInIHx8IHRoaXMudHlwZSA9PT0gJ2ludGVnZXInO1xuICAgICAgICAgY2FzZSAnc3dpdGNoJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdib29sZWFuJyAmJiB0aGlzLmhhc0RlcGVuZGVuY2llcztcbiAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdib29sZWFuJyAmJiAhdGhpcy5oYXNEZXBlbmRlbmNpZXM7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZTtcbiAgICAgIH1cbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy50ZW1wbGF0ZU1vZGVsICYmIHRoaXMudGVtcGxhdGVNb2RlbC5jb250cm9sKSB7XG4gICAgICAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZU1vZGVsLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVNb2RlbC5jb250cm9sLmVuYWJsZSgpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBnZXRJbnB1dFN0ZXAoKTogbnVtYmVyIHtcbiAgICAgIGlmICh0aGlzLl9zY2hlbWEudmFsdWUudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgIHJldHVybiAwLjE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICB9XG5cbiAgIGdldFNlbGVjdE9wdGlvbnMoKTogU3REcm9wRG93bk1lbnVJdGVtW10ge1xuICAgICAgbGV0IG9wdGlvbnM6IFN0RHJvcERvd25NZW51SXRlbVtdID0gW107XG4gICAgICBpZiAodGhpcy5fc2NoZW1hLnZhbHVlLmVudW0pIHtcbiAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAodGhpcy50cmFuc2xhdGlvbnMgJiYgdGhpcy50cmFuc2xhdGlvbnMucGxhY2Vob2xkZXIpIHx8ICdTZWxlY3Qgb25lIG9wdGlvbic7XG4gICAgICAgICBvcHRpb25zLnB1c2goPFN0RHJvcERvd25NZW51SXRlbT4geyBsYWJlbDogcGxhY2Vob2xkZXIsIHZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgICAgICBsZXQgZW51bVZhbHVlczogYW55W10gPSA8YW55W10+IHRoaXMuX3NjaGVtYS52YWx1ZS5lbnVtO1xuICAgICAgICAgY29uc3QgdWlPcHRpb25zOiBTdERyb3BEb3duTWVudUl0ZW1bXSA9ICh0aGlzLl9zY2hlbWEudmFsdWUudWkgJiYgdGhpcy5fc2NoZW1hLnZhbHVlLnVpLm9wdGlvbnMpIHx8IFtdO1xuICAgICAgICAgb3B0aW9ucy5wdXNoKC4uLnVpT3B0aW9ucyk7XG4gICAgICAgICBlbnVtVmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZmluZChfb3B0aW9uID0+IF9vcHRpb24udmFsdWUgPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKDxTdERyb3BEb3duTWVudUl0ZW0+IHsgbGFiZWw6IHZhbHVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgfVxuXG4gICBvbkJsdXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICAgfVxuXG4gICBvbkNsaWNrTGluaygpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2tMaW5rLmVtaXQodGhpcy5fc2NoZW1hLmtleSk7XG4gICB9XG5cbiAgIHByaXZhdGUgX2xvYWRFcnJvck1lc3NhZ2VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5lcnJvcnMgPSB7XG4gICAgICAgICByZXF1aXJlZDogKHRoaXMuZXJyb3JNZXNzYWdlcyAmJiB0aGlzLmVycm9yTWVzc2FnZXMucmVxdWlyZWQpIHx8IHRoaXMuX2RlZmF1bHRFcnJvck1lc3NhZ2VzLnJlcXVpcmVkLFxuICAgICAgICAgcGF0dGVybjogKHRoaXMuZXJyb3JNZXNzYWdlcyAmJiB0aGlzLmVycm9yTWVzc2FnZXMucGF0dGVybikgfHwgdGhpcy5fZGVmYXVsdEVycm9yTWVzc2FnZXMucGF0dGVybixcbiAgICAgICAgIGdlbmVyaWM6ICh0aGlzLmVycm9yTWVzc2FnZXMgJiYgdGhpcy5lcnJvck1lc3NhZ2VzLmdlbmVyaWMpIHx8IHRoaXMuX2RlZmF1bHRFcnJvck1lc3NhZ2VzLmdlbmVyaWMsXG4gICAgICAgICBtaW5MZW5ndGg6ICgodGhpcy5lcnJvck1lc3NhZ2VzICYmIHRoaXMuZXJyb3JNZXNzYWdlcy5taW5MZW5ndGgpIHx8IHRoaXMuX2RlZmF1bHRFcnJvck1lc3NhZ2VzLm1pbkxlbmd0aCkgKyB0aGlzLl9zY2hlbWEudmFsdWUubWluTGVuZ3RoLFxuICAgICAgICAgbWF4TGVuZ3RoOiAoKHRoaXMuZXJyb3JNZXNzYWdlcyAmJiB0aGlzLmVycm9yTWVzc2FnZXMubWF4TGVuZ3RoKSB8fCB0aGlzLl9kZWZhdWx0RXJyb3JNZXNzYWdlcy5tYXhMZW5ndGgpICsgdGhpcy5fc2NoZW1hLnZhbHVlLm1heExlbmd0aCxcbiAgICAgICAgIG1pbjogKCh0aGlzLmVycm9yTWVzc2FnZXMgJiYgdGhpcy5lcnJvck1lc3NhZ2VzLm1pbikgfHwgdGhpcy5fZGVmYXVsdEVycm9yTWVzc2FnZXMubWluKSArICh0aGlzLm1pbiAtIHRoaXMuZ2V0SW5wdXRTdGVwKCkpLFxuICAgICAgICAgbWF4OiAoKHRoaXMuZXJyb3JNZXNzYWdlcyAmJiB0aGlzLmVycm9yTWVzc2FnZXMubWF4KSB8fCB0aGlzLl9kZWZhdWx0RXJyb3JNZXNzYWdlcy5tYXgpICsgKHRoaXMubWF4ICsgdGhpcy5nZXRJbnB1dFN0ZXAoKSlcbiAgICAgIH07XG4gICB9XG59XG4iXX0=