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
var StSelectComponent = /** @class */ (function () {
    function StSelectComponent(_selectElement, _injector, _cd) {
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
    StSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.selected) {
            this.inputFormControl.setValue(this.selected.label);
        }
    };
    // TODO: MOVE THIS TO FORM-BASE
    // TODO: MOVE THIS TO FORM-BASE
    /**
     * @param {?} errorMessage
     * @return {?}
     */
    StSelectComponent.prototype.notifyError = 
    // TODO: MOVE THIS TO FORM-BASE
    /**
     * @param {?} errorMessage
     * @return {?}
     */
    function (errorMessage) {
        this.errorMessage = errorMessage;
    };
    Object.defineProperty(StSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        /*
         ****** getters && setters ******
         */
        set: /*
            ****** getters && setters ******
            */
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this._options = _cloneDeep(options);
            /** @type {?} */
            var selectedItem = this.findByProperty('selected', true);
            this.removeAllSelected();
            if (selectedItem) {
                this.selected = selectedItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "selectedValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selected && this.selected.label ? this.selected.label : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "disableValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled === true ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "selectId", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var select = this._selectElement.nativeElement;
            return select.getAttribute('id') !== null ? select.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-input" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "labelId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-label" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "optionsId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-options" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "inputName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name && this.name.length > 0 ? this.name : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSelectComponent.prototype, "hasLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label !== undefined && this.label !== null && this.label.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StSelectComponent.prototype.showError = /**
     * @return {?}
     */
    function () {
        return this.errorMessage && this.errorMessage.length && (this.inputFormControl.touched || this.forceValidations) && !this._isDisabled;
    };
    /*
     ****** Control value accessor && validate methods ******
     */
    /*
        ****** Control value accessor && validate methods ******
        */
    /**
     * @return {?}
     */
    StSelectComponent.prototype.onSearch = /*
        ****** Control value accessor && validate methods ******
        */
    /**
     * @return {?}
     */
    function () {
        this.search.emit(this.searchInput.value);
        this._cd.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StSelectComponent.prototype.onSearchClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    // Set the function to be called when the control receives a change event.
    // Set the function to be called when the control receives a change event.
    /**
     * @param {?} fn
     * @return {?}
     */
    StSelectComponent.prototype.registerOnChange = 
    // Set the function to be called when the control receives a change event.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // Set the function to be called when the control receives a touch event.
    // Set the function to be called when the control receives a touch event.
    /**
     * @param {?} fn
     * @return {?}
     */
    StSelectComponent.prototype.registerOnTouched = 
    // Set the function to be called when the control receives a touch event.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    StSelectComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this._isDisabled = disabled;
        this._cd.markForCheck();
    };
    // Write a new value to the element.
    // Write a new value to the element.
    /**
     * @param {?} newValue
     * @return {?}
     */
    StSelectComponent.prototype.writeValue = 
    // Write a new value to the element.
    /**
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        if (!this.selected || this.selected.value !== newValue) {
            this.selected = this.findByProperty('value', newValue);
            if (this.selected) {
                this.inputFormControl.setValue(this.selected.label);
            }
            this._cd.markForCheck();
        }
    };
    /*
     ****** Component methods ******
     */
    /*
        ****** Component methods ******
        */
    /**
     * @return {?}
     */
    StSelectComponent.prototype.ngAfterViewInit = /*
        ****** Component methods ******
        */
    /**
     * @return {?}
     */
    function () {
        this._inputHTMLElement = this.inputElement.nativeElement;
        /** @type {?} */
        var directive = this._injector.get(StCheckValidationsDirective, null);
        if (directive) {
            directive.registerOnChange(this.notifyError.bind(this));
        }
    };
    /**
     * @return {?}
     */
    StSelectComponent.prototype.onButtonClick = /**
     * @return {?}
     */
    function () {
        if (!this._isDisabled) {
            this.toggleButton();
            this.expandedMenu ? this._inputHTMLElement.focus() : this._inputHTMLElement.blur();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StSelectComponent.prototype.onButtonKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.code === 'Enter') {
            this.toggleButton();
        }
    };
    /**
     * @return {?}
     */
    StSelectComponent.prototype.clearSearchInput = /**
     * @return {?}
     */
    function () {
        this.searchInput.setValue('');
        this.search.emit('');
    };
    /**
     * @return {?}
     */
    StSelectComponent.prototype.createResetButton = /**
     * @return {?}
     */
    function () {
        return this.default !== undefined && ((!this.selected && this.inputFormControl.touched) || (this.selected && this.selected.value !== this.default));
    };
    /**
     * @return {?}
     */
    StSelectComponent.prototype.resetToDefault = /**
     * @return {?}
     */
    function () {
        this.writeValue(this.default);
        this.select.emit(this.default);
        if (this.onChange) {
            this.onChange(this.default);
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StSelectComponent.prototype.onClickOutside = /**
     * @return {?}
     */
    function () {
        this.expandedMenu = false;
        this.expand.emit(this.expandedMenu); // Notify expand change
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StSelectComponent.prototype.onChangeOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.selected = option && option.value !== undefined ? option : undefined;
        /** @type {?} */
        var value = option && option.value !== undefined ? option.value : undefined;
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
    };
    /**
     * @return {?}
     */
    StSelectComponent.prototype.onScrollAtBottom = /**
     * @return {?}
     */
    function () {
        this.scrollAtBottom.emit();
    };
    /*
     ****** Util component methods ******
     */
    // Search element by property in option list
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
    StSelectComponent.prototype.findByProperty = /*
        ****** Util component methods ******
        */
    // Search element by property in option list
    /**
     * @private
     * @param {?} propName
     * @param {?} propValue
     * @return {?}
     */
    function (propName, propValue) {
        if (this.isStDropdownItemList(this.options)) {
            return this.options.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _has(item, propName) && item[propName] === propValue; }));
        }
        else if (this.isStDropdownGroupList(this.options)) {
            return _flatten(this.options.map((/**
             * @param {?} group
             * @return {?}
             */
            function (group) { return group.items; }))).find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _has(item, propName) && item[propName] === propValue; }));
        }
    };
    // Check if options are a instance of StDropDownMenuItem[]
    // Check if options are a instance of StDropDownMenuItem[]
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    StSelectComponent.prototype.isStDropdownItemList = 
    // Check if options are a instance of StDropDownMenuItem[]
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        return this.options && this.options.length > 0 && !_has(((/** @type {?} */ (items)))[0], 'items');
    };
    // Check if options are a instance of StDropDownMenuGroup[]
    // Check if options are a instance of StDropDownMenuGroup[]
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    StSelectComponent.prototype.isStDropdownGroupList = 
    // Check if options are a instance of StDropDownMenuGroup[]
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        return this.options && this.options.length > 0 && _has(((/** @type {?} */ (items)))[0], 'items');
    };
    /**
     * @private
     * @return {?}
     */
    StSelectComponent.prototype.toggleButton = /**
     * @private
     * @return {?}
     */
    function () {
        this.expandedMenu = !this.expandedMenu;
        this.expand.emit(this.expandedMenu); // Notify expand change
        this._cd.markForCheck();
    };
    // TODO: Remove when remove from StDropDownMenuItem model the selected property
    // TODO: Remove when remove from StDropDownMenuItem model the selected property
    /**
     * @private
     * @return {?}
     */
    StSelectComponent.prototype.removeAllSelected = 
    // TODO: Remove when remove from StDropDownMenuItem model the selected property
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.isStDropdownItemList(this.options)) {
            return this.options.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
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
            function (group) { return group.items.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (item.selected) {
                    delete item.selected;
                }
            })); }));
        }
    };
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
                            function () { return StSelectComponent; })), multi: true }
                    ],
                    styles: ["@charset \"UTF-8\";.button-container{position:relative}.arrow{position:absolute;right:8px;top:8px;padding:5px 5px 5px 9px;cursor:pointer}.st-select-menu{position:relative}.input-container{position:relative;display:inline-block;width:100%}.search-input{margin:15px}.st-search-icon{position:absolute;right:28px;top:28px;cursor:pointer}.st-search-icon:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    StSelectComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Injector },
        { type: ChangeDetectorRef }
    ]; };
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
    return StSelectComponent;
}());
export { StSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2VsZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1zZWxlY3Qvc3Qtc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFFSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsUUFBUSxFQUNSLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsSUFBSSxVQUFVLEVBQUUsT0FBTyxJQUFJLFFBQVEsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRW5GLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBdUIsa0JBQWtCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUV6RztJQW1ERywyQkFBb0IsY0FBMEIsRUFDMUIsU0FBbUIsRUFDbkIsR0FBc0I7UUFGdEIsbUJBQWMsR0FBZCxjQUFjLENBQVk7UUFDMUIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXZDakMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBa0IsSUFBSSxDQUFDO1FBRTlCLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBRXpDLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLHFCQUFnQixHQUFZLEtBQUss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NUIsb0NBQXVDOztJQUN2Qyx5Q0FBOEI7O0lBQzlCLHFDQUFrRDs7SUFDbEQsb0NBQXNCOztJQUN0Qiw4Q0FBdUM7O0lBQ3ZDLDRDQUEwQzs7SUFDMUMsc0NBQW9DOztJQUNwQyw2Q0FBMkM7O0lBRTNDLDhDQUFrRDs7SUFDbEQseUNBQXVDOztJQUV2QyxtQ0FBc0U7O0lBQ3RFLG1DQUE4RDs7SUFDOUQsMkNBQXNFOztJQUN0RSxtQ0FBb0U7O0lBRXBFLHlDQUE4RDs7SUFDOUQsMENBQWdFOztJQUVoRSx5Q0FFcUM7O0lBQ3JDLHdDQUFvRDs7SUFDcEQsNkNBQXlEOztJQUV6RCxxQ0FBMkI7O0lBQzNCLHNDQUFzQjs7Ozs7SUFFdEIsOENBQW9FOzs7OztJQUNwRSx3Q0FBcUM7Ozs7O0lBQ3JDLHFDQUFvRTs7Ozs7SUFHeEQsMkNBQWtDOzs7OztJQUNsQyxzQ0FBMkI7Ozs7O0lBQzNCLGdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIEFmdGVyVmlld0luaXQsXG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ29tcG9uZW50LFxuICAgRWxlbWVudFJlZixcbiAgIEV2ZW50RW1pdHRlcixcbiAgIGZvcndhcmRSZWYsXG4gICBIb3N0QmluZGluZyxcbiAgIEluamVjdG9yLFxuICAgSW5wdXQsXG4gICBPbkluaXQsXG4gICBPdXRwdXQsXG4gICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIGFzIF9jbG9uZURlZXAsIGZsYXR0ZW4gYXMgX2ZsYXR0ZW4sIGhhcyBhcyBfaGFzIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU3RDaGVja1ZhbGlkYXRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9zdC1jaGVjay12YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUdyb3VwLCBTdERyb3BEb3duTWVudUl0ZW0gfSBmcm9tICcuLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXNlbGVjdCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3Qtc2VsZWN0Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3Qtc2VsZWN0LnNjc3MnXSxcbiAgIGhvc3Q6IHtcbiAgICAgICdjbGFzcyc6ICdzdC1zZWxlY3QnXG4gICB9LFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICBwcm92aWRlcnM6IFtcbiAgICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0U2VsZWN0Q29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICBASW5wdXQoKSBzZWxlY3RlZDogU3REcm9wRG93bk1lbnVJdGVtID0gdW5kZWZpbmVkO1xuICAgQElucHV0KCkgZGVmYXVsdDogYW55O1xuICAgQElucHV0KCkgaXRlbXNCZWZvcmVTY3JvbGw6IG51bWJlciA9IDg7XG4gICBASW5wdXQoKSBlbmFibGVkU2VhcmNoZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgZm9yY2VWYWxpZGF0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBASW5wdXQoKSBwbGFjZWhvbGRlclNlYXJjaD86IHN0cmluZyA9ICdTZWFyY2guLi4nO1xuICAgQElucHV0KCkga2V5Qm9hcmRNb3ZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIEBPdXRwdXQoKSBleHBhbmQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgc2Nyb2xsQXRCb3R0b206IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICBAVmlld0NoaWxkKCdpbnB1dCcsIHtzdGF0aWM6IGZhbHNlfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgQFZpZXdDaGlsZCgnYnV0dG9uJywge3N0YXRpYzogZmFsc2V9KSBidXR0b25FbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0LXNlbGVjdC1vcGVuZWQnKVxuXG4gICBwdWJsaWMgZXhwYW5kZWRNZW51OiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgc2VhcmNoSW5wdXQ6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICBwdWJsaWMgaW5wdXRGb3JtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICAgb25DaGFuZ2U6IChfOiBhbnkpID0+IHZvaWQ7XG4gICBvblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgIHByaXZhdGUgX2lucHV0SFRNTEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF9vcHRpb25zOiBTdERyb3BEb3duTWVudUl0ZW1bXSB8IFN0RHJvcERvd25NZW51R3JvdXBbXSA9IFtdO1xuXG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgdGhpcy5pbnB1dEZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuc2VsZWN0ZWQubGFiZWwpO1xuICAgICAgfVxuICAgfVxuXG4gICAvLyBUT0RPOiBNT1ZFIFRISVMgVE8gRk9STS1CQVNFXG4gICBub3RpZnlFcnJvcihlcnJvck1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICB9XG5cbiAgIC8qXG4gICAgKioqKioqIGdldHRlcnMgJiYgc2V0dGVycyAqKioqKipcbiAgICAqL1xuICAgQElucHV0KClcbiAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5faXNEaXNhYmxlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgfVxuXG4gICBASW5wdXQoKVxuICAgc2V0IG9wdGlvbnMob3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gfCBTdERyb3BEb3duTWVudUdyb3VwW10pIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBfY2xvbmVEZWVwKG9wdGlvbnMpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtOiBTdERyb3BEb3duTWVudUl0ZW0gfCB1bmRlZmluZWQgPSB0aGlzLmZpbmRCeVByb3BlcnR5KCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVBbGxTZWxlY3RlZCgpO1xuICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkSXRlbTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0IG9wdGlvbnMoKTogU3REcm9wRG93bk1lbnVJdGVtW10gfCBTdERyb3BEb3duTWVudUdyb3VwW10ge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RlZFZhbHVlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkLmxhYmVsID8gdGhpcy5zZWxlY3RlZC5sYWJlbCA6ICcnO1xuICAgfVxuXG4gICBnZXQgZGlzYWJsZVZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQgPT09IHRydWUgPyAnJyA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIGNvbnN0IHNlbGVjdDogSFRNTEVsZW1lbnQgPSB0aGlzLl9zZWxlY3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICByZXR1cm4gc2VsZWN0LmdldEF0dHJpYnV0ZSgnaWQnKSAhPT0gbnVsbCA/IHNlbGVjdC5pZCA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBpbnB1dElkKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0SWQgIT09IG51bGwgPyBgJHt0aGlzLnNlbGVjdElkfS1pbnB1dGAgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgbGFiZWxJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdElkICE9PSBudWxsID8gYCR7dGhpcy5zZWxlY3RJZH0tbGFiZWxgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IG9wdGlvbnNJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdElkICE9PSBudWxsID8gYCR7dGhpcy5zZWxlY3RJZH0tb3B0aW9uc2AgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgaW5wdXROYW1lKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZSAmJiB0aGlzLm5hbWUubGVuZ3RoID4gMCA/IHRoaXMubmFtZSA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBoYXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVsICE9PSB1bmRlZmluZWQgJiYgdGhpcy5sYWJlbCAhPT0gbnVsbCAmJiB0aGlzLmxhYmVsLmxlbmd0aCA+IDA7XG4gICB9XG5cbiAgIHNob3dFcnJvcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZSAmJiB0aGlzLmVycm9yTWVzc2FnZS5sZW5ndGggJiYgKHRoaXMuaW5wdXRGb3JtQ29udHJvbC50b3VjaGVkIHx8IHRoaXMuZm9yY2VWYWxpZGF0aW9ucykgJiYgIXRoaXMuX2lzRGlzYWJsZWQ7XG4gICB9XG5cbiAgIC8qXG4gICAgKioqKioqIENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgJiYgdmFsaWRhdGUgbWV0aG9kcyAqKioqKipcbiAgICAqL1xuXG4gICBvblNlYXJjaCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy5zZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgb25TZWFyY2hDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgIH1cblxuICAgLy8gU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgIH1cblxuICAgLy8gU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICAvLyBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgIHdyaXRlVmFsdWUobmV3VmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkIHx8IHRoaXMuc2VsZWN0ZWQudmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5maW5kQnlQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dEZvcm1Db250cm9sLnNldFZhbHVlKHRoaXMuc2VsZWN0ZWQubGFiZWwpO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8qXG4gICAgKioqKioqIENvbXBvbmVudCBtZXRob2RzICoqKioqKlxuICAgICovXG5cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2lucHV0SFRNTEVsZW1lbnQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3QgZGlyZWN0aXZlOiBTdENoZWNrVmFsaWRhdGlvbnNEaXJlY3RpdmUgPSB0aGlzLl9pbmplY3Rvci5nZXQoU3RDaGVja1ZhbGlkYXRpb25zRGlyZWN0aXZlLCBudWxsKTtcbiAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgIGRpcmVjdGl2ZS5yZWdpc3Rlck9uQ2hhbmdlKHRoaXMubm90aWZ5RXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uQnV0dG9uQ2xpY2soKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuX2lzRGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uKCk7XG4gICAgICAgICB0aGlzLmV4cGFuZGVkTWVudSA/IHRoaXMuX2lucHV0SFRNTEVsZW1lbnQuZm9jdXMoKSA6IHRoaXMuX2lucHV0SFRNTEVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkJ1dHRvbktleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgdGhpcy50b2dnbGVCdXR0b24oKTtcbiAgICAgIH1cbiAgIH1cblxuICAgY2xlYXJTZWFyY2hJbnB1dCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VhcmNoSW5wdXQuc2V0VmFsdWUoJycpO1xuICAgICAgdGhpcy5zZWFyY2guZW1pdCgnJyk7XG4gICB9XG5cbiAgIGNyZWF0ZVJlc2V0QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmICgoIXRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5pbnB1dEZvcm1Db250cm9sLnRvdWNoZWQpIHx8ICh0aGlzLnNlbGVjdGVkICYmIHRoaXMuc2VsZWN0ZWQudmFsdWUgIT09IHRoaXMuZGVmYXVsdCkpO1xuICAgfVxuXG4gICByZXNldFRvRGVmYXVsdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLmRlZmF1bHQpO1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLmRlZmF1bHQpO1xuICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5kZWZhdWx0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBvbkNsaWNrT3V0c2lkZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZmFsc2U7XG4gICAgICB0aGlzLmV4cGFuZC5lbWl0KHRoaXMuZXhwYW5kZWRNZW51KTsgLy8gTm90aWZ5IGV4cGFuZCBjaGFuZ2VcbiAgIH1cblxuICAgb25DaGFuZ2VPcHRpb24ob3B0aW9uOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBvcHRpb24gJiYgb3B0aW9uLnZhbHVlICE9PSB1bmRlZmluZWQgPyBvcHRpb24gOiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCB2YWx1ZTogYW55ID0gb3B0aW9uICYmIG9wdGlvbi52YWx1ZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9uLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh2YWx1ZSk7XG5cbiAgICAgIGlmICh2YWx1ZSB8fCAob3B0aW9uICYmIG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiAhb3B0aW9uLnZhbHVlKSkge1xuICAgICAgICAgdGhpcy5vbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIG9uU2Nyb2xsQXRCb3R0b20oKTogdm9pZCB7XG4gICAgICB0aGlzLnNjcm9sbEF0Qm90dG9tLmVtaXQoKTtcbiAgIH1cblxuICAgLypcbiAgICAqKioqKiogVXRpbCBjb21wb25lbnQgbWV0aG9kcyAqKioqKipcbiAgICAqL1xuXG4gICAvLyBTZWFyY2ggZWxlbWVudCBieSBwcm9wZXJ0eSBpbiBvcHRpb24gbGlzdFxuICAgcHJpdmF0ZSBmaW5kQnlQcm9wZXJ0eShwcm9wTmFtZTogJ3ZhbHVlJyB8ICdzZWxlY3RlZCcsIHByb3BWYWx1ZTogYW55KTogU3REcm9wRG93bk1lbnVJdGVtIHwgdW5kZWZpbmVkIHtcbiAgICAgIGlmICh0aGlzLmlzU3REcm9wZG93bkl0ZW1MaXN0KHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmluZChpdGVtID0+IF9oYXMoaXRlbSwgcHJvcE5hbWUpICYmIGl0ZW1bcHJvcE5hbWVdID09PSBwcm9wVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzU3REcm9wZG93bkdyb3VwTGlzdCh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICByZXR1cm4gX2ZsYXR0ZW4odGhpcy5vcHRpb25zLm1hcChncm91cCA9PiBncm91cC5pdGVtcykpLmZpbmQoaXRlbSA9PiBfaGFzKGl0ZW0sIHByb3BOYW1lKSAmJiBpdGVtW3Byb3BOYW1lXSA9PT0gcHJvcFZhbHVlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gQ2hlY2sgaWYgb3B0aW9ucyBhcmUgYSBpbnN0YW5jZSBvZiBTdERyb3BEb3duTWVudUl0ZW1bXVxuICAgcHJpdmF0ZSBpc1N0RHJvcGRvd25JdGVtTGlzdChpdGVtczogU3REcm9wRG93bk1lbnVJdGVtW10gfCBTdERyb3BEb3duTWVudUdyb3VwW10pOiBpdGVtcyBpcyBTdERyb3BEb3duTWVudUl0ZW1bXSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggPiAwICYmICFfaGFzKChpdGVtcyBhcyBTdERyb3BEb3duTWVudUdyb3VwW10pWzBdLCAnaXRlbXMnKTtcbiAgIH1cblxuICAgLy8gQ2hlY2sgaWYgb3B0aW9ucyBhcmUgYSBpbnN0YW5jZSBvZiBTdERyb3BEb3duTWVudUdyb3VwW11cbiAgIHByaXZhdGUgaXNTdERyb3Bkb3duR3JvdXBMaXN0KGl0ZW1zOiBTdERyb3BEb3duTWVudUl0ZW1bXSB8IFN0RHJvcERvd25NZW51R3JvdXBbXSk6IGl0ZW1zIGlzIFN0RHJvcERvd25NZW51R3JvdXBbXSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggPiAwICYmIF9oYXMoKGl0ZW1zIGFzIFN0RHJvcERvd25NZW51R3JvdXBbXSlbMF0sICdpdGVtcycpO1xuICAgfVxuXG4gICBwcml2YXRlIHRvZ2dsZUJ1dHRvbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gIXRoaXMuZXhwYW5kZWRNZW51O1xuICAgICAgdGhpcy5leHBhbmQuZW1pdCh0aGlzLmV4cGFuZGVkTWVudSk7IC8vIE5vdGlmeSBleHBhbmQgY2hhbmdlXG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgLy8gVE9ETzogUmVtb3ZlIHdoZW4gcmVtb3ZlIGZyb20gU3REcm9wRG93bk1lbnVJdGVtIG1vZGVsIHRoZSBzZWxlY3RlZCBwcm9wZXJ0eVxuICAgcHJpdmF0ZSByZW1vdmVBbGxTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlzU3REcm9wZG93bkl0ZW1MaXN0KHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICBkZWxldGUgaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzU3REcm9wZG93bkdyb3VwTGlzdCh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChncm91cCA9PiBncm91cC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLnNlbGVjdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSkpO1xuICAgICAgfVxuICAgfVxufVxuIl19