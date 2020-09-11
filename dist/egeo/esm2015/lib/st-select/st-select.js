/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-select.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, HostBinding, Injector, Input, Output, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep as _cloneDeep, flatten as _flatten, has as _has } from 'lodash';
import { StCheckValidationsDirective } from './st-check-validations';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
export class StSelectComponent {
    /**
     * @param {?} _selectElement
     * @param {?} _injector
     * @param {?} _cd
     */
    constructor(_selectElement, _injector, _cd) {
        this._selectElement = _selectElement;
        this._injector = _injector;
        this._cd = _cd;
        this.placeholder = '';
        this.name = '';
        this.label = '';
        this.tooltip = null;
        this.selected = undefined;
        this.itemsBeforeScroll = 8;
        this.enabledSearcher = false;
        this.isLoading = false;
        this.forceValidations = false;
        this.placeholderSearch = 'Search...';
        this.keyBoardMove = false;
        this.expand = new EventEmitter();
        this.select = new EventEmitter();
        this.scrollAtBottom = new EventEmitter();
        this.search = new EventEmitter();
        this.expandedMenu = false;
        this.searchInput = new FormControl();
        this.inputFormControl = new FormControl();
        this._inputHTMLElement = undefined;
        this._isDisabled = false;
        this._options = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.selected) {
            this.inputFormControl.setValue(this.selected.label);
        }
    }
    // TODO: MOVE THIS TO FORM-BASE
    /**
     * @param {?} errorMessage
     * @return {?}
     */
    notifyError(errorMessage) {
        this.errorMessage = errorMessage;
    }
    /*
        ****** getters && setters ******
        */
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._isDisabled = value;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._isDisabled;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this._options = _cloneDeep(options);
        /** @type {?} */
        const selectedItem = this.findByProperty('selected', true);
        this.removeAllSelected();
        if (selectedItem) {
            this.selected = selectedItem;
        }
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @return {?}
     */
    get selectedValue() {
        return this.selected && this.selected.label ? this.selected.label : '';
    }
    /**
     * @return {?}
     */
    get disableValue() {
        return this._isDisabled === true ? '' : null;
    }
    /**
     * @return {?}
     */
    get selectId() {
        /** @type {?} */
        const select = this._selectElement.nativeElement;
        return select.getAttribute('id') !== null ? select.id : null;
    }
    /**
     * @return {?}
     */
    get inputId() {
        return this.selectId !== null ? `${this.selectId}-input` : null;
    }
    /**
     * @return {?}
     */
    get labelId() {
        return this.selectId !== null ? `${this.selectId}-label` : null;
    }
    /**
     * @return {?}
     */
    get optionsId() {
        return this.selectId !== null ? `${this.selectId}-options` : null;
    }
    /**
     * @return {?}
     */
    get inputName() {
        return this.name && this.name.length > 0 ? this.name : null;
    }
    /**
     * @return {?}
     */
    get hasLabel() {
        return this.label !== undefined && this.label !== null && this.label.length > 0;
    }
    /**
     * @return {?}
     */
    showError() {
        return this.errorMessage && this.errorMessage.length && (this.inputFormControl.touched || this.forceValidations) && !this._isDisabled;
    }
    /*
        ****** Control value accessor && validate methods ******
        */
    /**
     * @return {?}
     */
    onSearch() {
        this.search.emit(this.searchInput.value);
        this._cd.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSearchClick(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    // Set the function to be called when the control receives a change event.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // Set the function to be called when the control receives a touch event.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this._isDisabled = disabled;
        this._cd.markForCheck();
    }
    // Write a new value to the element.
    /**
     * @param {?} newValue
     * @return {?}
     */
    writeValue(newValue) {
        if (!this.selected || this.selected.value !== newValue) {
            this.selected = this.findByProperty('value', newValue);
            if (this.selected) {
                this.inputFormControl.setValue(this.selected.label);
            }
            this._cd.markForCheck();
        }
    }
    /*
        ****** Component methods ******
        */
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._inputHTMLElement = this.inputElement.nativeElement;
        /** @type {?} */
        const directive = this._injector.get(StCheckValidationsDirective, null);
        if (directive) {
            directive.registerOnChange(this.notifyError.bind(this));
        }
    }
    /**
     * @return {?}
     */
    onButtonClick() {
        if (!this._isDisabled) {
            this.toggleButton();
            this.expandedMenu ? this._inputHTMLElement.focus() : this._inputHTMLElement.blur();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onButtonKeyPress(event) {
        if (event.code === 'Enter') {
            this.toggleButton();
        }
    }
    /**
     * @return {?}
     */
    clearSearchInput() {
        this.searchInput.setValue('');
        this.search.emit('');
    }
    /**
     * @return {?}
     */
    createResetButton() {
        return this.default !== undefined && ((!this.selected && this.inputFormControl.touched) || (this.selected && this.selected.value !== this.default));
    }
    /**
     * @return {?}
     */
    resetToDefault() {
        this.writeValue(this.default);
        this.select.emit(this.default);
        if (this.onChange) {
            this.onChange(this.default);
        }
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    onClickOutside() {
        this.expandedMenu = false;
        this.expand.emit(this.expandedMenu); // Notify expand change
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onChangeOption(option) {
        this.selected = option && option.value !== undefined ? option : undefined;
        /** @type {?} */
        const value = option && option.value !== undefined ? option.value : undefined;
        if (this.onChange) {
            this.onChange(value);
        }
        if (this.onTouched) {
            this.onTouched();
        }
        this.select.emit(value);
        if (value || (option && option.hasOwnProperty('value') && !option.value)) {
            this.onClickOutside();
        }
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    onScrollAtBottom() {
        this.scrollAtBottom.emit();
    }
    /*
        ****** Util component methods ******
        */
    // Search element by property in option list
    /**
     * @private
     * @param {?} propName
     * @param {?} propValue
     * @return {?}
     */
    findByProperty(propName, propValue) {
        if (this.isStDropdownItemList(this.options)) {
            return this.options.find((/**
             * @param {?} item
             * @return {?}
             */
            item => _has(item, propName) && item[propName] === propValue));
        }
        else if (this.isStDropdownGroupList(this.options)) {
            return _flatten(this.options.map((/**
             * @param {?} group
             * @return {?}
             */
            group => group.items))).find((/**
             * @param {?} item
             * @return {?}
             */
            item => _has(item, propName) && item[propName] === propValue));
        }
    }
    // Check if options are a instance of StDropDownMenuItem[]
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    isStDropdownItemList(items) {
        return this.options && this.options.length > 0 && !_has(((/** @type {?} */ (items)))[0], 'items');
    }
    // Check if options are a instance of StDropDownMenuGroup[]
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    isStDropdownGroupList(items) {
        return this.options && this.options.length > 0 && _has(((/** @type {?} */ (items)))[0], 'items');
    }
    /**
     * @private
     * @return {?}
     */
    toggleButton() {
        this.expandedMenu = !this.expandedMenu;
        this.expand.emit(this.expandedMenu); // Notify expand change
        this._cd.markForCheck();
    }
    // TODO: Remove when remove from StDropDownMenuItem model the selected property
    /**
     * @private
     * @return {?}
     */
    removeAllSelected() {
        if (this.isStDropdownItemList(this.options)) {
            return this.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.selected) {
                    delete item.selected;
                }
            }));
        }
        else if (this.isStDropdownGroupList(this.options)) {
            this.options.forEach((/**
             * @param {?} group
             * @return {?}
             */
            group => group.items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item.selected) {
                    delete item.selected;
                }
            }))));
        }
    }
}
StSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-select',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-dropdown-menu\n   class=\"st-select-menu\"\n   [items]=\"options\"\n   [attr.id]=\"optionsId\"\n   [active]=\"expandedMenu\"\n   [placement]=\"'bottom-start'\"\n   [keyBoardMove]=\"keyBoardMove\"\n   [selectedItem]=\"selected\"\n   (change)=\"onChangeOption($event)\"\n   (scrollAtBottom)=\"onScrollAtBottom()\"\n   [isLoading]=\"isLoading\"\n   [itemsBeforeScroll]=\"itemsBeforeScroll\"\n>\n   <div (click)=\"onButtonClick()\" (keypress)=\"onButtonKeyPress($event)\" #button class=\"button-container\"\n        (clickOutside)=\"onClickOutside()\">\n      <div>\n         <label *ngIf=\"hasLabel\" [ngClass]=\"{disabled: disabled, error: showError()}\"\n                st-label\n                for=\"inputId\"\n                class=\"st-label\"\n                [attr.title]=\"tooltip\"\n                [attr.id]=\"labelId\"\n                [attr.disabled]=\"disableValue\">{{label}}</label>\n         <div class=\"input-container\">\n            <input\n               #input\n               [formControl]=\"inputFormControl\"\n               autocomplete=\"off\"\n               aria-haspopup=\"true\"\n               class=\"st-input\"\n               type=\"text\"\n               [readonly]=\"true\"\n               [attr.aria-expanded]=\"expandedMenu\"\n               [attr.disabled]=\"disableValue\"\n               [attr.id]=\"inputId\"\n               [attr.name]=\"inputName\"\n               [placeholder]=\"placeholder\"\n               [value]=\"selectedValue\"\n            />\n            <span *ngIf=\"createResetButton()\" class=\"st-form-control-reset-button\" (click)=\"resetToDefault()\"\n                  [style.opacity]=\"expandedMenu ? 1 : 0\">\n               <i class=\"icon-reload2\"></i>\n            </span>\n            <i class=\"icon-arrow2_down arrow\" [attr.disabled]=\"disableValue\"></i>\n         </div>\n      </div>\n   </div>\n   <div dropdown-header *ngIf=\"enabledSearcher\"\n        (click)=\"onSearchClick($event)\"\n        class=\"search-input\">\n      <input\n         id=\"searchInput\"\n         autocomplete=\"off\"\n         aria-haspopup=\"true\"\n         class=\"st-input\"\n         type=\"text\"\n         [attr.aria-expanded]=\"expandedMenu\"\n         [attr.disabled]=\"disableValue\"\n         [attr.id]=\"searchInput\"\n         [placeholder]=\"placeholderSearch\"\n         [formControl]=\"searchInput\"\n         (focus)=\"enabledSearcher\"\n         (input)=\"onSearch()\"\n      />\n      <i class=\"st-search-icon sth-search-icon icon-search\" tabindex=\"0\" *ngIf=\"!searchInput.value?.length\"></i>\n      <i class=\"st-search-icon sth-search-icon icon-cross\" tabindex=\"0\" *ngIf=\"searchInput.value?.length\"\n         (click)=\"clearSearchInput()\" (keyup.enter)=\"clearSearchInput()\"></i>\n   </div>\n\n</st-dropdown-menu>\n\n<div class=\"st-input-error-layout\" *ngIf=\"showError()\">\n   <span class=\"st-input-error-message\">{{errorMessage}}</span>\n</div>\n",
                host: {
                    'class': 'st-select'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StSelectComponent)), multi: true }
                ],
                styles: ["@charset \"UTF-8\";.button-container{position:relative}.arrow{position:absolute;right:8px;top:8px;padding:5px 5px 5px 9px;cursor:pointer}.st-select-menu{position:relative}.input-container{position:relative;display:inline-block;width:100%}.search-input{margin:15px}.st-search-icon{position:absolute;right:28px;top:28px;cursor:pointer}.st-search-icon:focus{outline:0}"]
            }] }
];
/** @nocollapse */
StSelectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: ChangeDetectorRef }
];
StSelectComponent.propDecorators = {
    placeholder: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    tooltip: [{ type: Input }],
    errorMessage: [{ type: Input }],
    selected: [{ type: Input }],
    default: [{ type: Input }],
    itemsBeforeScroll: [{ type: Input }],
    enabledSearcher: [{ type: Input }],
    isLoading: [{ type: Input }],
    forceValidations: [{ type: Input }],
    placeholderSearch: [{ type: Input }],
    keyBoardMove: [{ type: Input }],
    expand: [{ type: Output }],
    select: [{ type: Output }],
    scrollAtBottom: [{ type: Output }],
    search: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['input', { static: false },] }],
    buttonElement: [{ type: ViewChild, args: ['button', { static: false },] }],
    expandedMenu: [{ type: HostBinding, args: ['class.st-select-opened',] }],
    disabled: [{ type: Input }],
    options: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StSelectComponent.prototype.placeholder;
    /** @type {?} */
    StSelectComponent.prototype.name;
    /** @type {?} */
    StSelectComponent.prototype.label;
    /** @type {?} */
    StSelectComponent.prototype.tooltip;
    /** @type {?} */
    StSelectComponent.prototype.errorMessage;
    /** @type {?} */
    StSelectComponent.prototype.selected;
    /** @type {?} */
    StSelectComponent.prototype.default;
    /** @type {?} */
    StSelectComponent.prototype.itemsBeforeScroll;
    /** @type {?} */
    StSelectComponent.prototype.enabledSearcher;
    /** @type {?} */
    StSelectComponent.prototype.isLoading;
    /** @type {?} */
    StSelectComponent.prototype.forceValidations;
    /** @type {?} */
    StSelectComponent.prototype.placeholderSearch;
    /** @type {?} */
    StSelectComponent.prototype.keyBoardMove;
    /** @type {?} */
    StSelectComponent.prototype.expand;
    /** @type {?} */
    StSelectComponent.prototype.select;
    /** @type {?} */
    StSelectComponent.prototype.scrollAtBottom;
    /** @type {?} */
    StSelectComponent.prototype.search;
    /** @type {?} */
    StSelectComponent.prototype.inputElement;
    /** @type {?} */
    StSelectComponent.prototype.buttonElement;
    /** @type {?} */
    StSelectComponent.prototype.expandedMenu;
    /** @type {?} */
    StSelectComponent.prototype.searchInput;
    /** @type {?} */
    StSelectComponent.prototype.inputFormControl;
    /** @type {?} */
    StSelectComponent.prototype.onChange;
    /** @type {?} */
    StSelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StSelectComponent.prototype._inputHTMLElement;
    /**
     * @type {?}
     * @private
     */
    StSelectComponent.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    StSelectComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    StSelectComponent.prototype._selectElement;
    /**
     * @type {?}
     * @private
     */
    StSelectComponent.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    StSelectComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1zZWxlY3Qvc3Qtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFFSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsSUFBSSxVQUFVLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRW5GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBdUIsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQWN6RyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF1QzNCLFlBQW9CLGNBQTBCLEVBQzFCLFNBQW1CLEVBQ25CLEdBQXNCO1FBRnRCLG1CQUFjLEdBQWQsY0FBYyxDQUFZO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF2Q2pDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUU5QixhQUFRLEdBQXVCLFNBQVMsQ0FBQztRQUV6QyxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFZLEtBQUssQ0FBQztR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OzJCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO2dDQUNMLEtBQUs7OEJBQ0wsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBRUwsS0FBSzsyQkFDTCxLQUFLO3FCQUVMLE1BQU07cUJBQ04sTUFBTTs2QkFDTixNQUFNO3FCQUNOLE1BQU07MkJBRU4sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7NEJBQ2xDLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzJCQUVuQyxXQUFXLFNBQUMsd0JBQXdCO3VCQWlDcEMsS0FBSztzQkFVTCxLQUFLOzs7O0lBbEVOLHdDQUFrQzs7SUFDbEMsaUNBQTJCOztJQUMzQixrQ0FBNEI7O0lBQzVCLG9DQUF1Qzs7SUFDdkMseUNBQThCOztJQUM5QixxQ0FBa0Q7O0lBQ2xELG9DQUFzQjs7SUFDdEIsOENBQXVDOztJQUN2Qyw0Q0FBMEM7O0lBQzFDLHNDQUFvQzs7SUFDcEMsNkNBQTJDOztJQUUzQyw4Q0FBa0Q7O0lBQ2xELHlDQUF1Qzs7SUFFdkMsbUNBQXNFOztJQUN0RSxtQ0FBOEQ7O0lBQzlELDJDQUFzRTs7SUFDdEUsbUNBQW9FOztJQUVwRSx5Q0FBOEQ7O0lBQzlELDBDQUFnRTs7SUFFaEUseUNBRXFDOztJQUNyQyx3Q0FBb0Q7O0lBQ3BELDZDQUF5RDs7SUFFekQscUNBQTJCOztJQUMzQixzQ0FBc0I7Ozs7O0lBRXRCLDhDQUFvRTs7Ozs7SUFDcEUsd0NBQXFDOzs7OztJQUNyQyxxQ0FBb0U7Ozs7O0lBR3hELDJDQUFrQzs7Ozs7SUFDbEMsc0NBQTJCOzs7OztJQUMzQixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBBZnRlclZpZXdJbml0LFxuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgIENvbXBvbmVudCxcbiAgIEVsZW1lbnRSZWYsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBmb3J3YXJkUmVmLFxuICAgSG9zdEJpbmRpbmcsXG4gICBJbmplY3RvcixcbiAgIElucHV0LFxuICAgT25Jbml0LFxuICAgT3V0cHV0LFxuICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNsb25lRGVlcCBhcyBfY2xvbmVEZWVwLCBmbGF0dGVuIGFzIF9mbGF0dGVuLCBoYXMgYXMgX2hhcyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0Q2hlY2tWYWxpZGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc3QtY2hlY2stdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVHcm91cCwgU3REcm9wRG93bk1lbnVJdGVtIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1zZWxlY3QnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXNlbGVjdC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXNlbGVjdC5zY3NzJ10sXG4gICBob3N0OiB7XG4gICAgICAnY2xhc3MnOiAnc3Qtc2VsZWN0J1xuICAgfSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdFNlbGVjdENvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XG4gICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgQElucHV0KCkgc2VsZWN0ZWQ6IFN0RHJvcERvd25NZW51SXRlbSA9IHVuZGVmaW5lZDtcbiAgIEBJbnB1dCgpIGRlZmF1bHQ6IGFueTtcbiAgIEBJbnB1dCgpIGl0ZW1zQmVmb3JlU2Nyb2xsOiBudW1iZXIgPSA4O1xuICAgQElucHV0KCkgZW5hYmxlZFNlYXJjaGVyOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGZvcmNlVmFsaWRhdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgQElucHV0KCkgcGxhY2Vob2xkZXJTZWFyY2g/OiBzdHJpbmcgPSAnU2VhcmNoLi4uJztcbiAgIEBJbnB1dCgpIGtleUJvYXJkTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBAT3V0cHV0KCkgZXhwYW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIHNjcm9sbEF0Qm90dG9tOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7c3RhdGljOiBmYWxzZX0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgIEBWaWV3Q2hpbGQoJ2J1dHRvbicsIHtzdGF0aWM6IGZhbHNlfSkgYnV0dG9uRWxlbWVudDogRWxlbWVudFJlZjtcblxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC1zZWxlY3Qtb3BlbmVkJylcblxuICAgcHVibGljIGV4cGFuZGVkTWVudTogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIHNlYXJjaElucHV0OiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICAgcHVibGljIGlucHV0Rm9ybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgIG9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuICAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkO1xuXG4gICBwcml2YXRlIF9pbnB1dEhUTUxFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHJpdmF0ZSBfb3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gfCBTdERyb3BEb3duTWVudUdyb3VwW10gPSBbXTtcblxuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWxlY3RFbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnNlbGVjdGVkLmxhYmVsKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gVE9ETzogTU9WRSBUSElTIFRPIEZPUk0tQkFTRVxuICAgbm90aWZ5RXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgfVxuXG4gICAvKlxuICAgICoqKioqKiBnZXR0ZXJzICYmIHNldHRlcnMgKioqKioqXG4gICAgKi9cbiAgIEBJbnB1dCgpXG4gICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgIH1cblxuICAgQElucHV0KClcbiAgIHNldCBvcHRpb25zKG9wdGlvbnM6IFN0RHJvcERvd25NZW51SXRlbVtdIHwgU3REcm9wRG93bk1lbnVHcm91cFtdKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gX2Nsb25lRGVlcChvcHRpb25zKTtcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbTogU3REcm9wRG93bk1lbnVJdGVtIHwgdW5kZWZpbmVkID0gdGhpcy5maW5kQnlQcm9wZXJ0eSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlQWxsU2VsZWN0ZWQoKTtcbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9XG4gICB9XG5cbiAgIGdldCBvcHRpb25zKCk6IFN0RHJvcERvd25NZW51SXRlbVtdIHwgU3REcm9wRG93bk1lbnVHcm91cFtdIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0ZWRWYWx1ZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZC5sYWJlbCA/IHRoaXMuc2VsZWN0ZWQubGFiZWwgOiAnJztcbiAgIH1cblxuICAgZ2V0IGRpc2FibGVWYWx1ZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkID09PSB0cnVlID8gJycgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICBjb25zdCBzZWxlY3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5fc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgcmV0dXJuIHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IG51bGwgPyBzZWxlY3QuaWQgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdElkICE9PSBudWxsID8gYCR7dGhpcy5zZWxlY3RJZH0taW5wdXRgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGxhYmVsSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJZCAhPT0gbnVsbCA/IGAke3RoaXMuc2VsZWN0SWR9LWxhYmVsYCA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBvcHRpb25zSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJZCAhPT0gbnVsbCA/IGAke3RoaXMuc2VsZWN0SWR9LW9wdGlvbnNgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGlucHV0TmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWUgJiYgdGhpcy5uYW1lLmxlbmd0aCA+IDAgPyB0aGlzLm5hbWUgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgaGFzTGFiZWwoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5sYWJlbCAhPT0gdW5kZWZpbmVkICYmIHRoaXMubGFiZWwgIT09IG51bGwgJiYgdGhpcy5sYWJlbC5sZW5ndGggPiAwO1xuICAgfVxuXG4gICBzaG93RXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2UgJiYgdGhpcy5lcnJvck1lc3NhZ2UubGVuZ3RoICYmICh0aGlzLmlucHV0Rm9ybUNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmZvcmNlVmFsaWRhdGlvbnMpICYmICF0aGlzLl9pc0Rpc2FibGVkO1xuICAgfVxuXG4gICAvKlxuICAgICoqKioqKiBDb250cm9sIHZhbHVlIGFjY2Vzc29yICYmIHZhbGlkYXRlIG1ldGhvZHMgKioqKioqXG4gICAgKi9cblxuICAgb25TZWFyY2goKTogdm9pZCB7XG4gICAgICB0aGlzLnNlYXJjaC5lbWl0KHRoaXMuc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIG9uU2VhcmNoQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICB9XG5cbiAgIC8vIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSBjaGFuZ2UgZXZlbnQuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIC8vIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSB0b3VjaCBldmVudC5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgfVxuXG4gICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLl9pc0Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgLy8gV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICB3cml0ZVZhbHVlKG5ld1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5zZWxlY3RlZCB8fCB0aGlzLnNlbGVjdGVkLnZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZmluZEJ5UHJvcGVydHkoJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGb3JtQ29udHJvbC5zZXRWYWx1ZSh0aGlzLnNlbGVjdGVkLmxhYmVsKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgfVxuXG4gICAvKlxuICAgICoqKioqKiBDb21wb25lbnQgbWV0aG9kcyAqKioqKipcbiAgICAqL1xuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9pbnB1dEhUTUxFbGVtZW50ID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IGRpcmVjdGl2ZTogU3RDaGVja1ZhbGlkYXRpb25zRGlyZWN0aXZlID0gdGhpcy5faW5qZWN0b3IuZ2V0KFN0Q2hlY2tWYWxpZGF0aW9uc0RpcmVjdGl2ZSwgbnVsbCk7XG4gICAgICBpZiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICBkaXJlY3RpdmUucmVnaXN0ZXJPbkNoYW5nZSh0aGlzLm5vdGlmeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLl9pc0Rpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbigpO1xuICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPyB0aGlzLl9pbnB1dEhUTUxFbGVtZW50LmZvY3VzKCkgOiB0aGlzLl9pbnB1dEhUTUxFbGVtZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25CdXR0b25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIGNsZWFyU2VhcmNoSW5wdXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnNlYXJjaElucHV0LnNldFZhbHVlKCcnKTtcbiAgICAgIHRoaXMuc2VhcmNoLmVtaXQoJycpO1xuICAgfVxuXG4gICBjcmVhdGVSZXNldEJ1dHRvbigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHQgIT09IHVuZGVmaW5lZCAmJiAoKCF0aGlzLnNlbGVjdGVkICYmIHRoaXMuaW5wdXRGb3JtQ29udHJvbC50b3VjaGVkKSB8fCAodGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkLnZhbHVlICE9PSB0aGlzLmRlZmF1bHQpKTtcbiAgIH1cblxuICAgcmVzZXRUb0RlZmF1bHQoKTogdm9pZCB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5kZWZhdWx0KTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy5kZWZhdWx0KTtcbiAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgb25DbGlja091dHNpZGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGZhbHNlO1xuICAgICAgdGhpcy5leHBhbmQuZW1pdCh0aGlzLmV4cGFuZGVkTWVudSk7IC8vIE5vdGlmeSBleHBhbmQgY2hhbmdlXG4gICB9XG5cbiAgIG9uQ2hhbmdlT3B0aW9uKG9wdGlvbjogU3REcm9wRG93bk1lbnVJdGVtKTogdm9pZCB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gb3B0aW9uICYmIG9wdGlvbi52YWx1ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9uIDogdW5kZWZpbmVkO1xuICAgICAgY29uc3QgdmFsdWU6IGFueSA9IG9wdGlvbiAmJiBvcHRpb24udmFsdWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbi52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodmFsdWUpO1xuXG4gICAgICBpZiAodmFsdWUgfHwgKG9wdGlvbiAmJiBvcHRpb24uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgJiYgIW9wdGlvbi52YWx1ZSkpIHtcbiAgICAgICAgIHRoaXMub25DbGlja091dHNpZGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBvblNjcm9sbEF0Qm90dG9tKCk6IHZvaWQge1xuICAgICAgdGhpcy5zY3JvbGxBdEJvdHRvbS5lbWl0KCk7XG4gICB9XG5cbiAgIC8qXG4gICAgKioqKioqIFV0aWwgY29tcG9uZW50IG1ldGhvZHMgKioqKioqXG4gICAgKi9cblxuICAgLy8gU2VhcmNoIGVsZW1lbnQgYnkgcHJvcGVydHkgaW4gb3B0aW9uIGxpc3RcbiAgIHByaXZhdGUgZmluZEJ5UHJvcGVydHkocHJvcE5hbWU6ICd2YWx1ZScgfCAnc2VsZWN0ZWQnLCBwcm9wVmFsdWU6IGFueSk6IFN0RHJvcERvd25NZW51SXRlbSB8IHVuZGVmaW5lZCB7XG4gICAgICBpZiAodGhpcy5pc1N0RHJvcGRvd25JdGVtTGlzdCh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbmQoaXRlbSA9PiBfaGFzKGl0ZW0sIHByb3BOYW1lKSAmJiBpdGVtW3Byb3BOYW1lXSA9PT0gcHJvcFZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0RHJvcGRvd25Hcm91cExpc3QodGhpcy5vcHRpb25zKSkge1xuICAgICAgICAgcmV0dXJuIF9mbGF0dGVuKHRoaXMub3B0aW9ucy5tYXAoZ3JvdXAgPT4gZ3JvdXAuaXRlbXMpKS5maW5kKGl0ZW0gPT4gX2hhcyhpdGVtLCBwcm9wTmFtZSkgJiYgaXRlbVtwcm9wTmFtZV0gPT09IHByb3BWYWx1ZSk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8vIENoZWNrIGlmIG9wdGlvbnMgYXJlIGEgaW5zdGFuY2Ugb2YgU3REcm9wRG93bk1lbnVJdGVtW11cbiAgIHByaXZhdGUgaXNTdERyb3Bkb3duSXRlbUxpc3QoaXRlbXM6IFN0RHJvcERvd25NZW51SXRlbVtdIHwgU3REcm9wRG93bk1lbnVHcm91cFtdKTogaXRlbXMgaXMgU3REcm9wRG93bk1lbnVJdGVtW10ge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCAmJiAhX2hhcygoaXRlbXMgYXMgU3REcm9wRG93bk1lbnVHcm91cFtdKVswXSwgJ2l0ZW1zJyk7XG4gICB9XG5cbiAgIC8vIENoZWNrIGlmIG9wdGlvbnMgYXJlIGEgaW5zdGFuY2Ugb2YgU3REcm9wRG93bk1lbnVHcm91cFtdXG4gICBwcml2YXRlIGlzU3REcm9wZG93bkdyb3VwTGlzdChpdGVtczogU3REcm9wRG93bk1lbnVJdGVtW10gfCBTdERyb3BEb3duTWVudUdyb3VwW10pOiBpdGVtcyBpcyBTdERyb3BEb3duTWVudUdyb3VwW10ge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCAmJiBfaGFzKChpdGVtcyBhcyBTdERyb3BEb3duTWVudUdyb3VwW10pWzBdLCAnaXRlbXMnKTtcbiAgIH1cblxuICAgcHJpdmF0ZSB0b2dnbGVCdXR0b24oKTogdm9pZCB7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9ICF0aGlzLmV4cGFuZGVkTWVudTtcbiAgICAgIHRoaXMuZXhwYW5kLmVtaXQodGhpcy5leHBhbmRlZE1lbnUpOyAvLyBOb3RpZnkgZXhwYW5kIGNoYW5nZVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIC8vIFRPRE86IFJlbW92ZSB3aGVuIHJlbW92ZSBmcm9tIFN0RHJvcERvd25NZW51SXRlbSBtb2RlbCB0aGUgc2VsZWN0ZWQgcHJvcGVydHlcbiAgIHByaXZhdGUgcmVtb3ZlQWxsU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pc1N0RHJvcGRvd25JdGVtTGlzdCh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1N0RHJvcGRvd25Hcm91cExpc3QodGhpcy5vcHRpb25zKSkge1xuICAgICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goZ3JvdXAgPT4gZ3JvdXAuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==