/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { FORM_UI_COMPONENT } from './st-form-field/st-form-field.interface';
/**
 * \@description {Component} [Dynamic form]
 *
 * The form component allows to generate forms dynamically using a JSON schema.
 *
 * \@model
 *
 *   [Form Schema] {./st-form.model.ts#StFormSchema}
 *   [Form UI Definition] {./st-form.model.ts#StFormUIDefinition}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-form [schema]="jsonSchema" [(ngModel)]="model" #formModel="ngModel">
 * </st-form>
 *
 * ```
 *
 */
export class StFormComponent {
    constructor() {
        /**
         * \@Input {string} [nestingLevel=0] This informs about the nesting level of the form. This input is only used for design purposes
         */
        this.nestingLevel = 0;
        /**
         * \@Input {string} [disabledSectionMessage='for this instance is disabled.']
         *  Message displayed when a section is disabled. This is always displayed after the section name
         */
        this.disabledSectionMessage = 'for this instance is disabled.';
        /**
         * \@Input {number} [sectionDescriptionLevel=-1] Level of the section to which description is displayed.
         * By default, section descriptions are not displayed.
         */
        this.sectionDescriptionLevel = -1;
        /**
         * \@Input {boolean} [showTooltips=-1] Enable or disable displaying of tooltips
         * By default, tooltips are displayed
         */
        this.showTooltips = true;
        /**
         * \@Output {any} [valueChange=] Event emitted when value is changed. This emits the current form value
         */
        this.valueChange = new EventEmitter();
        /**
         * \@Output {string} [clickLink=] Event emitted when link is clicked. It returns the field path
         */
        this.clickLink = new EventEmitter();
        this.showCollapsedSectionFields = false;
        this.innerValue = {};
        this._value = {};
        this._parentFieldSubscription = [];
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * \@Input {StFormSchema [schema=] Form schema needed to generate the form
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
        this._value = {};
        if (this._schema.dependencies) {
            this._parentFields = Object.keys(this._schema.dependencies);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.forceValidations) {
            this.form.form.markAsPristine();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parentFields && this.form.control && this.form.control.controls) {
            for (let i = 0; i < this._parentFields.length; ++i) {
                /** @type {?} */
                let parentField = this._parentFields[i];
                if (!this._parentFieldSubscription[i] && this.form.control.controls[parentField]) {
                    this._parentFieldSubscription[i] = this.form.control.controls[this._parentFields[i]].valueChanges.subscribe((/**
                     * @param {?} value
                     * @return {?}
                     */
                    (value) => {
                        if (!value) {
                            /** @type {?} */
                            let childrenFields = this.schema.dependencies[parentField];
                            for (let j = 0; j < childrenFields.length; ++j) {
                                if (this.form.controls[childrenFields[j]]) {
                                    this._value[childrenFields[j]] = undefined;
                                }
                            }
                        }
                    }));
                }
            }
        }
    }
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    onChange(_) {
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        /** @type {?} */
        let errors = null;
        if (this.form) {
            Object.keys(this.form.controls).forEach((/**
             * @param {?} propertyName
             * @return {?}
             */
            (propertyName) => {
                if (this.form.controls[propertyName] && this.form.controls[propertyName].errors) {
                    if (!errors) {
                        errors = {};
                    }
                    errors[propertyName] = this.form.controls[propertyName].errors;
                }
            }));
            this.form.control.setErrors(errors);
        }
        return errors;
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    isRequired(propertyName) {
        return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
    }
    /**
     * @return {?}
     */
    isCollapsedSection() {
        return this.schema.type === 'object' && this.schema.ui &&
            (this.schema.ui.component === FORM_UI_COMPONENT.SHOW_MORE || this.schema.ui.component === FORM_UI_COMPONENT.ACCORDION);
    }
    /**
     * @return {?}
     */
    iShowMoreSection() {
        return this.schema.type === 'object' && this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.SHOW_MORE;
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    isAParentField(propertyName) {
        return this.schema.dependencies && this.schema.dependencies[propertyName] && this.schema.dependencies[propertyName].length > 0;
    }
    /**
     * @return {?}
     */
    getOptionalButtonLabel() {
        /** @type {?} */
        let label = 'Additional options';
        if (this.parentName || this.schema.title) {
            label += ' of ';
            label += this.parentName || this.schema.title;
        }
        return label;
    }
    /**
     * @return {?}
     */
    onChangeOptionalFieldsVisibility() {
        this.showCollapsedSectionFields = !this.showCollapsedSectionFields;
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    getFieldClasses(propertyName) {
        return {
            'hidden': this.isCollapsedSection() && !this.showCollapsedSectionFields,
            'parent-field': this.isAParentField(propertyName) || (this.isASwitchSection() && this.isTheFirstField(propertyName))
        };
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    fieldHasToBeCreated(propertyName) {
        /** @type {?} */
        let createField = true;
        /** @type {?} */
        let parentField = this.getParentField(propertyName);
        if (((parentField && !this._value[parentField]) || (this.isInADisabledSection() && !this.isTheFirstField(propertyName)))
            || !this.fulfillDependencyVisibility(propertyName)) {
            createField = false;
            this._value[propertyName] = undefined;
        }
        return createField;
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    isRelatedField(propertyName) {
        return this._schema.properties[propertyName].ui && this.schema.properties[propertyName].ui.relatedTo
            && this.schema.properties[propertyName].ui.relatedTo.length > 0;
    }
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.onChange(value);
            this.innerValue = value;
        }
    }
    /**
     * @param {?} value
     * @param {?} property
     * @return {?}
     */
    onChangeProperty(value, property) {
        this._value[property] = value;
        this.valueChange.emit(this._value);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.onChange(this._value);
        }));
    }
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // Registry the touch function to propagate internal touch events TODO: make this function.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Allows Angular to disable the form.
    /**
     * @param {?} disable
     * @return {?}
     */
    setDisabledState(disable) {
        if (disable) {
            this.form.control.disable();
        }
        else {
            this.form.control.enable();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._parentFieldSubscription) {
            for (let i = 0; i < this._parentFieldSubscription.length; ++i) {
                this._parentFieldSubscription[i].unsubscribe();
            }
        }
    }
    /**
     * @return {?}
     */
    isInADisabledSection() {
        if (this.isASwitchSection()) {
            /** @type {?} */
            let sectionEnabler = Object.keys(this.schema.properties)[0];
            return !(this.form && this.form.controls[sectionEnabler] && this.form.controls[sectionEnabler].value);
        }
        return false;
    }
    /**
     * @return {?}
     */
    isASwitchSection() {
        return this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.SWITCH;
    }
    /**
     * @return {?}
     */
    isAnAccordion() {
        return this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.ACCORDION;
    }
    /**
     * @return {?}
     */
    onClickTitle() {
        if (this.isAnAccordion()) {
            this.onChangeOptionalFieldsVisibility();
        }
    }
    /**
     * @param {?} propertyName
     * @return {?}
     */
    isTheFirstField(propertyName) {
        return propertyName === Object.keys(this.schema.properties)[0];
    }
    /**
     * @param {?} fieldKey
     * @return {?}
     */
    onClickLink(fieldKey) {
        this.clickLink.emit(fieldKey);
    }
    /**
     * @private
     * @param {?} propertyName
     * @return {?}
     */
    getParentField(propertyName) {
        /** @type {?} */
        let parentField = undefined;
        if (this.schema.dependencies) {
            Object.keys(this.schema.dependencies).forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (this.schema.dependencies[key].indexOf(propertyName) !== -1) {
                    parentField = key;
                }
            }));
        }
        return parentField;
    }
    /**
     * @private
     * @param {?} propertyName
     * @return {?}
     */
    fulfillDependencyVisibility(propertyName) {
        /** @type {?} */
        let fulfill = true;
        /** @type {?} */
        let propertySchema = this.schema.properties[propertyName];
        if (propertySchema.ui && propertySchema.ui.visible) {
            /** @type {?} */
            const keys = Object.keys(propertySchema.ui.visible);
            /** @type {?} */
            let i = 0;
            while (fulfill && i < keys.length && propertySchema.ui.visible.hasOwnProperty(keys[i])) {
                if (this._value[keys[i]] !== propertySchema.ui.visible[keys[i]]) {
                    fulfill = false;
                }
                ++i;
            }
        }
        return fulfill;
    }
}
StFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-form',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<form #form=\"ngForm\" *ngIf=\"innerValue\"\n      [ngClass]=\"{'category': nestingLevel === 0,\n                  'section': nestingLevel === 1,\n                  'subsection': nestingLevel > 1,\n                  'accordion': isAnAccordion(),\n                   'accordion--open': isAnAccordion() && showCollapsedSectionFields}\"\n      novalidate>\n   <h1 *ngIf=\"schema.title && !isASwitchSection()\" class=\"title\" (click)=\"onClickTitle()\">{{schema.title}}</h1>\n   <p *ngIf=\"schema.description && nestingLevel <= sectionDescriptionLevel\" class=\"description\">\n      {{schema.description}}</p>\n   <span class=\"optional-fields-button\" *ngIf=\"iShowMoreSection()\">\n   <button class=\"button button-link\"\n           (click)=\"onChangeOptionalFieldsVisibility()\">\n      <span> <i\n         [ngClass]=\"{'icon-arrow2_down': showCollapsedSectionFields, 'icon-arrow2_right': !showCollapsedSectionFields}\"></i> {{getOptionalButtonLabel()}}</span>\n   </button>\n   </span>\n   <ng-container *ngFor=\"let property of schema.properties | stObjectToArray; let index = index;\">\n      <div class=\"form-field-container\">\n         <st-form-field *ngIf=\"property.value.type !== 'object' && fieldHasToBeCreated(property.key)\" class=\"form-field\"\n                        [schema]=\"property\"\n                        [name]=\"property.key\"\n                        [maxWidth]=\"textFieldMaxWidth\"\n                        [ngModel]=\"innerValue[property.key]\"\n                        [forceValidations]=\"forceValidations\"\n                        (ngModelChange)=\"onChangeProperty($event, property.key)\"\n                        [required]=\"isRequired(property.key)\"\n                        [hasDependencies]=\"isAParentField(property.key) || (isASwitchSection() && isTheFirstField(property.key))\"\n                        [ngClass]=\"getFieldClasses(property.key)\"\n                        [showTooltip]=\"showTooltips\"\n                        [qaTag]=\"property.key\"\n                        [errorMessages]=\"errorMessages\"\n                        [translations]=\"translations\"\n                        [attr.id]=\"property.key + '-form-field'\"\n                        (clickLink)=\"onClickLink($event)\">\n         </st-form-field>\n\n         <div *ngIf=\"property.value.type === 'object' && fieldHasToBeCreated(property.key)\">\n            <st-form\n               [hidden]=\"isCollapsedSection() && !showCollapsedSectionFields\"\n               [schema]=\"property.value\"\n               [parentName]=\"schema.title\"\n               [name]=\"property.key\"\n               [textFieldMaxWidth]=\"textFieldMaxWidth\"\n               [ngModel]=\"innerValue[property.key]\"\n               [attr.id]=\"property.key + '-section'\"\n               [nestingLevel]=\"nestingLevel + 1\"\n               [showTooltips]=\"showTooltips\"\n               [sectionDescriptionLevel]=\"sectionDescriptionLevel\"\n               [errorMessages]=\"errorMessages\"\n               [translations]=\"translations\"\n               (clickLink)=\"onClickLink(property.key + '.' + $event)\"\n               (ngModelChange)=\"onChangeProperty($event, property.key)\">\n            </st-form>\n         </div>\n      </div>\n      <span class=\"line-break\" *ngIf=\"!isRelatedField(property.key)\"></span>\n   </ng-container>\n\n   <p *ngIf=\"isInADisabledSection()\" class=\"disabled-section-info\"> {{schema.title}} {{disabledSectionMessage}}</p>\n</form>\n",
                host: { class: 'st-form' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StFormComponent)), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StFormComponent)), multi: true }
                ],
                styles: ["@charset \"UTF-8\";.form-field{display:block}.form-field.hidden{visibility:hidden;position:absolute}.section-title{padding:10px 0 20px}"]
            }] }
];
StFormComponent.propDecorators = {
    parentName: [{ type: Input }],
    nestingLevel: [{ type: Input }],
    forceValidations: [{ type: Input }],
    disabledSectionMessage: [{ type: Input }],
    sectionDescriptionLevel: [{ type: Input }],
    textFieldMaxWidth: [{ type: Input }],
    errorMessages: [{ type: Input }],
    showTooltips: [{ type: Input }],
    translations: [{ type: Input }],
    valueChange: [{ type: Output }],
    clickLink: [{ type: Output }],
    form: [{ type: ViewChild, args: ['form', { static: false },] }],
    schema: [{ type: Input }]
};
if (false) {
    /**
     * \@Input {string} [parentName=] Name of the parent section. By default, it is undefined
     * @type {?}
     */
    StFormComponent.prototype.parentName;
    /**
     * \@Input {string} [nestingLevel=0] This informs about the nesting level of the form. This input is only used for design purposes
     * @type {?}
     */
    StFormComponent.prototype.nestingLevel;
    /**
     * \@Input {boolean} [forceValidations=] Boolean to force the field validations
     * @type {?}
     */
    StFormComponent.prototype.forceValidations;
    /**
     * \@Input {string} [disabledSectionMessage='for this instance is disabled.']
     *  Message displayed when a section is disabled. This is always displayed after the section name
     * @type {?}
     */
    StFormComponent.prototype.disabledSectionMessage;
    /**
     * \@Input {number} [sectionDescriptionLevel=-1] Level of the section to which description is displayed.
     * By default, section descriptions are not displayed.
     * @type {?}
     */
    StFormComponent.prototype.sectionDescriptionLevel;
    /**
     * \@Input {number} [textFieldMaxWidth=] Maximum width of a field needed to paint a input or textarea
     * @type {?}
     */
    StFormComponent.prototype.textFieldMaxWidth;
    /**
     * \@Input {StInputError} [errorMessages=] Field error translations
     * @type {?}
     */
    StFormComponent.prototype.errorMessages;
    /**
     * \@Input {boolean} [showTooltips=-1] Enable or disable displaying of tooltips
     * By default, tooltips are displayed
     * @type {?}
     */
    StFormComponent.prototype.showTooltips;
    /**
     * \@Input {StFormFieldTranslations} [translations=] Field translations
     * @type {?}
     */
    StFormComponent.prototype.translations;
    /**
     * \@Output {any} [valueChange=] Event emitted when value is changed. This emits the current form value
     * @type {?}
     */
    StFormComponent.prototype.valueChange;
    /**
     * \@Output {string} [clickLink=] Event emitted when link is clicked. It returns the field path
     * @type {?}
     */
    StFormComponent.prototype.clickLink;
    /** @type {?} */
    StFormComponent.prototype.form;
    /** @type {?} */
    StFormComponent.prototype.showCollapsedSectionFields;
    /** @type {?} */
    StFormComponent.prototype.innerValue;
    /**
     * @type {?}
     * @private
     */
    StFormComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    StFormComponent.prototype._parentFieldSubscription;
    /**
     * @type {?}
     * @private
     */
    StFormComponent.prototype._parentFields;
    /**
     * @type {?}
     * @private
     */
    StFormComponent.prototype._schema;
    /** @type {?} */
    StFormComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZvcm0vc3QtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUdKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03RyxPQUFPLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ3JHLE1BQU0sT0FBTyxlQUFlO0lBWjVCOzs7O1FBZ0JZLGlCQUFZLEdBQVcsQ0FBQyxDQUFDOzs7OztRQU16QiwyQkFBc0IsR0FBVyxnQ0FBZ0MsQ0FBQzs7Ozs7UUFLbEUsNEJBQXVCLEdBQVcsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBV3JDLGlCQUFZLEdBQVksSUFBSSxDQUFDOzs7O1FBTTVCLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFFekQsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBSWhFLCtCQUEwQixHQUFZLEtBQUssQ0FBQztRQUM1QyxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsNkJBQXdCLEdBQW1CLEVBQUUsQ0FBQztRQWdEdEQsY0FBUzs7O1FBQUcsR0FBRyxFQUFFO1FBQ2pCLENBQUMsRUFBQTtJQThLSixDQUFDOzs7OztJQTFORSxJQUFhLE1BQU07UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBb0I7UUFD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Ozs7SUFLM0Usa0RBQThDOzs7OztJQUc5Qyw0Q0FBbUM7Ozs7O0lBR25DLHdDQUFxQzs7Ozs7O0lBS3JDLHVDQUFzQzs7Ozs7SUFHdEMsdUNBQWdEOzs7OztJQUdoRCxzQ0FBbUU7Ozs7O0lBRW5FLG9DQUF1RTs7SUFFdkUsK0JBQW1EOztJQUVuRCxxREFBbUQ7O0lBQ25ELHFDQUE0Qjs7Ozs7SUFDNUIsaUNBQXlCOzs7OztJQUN6QixtREFBc0Q7Ozs7O0lBQ3RELHdDQUFnQzs7Ozs7SUFDaEMsa0NBQThCOztJQThDOUIsb0NBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBBZnRlclZpZXdDaGVja2VkLFxuICAgQWZ0ZXJWaWV3SW5pdCxcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ29tcG9uZW50LFxuICAgRXZlbnRFbWl0dGVyLFxuICAgZm9yd2FyZFJlZixcbiAgIElucHV0LFxuICAgT25EZXN0cm95LFxuICAgT3V0cHV0LFxuICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEpTT05TY2hlbWE0IH0gZnJvbSAnanNvbi1zY2hlbWEnO1xuaW1wb3J0IHsgU3RJbnB1dEVycm9yIH0gZnJvbSAnLi4vc3QtaW5wdXQvc3QtaW5wdXQuZXJyb3IubW9kZWwnO1xuaW1wb3J0IHsgU3RGb3JtU2NoZW1hIH0gZnJvbSAnLi9zdC1mb3JtLm1vZGVsJztcbmltcG9ydCB7IEZPUk1fVUlfQ09NUE9ORU5ULCBTdEZvcm1GaWVsZFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vc3QtZm9ybS1maWVsZC9zdC1mb3JtLWZpZWxkLmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtEeW5hbWljIGZvcm1dXG4gKlxuICogVGhlIGZvcm0gY29tcG9uZW50IGFsbG93cyB0byBnZW5lcmF0ZSBmb3JtcyBkeW5hbWljYWxseSB1c2luZyBhIEpTT04gc2NoZW1hLlxuICpcbiAqIEBtb2RlbFxuICpcbiAqICAgW0Zvcm0gU2NoZW1hXSB7Li9zdC1mb3JtLm1vZGVsLnRzI1N0Rm9ybVNjaGVtYX1cbiAqICAgW0Zvcm0gVUkgRGVmaW5pdGlvbl0gey4vc3QtZm9ybS5tb2RlbC50cyNTdEZvcm1VSURlZmluaXRpb259XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1mb3JtIFtzY2hlbWFdPVwianNvblNjaGVtYVwiIFsobmdNb2RlbCldPVwibW9kZWxcIiAjZm9ybU1vZGVsPVwibmdNb2RlbFwiPlxuICogPC9zdC1mb3JtPlxuICpcbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWZvcm0nLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtZm9ybS5jb21wb25lbnQuc2NzcyddLFxuICAgaG9zdDogeyBjbGFzczogJ3N0LWZvcm0nIH0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RGb3JtQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfSxcbiAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RGb3JtQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcGFyZW50TmFtZT1dIE5hbWUgb2YgdGhlIHBhcmVudCBzZWN0aW9uLiBCeSBkZWZhdWx0LCBpdCBpcyB1bmRlZmluZWQgKi9cbiAgIEBJbnB1dCgpIHBhcmVudE5hbWU6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW25lc3RpbmdMZXZlbD0wXSBUaGlzIGluZm9ybXMgYWJvdXQgdGhlIG5lc3RpbmcgbGV2ZWwgb2YgdGhlIGZvcm0uIFRoaXMgaW5wdXQgaXMgb25seSB1c2VkIGZvciBkZXNpZ24gcHVycG9zZXMgKi9cbiAgIEBJbnB1dCgpIG5lc3RpbmdMZXZlbDogbnVtYmVyID0gMDtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtmb3JjZVZhbGlkYXRpb25zPV0gQm9vbGVhbiB0byBmb3JjZSB0aGUgZmllbGQgdmFsaWRhdGlvbnMgKi9cbiAgIEBJbnB1dCgpIGZvcmNlVmFsaWRhdGlvbnM6IGJvb2xlYW47XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtkaXNhYmxlZFNlY3Rpb25NZXNzYWdlPSdmb3IgdGhpcyBpbnN0YW5jZSBpcyBkaXNhYmxlZC4nXVxuICAgICogIE1lc3NhZ2UgZGlzcGxheWVkIHdoZW4gYSBzZWN0aW9uIGlzIGRpc2FibGVkLiBUaGlzIGlzIGFsd2F5cyBkaXNwbGF5ZWQgYWZ0ZXIgdGhlIHNlY3Rpb24gbmFtZVxuICAgICovXG4gICBASW5wdXQoKSBkaXNhYmxlZFNlY3Rpb25NZXNzYWdlOiBzdHJpbmcgPSAnZm9yIHRoaXMgaW5zdGFuY2UgaXMgZGlzYWJsZWQuJztcblxuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbc2VjdGlvbkRlc2NyaXB0aW9uTGV2ZWw9LTFdIExldmVsIG9mIHRoZSBzZWN0aW9uIHRvIHdoaWNoIGRlc2NyaXB0aW9uIGlzIGRpc3BsYXllZC5cbiAgICAqIEJ5IGRlZmF1bHQsIHNlY3Rpb24gZGVzY3JpcHRpb25zIGFyZSBub3QgZGlzcGxheWVkLlxuICAgICovXG4gICBASW5wdXQoKSBzZWN0aW9uRGVzY3JpcHRpb25MZXZlbDogbnVtYmVyID0gLTE7XG5cbiAgIC8qKiBASW5wdXQge251bWJlcn0gW3RleHRGaWVsZE1heFdpZHRoPV0gTWF4aW11bSB3aWR0aCBvZiBhIGZpZWxkIG5lZWRlZCB0byBwYWludCBhIGlucHV0IG9yIHRleHRhcmVhICovXG4gICBASW5wdXQoKSB0ZXh0RmllbGRNYXhXaWR0aDogbnVtYmVyO1xuXG4gICAvKiogQElucHV0IHtTdElucHV0RXJyb3J9IFtlcnJvck1lc3NhZ2VzPV0gRmllbGQgZXJyb3IgdHJhbnNsYXRpb25zICovXG4gICBASW5wdXQoKSBlcnJvck1lc3NhZ2VzOiBTdElucHV0RXJyb3I7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzaG93VG9vbHRpcHM9LTFdIEVuYWJsZSBvciBkaXNhYmxlIGRpc3BsYXlpbmcgb2YgdG9vbHRpcHNcbiAgICAqIEJ5IGRlZmF1bHQsIHRvb2x0aXBzIGFyZSBkaXNwbGF5ZWRcbiAgICAqL1xuICAgQElucHV0KCkgc2hvd1Rvb2x0aXBzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgLyoqIEBJbnB1dCB7U3RGb3JtRmllbGRUcmFuc2xhdGlvbnN9IFt0cmFuc2xhdGlvbnM9XSBGaWVsZCB0cmFuc2xhdGlvbnMgKi9cbiAgIEBJbnB1dCgpIHRyYW5zbGF0aW9ucz86IFN0Rm9ybUZpZWxkVHJhbnNsYXRpb25zO1xuXG4gICAvKiogQE91dHB1dCB7YW55fSBbdmFsdWVDaGFuZ2U9XSBFdmVudCBlbWl0dGVkIHdoZW4gdmFsdWUgaXMgY2hhbmdlZC4gVGhpcyBlbWl0cyB0aGUgY3VycmVudCBmb3JtIHZhbHVlICovXG4gICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAvKiogQE91dHB1dCB7c3RyaW5nfSBbY2xpY2tMaW5rPV0gRXZlbnQgZW1pdHRlZCB3aGVuIGxpbmsgaXMgY2xpY2tlZC4gSXQgcmV0dXJucyB0aGUgZmllbGQgcGF0aCAqL1xuICAgQE91dHB1dCgpIGNsaWNrTGluazogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgQFZpZXdDaGlsZCgnZm9ybScsIHsgc3RhdGljOiBmYWxzZSB9KSBmb3JtOiBOZ0Zvcm07XG5cbiAgIHB1YmxpYyBzaG93Q29sbGFwc2VkU2VjdGlvbkZpZWxkczogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGlubmVyVmFsdWU6IGFueSA9IHt9O1xuICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IHt9O1xuICAgcHJpdmF0ZSBfcGFyZW50RmllbGRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbltdID0gW107XG4gICBwcml2YXRlIF9wYXJlbnRGaWVsZHM6IHN0cmluZ1tdO1xuICAgcHJpdmF0ZSBfc2NoZW1hOiBTdEZvcm1TY2hlbWE7XG5cbiAgIC8qKiBASW5wdXQge1N0Rm9ybVNjaGVtYSBbc2NoZW1hPV0gRm9ybSBzY2hlbWEgbmVlZGVkIHRvIGdlbmVyYXRlIHRoZSBmb3JtICovXG4gICBASW5wdXQoKSBnZXQgc2NoZW1hKCk6IFN0Rm9ybVNjaGVtYSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xuICAgfVxuXG4gICBzZXQgc2NoZW1hKHNjaGVtYTogU3RGb3JtU2NoZW1hKSB7XG4gICAgICB0aGlzLl9zY2hlbWEgPSBzY2hlbWE7XG4gICAgICB0aGlzLl92YWx1ZSA9IHt9O1xuICAgICAgaWYgKHRoaXMuX3NjaGVtYS5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgIHRoaXMuX3BhcmVudEZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMuX3NjaGVtYS5kZXBlbmRlbmNpZXMpO1xuICAgICAgfVxuICAgfVxuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuZm9yY2VWYWxpZGF0aW9ucykge1xuICAgICAgICAgdGhpcy5mb3JtLmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudEZpZWxkcyAmJiB0aGlzLmZvcm0uY29udHJvbCAmJiB0aGlzLmZvcm0uY29udHJvbC5jb250cm9scykge1xuICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wYXJlbnRGaWVsZHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRGaWVsZDogc3RyaW5nID0gdGhpcy5fcGFyZW50RmllbGRzW2ldO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9wYXJlbnRGaWVsZFN1YnNjcmlwdGlvbltpXSAmJiB0aGlzLmZvcm0uY29udHJvbC5jb250cm9sc1twYXJlbnRGaWVsZF0pIHtcblxuICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50RmllbGRTdWJzY3JpcHRpb25baV0gPSB0aGlzLmZvcm0uY29udHJvbC5jb250cm9sc1t0aGlzLl9wYXJlbnRGaWVsZHNbaV1dLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW5GaWVsZHM6IEpTT05TY2hlbWE0IHwgc3RyaW5nW10gPSB0aGlzLnNjaGVtYS5kZXBlbmRlbmNpZXNbcGFyZW50RmllbGRdO1xuICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbkZpZWxkcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1tjaGlsZHJlbkZpZWxkc1tqXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlW2NoaWxkcmVuRmllbGRzW2pdXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICAvLyBGdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICBvbkNoYW5nZShfOiBhbnkpOiB2b2lkIHtcbiAgIH1cblxuICAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICAgfVxuXG4gICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgICBsZXQgZXJyb3JzOiBhbnkgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgICAgT2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbcHJvcGVydHlOYW1lXSAmJiB0aGlzLmZvcm0uY29udHJvbHNbcHJvcGVydHlOYW1lXS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICBlcnJvcnMgPSB7fTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGVycm9yc1twcm9wZXJ0eU5hbWVdID0gdGhpcy5mb3JtLmNvbnRyb2xzW3Byb3BlcnR5TmFtZV0uZXJyb3JzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG5cbiAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sLnNldEVycm9ycyhlcnJvcnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgIH1cblxuICAgaXNSZXF1aXJlZChwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHByb3BlcnR5TmFtZSAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZCAmJiB0aGlzLnNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xO1xuICAgfVxuXG4gICBpc0NvbGxhcHNlZFNlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5zY2hlbWEudWkgJiZcbiAgICAgICAgICh0aGlzLnNjaGVtYS51aS5jb21wb25lbnQgPT09IEZPUk1fVUlfQ09NUE9ORU5ULlNIT1dfTU9SRSB8fCB0aGlzLnNjaGVtYS51aS5jb21wb25lbnQgPT09IEZPUk1fVUlfQ09NUE9ORU5ULkFDQ09SRElPTik7XG4gICB9XG5cbiAgIGlTaG93TW9yZVNlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgJiYgdGhpcy5zY2hlbWEudWkgJiYgdGhpcy5zY2hlbWEudWkuY29tcG9uZW50ID09PSBGT1JNX1VJX0NPTVBPTkVOVC5TSE9XX01PUkU7XG4gICB9XG5cbiAgIGlzQVBhcmVudEZpZWxkKHByb3BlcnR5TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVwZW5kZW5jaWVzICYmIHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llc1twcm9wZXJ0eU5hbWVdICYmIHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llc1twcm9wZXJ0eU5hbWVdLmxlbmd0aCA+IDA7XG4gICB9XG5cbiAgIGdldE9wdGlvbmFsQnV0dG9uTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgIGxldCBsYWJlbDogc3RyaW5nID0gJ0FkZGl0aW9uYWwgb3B0aW9ucyc7XG5cbiAgICAgIGlmICh0aGlzLnBhcmVudE5hbWUgfHwgdGhpcy5zY2hlbWEudGl0bGUpIHtcbiAgICAgICAgIGxhYmVsICs9ICcgb2YgJztcbiAgICAgICAgIGxhYmVsICs9IHRoaXMucGFyZW50TmFtZSB8fCB0aGlzLnNjaGVtYS50aXRsZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgfVxuXG4gICBvbkNoYW5nZU9wdGlvbmFsRmllbGRzVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2hvd0NvbGxhcHNlZFNlY3Rpb25GaWVsZHMgPSAhdGhpcy5zaG93Q29sbGFwc2VkU2VjdGlvbkZpZWxkcztcbiAgIH1cblxuICAgZ2V0RmllbGRDbGFzc2VzKHByb3BlcnR5TmFtZTogc3RyaW5nKTogYW55IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAnaGlkZGVuJzogdGhpcy5pc0NvbGxhcHNlZFNlY3Rpb24oKSAmJiAhdGhpcy5zaG93Q29sbGFwc2VkU2VjdGlvbkZpZWxkcyxcbiAgICAgICAgICdwYXJlbnQtZmllbGQnOiB0aGlzLmlzQVBhcmVudEZpZWxkKHByb3BlcnR5TmFtZSkgfHwgKHRoaXMuaXNBU3dpdGNoU2VjdGlvbigpICYmIHRoaXMuaXNUaGVGaXJzdEZpZWxkKHByb3BlcnR5TmFtZSkpXG4gICAgICB9O1xuICAgfVxuXG4gICBmaWVsZEhhc1RvQmVDcmVhdGVkKHByb3BlcnR5TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBsZXQgY3JlYXRlRmllbGQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgbGV0IHBhcmVudEZpZWxkOiBzdHJpbmcgPSB0aGlzLmdldFBhcmVudEZpZWxkKHByb3BlcnR5TmFtZSk7XG4gICAgICBpZiAoKChwYXJlbnRGaWVsZCAmJiAhdGhpcy5fdmFsdWVbcGFyZW50RmllbGRdKSB8fCAodGhpcy5pc0luQURpc2FibGVkU2VjdGlvbigpICYmICF0aGlzLmlzVGhlRmlyc3RGaWVsZChwcm9wZXJ0eU5hbWUpKSlcbiAgICAgICAgIHx8ICF0aGlzLmZ1bGZpbGxEZXBlbmRlbmN5VmlzaWJpbGl0eShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICBjcmVhdGVGaWVsZCA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5fdmFsdWVbcHJvcGVydHlOYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjcmVhdGVGaWVsZDtcbiAgIH1cblxuICAgaXNSZWxhdGVkRmllbGQocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLnVpICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXS51aS5yZWxhdGVkVG9cbiAgICAgICAgICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXS51aS5yZWxhdGVkVG8ubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgLy8gV2hlbiB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIG91dHNpZGVcbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkNoYW5nZVByb3BlcnR5KHZhbHVlOiBhbnksIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3ZhbHVlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgLy8gUmVnaXN0cnkgdGhlIGNoYW5nZSBmdW5jdGlvbiB0byBwcm9wYWdhdGUgaW50ZXJuYWwgbW9kZWwgY2hhbmdlc1xuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgfVxuXG4gICAvLyBSZWdpc3RyeSB0aGUgdG91Y2ggZnVuY3Rpb24gdG8gcHJvcGFnYXRlIGludGVybmFsIHRvdWNoIGV2ZW50cyBUT0RPOiBtYWtlIHRoaXMgZnVuY3Rpb24uXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgLy8gQWxsb3dzIEFuZ3VsYXIgdG8gZGlzYWJsZSB0aGUgZm9ybS5cbiAgIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgaWYgKGRpc2FibGUpIHtcbiAgICAgICAgIHRoaXMuZm9ybS5jb250cm9sLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmZvcm0uY29udHJvbC5lbmFibGUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fcGFyZW50RmllbGRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGFyZW50RmllbGRTdWJzY3JpcHRpb24ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudEZpZWxkU3Vic2NyaXB0aW9uW2ldLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGlzSW5BRGlzYWJsZWRTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgaWYgKHRoaXMuaXNBU3dpdGNoU2VjdGlvbigpKSB7XG4gICAgICAgICBsZXQgc2VjdGlvbkVuYWJsZXI6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpWzBdO1xuICAgICAgICAgcmV0dXJuICEodGhpcy5mb3JtICYmIHRoaXMuZm9ybS5jb250cm9sc1tzZWN0aW9uRW5hYmxlcl0gJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3NlY3Rpb25FbmFibGVyXS52YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICB9XG5cbiAgIGlzQVN3aXRjaFNlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudWkgJiYgdGhpcy5zY2hlbWEudWkuY29tcG9uZW50ID09PSBGT1JNX1VJX0NPTVBPTkVOVC5TV0lUQ0g7XG4gICB9XG5cbiAgIGlzQW5BY2NvcmRpb24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEudWkgJiYgdGhpcy5zY2hlbWEudWkuY29tcG9uZW50ID09PSBGT1JNX1VJX0NPTVBPTkVOVC5BQ0NPUkRJT047XG4gICB9XG5cbiAgIG9uQ2xpY2tUaXRsZSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlzQW5BY2NvcmRpb24oKSkge1xuICAgICAgICAgdGhpcy5vbkNoYW5nZU9wdGlvbmFsRmllbGRzVmlzaWJpbGl0eSgpO1xuICAgICAgfVxuICAgfVxuXG4gICBpc1RoZUZpcnN0RmllbGQocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgPT09IE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpWzBdO1xuICAgfVxuXG4gICBvbkNsaWNrTGluayhmaWVsZEtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmNsaWNrTGluay5lbWl0KGZpZWxkS2V5KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBnZXRQYXJlbnRGaWVsZChwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICBsZXQgcGFyZW50RmllbGQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llcykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjaGVtYS5kZXBlbmRlbmNpZXNba2V5XS5pbmRleE9mKHByb3BlcnR5TmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICBwYXJlbnRGaWVsZCA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudEZpZWxkO1xuICAgfVxuXG4gICBwcml2YXRlIGZ1bGZpbGxEZXBlbmRlbmN5VmlzaWJpbGl0eShwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgbGV0IGZ1bGZpbGw6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgbGV0IHByb3BlcnR5U2NoZW1hOiBhbnkgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICBpZiAocHJvcGVydHlTY2hlbWEudWkgJiYgcHJvcGVydHlTY2hlbWEudWkudmlzaWJsZSkge1xuICAgICAgICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhwcm9wZXJ0eVNjaGVtYS51aS52aXNpYmxlKTtcbiAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgIHdoaWxlIChmdWxmaWxsICYmIGkgPCBrZXlzLmxlbmd0aCAmJiBwcm9wZXJ0eVNjaGVtYS51aS52aXNpYmxlLmhhc093blByb3BlcnR5KGtleXNbaV0pKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdmFsdWVba2V5c1tpXV0gIT09IHByb3BlcnR5U2NoZW1hLnVpLnZpc2libGVba2V5c1tpXV0pIHtcbiAgICAgICAgICAgICAgIGZ1bGZpbGwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsraTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmdWxmaWxsO1xuICAgfVxufVxuIl19