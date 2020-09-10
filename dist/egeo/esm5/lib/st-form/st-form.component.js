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
var StFormComponent = /** @class */ (function () {
    function StFormComponent() {
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
        function () {
        });
    }
    Object.defineProperty(StFormComponent.prototype, "schema", {
        /** @Input {StFormSchema [schema=] Form schema needed to generate the form */
        get: /**
         * \@Input {StFormSchema [schema=] Form schema needed to generate the form
         * @return {?}
         */
        function () {
            return this._schema;
        },
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this._schema = schema;
            this._value = {};
            if (this._schema.dependencies) {
                this._parentFields = Object.keys(this._schema.dependencies);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StFormComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this.forceValidations) {
            this.form.form.markAsPristine();
        }
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._parentFields && this.form.control && this.form.control.controls) {
            var _loop_1 = function (i) {
                /** @type {?} */
                var parentField = this_1._parentFields[i];
                if (!this_1._parentFieldSubscription[i] && this_1.form.control.controls[parentField]) {
                    this_1._parentFieldSubscription[i] = this_1.form.control.controls[this_1._parentFields[i]].valueChanges.subscribe((/**
                     * @param {?} value
                     * @return {?}
                     */
                    function (value) {
                        if (!value) {
                            /** @type {?} */
                            var childrenFields = _this.schema.dependencies[parentField];
                            for (var j = 0; j < childrenFields.length; ++j) {
                                if (_this.form.controls[childrenFields[j]]) {
                                    _this._value[childrenFields[j]] = undefined;
                                }
                            }
                        }
                    }));
                }
            };
            var this_1 = this;
            for (var i = 0; i < this._parentFields.length; ++i) {
                _loop_1(i);
            }
        }
    };
    // Function to call when the value changes.
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    StFormComponent.prototype.onChange = 
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @param {?} control
     * @return {?}
     */
    StFormComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _this = this;
        /** @type {?} */
        var errors = null;
        if (this.form) {
            Object.keys(this.form.controls).forEach((/**
             * @param {?} propertyName
             * @return {?}
             */
            function (propertyName) {
                if (_this.form.controls[propertyName] && _this.form.controls[propertyName].errors) {
                    if (!errors) {
                        errors = {};
                    }
                    errors[propertyName] = _this.form.controls[propertyName].errors;
                }
            }));
            this.form.control.setErrors(errors);
        }
        return errors;
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.isRequired = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.isCollapsedSection = /**
     * @return {?}
     */
    function () {
        return this.schema.type === 'object' && this.schema.ui &&
            (this.schema.ui.component === FORM_UI_COMPONENT.SHOW_MORE || this.schema.ui.component === FORM_UI_COMPONENT.ACCORDION);
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.iShowMoreSection = /**
     * @return {?}
     */
    function () {
        return this.schema.type === 'object' && this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.SHOW_MORE;
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.isAParentField = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return this.schema.dependencies && this.schema.dependencies[propertyName] && this.schema.dependencies[propertyName].length > 0;
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.getOptionalButtonLabel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var label = 'Additional options';
        if (this.parentName || this.schema.title) {
            label += ' of ';
            label += this.parentName || this.schema.title;
        }
        return label;
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.onChangeOptionalFieldsVisibility = /**
     * @return {?}
     */
    function () {
        this.showCollapsedSectionFields = !this.showCollapsedSectionFields;
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.getFieldClasses = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return {
            'hidden': this.isCollapsedSection() && !this.showCollapsedSectionFields,
            'parent-field': this.isAParentField(propertyName) || (this.isASwitchSection() && this.isTheFirstField(propertyName))
        };
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.fieldHasToBeCreated = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        /** @type {?} */
        var createField = true;
        /** @type {?} */
        var parentField = this.getParentField(propertyName);
        if (((parentField && !this._value[parentField]) || (this.isInADisabledSection() && !this.isTheFirstField(propertyName)))
            || !this.fulfillDependencyVisibility(propertyName)) {
            createField = false;
            this._value[propertyName] = undefined;
        }
        return createField;
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.isRelatedField = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return this._schema.properties[propertyName].ui && this.schema.properties[propertyName].ui.relatedTo
            && this.schema.properties[propertyName].ui.relatedTo.length > 0;
    };
    // When value is received from outside
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    StFormComponent.prototype.writeValue = 
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.onChange(value);
            this.innerValue = value;
        }
    };
    /**
     * @param {?} value
     * @param {?} property
     * @return {?}
     */
    StFormComponent.prototype.onChangeProperty = /**
     * @param {?} value
     * @param {?} property
     * @return {?}
     */
    function (value, property) {
        var _this = this;
        this._value[property] = value;
        this.valueChange.emit(this._value);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.onChange(_this._value);
        }));
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormComponent.prototype.registerOnChange = 
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
    StFormComponent.prototype.registerOnTouched = 
    // Registry the touch function to propagate internal touch events TODO: make this function.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // Allows Angular to disable the form.
    // Allows Angular to disable the form.
    /**
     * @param {?} disable
     * @return {?}
     */
    StFormComponent.prototype.setDisabledState = 
    // Allows Angular to disable the form.
    /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        if (disable) {
            this.form.control.disable();
        }
        else {
            this.form.control.enable();
        }
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._parentFieldSubscription) {
            for (var i = 0; i < this._parentFieldSubscription.length; ++i) {
                this._parentFieldSubscription[i].unsubscribe();
            }
        }
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.isInADisabledSection = /**
     * @return {?}
     */
    function () {
        if (this.isASwitchSection()) {
            /** @type {?} */
            var sectionEnabler = Object.keys(this.schema.properties)[0];
            return !(this.form && this.form.controls[sectionEnabler] && this.form.controls[sectionEnabler].value);
        }
        return false;
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.isASwitchSection = /**
     * @return {?}
     */
    function () {
        return this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.SWITCH;
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.isAnAccordion = /**
     * @return {?}
     */
    function () {
        return this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.ACCORDION;
    };
    /**
     * @return {?}
     */
    StFormComponent.prototype.onClickTitle = /**
     * @return {?}
     */
    function () {
        if (this.isAnAccordion()) {
            this.onChangeOptionalFieldsVisibility();
        }
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.isTheFirstField = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return propertyName === Object.keys(this.schema.properties)[0];
    };
    /**
     * @param {?} fieldKey
     * @return {?}
     */
    StFormComponent.prototype.onClickLink = /**
     * @param {?} fieldKey
     * @return {?}
     */
    function (fieldKey) {
        this.clickLink.emit(fieldKey);
    };
    /**
     * @private
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.getParentField = /**
     * @private
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        var _this = this;
        /** @type {?} */
        var parentField = undefined;
        if (this.schema.dependencies) {
            Object.keys(this.schema.dependencies).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (_this.schema.dependencies[key].indexOf(propertyName) !== -1) {
                    parentField = key;
                }
            }));
        }
        return parentField;
    };
    /**
     * @private
     * @param {?} propertyName
     * @return {?}
     */
    StFormComponent.prototype.fulfillDependencyVisibility = /**
     * @private
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        /** @type {?} */
        var fulfill = true;
        /** @type {?} */
        var propertySchema = this.schema.properties[propertyName];
        if (propertySchema.ui && propertySchema.ui.visible) {
            /** @type {?} */
            var keys = Object.keys(propertySchema.ui.visible);
            /** @type {?} */
            var i = 0;
            while (fulfill && i < keys.length && propertySchema.ui.visible.hasOwnProperty(keys[i])) {
                if (this._value[keys[i]] !== propertySchema.ui.visible[keys[i]]) {
                    fulfill = false;
                }
                ++i;
            }
        }
        return fulfill;
    };
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
                            function () { return StFormComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormComponent; })), multi: true }
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
    return StFormComponent;
}());
export { StFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZvcm0vc3QtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUdKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU03RyxPQUFPLEVBQUUsaUJBQWlCLEVBQTJCLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnJHO0lBQUE7Ozs7UUFnQlksaUJBQVksR0FBVyxDQUFDLENBQUM7Ozs7O1FBTXpCLDJCQUFzQixHQUFXLGdDQUFnQyxDQUFDOzs7OztRQUtsRSw0QkFBdUIsR0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFXckMsaUJBQVksR0FBWSxJQUFJLENBQUM7Ozs7UUFNNUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQUV6RCxjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFJaEUsK0JBQTBCLEdBQVksS0FBSyxDQUFDO1FBQzVDLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDcEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQiw2QkFBd0IsR0FBbUIsRUFBRSxDQUFDO1FBZ0R0RCxjQUFTOzs7UUFBRztRQUNaLENBQUMsRUFBQTtJQThLSixDQUFDO0lBMU5FLHNCQUFhLG1DQUFNO1FBRG5CLDZFQUE2RTs7Ozs7UUFDN0U7WUFDRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsQ0FBQzs7Ozs7UUFFRCxVQUFXLE1BQW9CO1lBQzVCLElBQUksQ0FBQyxPQUFP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ZSxFQUFmLENBQWUsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3pGOztpQkFDSDs7OzZCQUlHLEtBQUs7K0JBRUwsS0FBSzttQ0FFTCxLQUFLO3lDQUlMLEtBQUs7MENBS0wsS0FBSztvQ0FHTCxLQUFLO2dDQUdMLEtBQUs7K0JBS0wsS0FBSzsrQkFHTCxLQUFLOzhCQUdMLE1BQU07NEJBRU4sTUFBTTt1QkFFTixTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt5QkFVbkMsS0FBSzs7SUEwTlQsc0JBQUM7Q0FBQSxBQXBSRCxJQW9SQztTQXhRWSxlQUFlOzs7Ozs7SUFFekIscUNBQTRCOzs7OztJQUU1Qix1Q0FBa0M7Ozs7O0lBRWxDLDJDQUFtQzs7Ozs7O0lBSW5DLGlEQUEyRTs7Ozs7O0lBSzNFLGtEQUE4Qzs7Ozs7SUFHOUMsNENBQW1DOzs7OztJQUduQyx3Q0FBcUM7Ozs7OztJQUtyQyx1Q0FBc0M7Ozs7O0lBR3RDLHVDQUFnRDs7Ozs7SUFHaEQsc0NBQW1FOzs7OztJQUVuRSxvQ0FBdUU7O0lBRXZFLCtCQUFtRDs7SUFFbkQscURBQW1EOztJQUNuRCxxQ0FBNEI7Ozs7O0lBQzVCLGlDQUF5Qjs7Ozs7SUFDekIsbURBQXNEOzs7OztJQUN0RCx3Q0FBZ0M7Ozs7O0lBQ2hDLGtDQUE4Qjs7SUE4QzlCLG9DQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgIEFmdGVyVmlld0luaXQsXG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENvbXBvbmVudCxcbiAgIEV2ZW50RW1pdHRlcixcbiAgIGZvcndhcmRSZWYsXG4gICBJbnB1dCxcbiAgIE9uRGVzdHJveSxcbiAgIE91dHB1dCxcbiAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hNCB9IGZyb20gJ2pzb24tc2NoZW1hJztcbmltcG9ydCB7IFN0SW5wdXRFcnJvciB9IGZyb20gJy4uL3N0LWlucHV0L3N0LWlucHV0LmVycm9yLm1vZGVsJztcbmltcG9ydCB7IFN0Rm9ybVNjaGVtYSB9IGZyb20gJy4vc3QtZm9ybS5tb2RlbCc7XG5pbXBvcnQgeyBGT1JNX1VJX0NPTVBPTkVOVCwgU3RGb3JtRmllbGRUcmFuc2xhdGlvbnMgfSBmcm9tICcuL3N0LWZvcm0tZmllbGQvc3QtZm9ybS1maWVsZC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbRHluYW1pYyBmb3JtXVxuICpcbiAqIFRoZSBmb3JtIGNvbXBvbmVudCBhbGxvd3MgdG8gZ2VuZXJhdGUgZm9ybXMgZHluYW1pY2FsbHkgdXNpbmcgYSBKU09OIHNjaGVtYS5cbiAqXG4gKiBAbW9kZWxcbiAqXG4gKiAgIFtGb3JtIFNjaGVtYV0gey4vc3QtZm9ybS5tb2RlbC50cyNTdEZvcm1TY2hlbWF9XG4gKiAgIFtGb3JtIFVJIERlZmluaXRpb25dIHsuL3N0LWZvcm0ubW9kZWwudHMjU3RGb3JtVUlEZWZpbml0aW9ufVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtZm9ybSBbc2NoZW1hXT1cImpzb25TY2hlbWFcIiBbKG5nTW9kZWwpXT1cIm1vZGVsXCIgI2Zvcm1Nb2RlbD1cIm5nTW9kZWxcIj5cbiAqIDwvc3QtZm9ybT5cbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1mb3JtJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgIGhvc3Q6IHsgY2xhc3M6ICdzdC1mb3JtJyB9LFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICBwcm92aWRlcnM6IFtcbiAgICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0Rm9ybUNvbXBvbmVudCksIG11bHRpOiB0cnVlIH0sXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0Rm9ybUNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3BhcmVudE5hbWU9XSBOYW1lIG9mIHRoZSBwYXJlbnQgc2VjdGlvbi4gQnkgZGVmYXVsdCwgaXQgaXMgdW5kZWZpbmVkICovXG4gICBASW5wdXQoKSBwYXJlbnROYW1lOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtuZXN0aW5nTGV2ZWw9MF0gVGhpcyBpbmZvcm1zIGFib3V0IHRoZSBuZXN0aW5nIGxldmVsIG9mIHRoZSBmb3JtLiBUaGlzIGlucHV0IGlzIG9ubHkgdXNlZCBmb3IgZGVzaWduIHB1cnBvc2VzICovXG4gICBASW5wdXQoKSBuZXN0aW5nTGV2ZWw6IG51bWJlciA9IDA7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbZm9yY2VWYWxpZGF0aW9ucz1dIEJvb2xlYW4gdG8gZm9yY2UgdGhlIGZpZWxkIHZhbGlkYXRpb25zICovXG4gICBASW5wdXQoKSBmb3JjZVZhbGlkYXRpb25zOiBib29sZWFuO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbZGlzYWJsZWRTZWN0aW9uTWVzc2FnZT0nZm9yIHRoaXMgaW5zdGFuY2UgaXMgZGlzYWJsZWQuJ11cbiAgICAqICBNZXNzYWdlIGRpc3BsYXllZCB3aGVuIGEgc2VjdGlvbiBpcyBkaXNhYmxlZC4gVGhpcyBpcyBhbHdheXMgZGlzcGxheWVkIGFmdGVyIHRoZSBzZWN0aW9uIG5hbWVcbiAgICAqL1xuICAgQElucHV0KCkgZGlzYWJsZWRTZWN0aW9uTWVzc2FnZTogc3RyaW5nID0gJ2ZvciB0aGlzIGluc3RhbmNlIGlzIGRpc2FibGVkLic7XG5cbiAgIC8qKiBASW5wdXQge251bWJlcn0gW3NlY3Rpb25EZXNjcmlwdGlvbkxldmVsPS0xXSBMZXZlbCBvZiB0aGUgc2VjdGlvbiB0byB3aGljaCBkZXNjcmlwdGlvbiBpcyBkaXNwbGF5ZWQuXG4gICAgKiBCeSBkZWZhdWx0LCBzZWN0aW9uIGRlc2NyaXB0aW9ucyBhcmUgbm90IGRpc3BsYXllZC5cbiAgICAqL1xuICAgQElucHV0KCkgc2VjdGlvbkRlc2NyaXB0aW9uTGV2ZWw6IG51bWJlciA9IC0xO1xuXG4gICAvKiogQElucHV0IHtudW1iZXJ9IFt0ZXh0RmllbGRNYXhXaWR0aD1dIE1heGltdW0gd2lkdGggb2YgYSBmaWVsZCBuZWVkZWQgdG8gcGFpbnQgYSBpbnB1dCBvciB0ZXh0YXJlYSAqL1xuICAgQElucHV0KCkgdGV4dEZpZWxkTWF4V2lkdGg6IG51bWJlcjtcblxuICAgLyoqIEBJbnB1dCB7U3RJbnB1dEVycm9yfSBbZXJyb3JNZXNzYWdlcz1dIEZpZWxkIGVycm9yIHRyYW5zbGF0aW9ucyAqL1xuICAgQElucHV0KCkgZXJyb3JNZXNzYWdlczogU3RJbnB1dEVycm9yO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2hvd1Rvb2x0aXBzPS0xXSBFbmFibGUgb3IgZGlzYWJsZSBkaXNwbGF5aW5nIG9mIHRvb2x0aXBzXG4gICAgKiBCeSBkZWZhdWx0LCB0b29sdGlwcyBhcmUgZGlzcGxheWVkXG4gICAgKi9cbiAgIEBJbnB1dCgpIHNob3dUb29sdGlwczogYm9vbGVhbiA9IHRydWU7XG5cbiAgIC8qKiBASW5wdXQge1N0Rm9ybUZpZWxkVHJhbnNsYXRpb25zfSBbdHJhbnNsYXRpb25zPV0gRmllbGQgdHJhbnNsYXRpb25zICovXG4gICBASW5wdXQoKSB0cmFuc2xhdGlvbnM/OiBTdEZvcm1GaWVsZFRyYW5zbGF0aW9ucztcblxuICAgLyoqIEBPdXRwdXQge2FueX0gW3ZhbHVlQ2hhbmdlPV0gRXZlbnQgZW1pdHRlZCB3aGVuIHZhbHVlIGlzIGNoYW5nZWQuIFRoaXMgZW1pdHMgdGhlIGN1cnJlbnQgZm9ybSB2YWx1ZSAqL1xuICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgLyoqIEBPdXRwdXQge3N0cmluZ30gW2NsaWNrTGluaz1dIEV2ZW50IGVtaXR0ZWQgd2hlbiBsaW5rIGlzIGNsaWNrZWQuIEl0IHJldHVybnMgdGhlIGZpZWxkIHBhdGggKi9cbiAgIEBPdXRwdXQoKSBjbGlja0xpbms6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIEBWaWV3Q2hpbGQoJ2Zvcm0nLCB7IHN0YXRpYzogZmFsc2UgfSkgZm9ybTogTmdGb3JtO1xuXG4gICBwdWJsaWMgc2hvd0NvbGxhcHNlZFNlY3Rpb25GaWVsZHM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBpbm5lclZhbHVlOiBhbnkgPSB7fTtcbiAgIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSB7fTtcbiAgIHByaXZhdGUgX3BhcmVudEZpZWxkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgcHJpdmF0ZSBfcGFyZW50RmllbGRzOiBzdHJpbmdbXTtcbiAgIHByaXZhdGUgX3NjaGVtYTogU3RGb3JtU2NoZW1hO1xuXG4gICAvKiogQElucHV0IHtTdEZvcm1TY2hlbWEgW3NjaGVtYT1dIEZvcm0gc2NoZW1hIG5lZWRlZCB0byBnZW5lcmF0ZSB0aGUgZm9ybSAqL1xuICAgQElucHV0KCkgZ2V0IHNjaGVtYSgpOiBTdEZvcm1TY2hlbWEge1xuICAgICAgcmV0dXJuIHRoaXMuX3NjaGVtYTtcbiAgIH1cblxuICAgc2V0IHNjaGVtYShzY2hlbWE6IFN0Rm9ybVNjaGVtYSkge1xuICAgICAgdGhpcy5fc2NoZW1hID0gc2NoZW1hO1xuICAgICAgdGhpcy5fdmFsdWUgPSB7fTtcbiAgICAgIGlmICh0aGlzLl9zY2hlbWEuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICB0aGlzLl9wYXJlbnRGaWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLl9zY2hlbWEuZGVwZW5kZW5jaWVzKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmZvcmNlVmFsaWRhdGlvbnMpIHtcbiAgICAgICAgIHRoaXMuZm9ybS5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLl9wYXJlbnRGaWVsZHMgJiYgdGhpcy5mb3JtLmNvbnRyb2wgJiYgdGhpcy5mb3JtLmNvbnRyb2wuY29udHJvbHMpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcGFyZW50RmllbGRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50RmllbGQ6IHN0cmluZyA9IHRoaXMuX3BhcmVudEZpZWxkc1tpXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fcGFyZW50RmllbGRTdWJzY3JpcHRpb25baV0gJiYgdGhpcy5mb3JtLmNvbnRyb2wuY29udHJvbHNbcGFyZW50RmllbGRdKSB7XG5cbiAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudEZpZWxkU3Vic2NyaXB0aW9uW2ldID0gdGhpcy5mb3JtLmNvbnRyb2wuY29udHJvbHNbdGhpcy5fcGFyZW50RmllbGRzW2ldXS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuRmllbGRzOiBKU09OU2NoZW1hNCB8IHN0cmluZ1tdID0gdGhpcy5zY2hlbWEuZGVwZW5kZW5jaWVzW3BhcmVudEZpZWxkXTtcbiAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW5GaWVsZHMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uY29udHJvbHNbY2hpbGRyZW5GaWVsZHNbal1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZVtjaGlsZHJlbkZpZWxkc1tqXV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgLy8gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgb25DaGFuZ2UoXzogYW55KTogdm9pZCB7XG4gICB9XG5cbiAgIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgIH1cblxuICAgdmFsaWRhdGUoY29udHJvbDogRm9ybUNvbnRyb2wpOiBhbnkge1xuICAgICAgbGV0IGVycm9yczogYW55ID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaCgocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtLmNvbnRyb2xzW3Byb3BlcnR5TmFtZV0gJiYgdGhpcy5mb3JtLmNvbnRyb2xzW3Byb3BlcnR5TmFtZV0uZXJyb3JzKSB7XG4gICAgICAgICAgICAgICBpZiAoIWVycm9ycykge1xuICAgICAgICAgICAgICAgICAgZXJyb3JzID0ge307XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBlcnJvcnNbcHJvcGVydHlOYW1lXSA9IHRoaXMuZm9ybS5jb250cm9sc1twcm9wZXJ0eU5hbWVdLmVycm9ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuXG4gICAgICAgICB0aGlzLmZvcm0uY29udHJvbC5zZXRFcnJvcnMoZXJyb3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvcnM7XG4gICB9XG5cbiAgIGlzUmVxdWlyZWQocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQuaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMTtcbiAgIH1cblxuICAgaXNDb2xsYXBzZWRTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnICYmIHRoaXMuc2NoZW1hLnVpICYmXG4gICAgICAgICAodGhpcy5zY2hlbWEudWkuY29tcG9uZW50ID09PSBGT1JNX1VJX0NPTVBPTkVOVC5TSE9XX01PUkUgfHwgdGhpcy5zY2hlbWEudWkuY29tcG9uZW50ID09PSBGT1JNX1VJX0NPTVBPTkVOVC5BQ0NPUkRJT04pO1xuICAgfVxuXG4gICBpU2hvd01vcmVTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnICYmIHRoaXMuc2NoZW1hLnVpICYmIHRoaXMuc2NoZW1hLnVpLmNvbXBvbmVudCA9PT0gRk9STV9VSV9DT01QT05FTlQuU0hPV19NT1JFO1xuICAgfVxuXG4gICBpc0FQYXJlbnRGaWVsZChwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llcyAmJiB0aGlzLnNjaGVtYS5kZXBlbmRlbmNpZXNbcHJvcGVydHlOYW1lXSAmJiB0aGlzLnNjaGVtYS5kZXBlbmRlbmNpZXNbcHJvcGVydHlOYW1lXS5sZW5ndGggPiAwO1xuICAgfVxuXG4gICBnZXRPcHRpb25hbEJ1dHRvbkxhYmVsKCk6IHN0cmluZyB7XG4gICAgICBsZXQgbGFiZWw6IHN0cmluZyA9ICdBZGRpdGlvbmFsIG9wdGlvbnMnO1xuXG4gICAgICBpZiAodGhpcy5wYXJlbnROYW1lIHx8IHRoaXMuc2NoZW1hLnRpdGxlKSB7XG4gICAgICAgICBsYWJlbCArPSAnIG9mICc7XG4gICAgICAgICBsYWJlbCArPSB0aGlzLnBhcmVudE5hbWUgfHwgdGhpcy5zY2hlbWEudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgIH1cblxuICAgb25DaGFuZ2VPcHRpb25hbEZpZWxkc1Zpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgICB0aGlzLnNob3dDb2xsYXBzZWRTZWN0aW9uRmllbGRzID0gIXRoaXMuc2hvd0NvbGxhcHNlZFNlY3Rpb25GaWVsZHM7XG4gICB9XG5cbiAgIGdldEZpZWxkQ2xhc3Nlcyhwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgJ2hpZGRlbic6IHRoaXMuaXNDb2xsYXBzZWRTZWN0aW9uKCkgJiYgIXRoaXMuc2hvd0NvbGxhcHNlZFNlY3Rpb25GaWVsZHMsXG4gICAgICAgICAncGFyZW50LWZpZWxkJzogdGhpcy5pc0FQYXJlbnRGaWVsZChwcm9wZXJ0eU5hbWUpIHx8ICh0aGlzLmlzQVN3aXRjaFNlY3Rpb24oKSAmJiB0aGlzLmlzVGhlRmlyc3RGaWVsZChwcm9wZXJ0eU5hbWUpKVxuICAgICAgfTtcbiAgIH1cblxuICAgZmllbGRIYXNUb0JlQ3JlYXRlZChwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgbGV0IGNyZWF0ZUZpZWxkOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGxldCBwYXJlbnRGaWVsZDogc3RyaW5nID0gdGhpcy5nZXRQYXJlbnRGaWVsZChwcm9wZXJ0eU5hbWUpO1xuICAgICAgaWYgKCgocGFyZW50RmllbGQgJiYgIXRoaXMuX3ZhbHVlW3BhcmVudEZpZWxkXSkgfHwgKHRoaXMuaXNJbkFEaXNhYmxlZFNlY3Rpb24oKSAmJiAhdGhpcy5pc1RoZUZpcnN0RmllbGQocHJvcGVydHlOYW1lKSkpXG4gICAgICAgICB8fCAhdGhpcy5mdWxmaWxsRGVwZW5kZW5jeVZpc2liaWxpdHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgY3JlYXRlRmllbGQgPSBmYWxzZTtcbiAgICAgICAgIHRoaXMuX3ZhbHVlW3Byb3BlcnR5TmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRmllbGQ7XG4gICB9XG5cbiAgIGlzUmVsYXRlZEZpZWxkKHByb3BlcnR5TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXS51aSAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0udWkucmVsYXRlZFRvXG4gICAgICAgICAmJiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0udWkucmVsYXRlZFRvLmxlbmd0aCA+IDA7XG4gICB9XG5cbiAgIC8vIFdoZW4gdmFsdWUgaXMgcmVjZWl2ZWQgZnJvbSBvdXRzaWRlXG4gICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25DaGFuZ2VQcm9wZXJ0eSh2YWx1ZTogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLl92YWx1ZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIC8vIFJlZ2lzdHJ5IHRoZSBjaGFuZ2UgZnVuY3Rpb24gdG8gcHJvcGFnYXRlIGludGVybmFsIG1vZGVsIGNoYW5nZXNcbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgIH1cblxuICAgLy8gUmVnaXN0cnkgdGhlIHRvdWNoIGZ1bmN0aW9uIHRvIHByb3BhZ2F0ZSBpbnRlcm5hbCB0b3VjaCBldmVudHMgVE9ETzogbWFrZSB0aGlzIGZ1bmN0aW9uLlxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIC8vIEFsbG93cyBBbmd1bGFyIHRvIGRpc2FibGUgdGhlIGZvcm0uXG4gICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIGlmIChkaXNhYmxlKSB7XG4gICAgICAgICB0aGlzLmZvcm0uY29udHJvbC5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5mb3JtLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuX3BhcmVudEZpZWxkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhcmVudEZpZWxkU3Vic2NyaXB0aW9uLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnRGaWVsZFN1YnNjcmlwdGlvbltpXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBpc0luQURpc2FibGVkU2VjdGlvbigpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmlzQVN3aXRjaFNlY3Rpb24oKSkge1xuICAgICAgICAgbGV0IHNlY3Rpb25FbmFibGVyOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKVswXTtcbiAgICAgICAgIHJldHVybiAhKHRoaXMuZm9ybSAmJiB0aGlzLmZvcm0uY29udHJvbHNbc2VjdGlvbkVuYWJsZXJdICYmIHRoaXMuZm9ybS5jb250cm9sc1tzZWN0aW9uRW5hYmxlcl0udmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgfVxuXG4gICBpc0FTd2l0Y2hTZWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnVpICYmIHRoaXMuc2NoZW1hLnVpLmNvbXBvbmVudCA9PT0gRk9STV9VSV9DT01QT05FTlQuU1dJVENIO1xuICAgfVxuXG4gICBpc0FuQWNjb3JkaW9uKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnVpICYmIHRoaXMuc2NoZW1hLnVpLmNvbXBvbmVudCA9PT0gRk9STV9VSV9DT01QT05FTlQuQUNDT1JESU9OO1xuICAgfVxuXG4gICBvbkNsaWNrVGl0bGUoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pc0FuQWNjb3JkaW9uKCkpIHtcbiAgICAgICAgIHRoaXMub25DaGFuZ2VPcHRpb25hbEZpZWxkc1Zpc2liaWxpdHkoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXNUaGVGaXJzdEZpZWxkKHByb3BlcnR5TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gcHJvcGVydHlOYW1lID09PSBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKVswXTtcbiAgIH1cblxuICAgb25DbGlja0xpbmsoZmllbGRLZXk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5jbGlja0xpbmsuZW1pdChmaWVsZEtleSk7XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0UGFyZW50RmllbGQocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgbGV0IHBhcmVudEZpZWxkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAodGhpcy5zY2hlbWEuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5kZXBlbmRlbmNpZXMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY2hlbWEuZGVwZW5kZW5jaWVzW2tleV0uaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgcGFyZW50RmllbGQgPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRGaWVsZDtcbiAgIH1cblxuICAgcHJpdmF0ZSBmdWxmaWxsRGVwZW5kZW5jeVZpc2liaWxpdHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGxldCBmdWxmaWxsOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGxldCBwcm9wZXJ0eVNjaGVtYTogYW55ID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgaWYgKHByb3BlcnR5U2NoZW1hLnVpICYmIHByb3BlcnR5U2NoZW1hLnVpLnZpc2libGUpIHtcbiAgICAgICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMocHJvcGVydHlTY2hlbWEudWkudmlzaWJsZSk7XG4gICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICB3aGlsZSAoZnVsZmlsbCAmJiBpIDwga2V5cy5sZW5ndGggJiYgcHJvcGVydHlTY2hlbWEudWkudmlzaWJsZS5oYXNPd25Qcm9wZXJ0eShrZXlzW2ldKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ZhbHVlW2tleXNbaV1dICE9PSBwcm9wZXJ0eVNjaGVtYS51aS52aXNpYmxlW2tleXNbaV1dKSB7XG4gICAgICAgICAgICAgICBmdWxmaWxsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZnVsZmlsbDtcbiAgIH1cbn1cbiJdfQ==