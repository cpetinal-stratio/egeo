import { __spread, __values, __extends, __decorate, __metadata, __rest, __assign } from 'tslib';
import { CommonModule } from '@angular/common';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, ComponentFactoryResolver, Input, Output, ViewChild, ViewContainerRef, Pipe, NgModule, ChangeDetectorRef, ElementRef, HostListener, forwardRef, HostBinding, ViewEncapsulation, Renderer2, Directive, ViewChildren, Injector, ANALYZE_FOR_ENTRY_COMPONENTS, ContentChildren, Optional } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { takeRight, set, cloneDeep, keys, forEach, values, omit, has, range, flatten, isEqual, get, throttle, differenceBy, includes, xorBy, clone, sortBy } from 'lodash';
import { map, catchError, zip, debounceTime } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR, Validators, NG_VALIDATORS, FormControl, FormsModule, ReactiveFormsModule, NgControl, FormArray, FormGroup, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import 'prismjs';
import 'prismjs/components/prism-typescript';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var STALERT_SEVERITY = {
    SUCCESS: 0, WARNING: 1, ERROR: 2, INFO: 3,
};
STALERT_SEVERITY[STALERT_SEVERITY.SUCCESS] = 'SUCCESS';
STALERT_SEVERITY[STALERT_SEVERITY.WARNING] = 'WARNING';
STALERT_SEVERITY[STALERT_SEVERITY.ERROR] = 'ERROR';
STALERT_SEVERITY[STALERT_SEVERITY.INFO] = 'INFO';
var StAlertLink = /** @class */ (function () {
    function StAlertLink() {
    }
    return StAlertLink;
}());
if (false) {
    /** @type {?} */
    StAlertLink.prototype.title;
    /** @type {?} */
    StAlertLink.prototype.link;
}
var StAlert = /** @class */ (function () {
    function StAlert(id, title, message, severity, timeout, extendedTimeout, link) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.severity = severity;
        this.timeout = timeout;
        this.extendedTimeout = extendedTimeout;
        this.link = link;
        this._readed = false;
        this._opacity = 0;
        this._opacityState = new Subject();
        this._removeEvent = new Subject();
    }
    Object.defineProperty(StAlert.prototype, "opacity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opacityState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StAlert.prototype, "removeAlertEvent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._removeEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StAlert.prototype.notify = /**
     * @return {?}
     */
    function () {
        this.setVisible(true);
    };
    /**
     * @return {?}
     */
    StAlert.prototype.pauseNotify = /**
     * @return {?}
     */
    function () {
        this._opacity = 1;
        this._readed = true;
        this.clearAnimation();
        this.stopLife();
        this._opacityState.next(this._opacity);
    };
    /**
     * @return {?}
     */
    StAlert.prototype.continueNotify = /**
     * @return {?}
     */
    function () {
        this.startLife();
    };
    /**
     * @return {?}
     */
    StAlert.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.setVisible(false);
    };
    /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    StAlert.prototype.setVisible = /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    function (increase) {
        var _this = this;
        this.clearAnimation();
        this._changeVisibilityInterval = window.setInterval((/**
         * @return {?}
         */
        function () { return _this.modifyVisibility(increase); }), 50);
    };
    /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    StAlert.prototype.modifyVisibility = /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    function (increase) {
        this._opacity += increase ? 0.1 : -0.1;
        if (this._opacity >= 1 || this._opacity <= 0) {
            this.clearAnimation();
            if (increase) {
                this.startLife();
            }
            else {
                this.notifyForRemove();
            }
        }
        this._opacityState.next(this._opacity);
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.notifyForRemove = /**
     * @private
     * @return {?}
     */
    function () {
        this._opacityState.complete();
        this._removeEvent.next(this);
        this._removeEvent.complete();
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.clearAnimation = /**
     * @private
     * @return {?}
     */
    function () {
        window.clearInterval(this._changeVisibilityInterval);
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.stopLife = /**
     * @private
     * @return {?}
     */
    function () {
        window.clearTimeout(this._lifeTimeout);
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.startLife = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var timeout = this._readed ? this.extendedTimeout : this.timeout;
        this._lifeTimeout = window.setTimeout((/**
         * @return {?}
         */
        function () { return _this.setVisible(false); }), timeout);
    };
    return StAlert;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._changeVisibilityInterval;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._lifeTimeout;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._readed;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._opacity;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._opacityState;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._removeEvent;
    /** @type {?} */
    StAlert.prototype.id;
    /** @type {?} */
    StAlert.prototype.title;
    /** @type {?} */
    StAlert.prototype.message;
    /** @type {?} */
    StAlert.prototype.severity;
    /** @type {?} */
    StAlert.prototype.timeout;
    /** @type {?} */
    StAlert.prototype.extendedTimeout;
    /** @type {?} */
    StAlert.prototype.link;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StAlertsService = /** @class */ (function () {
    function StAlertsService() {
        this._alertsList = [];
        this._nextId = 0;
        this._alertsStream = new BehaviorSubject([]);
    }
    Object.defineProperty(StAlertsService.prototype, "alertList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alertsStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} title
     * @param {?} message
     * @param {?} severity
     * @param {?=} link
     * @param {?=} timeout
     * @param {?=} extendedTimeout
     * @return {?}
     */
    StAlertsService.prototype.notifyAlert = /**
     * @param {?} title
     * @param {?} message
     * @param {?} severity
     * @param {?=} link
     * @param {?=} timeout
     * @param {?=} extendedTimeout
     * @return {?}
     */
    function (title, message, severity, link, timeout, extendedTimeout) {
        var _this = this;
        timeout = timeout !== undefined ? timeout : 5000;
        extendedTimeout = extendedTimeout !== undefined ? extendedTimeout : 4000;
        /** @type {?} */
        var alert = new StAlert(this._nextId, title, message, severity, timeout, extendedTimeout, link);
        alert.removeAlertEvent.subscribe((/**
         * @param {?} alertToRemove
         * @return {?}
         */
        function (alertToRemove) { return _this.onNotifyRemove(alertToRemove); }));
        this.insertAlert(alert);
        this._nextId++;
    };
    /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    StAlertsService.prototype.insertAlert = /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
        this._alertsList.push(alert);
        this._alertsStream.next(this._alertsList);
    };
    /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    StAlertsService.prototype.onNotifyRemove = /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
        /** @type {?} */
        var pos = this._alertsList.findIndex((/**
         * @param {?} internalAlert
         * @return {?}
         */
        function (internalAlert) { return internalAlert.id === alert.id; }));
        this._alertsList.splice(pos, 1);
        this._alertsStream.next(this._alertsList);
    };
    StAlertsService.decorators = [
        { type: Injectable }
    ];
    return StAlertsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StAlertsService.prototype._alertsList;
    /**
     * @type {?}
     * @private
     */
    StAlertsService.prototype._nextId;
    /**
     * @type {?}
     * @private
     */
    StAlertsService.prototype._alertsStream;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var StModalResponse = {
    YES: 0, NO: 1, CLOSE: 2,
};
StModalResponse[StModalResponse.YES] = 'YES';
StModalResponse[StModalResponse.NO] = 'NO';
StModalResponse[StModalResponse.CLOSE] = 'CLOSE';
/** @enum {number} */
var StModalBasicType = {
    DELETE: 0, CONFIRM: 1, INFO: 2, WARNING: 3,
};
StModalBasicType[StModalBasicType.DELETE] = 'DELETE';
StModalBasicType[StModalBasicType.CONFIRM] = 'CONFIRM';
StModalBasicType[StModalBasicType.INFO] = 'INFO';
StModalBasicType[StModalBasicType.WARNING] = 'WARNING';
var StModalButton = /** @class */ (function () {
    function StModalButton() {
    }
    return StModalButton;
}());
if (false) {
    /** @type {?} */
    StModalButton.prototype.response;
    /** @type {?} */
    StModalButton.prototype.responseValue;
    /** @type {?} */
    StModalButton.prototype.leftIcon;
    /** @type {?} */
    StModalButton.prototype.rightIcon;
    /** @type {?} */
    StModalButton.prototype.classes;
    /** @type {?} */
    StModalButton.prototype.closeOnClick;
    /** @type {?} */
    StModalButton.prototype.label;
}
var StModalConfig = /** @class */ (function () {
    function StModalConfig() {
    }
    return StModalConfig;
}());
if (false) {
    /** @type {?} */
    StModalConfig.prototype.fullscreen;
    /** @type {?} */
    StModalConfig.prototype.modalTitle;
    /** @type {?} */
    StModalConfig.prototype.messageTitle;
    /** @type {?} */
    StModalConfig.prototype.message;
    /** @type {?} */
    StModalConfig.prototype.html;
    /** @type {?} */
    StModalConfig.prototype.inputs;
    /** @type {?} */
    StModalConfig.prototype.outputs;
    /** @type {?} */
    StModalConfig.prototype.buttons;
    /** @type {?} */
    StModalConfig.prototype.maxWidth;
    /** @type {?} */
    StModalConfig.prototype.minWidth;
    /** @type {?} */
    StModalConfig.prototype.empty;
    /** @type {?} */
    StModalConfig.prototype.showCloseBtn;
    /** @type {?} */
    StModalConfig.prototype.iconStatus;
}
var StModalButtonResponse = /** @class */ (function () {
    function StModalButtonResponse() {
    }
    return StModalButtonResponse;
}());
if (false) {
    /** @type {?} */
    StModalButtonResponse.prototype.response;
    /** @type {?} */
    StModalButtonResponse.prototype.close;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/window-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getWindow() {
    return window;
}
var StWindowRefService = /** @class */ (function () {
    function StWindowRefService() {
    }
    Object.defineProperty(StWindowRefService.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    StWindowRefService.decorators = [
        { type: Injectable }
    ];
    return StWindowRefService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StModalComponent = /** @class */ (function () {
    function StModalComponent(cfr, windowRef) {
        this.cfr = cfr;
        this.windowRef = windowRef;
        this.click = new EventEmitter();
        this.defaultMaxWidth = 600;
        this.defaultMinWidth = 400;
    }
    Object.defineProperty(StModalComponent.prototype, "hasIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.iconStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "isFullscreen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.fullscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.modalTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "buttons", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.buttons || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "isMessageModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.message && this.modalConfig.message.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "isComplexMessageModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.html && this.modalConfig.html.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "html", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "message", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "messageTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.messageTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "modalStyles", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var maxWidth = this.modalConfig.maxWidth || this.defaultMaxWidth;
            /** @type {?} */
            var minWidth = this.modalConfig.minWidth || this.defaultMinWidth;
            /** @type {?} */
            var width = this.getModalActualWidth(maxWidth, minWidth);
            return { 'max-width': maxWidth + "px", 'min-width': minWidth + "px", 'width': width + "px" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "emptyModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig && this.modalConfig.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "showCloseBtn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.showCloseBtn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StModalComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.click.emit({
            response: StModalResponse.CLOSE,
            close: true
        });
    };
    /** DYNAMIC MODAL BODY COMPONENT LOAD */
    /**
     * DYNAMIC MODAL BODY COMPONENT LOAD
     * @return {?}
     */
    StModalComponent.prototype.ngAfterViewInit = /**
     * DYNAMIC MODAL BODY COMPONENT LOAD
     * @return {?}
     */
    function () {
        this.target = this.emptyModal ? this.targetEmpty : this.targetContent;
        if (this.component && !(this.modalConfig.html || this.modalConfig.message)) {
            this.loadBody();
        }
        this.windowRef.nativeWindow.document.body.classList.add('st-modal-overlay');
    };
    /**
     * @return {?}
     */
    StModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.windowRef.nativeWindow.document.body.classList.remove('st-modal-overlay');
    };
    /**
     * @private
     * @param {?} maxWidth
     * @param {?=} minWidth
     * @return {?}
     */
    StModalComponent.prototype.getModalActualWidth = /**
     * @private
     * @param {?} maxWidth
     * @param {?=} minWidth
     * @return {?}
     */
    function (maxWidth, minWidth) {
        /** @type {?} */
        var screenWidth = this.windowRef.nativeWindow.screen.width;
        return screenWidth > maxWidth ? maxWidth : (screenWidth < minWidth ? minWidth : screenWidth);
    };
    /**
     * @private
     * @return {?}
     */
    StModalComponent.prototype.loadBody = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.componentRef) {
            this.target.clear();
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(this.component);
            this.componentRef = this.target.createComponent(compFactory);
            this.bindModalInputs();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StModalComponent.prototype.bindModalInputs = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.modalConfig.inputs).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.componentRef.instance[key] = ((/** @type {?} */ (_this.modalConfig.inputs)))[key];
        }));
        Object.keys(this.modalConfig.outputs).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.componentRef.instance[key].subscribe(((/** @type {?} */ (_this.modalConfig.outputs)))[key]);
        }));
        this.componentRef.changeDetectorRef.detectChanges();
    };
    StModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-modal',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-modal-container\">\n   <section *ngIf=\"emptyModal\" class=\"st-modal\" [ngClass]=\"{'st-modal-fullscreen': isFullscreen}\" [ngStyle]=\"modalStyles\" [hidden]=\"emptyModal\">\n      <div #stModalBodyEmpty></div>\n   </section>\n   <section *ngIf=\"!emptyModal\" class=\"st-modal\" [ngClass]=\"{'st-modal-fullscreen': isFullscreen}\" [ngStyle]=\"modalStyles\" [hidden]=\"!emptyModal\">\n      <div class=\"st-modal-header\">\n         <div class=\"container\">\n            <span class=\"status-icon\" [ngClass]=\"hasIcon\" *ngIf=\"hasIcon\"></span>\n            <p class=\"title\">{{title}}</p> <span class=\"icon-cross close-button\" *ngIf=\"showCloseBtn\" (click)=\"onClose()\"></span>\n\n            <st-modal-buttons *ngIf=\"isFullscreen\" [buttonConfig]=\"buttons\" [fullscreen]=\"isFullscreen\" (click)=\"click.emit($event)\"></st-modal-buttons>\n         </div>\n      </div>\n      <div class=\"st-modal-body\">\n         <div class=\"container\">\n\n            <div *ngIf=\"isMessageModal\" class=\"message\">\n               <h1 id=\"st-modal-message-plain-title\" class=\"st-modal-message-plain-title\">{{messageTitle}}</h1>\n               <p id=\"st-modal-message-plain-message\" class=\"st-modal-message-plain-message\">{{message}}</p>\n            </div>\n            <div *ngIf=\"isComplexMessageModal\" [innerHTML]=\"html\" id=\"st-modal-message-html\"></div>\n            <div #stModalBody id=\"st-modal-message-component\"></div>\n\n         </div>\n      </div>\n      <footer class=\"st-modal-footer\" *ngIf=\"buttons && buttons.length > 0\">\n         <div class=\"container\">\n            <st-modal-buttons *ngIf=\"!isFullscreen\" [buttonConfig]=\"buttons\" (click)=\"click.emit($event)\"></st-modal-buttons>\n         </div>\n      </footer>\n   </section>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-modal-container{display:flex;height:100vh;left:0;position:fixed;top:0;width:100%}.st-modal-container .st-modal{align-self:center;display:flex;flex-direction:column;margin:auto}.st-modal-container .st-modal.st-modal-fullscreen{min-height:100vh;max-height:100vh;min-width:100%;max-width:100%}.st-modal-container .st-modal .st-modal-header{display:flex;flex-direction:row;height:70px;width:100%}.st-modal-container .st-modal .st-modal-header .container{align-items:center;flex-wrap:nowrap}.st-modal-container .st-modal .st-modal-header .container .status-icon{padding-right:1.05rem}.st-modal-container .st-modal st-modal-buttons{display:flex;justify-content:flex-end;margin-left:auto}.st-modal-container .st-modal .container{min-width:auto}"]
                }] }
    ];
    /** @nocollapse */
    StModalComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: StWindowRefService }
    ]; };
    StModalComponent.propDecorators = {
        modalConfig: [{ type: Input }],
        component: [{ type: Input }],
        click: [{ type: Output }],
        targetContent: [{ type: ViewChild, args: ['stModalBody', { read: ViewContainerRef, static: false },] }],
        targetEmpty: [{ type: ViewChild, args: ['stModalBodyEmpty', { read: ViewContainerRef, static: false },] }]
    };
    return StModalComponent;
}());
if (false) {
    /** @type {?} */
    StModalComponent.prototype.modalConfig;
    /** @type {?} */
    StModalComponent.prototype.component;
    /** @type {?} */
    StModalComponent.prototype.click;
    /** @type {?} */
    StModalComponent.prototype.targetContent;
    /** @type {?} */
    StModalComponent.prototype.targetEmpty;
    /** @type {?} */
    StModalComponent.prototype.defaultMaxWidth;
    /** @type {?} */
    StModalComponent.prototype.defaultMinWidth;
    /** @type {?} */
    StModalComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    StModalComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    StModalComponent.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    StModalComponent.prototype.windowRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StModalService = /** @class */ (function () {
    function StModalService(_cfr) {
        this._cfr = _cfr;
        this._containerRef = undefined;
        this.dynamicModal = undefined;
    }
    Object.defineProperty(StModalService.prototype, "container", {
        /* External API */
        set: /* External API */
        /**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            this._containerRef = container;
        },
        enumerable: true,
        configurable: true
    });
    // - Public methods
    // - Public methods
    /**
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    StModalService.prototype.show = 
    // - Public methods
    /**
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    function (config, component) {
        /** @type {?} */
        var errors = this.canCreateModal(config, component);
        if (errors && errors.length > 0) {
            throw new Error(errors.join(' '));
        }
        this.notifyButtonInteraction = new Subject();
        this.createModal(this.createConfig(config), component);
        return this.notifyButtonInteraction.asObservable();
    };
    /**
     * @param {?} type
     * @param {?} modalTitle
     * @param {?} messageTitle
     * @param {?} message
     * @param {?} okButton
     * @param {?=} cancelButton
     * @param {?=} maxWidth
     * @param {?=} minWidth
     * @param {?=} icon
     * @return {?}
     */
    StModalService.prototype.showBasicModal = /**
     * @param {?} type
     * @param {?} modalTitle
     * @param {?} messageTitle
     * @param {?} message
     * @param {?} okButton
     * @param {?=} cancelButton
     * @param {?=} maxWidth
     * @param {?=} minWidth
     * @param {?=} icon
     * @return {?}
     */
    function (type, modalTitle, messageTitle, message, okButton, cancelButton, maxWidth, minWidth, icon) {
        if (cancelButton === void 0) { cancelButton = ''; }
        if (maxWidth === void 0) { maxWidth = 600; }
        if (minWidth === void 0) { minWidth = 400; }
        if (icon === void 0) { icon = ''; }
        /** @type {?} */
        var iconStatus;
        /** @type {?} */
        var buttons = [{
                label: okButton,
                classes: (type === StModalBasicType.DELETE) ? 'button-critical' : 'button-primary',
                responseValue: StModalResponse.YES,
                closeOnClick: true
            }];
        if (type !== StModalBasicType.INFO) {
            buttons.unshift({
                label: cancelButton,
                classes: (type === StModalBasicType.DELETE) ? 'button-borderless' : 'button-secondary',
                responseValue: StModalResponse.NO,
                closeOnClick: true
            });
        }
        switch (type) {
            case StModalBasicType.DELETE:
                iconStatus = 'icon-circle-cross';
                break;
            case StModalBasicType.WARNING:
                iconStatus = 'icon-alert';
                break;
            default:
                iconStatus = icon;
                break;
        }
        return this.show({
            fullscreen: false,
            message: message,
            messageTitle: messageTitle,
            modalTitle: modalTitle,
            buttons: buttons,
            maxWidth: maxWidth,
            minWidth: minWidth,
            iconStatus: iconStatus
        });
    };
    /**
     * @return {?}
     */
    StModalService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /* INTERNAL METHODS FOR WORK WITH MODALS */
    /* INTERNAL METHODS FOR WORK WITH MODALS */
    /**
     * @private
     * @param {?} modalConfig
     * @param {?=} component
     * @return {?}
     */
    StModalService.prototype.createModal = /* INTERNAL METHODS FOR WORK WITH MODALS */
    /**
     * @private
     * @param {?} modalConfig
     * @param {?=} component
     * @return {?}
     */
    function (modalConfig, component) {
        /** @type {?} */
        var stModalFactory = this._cfr.resolveComponentFactory(StModalComponent);
        if (stModalFactory) {
            this._containerRef.clear();
            this.dynamicModal = this._containerRef.createComponent(stModalFactory);
            this.bindVars(modalConfig, component);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StModalService.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.dynamicModal) {
            this.dynamicModal.destroy();
            this.dynamicModal = undefined;
            this.notifyButtonInteraction.next(StModalResponse.CLOSE);
            this.notifyButtonInteraction.complete();
        }
    };
    /**
     * @private
     * @param {?} modalConfig
     * @param {?} component
     * @return {?}
     */
    StModalService.prototype.bindVars = /**
     * @private
     * @param {?} modalConfig
     * @param {?} component
     * @return {?}
     */
    function (modalConfig, component) {
        this.dynamicModal.instance.component = component;
        this.dynamicModal.instance.click.subscribe(this.notify.bind(this));
        this.dynamicModal.instance.modalConfig = modalConfig;
        this.dynamicModal.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @param {?} buttonResponse
     * @return {?}
     */
    StModalService.prototype.notify = /**
     * @private
     * @param {?} buttonResponse
     * @return {?}
     */
    function (buttonResponse) {
        this.notifyButtonInteraction.next(buttonResponse.response);
        if (buttonResponse.close) {
            this.close();
        }
    };
    /**
     * @private
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    StModalService.prototype.canCreateModal = /**
     * @private
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    function (config, component) {
        /** @type {?} */
        var errors = [];
        if (!this._containerRef) {
            errors.push("[ERROR]: StModalService => Cant find container, are you sure you declarate in MAIN APP component in html and typescript?");
        }
        if (this.dynamicModal !== undefined) {
            errors.push("[ERROR]: StModalService => Can't create modal beacause already exists one. Are you sure that you call close method?)");
        }
        if (!component && !config.message && !config.html) {
            errors.push("[ERROR]: StModalService => Can't find message, html or component to show in modal");
        }
        return errors;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    StModalService.prototype.createConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var defaultConfig = {
            fullscreen: false,
            inputs: {},
            outputs: {},
            modalTitle: 'Default title',
            messageTitle: 'Default subtitle',
            buttons: [],
            message: undefined,
            html: undefined,
            maxWidth: undefined,
            minWidth: undefined,
            empty: false
        };
        /** @type {?} */
        var checkedConfig = Object.assign({}, defaultConfig, config);
        checkedConfig.buttons = this.checkButtons(checkedConfig.buttons);
        return checkedConfig;
    };
    /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    StModalService.prototype.checkButtons = /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    function (buttons) {
        return buttons.map((/**
         * @param {?} button
         * @return {?}
         */
        function (button) { return Object.assign({}, { label: 'Button', closeOnClick: false }, button); }));
    };
    StModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StModalService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return StModalService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype._containerRef;
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype.dynamicModal;
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype.notifyButtonInteraction;
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype._cfr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPaginationService = /** @class */ (function () {
    function StPaginationService() {
    }
    /**
     * @param {?} items
     * @param {?} currentPage
     * @param {?} perPage
     * @return {?}
     */
    StPaginationService.prototype.newPage = /**
     * @param {?} items
     * @param {?} currentPage
     * @param {?} perPage
     * @return {?}
     */
    function (items, currentPage, perPage) {
        if (currentPage === 1) {
            this.initItem = 0;
        }
        else {
            this.initItem = perPage * (currentPage - 1);
        }
        if (perPage >= items.length) {
            return Object.assign([], items);
        }
        if (this.initItem >= items.length) {
            this.initItem = items.length - (perPage + 1);
            return Object.assign([], takeRight(items, perPage));
        }
        this.lastItem = (this.initItem + perPage);
        return Object.assign([], items.slice(this.initItem, this.lastItem));
    };
    StPaginationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StPaginationService.ctorParameters = function () { return []; };
    return StPaginationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StPaginationService.prototype.initItem;
    /**
     * @type {?}
     * @private
     */
    StPaginationService.prototype.lastItem;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/egeo-resolver/egeo-resolve.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EgeoResolveService = /** @class */ (function () {
    function EgeoResolveService() {
    }
    /**
     * @param {?} object
     * @param {?} key
     * @param {?=} searchedValue
     * @return {?}
     */
    EgeoResolveService.prototype.getKeys = /**
     * @param {?} object
     * @param {?} key
     * @param {?=} searchedValue
     * @return {?}
     */
    function (object, key, searchedValue) {
        return this.searchInDeep(object, key, searchedValue);
    };
    /**
     * @param {?} object
     * @param {?} resolved
     * @return {?}
     */
    EgeoResolveService.prototype.setKeys = /**
     * @param {?} object
     * @param {?} resolved
     * @return {?}
     */
    function (object, resolved) {
        resolved.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return set(object, element.path, element.resolved); }));
    };
    /**
     * @param {?} object
     * @param {?} translateService
     * @return {?}
     */
    EgeoResolveService.prototype.translate = /**
     * @param {?} object
     * @param {?} translateService
     * @return {?}
     */
    function (object, translateService) {
        var _this = this;
        /** @type {?} */
        var keys = this.getKeys(object, 'translate');
        // If not found translateable elements, return the same because if not, translate service broke on try to translate an empty array.
        if (keys && keys.length > 0) {
            /** @type {?} */
            var toTranslate = this.extractTranslationKeys(keys);
            return translateService.get(toTranslate).pipe(// return object translation
            map((/**
             * @param {?} translation
             * @return {?}
             */
            function (translation) { return _this.remapObjectWithTranslations(translation, keys, object); })));
        }
        else {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                observer.next(object);
                observer.complete();
            }));
        }
    };
    /**
     * @param {?} keys
     * @param {?} translateService
     * @return {?}
     */
    EgeoResolveService.prototype.translateArrayOfKeys = /**
     * @param {?} keys
     * @param {?} translateService
     * @return {?}
     */
    function (keys, translateService) {
        var _this = this;
        return translateService.get(keys).pipe(map((/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) { return _this.remapArrayWithTranslations(translation, keys); })));
    };
    /**
     * @private
     * @param {?} translations
     * @param {?} originalArray
     * @return {?}
     */
    EgeoResolveService.prototype.remapArrayWithTranslations = /**
     * @private
     * @param {?} translations
     * @param {?} originalArray
     * @return {?}
     */
    function (translations, originalArray) {
        return originalArray.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return translations[key] ? translations[key] : key; }));
    };
    /**
     * @private
     * @param {?} translations
     * @param {?} resolverKeys
     * @param {?} object
     * @return {?}
     */
    EgeoResolveService.prototype.remapObjectWithTranslations = /**
     * @private
     * @param {?} translations
     * @param {?} resolverKeys
     * @param {?} object
     * @return {?}
     */
    function (translations, resolverKeys, object) {
        var _this = this;
        /** @type {?} */
        var newObj = cloneDeep(object);
        if (translations || keys(translations).length > 0) {
            forEach(resolverKeys, (/**
             * @param {?} resolvKey
             * @return {?}
             */
            function (resolvKey) {
                set(newObj, resolvKey.path, _this.getTranslationFromTranslatedKey(translations, resolvKey));
            }));
        }
        return newObj;
    };
    /**
     * @private
     * @param {?} translations
     * @param {?} resolverKey
     * @return {?}
     */
    EgeoResolveService.prototype.getTranslationFromTranslatedKey = /**
     * @private
     * @param {?} translations
     * @param {?} resolverKey
     * @return {?}
     */
    function (translations, resolverKey) {
        /** @type {?} */
        var translationElementKey = resolverKey && resolverKey.toResolve && resolverKey.toResolve.key ? resolverKey.toResolve.key : '';
        return translations[translationElementKey] ? translations[translationElementKey] : translationElementKey;
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    EgeoResolveService.prototype.extractTranslationKeys = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return list.map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return (/** @type {?} */ (values(omit(element.toResolve, 'translate'))[0])); }));
    };
    /**
     * @private
     * @param {?} object
     * @param {?} key
     * @param {?} searchedValue
     * @param {?=} path
     * @return {?}
     */
    EgeoResolveService.prototype.searchInDeep = /**
     * @private
     * @param {?} object
     * @param {?} key
     * @param {?} searchedValue
     * @param {?=} path
     * @return {?}
     */
    function (object, key, searchedValue, path) {
        var _this = this;
        if (path === void 0) { path = ''; }
        /** @type {?} */
        var result = [];
        if (has(object, key)) { // If we found key, return object.
            if (searchedValue !== undefined) {
                if (object[key] === searchedValue) {
                    result.push({ path: path, toResolve: object });
                }
            }
            else {
                result.push({ path: path, toResolve: object });
            }
        }
        /** @type {?} */
        var i = 0;
        forEach(object, (/**
         * @param {?} value
         * @param {?} objKey
         * @return {?}
         */
        function (value, objKey) {
            if (typeof value === 'object') {
                result = __spread(result, _this.searchInDeep(value, key, searchedValue, _this.getPath(path, object, i, objKey)));
            }
            i++;
        }));
        return result;
    };
    // Build path for future replace
    // Build path for future replace
    /**
     * @private
     * @param {?} actualPath
     * @param {?} obj
     * @param {?} pos
     * @param {?} key
     * @return {?}
     */
    EgeoResolveService.prototype.getPath = 
    // Build path for future replace
    /**
     * @private
     * @param {?} actualPath
     * @param {?} obj
     * @param {?} pos
     * @param {?} key
     * @return {?}
     */
    function (actualPath, obj, pos, key) {
        if (this.isArray(obj)) {
            actualPath = actualPath + "[" + pos + "]";
        }
        else {
            actualPath = actualPath === '' ? key : actualPath + "." + key;
        }
        return actualPath;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    EgeoResolveService.prototype.isArray = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    };
    EgeoResolveService.decorators = [
        { type: Injectable }
    ];
    return EgeoResolveService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/unique-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectOneDispatcher = /** @class */ (function () {
    function SelectOneDispatcher() {
        this.listeners = [];
    }
    /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    SelectOneDispatcher.prototype.notify = /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    function (id, name) {
        var e_1, _a;
        try {
            for (var _b = __values(this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listener = _c.value;
                listener(id, name);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} listener
     * @return {?}
     */
    SelectOneDispatcher.prototype.listen = /**
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        this.listeners.push(listener);
    };
    SelectOneDispatcher.decorators = [
        { type: Injectable }
    ];
    return SelectOneDispatcher;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOneDispatcher.prototype.listeners;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/search-filter/search-filter.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFilterList = /** @class */ (function () {
    function StFilterList() {
    }
    /**
     * @param {?} list
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    StFilterList.prototype.transform = /**
     * @param {?} list
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    function (list, field, search) {
        var _this = this;
        this.checkParams(field);
        if (!search) {
            return list;
        }
        if (list && list.length > 0 && field) {
            return list.filter((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return _this.contains(element, field, search); }));
        }
        else {
            return [];
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    StFilterList.prototype.contains = /**
     * @private
     * @param {?} element
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    function (element, field, search) {
        if (this.isDefined(element) && this.isString(field) && this.isString(search) && this.isString(element[field])) {
            return element[field].toUpperCase().search(search.toUpperCase()) > -1;
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StFilterList.prototype.isDefined = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && value !== null;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StFilterList.prototype.isString = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.isDefined(value) && typeof value === 'string';
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    StFilterList.prototype.checkParams = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!this.isString(field)) {
            throw new Error('PIPE: stFilterList: "field" is a required and string parameter');
        }
    };
    StFilterList.decorators = [
        { type: Pipe, args: [{
                    name: 'stFilterList'
                },] }
    ];
    return StFilterList;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/st-object-to-array/st-object-to-array.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StObjectToArrayPipe = /** @class */ (function () {
    function StObjectToArrayPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    StObjectToArrayPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ({ key: key, value: obj[key] }); })) : [];
    };
    StObjectToArrayPipe.decorators = [
        { type: Pipe, args: [{ 'name': 'stObjectToArray' },] }
    ];
    return StObjectToArrayPipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StFilterList, StObjectToArrayPipe],
                    exports: [StFilterList, StObjectToArrayPipe]
                },] }
    ];
    return PipesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StAlertsComponent = /** @class */ (function () {
    function StAlertsComponent(alertService) {
        this.alertService = alertService;
        /**
         * \@Input {boolean} [showInConsole=false] Display logs in console
         */
        this.showInConsole = false;
        /**
         * \@Input {string} [qaTag=] Component qa tag
         */
        this.qaTag = 'st-alert-manager';
    }
    StAlertsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-alerts',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div [attr.id]='qaTag' class=\"st-alerts sth-alerts\">\n   <st-alert-box class=\"st-alert-box\" *ngFor=\"let alert of (alertService.alertList | async)\" [alert]=\"alert\" [showInConsole]=\"showInConsole\"></st-alert-box>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-alert-box{margin-top:15px;display:block}.st-alerts{width:288px;position:fixed;right:15px;top:0}"]
                }] }
    ];
    /** @nocollapse */
    StAlertsComponent.ctorParameters = function () { return [
        { type: StAlertsService }
    ]; };
    StAlertsComponent.propDecorators = {
        showInConsole: [{ type: Input }],
        qaTag: [{ type: Input }]
    };
    return StAlertsComponent;
}());
if (false) {
    /**
     * \@Input {boolean} [showInConsole=false] Display logs in console
     * @type {?}
     */
    StAlertsComponent.prototype.showInConsole;
    /**
     * \@Input {string} [qaTag=] Component qa tag
     * @type {?}
     */
    StAlertsComponent.prototype.qaTag;
    /** @type {?} */
    StAlertsComponent.prototype.alertService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/alert-box/st-alert-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StAlertBoxComponent = /** @class */ (function () {
    function StAlertBoxComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [showInConsole=false] Display logs in console
         */
        this.showInConsole = false;
        /**
         * \@Output {StAlertLink} [clickLink=] Event emitted when link is clicked
         */
        this.clickLink = new EventEmitter();
        /**
         * \@Output {boolean} [close=] Event emitted when alert is closed
         */
        this.close = new EventEmitter();
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alert.opacity.subscribe((/**
         * @param {?} opacity
         * @return {?}
         */
        function (opacity) { return _this.changeOpacity(opacity); }));
        this.alert.notify();
        if (this.showInConsole) {
            this.notifyConsole();
        }
        this.severityColorValue = this.getSeverityColor();
        this.iconValue = this.getIcon();
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.alert.cancel();
        this.close.emit(true);
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.getIcon = /**
     * @return {?}
     */
    function () {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR: return 'icon-circle-alert';
            case STALERT_SEVERITY.WARNING: return 'icon-alert';
            case STALERT_SEVERITY.SUCCESS: return 'icon-circle-check';
            case STALERT_SEVERITY.INFO: return 'icon-info';
            default: return '';
        }
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.getSeverityColor = /**
     * @return {?}
     */
    function () {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR: return 'sth-alert-box-error';
            case STALERT_SEVERITY.WARNING: return 'sth-alert-box-warning';
            case STALERT_SEVERITY.SUCCESS: return 'sth-alert-box-success';
            case STALERT_SEVERITY.INFO: return 'sth-alert-box-info';
            default: return '';
        }
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.goTo = /**
     * @return {?}
     */
    function () {
        this.clickLink.emit(this.alert.link);
    };
    /**
     * @param {?} opacity
     * @return {?}
     */
    StAlertBoxComponent.prototype.changeOpacity = /**
     * @param {?} opacity
     * @return {?}
     */
    function (opacity) {
        this.opacity = opacity;
        this._cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    StAlertBoxComponent.prototype.notifyConsole = /**
     * @private
     * @return {?}
     */
    function () {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR:
                console.error("ERROR-" + this.alert.title + ": " + this.alert.message);
                break;
            case STALERT_SEVERITY.WARNING:
                console.warn("WARNING-" + this.alert.title + ": " + this.alert.message);
                break;
            case STALERT_SEVERITY.SUCCESS:
                console.log("SUCCESS-" + this.alert.title + ": " + this.alert.message);
                break;
            default:
                console.error("ERROR: severity not found for " + this.alert.title + ": " + this.alert.message);
                break;
        }
    };
    StAlertBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-alert-box',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"sth-alert-box\" [ngClass]=\"severityColorValue\" [ngStyle]=\"{opacity: opacity}\">\n   <div class=\"sth-alert-box-content\">\n      <div class=\"sth-alert-box-close-button\">\n         <i (click)=\"closeAlert()\" class=\"icon-cross\"></i>\n      </div>\n      <header class=\"sth-alert-box-header\">\n         <i class=\"status-icon\" [ngClass]=\"iconValue\"></i>\n         <span>{{alert.title}}</span>\n      </header>\n      <div class=\"sth-alert-box-body\">\n         <p>{{alert.message}}</p>\n      </div>\n   </div>\n   <footer *ngIf=\"alert.link\" class=\"sth-alert-box-footer\">\n      <a (click)=\"goTo()\">{{alert.link.title}}</a>\n   </footer>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StAlertBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StAlertBoxComponent.propDecorators = {
        alert: [{ type: Input }],
        showInConsole: [{ type: Input }],
        clickLink: [{ type: Output }],
        close: [{ type: Output }]
    };
    return StAlertBoxComponent;
}());
if (false) {
    /**
     * \@Input {StAlert} [alert=] Data of the alert
     * @type {?}
     */
    StAlertBoxComponent.prototype.alert;
    /**
     * \@Input {boolean} [showInConsole=false] Display logs in console
     * @type {?}
     */
    StAlertBoxComponent.prototype.showInConsole;
    /**
     * \@Output {StAlertLink} [clickLink=] Event emitted when link is clicked
     * @type {?}
     */
    StAlertBoxComponent.prototype.clickLink;
    /**
     * \@Output {boolean} [close=] Event emitted when alert is closed
     * @type {?}
     */
    StAlertBoxComponent.prototype.close;
    /** @type {?} */
    StAlertBoxComponent.prototype.iconValue;
    /** @type {?} */
    StAlertBoxComponent.prototype.opacity;
    /** @type {?} */
    StAlertBoxComponent.prototype.severityColorValue;
    /**
     * @type {?}
     * @private
     */
    StAlertBoxComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/alert-box/st-alert-box.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StAlertBoxModule = /** @class */ (function () {
    function StAlertBoxModule() {
    }
    StAlertBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StAlertBoxComponent],
                    exports: [StAlertBoxComponent]
                },] }
    ];
    return StAlertBoxModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StAlertsModule = /** @class */ (function () {
    function StAlertsModule() {
    }
    StAlertsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StAlertBoxModule],
                    declarations: [StAlertsComponent],
                    exports: [StAlertsComponent]
                },] }
    ];
    return StAlertsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop/st-pop.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var StPopPlacement = {
    TOP: 0, TOP_START: 1, TOP_END: 2, BOTTOM: 3, BOTTOM_START: 4, BOTTOM_END: 5,
};
StPopPlacement[StPopPlacement.TOP] = 'TOP';
StPopPlacement[StPopPlacement.TOP_START] = 'TOP_START';
StPopPlacement[StPopPlacement.TOP_END] = 'TOP_END';
StPopPlacement[StPopPlacement.BOTTOM] = 'BOTTOM';
StPopPlacement[StPopPlacement.BOTTOM_START] = 'BOTTOM_START';
StPopPlacement[StPopPlacement.BOTTOM_END] = 'BOTTOM_END';
var StPopOffset = /** @class */ (function () {
    function StPopOffset() {
        this.x = 0;
        this.y = 0;
    }
    return StPopOffset;
}());
if (false) {
    /** @type {?} */
    StPopOffset.prototype.x;
    /** @type {?} */
    StPopOffset.prototype.y;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble/st-bubble.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Bubble]
 *
 * This component displays a text inside a floating box
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-bubble [qaTag]="qaTag" [text]="text" [hidden]="hidden">
 *    </st-bubble>
 * ```
 */
var StBubbleComponent = /** @class */ (function () {
    function StBubbleComponent() {
        /**
         * \@input {boolean} [hidden=false] Show or hide the bubble
         */
        this.hidden = false;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 17 };
        /**
         * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
         */
        this.showArrow = true;
        /**
         * \@Input {boolean} [animation=true] when true, bubble is displayed with an animation
         */
        this.animation = true;
        /**
         * \@Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right
         */
        this.openToLeft = true;
        /**
         * \@Input {boolean} [small=false] when true, bubble is displayed with theme small
         */
        this.small = false;
        this.placement = StPopPlacement.BOTTOM;
    }
    StBubbleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-bubble',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n\n<st-pop [hidden]=\"hidden\" [placement]=\"placement\" [offset]=\"offset\" class=\"st-bubble\" [openToLeft]=\"openToLeft\">\n   <div pop-button>\n      <ng-content select=[bubble-button]></ng-content>\n   </div>\n   <div pop-content [style.z-index]=\"9\" class=\"st-bubble__content\"\n        [ngClass]=\"{\n        'st-bubble__content--animated': animation,\n        'st-bubble__content--small': small,\n        'st-bubble__content--with-arrow': showArrow,\n        'st-bubble__content--to-left': openToLeft,\n        'st-bubble__content--to-right': !openToLeft,\n        'st-bubble__content--show': !hidden,\n        'st-bubble__content--cut-words': maxWidth}\"\n        [style.min-width]=\"minWidth\"\n        [style.max-width]=\"maxWidth\">\n      <span class=\"text\"> {{text}} </span>\n   </div>\n</st-pop>\n",
                    styles: ["@charset \"UTF-8\";.content{display:inline-block}.arrow{border-radius:2px;bottom:47px;float:right;height:13px;margin-right:15px;position:relative;transform:rotate(-45deg);width:13px}.text{display:block;text-align:center}"]
                }] }
    ];
    StBubbleComponent.propDecorators = {
        text: [{ type: Input }],
        hidden: [{ type: Input }],
        offset: [{ type: Input }],
        showArrow: [{ type: Input }],
        animation: [{ type: Input }],
        openToLeft: [{ type: Input }],
        small: [{ type: Input }],
        minWidth: [{ type: Input }],
        maxWidth: [{ type: Input }]
    };
    return StBubbleComponent;
}());
if (false) {
    /**
     * \@Input {string} [text=] Text of the bubble
     * @type {?}
     */
    StBubbleComponent.prototype.text;
    /**
     * \@input {boolean} [hidden=false] Show or hide the bubble
     * @type {?}
     */
    StBubbleComponent.prototype.hidden;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
     * @type {?}
     */
    StBubbleComponent.prototype.offset;
    /**
     * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
     * @type {?}
     */
    StBubbleComponent.prototype.showArrow;
    /**
     * \@Input {boolean} [animation=true] when true, bubble is displayed with an animation
     * @type {?}
     */
    StBubbleComponent.prototype.animation;
    /**
     * \@Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right
     * @type {?}
     */
    StBubbleComponent.prototype.openToLeft;
    /**
     * \@Input {boolean} [small=false] when true, bubble is displayed with theme small
     * @type {?}
     */
    StBubbleComponent.prototype.small;
    /**
     * \@Input {string} [minWidth=] min width for bubble
     * @type {?}
     */
    StBubbleComponent.prototype.minWidth;
    /**
     * \@Input {string} [maxWidth=] max width for bubble
     * @type {?}
     */
    StBubbleComponent.prototype.maxWidth;
    /** @type {?} */
    StBubbleComponent.prototype.placement;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop/st-pop.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Pop]
 *
 * The pop is a component for manage floating elements like popups or dropdown-menu. This element need two element inside,
 * a button element that launch popper and a content element that whose position will be relativo to button element.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-pop [hidden]="false" placement="bottom">
 *    <div pop-button>Button</div>
 *    <div pop-content>Content</div>
 * </st-pop>
 * ```
 */
var StPopComponent = /** @class */ (function () {
    function StPopComponent(_el, _cd) {
        this._el = _el;
        this._cd = _cd;
        /**
         * \@Input {StPopPlacement} [placement=StPopPlacement.BOTOM_START] Define position of content relative to button
         */
        this.placement = StPopPlacement.BOTTOM_START;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 0 };
        /**
         * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
         */
        this.openToLeft = false;
        this._hidden = true;
    }
    Object.defineProperty(StPopComponent.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        /** @Input {boleean} [hidden=true]  TRUE: show pop content, FALSE: hide pop content  */
        set: /**
         * \@Input {boleean} [hidden=true]  TRUE: show pop content, FALSE: hide pop content
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!value) {
                    _this.calculatePosition();
                }
                _this._hidden = value;
                _this._cd.markForCheck();
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StPopComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calculatePosition();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StPopComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculatePosition();
    };
    /**
     * @return {?}
     */
    StPopComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        this.calculatePosition();
    };
    /**
     * @private
     * @return {?}
     */
    StPopComponent.prototype.getContentElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this._el.nativeElement.querySelector('[pop-content]');
    };
    /**
     * @private
     * @return {?}
     */
    StPopComponent.prototype.calculatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var buttonParentEl = this._el.nativeElement.querySelector('[pop-button]');
        /** @type {?} */
        var contentEl = this.getContentElement();
        /** @type {?} */
        var buttonEl = buttonParentEl && buttonParentEl.firstElementChild ?
            buttonParentEl.firstElementChild : undefined;
        if (buttonEl) {
            /** @type {?} */
            var coords = this.getCoords(buttonEl);
            contentEl.style.position = 'absolute';
            contentEl.style.transform = "translate3d(" + coords.x + "px, " + coords.y + "px, " + coords.z + "px)";
        }
    };
    /**
     * @private
     * @param {?} buttonEl
     * @return {?}
     */
    StPopComponent.prototype.getCoords = /**
     * @private
     * @param {?} buttonEl
     * @return {?}
     */
    function (buttonEl) {
        /** @type {?} */
        var coords = { x: 0, y: 0, z: 0 };
        /** @type {?} */
        var direction = this.openToLeft ? this.getContentElement().getBoundingClientRect().width : 0;
        /** @type {?} */
        var clientRect = buttonEl.getBoundingClientRect();
        switch (this.placement) {
            case StPopPlacement.BOTTOM:
                coords.x = clientRect.width / 2;
                break;
            case StPopPlacement.BOTTOM_END:
                coords.x = clientRect.width;
                break;
            case StPopPlacement.TOP:
                coords.y = clientRect.height * -1;
                coords.x = clientRect.width / 2;
                break;
            case StPopPlacement.TOP_START:
                coords.y = clientRect.height * -1;
                break;
            case StPopPlacement.TOP_END:
                coords.y = clientRect.height * -1;
                coords.x = clientRect.width;
                break;
            default:
                break;
        }
        coords.x = Math.ceil(coords.x + this.offset.x - direction);
        coords.y = Math.ceil(coords.y + this.offset.y);
        return coords;
    };
    StPopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-pop',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content select=[pop-button]></ng-content>\n<div [style.visibility]=\"hidden ? 'hidden' : 'visible'\" class=\"content\">\n   <ng-content select=[pop-content]></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.content{height:0}"]
                }] }
    ];
    /** @nocollapse */
    StPopComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StPopComponent.propDecorators = {
        placement: [{ type: Input }],
        offset: [{ type: Input }],
        openToLeft: [{ type: Input }],
        hidden: [{ type: Input }],
        updateWidth: [{ type: HostListener, args: ['window:load',] }]
    };
    return StPopComponent;
}());
if (false) {
    /**
     * \@Input {StPopPlacement} [placement=StPopPlacement.BOTOM_START] Define position of content relative to button
     * @type {?}
     */
    StPopComponent.prototype.placement;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
     * @type {?}
     */
    StPopComponent.prototype.offset;
    /**
     * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
     * @type {?}
     */
    StPopComponent.prototype.openToLeft;
    /**
     * @type {?}
     * @private
     */
    StPopComponent.prototype._hidden;
    /**
     * @type {?}
     * @private
     */
    StPopComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StPopComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop/st-pop.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPopModule = /** @class */ (function () {
    function StPopModule() {
    }
    StPopModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [StPopComponent],
                    declarations: [StPopComponent],
                    providers: [StWindowRefService]
                },] }
    ];
    return StPopModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble/st-bubble.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StBubbleModule = /** @class */ (function () {
    function StBubbleModule() {
    }
    StBubbleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StPopModule],
                    declarations: [StBubbleComponent],
                    exports: [StBubbleComponent]
                },] }
    ];
    return StBubbleModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs.interface.ts
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
var StBreadCrumbItem = /** @class */ (function () {
    function StBreadCrumbItem() {
    }
    return StBreadCrumbItem;
}());
if (false) {
    /** @type {?} */
    StBreadCrumbItem.prototype.id;
    /** @type {?} */
    StBreadCrumbItem.prototype.label;
    /** @type {?} */
    StBreadCrumbItem.prototype.icon;
}
/** @enum {string} */
var StBreadCrumbMode = {
    DEFAULT: (/** @type {?} */ ('default')), TITLE: (/** @type {?} */ ('title')),
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Breadcrumbs]
 *
 * The breadcrumb is s a type of secondary navigation
 * element that shows a trail for allowing users to keep track of their location.
 *
 * \@model
 *
 *   [Id, optional label and icon of an option] {./st-breadcrumbs.interface.ts#StBreadCrumbItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-breadcrumbs
 *    [options]="options"
 *    (select)="onSelect($event)"
 *    qaTag="breadcrumbs">
 * </st-breadcrumbs>
 * ```
 *
 */
var StBreadCrumbsComponent = /** @class */ (function () {
    function StBreadCrumbsComponent() {
        /**
         * \@Input {StBreadCrumbItem[]} [options=\[\]] List of navigation parts for show in breadcrumb
         */
        this.options = [];
        /**
         * \@Input {number} [elementsToShow=5] Max number of elements to show.
         */
        this.elementsToShow = 5;
        /**
         * \@Input {StBreadCrumbMode} [mode=StBreadCrumbMode.DEFAULT] Visualization mode
         */
        this.mode = StBreadCrumbMode.DEFAULT;
        /**
         * \@Output {number} [select] Notify any item selection
         */
        this.select = new EventEmitter();
        this.indexArray = [];
        this._initPos = 0;
    }
    /**
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.calculateStart(this.options, this.elementsToShow);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.options || changes.elementsToShow) {
            /** @type {?} */
            var currElsToShow = changes.elementsToShow ? changes.elementsToShow.currentValue : this.elementsToShow;
            /** @type {?} */
            var currOptions = changes.options ? changes.options.currentValue : this.options;
            this.calculateStart(currOptions, currElsToShow);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.onSelect = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var toEmit = index > -1 ? index : this._initPos - 1;
        if (toEmit < (this.options.length - 1)) {
            this.select.emit(toEmit);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.getId = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.options[index].id;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.getLabel = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index > -1 ? this.options[index].label : '...';
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.getIcon = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index > -1 ? this.options[index].icon : '';
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.hasIcon = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index > -1 && Boolean(this.options[index].icon);
    };
    /**
     * @private
     * @param {?} options
     * @param {?} elementsToShow
     * @return {?}
     */
    StBreadCrumbsComponent.prototype.calculateStart = /**
     * @private
     * @param {?} options
     * @param {?} elementsToShow
     * @return {?}
     */
    function (options, elementsToShow) {
        if (options.length > elementsToShow) {
            this._initPos = options.length - elementsToShow + 1; // use +1 because first element is fixed
            this.indexArray = range(this._initPos, this._initPos + elementsToShow - 1);
            this.indexArray.unshift(-1); // Add dots fixed element
            this.indexArray.unshift(0); // Add first fixed element
        }
        else {
            this._initPos = 0;
            this.indexArray = range(0, options.length);
        }
    };
    StBreadCrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-breadcrumbs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ul class=\"st-breadcrumbs {{mode}}-mode\" [attr.id]=\"qaTag\">\n   <ng-content select=\"st-breadcrumbs-item\"></ng-content>\n   <ng-container *ngIf=\"options.length\">\n      <st-breadcrumbs-item\n         class=\"sth-breadcrumbs__item-container\"\n         *ngFor=\"let idx of indexArray; let last=last\"\n         (click)=\"onSelect(idx)\"\n         [active]=\"last\"\n         [qaTag]=\"qaTag + '-' + idx\">\n         <i *ngIf=\"hasIcon(idx)\" [ngClass]=\"getIcon(idx)\"></i>\n         <span>{{getLabel(idx)}}</span>\n      </st-breadcrumbs-item>\n   </ng-container>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";ul{text-overflow:ellipsis;overflow:hidden;list-style:none;margin:0;padding:0}"]
                }] }
    ];
    StBreadCrumbsComponent.propDecorators = {
        options: [{ type: Input }],
        elementsToShow: [{ type: Input }],
        mode: [{ type: Input }],
        qaTag: [{ type: Input }],
        select: [{ type: Output }]
    };
    return StBreadCrumbsComponent;
}());
if (false) {
    /**
     * \@Input {StBreadCrumbItem[]} [options=\[\]] List of navigation parts for show in breadcrumb
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.options;
    /**
     * \@Input {number} [elementsToShow=5] Max number of elements to show.
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.elementsToShow;
    /**
     * \@Input {StBreadCrumbMode} [mode=StBreadCrumbMode.DEFAULT] Visualization mode
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.mode;
    /**
     * \@Input {string} [qaTag=''] Id value for qa test
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.qaTag;
    /**
     * \@Output {number} [select] Notify any item selection
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.select;
    /** @type {?} */
    StBreadCrumbsComponent.prototype.indexArray;
    /**
     * @type {?}
     * @private
     */
    StBreadCrumbsComponent.prototype._initPos;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs-item/st-breadcrumbs-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StBreadcrumbItemComponent = /** @class */ (function () {
    function StBreadcrumbItemComponent() {
    }
    Object.defineProperty(StBreadcrumbItemComponent.prototype, "qaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this._qaTag.replace(/ /g, '-');
        },
        set: /**
         * @param {?} qaTag
         * @return {?}
         */
        function (qaTag) {
            this._qaTag = qaTag;
        },
        enumerable: true,
        configurable: true
    });
    StBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-breadcrumbs-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<li class=\"st-breadcrumbs__item\" [ngClass]=\"{'last': active}\" [attr.id]=\"qaTag\">\n    <span class=\"st-breadcrumbs__item--text\">\n      <ng-content select=\"i\"></ng-content>\n      <ng-content select=\"span\"></ng-content>\n   </span>\n</li>\n",
                    styles: ["@charset \"UTF-8\";.st-breadcrumbs__item{display:inline}.st-breadcrumbs__item--text{cursor:pointer}.last .st-breadcrumbs__item--text{cursor:default;background-color:transparent}"]
                }] }
    ];
    StBreadcrumbItemComponent.propDecorators = {
        qaTag: [{ type: Input }],
        active: [{ type: Input }]
    };
    return StBreadcrumbItemComponent;
}());
if (false) {
    /** @type {?} */
    StBreadcrumbItemComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    StBreadcrumbItemComponent.prototype._qaTag;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StBreadcrumbsModule = /** @class */ (function () {
    function StBreadcrumbsModule() {
    }
    StBreadcrumbsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [StBreadCrumbsComponent, StBreadcrumbItemComponent],
                    declarations: [StBreadCrumbsComponent, StBreadcrumbItemComponent]
                },] }
    ];
    return StBreadcrumbsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-checkbox/st-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHECKBOX_CONTROL_ACCESSOR = {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tooltip/st-tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTooltipComponent = /** @class */ (function () {
    function StTooltipComponent(_el, _cd) {
        this._el = _el;
        this._cd = _cd;
        this._onClick = this._onClick.bind(this);
    }
    Object.defineProperty(StTooltipComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = value;
            if (value) {
                this._el.nativeElement.setAttribute('title', value);
            }
            else {
                this._el.nativeElement.removeAttribute('title');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.title = this._el.nativeElement.title;
        this._checkTooltipState();
    };
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.removeEventListener('click', this._onClick);
    };
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._el) {
            this._checkTooltipState();
        }
    };
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.showOnClick && this.title) {
            this.classTooltipOn = true;
            document.addEventListener('click', this._onClick);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StTooltipComponent.prototype._checkTooltipState = /**
     * @private
     * @return {?}
     */
    function () {
        this.classTooltip = this.title && this.title.length && !this.showOnClick;
        this.classTooltipOn = false;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    StTooltipComponent.prototype._onClick = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._el.nativeElement.contains(event.target)) {
            this.classTooltipOn = false;
            document.removeEventListener('click', this._onClick);
            this._cd.markForCheck();
        }
    };
    StTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-tooltip]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span title=\"\"><ng-content></ng-content></span>\n",
                    styles: ["@charset \"UTF-8\";:host.st-tooltip,:host.st-tooltip-on{position:relative}:host.st-tooltip-on:before,:host.st-tooltip:before{content:attr(title)}:host.st-tooltip-on:after,:host.st-tooltip:after{content:\" \"}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:after,:host.st-tooltip:before{pointer-events:none;position:absolute}:host.st-tooltip:after,:host.st-tooltip:before{opacity:0;visibility:hidden}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:hover:after,:host.st-tooltip:hover:before{opacity:1;visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    StTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StTooltipComponent.propDecorators = {
        classTooltip: [{ type: HostBinding, args: ['class.st-tooltip',] }],
        classTooltipOn: [{ type: HostBinding, args: ['class.st-tooltip-on',] }],
        showOnClick: [{ type: Input }],
        title: [{ type: Input, args: ['attr.title',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return StTooltipComponent;
}());
if (false) {
    /** @type {?} */
    StTooltipComponent.prototype.classTooltip;
    /** @type {?} */
    StTooltipComponent.prototype.classTooltipOn;
    /** @type {?} */
    StTooltipComponent.prototype.showOnClick;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._title;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-label/st-label.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StLabelComponent = /** @class */ (function (_super) {
    __extends(StLabelComponent, _super);
    function StLabelComponent(_el, _cd) {
        var _this = _super.call(this, _el, _cd) || this;
        _this.classStLabel = true;
        return _this;
    }
    StLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-label]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span title=\"\"><ng-content></ng-content></span>\n",
                    styles: ["@charset \"UTF-8\";:host.st-tooltip,:host.st-tooltip-on{position:relative}:host.st-tooltip-on:before,:host.st-tooltip:before{content:attr(title)}:host.st-tooltip-on:after,:host.st-tooltip:after{content:\" \"}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:after,:host.st-tooltip:before{pointer-events:none;position:absolute}:host.st-tooltip:after,:host.st-tooltip:before{opacity:0;visibility:hidden}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:hover:after,:host.st-tooltip:hover:before{opacity:1;visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    StLabelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StLabelComponent.propDecorators = {
        classStLabel: [{ type: HostBinding, args: ['class.st-label',] }]
    };
    return StLabelComponent;
}(StTooltipComponent));
if (false) {
    /** @type {?} */
    StLabelComponent.prototype.classStLabel;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tooltip/st-tooltip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTooltipModule = /** @class */ (function () {
    function StTooltipModule() {
    }
    StTooltipModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StTooltipComponent],
                    exports: [StTooltipComponent],
                    imports: [CommonModule]
                },] }
    ];
    return StTooltipModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-label/st-label.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StLabelModule = /** @class */ (function () {
    function StLabelModule() {
    }
    StLabelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StLabelComponent],
                    exports: [StLabelComponent],
                    imports: [
                        CommonModule,
                        StTooltipModule
                    ]
                },] }
    ];
    return StLabelModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-checkbox/st-checkbox.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StCheckboxModule = /** @class */ (function () {
    function StCheckboxModule() {
    }
    StCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StLabelModule],
                    declarations: [StCheckboxComponent],
                    exports: [StCheckboxComponent]
                },] }
    ];
    return StCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-docs.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDocsService = /** @class */ (function () {
    function StDocsService(http) {
        this.http = http;
    }
    /**
     * @param {?=} route
     * @return {?}
     */
    StDocsService.prototype.getFile = /**
     * @param {?=} route
     * @return {?}
     */
    function (route) {
        return this.http.get(location.pathname + "assets/source-code/" + route, { responseType: 'text' }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return ((/** @type {?} */ (response))); })), catchError((/**
         * @return {?}
         */
        function () {
            return of(null);
        })));
    };
    StDocsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StDocsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return StDocsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StDocsService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-docs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDocsComponent = /** @class */ (function () {
    function StDocsComponent(cd, docsService) {
        this.cd = cd;
        this.docsService = docsService;
        this.options = [
            { id: 'demo', text: 'Overview' },
            { id: 'html', text: 'Html' },
            { id: 'implementation', text: 'Implementation' },
            { id: 'component', text: 'Component' }
        ];
        this.active = this.options[0];
    }
    /**
     * @return {?}
     */
    StDocsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.getFile(this.htmlFile).pipe(zip(this.getFile(this.tsFile), this.getFile(this.componentFile), (/**
         * @param {?} htmlCode
         * @param {?} tsCode
         * @param {?} componentCode
         * @return {?}
         */
        function (htmlCode, tsCode, componentCode) {
            return ({ htmlCode: htmlCode, tsCode: tsCode, componentCode: componentCode });
        }))).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.htmlCode = (data && ((/** @type {?} */ (data))).htmlCode) ? ((/** @type {?} */ (data))).htmlCode : null;
            _this.demoTsCode = (data && ((/** @type {?} */ (data))).tsCode) ? ((/** @type {?} */ (data))).tsCode : null;
            _this.componentTsCode = (data && ((/** @type {?} */ (data))).componentCode) ? ((/** @type {?} */ (data))).componentCode : null;
            _this.disableTabOption(_this.htmlCode === null, _this.demoTsCode === null, _this.componentTsCode === null);
            _this.cd.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    StDocsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StDocsComponent.prototype.onChangeOption = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.active = (/** @type {?} */ (event));
    };
    /**
     * @private
     * @param {?=} file
     * @return {?}
     */
    StDocsComponent.prototype.getFile = /**
     * @private
     * @param {?=} file
     * @return {?}
     */
    function (file) {
        return this.docsService.getFile(file);
    };
    /**
     * @private
     * @param {?} html
     * @param {?} demoCode
     * @param {?} componentCode
     * @return {?}
     */
    StDocsComponent.prototype.disableTabOption = /**
     * @private
     * @param {?} html
     * @param {?} demoCode
     * @param {?} componentCode
     * @return {?}
     */
    function (html, demoCode, componentCode) {
        if (html) {
            this.options = this.filterOption(this.options, 'html');
        }
        if (demoCode) {
            this.options = this.filterOption(this.options, 'implementation');
        }
        if (componentCode) {
            this.options = this.filterOption(this.options, 'component');
        }
    };
    /**
     * @private
     * @param {?} options
     * @param {?} name
     * @return {?}
     */
    StDocsComponent.prototype.filterOption = /**
     * @private
     * @param {?} options
     * @param {?} name
     * @return {?}
     */
    function (options, name) {
        return options.filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            return element.id !== name;
        }));
    };
    StDocsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-docs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div>\n   <st-horizontal-tabs [options]=\"options\" [(activeOption)]=\"active\" qaTag=\"horizontal-tabs-demo\" (changedOption)=\"onChangeOption($event)\">\n   </st-horizontal-tabs>\n   <div class=\"st-docs\">\n      <div *ngIf=\"active.id === 'demo'\">\n         <ng-content></ng-content>\n      </div>\n      <div *ngIf=\"active.id === 'html'\">\n         <st-prism-highlight [language]=\"'html'\" id=\"codeinput\">{{htmlCode}}</st-prism-highlight>\n      </div>\n      <div *ngIf=\"active.id === 'implementation'\">\n         <st-prism-highlight [language]=\"'javascript'\" id=\"codeinput\">{{demoTsCode}}</st-prism-highlight>\n      </div>\n\n      <div *ngIf=\"active.id === 'component'\">\n         <st-prism-highlight [language]=\"'javascript'\" id=\"codeinput\">{{componentTsCode}}</st-prism-highlight>\n      </div>\n   </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";.st-docs{width:100%;margin-top:22px}.st-docs__header{display:flex;flex-direction:row;background-color:rgba(0,0,0,.03);min-height:50px;align-items:center}.st-docs__header__icon-code{display:flex;flex-direction:row;margin-left:auto;align-items:center;margin-right:15px}.st-docs__header__copy-code{display:flex;flex-direction:row;align-items:center;margin-right:15px}.st-docs__content__component{min-height:100px;display:flex;justify-content:center;align-items:center}"]
                }] }
    ];
    /** @nocollapse */
    StDocsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StDocsService }
    ]; };
    StDocsComponent.propDecorators = {
        htmlFile: [{ type: Input }],
        tsFile: [{ type: Input }],
        componentFile: [{ type: Input }]
    };
    return StDocsComponent;
}());
if (false) {
    /** @type {?} */
    StDocsComponent.prototype.htmlFile;
    /** @type {?} */
    StDocsComponent.prototype.tsFile;
    /** @type {?} */
    StDocsComponent.prototype.componentFile;
    /** @type {?} */
    StDocsComponent.prototype.htmlCode;
    /** @type {?} */
    StDocsComponent.prototype.demoTsCode;
    /** @type {?} */
    StDocsComponent.prototype.componentTsCode;
    /** @type {?} */
    StDocsComponent.prototype.options;
    /** @type {?} */
    StDocsComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    StDocsComponent.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    StDocsComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StDocsComponent.prototype.docsService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-horizontal-tabs/st-horizontal-tabs.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var StHorizontalTabStatus = {
    warning: (/** @type {?} */ ('warning')), error: (/** @type {?} */ ('error')),
};
/**
 * @record
 */
function StHorizontalTab() { }
if (false) {
    /** @type {?} */
    StHorizontalTab.prototype.id;
    /** @type {?} */
    StHorizontalTab.prototype.text;
    /** @type {?|undefined} */
    StHorizontalTab.prototype.status;
}
/**
 * @record
 */
function StHorizontalTabSchema() { }
if (false) {
    /** @type {?} */
    StHorizontalTabSchema.prototype.id;
    /** @type {?} */
    StHorizontalTabSchema.prototype.text;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/egeo-utils.ts
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
var  /*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
EgeoUtils = /** @class */ (function () {
    function EgeoUtils() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EgeoUtils.isDefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && value !== null;
    };
    /**
     * @param {?} scope
     * @param {?} inputs
     * @param {?} component
     * @return {?}
     */
    EgeoUtils.validateInputs = /**
     * @param {?} scope
     * @param {?} inputs
     * @param {?} component
     * @return {?}
     */
    function (scope, inputs, component) {
        var _this = this;
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            if (!_this.isDefined(scope[input])) {
                throw new Error(_this.toDash(component) + ": field " + input + " is a required field");
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EgeoUtils.toDash = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return value.replace(/([A-Z])/g, (/**
             * @param {?} $1
             * @return {?}
             */
            function ($1) { return '-' + $1.toLowerCase(); })).substring(1);
        }
        catch (err) {
            return value;
        }
    };
    return EgeoUtils;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/decorators/require-decorators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var EGEO_METADATA = Symbol('EgeoLibraryMetadata');
/** @enum {number} */
var METADATA_TYPE = {
    PROPERTY: 0,
};
/**
 * @record
 */
function EgeoMetadata() { }
if (false) {
    /** @type {?} */
    EgeoMetadata.prototype.type;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.required;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.requireCondition;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.deprecated;
    /** @type {?|undefined} */
    EgeoMetadata.prototype.initialValue;
}
// tslint:disable:only-arrow-functions
/**
 * @param {?=} condition
 * @return {?}
 */
function StRequired(condition) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        /** @type {?} */
        var meta = Reflect.getOwnMetadata(EGEO_METADATA, target.constructor) || {};
        meta[name] = meta.hasOwnProperty(name) && meta[name] || { type: 0 /* PROPERTY */ };
        meta[name].required = true;
        if (condition !== undefined) {
            meta[name].requireCondition = condition;
        }
        Reflect.defineMetadata(EGEO_METADATA, meta, target.constructor);
    });
}
/**
 * @param {?=} initialValue
 * @return {?}
 */
function StDeprecated(initialValue) {
    return (/**
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        /** @type {?} */
        var meta = Reflect.getOwnMetadata(EGEO_METADATA, target.constructor) || {};
        meta[name] = meta.hasOwnProperty(name) && meta[name] || { type: 0 /* PROPERTY */ };
        meta[name].deprecated = true;
        if (initialValue !== undefined) {
            meta[name].initialValue = initialValue;
        }
        Reflect.defineMetadata(EGEO_METADATA, meta, target.constructor);
    });
}
/**
 * @param {?=} params
 * @return {?}
 */
function StEgeo(params) {
    return (/**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var _onInit = target.prototype.ngOnInit;
        if (_onInit !== undefined) {
            target.prototype.ngOnInit = (/**
             * @param {...?} args
             * @return {?}
             */
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                checkDeprecated(target, this);
                checkRequired(target, this);
                _onInit.apply(this, args);
            });
        }
        else {
            target.prototype.ngOnInit = (/**
             * @return {?}
             */
            function () {
                checkDeprecated(target, this);
                checkRequired(target, this);
            });
        }
    });
}
/**
 * @param {?} target
 * @param {?} scope
 * @return {?}
 */
function checkDeprecated(target, scope) {
    /** @type {?} */
    var meta = Reflect.getOwnMetadata(EGEO_METADATA, target);
    if (meta !== undefined) {
        Object.keys(meta).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (meta[key].deprecated) {
                if (scope[key] !== undefined) {
                    console.warn(EgeoUtils.toDash(target.name) + ": field " + key + " is a deprecated field");
                }
                else if (meta[key].initialValue) {
                    scope[key] = meta[key].initialValue;
                }
            }
        }));
    }
}
/**
 * @param {?} target
 * @param {?} scope
 * @return {?}
 */
function checkRequired(target, scope) {
    /** @type {?} */
    var meta = Reflect.getOwnMetadata(EGEO_METADATA, target);
    if (meta !== undefined) {
        /** @type {?} */
        var inputs = getKeys(Object.keys(meta), meta, scope);
        EgeoUtils.validateInputs(scope, inputs, target.name);
    }
}
/**
 * @param {?} inputs
 * @param {?} metadata
 * @param {?} scope
 * @return {?}
 */
function getKeys(inputs, metadata, scope) {
    return inputs.reduce((/**
     * @param {?} prev
     * @param {?} curr
     * @return {?}
     */
    function (prev, curr) {
        if (metadata[curr].requireCondition !== undefined) {
            if (checkConditionMetadata(scope, metadata[curr].requireCondition)) {
                prev.push(curr);
            }
        }
        else if (metadata[curr].required) {
            prev.push(curr);
        }
        return prev;
    }), []);
}
/**
 * @param {?} scope
 * @param {?} key
 * @return {?}
 */
function checkConditionMetadata(scope, key) {
    if (typeof scope[key] === 'function') {
        return scope[key].apply(scope);
    }
    else {
        return scope[key];
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-horizontal-tabs/st-horizontal-tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Horizontal tabs]
 *
 * The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.
 *
 * \@model
 *
 *   [Id, text and optional status of a tab] {./st-horizontal-tabs.model.ts#StStHorizontalTab}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-horizontal-tabs [options]="options" [qaTag]="qaTag">
 * </st-horizontal-tabs>
 * ```
 *
 */
var StHorizontalTabsComponent = /** @class */ (function () {
    function StHorizontalTabsComponent() {
        /**
         * \@Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
         * active option name as param
         */
        this.changedOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.length > 0) {
            this.activeOption = this.activeOption || this.options[0];
            this.activateOption(this.activeOption);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.isActive = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.activeOption === option;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.activateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activeOption = option;
        this.changedOption.emit(option);
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.getTabStatus = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        return tab.status ? StHorizontalTabStatus[tab.status] : '';
    };
    StHorizontalTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-horizontal-tabs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<nav class=\"st-horizontal-tabs\">\n   <a *ngFor=\"let option of options; let i = index;\"\n      class=\"tab {{getTabStatus(option)}}\"\n      (click)=\"activateOption(option)\"\n      href=\"javascript:void(0)\"\n      [ngClass]=\"{'tab--active': isActive(option)}\"\n      [attr.id]=\"qaTag + '-tab-' + i\">{{option.text}}</a>\n   <ng-content></ng-content>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-horizontal-tabs{position:relative;display:flex;width:100%;list-style:none}.tab{display:inline-block;text-align:center;box-sizing:border-box;line-height:1;padding:0 30px 7px;margin-top:auto;cursor:pointer}.tab--active{padding-bottom:5px}.line{display:block;transition:.4s ease-in-out}"]
                }] }
    ];
    StHorizontalTabsComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        qaTag: [{ type: Input }],
        changedOption: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], StHorizontalTabsComponent.prototype, "options", void 0);
    /**
     * \@description {Component} [Horizontal tabs]
     *
     * The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.
     *
     * \@model
     *
     *   [Id, text and optional status of a tab] {./st-horizontal-tabs.model.ts#StStHorizontalTab}
     *
     * \@example
     *
     * {html}
     *
     * ```
     * <st-horizontal-tabs [options]="options" [qaTag]="qaTag">
     * </st-horizontal-tabs>
     * ```
     *
     */
    StHorizontalTabsComponent = __decorate([
        StEgeo()
    ], StHorizontalTabsComponent);
    return StHorizontalTabsComponent;
}());
if (false) {
    /**
     * \@Input {StHorizontalTab} [activeOption=''] Current active option
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.activeOption;
    /**
     * \@Input {StHorizontalTab[]} [^options=''] An array of StHorizontalTab objects (see below) that defines the links
     * that will appear and that will be disabled
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.options;
    /**
     * \@Input {string} [qaTag=''] Prefix used to generate the id values for qa tests
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.qaTag;
    /**
     * \@Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
     * active option name as param
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.changedOption;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-horizontal-tabs/st-horizontal-tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StHorizontalTabsModule = /** @class */ (function () {
    function StHorizontalTabsModule() {
    }
    StHorizontalTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StHorizontalTabsComponent],
                    exports: [StHorizontalTabsComponent]
                },] }
    ];
    return StHorizontalTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-prism/st-prism.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPrismComponent = /** @class */ (function () {
    function StPrismComponent() {
        this.async = false;
        this.callback = undefined;
    }
    /**
     * @return {?}
     */
    StPrismComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.highlightAll(this.async, this.callback);
    };
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     */
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     * @param {?} element
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    StPrismComponent.prototype.highlightElement = /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     * @param {?} element
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    function (element, async, callback) {
        Prism.highlightElement(element, async, callback);
    };
    /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     */
    /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    StPrismComponent.prototype.highlightAll = /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    function (async, callback) {
        Prism.highlightAll(async, callback);
    };
    StPrismComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'st-prism-highlight',
                    template: "<pre class=\"language-{{language}}\" *ngIf=\"language\"><code class=\"language-{{language}}\"><ng-content></ng-content></code></pre>"
                }] }
    ];
    StPrismComponent.propDecorators = {
        language: [{ type: Input, args: ['language',] }],
        async: [{ type: Input, args: ['async',] }],
        callback: [{ type: Input, args: ['callback',] }]
    };
    return StPrismComponent;
}());
if (false) {
    /** @type {?} */
    StPrismComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    StPrismComponent.prototype.async;
    /**
     * @type {?}
     * @private
     */
    StPrismComponent.prototype.callback;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-prism/st-prism.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPrismModule = /** @class */ (function () {
    function StPrismModule() {
    }
    StPrismModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [StPrismComponent],
                    exports: [StPrismComponent]
                },] }
    ];
    return StPrismModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-docs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDocsModule = /** @class */ (function () {
    function StDocsModule() {
    }
    StDocsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, StPrismModule, StHorizontalTabsModule],
                    declarations: [StDocsComponent],
                    exports: [StDocsComponent],
                    providers: [StDocsService]
                },] }
    ];
    return StDocsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-draggable-card/st-draggable-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Draggable card]
 *
 * The draggable card component is a custom draggable item.
 *
 * \@example
 *
 * {html}
 *
 * ```
 *
 *  <st-draggable-card class='card' id='1' (onDragStart)='drag($event)'>
 *      <p>Draggable card 1</p>
 *  </st-draggable-card>
 *
 *
 * ```
 *
 */
var StDraggableCardComponent = /** @class */ (function () {
    function StDraggableCardComponent() {
        /**
         * \@Output {any} [dragStart] Event emitted when user start dragging card
         */
        this.onDragStart = new EventEmitter();
        /**
         * \@Output {any} [dragEnd] Event emitted when user drops dragging card
         */
        this.onDragEnd = new EventEmitter();
        /**
         * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging
         */
        this.draggable = true;
        this._dragging = false;
    }
    Object.defineProperty(StDraggableCardComponent.prototype, "dragging", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dragging;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    StDraggableCardComponent.prototype.dragStartHandle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this._dragging = true;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.card.nativeElement.classList.add('shadow'); }));
        event.dataTransfer.effectAllowed = 'all';
        event.dataTransfer.dropEffect = 'move';
        this.onDragStart.emit(event);
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StDraggableCardComponent.prototype.dragEndHandle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.card.nativeElement.classList.remove('shadow');
        this._dragging = false;
        event.stopPropagation();
        this.onDragEnd.emit(event);
    };
    StDraggableCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-draggable-card',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div #card class=\"st-draggable-card\" [id]=\"id\" [ngClass]=\"{dragging: dragging}\">\n   <span class=\"drag-button\">\n        <i class=\"icon-drag\"></i>\n   </span>\n   <div class=\"content\">\n      <ng-content></ng-content>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-draggable-card{width:100%;height:100%;padding:30px 30px 30px 15px;display:flex}.st-draggable-card .drag-button{display:block;vertical-align:middle;margin-right:15px;-ms-grid-row-align:center;align-self:center}.st-draggable-card .content{display:block}"]
                }] }
    ];
    StDraggableCardComponent.propDecorators = {
        id: [{ type: Input, args: ['id',] }],
        onDragStart: [{ type: Output }],
        onDragEnd: [{ type: Output }],
        draggable: [{ type: HostBinding, args: ['draggable',] }, { type: Input }],
        card: [{ type: ViewChild, args: ['card', { static: false },] }],
        dragStartHandle: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
        dragEndHandle: [{ type: HostListener, args: ['dragend', ['$event'],] }]
    };
    return StDraggableCardComponent;
}());
if (false) {
    /**
     * \@Input {string} [id] Card id
     * @type {?}
     */
    StDraggableCardComponent.prototype.id;
    /**
     * \@Output {any} [dragStart] Event emitted when user start dragging card
     * @type {?}
     */
    StDraggableCardComponent.prototype.onDragStart;
    /**
     * \@Output {any} [dragEnd] Event emitted when user drops dragging card
     * @type {?}
     */
    StDraggableCardComponent.prototype.onDragEnd;
    /**
     * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging
     * @type {?}
     */
    StDraggableCardComponent.prototype.draggable;
    /** @type {?} */
    StDraggableCardComponent.prototype.card;
    /**
     * @type {?}
     * @private
     */
    StDraggableCardComponent.prototype._dragging;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-draggable-card/st-draggable-card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDraggableCardModule = /** @class */ (function () {
    function StDraggableCardModule() {
    }
    StDraggableCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StDraggableCardComponent],
                    exports: [StDraggableCardComponent]
                },] }
    ];
    return StDraggableCardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ARROW_KEY_CODE = {
    ARROW_UP: "Arrow Up", ARROW_DOWN: "Arrow Down",
};
var StDropDownMenuItem = /** @class */ (function () {
    function StDropDownMenuItem() {
    }
    return StDropDownMenuItem;
}());
if (false) {
    /** @type {?} */
    StDropDownMenuItem.prototype.label;
    /** @type {?} */
    StDropDownMenuItem.prototype.value;
    /** @type {?} */
    StDropDownMenuItem.prototype.icon;
    /** @type {?} */
    StDropDownMenuItem.prototype.labelColor;
    /** @type {?} */
    StDropDownMenuItem.prototype.iconColor;
    /** @type {?} */
    StDropDownMenuItem.prototype.textInfo;
    /** @type {?} */
    StDropDownMenuItem.prototype.selected;
    /** @type {?} */
    StDropDownMenuItem.prototype.hasHtml;
    /** @type {?} */
    StDropDownMenuItem.prototype.extraIcon;
    /** @type {?} */
    StDropDownMenuItem.prototype.extraIconBubble;
    /** @type {?} */
    StDropDownMenuItem.prototype.extraIconColor;
    /** @type {?} */
    StDropDownMenuItem.prototype.disabled;
    /** @type {?} */
    StDropDownMenuItem.prototype.topSeparator;
    /** @type {?} */
    StDropDownMenuItem.prototype.bottomSeparator;
    /* Skipping unhandled member: [key: string]: any;*/
}
var StDropDownMenuGroup = /** @class */ (function () {
    function StDropDownMenuGroup() {
    }
    return StDropDownMenuGroup;
}());
if (false) {
    /** @type {?} */
    StDropDownMenuGroup.prototype.title;
    /** @type {?} */
    StDropDownMenuGroup.prototype.items;
}
var StDropDownMenuItemSchema = /** @class */ (function () {
    function StDropDownMenuItemSchema() {
    }
    return StDropDownMenuItemSchema;
}());
if (false) {
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.label;
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.value;
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.icon;
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.selected;
}
var StDropDownMenuGroupSchema = /** @class */ (function () {
    function StDropDownMenuGroupSchema() {
    }
    return StDropDownMenuGroupSchema;
}());
if (false) {
    /** @type {?} */
    StDropDownMenuGroupSchema.prototype.title;
    /** @type {?} */
    StDropDownMenuGroupSchema.prototype.items;
}
/** @enum {number} */
var StDropDownVisualMode = {
    OPTION_LIST: 0, MENU_LIST: 1,
};
StDropDownVisualMode[StDropDownVisualMode.OPTION_LIST] = 'OPTION_LIST';
StDropDownVisualMode[StDropDownVisualMode.MENU_LIST] = 'MENU_LIST';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Dropdown Menu]
 * This directive show a dropdown menu list in element that you attach
 *
 *
 * \@model
 *
 *   [Menu items] {./st-dropdown-menu.interface.ts#StDropDownMenuItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-dropdown-menu [items]="list" [active]="show" (change)="onChange(event)">
 *    <button class="button button-primary" (click)="show = !show">Show menu</button>
 * </st-dropdown-menu>
 * ```
 */
var StDropdownMenuComponent = /** @class */ (function () {
    function StDropdownMenuComponent(el, cd, renderer) {
        this.el = el;
        this.cd = cd;
        this.renderer = renderer;
        /**
         * \@Input {boolean} [active=false] Show or hide list
         */
        this.active = false;
        /**
         * \@Input {StDropDownMenuItem[] | StDropDownMenuGroup[]} [items=\[\]] List of items or groups of them to show in menu
         */
        this.items = [];
        /* tslint:disable-next-line:max-line-length */
        /**
         * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM_START] Possible positions of menu with respect element to attach
         */
        this.placement = StPopPlacement.BOTTOM_START;
        /**
         * \@Input {string} [emptyListMessage=''] Message to show in case of empty list
         */
        this.emptyListMessage = '';
        /**
         * \@Input {StDropDownMenuItem | undefined} [selectedItem=undefined] Define selected item without passing as property
         */
        this.selectedItem = undefined;
        /**
         * \@Input {StDropDownMenuItem | undefined} [itemsBeforeScroll=undefined] Define selected item without passing as property
         */
        this.itemsBeforeScroll = 8;
        /**
         * \@Input {boolean} [moveSelected=true] If true, move selected item to top in menu when open
         */
        this.moveSelected = true;
        /**
         * \@Input {boolean} [styleSelected=true] If true, apply class selected to selected item
         */
        this.styleSelected = true;
        /**
         * \@Input {boolean} [isLoading=true] If true, show loader at the end of the list
         */
        this.isLoading = false;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 0 };
        /**
         * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
         */
        this.openToLeft = false;
        /**
         * \@Input {StDropdownVisualMode} [visualMode=StDropDownVisualMode.OPTION_LIST] It is needed to specify the styles applied to the list.
         *  By default is displayed as a normal option list
         */
        this.visualMode = StDropDownVisualMode.OPTION_LIST;
        /**
         * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
         */
        this.keyBoardMove = false;
        /**
         * \@output {StDropDownMenuItem} [change] Event emitted when user select an item
         */
        this.change = new EventEmitter();
        /**
         * \@output {any} [scrollAtBottom] Event emitted when scroll reach the end of the list
         */
        this.scrollAtBottom = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
         */
        this.itemMouseEnter = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
         */
        this.itemMouseLeave = new EventEmitter();
        this.widthMenu = '0px';
        this._itemHeight = 42;
        this._focusedOptionPos = -1;
    }
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.keyBoardMove) {
            this._focusListenerFn = this.renderer.listen('document', 'keydown', this.arrowKeyListener.bind(this));
        }
    };
    Object.defineProperty(StDropdownMenuComponent.prototype, "componentId", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var id = ((/** @type {?} */ (this.el.nativeElement))).getAttribute('id');
            return id !== undefined && id !== null ? id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "menuId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentId !== null ? this.componentId + "-menu" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "isItemGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDropDownGroup(this.items);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "menuMaxHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsBeforeScroll ? this._itemHeight * this.itemsBeforeScroll + "px" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "listClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return { 'st-dropdown-menu': true, 'active': this.active, 'menu-list': this.displayAsMenuList() };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.getItemId = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.componentId !== null && value !== undefined ? this.componentId + "-option-" + this.getItemValueMerged(value) : null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.isDropDownGroup = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value && value.length > 0 && ((/** @type {?} */ (value[0]))).title !== undefined;
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes && changes.active && changes.active.currentValue && this.selectedItem && this.moveSelected) {
            // Only can do this functionality with timeout because we need to wait for angular to load new DOM
            // with items before move scroll
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.itemListElement) {
                    /** @type {?} */
                    var parent_1 = _this.itemListElement.nativeElement;
                    /** @type {?} */
                    var listOfElements = parent_1.getElementsByClassName('selected');
                    if (listOfElements && listOfElements.length > 0) {
                        /** @type {?} */
                        var target = ((/** @type {?} */ (listOfElements.item(0))));
                        parent_1.scrollTop = target.offsetTop - parent_1.offsetTop;
                    }
                }
            }));
        }
        else {
            if (changes && changes.active && !changes.active.currentValue) {
                this._focusedOptionPos = -1;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.change.emit(value);
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onHandleScroll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.itemListElement.nativeElement;
        if (element.scrollHeight - element.scrollTop === element.clientHeight && !this.isLoading) {
            this.scrollAtBottom.emit();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onMouseEnter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseEnter.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onMouseLeave = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseLeave.emit(item);
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.displayAsMenuList = /**
     * @return {?}
     */
    function () {
        return this.visualMode === StDropDownVisualMode.MENU_LIST;
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var button = this.buttonElement.nativeElement;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (button.children && button.children.length > 0) {
                _this.widthMenu = button.children[0].getBoundingClientRect().width + 'px';
            }
            else {
                _this.widthMenu = button.getBoundingClientRect().width + 'px';
            }
            _this.cd.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._focusListenerFn) {
            this._focusListenerFn();
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.getItemValueMerged = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString().replace(/\s+/g, '_');
    };
    /**
     * @private
     * @return {?}
     */
    StDropdownMenuComponent.prototype.getSelectedItemPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.selectedItem && this.items) {
            /** @type {?} */
            var _items_1 = [];
            if (this.isDropDownGroup(this.items)) {
                this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (((/** @type {?} */ (item))).items) {
                        _items_1.push.apply(_items_1, __spread(((/** @type {?} */ (item))).items));
                    }
                    else {
                        _items_1.push(((/** @type {?} */ (item))));
                    }
                }));
            }
            else {
                _items_1 = this.items;
            }
            return _items_1.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === _this.selectedItem.value; }));
        }
        else {
            return -1;
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    StDropdownMenuComponent.prototype.arrowKeyListener = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var selectedItemPosition = this.getSelectedItemPosition();
        if (selectedItemPosition > -1) {
            this._focusedOptionPos = selectedItemPosition;
        }
        /** @type {?} */
        var nextFocus;
        if (e.code === ARROW_KEY_CODE.ARROW_DOWN || e.code === ARROW_KEY_CODE.ARROW_UP) {
            event.preventDefault();
            /** @type {?} */
            var options = this.el.nativeElement.querySelectorAll('.st-dropdown-menu-item');
            nextFocus = e.code === ARROW_KEY_CODE.ARROW_DOWN || this._focusedOptionPos === -1 ? 1 : -1;
            this._focusedOptionPos = this._focusedOptionPos + nextFocus;
            if (this._focusedOptionPos < 0) {
                this._focusedOptionPos = options.length - 1;
            }
            else if (this._focusedOptionPos > options.length - 1) {
                this._focusedOptionPos = 0;
            }
            if (options[this._focusedOptionPos]) {
                options[this._focusedOptionPos].focus();
            }
        }
        this.cd.markForCheck();
    };
    StDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-dropdown-menu',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop [hidden]=\"!active\" [placement]=\"placement\" [offset]=\"offset\" [openToLeft]=\"openToLeft\">\n\n   <div pop-button #buttonId>\n      <ng-content></ng-content>\n   </div>\n\n   <div pop-content [style.z-index]=\"9\" class=\"dropdown-content\">\n\n      <div *ngIf=\"active\" [ngClass]=\"listClasses\" [style.minWidth]='widthMenu'>\n         <ng-content select=[dropdown-header]></ng-content>\n\n         <ul *ngIf=\"!isItemGroup && ((items && items.length) || emptyListMessage)\"\n             #itemList\n             aria-label=\"submenu\"\n             [ngClass]=\"{'st-custom-scrollbar': displayAsMenuList()}\"\n             [attr.aria-hidden]=\"!active\"\n             [style.maxHeight]=\"menuMaxHeight\"\n             [attr.id]=\"menuId\"\n             (scroll)=\"onHandleScroll()\">\n            <st-dropdown-menu-item\n               *ngFor=\"let item of items; let i = index\"\n               [attr.id]=\"getItemId(item.value)\"\n               [index]=\"i\"\n               [item]=\"item\"\n               [selectedItem]=\"selectedItem\"\n               [styleSelected]=\"styleSelected\"\n               (change)=\"onChange($event)\"\n               (mouseenter)=\"onMouseEnter(item)\"\n               (mouseleave)=\"onMouseLeave(item)\">\n            </st-dropdown-menu-item>\n            <div *ngIf=\"isLoading\" class=\"spinner-container\">\n               <st-spinner class=\"spinner\"></st-spinner>\n            </div>\n            <div *ngIf=\"!items || !items.length\" class=\"without-results st-dropdown-menu-without-results\"\n                 [style.maxWidth]='widthMenu'>\n               {{emptyListMessage}}\n            </div>\n         </ul>\n\n         <div *ngIf=\"isItemGroup\">\n            <ul [attr.aria-hidden]=\"!active\" aria-label=\"submenu\" [style.maxHeight]=\"menuMaxHeight\"\n                [attr.id]=\"menuId\" #itemList>\n               <li class=\"st-dropdown-menu-parent\" *ngFor=\"let group of items\">\n                  <h3>\n                     <span>{{ group.title }}</span>\n                  </h3>\n                  <ul>\n                     <st-dropdown-menu-item\n                        *ngFor=\"let item of group.items || []; let i = index\"\n                        [attr.id]=\"getItemId(item.value)\"\n                        [index]=\"i\"\n                        [item]=\"item\"\n                        [selectedItem]=\"selectedItem\"\n                        [styleSelected]=\"styleSelected\"\n                        (change)=\"onChange($event)\"\n                        (mouseenter)=\"onMouseEnter(item)\"\n                        (mouseleave)=\"onMouseLeave(item)\">\n                     </st-dropdown-menu-item>\n\n                     <div class=\"without-results st-dropdown-menu-without-results\" [style.maxWidth]='widthMenu'\n                          *ngIf=\"!group || !group.items || !group.items.length\">\n                        {{emptyListMessage}}\n                     </div>\n                  </ul>\n               </li>\n               <div *ngIf=\"isLoading\" class=\"spinner-container\">\n                  <st-spinner class=\"spinner\"></st-spinner>\n               </div>\n            </ul>\n         </div>\n         <ng-content select=[dropdown-footer]></ng-content>\n      </div>\n   </div>\n</st-pop>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StDropdownMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    StDropdownMenuComponent.propDecorators = {
        active: [{ type: Input }],
        items: [{ type: Input }],
        placement: [{ type: Input }],
        emptyListMessage: [{ type: Input }],
        selectedItem: [{ type: Input }],
        itemsBeforeScroll: [{ type: Input }],
        moveSelected: [{ type: Input }],
        styleSelected: [{ type: Input }],
        isLoading: [{ type: Input }],
        offset: [{ type: Input }],
        openToLeft: [{ type: Input }],
        visualMode: [{ type: Input }],
        keyBoardMove: [{ type: Input }],
        change: [{ type: Output }],
        scrollAtBottom: [{ type: Output }],
        itemMouseEnter: [{ type: Output }],
        itemMouseLeave: [{ type: Output }],
        buttonElement: [{ type: ViewChild, args: ['buttonId', { static: false },] }],
        itemListElement: [{ type: ViewChild, args: ['itemList', { static: false },] }],
        updateWidth: [{ type: HostListener, args: ['window:resize',] }, { type: HostListener, args: ['window:load',] }]
    };
    return StDropdownMenuComponent;
}());
if (false) {
    /**
     * \@Input {boolean} [active=false] Show or hide list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.active;
    /**
     * \@Input {StDropDownMenuItem[] | StDropDownMenuGroup[]} [items=\[\]] List of items or groups of them to show in menu
     * @type {?}
     */
    StDropdownMenuComponent.prototype.items;
    /**
     * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM_START] Possible positions of menu with respect element to attach
     * @type {?}
     */
    StDropdownMenuComponent.prototype.placement;
    /**
     * \@Input {string} [emptyListMessage=''] Message to show in case of empty list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.emptyListMessage;
    /**
     * \@Input {StDropDownMenuItem | undefined} [selectedItem=undefined] Define selected item without passing as property
     * @type {?}
     */
    StDropdownMenuComponent.prototype.selectedItem;
    /**
     * \@Input {StDropDownMenuItem | undefined} [itemsBeforeScroll=undefined] Define selected item without passing as property
     * @type {?}
     */
    StDropdownMenuComponent.prototype.itemsBeforeScroll;
    /**
     * \@Input {boolean} [moveSelected=true] If true, move selected item to top in menu when open
     * @type {?}
     */
    StDropdownMenuComponent.prototype.moveSelected;
    /**
     * \@Input {boolean} [styleSelected=true] If true, apply class selected to selected item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.styleSelected;
    /**
     * \@Input {boolean} [isLoading=true] If true, show loader at the end of the list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.isLoading;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
     * @type {?}
     */
    StDropdownMenuComponent.prototype.offset;
    /**
     * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
     * @type {?}
     */
    StDropdownMenuComponent.prototype.openToLeft;
    /**
     * \@Input {StDropdownVisualMode} [visualMode=StDropDownVisualMode.OPTION_LIST] It is needed to specify the styles applied to the list.
     *  By default is displayed as a normal option list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.visualMode;
    /**
     * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
     * @type {?}
     */
    StDropdownMenuComponent.prototype.keyBoardMove;
    /**
     * \@output {StDropDownMenuItem} [change] Event emitted when user select an item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.change;
    /**
     * \@output {any} [scrollAtBottom] Event emitted when scroll reach the end of the list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.scrollAtBottom;
    /**
     * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.itemMouseEnter;
    /**
     * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.itemMouseLeave;
    /** @type {?} */
    StDropdownMenuComponent.prototype.buttonElement;
    /** @type {?} */
    StDropdownMenuComponent.prototype.itemListElement;
    /** @type {?} */
    StDropdownMenuComponent.prototype.widthMenu;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype._itemHeight;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype._focusedOptionPos;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype._focusListenerFn;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-spinner/st-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} Spinner
 *
 * This component shows a spinner when something is being loaded
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-spinner theme="secondary">
 *    </st-spinner>
 * ```
 */
var StSpinnerComponent = /** @class */ (function () {
    function StSpinnerComponent(_cd) {
        this._cd = _cd;
        /**
         * \@input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary'
         */
        this.theme = 'primary';
    }
    /**
     * @return {?}
     */
    StSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classesValue = this.getClasses();
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StSpinnerComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = { path: true };
        if (this.theme) {
            /** @type {?} */
            var themeClass = 'path--' + this.theme;
            result[themeClass] = true;
        }
        return result;
    };
    StSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-spinner',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-spinner\">\n   <svg class=\"circular\" viewBox=\"25 25 50 50\" width=\"100%\" height=\"100%\">\n      <circle [ngClass]=\"classesValue\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\"/>\n   </svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%;height:100%}.st-spinner{display:inline}"]
                }] }
    ];
    /** @nocollapse */
    StSpinnerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StSpinnerComponent.propDecorators = {
        theme: [{ type: Input }]
    };
    return StSpinnerComponent;
}());
if (false) {
    /**
     * \@input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary'
     * @type {?}
     */
    StSpinnerComponent.prototype.theme;
    /** @type {?} */
    StSpinnerComponent.prototype.classesValue;
    /**
     * @type {?}
     * @private
     */
    StSpinnerComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-spinner/st-spinner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StSpinnerModule = /** @class */ (function () {
    function StSpinnerModule() {
    }
    StSpinnerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StSpinnerComponent],
                    exports: [StSpinnerComponent]
                },] }
    ];
    return StSpinnerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu-item/st-dropdown-menu-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDropdownMenuItemComponent = /** @class */ (function () {
    function StDropdownMenuItemComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.index = 0;
        this.item = undefined;
        this.selectedItem = undefined;
        this.styleSelected = true;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StDropdownMenuItemComponent.prototype.onChangeItem = /**
     * @return {?}
     */
    function () {
        if (!this.item.disabled) {
            this.change.emit(this.item);
        }
    };
    /**
     * @return {?}
     */
    StDropdownMenuItemComponent.prototype.onToggleExtraButtonBubble = /**
     * @return {?}
     */
    function () {
        this.visibleExtraButtonBubble = !this.visibleExtraButtonBubble;
    };
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.hasItem && this.item.selected && this.styleSelected) ||
                (this.hasItem && this.selectedItem !== undefined && this.item.value === this.selectedItem.value && this.styleSelected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasIcon ? this.item.icon : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "html", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item && this.item.label ? this.sanitizer.bypassSecurityTrustHtml(this.item.label) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "hasIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasItem && this.item.icon !== undefined && this.item.icon !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "hasExtraIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasItem && this.item.extraIcon !== undefined && this.item.extraIcon !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "hasItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item !== undefined && this.item !== null;
        },
        enumerable: true,
        configurable: true
    });
    StDropdownMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-dropdown-menu-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<li *ngIf=\"hasItem\"\n    [attr.tabindex]=\"index\"\n    [ngClass]=\"{'selected': isSelected, 'disabled': item.disabled, 'top-separator': item.topSeparator, 'bottom-separator': item.bottomSeparator}\"\n    class=\"st-dropdown-menu-item\"\n    (click)=\"onChangeItem()\"\n    (keyup.enter)=\"onChangeItem()\"\n>\n   <i *ngIf=\"hasIcon\" class=\"icon\" [ngClass]=\"icon\" [style.color]=\"item.iconColor\"></i>\n   <div *ngIf=\"!item.hasHtml\" class=\"label-container\">\n      <span class=\"label\">\n         <span [style.color]=\"item.labelColor\">{{item.label}}</span>\n         <span *ngIf=\"item.textInfo\" class=\"text-info\">{{item.textInfo}}</span>\n      </span>\n      <ng-container *ngIf=\"hasExtraIcon\">\n         <i class=\"extra-icon\" *ngIf=\"!item.extraIconBubble\"\n            [ngClass]=\"item.extraIcon\"\n            [style.color]=\"item.extraIconColor\">\n         </i>\n         <st-bubble *ngIf=\"item.extraIconBubble\" class=\"extra-icon__bubble\"\n                    [hidden]=\"!visibleExtraButtonBubble\"\n                    [small]=\"true\"\n                    [text]=\"item.extraIconBubble\"\n                    [animation]=\"false\"\n                    [showArrow]=\"true\"\n                    [offset]=\"{x: 38, y: 9}\"\n                    [openToLeft]=\"true\">\n            <i bubble-button\n               [ngClass]=\"item.extraIcon\"\n               [style.color]=\"item.extraIconColor\"\n               (mouseenter)=\"onToggleExtraButtonBubble()\"\n               (mouseleave)=\"onToggleExtraButtonBubble()\">\n            </i>\n         </st-bubble>\n      </ng-container>\n   </div>\n\n   <div *ngIf=\"item.hasHtml\" [innerHTML]=\"html\"></div>\n</li>\n"
                }] }
    ];
    /** @nocollapse */
    StDropdownMenuItemComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    StDropdownMenuItemComponent.propDecorators = {
        index: [{ type: Input }],
        item: [{ type: Input }],
        selectedItem: [{ type: Input }],
        styleSelected: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StDropdownMenuItemComponent;
}());
if (false) {
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.index;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.item;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.selectedItem;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.styleSelected;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.change;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.visibleExtraButtonBubble;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuItemComponent.prototype.sanitizer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu-item/st-dropdown-menu-item.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDropdownMenuItemModule = /** @class */ (function () {
    function StDropdownMenuItemModule() {
    }
    StDropdownMenuItemModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StBubbleModule],
                    declarations: [StDropdownMenuItemComponent],
                    exports: [StDropdownMenuItemComponent]
                },] }
    ];
    return StDropdownMenuItemModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDropdownMenuModule = /** @class */ (function () {
    function StDropdownMenuModule() {
    }
    StDropdownMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StPopModule, StSpinnerModule, StDropdownMenuItemModule],
                    declarations: [StDropdownMenuComponent],
                    exports: [StDropdownMenuComponent]
                },] }
    ];
    return StDropdownMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-file-button/st-file-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [File button]
 *
 * The file button allows to upload a file with a specified extension.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-file-button text="IMPORT" accepted='json'
 * (selected)="onUploadValidFile($event)"
 * (error)="onUploadInvalidFile()">
 * </st-file-button>
 * ```
 *
 */
var StFileButtonComponent = /** @class */ (function () {
    function StFileButtonComponent() {
        /**
         * \@Input {string} [buttonClass=''] Class for button
         */
        this.buttonClass = 'button-primary';
        /**
         * \@Input {string} [accepted=''] The allowed extensions
         */
        this.accepted = '';
        /**
         * \@Output {File} [selected=''] Event emitted when a file is selected
         */
        this.selected = new EventEmitter();
        /**
         * \@Output {Error} [error=''] Event emitted when an invalid file is selected
         */
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StFileButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._accepted = this.accepted.split(',');
    };
    /**
     * @param {?} eventData
     * @return {?}
     */
    StFileButtonComponent.prototype.onChange = /**
     * @param {?} eventData
     * @return {?}
     */
    function (eventData) {
        /** @type {?} */
        var files = eventData.target.files;
        if (this.areFilesValid(files)) {
            this.selected.emit(eventData.target.files);
        }
        else {
            this.error.emit();
        }
        eventData.srcElement.value = '';
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    StFileButtonComponent.prototype.areFilesValid = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        for (var i = 0; i < files.length; ++i) {
            /** @type {?} */
            var file = files[i];
            if (file.type && this._accepted.indexOf(file.type.split('/').pop()) === -1
                || (!file.type && this._accepted.indexOf(file.name.split('.').pop()) === -1)) {
                return false;
            }
        }
        return true;
    };
    StFileButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-file-button',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<input type=\"file\" [name]=\"id\" [id]=\"id\" class=\"input-file\" accept=\"{{accepted}}\" (change)=\"onChange($event)\"/>\n<label class=\"button {{buttonClass}}\" [for]=\"id\">{{text}}</label>\n",
                    styles: ["@charset \"UTF-8\";.input-file{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.input-file+label{display:inline-block;cursor:pointer}"]
                }] }
    ];
    StFileButtonComponent.propDecorators = {
        text: [{ type: Input }],
        buttonClass: [{ type: Input }],
        accepted: [{ type: Input }],
        id: [{ type: Input }],
        selected: [{ type: Output }],
        error: [{ type: Output }]
    };
    return StFileButtonComponent;
}());
if (false) {
    /**
     * \@Input {string} [text=''] Displayed text
     * @type {?}
     */
    StFileButtonComponent.prototype.text;
    /**
     * \@Input {string} [buttonClass=''] Class for button
     * @type {?}
     */
    StFileButtonComponent.prototype.buttonClass;
    /**
     * \@Input {string} [accepted=''] The allowed extensions
     * @type {?}
     */
    StFileButtonComponent.prototype.accepted;
    /**
     * \@Input {string} [id=''] Identifier for input
     * @type {?}
     */
    StFileButtonComponent.prototype.id;
    /**
     * \@Output {File} [selected=''] Event emitted when a file is selected
     * @type {?}
     */
    StFileButtonComponent.prototype.selected;
    /**
     * \@Output {Error} [error=''] Event emitted when an invalid file is selected
     * @type {?}
     */
    StFileButtonComponent.prototype.error;
    /**
     * @type {?}
     * @private
     */
    StFileButtonComponent.prototype._accepted;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-file-button/st-file-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFileButtonModule = /** @class */ (function () {
    function StFileButtonModule() {
    }
    StFileButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StFileButtonComponent],
                    exports: [StFileButtonComponent]
                },] }
    ];
    return StFileButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-footer/st-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFooterComponent = /** @class */ (function () {
    function StFooterComponent(router) {
        this.router = router;
        this.links = [];
        this.link = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    StFooterComponent.prototype.goToLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        if (link.url) {
            window.open(link.url, '_blank');
        }
        if (link.router) {
            this.router.navigate([link.router]);
        }
        this.link.emit(link);
    };
    StFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-footer',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<footer class=\"footer st-footer\">\n   <div class=\"st-footer-container\">\n      <div class=\"logo st-footer-logo\" *ngIf=\"image\">\n         <img [src]=\"image\">\n      </div>\n      <div class=\"st-footer-content\">\n         <span class=\"text st-footer-text\" *ngIf=\"rightsText\">{{ rightsText }}</span>\n\n         <ul class=\"st-footer-links links\" *ngIf=\"links.length\">\n            <li *ngFor=\"let link of links; let index = index\">\n               <span *ngIf=\"link.icon\" class=\"icon\" [ngClass]=\"link.icon\" [title]=\"link.title\" (click)=\"goToLink(link)\"></span>\n               <span  *ngIf=\"!link.icon\" class=\"link\" (click)=\"goToLink(link)\" [attr.id]=\"qaTag + '-link-' + index\">{{ link.title }}</span>\n            </li>\n         </ul>\n      </div>\n   </div>\n</footer>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.footer{width:100%;height:215px;padding:55px 30px 35px}.footer .st-footer-container{display:flex;flex-direction:column;justify-content:space-between;height:100%}.footer .st-footer-container .st-footer-content{display:flex;flex-direction:row;justify-content:space-between}.footer .text{display:inline-block;margin:0;padding:0}.footer .links{display:inline;list-style:none;margin:0;padding:0}.footer .links li{display:inline-block;cursor:pointer}.footer .links .separator{margin:0 5px}.footer .logo{margin:0;position:relative}.footer .logo img{width:auto;max-height:100%}"]
                }] }
    ];
    /** @nocollapse */
    StFooterComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    StFooterComponent.propDecorators = {
        rightsText: [{ type: Input }],
        links: [{ type: Input }],
        qaTag: [{ type: Input }],
        image: [{ type: Input }],
        link: [{ type: Output }]
    };
    return StFooterComponent;
}());
if (false) {
    /** @type {?} */
    StFooterComponent.prototype.rightsText;
    /** @type {?} */
    StFooterComponent.prototype.links;
    /** @type {?} */
    StFooterComponent.prototype.qaTag;
    /** @type {?} */
    StFooterComponent.prototype.image;
    /** @type {?} */
    StFooterComponent.prototype.link;
    /**
     * @type {?}
     * @private
     */
    StFooterComponent.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-footer/st-footer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFooterModule = /** @class */ (function () {
    function StFooterModule() {
    }
    StFooterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    exports: [StFooterComponent],
                    declarations: [StFooterComponent],
                    providers: []
                },] }
    ];
    return StFooterModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form/st-min-validator/st-min-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StMinValidator = /** @class */ (function () {
    function StMinValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StMinValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('min' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    StMinValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.min == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StMinValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @private
     * @return {?}
     */
    StMinValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        this._validator = Validators.min(Number(this.min));
    };
    StMinValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StMinValidator; })), multi: true }
                    ], host: { '[attr.min]': 'min ? min : null' }
                },] }
    ];
    StMinValidator.propDecorators = {
        min: [{ type: Input }]
    };
    return StMinValidator;
}());
if (false) {
    /** @type {?} */
    StMinValidator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    StMinValidator.prototype._validator;
    /**
     * @type {?}
     * @private
     */
    StMinValidator.prototype._onChange;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form/st-max-validator/st-max-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StMaxValidator = /** @class */ (function () {
    function StMaxValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StMaxValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('max' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    StMaxValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.max == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StMaxValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @private
     * @return {?}
     */
    StMaxValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        this._validator = Validators.max(Number(this.max));
    };
    StMaxValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StMaxValidator; })), multi: true }
                    ],
                    host: { '[attr.max]': 'max ? max : null' }
                },] }
    ];
    StMaxValidator.propDecorators = {
        max: [{ type: Input }]
    };
    return StMaxValidator;
}());
if (false) {
    /** @type {?} */
    StMaxValidator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    StMaxValidator.prototype._validator;
    /**
     * @type {?}
     * @private
     */
    StMaxValidator.prototype._onChange;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form/form-directives.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SHARED_FORM_DIRECTIVES = [
    StMinValidator,
    StMaxValidator
];
var StFormDirectiveModule = /** @class */ (function () {
    function StFormDirectiveModule() {
    }
    StFormDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: SHARED_FORM_DIRECTIVES,
                    exports: SHARED_FORM_DIRECTIVES
                },] }
    ];
    return StFormDirectiveModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form-field/st-form-field.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var FORM_UI_COMPONENT = {
    SHOW_MORE: (/** @type {?} */ ('show-more')),
    SWITCH: (/** @type {?} */ ('switch')),
    ACCORDION: (/** @type {?} */ ('accordion')),
};
/**
 * @record
 */
function StFormFieldTranslations() { }
if (false) {
    /** @type {?|undefined} */
    StFormFieldTranslations.prototype.placeholder;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-input/st-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} Input
 *
 * This component specifies an input field where the user can enter data.
 *
 * \@model
 *
 *   [Error messages] {./st-input.error.model.ts#StInputError}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-input class="st-form-field"
 *    type="text"
 *    formControlName="name"
 *    placeholder="Enter your name"
 *    label="Field"
 *    default="default name"
 *    contextualHelp="This is a normal field">
 * </st-input>
 * ```
 */
var StInputComponent = /** @class */ (function () {
    function StInputComponent(_cd) {
        this._cd = _cd;
        /**
         * \@input {string} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
         */
        this.placeholder = '';
        /**
         * \@input {string} [name=''] Input name
         */
        this.name = '';
        /**
         * \@input {string} [label=''] Label to show over the input. It is empty by default
         */
        this.label = '';
        /**
         * \@input {'text' | 'number' | 'password'} [fieldType='text'] Input type
         */
        this.fieldType = 'text';
        /**
         * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the input checks the errors before being modified by user
         */
        this.forceValidations = false;
        /**
         * \@Input {boolean} [isFocused=false] If true, the input will be focused on view init.
         */
        this.isFocused = false;
        /**
         * \@Input {boolean} [readonly=''] This parameter disables the input and it can not be modified by the user
         */
        this.readonly = false;
        /**
         * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
         */
        this.autocompleteList = [];
        /**
         * \@input {number} [charsToShowAutocompleteList=1] Number of characters before displaying autocomplete list. By default is 1
         */
        this.charsToShowAutocompleteList = 1;
        /**
         * \@Output {} [blur] Notify when user leaves a field
         */
        this.blur = new EventEmitter();
        this.disabled = false; // To check disable
        // To check disable
        this.displayResetButtonValue = false;
        this.focus = false;
        this.errorMessage = undefined;
        this.showErrorValue = false;
        this.expandedMenu = false;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StInputComponent.prototype, "value", {
        /** @Input {any} [value=''] Value of the input */
        get: /**
         * \@Input {any} [value=''] Value of the input
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StInputComponent.prototype, "showAutocompleteList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    StInputComponent.prototype.validate = /**
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
    StInputComponent.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (this.forceValidations && this.internalControl) {
            this.writeValue(this.internalControl.value);
        }
    };
    /**
     * @return {?}
     */
    StInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.internalControl = new FormControl(this.internalInputModel);
        this.valueChangeSub = this.internalControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.onChange(_this.getTypedValue(value));
            _this.showAutocompleteMenu();
            _this.showErrorValue = _this.showError();
            _this.displayResetButtonValue = _this.displayResetButton();
        }));
    };
    /**
     * @return {?}
     */
    StInputComponent.prototype.ngAfterViewInit = /**
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
    StInputComponent.prototype.ngOnDestroy = /**
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
    StInputComponent.prototype.writeValue = 
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.internalInputModel = value;
        this._value = value;
        this.internalControl.setValue(this.getTypedValue(value));
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StInputComponent.prototype.registerOnChange = 
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
    StInputComponent.prototype.registerOnTouched = 
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
    StInputComponent.prototype.setDisabledState = /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        this.disabled = disable;
        if (this.disabled && this.internalControl && this.internalControl.enabled) {
            this.internalControl.disable();
        }
        else if (!this.disabled && this.internalControl && this.internalControl.disabled) {
            this.internalControl.enable();
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StInputComponent.prototype.showError = /**
     * @return {?}
     */
    function () {
        return this.errorMessage !== undefined && (!this.internalControl.pristine || this.forceValidations) && !this.focus && !this.disabled;
    };
    Object.defineProperty(StInputComponent.prototype, "labelQaTag", {
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
    StInputComponent.prototype.displayResetButton = /**
     * @return {?}
     */
    function () {
        return this.default !== undefined && this.internalControl.dirty && this.internalControl.value !== this.default;
    };
    /**
     * @return {?}
     */
    StInputComponent.prototype.resetToDefault = /**
     * @return {?}
     */
    function () {
        this.writeValue(this.default);
        this._cd.markForCheck();
    };
    /**  Autocomplete list actions */
    /**
     * Autocomplete list actions
     * @param {?} data
     * @return {?}
     */
    StInputComponent.prototype.onListSelect = /**
     * Autocomplete list actions
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (data && data.value && data.value.length) {
            this.writeValue(data.value);
        }
        else {
            this.writeValue('');
        }
        this.expandedMenu = false;
        this._cd.markForCheck();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StInputComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.expandedMenu) {
            this.expandedMenu = false;
        }
    };
    /** Style functions */
    /**
     * Style functions
     * @param {?} event
     * @return {?}
     */
    StInputComponent.prototype.onFocus = /**
     * Style functions
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus = true;
        this.showErrorValue = this.showError();
        this.showAutocompleteMenu();
    };
    /**
     * @param {?} event
     * @param {?} emitEvent
     * @return {?}
     */
    StInputComponent.prototype.onFocusOut = /**
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
    // When status change call this function to check if have errors
    // When status change call this function to check if have errors
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    StInputComponent.prototype.checkErrors = 
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
        this._cd.markForCheck();
    };
    // Get error message in function of error list.
    // Get error message in function of error list.
    /**
     * @private
     * @param {?} errors
     * @return {?}
     */
    StInputComponent.prototype.getErrorMessage = 
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
        if (errors.hasOwnProperty('fieldType')) {
            return this.errors.type || this.errors.generic || '';
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
        if (errors.hasOwnProperty('min')) {
            return this.errors.min || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('max')) {
            return this.errors.max || this.errors.generic || '';
        }
        return '';
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StInputComponent.prototype.getTypedValue = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        switch (this.fieldType) {
            case 'number':
                if (!value || isNaN(Number(value))) {
                    return value;
                }
                else {
                    return Number(value);
                }
            default:
                return value;
        }
    };
    /**
     * @private
     * @return {?}
     */
    StInputComponent.prototype.showAutocompleteMenu = /**
     * @private
     * @return {?}
     */
    function () {
        this.expandedMenu = this.focus && this.internalControl && this.charsToShowAutocompleteList <= (this.internalControl.value || '').length;
        this._cd.markForCheck();
    };
    StInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-input',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<label *ngIf=\"label\" st-label class=\"st-input__label\"\n       [ngClass]=\"{error: showErrorValue, active: focus, disabled: disabled}\" name=\"name\"\n       [attr.id]=\"labelQaTag\" [attr.title]=\"contextualHelp\">\n   {{label}}\n</label>\n<div class=\"input-container\"  (clickOutside)=\"onClickOutside($event)\">\n   <input #input class=\"st-input\" (focus)=\"onFocus($event)\"\n          (focusout)=\"onFocusOut($event, false)\"\n          (blur)=\"onFocusOut($event, true)\"\n          [formControl]=\"internalControl\"\n          [placeholder]=\"placeholder\"\n          [step]=\"step\"\n          [name]=\"name\" [attr.type]=\"fieldType\" [attr.id]=\"qaTag\" [attr.maxlength]=\"maxLength\" [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [value]=\"value || null\" [readonly]=\"readonly\" [ngClass]=\"{error: showErrorValue}\">\n   <span *ngIf=\"displayResetButtonValue\" class=\"st-form-control-reset-button\" (click)=\"resetToDefault()\"\n         [style.opacity]=\"focus ? 1 : 0\">\n      <i class=\"icon-reload2\"></i>\n   </span>\n\n   <st-dropdown-menu *ngIf=\"autocompleteList\"\n      [attr.id]=\"labelQaTag + '-list'\"\n      [items]=\"autocompleteList\"\n      [placement]=\"'bottom-start'\"\n      [active]=\"showAutocompleteList\"\n      (change)=\"onListSelect($event)\">\n   </st-dropdown-menu>\n</div>\n\n<div class=\"st-input-error-layout\" *ngIf=\"showErrorValue\">\n   <span class=\"st-input-error-message\">{{errorMessage}}</span>\n</div>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StInputComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StInputComponent; })), multi: true }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-input-container{position:relative}.st-input-container :invalid{box-shadow:none}.st-input{width:100%}.input-container{position:relative}"]
                }] }
    ];
    /** @nocollapse */
    StInputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StInputComponent.propDecorators = {
        placeholder: [{ type: Input }],
        name: [{ type: Input }],
        label: [{ type: Input }],
        fieldType: [{ type: Input }],
        errors: [{ type: Input }],
        qaTag: [{ type: Input }],
        forceValidations: [{ type: Input }],
        contextualHelp: [{ type: Input }],
        maxLength: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        isFocused: [{ type: Input }],
        readonly: [{ type: Input }],
        step: [{ type: Input }],
        default: [{ type: Input }],
        autocompleteList: [{ type: Input }],
        charsToShowAutocompleteList: [{ type: Input }],
        value: [{ type: Input }],
        blur: [{ type: Output }],
        vc: [{ type: ViewChildren, args: ['input',] }],
        showAutocompleteList: [{ type: HostBinding, args: ['class.st-input--autocomplete',] }]
    };
    return StInputComponent;
}());
if (false) {
    /**
     * \@input {string} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
     * @type {?}
     */
    StInputComponent.prototype.placeholder;
    /**
     * \@input {string} [name=''] Input name
     * @type {?}
     */
    StInputComponent.prototype.name;
    /**
     * \@input {string} [label=''] Label to show over the input. It is empty by default
     * @type {?}
     */
    StInputComponent.prototype.label;
    /**
     * \@input {'text' | 'number' | 'password'} [fieldType='text'] Input type
     * @type {?}
     */
    StInputComponent.prototype.fieldType;
    /**
     * \@input {StInputError} [errors=] Customized error messages
     * @type {?}
     */
    StInputComponent.prototype.errors;
    /**
     * \@Input {string} [qaTag=''] Id value for qa test
     * @type {?}
     */
    StInputComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the input checks the errors before being modified by user
     * @type {?}
     */
    StInputComponent.prototype.forceValidations;
    /**
     * \@Input {string} [contextualHelp=''] It will be displayed when user clicks on the info button
     * @type {?}
     */
    StInputComponent.prototype.contextualHelp;
    /**
     * \@Input {string} [maxLength=''] Define a max-length for input field
     * @type {?}
     */
    StInputComponent.prototype.maxLength;
    /**
     * \@Input {string} [min=''] Define a minimum number for number inputs
     * @type {?}
     */
    StInputComponent.prototype.min;
    /**
     * \@Input {string} [max=''] Define a maximum number for number inputs
     * @type {?}
     */
    StInputComponent.prototype.max;
    /**
     * \@Input {boolean} [isFocused=false] If true, the input will be focused on view init.
     * @type {?}
     */
    StInputComponent.prototype.isFocused;
    /**
     * \@Input {boolean} [readonly=''] This parameter disables the input and it can not be modified by the user
     * @type {?}
     */
    StInputComponent.prototype.readonly;
    /**
     * \@Input {string} [step=''] It specifies the interval between legal numbers in the input field
     * @type {?}
     */
    StInputComponent.prototype.step;
    /**
     * \@Input {string} [default=] Default value of input
     * @type {?}
     */
    StInputComponent.prototype.default;
    /**
     * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
     * @type {?}
     */
    StInputComponent.prototype.autocompleteList;
    /**
     * \@input {number} [charsToShowAutocompleteList=1] Number of characters before displaying autocomplete list. By default is 1
     * @type {?}
     */
    StInputComponent.prototype.charsToShowAutocompleteList;
    /**
     * \@Output {} [blur] Notify when user leaves a field
     * @type {?}
     */
    StInputComponent.prototype.blur;
    /** @type {?} */
    StInputComponent.prototype.vc;
    /** @type {?} */
    StInputComponent.prototype.disabled;
    /** @type {?} */
    StInputComponent.prototype.displayResetButtonValue;
    /** @type {?} */
    StInputComponent.prototype.focus;
    /** @type {?} */
    StInputComponent.prototype.internalControl;
    /** @type {?} */
    StInputComponent.prototype.errorMessage;
    /** @type {?} */
    StInputComponent.prototype.showErrorValue;
    /** @type {?} */
    StInputComponent.prototype.expandedMenu;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype.valueChangeSub;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype.internalInputModel;
    /** @type {?} */
    StInputComponent.prototype.onChange;
    /** @type {?} */
    StInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/st-click-outside/st-click-outside.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StClickOutside = /** @class */ (function () {
    function StClickOutside(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StClickOutside.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var targetElement = (/** @type {?} */ (event.target));
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.clickOutside.emit(event);
        }
    };
    StClickOutside.decorators = [
        { type: Directive, args: [{ selector: '[clickOutside]' },] }
    ];
    /** @nocollapse */
    StClickOutside.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StClickOutside.propDecorators = {
        clickOutside: [{ type: Output }],
        onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return StClickOutside;
}());
if (false) {
    /** @type {?} */
    StClickOutside.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    StClickOutside.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/st-click-outside/st-click-outside.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StClickOutsideModule = /** @class */ (function () {
    function StClickOutsideModule() {
    }
    StClickOutsideModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [StClickOutside],
                    exports: [StClickOutside]
                },] }
    ];
    return StClickOutsideModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-input/st-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StInputModule = /** @class */ (function () {
    function StInputModule() {
    }
    StInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, StLabelModule, StFormDirectiveModule, StDropdownMenuModule, StClickOutsideModule],
                    declarations: [StInputComponent],
                    exports: [StInputComponent, StMinValidator, StMaxValidator]
                },] }
    ];
    return StInputModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form-field/st-form-field.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFormFieldComponent = /** @class */ (function () {
    function StFormFieldComponent() {
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
        function (_) {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    StFormFieldComponent_1 = StFormFieldComponent;
    Object.defineProperty(StFormFieldComponent.prototype, "schema", {
        get: /**
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
            this.selectOptions = this.getSelectOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "readOnly", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema && this._schema.value && this._schema.value.readOnly === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StFormFieldComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onChange(value);
        this.valueChange.emit(value);
    };
    /**
     * @param {?} control
     * @return {?}
     */
    StFormFieldComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (this.templateModel && this.templateModel.control && this.templateModel.control.validator) {
            return this.templateModel.control.validator(control);
        }
    };
    /**
     * @return {?}
     */
    StFormFieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._schema.value && this._schema.value.enum) {
            this.selectOptions = this.getSelectOptions();
        }
        this._loadErrorMessages();
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.default !== undefined && (_this.innerValue === undefined || _this.innerValue === null)) {
                _this.innerValue = _this.default;
                _this.onChange(_this.innerValue);
            }
            if (_this._schema.value.readOnly) {
                _this.setDisabledState(true);
            }
        }));
    };
    Object.defineProperty(StFormFieldComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this._schema.value.type) {
                case 'string':
                    return this._schema.value.enum ? 'select' : 'text';
                case 'integer':
                    return this._schema.value.enum ? 'select' : 'number';
                default:
                    return (/** @type {?} */ (this._schema.value.type));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "min", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.exclusiveMinimum ? this._schema.value.minimum + this.getInputStep() : this._schema.value.minimum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "max", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.exclusiveMaximum ? this._schema.value.maximum - this.getInputStep() : this._schema.value.maximum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.examples && this._schema.value.examples[0] ? this._schema.value.examples[0] : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "default", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "description", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.showTooltip) {
                return this._schema.value.description;
            }
            else {
                return undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "minLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.minLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "maxLength", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.maxLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StFormFieldComponent.prototype, "pattern", {
        get: /**
         * @return {?}
         */
        function () {
            return this._schema.value.pattern;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @return {?}
     */
    StFormFieldComponent.prototype.hasType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StFormFieldComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.innerValue = value;
        this.valueChange.emit(value);
        this.onChange(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormFieldComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormFieldComponent.prototype.registerOnTouched = /**
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
    StFormFieldComponent.prototype.setDisabledState = /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        if (this.templateModel && this.templateModel.control) {
            if (disable) {
                this.templateModel.control.disable();
            }
            else {
                this.templateModel.control.enable();
            }
        }
    };
    /**
     * @return {?}
     */
    StFormFieldComponent.prototype.getInputStep = /**
     * @return {?}
     */
    function () {
        if (this._schema.value.type === 'number') {
            return 0.1;
        }
        else {
            return 1;
        }
    };
    /**
     * @return {?}
     */
    StFormFieldComponent.prototype.getSelectOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = [];
        if (this._schema.value.enum) {
            /** @type {?} */
            var placeholder = (this.translations && this.translations.placeholder) || 'Select one option';
            options.push((/** @type {?} */ ({ label: placeholder, value: undefined })));
            /** @type {?} */
            var enumValues = (/** @type {?} */ (this._schema.value.enum));
            /** @type {?} */
            var uiOptions = (this._schema.value.ui && this._schema.value.ui.options) || [];
            options.push.apply(options, __spread(uiOptions));
            enumValues.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (!options.find((/**
                 * @param {?} _option
                 * @return {?}
                 */
                function (_option) { return _option.value === value; }))) {
                    options.push((/** @type {?} */ ({ label: value, value: value })));
                }
            }));
        }
        return options;
    };
    /**
     * @return {?}
     */
    StFormFieldComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.blur.emit();
    };
    /**
     * @return {?}
     */
    StFormFieldComponent.prototype.onClickLink = /**
     * @return {?}
     */
    function () {
        this.clickLink.emit(this._schema.key);
    };
    /**
     * @private
     * @return {?}
     */
    StFormFieldComponent.prototype._loadErrorMessages = /**
     * @private
     * @return {?}
     */
    function () {
        this.errors = {
            required: (this.errorMessages && this.errorMessages.required) || this._defaultErrorMessages.required,
            pattern: (this.errorMessages && this.errorMessages.pattern) || this._defaultErrorMessages.pattern,
            generic: (this.errorMessages && this.errorMessages.generic) || this._defaultErrorMessages.generic,
            minLength: ((this.errorMessages && this.errorMessages.minLength) || this._defaultErrorMessages.minLength) + this._schema.value.minLength,
            maxLength: ((this.errorMessages && this.errorMessages.maxLength) || this._defaultErrorMessages.maxLength) + this._schema.value.maxLength,
            min: ((this.errorMessages && this.errorMessages.min) || this._defaultErrorMessages.min) + (this.min - this.getInputStep()),
            max: ((this.errorMessages && this.errorMessages.max) || this._defaultErrorMessages.max) + (this.max + this.getInputStep())
        };
    };
    var StFormFieldComponent_1;
    StFormFieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-form-field',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-input *ngIf=\"hasType('input') && (!maxWidth || (!maxLength || maxLength < maxWidth) && (!minLength || minLength < maxWidth))\"\n          #templateModel=\"ngModel\"\n          [forceValidations]=\"forceValidations\"\n          [fieldType]=\"type\"\n          [label]=\"label\"\n          [name]=\"schema.key\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"innerValue\"\n          (ngModelChange)=\"setValue($event)\"\n          [contextualHelp]=\"description\"\n          [errors]=\"errors\"\n          [default]=\"default\"\n          [max]=\"max\"\n          [min]=\"min\"\n          [minlength]=\"minLength\"\n          [maxlength]=\"maxLength\"\n          [required]=\"required\"\n          [pattern]=\"pattern\"\n          [step]=\"getInputStep()\"\n          [qaTag]=\"qaTag\"\n          (blur)=\"onBlur()\">\n</st-input>\n\n<st-textarea *ngIf=\"hasType('input') && maxWidth && (maxLength >= maxWidth || minLength >= maxWidth)\"\n          #templateModel=\"ngModel\"\n          [label]=\"label\"\n          [name]=\"schema.key\"\n          [default]=\"default\"\n          [placeholder]=\"placeholder\"\n          [ngModel]=\"innerValue\"\n          (ngModelChange)=\"setValue($event)\"\n          [contextualHelp]=\"description\"\n          [errors]=\"errors\"\n          [minlength]=\"minLength\"\n          [maxlength]=\"maxLength\"\n          [required]=\"required\"\n          [pattern]=\"pattern\"\n          [qaTag]=\"qaTag\"\n          (blur)=\"onBlur()\">\n</st-textarea>\n\n<st-checkbox *ngIf=\"hasType('checkbox')\"\n             #templateModel=\"ngModel\"\n             [ngModel]=\"innerValue\"\n             (ngModelChange)=\"setValue($event)\"\n             [checked]=\"innerValue\"\n             [value]=\"innerValue\"\n             [name]=\"schema.key\"\n             [contextualHelp]=\"description\"\n             [qaTag]=\"qaTag\"><span>{{schema.value.title}}</span>\n</st-checkbox>\n\n<st-select *ngIf=\"hasType('select')\"\n           #templateModel=\"ngModel\"\n           [label]=\"label\"\n           [tooltip]=\"description\"\n           [name]=\"schema.key\"\n           [placeholder]=\"placeholder\"\n           [default]=\"default\"\n           [options]=\"selectOptions\"\n           [ngModel]=\"innerValue\"\n           (ngModelChange)=\"setValue($event)\"\n           [required]=\"required\"\n           [id]=\"qaTag\">\n</st-select>\n\n<st-switch *ngIf=\"hasType('switch')\"\n           #templateModel=\"ngModel\"\n           [label]=\"schema.value.title\"\n           [name]=\"schema.key\"\n           [contextualHelp]=\"description\"\n           [ngModel]=\"innerValue\"\n           (ngModelChange)=\"setValue($event)\"\n           [value]=\"innerValue\"\n           [qaTag]=\"schema.key\"\n           [id]=\"qaTag\">\n</st-switch>\n\n<span *ngIf=\"schema?.value?.ui?.link\" class=\"button button-link small\" (click)=\"onClickLink()\">{{schema.value.ui.link}}</span>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormFieldComponent_1; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormFieldComponent_1; })), multi: true }
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
    __decorate([
        StRequired(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], StFormFieldComponent.prototype, "schema", null);
    StFormFieldComponent = StFormFieldComponent_1 = __decorate([
        StEgeo()
    ], StFormFieldComponent);
    return StFormFieldComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-check-validations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StCheckValidationsDirective = /** @class */ (function () {
    function StCheckValidationsDirective(control) {
        this.control = control;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    StCheckValidationsDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @return {?}
     */
    StCheckValidationsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.control.statusChanges.subscribe((/**
         * @return {?}
         */
        function () { return _this.notifyErrorsIfExists(); }));
    };
    /**
     * @return {?}
     */
    StCheckValidationsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    // TODO implement error check and notify correct error
    // TODO implement error check and notify correct error
    /**
     * @private
     * @return {?}
     */
    StCheckValidationsDirective.prototype.notifyErrorsIfExists = 
    // TODO implement error check and notify correct error
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.control.valid && this.onChange) {
            this.onChange(null);
        }
        else if (this.onChange) {
            this.onChange(this.errorMessage);
        }
    };
    StCheckValidationsDirective.decorators = [
        { type: Directive, args: [{ selector: '[stCheckValidations]' },] }
    ];
    /** @nocollapse */
    StCheckValidationsDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    StCheckValidationsDirective.propDecorators = {
        errorMessage: [{ type: Input }]
    };
    return StCheckValidationsDirective;
}());
if (false) {
    /** @type {?} */
    StCheckValidationsDirective.prototype.errorMessage;
    /** @type {?} */
    StCheckValidationsDirective.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    StCheckValidationsDirective.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    StCheckValidationsDirective.prototype.control;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            this._options = cloneDeep(options);
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
            function (item) { return has(item, propName) && item[propName] === propValue; }));
        }
        else if (this.isStDropdownGroupList(this.options)) {
            return flatten(this.options.map((/**
             * @param {?} group
             * @return {?}
             */
            function (group) { return group.items; }))).find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return has(item, propName) && item[propName] === propValue; }));
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
        return this.options && this.options.length > 0 && !has(((/** @type {?} */ (items)))[0], 'items');
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
        return this.options && this.options.length > 0 && has(((/** @type {?} */ (items)))[0], 'items');
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StSelectModule = /** @class */ (function () {
    function StSelectModule() {
    }
    StSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StDropdownMenuModule, FormsModule, ReactiveFormsModule, StLabelModule, StClickOutsideModule],
                    declarations: [StSelectComponent, StCheckValidationsDirective],
                    exports: [StSelectComponent, StCheckValidationsDirective]
                },] }
    ];
    return StSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-switch/st-switch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StSwitchComponent = /** @class */ (function () {
    function StSwitchComponent(_cd) {
        this._cd = _cd;
        this.change = new EventEmitter();
    }
    StSwitchComponent_1 = StSwitchComponent;
    Object.defineProperty(StSwitchComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSwitchComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSwitchComponent.prototype, "labelQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.qaTag || this.name) + '-label';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StSwitchComponent.prototype, "relatedInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} control
     * @return {?}
     */
    StSwitchComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) { };
    // load external change
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    StSwitchComponent.prototype.writeValue = 
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this._disabled) {
            this._value = value;
            this.change.emit(this._value);
            if (this.registeredOnChange) {
                this.registeredOnChange(value);
            }
        }
    };
    // internal change callback
    // internal change callback
    /**
     * @param {?} fn
     * @return {?}
     */
    StSwitchComponent.prototype.registerOnChange = 
    // internal change callback
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.registeredOnChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @param {?} disable
     * @return {?}
     */
    StSwitchComponent.prototype.setDisabledState = /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        this.disabled = disable;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StSwitchComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var value = ((/** @type {?} */ (event.target))).checked;
        this._value = value;
        this.writeValue(value);
    };
    var StSwitchComponent_1;
    StSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-switch',
                    host: { class: 'st-switch' },
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label st-label [attr.for]=\"relatedInput\" [attr.title]=\"contextualHelp\" [attr.id]=\"labelQaTag\" >\n   {{label}}\n</label>\n<div class=\"st-switch__toggle sth-switch__toggle\" (click)=\"writeValue(!value)\" [attr.id]=\"labelQaTag\" [ngClass]=\"{ 'st-switch--disabled': disabled, 'st-switch--on': value, 'st-switch--off': !value}\">\n   <div class=\"st-switch__box sth-switch__box\">\n      <span class=\"st-switch__circle sth-switch__circle\"></span>\n   </div>\n   <input class=\"st-switch__input\" [name]=\"name\" [attr.type]=\"'checkbox'\" [checked]=\"value\" (click)=\"onChange($event)\" [attr.id]=\"relatedInput\"\n   [disabled]=\"disabled\" />\n</div>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StSwitchComponent_1; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StSwitchComponent_1; })), multi: true }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-switch__input{visibility:hidden;position:absolute}.st-switch__toggle{margin-left:15px;vertical-align:middle;position:relative;height:25px;width:45px;display:inline-block;cursor:pointer}.st-switch__box{border-radius:42px;height:100%;width:100%}.st-switch__circle{width:19px;height:19px;top:3px;left:3px;border-radius:100%;position:absolute;transition:.3s}.st-switch--disabled{opacity:.5}.st-switch--on .st-switch__circle{margin-left:21px}"]
                }] }
    ];
    /** @nocollapse */
    StSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StSwitchComponent.propDecorators = {
        qaTag: [{ type: Input }],
        label: [{ type: Input }],
        name: [{ type: Input }],
        contextualHelp: [{ type: Input }],
        change: [{ type: Output }],
        value: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    StSwitchComponent = StSwitchComponent_1 = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], StSwitchComponent);
    return StSwitchComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-switch/st-switch.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StSwitchModule = /** @class */ (function () {
    function StSwitchModule() {
    }
    StSwitchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, StLabelModule],
                    declarations: [StSwitchComponent],
                    exports: [StSwitchComponent]
                },] }
    ];
    return StSwitchModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-textarea/st-textarea.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-textarea/st-textarea.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTextareaModule = /** @class */ (function () {
    function StTextareaModule() {
    }
    StTextareaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, StLabelModule],
                    declarations: [StTextareaComponent],
                    exports: [StTextareaComponent]
                },] }
    ];
    return StTextareaModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form-field/st-form-field.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFormFieldModule = /** @class */ (function () {
    function StFormFieldModule() {
    }
    StFormFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        StInputModule,
                        StCheckboxModule,
                        StSelectModule,
                        StSwitchModule,
                        StTextareaModule,
                        StFormDirectiveModule],
                    declarations: [StFormFieldComponent],
                    exports: [StFormFieldComponent]
                },] }
    ];
    return StFormFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFormModule = /** @class */ (function () {
    function StFormModule() {
    }
    StFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        StFormFieldModule,
                        ReactiveFormsModule,
                        StInputModule,
                        PipesModule,
                        StSelectModule,
                        StSwitchModule,
                        StFormDirectiveModule,
                        StTextareaModule
                    ],
                    declarations: [StFormComponent],
                    exports: [StFormComponent]
                },] }
    ];
    return StFormModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form-list/st-form-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Form list]
 *
 * The form list component allows to create dynamically list of items.
 *
 * \@example
 *
 * {html}
 *
 * ```
 *
 * <st-form-list [schema]="jsonSchema" [ngModel]="model1" name="list"
 * (blur)="onBlur($event)" (add)="onAddItem($event)" (remove)="onRemoveItem($event)">
 * </st-form-list>
 *
 * ```
 *
 *
 */
var StFormListComponent = /** @class */ (function () {
    function StFormListComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {string} [buttonLabel='Add one more item'] String displayed in the button to add more items
         */
        this.buttonLabel = 'Add one more item';
        /**
         * \@Output {any[]} [valueChange] Notify any value change
         */
        this.valueChange = new EventEmitter();
        /**
         * \@Output {number} [add]  Notify the position of the added item and the modified model
         */
        this.add = new EventEmitter();
        /**
         * \@Output {number} [remove] Notify the position of the removed item and the modified model
         */
        this.remove = new EventEmitter();
        /**
         * \@Output {any[]} [blur] Notify when user leaves a field
         */
        this.blur = new EventEmitter();
        this.formArray = new FormArray([]);
        this._value = [];
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StFormListComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._value) {
                this._value = cloneDeep(value);
                this.updateForm();
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Function to call when the value changes.
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    StFormListComponent.prototype.onChange = 
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @return {?}
     */
    StFormListComponent.prototype.addItem = /**
     * @return {?}
     */
    function () {
        this._value.push({});
        this.formArray.push(this.generateItemFormGroup());
        this.valueChange.emit(this._value);
        this.add.emit({ position: this._value.length - 1, model: this._value });
        this.onChange(this._value);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    StFormListComponent.prototype.removeItem = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.formArray.removeAt(position);
        this._value.splice(position, 1);
        this.valueChange.emit(this._value);
        this.remove.emit({ position: position, model: this._value });
        this.onChange(this._value);
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormListComponent.prototype.isRequired = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    StFormListComponent.prototype.generateItemFormGroup = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var formGroup = new FormGroup({});
        /** @type {?} */
        var properties = Object.keys(this.schema.properties);
        for (var i = 0; i < properties.length; ++i) {
            /** @type {?} */
            var property = properties[i];
            /** @type {?} */
            var value = this.schema.properties[property].default;
            if (position !== undefined && this._value[i]) {
                value = position !== undefined ? this._value[i][property] : null;
            }
            formGroup.addControl(properties[i], new FormControl(value));
        }
        return formGroup;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    StFormListComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var errors = null;
        if (this.formArray) {
            var _loop_1 = function (i) {
                /** @type {?} */
                var rowFormGroup = (/** @type {?} */ (this_1.formArray.controls[i]));
                Object.keys(rowFormGroup.controls).forEach((/**
                 * @param {?} propertyName
                 * @return {?}
                 */
                function (propertyName) {
                    if (rowFormGroup.controls[propertyName] && rowFormGroup.controls[propertyName].errors) {
                        if (!errors) {
                            errors = [];
                        }
                        if (!errors[i]) {
                            errors[i] = {};
                        }
                        errors[i][propertyName] = rowFormGroup.controls[propertyName].errors;
                    }
                }));
            };
            var this_1 = this;
            for (var i = 0; i < this.formArray.controls.length; ++i) {
                _loop_1(i);
            }
        }
        return errors;
    };
    /**
     * @param {?} value
     * @param {?} rowPosition
     * @param {?} property
     * @return {?}
     */
    StFormListComponent.prototype.onChangeProperty = /**
     * @param {?} value
     * @param {?} rowPosition
     * @param {?} property
     * @return {?}
     */
    function (value, rowPosition, property) {
        var _this = this;
        this._value[rowPosition][property] = value;
        this.valueChange.emit(this._value);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.onChange(_this._value);
        }));
    };
    /**
     * @return {?}
     */
    StFormListComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.blur.emit(this._value);
    };
    // When value is received from outside
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    StFormListComponent.prototype.writeValue = 
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && this._value !== value) {
            this._value = cloneDeep(value);
            this.updateForm();
            this._cd.markForCheck();
        }
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormListComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormListComponent.prototype.registerOnTouched = /**
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
    StFormListComponent.prototype.setDisabledState = 
    // Allows Angular to disable the form.
    /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        if (disable) {
            this.formArray.disable();
        }
        else {
            this.formArray.enable();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StFormListComponent.prototype.updateForm = /**
     * @private
     * @return {?}
     */
    function () {
        this.formArray = new FormArray([]);
        if (this._value) {
            for (var i = 0; i < this._value.length; ++i) {
                this.formArray.push(this.generateItemFormGroup(i));
            }
        }
    };
    StFormListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-form-list',
                    template: "<form novalidate class=\"st-form-list\">\n   <div *ngFor=\"let row of value; let i=index\" class=\"st-form-list__row\">\n         <st-form-field class=\"st-form-list__row-item\"\n                        *ngFor=\"let property of schema.properties | stObjectToArray\"\n                        [schema]=\"property\"\n                        [formControl]=\"formArray.controls[i].get(property.key)\"\n                        [ngModel]=\"row[property.key]\"\n                        (ngModelChange)=\"onChangeProperty($event, i, property.key)\"\n                        name=\"{{property.key}}\"\n                        qaTag=\"{{property.key}}-{{i}}\"\n                        (blur)=\"onBlur()\"\n                        [required]=\"isRequired(property.key)\">\n         </st-form-field>\n         <i class=\"icon-cross remove-button\" (click)=\"removeItem(i)\"></i>\n   </div>\n\n   <button *ngIf=\"formArray && !formArray.disabled\" class=\"button button-link\" (click)=\"addItem()\">\n      <i class=\"icon-circle-plus\"></i><span>{{buttonLabel}}</span>\n   </button>\n</form>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormListComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormListComponent; })), multi: true }
                    ],
                    styles: [".st-form-list{width:100%}.st-form-list__row{display:flex;position:relative}.st-form-list__row :first-child{margin-right:10px}.st-form-list__row-item{flex:1;margin-bottom:20px}.st-form-list__row:first-of-type .remove-button{margin-top:25px}.st-form-list__row:not(first-of-type) .remove-button{margin-top:6px}.button.button-link{margin-top:4px}.button.button-link>i{padding-right:4px}.remove-button{vertical-align:middle;padding-left:15px;cursor:pointer;position:absolute;right:-30px;top:0}"]
                }] }
    ];
    /** @nocollapse */
    StFormListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StFormListComponent.propDecorators = {
        schema: [{ type: Input }],
        buttonLabel: [{ type: Input }],
        valueChange: [{ type: Output }],
        add: [{ type: Output }],
        remove: [{ type: Output }],
        blur: [{ type: Output }],
        value: [{ type: Input }]
    };
    return StFormListComponent;
}());
if (false) {
    /**
     * \@Input {any} [schema=''] JSON schema of items
     * @type {?}
     */
    StFormListComponent.prototype.schema;
    /**
     * \@Input {string} [buttonLabel='Add one more item'] String displayed in the button to add more items
     * @type {?}
     */
    StFormListComponent.prototype.buttonLabel;
    /**
     * \@Output {any[]} [valueChange] Notify any value change
     * @type {?}
     */
    StFormListComponent.prototype.valueChange;
    /**
     * \@Output {number} [add]  Notify the position of the added item and the modified model
     * @type {?}
     */
    StFormListComponent.prototype.add;
    /**
     * \@Output {number} [remove] Notify the position of the removed item and the modified model
     * @type {?}
     */
    StFormListComponent.prototype.remove;
    /**
     * \@Output {any[]} [blur] Notify when user leaves a field
     * @type {?}
     */
    StFormListComponent.prototype.blur;
    /** @type {?} */
    StFormListComponent.prototype.formArray;
    /**
     * @type {?}
     * @private
     */
    StFormListComponent.prototype._value;
    /** @type {?} */
    StFormListComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StFormListComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form-list/st-form-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFormListModule = /** @class */ (function () {
    function StFormListModule() {
    }
    StFormListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        StFormFieldModule,
                        PipesModule,
                        StFormDirectiveModule
                    ],
                    declarations: [StFormListComponent],
                    exports: [StFormListComponent]
                },] }
    ];
    return StFormListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-fullscreen-layout/st-fullscreen-layout.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Fullscreen Layout]
 *
 * Component that shows a full screen view with a title and space for buttons and a
 * main content defined by user using ng-content
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-fullscreen-layout [fullWidth]="true">
 *    <p class="st-fullscreen-layout-title">Edition</p>
 *    <div class="st-fullscreen-layout-buttons">
 *       <button class="button button-secondary button-separator" (click)="onClickHideButton()">Cancel</button>
 *       <button class="button button-primary" (click)="onClickHideButton()">Save</button>
 *    </div>
 *    <div class="st-fullscreen-layout-content">
 *       <h1>TEST</h1>
 *    </div>
 * </st-fullscreen-layout>
 * ```
 */
var StFullscreenLayoutComponent = /** @class */ (function () {
    function StFullscreenLayoutComponent(windowRef) {
        this.windowRef = windowRef;
        /**
         * \@Input {boolean} [showCloseButton=true] Shows header close button
         */
        this.showCloseButton = true;
        this.close = new EventEmitter();
        this.windowRef.nativeWindow.document.body.style.overflow = 'hidden';
    }
    /**
     * @return {?}
     */
    StFullscreenLayoutComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.windowRef.nativeWindow.document.body.style.overflow = '';
    };
    StFullscreenLayoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-fullscreen-layout',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-fullscreen-layout\" [ngClass]=\"{'full-width': fullWidth}\">\n   <div class=\"st-fullscreen-layout-header\">\n      <div class=\"container\">\n         <div class=\"st-fullscreen-layout__close\" *ngIf=\"showCloseButton\">\n            <span class=\"icon icon-cross\" (click)=\"close.emit()\"></span>\n         </div>\n         <ng-content select=\".st-fullscreen-layout-title\"></ng-content>\n\n         <div class=\"buttons\">\n            <ng-content select=\".st-fullscreen-layout-buttons\"></ng-content>\n         </div>\n      </div>\n   </div>\n   <div class=\"st-fullscreen-layout-container\">\n      <div  class=\"container\">\n         <ng-content select=\".st-fullscreen-layout-content\"></ng-content>\n      </div>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-fullscreen-layout{width:100%;min-height:100vh;position:absolute;overflow:auto;left:0;top:0;display:flex;flex-direction:column}.st-fullscreen-layout .st-fullscreen-layout-header{display:flex;flex-direction:row;width:100%;height:70px;position:fixed}.st-fullscreen-layout .st-fullscreen-layout-header .container{align-items:center}.st-fullscreen-layout .st-fullscreen-layout-header .buttons{margin-left:auto}"]
                }] }
    ];
    /** @nocollapse */
    StFullscreenLayoutComponent.ctorParameters = function () { return [
        { type: StWindowRefService }
    ]; };
    StFullscreenLayoutComponent.propDecorators = {
        fullWidth: [{ type: Input }],
        showCloseButton: [{ type: Input }],
        close: [{ type: Output }]
    };
    return StFullscreenLayoutComponent;
}());
if (false) {
    /**
     * \@Input {boolean} [fullWidth=false] Enable full width visualization
     * @type {?}
     */
    StFullscreenLayoutComponent.prototype.fullWidth;
    /**
     * \@Input {boolean} [showCloseButton=true] Shows header close button
     * @type {?}
     */
    StFullscreenLayoutComponent.prototype.showCloseButton;
    /** @type {?} */
    StFullscreenLayoutComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    StFullscreenLayoutComponent.prototype.windowRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-fullscreen-layout/st-fullscreen-layout.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFullscreenLayoutModule = /** @class */ (function () {
    function StFullscreenLayoutModule() {
    }
    StFullscreenLayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        StFullscreenLayoutComponent
                    ],
                    exports: [StFullscreenLayoutComponent]
                },] }
    ];
    return StFullscreenLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/st-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Header]
 *
 * The header component is a main component of an application.
 * This component must be on top and scroll with page, when scroll is in a calculated position,
 * the header shrinks and fix to top.
 *
 * \@model
 *
 *   [Header menu options] {./st-header.model.ts#StHeaderMenuOption}
 *   [Submenu options] {./st-header.model.ts#StHeaderSubMenuOption}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-header [menu]="headerMenuSchema" id="header">
 *     <div class="st-header-logo">
 *        <!-- Logo as svg, image, etc. -->
 *     </div>
 *     <div class="st-header-user-menu">
 *        <!-- Right header menu, with user menu, notifications, etc -->
 *     </div>
 *
 *  </st-header>
 * ```
 */
var StHeaderComponent = /** @class */ (function () {
    function StHeaderComponent(_router, _windowServiceRef, _el, _cd) {
        this._router = _router;
        this._windowServiceRef = _windowServiceRef;
        this._el = _el;
        this._cd = _cd;
        /**
         * \@Input {StHeaderMenuOption[]} [menu] Array with menu option to show
         */
        this.menu = [];
        /**
         * \@Input {boolean} [navigateByDefault] True if we want menu to manage navigation, false if navigation will be managed from the outside
         */
        this.navigateByDefault = true;
        /**
         * \@Output {StHeaderSelection} [selectMenu] Notify any menu option selection
         */
        this.selectMenu = new EventEmitter();
        this.showMenuNames = true;
        this._headerSize = 0;
    }
    /**
     * @return {?}
     */
    StHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._headerSize = this.headerFixPart.nativeElement.getBoundingClientRect().width + this.userMenuElementWidth + 20;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkMenuLabelVisibility();
            _this._cd.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    StHeaderComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.checkMenuLabelVisibility();
        this._cd.markForCheck();
    };
    Object.defineProperty(StHeaderComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._el.nativeElement.id || 'st-header';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selected
     * @return {?}
     */
    StHeaderComponent.prototype.onSelectMenu = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        if (this.navigateByDefault) {
            if (selected.external) {
                this._windowServiceRef.nativeWindow.open(selected.link, selected.openInNewPage ? '_blank' : '_self');
            }
            else {
                this._router.navigate([selected.link]);
            }
        }
        this.selectMenu.emit(selected);
    };
    Object.defineProperty(StHeaderComponent.prototype, "menuContainerId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id + "-menu";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StHeaderComponent.prototype, "userMenuElementWidth", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var userMenuContainer = this.userMenuContainer.nativeElement;
            if (userMenuContainer.children && userMenuContainer.children.length > 0) {
                return userMenuContainer.children[0].getBoundingClientRect().width;
            }
            else {
                return userMenuContainer.getBoundingClientRect().width;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    StHeaderComponent.prototype.checkMenuLabelVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var windowSize = this._windowServiceRef.nativeWindow.innerWidth;
        /** @type {?} */
        var canShowMenuNames = this._headerSize <= windowSize;
        if (this.showMenuNames !== canShowMenuNames) {
            this.showMenuNames = canShowMenuNames;
            this._cd.markForCheck();
        }
    };
    StHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-header',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<header class=\"st-header\" #headerDivElement>\n   <div class=\"st-header-container container\">\n      <div class=\"st-header-container-fix-part\" #headerFixPart>\n         <ng-content select=\".st-header-logo\"></ng-content>\n         <st-header-menu class=\"st-header-menu-component\"\n                         [menu]=\"menu\"\n                         [attr.id]=\"menuContainerId\"\n                         [showMenuNames]=\"showMenuNames\"\n                         (selectMenu)=\"onSelectMenu($event)\">\n         </st-header-menu>\n      </div>\n      <div class=\"st-header-shortcut-buttons-container\" #userMenuContainerElement>\n         <ng-content select=\".st-header-shortcut-buttons\"></ng-content>\n      </div>\n      <div class=\"st-header-user-menu-container\" #userMenuContainerElement>\n         <ng-content select=\".st-header-user-menu\"></ng-content>\n      </div>\n   </div>\n</header>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StHeaderComponent.ctorParameters = function () { return [
        { type: Router },
        { type: StWindowRefService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StHeaderComponent.propDecorators = {
        menu: [{ type: Input }],
        navigateByDefault: [{ type: Input }],
        selectMenu: [{ type: Output }],
        headerDivElement: [{ type: ViewChild, args: ['headerDivElement', { static: false },] }],
        headerFixPart: [{ type: ViewChild, args: ['headerFixPart', { static: false },] }],
        userMenuContainer: [{ type: ViewChild, args: ['userMenuContainerElement', { static: true },] }],
        onResize: [{ type: HostListener, args: ['window:resize', [],] }]
    };
    return StHeaderComponent;
}());
if (false) {
    /**
     * \@Input {StHeaderMenuOption[]} [menu] Array with menu option to show
     * @type {?}
     */
    StHeaderComponent.prototype.menu;
    /**
     * \@Input {boolean} [navigateByDefault] True if we want menu to manage navigation, false if navigation will be managed from the outside
     * @type {?}
     */
    StHeaderComponent.prototype.navigateByDefault;
    /**
     * \@Output {StHeaderSelection} [selectMenu] Notify any menu option selection
     * @type {?}
     */
    StHeaderComponent.prototype.selectMenu;
    /** @type {?} */
    StHeaderComponent.prototype.headerDivElement;
    /** @type {?} */
    StHeaderComponent.prototype.headerFixPart;
    /** @type {?} */
    StHeaderComponent.prototype.userMenuContainer;
    /** @type {?} */
    StHeaderComponent.prototype.showMenuNames;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._headerSize;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._windowServiceRef;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/st-header.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StHeaderMenuOption = /** @class */ (function () {
    function StHeaderMenuOption() {
    }
    return StHeaderMenuOption;
}());
if (false) {
    /** @type {?} */
    StHeaderMenuOption.prototype.icon;
    /** @type {?} */
    StHeaderMenuOption.prototype.label;
    /** @type {?} */
    StHeaderMenuOption.prototype.subMenus;
    /** @type {?} */
    StHeaderMenuOption.prototype.link;
    /** @type {?} */
    StHeaderMenuOption.prototype.external;
    /** @type {?} */
    StHeaderMenuOption.prototype.openInNewPage;
}
var StHeaderSubMenuOption = /** @class */ (function () {
    function StHeaderSubMenuOption() {
    }
    return StHeaderSubMenuOption;
}());
if (false) {
    /** @type {?} */
    StHeaderSubMenuOption.prototype.label;
    /** @type {?} */
    StHeaderSubMenuOption.prototype.link;
    /** @type {?} */
    StHeaderSubMenuOption.prototype.external;
    /** @type {?} */
    StHeaderSubMenuOption.prototype.openInNewPage;
}
var StHeaderSelection = /** @class */ (function () {
    function StHeaderSelection() {
    }
    return StHeaderSelection;
}());
if (false) {
    /** @type {?} */
    StHeaderSelection.prototype.link;
    /** @type {?} */
    StHeaderSelection.prototype.external;
    /** @type {?} */
    StHeaderSelection.prototype.openInNewPage;
}
var StHeaderMenuItem = /** @class */ (function (_super) {
    __extends(StHeaderMenuItem, _super);
    function StHeaderMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StHeaderMenuItem;
}(StDropDownMenuItem));
if (false) {
    /** @type {?} */
    StHeaderMenuItem.prototype.selection;
}
var StHeaderMenuOptionSchema = /** @class */ (function () {
    function StHeaderMenuOptionSchema() {
    }
    return StHeaderMenuOptionSchema;
}());
if (false) {
    /** @type {?} */
    StHeaderMenuOptionSchema.prototype.icon;
    /** @type {?} */
    StHeaderMenuOptionSchema.prototype.label;
    /** @type {?} */
    StHeaderMenuOptionSchema.prototype.subMenus;
    /** @type {?} */
    StHeaderMenuOptionSchema.prototype.link;
    /** @type {?} */
    StHeaderMenuOptionSchema.prototype.external;
    /** @type {?} */
    StHeaderMenuOptionSchema.prototype.openInNewPage;
}
var StHeaderSubMenuOptionSchema = /** @class */ (function () {
    function StHeaderSubMenuOptionSchema() {
    }
    return StHeaderSubMenuOptionSchema;
}());
if (false) {
    /** @type {?} */
    StHeaderSubMenuOptionSchema.prototype.label;
    /** @type {?} */
    StHeaderSubMenuOptionSchema.prototype.link;
    /** @type {?} */
    StHeaderSubMenuOptionSchema.prototype.external;
    /** @type {?} */
    StHeaderSubMenuOptionSchema.prototype.openInNewPage;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/st-header.utils.ts
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
var StHeaderUtils = /** @class */ (function () {
    function StHeaderUtils() {
    }
    /**
     * @param {?} option
     * @param {?} url
     * @return {?}
     */
    StHeaderUtils.isRouteActive = /**
     * @param {?} option
     * @param {?} url
     * @return {?}
     */
    function (option, url) {
        return option && url.indexOf(option.link) > -1;
    };
    return StHeaderUtils;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/menu-option/menu-option.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StHeaderMenuOptionComponent = /** @class */ (function () {
    function StHeaderMenuOptionComponent(elementRef, router, cd) {
        var _this = this;
        this.elementRef = elementRef;
        this.router = router;
        this.cd = cd;
        this.selectMenu = new EventEmitter();
        this.visualMode = StDropDownVisualMode.MENU_LIST;
        this._actualPath = '';
        this._subscription = this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this._onRouterEvent(event); }));
        this._actualPath = this.router.url;
    }
    Object.defineProperty(StHeaderMenuOptionComponent.prototype, "isCurrentRoute", {
        get: /**
         * @return {?}
         */
        function () {
            return StHeaderUtils.isRouteActive(this._option, this.router.url);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StHeaderMenuOptionComponent.prototype, "option", {
        get: /**
         * @return {?}
         */
        function () {
            return this._option;
        },
        set: /**
         * @param {?} _option
         * @return {?}
         */
        function (_option) {
            this._option = _option;
            this.hasSubmenu = _option.subMenus && _option.subMenus.length > 0;
            this.qaId = this._getQaId();
            this.submenuList = this._getSubmenuList();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.onMenuClick = /**
     * @return {?}
     */
    function () {
        if (this.hasSubmenu) {
            this.isActive = !this.isActive;
            this.cd.markForCheck();
        }
        else {
            this.selectMenu.emit({
                link: this._option.link,
                external: this._option.external,
                openInNewPage: this._option.openInNewPage
            });
        }
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.changeOption = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.isActive = false;
        this.cd.markForCheck();
        this.selectMenu.emit(selected.selection);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var isMyComponent = this.isActive && this.menu.nativeElement.contains(event.target);
        if (!isMyComponent && this.isActive) {
            this.isActive = false;
            this.cd.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype._onRouterEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof NavigationEnd) {
            this._actualPath = event.urlAfterRedirects;
            this.submenuList = this._getSubmenuList();
            this.cd.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype._getQaId = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._option) {
            return null;
        }
        /** @type {?} */
        var id = this.elementRef.nativeElement.id + "-" + this._option.label.toLowerCase();
        id.replace(/\s+/ig, '_');
        return id;
    };
    /**
     * @private
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype._getSubmenuList = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this._option && this.hasSubmenu ? this._option.subMenus.map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return ({
            label: _.label,
            value: _.link,
            selected: _this._actualPath === _.link,
            selection: (/** @type {?} */ ({
                link: _.link,
                external: _.external,
                openInNewPage: _.openInNewPage
            }))
        }); })) : [];
    };
    StHeaderMenuOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-header-menu-option',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-dropdown-menu [items]=\"submenuList\"\n                  [visualMode]=\"visualMode\"\n                  [active]=\"isActive && hasSubmenu\"\n                  [placement]=\"'bottom-start'\"\n                  [offset]=\"{x: 0, y: 10}\"\n                  (change)=\"changeOption($event)\">\n   <div class=\"st-header-menu-option\" #menu\n        [attr.id]=\"qaId\"\n        (click)=\"onMenuClick()\">\n      <a class=\"st-header-menu-option-name\">\n         <i *ngIf=\"option.icon\"\n            class=\"st-header-menu-option-icon\"\n            [ngClass]=\"option.icon\"\n            [title]=\"option.label\"></i>\n         <div *ngIf=\"showMenuName\" class=\"st-header-menu-option-label\">{{option.label}}</div>\n      </a>\n      <i *ngIf=\"hasSubmenu\" class=\"icon-arrow2_down st-header-menu-option-arrow\"></i>\n   </div>\n</st-dropdown-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;justify-content:center;flex-direction:column;height:100%;padding:0 10px}:host.active{background:#566574}:host.active .st-header-menu-option,:host.active .st-header-menu-option:hover{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    StHeaderMenuOptionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Router },
        { type: ChangeDetectorRef }
    ]; };
    StHeaderMenuOptionComponent.propDecorators = {
        showMenuName: [{ type: Input }],
        selectMenu: [{ type: Output }],
        menu: [{ type: ViewChild, args: ['menu', { static: false },] }],
        isCurrentRoute: [{ type: HostBinding, args: ['class.active',] }],
        option: [{ type: Input }],
        onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return StHeaderMenuOptionComponent;
}());
if (false) {
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.showMenuName;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.selectMenu;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.menu;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.isActive;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.visualMode;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.hasSubmenu;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.qaId;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.submenuList;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype._actualPath;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype._option;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/menu/menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StHeaderMenuComponent = /** @class */ (function () {
    function StHeaderMenuComponent(elementRef) {
        this.elementRef = elementRef;
        this.selectMenu = new EventEmitter();
    }
    Object.defineProperty(StHeaderMenuComponent.prototype, "qaId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.id + '-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StHeaderMenuComponent.prototype, "itemId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.id + '-item';
        },
        enumerable: true,
        configurable: true
    });
    StHeaderMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-header-menu',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<nav class=\"st-header-menu\" [attr.id]=\"qaId\">\n   <st-header-menu-option *ngFor=\"let option of menu\" class=\"st-header-menu-item\" [option]=\"option\" [attr.id]=\"itemId\" [showMenuName]=\"showMenuNames\" (selectMenu)=\"selectMenu.emit($event)\"></st-header-menu-option>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StHeaderMenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StHeaderMenuComponent.propDecorators = {
        menu: [{ type: Input }],
        showMenuNames: [{ type: Input }],
        selectMenu: [{ type: Output }]
    };
    return StHeaderMenuComponent;
}());
if (false) {
    /** @type {?} */
    StHeaderMenuComponent.prototype.menu;
    /** @type {?} */
    StHeaderMenuComponent.prototype.showMenuNames;
    /** @type {?} */
    StHeaderMenuComponent.prototype.selectMenu;
    /** @type {?} */
    StHeaderMenuComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/st-header.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StHeaderModule = /** @class */ (function () {
    function StHeaderModule() {
    }
    StHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        StDropdownMenuModule
                    ],
                    declarations: [
                        StHeaderComponent,
                        StHeaderMenuOptionComponent,
                        StHeaderMenuComponent
                    ],
                    exports: [StHeaderComponent]
                },] }
    ];
    return StHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-info-box/st-info-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StInfoBoxComponent = /** @class */ (function () {
    function StInfoBoxComponent() {
    }
    /**
     * @return {?}
     */
    StInfoBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.title === undefined) {
            throw new Error('st-info-box: title is a required field');
        }
        this.styleValue = this.getStyles();
    };
    /**
     * @return {?}
     */
    StInfoBoxComponent.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = {};
        if (this.width !== undefined) {
            Object.assign(result, {
                'width': this.width + "px",
                'min-width': this.width + "px",
                'max-width': this.width + "px"
            });
        }
        if (this.height !== undefined) {
            Object.assign(result, {
                'height': this.height + "px",
                'min-height': this.height + "px",
                'max-height': this.height + "px"
            });
        }
        return result;
    };
    StInfoBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-info-box',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-info-box sth-info-box\" [ngStyle]=\"styleValue\">\n   <div class=\"st-info-box__header sth-info-box__header\">\n      <label class=\"st-info-box__header__text sth-info-box__header__text\">  <i *ngIf=\"icon\" [ngClass]=\"icon\" class=\"st-info-box__header__icon sth-info-box__header__icon\"></i>{{title}}</label>\n   </div>\n   <div class=\"st-info-box__content\">\n      <ng-content></ng-content>\n   </div>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-info-box{margin:0;height:100%;width:100%;overflow-x:auto}.st-info-box__header{display:block;width:100%;height:50px;line-height:52px;padding:0 30px}.st-info-box__header__icon{width:20px;height:20px;margin-right:10px}.st-info-box__header__text{font-size:18px}.st-info-box__content{padding:20px 30px 30px}:host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    StInfoBoxComponent.ctorParameters = function () { return []; };
    StInfoBoxComponent.propDecorators = {
        icon: [{ type: Input }],
        title: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }]
    };
    return StInfoBoxComponent;
}());
if (false) {
    /** @type {?} */
    StInfoBoxComponent.prototype.icon;
    /** @type {?} */
    StInfoBoxComponent.prototype.title;
    /** @type {?} */
    StInfoBoxComponent.prototype.width;
    /** @type {?} */
    StInfoBoxComponent.prototype.height;
    /** @type {?} */
    StInfoBoxComponent.prototype.styleValue;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-info-box/st-info-box.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StInfoBoxModule = /** @class */ (function () {
    function StInfoBoxModule() {
    }
    StInfoBoxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StInfoBoxComponent],
                    exports: [StInfoBoxComponent]
                },] }
    ];
    return StInfoBoxModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/item-list-item/item-list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemListItemComponent = /** @class */ (function () {
    function ItemListItemComponent() {
        this.qaTag = '';
        this.align = 'left';
        this.selectItem = new EventEmitter();
    }
    Object.defineProperty(ItemListItemComponent.prototype, "itemName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.selected ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-item-' + this.item.id || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var style = "sth-item-list__item item-list-item item-list-item--" + this.align;
            style += this.itemSelected ? ' sth-item-list__item--selected' : '';
            return style;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ItemListItemComponent.prototype.emitOnSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selectItem.emit(this.item);
    };
    ItemListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'item-list-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div [ngClass]=\"itemStyle\" [attr.id]=\"itemQaTag\" [title]=\"itemName\" (click)=\"emitOnSelect($event)\">\n   <i *ngIf=\"align === 'left'\" class=\"item-list-item__icon item-list-item__icon--left {{itemIcon}}\"></i>\n   <span class=\"item-list-item__name\">{{itemName}}</span>\n   <i *ngIf=\"align === 'right'\" class=\"item-list-item__icon item-list-item__icon--right {{itemIcon}}\"></i>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.item-list-item{display:inline-block;min-width:100%;width:100%;height:100%;padding:5px 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.item-list-item--left{text-align:left}.item-list-item--right{text-align:right}.item-list-item__icon{position:relative;top:2px}.item-list-item__icon--left{margin-right:10px}.item-list-item__icon--right{margin-left:10px}.item-list-item__name{position:relative;top:1px}:host{display:block;padding-right:20px}"]
                }] }
    ];
    /** @nocollapse */
    ItemListItemComponent.ctorParameters = function () { return []; };
    ItemListItemComponent.propDecorators = {
        item: [{ type: Input }],
        qaTag: [{ type: Input }],
        align: [{ type: Input }],
        selectItem: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Object)
    ], ItemListItemComponent.prototype, "item", void 0);
    ItemListItemComponent = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [])
    ], ItemListItemComponent);
    return ItemListItemComponent;
}());
if (false) {
    /** @type {?} */
    ItemListItemComponent.prototype.item;
    /** @type {?} */
    ItemListItemComponent.prototype.qaTag;
    /** @type {?} */
    ItemListItemComponent.prototype.align;
    /** @type {?} */
    ItemListItemComponent.prototype.selectItem;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/item-list-scroll/item-list-scroll.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ItemListScrollComponent = /** @class */ (function () {
    function ItemListScrollComponent() {
        this.qaTag = '';
        this.align = 'left';
        this.selectItem = new EventEmitter();
        this.scrollItems = [];
    }
    Object.defineProperty(ItemListScrollComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-scroll-list' || '';
        },
        enumerable: true,
        configurable: true
    });
    ItemListScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'item-list-scroll',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<virtual-scroller [items]=\"list\" (vsUpdate)=\"scrollItems = $event\">\n   <item-list-item *ngFor=\"let item of scrollItems\" [item]=\"item\" [qaTag]=\"listQaTag\" [align]=\"align\" (selectItem)=\"selectItem.emit(item)\"></item-list-item>\n</virtual-scroller>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;max-height:100%;flex:1;min-height:10px}item-list-item{height:35px}virtual-scroller{width:100%}"]
                }] }
    ];
    ItemListScrollComponent.propDecorators = {
        list: [{ type: Input }],
        qaTag: [{ type: Input }],
        align: [{ type: Input }],
        selectItem: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], ItemListScrollComponent.prototype, "list", void 0);
    return ItemListScrollComponent;
}());
if (false) {
    /** @type {?} */
    ItemListScrollComponent.prototype.list;
    /** @type {?} */
    ItemListScrollComponent.prototype.qaTag;
    /** @type {?} */
    ItemListScrollComponent.prototype.align;
    /** @type {?} */
    ItemListScrollComponent.prototype.selectItem;
    /** @type {?} */
    ItemListScrollComponent.prototype.scrollItems;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/st-item-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StItemListComponent = /** @class */ (function () {
    function StItemListComponent() {
        this.qaTag = '';
        this.hasSearch = false;
        this.align = 'left';
        this.theme = 'themeA';
        this.selectItem = new EventEmitter();
        this.search = new EventEmitter();
    }
    Object.defineProperty(StItemListComponent.prototype, "listTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.title || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StItemListComponent.prototype, "searchPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.searchPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StItemListComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StItemListComponent.prototype, "searchQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-search' || '';
        },
        enumerable: true,
        configurable: true
    });
    StItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-item-list',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-item-list sth-item-list\" [ngClass]=\"theme\">\n   <p *ngIf=\"listTitle\" class=\"st-item-list__title sth-item-list__title\">{{listTitle}}</p>\n   <st-search *ngIf=\"hasSearch\" class=\"st-item-list__search\" [placeholder]=\"searchPlaceholder\" [qaTag]=\"searchQaTag\" (search)=\"search.emit($event)\"></st-search>\n   <item-list-scroll [list]=\"list\" [align]=\"align\" [qaTag]=\"listQaTag\" (selectItem)=\"selectItem.emit($event)\"></item-list-scroll>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-item-list{display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;width:100%;height:100%;padding:30px 20px}.st-item-list__title{width:100%;margin-bottom:10px;padding:0}.st-item-list__search{margin-bottom:10px;display:block}virtual-scroll{display:block;width:100%;height:100%}"]
                }] }
    ];
    StItemListComponent.propDecorators = {
        list: [{ type: Input }],
        config: [{ type: Input }],
        qaTag: [{ type: Input }],
        hasSearch: [{ type: Input }],
        align: [{ type: Input }],
        theme: [{ type: Input }],
        selectItem: [{ type: Output }],
        search: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], StItemListComponent.prototype, "list", void 0);
    return StItemListComponent;
}());
if (false) {
    /** @type {?} */
    StItemListComponent.prototype.list;
    /** @type {?} */
    StItemListComponent.prototype.config;
    /** @type {?} */
    StItemListComponent.prototype.qaTag;
    /** @type {?} */
    StItemListComponent.prototype.hasSearch;
    /** @type {?} */
    StItemListComponent.prototype.align;
    /** @type {?} */
    StItemListComponent.prototype.theme;
    /** @type {?} */
    StItemListComponent.prototype.selectItem;
    /** @type {?} */
    StItemListComponent.prototype.search;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/event-window-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
EventWindowManager = /** @class */ (function () {
    function EventWindowManager(_renderer, _cd) {
        this._renderer = _renderer;
        this._cd = _cd;
    }
    /**
     * @protected
     * @return {?}
     */
    EventWindowManager.prototype.openElement = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isActive) {
            this.closeElement();
        }
        else {
            this.isActive = !this.isActive;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.globalListener = _this._renderer.listen('document', 'click', _this.onClickOutside.bind(_this));
                _this.forceClose = _this._renderer.listen('document', 'stForceClose', _this.onForceClose.bind(_this));
            }));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    EventWindowManager.prototype.closeElement = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isActive) {
            this.isActive = !this.isActive;
            this._cd.markForCheck();
            if (this.globalListener !== undefined && typeof (this.globalListener) === 'function') {
                this.globalListener();
                this.forceClose();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    EventWindowManager.prototype.onClickOutside = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._eventElementRef.nativeElement.contains(event.target)) {
            this.closeElement();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    EventWindowManager.prototype.onForceClose = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.closeElement();
    };
    return EventWindowManager;
}());
if (false) {
    /** @type {?} */
    EventWindowManager.prototype.isActive;
    /** @type {?} */
    EventWindowManager.prototype._eventElementRef;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype.globalListener;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype.forceClose;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype._cd;
    /**
     * @abstract
     * @return {?}
     */
    EventWindowManager.prototype.ngOnDestroy = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-search/st-search.model.ts
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
/** @enum {number} */
var StSearchEventOrigin = {
    INPUT: 0, LIST: 1, FILTER: 2, ENTER: 3,
};
StSearchEventOrigin[StSearchEventOrigin.INPUT] = 'INPUT';
StSearchEventOrigin[StSearchEventOrigin.LIST] = 'LIST';
StSearchEventOrigin[StSearchEventOrigin.FILTER] = 'FILTER';
StSearchEventOrigin[StSearchEventOrigin.ENTER] = 'ENTER';
var StSearchEvent = /** @class */ (function () {
    function StSearchEvent() {
    }
    return StSearchEvent;
}());
if (false) {
    /** @type {?} */
    StSearchEvent.prototype.text;
    /** @type {?} */
    StSearchEvent.prototype.filter;
    /** @type {?} */
    StSearchEvent.prototype.origin;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-search/st-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Search]
 *
 * The search component has been designed to allow user to find a specific content according to his needs.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * Search without filters
 *  <st-search [placeholder]="placeholder" [qaTag]="qaTag"
 *  [value]="searched" [debounce]="debounceTime" [minLength]="minLength"
 *  (search)="onSearchResult($event)"></st-search>
 *
 *
 * Search with filters
 *  <st-search [placeholder]="placeholder" [qaTag]="qaTag"
 *  [value]="searched" [debounce]="debounceTime" [minLength]="minLength" [filterOptions]="[
 *  { label: 'All', value: 1 },
 *  { label: 'Type ', value: 2 },
 *  { label: 'Color', value: 3 }
 *  ]" (search)="onSearchResult($event)"></st-search>
 * ```
 *
 */
var StSearchComponent = /** @class */ (function (_super) {
    __extends(StSearchComponent, _super);
    function StSearchComponent(_render, cd) {
        var _this = _super.call(this, _render, cd) || this;
        _this._render = _render;
        _this.cd = cd;
        /**
         * \@Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list
         */
        _this.debounce = 0;
        /**
         * \@Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing
         */
        _this.liveSearch = true;
        /**
         * \@Input {number} [minLength=0] Minimum of characters typed by the user before launching the search
         */
        _this.minLength = 0;
        /**
         * \@Input {string} [placeholder='Search'] Text displayed in the search input
         */
        _this.placeholder = 'Search';
        /**
         * \@Input {boolean} [disabled=false] Boolean to enable or disable the search
         */
        _this.disabled = false;
        /**
         * \@Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing
         */
        _this.withAutocomplete = false;
        /**
         * \@Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing
         */
        _this.autocompleteList = [];
        /**
         * \@Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon
         */
        _this.showIcon = true;
        /**
         * \@Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
         * there are not any item with the typed text
         */
        _this.emptyAutocompleteListMessage = '';
        /**
         * \@Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
         * the text typed by the user and the filter value selected (only if filter is displayed)
         */
        _this.search = new EventEmitter();
        /**
         * \@Output {any} [value=''] Event emitted when filter is changed. It contains
         * the filter value selected
         */
        _this.selectFilter = new EventEmitter();
        /**
         * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
         */
        _this.keyBoardMove = false;
        _this.searchBox = new FormControl();
        _this.subscriptionSearch = undefined;
        _this.subscriptionSearchClearButton = undefined;
        _this.lastEmittedText = undefined;
        return _this;
    }
    Object.defineProperty(StSearchComponent.prototype, "menuId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag ? this.qaTag + '-autocomplete-menu' : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.value) {
            this.searchBox.setValue(this.value);
        }
        // Show clear button if have text
        this.subscriptionSearchClearButton = this.searchBox.valueChanges.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.showClear = (val && val.length > 0); }));
        this.checkDisabled();
        this.manageSubscription();
        if (this.filterOptions) {
            this.filter = this.filterOptions[0].value;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.checkDebounceChange(changes);
        this.checkValueChange(changes);
        this.checkDisableChange(changes);
        this.checkAutoCompleteMenuChange(changes);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StSearchComponent.prototype.onChangeFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectFilter.emit(value);
        this.emitValue(false, StSearchEventOrigin.FILTER);
    };
    /**
     * @return {?}
     */
    StSearchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscriptionSearch !== undefined) {
            this.subscriptionSearch.unsubscribe();
        }
        if (this.subscriptionSearchClearButton !== undefined) {
            this.subscriptionSearchClearButton.unsubscribe();
        }
        this.closeElement();
    };
    /**
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    StSearchComponent.prototype.launchSearch = /**
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    function (force, origin) {
        if (this.canSearch()) {
            this.showAutoCompleteMenu();
            this.emitValue(force, origin);
        }
        else {
            this.closeElement();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StSearchComponent.prototype.onKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.keyCode || event.which;
        if (key === 13) {
            this.launchSearch(true, StSearchEventOrigin.ENTER);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StSearchComponent.prototype.changeOption = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item && item.label) {
            this.subscriptionSearch.unsubscribe();
            this.searchBox.setValue(item.value);
            this.cd.markForCheck();
            this.closeElement();
            this.emitValue(true, StSearchEventOrigin.LIST);
            this.manageSubscription();
        }
    };
    /**
     * @return {?}
     */
    StSearchComponent.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.searchBox.setValue('');
        this.closeElement();
        this.emitValue(true, StSearchEventOrigin.INPUT);
    };
    /**
     * @return {?}
     */
    StSearchComponent.prototype.showAutoCompleteMenu = /**
     * @return {?}
     */
    function () {
        if (this.withAutocomplete && !this.isActive) {
            this.openElement();
        }
        if (this.searchBox.value === '') {
            this.closeElement();
        }
        this.cd.markForCheck();
    };
    /**
     * @private
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    StSearchComponent.prototype.emitValue = /**
     * @private
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    function (force, origin) {
        if (this.isEqualPrevious(force)) {
            this.lastEmittedText = this.searchBox.value;
            /** @type {?} */
            var newSearch = { text: this.lastEmittedText || '', origin: origin };
            if (this.filter) {
                newSearch.filter = this.filter;
            }
            this.search.emit(newSearch);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.checkDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this.searchBox.disable();
        }
        else {
            this.searchBox.enable();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.canSearch = /**
     * @private
     * @return {?}
     */
    function () {
        return this.isDefined() && !this.disabled && this.checkMins();
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.isDefined = /**
     * @private
     * @return {?}
     */
    function () {
        return this.searchBox && this.searchBox.value !== null && this.searchBox.value !== undefined;
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.checkMins = /**
     * @private
     * @return {?}
     */
    function () {
        return this.minLength <= (this.searchBox && this.searchBox.value && this.searchBox.value.length) ||
            this.searchBox.value.trim().length === 0;
    };
    /**
     * @private
     * @param {?} force
     * @return {?}
     */
    StSearchComponent.prototype.isEqualPrevious = /**
     * @private
     * @param {?} force
     * @return {?}
     */
    function (force) {
        return this.lastEmittedText !== this.searchBox.value || force;
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkValueChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.value) {
            if (this.subscriptionSearch) {
                this.subscriptionSearch.unsubscribe();
            }
            this.searchBox.setValue(changes.value.currentValue);
            this.manageSubscription();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkDebounceChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.debounce) {
            this.manageSubscription();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkDisableChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.disabled) {
            this.checkDisabled();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkAutoCompleteMenuChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.autocompleteList) {
            this.cd.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.manageSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subscriptionSearch !== undefined) {
            this.subscriptionSearch.unsubscribe();
        }
        if (this.liveSearch) {
            this.subscriptionSearch = this.searchBox
                .valueChanges.pipe(debounceTime(this.debounce))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.launchSearch(false, StSearchEventOrigin.INPUT); }));
        }
    };
    StSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-search',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-search sth-search\">\n   <st-select\n      *ngIf=\"filterOptions && filterOptions.length > 0\"\n      [options]=\"filterOptions\"\n      [(ngModel)]=\"filter\"\n      [disabled]=\"disabled\"\n      name=\"search-filter\"\n      (select)=\"onChangeFilter($event)\"\n      class=\"sth-search-filter st-search-filter\"\n      [ngClass]=\"{'disabled': disabled}\"\n   ></st-select>\n\n   <st-dropdown-menu [items]=\"autocompleteList\" [attr.id]=\"menuId\" class=\"st-search-box\" (change)=\"changeOption($event)\"\n                     [active]=\"isActive && (autocompleteList && autocompleteList.length || emptyAutocompleteListMessage !== '')\"\n                     [placement]=\"'bottom-start'\" [emptyListMessage]=\"emptyAutocompleteListMessage\"\n                     [keyBoardMove]=\"keyBoardMove\">\n      <div #buttonId>\n         <input [attr.id]=\"qaTag\" [formControl]=\"searchBox\" [placeholder]=\"placeholder\" (keypress)=\"onKeyPress($event)\"\n                (focus)=\"showAutoCompleteMenu()\"\n                class=\"st-search-input sth-search-input\"/>\n         <i class=\"st-search-icon sth-search-icon icon-search\" tabindex=\"0\" *ngIf=\"!showClear && showIcon\"></i>\n         <i class=\"st-search-icon sth-search-icon icon-cross\" tabindex=\"0\" *ngIf=\"showClear\" (mousedown)=\"clearInput()\"\n            (keyup.enter)=\"clearInput()\"></i>\n      </div>\n   </st-dropdown-menu>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";input{outline:0;border:none;padding:0;height:40px}.st-search{position:relative;display:flex;min-width:100%}.st-search :invalid{box-shadow:none}.st-search-box{display:flex;flex:2 0}.st-search-input{padding-left:12px;padding-right:40px;width:100%}.st-search-filter{flex:auto 1;height:40px;padding:0;max-width:37%}.st-search-icon{position:absolute;right:10px;top:13px;cursor:pointer}.st-search-icon:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    StSearchComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    StSearchComponent.propDecorators = {
        debounce: [{ type: Input }],
        liveSearch: [{ type: Input }],
        minLength: [{ type: Input }],
        placeholder: [{ type: Input }],
        qaTag: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        withAutocomplete: [{ type: Input }],
        autocompleteList: [{ type: Input }],
        showIcon: [{ type: Input }],
        emptyAutocompleteListMessage: [{ type: Input }],
        filterOptions: [{ type: Input }],
        search: [{ type: Output }],
        selectFilter: [{ type: Output }],
        keyBoardMove: [{ type: Input }],
        _eventElementRef: [{ type: ViewChild, args: ['buttonId', { static: false },] }]
    };
    return StSearchComponent;
}(EventWindowManager));
if (false) {
    /**
     * \@Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list
     * @type {?}
     */
    StSearchComponent.prototype.debounce;
    /**
     * \@Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing
     * @type {?}
     */
    StSearchComponent.prototype.liveSearch;
    /**
     * \@Input {number} [minLength=0] Minimum of characters typed by the user before launching the search
     * @type {?}
     */
    StSearchComponent.prototype.minLength;
    /**
     * \@Input {string} [placeholder='Search'] Text displayed in the search input
     * @type {?}
     */
    StSearchComponent.prototype.placeholder;
    /**
     * \@Input {string} [qaTag=''] Label used as id
     * @type {?}
     */
    StSearchComponent.prototype.qaTag;
    /**
     * \@Input {string} [value=''] Initial value of the search text
     * @type {?}
     */
    StSearchComponent.prototype.value;
    /**
     * \@Input {boolean} [disabled=false] Boolean to enable or disable the search
     * @type {?}
     */
    StSearchComponent.prototype.disabled;
    /**
     * \@Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing
     * @type {?}
     */
    StSearchComponent.prototype.withAutocomplete;
    /**
     * \@Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing
     * @type {?}
     */
    StSearchComponent.prototype.autocompleteList;
    /**
     * \@Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon
     * @type {?}
     */
    StSearchComponent.prototype.showIcon;
    /**
     * \@Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
     * there are not any item with the typed text
     * @type {?}
     */
    StSearchComponent.prototype.emptyAutocompleteListMessage;
    /**
     * \@Input {StDropDownMenuItem[]} [filterOptions=''] Options displayed at the filter select. If it is not introduced,
     * filter will not be displayed
     * @type {?}
     */
    StSearchComponent.prototype.filterOptions;
    /**
     * \@Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
     * the text typed by the user and the filter value selected (only if filter is displayed)
     * @type {?}
     */
    StSearchComponent.prototype.search;
    /**
     * \@Output {any} [value=''] Event emitted when filter is changed. It contains
     * the filter value selected
     * @type {?}
     */
    StSearchComponent.prototype.selectFilter;
    /**
     * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
     * @type {?}
     */
    StSearchComponent.prototype.keyBoardMove;
    /** @type {?} */
    StSearchComponent.prototype.searchBox;
    /** @type {?} */
    StSearchComponent.prototype.showClear;
    /** @type {?} */
    StSearchComponent.prototype.filter;
    /** @type {?} */
    StSearchComponent.prototype._eventElementRef;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.subscriptionSearch;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.subscriptionSearchClearButton;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.lastEmittedText;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype._render;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-search/st-search.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StSearchModule = /** @class */ (function () {
    function StSearchModule() {
    }
    StSearchModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, StDropdownMenuModule, StSelectModule],
                    declarations: [StSearchComponent],
                    exports: [StSearchComponent]
                },] }
    ];
    return StSearchModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/st-item-list.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StItemListModule = /** @class */ (function () {
    function StItemListModule() {
    }
    StItemListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSearchModule, VirtualScrollerModule],
                    declarations: [ItemListScrollComponent, ItemListItemComponent, StItemListComponent],
                    exports: [StItemListComponent]
                },] }
    ];
    return StItemListModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-label/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-launcher/st-launcher.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StLauncherItem = /** @class */ (function () {
    function StLauncherItem() {
    }
    return StLauncherItem;
}());
if (false) {
    /** @type {?} */
    StLauncherItem.prototype.label;
    /** @type {?} */
    StLauncherItem.prototype.url;
}
var StLauncherGroup = /** @class */ (function () {
    function StLauncherGroup() {
    }
    return StLauncherGroup;
}());
if (false) {
    /** @type {?} */
    StLauncherGroup.prototype.label;
    /** @type {?} */
    StLauncherGroup.prototype.items;
    /** @type {?} */
    StLauncherGroup.prototype.expanded;
}
var StLauncherItemSchema = /** @class */ (function () {
    function StLauncherItemSchema() {
    }
    return StLauncherItemSchema;
}());
if (false) {
    /** @type {?} */
    StLauncherItemSchema.prototype.label;
    /** @type {?} */
    StLauncherItemSchema.prototype.url;
}
var StLauncherGroupSchema = /** @class */ (function () {
    function StLauncherGroupSchema() {
    }
    return StLauncherGroupSchema;
}());
if (false) {
    /** @type {?} */
    StLauncherGroupSchema.prototype.label;
    /** @type {?} */
    StLauncherGroupSchema.prototype.items;
    /** @type {?} */
    StLauncherGroupSchema.prototype.expanded;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-launcher/st-launcher-item/st-launcher-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StLauncherItemComponent = /** @class */ (function () {
    function StLauncherItemComponent() {
        this.toggle = new EventEmitter();
        this.select = new EventEmitter();
        this.view = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StLauncherItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.item && this.item.expanded === undefined) {
            this.item.expanded = false;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StLauncherItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.item && changes.item.currentValue && changes.item.currentValue.expanded === undefined) {
            changes.item.currentValue.expanded = false;
        }
    };
    Object.defineProperty(StLauncherItemComponent.prototype, "itemsFiltered", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.items.slice(0, this.limit);
        },
        enumerable: true,
        configurable: true
    });
    StLauncherItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-launcher-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-launcher__group\" [ngClass]=\"{ 'st-launcher__group--collapsed': !item.expanded }\" (click)=\"toggle.emit(item)\">\n   <div class=\"group\">\n      <span class=\"title\">{{item.label}}</span>\n         <div class=\"count st-launcher__group--count\">\n            <span>{{item.items.length}}</span>\n         </div>\n   </div>\n   <span *ngIf=\"item.expanded\" class=\"arrow st-launcher__group--arrow\"></span>\n</div>\n\n<div *ngIf=\"item.expanded && item.items.length\">\n   <div *ngFor=\"let subitem of itemsFiltered\" class=\"st-launcher__item\" (click)=\"select.emit(subitem)\">\n      <span [title]=\"subitem.label\" class=\"item-label\">{{subitem.label}}</span>\n   </div>\n   <div *ngIf=\"limit !== undefined && limit < item.items.length\" class=\"st-launcher__more\" (click)=\"view.emit(item)\">\n      <span>{{limitLabel}}</span>\n   </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";.group{display:flex}.title{margin-top:3px}.count{border-radius:4px;height:28px;width:48px;padding-top:4px;text-align:center;margin-left:auto}.arrow{position:relative;bottom:2px;width:0;height:0;border-style:solid;border-width:0 10px 12px}.item-label{text-overflow:ellipsis;overflow:hidden;display:block;white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    StLauncherItemComponent.ctorParameters = function () { return []; };
    StLauncherItemComponent.propDecorators = {
        item: [{ type: Input }],
        qaTag: [{ type: Input }],
        limit: [{ type: Input }],
        limitLabel: [{ type: Input }],
        toggle: [{ type: Output }],
        select: [{ type: Output }],
        view: [{ type: Output }]
    };
    return StLauncherItemComponent;
}());
if (false) {
    /** @type {?} */
    StLauncherItemComponent.prototype.item;
    /** @type {?} */
    StLauncherItemComponent.prototype.qaTag;
    /** @type {?} */
    StLauncherItemComponent.prototype.limit;
    /** @type {?} */
    StLauncherItemComponent.prototype.limitLabel;
    /** @type {?} */
    StLauncherItemComponent.prototype.toggle;
    /** @type {?} */
    StLauncherItemComponent.prototype.select;
    /** @type {?} */
    StLauncherItemComponent.prototype.view;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-launcher/st-launcher.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} Launcher
 *
 * This components show a launcher for the instances of an item group
 *
 * \@model
 *
 *   [Launcher group] {./st-launcher.model.ts#StLauncherGroup}
 *   [Launcher item] {./st-launcher.model.ts#StLauncherItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-launcher
 *       qaTag="launcher-example"
 *       [items]="items"
 *       [groupLimit]="4"
 *       [groupLimitLabel]="'View more'"
 *       (toggle)="onToggle(event)"
 *       (select)="onSelect(event)"
 *       (viewMore)="onViewMore(event)">
 *    </st-launcher>
 * ```
 */
var StLauncherComponent = /** @class */ (function () {
    function StLauncherComponent(_cd) {
        this._cd = _cd;
        /**
         * \@output {StLauncherItem} [change=''] Notify any item selection
         */
        this.select = new EventEmitter();
        /**
         * \@output {StLauncherGroup} [toggle=''] Notify any group expansion or collapsed
         */
        this.toggle = new EventEmitter();
        /**
         * \@output {StLauncherGroup} [viewMore=''] Notify that wants to see more items in a group
         */
        this.viewMore = new EventEmitter();
        this._items = [];
    }
    Object.defineProperty(StLauncherComponent.prototype, "items", {
        /** @input {StLauncherGroup[]} items List of groups of items to show */
        get: /**
         * \@input {StLauncherGroup[]} items List of groups of items to show
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    StLauncherComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.items && !changes.items.firstChange) {
            if (!isEqual(this._items, changes.items.currentValue)) {
                this._items = changes.items.currentValue;
                this._cd.markForCheck();
            }
        }
    };
    Object.defineProperty(StLauncherComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-list' || '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} groupItem
     * @return {?}
     */
    StLauncherComponent.prototype.onToggleGroup = /**
     * @param {?} groupItem
     * @return {?}
     */
    function (groupItem) {
        groupItem.expanded = !groupItem.expanded;
        this.toggle.emit(groupItem);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StLauncherComponent.prototype.onSelectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.select.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StLauncherComponent.prototype.onViewMore = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.viewMore.emit(item);
    };
    StLauncherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-launcher',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div *ngIf=\"items.length\" class=\"launcher\">\n   <div *ngFor=\"let item of items\">\n      <st-launcher-item\n         [item]=\"item\"\n         [qaTag]=\"listQaTag\"\n         [limit]=\"groupLimit\"\n         [limitLabel]=\"groupLimitLabel\"\n         (toggle)=\"onToggleGroup($event)\"\n         (select)=\"onSelectItem($event)\"\n         (view)=\"onViewMore($event)\">\n      </st-launcher-item>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.launcher{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    StLauncherComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StLauncherComponent.propDecorators = {
        qaTag: [{ type: Input }],
        items: [{ type: Input }],
        groupLimit: [{ type: Input }],
        groupLimitLabel: [{ type: Input }],
        select: [{ type: Output }],
        toggle: [{ type: Output }],
        viewMore: [{ type: Output }]
    };
    return StLauncherComponent;
}());
if (false) {
    /**
     * \@input {string} [qaTag=''] For set id for tests
     * @type {?}
     */
    StLauncherComponent.prototype.qaTag;
    /**
     * \@input {number} [groupLimit=undefined] Limit of items to be displayed per group
     * @type {?}
     */
    StLauncherComponent.prototype.groupLimit;
    /**
     * \@input {string} [groupLimitMessage=''] Label when the group items limit is exceeded
     * @type {?}
     */
    StLauncherComponent.prototype.groupLimitLabel;
    /**
     * \@output {StLauncherItem} [change=''] Notify any item selection
     * @type {?}
     */
    StLauncherComponent.prototype.select;
    /**
     * \@output {StLauncherGroup} [toggle=''] Notify any group expansion or collapsed
     * @type {?}
     */
    StLauncherComponent.prototype.toggle;
    /**
     * \@output {StLauncherGroup} [viewMore=''] Notify that wants to see more items in a group
     * @type {?}
     */
    StLauncherComponent.prototype.viewMore;
    /**
     * @type {?}
     * @private
     */
    StLauncherComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    StLauncherComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-launcher/st-launcher.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StLauncherModule = /** @class */ (function () {
    function StLauncherModule() {
    }
    StLauncherModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StLauncherComponent, StLauncherItemComponent],
                    exports: [StLauncherComponent]
                },] }
    ];
    return StLauncherModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal-buttons/st-modal-buttons.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StModalButtonsComponent = /** @class */ (function () {
    function StModalButtonsComponent() {
        this.buttonConfig = [];
        this.fullscreen = false;
        this.click = new EventEmitter();
        this.hasButtonsValue = false;
    }
    /**
     * @return {?}
     */
    StModalButtonsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hasButtonsValue = this.hasButtons();
    };
    /**
     * @return {?}
     */
    StModalButtonsComponent.prototype.hasButtons = /**
     * @return {?}
     */
    function () {
        return this.buttonConfig && this.buttonConfig.length > 0;
    };
    /**
     * @param {?} button
     * @return {?}
     */
    StModalButtonsComponent.prototype.getButtonClass = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var classes = button && button.classes ? button.classes : '';
        return classes.trim();
    };
    /**
     * @param {?} button
     * @return {?}
     */
    StModalButtonsComponent.prototype.getButtonId = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        return button && button.label ? "st-modal-button-" + this.getButtonLabelWithoutSpaces(button.label) : null;
    };
    /**
     * @param {?} label
     * @return {?}
     */
    StModalButtonsComponent.prototype.getButtonLabelWithoutSpaces = /**
     * @param {?} label
     * @return {?}
     */
    function (label) {
        return label.replace(/\s+/g, '_');
    };
    /** INTERACTION WITH MODAL */
    /**
     * INTERACTION WITH MODAL
     * @param {?} button
     * @param {?} event
     * @return {?}
     */
    StModalButtonsComponent.prototype.clickButton = /**
     * INTERACTION WITH MODAL
     * @param {?} button
     * @param {?} event
     * @return {?}
     */
    function (button, event) {
        if (button.response) {
            button.response(event);
        }
        else if (button.responseValue !== undefined) {
            this.click.emit({ response: button.responseValue, close: button.closeOnClick });
        }
    };
    StModalButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-modal-buttons',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div *ngIf=\"hasButtonsValue\" class=\"st-modal-buttons\">\n   <button *ngFor=\"let button of buttonConfig\" [attr.id]=\"getButtonId(button)\" class=\"button\" [ngClass]=\"getButtonClass(button)\" (click)=\"clickButton(button, $event)\"\n       type=\"button\">\n      <i *ngIf=\"button.leftIcon\" [ngClass]=\"button.leftIcon\"></i>\n      <span>{{button.label}}</span>\n      <i *ngIf=\"button.rightIcon\" [ngClass]=\"button.rightIcon\"></i>\n   </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;width:100%;flex-grow:1}.st-modal-buttons{display:flex;flex-direction:row;justify-content:flex-end;width:100%}"]
                }] }
    ];
    StModalButtonsComponent.propDecorators = {
        buttonConfig: [{ type: Input }],
        fullscreen: [{ type: Input }],
        click: [{ type: Output }]
    };
    return StModalButtonsComponent;
}());
if (false) {
    /** @type {?} */
    StModalButtonsComponent.prototype.buttonConfig;
    /** @type {?} */
    StModalButtonsComponent.prototype.fullscreen;
    /** @type {?} */
    StModalButtonsComponent.prototype.click;
    /** @type {?} */
    StModalButtonsComponent.prototype.hasButtonsValue;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StModalModule = /** @class */ (function () {
    function StModalModule() {
    }
    /**
     * @param {?} components
     * @return {?}
     */
    StModalModule.withComponents = /**
     * @param {?} components
     * @return {?}
     */
    function (components) {
        return {
            ngModule: StModalModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    StModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StModalComponent, StModalButtonsComponent],
                    exports: [StModalComponent],
                    entryComponents: [StModalComponent],
                    providers: []
                },] }
    ];
    return StModalModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal2/st-modal2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StModal2Component = /** @class */ (function () {
    function StModal2Component() {
        this.width = 600;
        this.modalTitle = '';
        this.onClose = new EventEmitter();
        this.onEnter = new EventEmitter();
        this.ESCAPE_KEYCODE = 27;
        this.ENTER_KEYCODE = 13;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StModal2Component.prototype.onKeydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.closeOnEscape && event.keyCode === this.ESCAPE_KEYCODE) {
            this.onClose.emit();
        }
        if (event.keyCode === this.ENTER_KEYCODE) {
            this.onEnter.emit();
        }
    };
    StModal2Component.decorators = [
        { type: Component, args: [{
                    selector: 'st-modal2',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-modal-container\">\n  <section class=\"st-modal\" [style.width.px]=\"width\">\n    <ng-container *ngIf=\"emptyModal\">\n      <ng-content></ng-content>\n    </ng-container>\n    <ng-container *ngIf=\"!emptyModal\">\n      <div class=\"st-modal-header\">\n        <div class=\"container\">\n          <p class=\"title\" *ngIf=\"modalTitle && modalTitle.length\">{{modalTitle}}</p>\n          <ng-content select=[st-modal-title]></ng-content>\n          <span class=\"icon-cross close-button\" \n            *ngIf=\"!hideCloseBtn\"\n            (click)=\"onClose.emit()\"></span>\n        </div>\n      </div>\n      <div class=\"st-modal-body\">\n        <div class=\"container\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </ng-container>\n  </section>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-modal-container{width:100%;height:100vh;position:fixed;left:0;top:0;display:flex}.st-modal-container .st-modal{margin:auto;align-self:center;display:flex;flex-direction:column}.st-modal-container .st-modal .st-modal-header{display:flex;flex-direction:row;width:100%;height:70px}.st-modal-container .st-modal .st-modal-header .container{align-items:center;flex-wrap:nowrap}.st-modal-container .st-modal .container{min-width:auto}"]
                }] }
    ];
    StModal2Component.propDecorators = {
        emptyModal: [{ type: Input }],
        width: [{ type: Input }],
        modalTitle: [{ type: Input }],
        closeOnEscape: [{ type: Input }],
        hideCloseBtn: [{ type: Input }],
        onClose: [{ type: Output }],
        onEnter: [{ type: Output }],
        onKeydownHandler: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return StModal2Component;
}());
if (false) {
    /** @type {?} */
    StModal2Component.prototype.emptyModal;
    /** @type {?} */
    StModal2Component.prototype.width;
    /** @type {?} */
    StModal2Component.prototype.modalTitle;
    /** @type {?} */
    StModal2Component.prototype.closeOnEscape;
    /** @type {?} */
    StModal2Component.prototype.hideCloseBtn;
    /** @type {?} */
    StModal2Component.prototype.onClose;
    /** @type {?} */
    StModal2Component.prototype.onEnter;
    /**
     * @type {?}
     * @private
     */
    StModal2Component.prototype.ESCAPE_KEYCODE;
    /**
     * @type {?}
     * @private
     */
    StModal2Component.prototype.ENTER_KEYCODE;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal2/st-modal2.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StModal2Module = /** @class */ (function () {
    function StModal2Module() {
    }
    StModal2Module.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StModal2Component],
                    exports: [StModal2Component]
                },] }
    ];
    return StModal2Module;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-page-title/st-page-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGETITLE_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return StPageTitleComponent; })),
    multi: true
};
var StPageTitleComponent = /** @class */ (function () {
    function StPageTitleComponent() {
        this.leftButton = '';
        this.editable = false;
        this.clickButton = new EventEmitter();
        this.edit = new EventEmitter();
        this.focus = false;
        this.hasPreTitleValue = false;
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
    Object.defineProperty(StPageTitleComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            if (this._title !== title) {
                this._title = title;
            }
            this._controlValueAccessorChangeFn(this._title);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hasPreTitleValue = this.hasPreTitle();
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onClickedButton = /**
     * @return {?}
     */
    function () {
        this.clickButton.emit();
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.hasPreTitle = /**
     * @return {?}
     */
    function () {
        return this.preTitle !== undefined;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StPageTitleComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._title = value;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StPageTitleComponent.prototype.onEdit = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.edit.emit(this._title);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StPageTitleComponent.prototype.registerOnChange = /**
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
    StPageTitleComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onClickEdit = /**
     * @return {?}
     */
    function () {
        this.focus = true;
        this.input.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focus = true;
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focus = false;
    };
    StPageTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-page-title',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-page-title sth-page-title\">\n   <div class=\"sth-page-title-button-box button-box\" *ngIf=\"leftButton\">\n      <button class=\"button button-toolbar st-temporal-button-style\" [attr.id]=\"qaTag + '-left-button'\" (click)=\"onClickedButton()\" type=\"button\">\n         <i [ngClass]=\"leftButton\"></i>\n      </button>\n   </div>\n   <div class=\"main-title sth-page-title-main-title\">\n      <span *ngIf=\"hasPreTitleValue\" class=\"sth-page-title-pre-title\">{{preTitle}}: </span>\n      <span *ngIf=\"!editable\" class=\"sth-page-title-title\">{{title}}</span>\n\n      <div class=\"editable-box sth-editable\" *ngIf=\"editable\">\n\n         <span class=\"error_text sth-error-text\" *ngIf=\"errorMessage\">{{errorMessage}}</span>\n\n         <span class=\"sth-page-title-title title\" (click)=\"onClickEdit()\" [ngClass]=\"{'sth-error': error}\">\n            <input type=\"text\" (keyup)=\"onEdit($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [(ngModel)]=\"title\" #input st-input-adjustable placeholder=\"{{placeholder}}\"\n                [maxlength]=\"maxlength\" [minlength]=\"minlength\" [disabled]=\"disabled\" [readOnly]=\"readOnly\" />\n            <i *ngIf=\"!focus\" class=\"button-edit sth-button-edit icon-edit\"></i>\n         </span>\n\n      </div>\n\n   </div>\n   <div>\n      <ng-content></ng-content>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [PAGETITLE_CONTROL_ACCESSOR],
                    styles: ["@charset \"UTF-8\";.st-page-title{width:100%;display:flex;flex-direction:row;align-items:flex-end;flex-wrap:nowrap}.st-page-title input:focus{outline:0}.button-box{padding-right:10px;padding-bottom:8px;margin-right:10px;display:inline-block}.main-title{flex-grow:1;white-space:nowrap;line-height:25px;padding-bottom:10px;vertical-align:bottom;overflow:hidden;text-overflow:ellipsis}.button-edit{font-size:17px;position:relative;top:-2px}.editable-box .title{display:block;width:100%;border:1px solid transparent;cursor:text}.editable-box .title input{display:inline-block;resize:horizontal;width:100%}.editable-box .title:hover{border-color:#e7e7e7}.title-hidden{text-transform:none!important;position:absolute;visibility:hidden;height:auto;width:auto;white-space:nowrap}"]
                }] }
    ];
    StPageTitleComponent.propDecorators = {
        title: [{ type: Input }],
        leftButton: [{ type: Input }],
        qaTag: [{ type: Input }],
        preTitle: [{ type: Input }],
        editable: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabled: [{ type: Input }],
        readOnly: [{ type: Input }],
        maxlength: [{ type: Input }],
        minlength: [{ type: Input }],
        error: [{ type: Input }],
        errorMessage: [{ type: Input }],
        clickButton: [{ type: Output }],
        edit: [{ type: Output }],
        input: [{ type: ViewChild, args: ['input', { static: false },] }]
    };
    StPageTitleComponent = __decorate([
        StEgeo()
    ], StPageTitleComponent);
    return StPageTitleComponent;
}());
if (false) {
    /** @type {?} */
    StPageTitleComponent.prototype.leftButton;
    /** @type {?} */
    StPageTitleComponent.prototype.qaTag;
    /** @type {?} */
    StPageTitleComponent.prototype.preTitle;
    /** @type {?} */
    StPageTitleComponent.prototype.editable;
    /** @type {?} */
    StPageTitleComponent.prototype.placeholder;
    /** @type {?} */
    StPageTitleComponent.prototype.disabled;
    /** @type {?} */
    StPageTitleComponent.prototype.readOnly;
    /** @type {?} */
    StPageTitleComponent.prototype.maxlength;
    /** @type {?} */
    StPageTitleComponent.prototype.minlength;
    /** @type {?} */
    StPageTitleComponent.prototype.error;
    /** @type {?} */
    StPageTitleComponent.prototype.errorMessage;
    /** @type {?} */
    StPageTitleComponent.prototype.clickButton;
    /** @type {?} */
    StPageTitleComponent.prototype.edit;
    /** @type {?} */
    StPageTitleComponent.prototype.input;
    /** @type {?} */
    StPageTitleComponent.prototype.focus;
    /** @type {?} */
    StPageTitleComponent.prototype.hasPreTitleValue;
    /**
     * @type {?}
     * @private
     */
    StPageTitleComponent.prototype._title;
    /** @type {?} */
    StPageTitleComponent.prototype._controlValueAccessorChangeFn;
    /** @type {?} */
    StPageTitleComponent.prototype.onTouched;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/st-input-adjustable/st-input-adjustable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StInputAdjustable = /** @class */ (function () {
    function StInputAdjustable(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    /**
     * @return {?}
     */
    StInputAdjustable.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.createHiddenTitle();
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.text = value || _this.placeholder;
            _this.hiddenTitle.innerText = _this.text;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.el.nativeElement.parentNode.style.width = _this.hiddenTitle.clientWidth + 10 + 'px';
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StInputAdjustable.prototype.createHiddenTitle = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.ngModel.value) {
            this.el.nativeElement.value = null;
            this.el.nativeElement.placeholder = this.placeholder;
        }
        this.hiddenTitle = this.el.nativeElement.parentNode.querySelector('.hidden-text');
        if (!this.hiddenTitle) {
            this.hiddenTitle = document.createElement('span');
            this.el.nativeElement.parentNode.appendChild(this.hiddenTitle);
        }
        this.hiddenTitle.className = 'hidden-text';
        this.hiddenTitle.style.visibility = 'hidden';
        this.hiddenTitle.style.position = 'absolute';
        this.hiddenTitle.style.textTransform = 'none';
        this.hiddenTitle.style.whiteSpace = 'nowrap';
        this.hiddenTitle.style.width = 'auto';
        this.hiddenTitle.style.height = 'auto';
    };
    StInputAdjustable.decorators = [
        { type: Directive, args: [{
                    selector: '[st-input-adjustable]'
                },] }
    ];
    /** @nocollapse */
    StInputAdjustable.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgModel }
    ]; };
    StInputAdjustable.propDecorators = {
        placeholder: [{ type: Input }]
    };
    return StInputAdjustable;
}());
if (false) {
    /** @type {?} */
    StInputAdjustable.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.text;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.hiddenTitle;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.el;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.ngModel;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-page-title/st-page-title.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPageTitleModule = /** @class */ (function () {
    function StPageTitleModule() {
    }
    StPageTitleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [StPageTitleComponent, StInputAdjustable],
                    exports: [StPageTitleComponent]
                },] }
    ];
    return StPageTitleModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Table]
 *
 * The pagination component has been designed to allow content to be displayed per pages. This informs user about the
 * number of the current page, the items displayed per page and the total of items. Moreover, when there are a lot of
 * items, it allows user to customize the number of items displayed per page.
 *
 * It is made by two sub-components:
 * - A range selector, that allows the user provides a dropdown to set how many items he wants to be displayed per page.
 * - A page navigation control, in order to let the user where he is and where he can go to.
 *
 * * \@model
 *
 *   [Paginate] {./st-pagination.interface.ts#Paginate}
 *   [PaginateOptions] {./st-pagination.interface.ts#PaginateOptions}
 *   [PaginateTexts] {./st-pagination.interface.ts#PaginateTexts}
 *   [PaginateTextsSchema] {./st-pagination.interface.ts#PaginateTextsSchema}
 *   [PaginateIconClasses] {./st-pagination.interface.ts#PaginateIconClasses}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <div class="pagination">
 *     <st-pagination [total]="items.length" [perPage]="perPage" [currentPage]="page" [id]="'pagination-demo'"
 *     (change)="onChangePage($event)">
 *     </st-pagination>
 *     </div>
 * ```
 *
 */
var StPaginationComponent = /** @class */ (function () {
    function StPaginationComponent(_cd, _paginationElement) {
        this._cd = _cd;
        this._paginationElement = _paginationElement;
        /**
         * \@Input {PaginateTexts} [label={element: 'Rows', perPage: 'per page', of: 'of'}] Translated texts displayed at the pagination
         */
        this.label = {
            element: 'Rows', perPage: 'per page', of: 'of'
        };
        /**
         * \@Input {PaginateOptions[]}
         * [perPageOptions=Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 ))]
         *  List of options displayed at a selector where user can change the number of items displayed per page
         */
        this.perPageOptions = [
            { value: 20, showFrom: 0 }, { value: 50, showFrom: 50 }, { value: 200, showFrom: 200 }
        ];
        /**
         * \@Input {PaginateIconClasses} [iconClasses=Object(previous='', next='')] Icon classes for previous and next page buttons
         */
        this.iconClasses = { previous: 'icon-arrow2_left', next: 'icon-arrow2_right' };
        /**
         * \@Output {Paginate} [change=''] Event emitted when user interacts with some of the elements in the pagination.
         *  This sends the new pagination status (current page and items per page)
         */
        this.change = new EventEmitter();
        /**
         * \@Output {PaginateOptions} [changePerPage='']  Event emitted when user interacts with some of the elements in the selector of items displayed per page.
         * This sends the current items per page.
         */
        this.changePerPage = new EventEmitter();
        this.disableNextButton = false;
        this.disablePrevButton = true;
        this.items = [];
        this._currentPage = 1;
        this._perPage = 20;
    }
    Object.defineProperty(StPaginationComponent.prototype, "currentPage", {
        /** @Input {number} [currentPage=1] Number of the current page */
        get: /**
         * \@Input {number} [currentPage=1] Number of the current page
         * @return {?}
         */
        function () {
            return this._currentPage;
        },
        set: /**
         * @param {?} currentPage
         * @return {?}
         */
        function (currentPage) {
            this._currentPage = currentPage;
            this.updatePages(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "perPage", {
        /** @Input {number} [perPage=20] The maximum number of items displayed per page */
        get: /**
         * \@Input {number} [perPage=20] The maximum number of items displayed per page
         * @return {?}
         */
        function () {
            return this._perPage;
        },
        set: /**
         * @param {?} perPage
         * @return {?}
         */
        function (perPage) {
            this.onChangePerPage(perPage, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "total", {
        /** @Input {number} [total=''] Total of items */
        get: /**
         * \@Input {number} [total=''] Total of items
         * @return {?}
         */
        function () {
            return this._total;
        },
        set: /**
         * @param {?} total
         * @return {?}
         */
        function (total) {
            this._total = total;
            this.generateItems();
            this.updatePages(false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "hasOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.items && this.items.length > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "paginationId", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var pagination = this._paginationElement.nativeElement;
            return pagination.getAttribute('id') !== null ? pagination.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "selectId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.paginationId !== null ? this.paginationId + "-select" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "buttonPrevId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.paginationId !== null ? this.paginationId + "-prev" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StPaginationComponent.prototype, "buttonNextId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.paginationId !== null ? this.paginationId + "-next" : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePages(false);
        this.generateItems();
    };
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.generateItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items = [];
        this.perPageOptions.forEach(this.addPageOption.bind(this));
        if (this.items.length) {
            this.selectedItem = this.items.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === _this._perPage; })) || this.items[0];
        }
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.nextPage = /**
     * @return {?}
     */
    function () {
        this.currentPage++;
        this.updatePages();
    };
    /**
     * @return {?}
     */
    StPaginationComponent.prototype.prevPage = /**
     * @return {?}
     */
    function () {
        this.currentPage--;
        this.updatePages();
    };
    /**
     * @param {?} perPage
     * @param {?=} emit
     * @return {?}
     */
    StPaginationComponent.prototype.onChangePerPage = /**
     * @param {?} perPage
     * @param {?=} emit
     * @return {?}
     */
    function (perPage, emit) {
        var _this = this;
        if (emit === void 0) { emit = true; }
        if (perPage && typeof perPage === 'number') {
            this._currentPage = 1;
            this._perPage = perPage;
            this.updatePages(emit);
            this.selectedItem = this.items.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === _this._perPage; }));
            if (emit) {
                this.changePerPage.emit(this._perPage);
            }
        }
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    StPaginationComponent.prototype.addPageOption = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (this._total && (!option.showFrom || option.showFrom <= this._total)) {
            this.items.push({
                label: "" + option.value,
                value: option.value
            });
        }
    };
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    StPaginationComponent.prototype.updatePages = /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    function (emit) {
        if (emit === void 0) { emit = true; }
        this.lastItem = this._perPage * this._currentPage;
        if (this._currentPage === 1) {
            this.firstItem = this._currentPage;
            this.disablePrevButton = true;
        }
        else {
            this.firstItem = this._perPage * (this._currentPage - 1) + 1;
            this.disablePrevButton = false;
        }
        if (this.lastItem >= this._total) {
            this.lastItem = this._total;
            this.disableNextButton = true;
        }
        else {
            this.disableNextButton = false;
        }
        if (emit) {
            this.change.emit({
                currentPage: this._currentPage,
                perPage: this._perPage
            });
        }
    };
    StPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-pagination',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-pagination pagination\">\n   <div *ngIf=\"hasOptions\" class=\"label st-pagination__per-page\">\n      <p class=\"st-pagination__label\">{{label.element}} {{label.perPage}}</p>\n      <st-select class=\"st-pagination__selector\" [options]=\"items\" [selected]=\"selectedItem\" (select)=\"onChangePerPage($event)\" [attr.id]=\"selectId\"></st-select>\n   </div>\n\n   <div class=\"label current-page-info\">\n      <p class=\"st-pagination__label\">{{firstItem}}-{{lastItem}} {{label.of || 'of'}} {{total}}</p>\n\n      <div class=\"buttons\">\n         <button class=\"button button-toolbar\" [attr.id]=\"buttonPrevId\" [disabled]=\"disablePrevButton\" type=\"button\" (click)=\"prevPage()\">\n            <i class=\"{{iconClasses?.previous || 'icon-arrow2_left'}}\"></i>\n         </button>\n         <button class=\"button button-toolbar\" [attr.id]=\"buttonNextId\" [disabled]=\"disableNextButton\" type=\"button\" (click)=\"nextPage()\">\n            <i class=\"{{iconClasses?.next || 'icon-arrow2_right'}}\"></i>\n         </button>\n      </div>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.pagination{display:flex;align-items:center;height:42px}.pagination .label{display:flex;align-items:center}.pagination .label p{margin:0;padding-right:15px}.pagination .current-page-info{flex:1;justify-content:flex-end}.pagination .st-pagination__selector{max-width:93px}.pagination button:first-child{margin:0 5px}"]
                }] }
    ];
    /** @nocollapse */
    StPaginationComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    StPaginationComponent.propDecorators = {
        label: [{ type: Input }],
        perPageOptions: [{ type: Input }],
        iconClasses: [{ type: Input }],
        change: [{ type: Output }],
        changePerPage: [{ type: Output }],
        currentPage: [{ type: Input }],
        perPage: [{ type: Input }],
        total: [{ type: Input }]
    };
    return StPaginationComponent;
}());
if (false) {
    /**
     * \@Input {PaginateTexts} [label={element: 'Rows', perPage: 'per page', of: 'of'}] Translated texts displayed at the pagination
     * @type {?}
     */
    StPaginationComponent.prototype.label;
    /**
     * \@Input {PaginateOptions[]}
     * [perPageOptions=Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 ))]
     *  List of options displayed at a selector where user can change the number of items displayed per page
     * @type {?}
     */
    StPaginationComponent.prototype.perPageOptions;
    /**
     * \@Input {PaginateIconClasses} [iconClasses=Object(previous='', next='')] Icon classes for previous and next page buttons
     * @type {?}
     */
    StPaginationComponent.prototype.iconClasses;
    /**
     * \@Output {Paginate} [change=''] Event emitted when user interacts with some of the elements in the pagination.
     *  This sends the new pagination status (current page and items per page)
     * @type {?}
     */
    StPaginationComponent.prototype.change;
    /**
     * \@Output {PaginateOptions} [changePerPage='']  Event emitted when user interacts with some of the elements in the selector of items displayed per page.
     * This sends the current items per page.
     * @type {?}
     */
    StPaginationComponent.prototype.changePerPage;
    /** @type {?} */
    StPaginationComponent.prototype.disableNextButton;
    /** @type {?} */
    StPaginationComponent.prototype.disablePrevButton;
    /** @type {?} */
    StPaginationComponent.prototype.firstItem;
    /** @type {?} */
    StPaginationComponent.prototype.lastItem;
    /** @type {?} */
    StPaginationComponent.prototype.items;
    /** @type {?} */
    StPaginationComponent.prototype.selectedItem;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._currentPage;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._perPage;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._total;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._cd;
    /**
     * @type {?}
     * @private
     */
    StPaginationComponent.prototype._paginationElement;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPaginationPipe = /** @class */ (function () {
    function StPaginationPipe(service) {
        this.service = service;
    }
    /**
     * @param {?} items
     * @param {?} args
     * @return {?}
     */
    StPaginationPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} args
     * @return {?}
     */
    function (items, args) {
        return this.service.newPage(items, args.currentPage, args.perPage);
    };
    StPaginationPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'paginate',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    StPaginationPipe.ctorParameters = function () { return [
        { type: StPaginationService }
    ]; };
    return StPaginationPipe;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    StPaginationPipe.prototype.service;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPaginationModule = /** @class */ (function () {
    function StPaginationModule() {
    }
    StPaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSelectModule],
                    exports: [StPaginationComponent, StPaginationPipe],
                    declarations: [StPaginationComponent, StPaginationPipe],
                    providers: [
                        StPaginationService
                    ]
                },] }
    ];
    return StPaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop-over/st-pop-over.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} Pop Over
 *
 * This components pop over a content with a title
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-pop-over [qaTag]="qaTag" [title]="title" [hidden]="hidden">
 *       <!-- CONTENT TO POP OVER -->
 *    </st-pop-over>
 * ```
 */
var StPopOverComponent = /** @class */ (function () {
    function StPopOverComponent() {
        /**
         * \@input {boolean} [hidden=false] Show or hide the pop over
         */
        this.hidden = false;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 17 };
        /**
         * \@Input {boolean} [showSettingBtn=false] when true, settings icon is displayed
         */
        this.showSettingBtn = false;
        /**
         * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
         */
        this.showArrow = true;
        /**
         * \@Input {boolean} [openToLeft=true] when true, modal is placed from left corner of button
         */
        this.openToLeft = true;
        /**
         * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM] Define position of content relative to button
         */
        this.placement = StPopPlacement.BOTTOM;
        /**
         * \@Output {Event} [click] Notify event click
         */
        this.clickConfig = new EventEmitter();
        this.defaultOffset = { x: 21, y: 8 };
    }
    Object.defineProperty(StPopOverComponent.prototype, "popOffset", {
        get: /**
         * @return {?}
         */
        function () {
            return { x: this.offset.x + (this.defaultOffset.x * (this.openToLeft ? 1 : -1)), y: (this.offset.y + this.defaultOffset.y) };
        },
        enumerable: true,
        configurable: true
    });
    StPopOverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-pop-over',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop [hidden]=\"hidden\" [placement]=\"placement\" [openToLeft]=\"openToLeft\" [offset]=\"popOffset\" class=\"test\">\n   <div pop-button>\n      <ng-content select=[pop-over-button]></ng-content>\n   </div>\n\n   <div pop-content [style.z-index]=\"9\" class=\"content st-pop-over__content\"\n        [ngClass]=\"{\n           'st-pop-over__content--with-arrow': showArrow,\n            'st-pop-over__content--to-right': showArrow && !openToLeft}\">\n      <div class=\"st-pop-over__header\" [ngClass]=\"{'st-pop-over__header--underlined': title}\"\n           *ngIf=\"title || showSettingBtn\">\n         <span *ngIf=\"title\" class=\"title\">{{title}}</span>\n         <button class=\"button st-pop-over__setting-action\" *ngIf=\"showSettingBtn\" (click)=\"clickConfig.emit($event)\">\n            <i class=\"icon-settings2\"></i>\n         </button>\n      </div>\n      <ng-content select=[pop-over-content]></ng-content>\n   </div>\n</st-pop>\n",
                    styles: ["@charset \"UTF-8\";.content{display:inline-block;height:auto;min-width:210px}.arrow{position:relative;width:13px;height:13px;bottom:47px;transform:rotate(-45deg);float:right;margin-right:15px;border-radius:2px}.st-pop-over__title{display:flex;flex-wrap:nowrap;align-items:center}.st-pop-over__setting-action{margin-left:auto}.arrow-with-config{bottom:56px}"]
                }] }
    ];
    StPopOverComponent.propDecorators = {
        qaTag: [{ type: Input }],
        title: [{ type: Input }],
        hidden: [{ type: Input }],
        offset: [{ type: Input }],
        showSettingBtn: [{ type: Input }],
        showArrow: [{ type: Input }],
        openToLeft: [{ type: Input }],
        placement: [{ type: Input }],
        clickConfig: [{ type: Output }]
    };
    return StPopOverComponent;
}());
if (false) {
    /**
     * \@input {string} [qaTag=''] For set id for tests
     * @type {?}
     */
    StPopOverComponent.prototype.qaTag;
    /**
     * \@input {string} [title] Title of the pop over
     * @type {?}
     */
    StPopOverComponent.prototype.title;
    /**
     * \@input {boolean} [hidden=false] Show or hide the pop over
     * @type {?}
     */
    StPopOverComponent.prototype.hidden;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
     * @type {?}
     */
    StPopOverComponent.prototype.offset;
    /**
     * \@Input {boolean} [showSettingBtn=false] when true, settings icon is displayed
     * @type {?}
     */
    StPopOverComponent.prototype.showSettingBtn;
    /**
     * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
     * @type {?}
     */
    StPopOverComponent.prototype.showArrow;
    /**
     * \@Input {boolean} [openToLeft=true] when true, modal is placed from left corner of button
     * @type {?}
     */
    StPopOverComponent.prototype.openToLeft;
    /**
     * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM] Define position of content relative to button
     * @type {?}
     */
    StPopOverComponent.prototype.placement;
    /**
     * \@Output {Event} [click] Notify event click
     * @type {?}
     */
    StPopOverComponent.prototype.clickConfig;
    /**
     * @type {?}
     * @private
     */
    StPopOverComponent.prototype.defaultOffset;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop-over/st-pop-over.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPopOverModule = /** @class */ (function () {
    function StPopOverModule() {
    }
    StPopOverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StPopModule],
                    declarations: [StPopOverComponent],
                    exports: [StPopOverComponent]
                },] }
    ];
    return StPopOverModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-progress-bar/st-progress-bar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StProgressBarComponent = /** @class */ (function () {
    function StProgressBarComponent() {
    }
    StProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-progress-bar',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"progress-bar progress-bar-primary\"></div>\n<div class=\" progress-bar progress-bar-secondary\"></div>\n",
                    styles: ["@charset \"UTF-8\";:host{display:block;height:2px;overflow:hidden;width:100%;background-color:#bce7fe;position:relative}:host.wider{height:5px}:host .progress-bar,:host .progress-bar::after{height:100%;position:absolute;width:100%}:host .progress-bar{-webkit-animation:none;animation:none;transform-origin:top left;transition:transform 250ms}:host .progress-bar::after{-webkit-animation:none;animation:none;content:'';display:inline-block;left:0;background:linear-gradient(90deg,transparent 5%,var(--egeo-theme-brand,#37b5e4) 40%,var(--egeo-theme-brand,#37b5e4) 93%,transparent 97%)}:host .progress-bar-primary{-webkit-animation:2s linear infinite progress-bar-primary-indeterminate-translate;animation:2s linear infinite progress-bar-primary-indeterminate-translate;left:-145.166611%}:host .progress-bar-primary.progress-bar::after{-webkit-animation:2s linear infinite progress-bar-primary-indeterminate-scale;animation:2s linear infinite progress-bar-primary-indeterminate-scale}:host .progress-bar-secondary{-webkit-animation:2s linear infinite progress-bar-secondary-indeterminate-translate;animation:2s linear infinite progress-bar-secondary-indeterminate-translate;left:-54.888891%;display:block}:host .progress-bar-secondary.progress-bar::after{-webkit-animation:2s linear infinite progress-bar-secondary-indeterminate-scale;animation:2s linear infinite progress-bar-secondary-indeterminate-scale}@-webkit-keyframes progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.8,0,.70173,.49582);animation-timing-function:cubic-bezier(.8,0,.70173,.49582);transform:translateX(0)}59.20%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.8,0,.70173,.49582);animation-timing-function:cubic-bezier(.8,0,.70173,.49582);transform:translateX(0)}59.20%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@-webkit-keyframes progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}37.60%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.50%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}37.60%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.50%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@-webkit-keyframes progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@-webkit-keyframes progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}"]
                }] }
    ];
    StProgressBarComponent.propDecorators = {
        wider: [{ type: HostBinding, args: ['class.wider',] }, { type: Input }]
    };
    return StProgressBarComponent;
}());
if (false) {
    /**
     * \@Input (Boolean) [wider] Option for a bigger progress-bar
     * @type {?}
     */
    StProgressBarComponent.prototype.wider;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-progress-bar/st-progress-bar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StProgressBarModule = /** @class */ (function () {
    function StProgressBarModule() {
    }
    StProgressBarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        StProgressBarComponent
                    ],
                    exports: [StProgressBarComponent]
                },] }
    ];
    return StProgressBarModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio-menu/st-radio-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Radio Menu]
 *
 * The Radio Menu is composed of options with radios. Usually, it is used in forms and when user
 * interacts with the radio menu, certain part of that form changes according to the selected option.
 * Moreover, you can add to the radio menu a specific theme in order to adapt its colors as you need it.
 *
 * \@example
 *
 * {html}
 *
 * ```
 *  <st-radio-menu [activeOption]="selectedOptionTheme1" class="radio-menu" [options]="options"
 *    qaTag="radio-menu-theme-gray-1">
 *  </st-radio-menu>
 * ```
 *
 */
var StRadioMenuComponent = /** @class */ (function () {
    function StRadioMenuComponent() {
        /**
         * \@Input {StRadioMenuOption} [changedOption='']
         */
        this.changedOption = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    StRadioMenuComponent.prototype.isActive = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return (this.activeOption !== undefined &&
            this.activeOption.value === option.value);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StRadioMenuComponent.prototype.activateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activeOption = option;
        this.changedOption.emit(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StRadioMenuComponent.prototype.checkedOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.activeOption && (this.activeOption.value === option.value);
    };
    StRadioMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-radio-menu',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-radio-menu sth-radio-menu\">\n   <ul class=\"st-radio-menu__list\">\n      <li *ngFor=\"let option of options; let i = index;\" class=\"st-radio-menu__option\">\n\n         <div class=\"st-radio-menu__option sth-radio-menu-option\" (click)=\"activateOption(option)\" [ngClass]=\"{'active': isActive(option),\n           'no-active': !isActive(option) && activeOption}\" [attr.id]=\"qaTag + '-option-' + i\">\n\n            <st-radio [name]=\"option.label\" [value]=\"option.value\" [checked]=\"checkedOption(option)\">\n               <span class=\"st-radio-menu__option-text\">{{ option.label }}</span>\n            </st-radio>\n         </div>\n      </li>\n   </ul>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class]': 'theme'
                    },
                    styles: ["@charset \"UTF-8\";:host{display:block}.st-radio-menu{height:100%;width:100%;display:block;position:relative}.st-radio-menu__list{height:100%;position:relative;list-style:none;width:100%;padding-right:30px}.st-radio-menu__option{padding:3px 0 0 8px;height:29px;font-size:15px;margin-bottom:6px;cursor:pointer}.st-radio-menu__option-text{padding-left:7px}.st-radio-menu__option.active{width:80%}.st-radio-menu__option.active:after{border-top:60px solid transparent;border-bottom:60px solid transparent}.st-radio-menu__option.active:before{transform:rotate(45deg);content:\" \";float:right;width:20px;height:20px;margin-top:1.7px;margin-right:-10.4px}"]
                }] }
    ];
    /** @nocollapse */
    StRadioMenuComponent.ctorParameters = function () { return []; };
    StRadioMenuComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        qaTag: [{ type: Input }],
        theme: [{ type: Input }],
        changedOption: [{ type: Output }]
    };
    return StRadioMenuComponent;
}());
if (false) {
    /**
     * \@Input {StRadioMenuOption} [activeOption=''] Current active option
     * @type {?}
     */
    StRadioMenuComponent.prototype.activeOption;
    /**
     * \@Input {StRadioMenuOption[]} [options=''] Array of string with options, option names must be translated
     * @type {?}
     */
    StRadioMenuComponent.prototype.options;
    /**
     * \@Input {string} [qaTag=''] Identifier to generate a qa tag for each option
     * @type {?}
     */
    StRadioMenuComponent.prototype.qaTag;
    /**
     * \@Input {string} [theme=''] String representing the theme (css class) to be applied to the radio menu component.
     * If you are using the Stratio theme, the possible values are theme-gray-1 and theme-gray-2
     * @type {?}
     */
    StRadioMenuComponent.prototype.theme;
    /**
     * \@Input {StRadioMenuOption} [changedOption='']
     * @type {?}
     */
    StRadioMenuComponent.prototype.changedOption;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio/st-radio.change.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RadioChange = /** @class */ (function () {
    function RadioChange() {
    }
    RadioChange.decorators = [
        { type: Injectable }
    ];
    return RadioChange;
}());
if (false) {
    /** @type {?} */
    RadioChange.prototype.source;
    /** @type {?} */
    RadioChange.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio/st-radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return StRadioGroupComponent; })),
    multi: true
};
/** @type {?} */
var _uniqueIdCounter = 0;
// tslint:disable-next-line:max-classes-per-file
var StRadioGroupComponent = /** @class */ (function () {
    function StRadioGroupComponent() {
        this.change = new EventEmitter();
        // tslint:disable-next-line:no-use-before-declare
        this._radios = null;
        this._value = null;
        this._selected = null;
        this._disabled = false;
        this._name = "st-radio-group-" + _uniqueIdCounter++;
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
    Object.defineProperty(StRadioGroupComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
            }
            this.updatedSelectRadioFromValue();
            this.checkSelectRadio();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioGroupComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this.updateRadioName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioGroupComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this.checkSelectRadio();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioGroupComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StRadioGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StRadioGroupComponent.prototype.registerOnChange = /**
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
    StRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    StRadioGroupComponent.prototype.emitChangeEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new RadioChange();
        event.source = this._selected;
        event.value = this._value;
        this.change.emit(event);
    };
    /**
     * @return {?}
     */
    StRadioGroupComponent.prototype.checkSelectRadio = /**
     * @return {?}
     */
    function () {
        if (this.selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    /**
     * @return {?}
     */
    StRadioGroupComponent.prototype.touch = /**
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    StRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @private
     * @return {?}
     */
    StRadioGroupComponent.prototype.updateRadioName = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.name = _this.name;
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    StRadioGroupComponent.prototype.updatedSelectRadioFromValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isAlreadySelected = this._selected != null && this._selected.value === this._value;
        if (this._radios != null && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            }));
        }
    };
    StRadioGroupComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'st-radio-group',
                    providers: [MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                    host: {
                        role: 'radiogroup'
                    }
                },] }
    ];
    /** @nocollapse */
    StRadioGroupComponent.ctorParameters = function () { return []; };
    StRadioGroupComponent.propDecorators = {
        change: [{ type: Output }],
        qaTag: [{ type: Input }],
        value: [{ type: Input }],
        name: [{ type: Input }],
        selected: [{ type: Input }],
        disabled: [{ type: Input }],
        _radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return StRadioComponent; })),] }]
    };
    return StRadioGroupComponent;
}());
if (false) {
    /** @type {?} */
    StRadioGroupComponent.prototype.change;
    /** @type {?} */
    StRadioGroupComponent.prototype.qaTag;
    /** @type {?} */
    StRadioGroupComponent.prototype._radios;
    /** @type {?} */
    StRadioGroupComponent.prototype._value;
    /** @type {?} */
    StRadioGroupComponent.prototype._selected;
    /** @type {?} */
    StRadioGroupComponent.prototype._disabled;
    /** @type {?} */
    StRadioGroupComponent.prototype._name;
    /** @type {?} */
    StRadioGroupComponent.prototype._controlValueAccessorChangeFn;
    /** @type {?} */
    StRadioGroupComponent.prototype.onTouched;
}
/** @type {?} */
var idUnique = 0;
/**
 * \@description {Component} [Radio]
 *
 * The radio component is used normally in a form acting as the standard html radio input but also user can use it out of a form like a template driven form.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-radio-group class ="radio-inline">
 *    <st-radio value="1">Enabled</st-radio>
 *    <st-radio value="2" [disabled]="true">Disabled</st-radio>
 *    <st-radio value="2" [checked]= "true" [disabled]="true">Disabled checked</st-radio>
 * </st-radio-group>
 * ```
 *
 */
var StRadioComponent = /** @class */ (function () {
    function StRadioComponent(radioGroup, _radioDispatcher) {
        var _this = this;
        this._radioDispatcher = _radioDispatcher;
        /**
         * \@Input {string} [id='st-radio-<unique id>'] Input Id value
         */
        this.id = "st-radio-" + idUnique++;
        /**
         * \@Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test
         */
        this.qaTag = "st-radio-" + idUnique++;
        /**
         * \@Output {boolean} [change=''] Boolean emitted when radio button is changed
         */
        this.change = new EventEmitter();
        this._value = null;
        this.radioGroup = radioGroup;
        _radioDispatcher.listen((/**
         * @param {?} id
         * @param {?} name
         * @return {?}
         */
        function (id, name) {
            if (id !== _this.id && name === _this.name) {
                _this.checked = false;
            }
        }));
    }
    Object.defineProperty(StRadioComponent.prototype, "checked", {
        /** @Input {boolean} [checked=''] Boolean to check the radio button */
        get: /**
         * \@Input {boolean} [checked=''] Boolean to check the radio button
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} newCheckedState
         * @return {?}
         */
        function (newCheckedState) {
            if (this._checked !== newCheckedState) {
                this._checked = newCheckedState;
            }
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                this._radioDispatcher.notify(this.id, this.name);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioComponent.prototype, "disabled", {
        /** @Input {boolean} [disabled=''] Boolean to disable the radio button */
        get: /**
         * \@Input {boolean} [disabled=''] Boolean to disable the radio button
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioComponent.prototype, "value", {
        /** @Input {boolean} [value=''] Value of the radio button */
        get: /**
         * \@Input {boolean} [value=''] Value of the radio button
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup != null) {
                    if (!this.checked) {
                        this.checked = this.radioGroup.value === value;
                    }
                    else {
                        this.radioGroup.selected = null;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this._value;
        }
        if (this.radioGroup) {
            this.name = this.radioGroup.name;
        }
    };
    /**
     * @return {?}
     */
    StRadioComponent.prototype.onInputBlur = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            this.radioGroup.touch();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StRadioComponent.prototype.onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StRadioComponent.prototype.toggleRadio = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        if (!this.disabled) {
            this.checked = !this.checked;
            this.emitChangeEvent();
        }
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            if (groupValueChanged) {
                this.radioGroup.emitChangeEvent();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    StRadioComponent.prototype.emitChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new RadioChange();
        event.source = this;
        event.value = this._value;
        this.change.emit(event);
    };
    StRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-radio',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label [attr.for]=\"inputId\" class=\"st-radio\" [ngClass]=\"{'disabled': disabled}\" #label [attr.id]=\"qaTag\">\n   <input\n      type=\"radio\"\n      [id]=\"inputId\"\n      [attr.id]=\"\"\n      [name]=\"name\"\n      [hidden]=\"true\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (blur)=\"onInputBlur()\"\n      (change)=\"toggleRadio($event)\"\n      (click)=\"onInputClick($event)\"\n      [value]=\"value\">\n\n   <div class=\"custom-radio\" [ngClass]=\"{'checked' : checked, 'disabled': disabled}\"></div>\n   <ng-content></ng-content>\n</label>\n",
                    host: {
                        '[class.sth-radio-checked]': 'checked',
                        '[attr.id]': 'id'
                    },
                    styles: ["@charset \"UTF-8\";.st-radio{box-sizing:border-box;display:flex;align-content:center;align-items:center;cursor:pointer}.st-radio.disabled .custom-radio{cursor:default}.st-radio .custom-radio{width:15px;height:15px;cursor:pointer;display:inline-block;border-radius:100%;text-align:center;position:relative;box-sizing:border-box;margin-right:5px}.st-radio .custom-radio.checked:before{display:block;position:absolute;content:'';border-radius:100%;height:5px;width:5px;top:4px;left:4px;margin:auto;box-sizing:border-box}"]
                }] }
    ];
    /** @nocollapse */
    StRadioComponent.ctorParameters = function () { return [
        { type: StRadioGroupComponent, decorators: [{ type: Optional }] },
        { type: SelectOneDispatcher }
    ]; };
    StRadioComponent.propDecorators = {
        id: [{ type: Input }],
        qaTag: [{ type: Input }],
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StRadioComponent;
}());
if (false) {
    /** @type {?} */
    StRadioComponent.prototype.radioGroup;
    /**
     * \@Input {string} [id='st-radio-<unique id>'] Input Id value
     * @type {?}
     */
    StRadioComponent.prototype.id;
    /**
     * \@Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test
     * @type {?}
     */
    StRadioComponent.prototype.qaTag;
    /**
     * \@Input {string} [name=''] Input name value
     * @type {?}
     */
    StRadioComponent.prototype.name;
    /**
     * \@Output {boolean} [change=''] Boolean emitted when radio button is changed
     * @type {?}
     */
    StRadioComponent.prototype.change;
    /** @type {?} */
    StRadioComponent.prototype._value;
    /** @type {?} */
    StRadioComponent.prototype._checked;
    /** @type {?} */
    StRadioComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    StRadioComponent.prototype._radioDispatcher;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio/st-radio.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StRadioModule = /** @class */ (function () {
    function StRadioModule() {
    }
    StRadioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule, StLabelModule
                    ],
                    exports: [
                        StRadioComponent, StRadioGroupComponent
                    ],
                    declarations: [
                        StRadioComponent, StRadioGroupComponent
                    ],
                    providers: []
                },] }
    ];
    return StRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio-menu/st-radio-menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StRadioMenuModule = /** @class */ (function () {
    function StRadioMenuModule() {
    }
    StRadioMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StRadioModule],
                    declarations: [StRadioMenuComponent],
                    exports: [StRadioMenuComponent],
                    providers: [SelectOneDispatcher]
                },] }
    ];
    return StRadioMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar-visual-mode.ts
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
/** @enum {number} */
var StSidebarVisualMode = {
    normal: 0, complex: 1,
};
StSidebarVisualMode[StSidebarVisualMode.normal] = 'normal';
StSidebarVisualMode[StSidebarVisualMode.complex] = 'complex';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Sidebar]
 *
 * The sidebar component has been designed to navigate through different sections of a web page.
 *
 * \@model
 *
 *   [Sidebar items] {./st-sidebar-item.interface.ts#StSidebarItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-sidebar class="sidebar" title="Mesos Manager" [items]="items" qaTag="sidebar-demo">
 * </st-sidebar>
 * ```
 *
 */
var StSidebarComponent = /** @class */ (function () {
    function StSidebarComponent() {
        /**
         * \@Input {string} [title=''] Title displayed on the top of menu
         */
        this.title = '';
        /**
         * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
         */
        this.items = [];
        /**
         * \@Input {boolean} [searchMode=''] Boolean to enable or disable the search mode. By default, it is disabled
         */
        this.searchMode = false;
        /**
         * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
         */
        this.visualMode = StSidebarVisualMode.normal;
        /**
         * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emits the active item
         */
        this.change = new EventEmitter();
        /**
         * \@Output {string} [search=''] Event emitted when search mode is enabled and user interacts with the search input
         */
        this.search = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    StSidebarComponent.prototype.onChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this.active || this.active.id !== item.id) {
            this.change.emit(item);
        }
    };
    /**
     * @param {?} searchData
     * @return {?}
     */
    StSidebarComponent.prototype.onSearch = /**
     * @param {?} searchData
     * @return {?}
     */
    function (searchData) {
        if (searchData) {
            this.search.emit(searchData.text);
        }
    };
    StSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-sidebar',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content select=[sidebar-header]></ng-content>\n<h1 class=\"title\" *ngIf=\"title\"> {{title}}</h1>\n<st-search class=\"search\" *ngIf=\"searchMode\" (search)=\"onSearch($event)\"></st-search>\n<ul class=\"item-list\">\n   <st-sidebar-item-list [active]=\"active\" [items]=\"items\" [visualMode]=\"visualMode\" (change)=\"onChange($event)\">\n   </st-sidebar-item-list>\n</ul>\n<ng-content select=[sidebar-footer]></ng-content>\n",
                    providers: [],
                    host: { class: 'st-sidebar' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%;height:100%;display:block}.search{display:block;padding-bottom:30px}"]
                }] }
    ];
    StSidebarComponent.propDecorators = {
        title: [{ type: Input }],
        active: [{ type: Input }],
        items: [{ type: Input }],
        searchMode: [{ type: Input }],
        visualMode: [{ type: Input }],
        change: [{ type: Output }],
        search: [{ type: Output }]
    };
    return StSidebarComponent;
}());
if (false) {
    /**
     * \@Input {string} [title=''] Title displayed on the top of menu
     * @type {?}
     */
    StSidebarComponent.prototype.title;
    /**
     * \@Input {StSidebarItem} [active=''] The current active item
     * @type {?}
     */
    StSidebarComponent.prototype.active;
    /**
     * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
     * @type {?}
     */
    StSidebarComponent.prototype.items;
    /**
     * \@Input {boolean} [searchMode=''] Boolean to enable or disable the search mode. By default, it is disabled
     * @type {?}
     */
    StSidebarComponent.prototype.searchMode;
    /**
     * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
     * @type {?}
     */
    StSidebarComponent.prototype.visualMode;
    /**
     * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emits the active item
     * @type {?}
     */
    StSidebarComponent.prototype.change;
    /**
     * \@Output {string} [search=''] Event emitted when search mode is enabled and user interacts with the search input
     * @type {?}
     */
    StSidebarComponent.prototype.search;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar-item-list/st-sidebar-item-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [SidebarItemList]
 *
 * The sidebar item list component has been designed to display a list of items in a sidebar.
 *
 * \@model
 *
 *   [Sidebar items] {../st-sidebar-item.interface.ts#StSidebarItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-sidebar-item-list [items]="items" (change)="onChange($event)" [active]="active" [deep]="deep">
 * </st-sidebar-item-list>
 * ```
 *
 */
var StSidebarItemListComponent = /** @class */ (function () {
    function StSidebarItemListComponent() {
        /**
         * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
         */
        this.items = [];
        /**
         * \@Input {number} [deep=0] Deep of the item list in the sidebar
         */
        this.deep = 0;
        /**
         * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
         */
        this.visualMode = StSidebarVisualMode.normal;
        /**
         * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emit the active item
         */
        this.change = new EventEmitter();
        this.displayAsComplexModeValue = false;
        this.expanded = [];
    }
    Object.defineProperty(StSidebarItemListComponent.prototype, "active", {
        /** @Input {string} [active=''] The id of the current active item */
        get: /**
         * \@Input {string} [active=''] The id of the current active item
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            if (!this._isActive(active)) {
                this._active = active;
                this._updateStatus();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StSidebarItemListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this._active && this.items && this.items.length) {
            this._active = this.items[0];
        }
        this._updateStatus();
        this.displayAsComplexModeValue = this.displayAsComplexMode();
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    StSidebarItemListComponent.prototype.getItemClasses = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        /** @type {?} */
        var classes = {};
        /** @type {?} */
        var active = this._isActive(item);
        /** @type {?} */
        var activeChild = this.hasActiveChild(item);
        classes[item.class] = item.class;
        classes['item--complex'] = item.items && item.items.length;
        classes['item--active'] = active;
        classes['item--expanded'] = this.expanded[index];
        classes['item--has-active'] = activeChild;
        classes['item--disabled'] = item.disabled;
        return classes;
    };
    /**
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    StSidebarItemListComponent.prototype.onSelectItem = /**
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    function (item, position) {
        if (!item.disabled) {
            if (item.items && item.items.length) {
                this.expanded[position] = !this.expanded[position];
            }
            else {
                if (!this._active || this._active.id !== item.id) {
                    this.change.emit(item);
                    this._closeRestOfItems(item.id);
                }
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StSidebarItemListComponent.prototype.hasActiveChild = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var found = false;
        /** @type {?} */
        var i = 0;
        if (item.items && item.items.length) {
            while (!found && i < item.items.length) {
                if (this._isActive(item.items[i])) {
                    found = true;
                }
                ++i;
            }
            if (!found && item.items && item.items.length) {
                return this._hasActiveChildInChildren(item.items);
            }
        }
        return found;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StSidebarItemListComponent.prototype.onChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._isActive(item)) {
            this._closeRestOfItems(item.id);
            this.change.emit(item);
        }
    };
    /**
     * @return {?}
     */
    StSidebarItemListComponent.prototype.displayAsComplexMode = /**
     * @return {?}
     */
    function () {
        return this.visualMode === StSidebarVisualMode.complex;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    StSidebarItemListComponent.prototype._isActive = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item && this._active && this._active.id === item.id;
    };
    /**
     * @private
     * @return {?}
     */
    StSidebarItemListComponent.prototype._updateStatus = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.items.forEach((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        function (item, i) {
            if (_this.hasActiveChild(item)) {
                _this.expanded[i] = true;
            }
        }));
    };
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    StSidebarItemListComponent.prototype._hasActiveChildInChildren = /**
     * @private
     * @param {?} items
     * @return {?}
     */
    function (items) {
        /** @type {?} */
        var found = false;
        /** @type {?} */
        var i = 0;
        while (!found && i < items.length) {
            if (this.hasActiveChild(items[i])) {
                found = true;
            }
            ++i;
        }
        return found;
    };
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    StSidebarItemListComponent.prototype._closeRestOfItems = /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        var _this = this;
        this.expanded.forEach((/**
         * @param {?} open
         * @param {?} i
         * @return {?}
         */
        function (open, i) {
            if (open && _this.items[i].id !== itemId) {
                _this.expanded[i] = false;
            }
        }));
    };
    StSidebarItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-sidebar-item-list',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<ul class=\"item-list\" [ngClass]=\"{'item-list--inner': deep > 0, 'complex-mode': displayAsComplexModeValue}\">\n   <li [id]=\"item.id\" class=\"item\" [ngClass]=\"getItemClasses(item, index)\" *ngFor=\"let item of items; let index = index\">\n      <span class=\"item__label\" [ngClass]=\"{'item__label--with-results': item.result}\" (click)=\"onSelectItem(item, index)\">{{item.label}}</span>\n      <span *ngIf=\"item.result\" class=\"result__box\"><span class=\"result__text\">{{item.result}}</span></span>\n      <st-sidebar-item-list *ngIf=\"item.items && item.items.length && expanded[index]\"\n                            [items]=\"item.items\"\n                            [active]=\"active\"\n                            [visualMode]=\"visualMode\"\n                            [deep]=\"deep + 1\"\n                            (change)=\"onChange($event)\">\n      </st-sidebar-item-list>\n   </li>\n</ul>\n",
                    providers: [],
                    host: { class: 'st-sidebar-item-list' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%;height:100%;display:block}.item-list{list-style:none}.item{cursor:pointer}"]
                }] }
    ];
    StSidebarItemListComponent.propDecorators = {
        items: [{ type: Input }],
        deep: [{ type: Input }],
        visualMode: [{ type: Input }],
        change: [{ type: Output }],
        active: [{ type: Input }]
    };
    return StSidebarItemListComponent;
}());
if (false) {
    /**
     * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
     * @type {?}
     */
    StSidebarItemListComponent.prototype.items;
    /**
     * \@Input {number} [deep=0] Deep of the item list in the sidebar
     * @type {?}
     */
    StSidebarItemListComponent.prototype.deep;
    /**
     * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
     * @type {?}
     */
    StSidebarItemListComponent.prototype.visualMode;
    /**
     * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emit the active item
     * @type {?}
     */
    StSidebarItemListComponent.prototype.change;
    /** @type {?} */
    StSidebarItemListComponent.prototype.displayAsComplexModeValue;
    /** @type {?} */
    StSidebarItemListComponent.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    StSidebarItemListComponent.prototype._active;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StSidebarModule = /** @class */ (function () {
    function StSidebarModule() {
    }
    StSidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSearchModule],
                    declarations: [StSidebarComponent, StSidebarItemListComponent],
                    exports: [StSidebarComponent]
                },] }
    ];
    return StSidebarModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/st-table-cell/st-table-cell.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Table Cell]
 *
 * This component is designed to be added to the table row component
 *
 * \@example
 *
 * {html}
 *
 * ```
 *  <td st-table-cell st-table-row-content>
 *      <!-- CELL CONTENT WILL BE HERE -->
 *  </td>
 * ```
 *
 */
var StTableCellComponent = /** @class */ (function () {
    function StTableCellComponent() {
    }
    StTableCellComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-table-cell]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content></ng-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";"]
                }] }
    ];
    return StTableCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/st-table-row/st-table-row.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Table Row]
 *
 * This component is designed to be added to the table component
 *
 * \@example
 *
 * {html}
 *
 * ```
 *  <tr st-table-row [selected] ="true" [standUpSelected] = "false">
 *      <!-- CELL LIST WILL BE HERE -->
 *  </tr>
 * ```
 *
 */
var StTableRowComponent = /** @class */ (function () {
    function StTableRowComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * \@Input {boolean} [standUpSelected=true] It indicates if when row is selected, it has to be displayed stood up
         */
        this.standUpSelected = true;
        this.rootClass = true;
        this.showHoverMenu = false;
    }
    Object.defineProperty(StTableRowComponent.prototype, "hasSelectedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selected && this.standUpSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTableRowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.hoverMenu && this.hoverMenu.nativeElement.children.length === 0) {
            this.elementRef.nativeElement.removeChild(this.hoverMenu.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    StTableRowComponent.prototype.onShowHoverMenu = /**
     * @return {?}
     */
    function () {
        this.showHoverMenu = true;
    };
    /**
     * @return {?}
     */
    StTableRowComponent.prototype.onHideHoverMenu = /**
     * @return {?}
     */
    function () {
        this.showHoverMenu = false;
    };
    StTableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-table-row]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content\n   select='[st-table-row-content]'>\n</ng-content>\n\n<td class='hover-menu' #hoverMenu [ngClass]=\"{'hover-menu--show': showHoverMenu}\">\n   <ng-content select='[st-table-row-hover]'></ng-content>\n</td>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{position:relative;width:100%}.hover-menu{opacity:0;vertical-align:top;position:relative}.hover-menu--show{opacity:1!important}"]
                }] }
    ];
    /** @nocollapse */
    StTableRowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StTableRowComponent.propDecorators = {
        selected: [{ type: Input }],
        standUpSelected: [{ type: Input }],
        hoverMenu: [{ type: ViewChild, args: ['hoverMenu', { static: false },] }],
        rootClass: [{ type: HostBinding, args: ['class.st-table-row',] }],
        hasSelectedClass: [{ type: HostBinding, args: ['class.selected',] }],
        onShowHoverMenu: [{ type: HostListener, args: ['mouseover',] }],
        onHideHoverMenu: [{ type: HostListener, args: ['mouseout',] }]
    };
    return StTableRowComponent;
}());
if (false) {
    /**
     * \@Input {boolean} [selected=''] It indicates if row is selected or not
     * @type {?}
     */
    StTableRowComponent.prototype.selected;
    /**
     * \@Input {boolean} [standUpSelected=true] It indicates if when row is selected, it has to be displayed stood up
     * @type {?}
     */
    StTableRowComponent.prototype.standUpSelected;
    /** @type {?} */
    StTableRowComponent.prototype.hoverMenu;
    /** @type {?} */
    StTableRowComponent.prototype.rootClass;
    /** @type {?} */
    StTableRowComponent.prototype.showHoverMenu;
    /**
     * @type {?}
     * @private
     */
    StTableRowComponent.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/st-table.interface.ts
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
var StTableFilterIconClasses = /** @class */ (function () {
    function StTableFilterIconClasses() {
        this.selected = 'icon-facets-2';
        this.enabled = 'icon-arrow4_down';
    }
    return StTableFilterIconClasses;
}());
if (false) {
    /** @type {?} */
    StTableFilterIconClasses.prototype.selected;
    /** @type {?} */
    StTableFilterIconClasses.prototype.enabled;
}
var StTableIconClasses = /** @class */ (function () {
    function StTableIconClasses() {
        this.filter = new StTableFilterIconClasses();
        this.sort = {
            asc: 'icon-arrow-up',
            desc: 'icon-arrow-down'
        };
    }
    return StTableIconClasses;
}());
if (false) {
    /** @type {?} */
    StTableIconClasses.prototype.filter;
    /** @type {?} */
    StTableIconClasses.prototype.sort;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/st-popover-filter/st-popover-filter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StPopoverFilterComponent = /** @class */ (function () {
    function StPopoverFilterComponent(_elementRef) {
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
    Object.defineProperty(StPopoverFilterComponent.prototype, "hidden", {
        /** @Input {boolean} [hidden=''] field to show popover */
        get: /**
         * \@Input {boolean} [hidden=''] field to show popover
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        set: /**
         * @param {?} hidden
         * @return {?}
         */
        function (hidden) {
            if (!hidden) {
                this.offsetX = (this._elementRef.nativeElement.offsetLeft - this._elementRef.nativeElement.offsetWidth) * -1;
            }
            this._hidden = hidden;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    StPopoverFilterComponent.prototype.getConfigField = /**
     * @param {?} field
     * @param {?} config
     * @return {?}
     */
    function (field, config) {
        return get(field, "filters." + config);
    };
    /**
     * @return {?}
     */
    StPopoverFilterComponent.prototype.getFilteredIcon = /**
     * @return {?}
     */
    function () {
        return this.filtered ? this.iconClasses.selected : this.iconClasses.enabled;
    };
    /**
     * @param {?} indexFilter
     * @param {?} event
     * @return {?}
     */
    StPopoverFilterComponent.prototype.onChangeFilter = /**
     * @param {?} indexFilter
     * @param {?} event
     * @return {?}
     */
    function (indexFilter, event) {
        this.field.filters.filterConfig[indexFilter].selected = ((/** @type {?} */ (event))).checked;
    };
    /**
     * @return {?}
     */
    StPopoverFilterComponent.prototype.onFilter = /**
     * @return {?}
     */
    function () {
        this.filter.emit();
    };
    StPopoverFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-popover-filter',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop-over  class=\"st-table__popover\" qaTag=\"pop-over-table\"\n              [title]=\"getConfigField(field, 'title')\"\n              [hidden]=\"hidden\"\n              [showArrow]=\"false\"\n              [openToLeft]=\"false\"\n              [offset]=\"{x: offsetX, y: 0}\"\n              [showSettingBtn]=\"getConfigField(field, 'showSettingBtn')\">\n   <i pop-over-button class='st-table__filter-arrow' [ngClass]=\"getFilteredIcon()\">\n   </i>\n   <div pop-over-content class=\"st-table__popover-content\">\n      <ng-container [ngTemplateOutlet]=\"templateContentFilter\" [ngTemplateOutletContext]=\"{index:index}\"></ng-container>\n      <div class=\"st-table__popover-content-filter\" *ngIf=\"!templateContentFilter\">\n         <div *ngFor=\"let filter of field.filters.filterConfig; let indexFilter = index\">\n            <st-checkbox name=\"filter.name\" [checked]=\"filter.selected\" [value]=\"false\" (change)=\"onChangeFilter(indexFilter, $event)\">\n               <span>{{filter.name}}</span>\n            </st-checkbox>\n         </div>\n         <button id=\"filter-button-{{index}}\" class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter()\">\n            <i *ngIf=\"!getConfigField(field, 'buttonText')\" class=\"icon icon-filter\"></i>\n            <span>{{getConfigField(field, 'buttonText')}}</span>\n         </button>\n      </div>\n   </div>\n</st-pop-over>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-table__header-item--filterable{position:initial;text-transform:inherit}.st-table__popover-content{display:flex;flex-wrap:nowrap;padding:15px;white-space:nowrap;margin-left:4px}.st-table__popover-content-filter{width:100%}.st-table__popover-button{margin-top:20px}.st-table__popover{display:inline-flex}.st-table__popover span{position:initial;text-transform:inherit}"]
                }] }
    ];
    /** @nocollapse */
    StPopoverFilterComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StPopoverFilterComponent.propDecorators = {
        field: [{ type: Input }],
        index: [{ type: Input }],
        filtered: [{ type: Input }],
        templateContentFilter: [{ type: Input }],
        iconClasses: [{ type: Input }],
        filter: [{ type: Output }],
        hidden: [{ type: Input }]
    };
    return StPopoverFilterComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/order.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ORDER_TYPE = {
    ASC: "asc", DESC: "desc",
};
var Order = /** @class */ (function () {
    function Order(orderBy, type) {
        this.orderBy = orderBy;
        this.type = type;
    }
    return Order;
}());
if (false) {
    /** @type {?} */
    Order.prototype.orderBy;
    /** @type {?} */
    Order.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/st-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Table]
 *
 * The table component has been designed to display any content like images, text, graphs, etc.
 *
 * * \@model
 *
 *   [StTableHeader] {./shared/table-header.interface.ts#StTableHeader}
 *   [StDynamicTableHeader] {./shared/table-header.interface.ts#StFilterElement}
 *   [StFilterHeader] {./shared/table-header.interface.ts#StFilterHeader}
 *   [StTableFilterIconClasses] {./st-table.interface.ts#StTableFilterIconClasses}
 *   [StTableIconClasses] {./st-table.interface.ts#StTableIconClasses}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-table [fields]="fields" [sortable]="true" (changeOrder)="yourFunctionToOrder($event)">
 * <tr st-table-row *ngFor="let userData of data">
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.id}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.name}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.lastName}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.phone}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.company}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.completedProfile}}</label>
 * </td>
 * <td st-table-row-hover>
 *    <i class="icon icon-arrow2_right"></i>
 * </td>
 * </tr>
 * </st-table>
 * ```
 *
 */
var StTableComponent = /** @class */ (function () {
    function StTableComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [header=true] Boolean to show or hide the header
         */
        this.header = true;
        /**
         * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
         * the new "sortable" field inside stTableHeader model
         */
        this.sortable = true;
        /**
         * \@Input {boolean} [filterable=true] Boolean to make filterable the table, To enable filtering of columns use
         * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
         */
        this.filterable = false;
        /**
         * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
         *  deselect all rows
         */
        this.selectableAll = false;
        /**
         * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
         */
        this.iconClasses = new StTableIconClasses();
        /**
         * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
         */
        this.changeOrder = new EventEmitter();
        /**
         * \@Output {boolean} [selectAll=''] Event emitted when user interacts with the checkbox to select or deselect
         * all rows
         */
        this.selectAll = new EventEmitter();
        /**
         * \@Output {string} [clickFilter=] Event emitted when clicking on filters icon
         */
        this.clickFilter = new EventEmitter();
        /**
         * \@Output {StTableHeader[]} [selectFilters=''] Event emitted  when user interacts with filter button without a custom template
         */
        this.selectFilters = new EventEmitter();
        this.tableClasses = {};
        this.orderTypes = ORDER_TYPE;
        this.visibleFilter = -1;
        this._fixedHeader = false;
        this._stickyHoverMenu = false;
        this._hasHoverMenu = false;
    }
    Object.defineProperty(StTableComponent.prototype, "fixedHeader", {
        /** @Input {boolean} [fixedHeader=false] Boolean to fix the table header */
        get: /**
         * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
         * @return {?}
         */
        function () {
            return this._fixedHeader;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._fixedHeader = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "stickyHoverMenu", {
        /** @Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible */
        get: /**
         * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
         * @return {?}
         */
        function () {
            return this._stickyHoverMenu;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._stickyHoverMenu = newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "customClasses", {
        /** @Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows */
        get: /**
         * \@Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows
         * @return {?}
         */
        function () {
            return this._customClasses;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this.tableClasses[this._customClasses] = undefined;
            this._customClasses = newValue;
            this.tableClasses[this._customClasses] = this._customClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "selectedAll", {
        /** @Input {boolean} [selectedAll=false] It specifies if all rows are selected */
        get: /**
         * \@Input {boolean} [selectedAll=false] It specifies if all rows are selected
         * @return {?}
         */
        function () {
            return this._selectedAll;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._selectedAll = newValue;
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTableComponent.prototype, "hasHoverMenu", {
        /** @Input {boolean} [hasHoverMenu=false] It specifies if a menu has to be displayed when user puts the mouse over
         * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
         */
        get: /**
         * \@Input {boolean} [hasHoverMenu=false] It specifies if a menu has to be displayed when user puts the mouse over
         * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
         * @return {?}
         */
        function () {
            return this._hasHoverMenu;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            this._hasHoverMenu = newValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.filterable && !this.statusFilter) {
            this.statusFilter = new Array(this.fields.length);
            this.statusFilter.fill(false);
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.getHeaderItemClass = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var isOrderAsc = this.isSortedByFieldAndDirection(field, this.orderTypes.ASC);
        return isOrderAsc ? this.iconClasses.sort.asc : this.iconClasses.sort.desc;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.isSortable = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return field && field.sortable !== undefined ? field.sortable : this.sortable;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.isSortedByField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return this.currentOrder && this.currentOrder.orderBy === field.id;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.isFilterable = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return this.filterable && (get(field, 'filters.filterConfig')) ||
            (this.templateContentFilter && get(field, 'filters')) ||
            get(field, 'filters.templateRef');
    };
    /**
     * @param {?} event
     * @param {?} index
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.onClickPopover = /**
     * @param {?} event
     * @param {?} index
     * @param {?} field
     * @return {?}
     */
    function (event, index, field) {
        event.stopPropagation();
        if (this.visibleFilter === index) {
            this.visibleFilter = -1;
        }
        else {
            this.visibleFilter = index;
        }
        this.clickFilter.emit(field);
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTableComponent.prototype.onHidePopover = /**
     * @return {?}
     */
    function () {
        this.visibleFilter = -1;
        this._cd.markForCheck();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StTableComponent.prototype.onChangeOrder = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var _currentOrder;
        if (field && this.isSortable(field)) {
            if (this.currentOrder && this.currentOrder.orderBy === field.id) {
                _currentOrder = this.changeOrderDirection();
            }
            else {
                _currentOrder = new Order(field.id, ORDER_TYPE.ASC);
            }
            this.changeOrder.emit(_currentOrder);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTableComponent.prototype.onSelectAll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectAll.emit(event.checked);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTableComponent.prototype.onSelectedFilters = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var selectedFilters = cloneDeep(this.fields);
        selectedFilters = selectedFilters.filter((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (get(field, 'filters.filterConfig')) {
                field.filters.filterConfig = field.filters.filterConfig.filter((/**
                 * @param {?} conf
                 * @return {?}
                 */
                function (conf) { return conf.selected; }));
                if (field.filters.filterConfig.length > 0) {
                    return field;
                }
            }
        }));
        this.selectFilters.emit(selectedFilters);
    };
    /**
     * @private
     * @return {?}
     */
    StTableComponent.prototype.changeOrderDirection = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newDirection = this.currentOrder.type === ORDER_TYPE.ASC ? ORDER_TYPE.DESC : ORDER_TYPE.ASC;
        return new Order(this.currentOrder.orderBy, newDirection);
    };
    /**
     * @private
     * @param {?} field
     * @param {?} orderType
     * @return {?}
     */
    StTableComponent.prototype.isSortedByFieldAndDirection = /**
     * @private
     * @param {?} field
     * @param {?} orderType
     * @return {?}
     */
    function (field, orderType) {
        return this.isSortedByField(field) && this.currentOrder.type === orderType;
    };
    StTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-table',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<table class='st-table' [ngClass]=\"tableClasses\" [attr.id]='qaTag'>\n   <thead>\n   <tr *ngIf=\"header\" class='st-table__header'>\n\n      <th *ngFor='let field of fields; let i = index' class='st-table__header-item' [ngClass]=\"{\n             'st-table__header-item--selected': isSortedByField(field),\n             'st-table__header-item--sortable': isSortable(field),\n             'st-table__header-item--filterable': isFilterable(field)}\">\n         <st-checkbox *ngIf=\"i == 0 && selectableAll\" qaTag=\"select-all-checkbox\" class=\"st-table__checkbox\"\n                      name=\"selectAll\"\n                      [checked]=\"selectedAll\" (change)=\"onSelectAll($event)\">\n         </st-checkbox>\n         <label class='st-table__header-text' (click)=\"onChangeOrder(field)\">\n            <i *ngIf=\"isSortedByField(field)\" class='st-table__order-arrow' [ngClass]=\"getHeaderItemClass(field)\">\n            </i>\n            {{field.label}}\n         </label>\n         <st-popover-filter *ngIf=\"isFilterable(field)\"\n                            [field]=\"field\"\n                            [index]=\"i\"\n                            [templateContentFilter]=\"templateContentFilter\"\n                            [filtered]=\"statusFilter[i]\"\n                            [hidden]=\"visibleFilter !== i\"\n                            [iconClasses]=\"iconClasses?.filter\"\n                            (filter)=\"onSelectedFilters($event)\"\n                            (click)=\"onClickPopover($event, i, field)\"\n                            (clickOutside)=\"onHidePopover()\">\n         </st-popover-filter>\n      </th>\n      <th *ngIf=\"hasHoverMenu\"></th> <!-- For hover cell -->\n   </tr>\n   </thead>\n   <ng-content></ng-content>\n</table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-table{width:100%}.st-table__header-item{text-transform:capitalize;position:relative;vertical-align:bottom}.st-table__header-text{position:relative;height:100%;display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;cursor:inherit}"]
                }] }
    ];
    /** @nocollapse */
    StTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTableComponent.propDecorators = {
        fields: [{ type: Input }],
        qaTag: [{ type: Input }],
        header: [{ type: Input }],
        sortable: [{ type: Input }],
        filterable: [{ type: Input }],
        selectableAll: [{ type: Input }],
        currentOrder: [{ type: Input }],
        templateContentFilter: [{ type: Input }],
        statusFilter: [{ type: Input }],
        iconClasses: [{ type: Input }],
        fixedHeader: [{ type: Input }, { type: HostBinding, args: ['class.st-custom-scrollbar',] }, { type: HostBinding, args: ['class.fixed-header',] }],
        stickyHoverMenu: [{ type: Input }, { type: HostBinding, args: ['class.sticky-hover-menu',] }],
        customClasses: [{ type: Input }],
        selectedAll: [{ type: Input }],
        hasHoverMenu: [{ type: Input }],
        changeOrder: [{ type: Output }],
        selectAll: [{ type: Output }],
        clickFilter: [{ type: Output }],
        selectFilters: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], StTableComponent.prototype, "fields", void 0);
    /**
     * \@description {Component} [Table]
     *
     * The table component has been designed to display any content like images, text, graphs, etc.
     *
     * * \@model
     *
     *   [StTableHeader] {./shared/table-header.interface.ts#StTableHeader}
     *   [StDynamicTableHeader] {./shared/table-header.interface.ts#StFilterElement}
     *   [StFilterHeader] {./shared/table-header.interface.ts#StFilterHeader}
     *   [StTableFilterIconClasses] {./st-table.interface.ts#StTableFilterIconClasses}
     *   [StTableIconClasses] {./st-table.interface.ts#StTableIconClasses}
     *
     * \@example
     *
     * {html}
     *
     * ```
     * <st-table [fields]="fields" [sortable]="true" (changeOrder)="yourFunctionToOrder($event)">
     * <tr st-table-row *ngFor="let userData of data">
     * <td st-table-cell st-table-row-content>
     *    <label >{{userData.id}}</label>
     * </td>
     * <td st-table-cell st-table-row-content>
     *    <label >{{userData.name}}</label>
     * </td>
     * <td st-table-cell st-table-row-content>
     *    <label >{{userData.lastName}}</label>
     * </td>
     * <td st-table-cell st-table-row-content>
     *    <label >{{userData.phone}}</label>
     * </td>
     * <td st-table-cell st-table-row-content>
     *    <label >{{userData.company}}</label>
     * </td>
     * <td st-table-cell st-table-row-content>
     *    <label >{{userData.completedProfile}}</label>
     * </td>
     * <td st-table-row-hover>
     *    <i class="icon icon-arrow2_right"></i>
     * </td>
     * </tr>
     * </st-table>
     * ```
     *
     */
    StTableComponent = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], StTableComponent);
    return StTableComponent;
}());
if (false) {
    /**
     * \@Input {StTableHeader[]} [fields=''] List of field displayed in the header
     * @type {?}
     */
    StTableComponent.prototype.fields;
    /**
     * \@Input {string} [qaTag=''] Prefix used to generate the id values for qa tests
     * @type {?}
     */
    StTableComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [header=true] Boolean to show or hide the header
     * @type {?}
     */
    StTableComponent.prototype.header;
    /**
     * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
     * the new "sortable" field inside stTableHeader model
     * @type {?}
     */
    StTableComponent.prototype.sortable;
    /**
     * \@Input {boolean} [filterable=true] Boolean to make filterable the table, To enable filtering of columns use
     * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
     * @type {?}
     */
    StTableComponent.prototype.filterable;
    /**
     * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
     *  deselect all rows
     * @type {?}
     */
    StTableComponent.prototype.selectableAll;
    /**
     * \@Input {Order} [currentOrder=''] It specifies what is the current order applied to the table
     * @type {?}
     */
    StTableComponent.prototype.currentOrder;
    /**
     * \@Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content
     * @type {?}
     */
    StTableComponent.prototype.templateContentFilter;
    /**
     * \@Input {boolean[]} [statusFilter=''] List of status filter by column, needed with templateContentFilter
     * @type {?}
     */
    StTableComponent.prototype.statusFilter;
    /**
     * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
     * @type {?}
     */
    StTableComponent.prototype.iconClasses;
    /**
     * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
     * @type {?}
     */
    StTableComponent.prototype.changeOrder;
    /**
     * \@Output {boolean} [selectAll=''] Event emitted when user interacts with the checkbox to select or deselect
     * all rows
     * @type {?}
     */
    StTableComponent.prototype.selectAll;
    /**
     * \@Output {string} [clickFilter=] Event emitted when clicking on filters icon
     * @type {?}
     */
    StTableComponent.prototype.clickFilter;
    /**
     * \@Output {StTableHeader[]} [selectFilters=''] Event emitted  when user interacts with filter button without a custom template
     * @type {?}
     */
    StTableComponent.prototype.selectFilters;
    /** @type {?} */
    StTableComponent.prototype.tableClasses;
    /** @type {?} */
    StTableComponent.prototype.orderTypes;
    /** @type {?} */
    StTableComponent.prototype.visibleFilter;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._fixedHeader;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._stickyHoverMenu;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._selectedAll;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._hasHoverMenu;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._customClasses;
    /**
     * @type {?}
     * @private
     */
    StTableComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/st-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTableModule = /** @class */ (function () {
    function StTableModule() {
    }
    StTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StCheckboxModule, StPopOverModule, StClickOutsideModule],
                    declarations: [StPopoverFilterComponent, StTableCellComponent, StTableComponent, StTableRowComponent],
                    exports: [StPopoverFilterComponent, StTableCellComponent, StTableComponent, StTableRowComponent]
                },] }
    ];
    return StTableModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag-input/st-tag-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} Tag Input
 *
 * This component is a text input box that automatically creates tags out of a typed text.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-tag-input
 *    class="st-form-field"
 *    name="tag-input-reactive"
 *    formControlName="tag-input-reactive"
 *    [autocompleteList]="filteredlist"
 *    [withAutocomplete]="true"
 *    [disabled]="disabled"
 *    [label]="'Tag Input with Reactive Form'"
 *    [id]="'tag-input-reactive'"
 *    [placeholder]="'Add tags separated by commas'"
 *    [tooltip]="'This is a Tag Input component tooltip'"
 *    [forbiddenValues]="['test']"
 *    (input)="onFilterList($event)">
 * </st-tag-input>
 * <st-tag-input
 *    class="st-form-field"
 *    name="tag-input-template-driven"
 *    [(ngModel)]="tags.templateDriven"
 *    [autocompleteList]="filteredlist"
 *    [withAutocomplete]="true"
 *    [disabled]="disabled"
 *    [label]="'Tag Input with Template Driven Form'"
 *    [id]="'tag-input-template-driven'"
 *    [placeholder]="'Add tags separated by commas'"
 *    [tooltip]="'This is a Tag Input component tooltip'"
 *    [regularExpression]="pattern"
 *    (input)="onFilterList($event)">
 * </st-tag-input>
 * ```
 */
var StTagInputComponent = /** @class */ (function () {
    function StTagInputComponent(_selectElement, _cd) {
        this._selectElement = _selectElement;
        this._cd = _cd;
        /**
         * \@input {string | null} [label=null] Label to show over the input. It is empty by default
         */
        this.label = null;
        /**
         * \@input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default
         */
        this.tooltip = null;
        /**
         * \@input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
         */
        this.placeholder = null;
        /**
         * \@input {string | null} [errorMessage=null] Error message to show. It is empty by default
         */
        this.errorMessage = null;
        /**
         * \@input {string | null} [type=null] Type of the items
         */
        this.type = 'text';
        /**
         * \@input {boolean} [withAutocomplete=false] Enable autocomplete feature. It is false by default
         */
        this.withAutocomplete = false;
        /**
         * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
         */
        this.autocompleteList = [];
        /**
         * \@input {boolean} [charsToShowAutocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
         */
        this.charsToShowAutocompleteList = 1;
        /**
         * \@input {boolean} [allowFreeText=true] Boolean to allow user to type a free text or not
         */
        this.allowFreeText = true;
        /**
         * \@input {string[]} [forbiddenValues=Array()] A list of values that user can not type and if he types one of them,
         * tag input will be invalid. It is empty by default
         */
        this.forbiddenValues = [];
        /**
         * \@input {string} [regularExpression=] Regular expression to validate values. It is null by default
         */
        this.regularExpression = null;
        /**
         * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the tag input checks the errors before being modified by user
         */
        this.forceValidations = false;
        this.expandedMenu = false;
        this.items = [];
        this.innerInputContent = '';
        this.isPristine = true;
        this.showErrorValue = false;
        this._focus = false;
        this._isDisabled = false;
        this._newElementInput = null;
        this._selected = null;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StTagInputComponent.prototype, "disabled", {
        /** @input {boolean} [disabled=false] Disable the component. It is false by default */
        get: /**
         * \@input {boolean} [disabled=false] Disable the component. It is false by default
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label !== null && this.label.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !this._focus && !this.items.length && this.placeholder && this.placeholder.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasAutocomplete", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "disableValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled === true ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "isValidInput", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isForbidden = this.forbiddenValues.length && this.forbiddenValues.indexOf(this.innerInputContent) > -1;
            /** @type {?} */
            var isDuplicated = this.items.indexOf(this.innerInputContent) !== -1;
            /** @type {?} */
            var matchedPattern = this.regularExpression ? this._regularExp.test(this.innerInputContent) : true;
            return this.innerInputContent.length ? !isForbidden && !isDuplicated && matchedPattern : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "tagSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "selectId", {
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
    Object.defineProperty(StTagInputComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-input" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "labelId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-label" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "tagId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-tag-" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "listId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-autocomplete" : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTagInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._newElementInput = this.newElementInput.nativeElement;
        switch (this.type) {
            case 'number': {
                this.regularExpression = '^\\d+(\\.\\d+)?$';
                break;
            }
            case 'integer': {
                this.regularExpression = '^\\d+$';
                break;
            }
            default: {
                break;
            }
        }
        this._regularExp = new RegExp(this.regularExpression);
        this.showErrorValue = this.showError();
        this._cd.markForCheck();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StTagInputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.checkAutocompleteMenuChange(changes);
        if (this.forceValidations) {
            this.writeValue(this.items);
        }
        this._cd.markForCheck();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    StTagInputComponent.prototype.writeValue = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a;
        if (data && Array.isArray(data) && data.length) {
            this.items = [];
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var value = data_1_1.value;
                    /** @type {?} */
                    var parsedValue = this._getParsedTag(value);
                    if (parsedValue || !isNaN(parsedValue)) {
                        this.items.push(parsedValue);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.onChange(this.items);
            this.isPristine = false;
            this._cd.markForCheck();
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    StTagInputComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
        this._cd.markForCheck();
    };
    /**
     * @param {?} control
     * @return {?}
     */
    StTagInputComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StTagInputComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StTagInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // Input actions
    // Input actions
    /**
     * @param {?} text
     * @return {?}
     */
    StTagInputComponent.prototype.onInputText = 
    // Input actions
    /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.innerInputContent = text;
        this.showAutocompleteMenu();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onInputFocusIn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isDisabled) {
            this._focus = true;
            this._newElementInput.focus();
            this._forceResetAutoCompleteList();
            this.showAutocompleteMenu();
        }
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onInputFocusOut = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.expandedMenu) {
            this._focus = false;
            this.addCurrentTag();
        }
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onInputKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case 188: // Comma
            case 13: // Enter
                if (this.innerInputContent.length && this.isValidInput) {
                    this.addTag(this.innerInputContent);
                    this._forceResetAutoCompleteList();
                }
                event.preventDefault();
                break;
            case 9: // Tab
                if (this.innerInputContent.length && this.isValidInput) {
                    this.addTag(this.innerInputContent);
                    event.preventDefault();
                }
                else if (this.innerInputContent.length) {
                    this.clearInput();
                }
                break;
            case 46: // Delete
                if (this.innerInputContent.length) {
                    this.clearInput();
                }
                else if (this.items.length) {
                    event.target.previousElementSibling.focus();
                }
                break;
            case 8: // Backspace
            case 37: // Left
                if (this.items.length && !this.innerInputContent.length) {
                    event.target.previousElementSibling.focus();
                }
                break;
            default:
                break;
        }
    };
    // Tag actions
    // Tag actions
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagKeyDown = 
    // Tag actions
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        switch (event.keyCode) {
            case 8: // Backspace
            case 46: // Delete
                if (this._selected !== null) {
                    this.deleteTag(this._selected);
                    this._selected = null;
                    this._newElementInput.focus();
                }
                break;
            case 37: // Left
                if (this._selected > 0) {
                    event.target.previousElementSibling.focus();
                }
                break;
            case 39: // Right
                if (this._selected < this.items.length) {
                    event.target.nextElementSibling.focus();
                }
                break;
            default:
                break;
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagFocusIn = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (!this._isDisabled) {
            this._focus = true;
            this.addCurrentTag();
            this.expandedMenu = false;
            this._selected = index;
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagFocusOut = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        this._focus = false;
        this._selected = null;
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagClick = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        event.stopPropagation();
        event.preventDefault();
    };
    // Dropdown actions
    // Dropdown actions
    /**
     * @param {?} data
     * @return {?}
     */
    StTagInputComponent.prototype.onListSelect = 
    // Dropdown actions
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._focus = false;
        if (data.value.length && this.items.indexOf(data.value) === -1) {
            this.addTag(data.value);
        }
        else {
            this.clearInput();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.expandedMenu) {
            this._focus = false;
            this.addCurrentTag();
        }
    };
    /**
     * @return {?}
     */
    StTagInputComponent.prototype.showError = /**
     * @return {?}
     */
    function () {
        return typeof this.errorMessage === 'string' && (!this.isPristine || this.forceValidations) && !this._focus && !this.disabled;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.deleteTag = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.items.splice(index, 1);
        this.onChange(this.items);
        this._newElementInput.value = '';
        this.innerInputContent = '';
        this._newElementInput.dispatchEvent(new Event('input'));
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    StTagInputComponent.prototype.addTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var parsedValue = this._getParsedTag(tag);
        if (parsedValue || !isNaN(parsedValue)) {
            this.items.push(parsedValue);
            this.clearInput();
            this.onChange(this.items);
            this.isPristine = false;
        }
        this.showErrorValue = this.showError();
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype.addCurrentTag = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.innerInputContent.length && this.isValidInput) {
            this.addTag(this.innerInputContent);
        }
        else {
            this.clearInput();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype.clearInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.expandedMenu) {
            this.expandedMenu = false;
        }
        this.innerInputContent = '';
        this._newElementInput.innerText = '';
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype.showAutocompleteMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.withAutocomplete && !this.expandedMenu && this.charsToShowAutocompleteList <= this.innerInputContent.length) {
            this.expandedMenu = true;
        }
        if (this.innerInputContent === '' && this.charsToShowAutocompleteList) {
            this.expandedMenu = false;
        }
        this._cd.markForCheck();
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StTagInputComponent.prototype.checkAutocompleteMenuChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.autocompleteList) {
            this._cd.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    StTagInputComponent.prototype._getParsedTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        switch (this.type) {
            case 'number': {
                return parseFloat(tag);
            }
            case 'integer': {
                return parseInt(tag, 0);
            }
            default:
                return tag;
        }
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype._forceResetAutoCompleteList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.charsToShowAutocompleteList && this.withAutocomplete) {
            this._newElementInput.innerText = '';
            /** @type {?} */
            var event_1 = new Event('input', {
                'bubbles': true
            });
            event_1.data = '';
            this._newElementInput.dispatchEvent(event_1);
        }
    };
    StTagInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-tag-input',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-dropdown-menu [items]=\"autocompleteList\" [attr.id]=\"listId\" [placement]=\"'bottom-start'\" [active]=\"hasAutocomplete\"\n                  (change)=\"onListSelect($event)\">\n\n   <div class=\"st-tag-input\">\n      <label *ngIf=\"hasLabel\" class=\"st-tag-input__label st-label\" [attr.id]=\"labelId\"\n             [attr.title]=\"tooltip\"\n             [attr.disabled]=\"disableValue\"\n             [ngClass]=\"{ 'active': hasFocus, 'error': showErrorValue }\">{{label}}</label>\n\n      <div #inputElement class=\"st-tag-input__input st-input\"\n           [attr.disabled]=\"disableValue\" (clickOutside)=\"onClickOutside($event)\"\n           [ngClass]=\"{ 'active': hasFocus, 'error': showErrorValue }\" (click)=\"onInputFocusIn($event)\">\n\n         <span *ngIf=\"hasPlaceholder\" class=\"st-tag-input__placeholder\" [attr.disabled]=\"disableValue\">{{placeholder}}</span>\n         <div class=\"st-tag-input__item tag-item\" *ngFor=\"let item of items; let i = index;\"\n              [tabindex]=\"0\"\n              [attr.id]=\"tagId + i\"\n              (focusin)=\"onTagFocusIn($event, i)\"\n              (focusout)=\"onTagFocusOut($event, i)\"\n              (blur)=\"onTagFocusOut($event, i)\"\n              (click)=\"onTagClick($event, i)\"\n              (keydown)=\"onTagKeyDown($event, i)\">{{item}}<span *ngIf=\"!disabled\" class=\"icon-cross remove-tag-button\" (click)=\"deleteTag(i); $event.stopPropagation()\"></span>\n         </div>\n\n         <div #newElement type=\"type\"\n              class=\"st-tag-input__text inner-input\"\n              [attr.contenteditable]=\"(disableValue === null && allowFreeText)\"\n              [attr.id]=\"inputId\"\n              [ngClass]=\"{ 'error': !isValidInput }\"\n              (focusin)=\"onInputFocusIn($event)\"\n              (focusout)=\"onInputFocusOut($event)\"\n              (blur)=\"onInputFocusOut($event)\"\n              (input)=\"onInputText($event.target.textContent)\"\n              (keydown)=\"onInputKeyDown($event)\"></div>\n      </div>\n   </div>\n\n</st-dropdown-menu>\n<span class=\"info-message\" *ngIf=\"infoMessage && isPristine\">{{infoMessage}}</span>\n<span *ngIf=\"showErrorValue\" class=\"st-input-error-message\">{{errorMessage}}</span>\n\n\n",
                    host: {
                        'class': 'st-tag-input'
                    },
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StTagInputComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StTagInputComponent; })), multi: true }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:block;width:100%;position:relative}.inner-input{border:0;outline:0;display:inline-block;padding:5px 10px;vertical-align:top;margin-bottom:5px;overflow:hidden;max-width:100%;min-height:30px}.tag-item{display:inline-block;margin-right:5px;overflow:hidden;max-width:100%}.tag-item:focus{outline:0}.st-tag-input__placeholder{display:inline-block;padding-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    StTagInputComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StTagInputComponent.propDecorators = {
        label: [{ type: Input }],
        tooltip: [{ type: Input }],
        placeholder: [{ type: Input }],
        errorMessage: [{ type: Input }],
        type: [{ type: Input }],
        withAutocomplete: [{ type: Input }],
        autocompleteList: [{ type: Input }],
        charsToShowAutocompleteList: [{ type: Input }],
        allowFreeText: [{ type: Input }],
        infoMessage: [{ type: Input }],
        forbiddenValues: [{ type: Input }],
        regularExpression: [{ type: Input }],
        forceValidations: [{ type: Input }],
        newElementInput: [{ type: ViewChild, args: ['newElement', { static: true },] }],
        inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
        disabled: [{ type: Input }],
        hasAutocomplete: [{ type: HostBinding, args: ['class.st-tag-input--autocomplete',] }]
    };
    return StTagInputComponent;
}());
if (false) {
    /**
     * \@input {string | null} [label=null] Label to show over the input. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.label;
    /**
     * \@input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.tooltip;
    /**
     * \@input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.placeholder;
    /**
     * \@input {string | null} [errorMessage=null] Error message to show. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.errorMessage;
    /**
     * \@input {string | null} [type=null] Type of the items
     * @type {?}
     */
    StTagInputComponent.prototype.type;
    /**
     * \@input {boolean} [withAutocomplete=false] Enable autocomplete feature. It is false by default
     * @type {?}
     */
    StTagInputComponent.prototype.withAutocomplete;
    /**
     * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.autocompleteList;
    /**
     * \@input {boolean} [charsToShowAutocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.charsToShowAutocompleteList;
    /**
     * \@input {boolean} [allowFreeText=true] Boolean to allow user to type a free text or not
     * @type {?}
     */
    StTagInputComponent.prototype.allowFreeText;
    /**
     * \@input {string} [infoMessage=] Message used to inform user about what values he has to introduce
     * @type {?}
     */
    StTagInputComponent.prototype.infoMessage;
    /**
     * \@input {string[]} [forbiddenValues=Array()] A list of values that user can not type and if he types one of them,
     * tag input will be invalid. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.forbiddenValues;
    /**
     * \@input {string} [regularExpression=] Regular expression to validate values. It is null by default
     * @type {?}
     */
    StTagInputComponent.prototype.regularExpression;
    /**
     * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the tag input checks the errors before being modified by user
     * @type {?}
     */
    StTagInputComponent.prototype.forceValidations;
    /** @type {?} */
    StTagInputComponent.prototype.newElementInput;
    /** @type {?} */
    StTagInputComponent.prototype.inputElement;
    /** @type {?} */
    StTagInputComponent.prototype.expandedMenu;
    /** @type {?} */
    StTagInputComponent.prototype.items;
    /** @type {?} */
    StTagInputComponent.prototype.innerInputContent;
    /** @type {?} */
    StTagInputComponent.prototype.isPristine;
    /** @type {?} */
    StTagInputComponent.prototype.showErrorValue;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._focus;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._newElementInput;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._regularExp;
    /** @type {?} */
    StTagInputComponent.prototype.onChange;
    /** @type {?} */
    StTagInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._selectElement;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag-input/st-tag-input.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTagInputModule = /** @class */ (function () {
    function StTagInputModule() {
    }
    StTagInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, StLabelModule, StDropdownMenuModule, StClickOutsideModule],
                    declarations: [StTagInputComponent],
                    exports: [StTagInputComponent]
                },] }
    ];
    return StTagInputModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-toggle-buttons/st-toggle-buttons.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StToggleButtonsComponent = /** @class */ (function () {
    function StToggleButtonsComponent() {
        this.select = new EventEmitter();
    }
    Object.defineProperty(StToggleButtonsComponent.prototype, "tabs", {
        set: /**
         * @param {?} tabs
         * @return {?}
         */
        function (tabs) {
            this.parsedTabs = tabs
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var label = _a.label, props = __rest(_a, ["label"]);
                return (__assign({}, props, { label: label, trimLabel: label.replace(/[^a-zA-Z0-9]/g, '') }));
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selectedTab
     * @return {?}
     */
    StToggleButtonsComponent.prototype.onClick = /**
     * @param {?} selectedTab
     * @return {?}
     */
    function (selectedTab) {
        var e_1, _a;
        try {
            for (var _b = __values(this.parsedTabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                tab.active = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        selectedTab.active = true;
        this.select.emit(selectedTab);
    };
    StToggleButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-toggle-buttons',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-toggle-buttons\">\n   <div *ngIf=\"description\" class=\"st-toggle-buttons__description sth-toggle-buttons__description\">\n      {{description}}\n   </div>\n   <ul class=\"st-toggle-buttons__buttons sth-toggle-buttons__buttons\">\n      <li *ngFor=\"let tab of parsedTabs; let i = index;\"\n         (click)=\"onClick(tab)\">\n         <button [attr.id]=\"qaTag + '-' + tab.trimLabel\" class=\"st-toggle-buttons__button sth-toggle-buttons__button\"\n         [ngClass]=\"{'st-toggle-buttons__button--active': tab.active, 'sth-toggle-buttons__button--active': tab.active}\">\n            {{tab.label}}\n            <span *ngIf=\"tab.number?.toFixed\">({{tab.number}})</span>\n         </button>\n      </li>\n   </ul>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-toggle-buttons{list-style:none}.st-toggle-buttons li{display:inline-block}.st-toggle-buttons .st-toggle-buttons__description{display:inline-block;height:35px;line-height:35px;padding-right:10px}.st-toggle-buttons .st-toggle-buttons__buttons{display:inline-block;border-width:1px;border-style:solid;border-radius:4px}.st-toggle-buttons .st-toggle-buttons__button{display:inline-block;padding:11px 21px;cursor:pointer;box-shadow:none}.st-toggle-buttons .st-toggle-buttons__button:focus{outline:0}"]
                }] }
    ];
    StToggleButtonsComponent.propDecorators = {
        description: [{ type: Input }],
        qaTag: [{ type: Input }],
        select: [{ type: Output }],
        tabs: [{ type: Input }]
    };
    return StToggleButtonsComponent;
}());
if (false) {
    /** @type {?} */
    StToggleButtonsComponent.prototype.description;
    /** @type {?} */
    StToggleButtonsComponent.prototype.qaTag;
    /** @type {?} */
    StToggleButtonsComponent.prototype.select;
    /** @type {?} */
    StToggleButtonsComponent.prototype.parsedTabs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-toggle-buttons/st-toggle-buttons.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StToggleButtonsModule = /** @class */ (function () {
    function StToggleButtonsModule() {
    }
    StToggleButtonsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StToggleButtonsComponent],
                    exports: [StToggleButtonsComponent]
                },] }
    ];
    return StToggleButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-item/list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.editable = false;
        this.mode = 'normal';
        this.disabled = false;
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.hoverRow = false;
        this.menuVisualMode = StDropDownVisualMode.MENU_LIST;
        this.placement = StPopPlacement.BOTTOM_END;
    }
    Object.defineProperty(ListItemComponent.prototype, "itemName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item && this.item.name !== undefined && this.item.name !== null ? this.item.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "itemQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-item-' + this.item.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "checkQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-check-' + this.item.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.selected ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "itemMode", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var style = this.getModeStyle();
            style += this.selected ? ' sth-two-list-selection__selected_item' : '';
            return style;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListItemComponent.prototype.getModeStyle = /**
     * @return {?}
     */
    function () {
        return this.mode === 'normal' ? 'item-normal sth-two-list-selection__item-normal' :
            'item-compact sth-two-list-selection__item-compact';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ListItemComponent.prototype.emitOnClickNonEditable = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selectItemNonEditable.emit(this.item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ListItemComponent.prototype.emitOnSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.item.disabled) {
            this.selectItem.emit(this.item);
        }
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.mouseHoverRow = /**
     * @return {?}
     */
    function () {
        this.hoverRow = true;
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.mouseLeftRow = /**
     * @return {?}
     */
    function () {
        this.hoverRow = false;
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.onCloseActionMenu = /**
     * @return {?}
     */
    function () {
        if (this.showActionList) {
            this.showActionList = false;
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    ListItemComponent.prototype.onChangeOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.emitOnClickNonEditable(new CustomEvent('selectItem', { bubbles: true, cancelable: true, detail: Object.assign(this.item, option) }));
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.onEllipsisClick = /**
     * @return {?}
     */
    function () {
        this.showActionList = !this.showActionList;
    };
    ListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"item\" [ngClass]=\"itemMode\" [attr.id]=\"itemQaTag\" [title]=\"itemName\">\n   <span *ngIf=\"!editable && !menuOptionList\" class=\"label\">{{itemName}}</span>\n   <div class=\"item__row\" *ngIf=\"!editable && menuOptionList\" (mouseenter)=\"mouseHoverRow()\" (mouseleave)=\"mouseLeftRow()\">\n      <span class=\"label\" [ngClass]=\"{'primary-link': hoverRow}\" (click)=\"emitOnClickNonEditable($event)\">{{itemName}}</span>\n      <st-dropdown-menu *ngIf=\"hoverRow\" class=\"filter-selector\" [items]=\"menuOptionList\" attr.id=\"actionListId\" [placement]=\"placement\"\n           [visualMode]=\"menuVisualMode\" [active]=\"showActionList\" (click)=\"onEllipsisClick()\"\n          (change)=\"onChangeOption($event)\" (clickOutside)=\"onCloseActionMenu()\" [openToLeft]=\"true\">\n         <button class=\"button\" id=\"actions-service\">\n            <i class=\"icon-ellipsis\"></i>\n         </button>\n      </st-dropdown-menu>\n   </div>\n   <st-checkbox [disabled]=\"disabled\" *ngIf=\"editable\" [qaTag]=\"checkQaTag\" [checked]=\"selected\" (click)=\"emitOnSelect($event)\">\n      <span class=\"label\">{{itemName}}</span>\n   </st-checkbox>\n   <span class=\"extraLabel\" *ngIf=\"item.extraLabel\" [innerHTML]=\"item.extraLabel\"\n       (click)=\"selectExtraLabel.emit({element: item, event: $event})\"></span>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.item{display:inline-block;min-width:100%;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:10px}.item__row{display:flex;flex-direction:row-reverse}.item__row .filter-selector{position:absolute}.item__row .filter-selector .icon-ellipsis{font-size:20px}.label{overflow:hidden;text-overflow:ellipsis;flex-grow:1;color:#0f1b27;font-size:.938rem;font-weight:400}.label.primary-link{color:#0776df;cursor:pointer}:host{display:block;padding-right:20px}.item-normal{height:25px;line-height:35px}.item-compact{height:27px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    ListItemComponent.ctorParameters = function () { return []; };
    ListItemComponent.propDecorators = {
        item: [{ type: Input }],
        qaTag: [{ type: Input }],
        editable: [{ type: Input }],
        mode: [{ type: Input }],
        disabled: [{ type: Input }],
        menuOptionList: [{ type: Input }],
        selectItem: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectExtraLabel: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Object)
    ], ListItemComponent.prototype, "item", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], ListItemComponent.prototype, "qaTag", void 0);
    ListItemComponent = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
}());
if (false) {
    /** @type {?} */
    ListItemComponent.prototype.item;
    /** @type {?} */
    ListItemComponent.prototype.qaTag;
    /** @type {?} */
    ListItemComponent.prototype.editable;
    /** @type {?} */
    ListItemComponent.prototype.mode;
    /** @type {?} */
    ListItemComponent.prototype.disabled;
    /** @type {?} */
    ListItemComponent.prototype.menuOptionList;
    /** @type {?} */
    ListItemComponent.prototype.selectItem;
    /** @type {?} */
    ListItemComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListItemComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListItemComponent.prototype.hoverRow;
    /** @type {?} */
    ListItemComponent.prototype.menuVisualMode;
    /** @type {?} */
    ListItemComponent.prototype.placement;
    /** @type {?} */
    ListItemComponent.prototype.showActionList;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-selection/list-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListSelectionComponent = /** @class */ (function () {
    function ListSelectionComponent() {
        this.editable = false;
        this.important = false;
        this.hasAllList = false;
        this.hasSearch = true;
        this.isLoading = false;
        this.orderOptions = [];
        this.mode = 'normal';
        this.scrollBottom = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.search = new EventEmitter();
        this.changeOrder = new EventEmitter();
        this.scrollItems = [];
    }
    Object.defineProperty(ListSelectionComponent.prototype, "searchQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-search';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectionComponent.prototype, "listCheckAllQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-all-checkbox';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectionComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectionComponent.prototype, "hasOrder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.orderOptions && this.orderOptions.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ListSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-selection',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"list-selection\">\n   <div class=\"list-selection__rectangle\">\n      <p class=\"title sth-two-list__list-title\" [ngClass]=\"{'sth-two-list__important-title': important}\">{{title}}</p>\n      <p class=\"subtitle sth-two-list__list-subtitle\">{{subtitle}}</p>\n      <st-search class=\"search\" *ngIf=\"hasSearch && ( list && list.length >= showSearchNumber) || (hasSearch && !showSearchNumber)\" [placeholder]=\"searchPlaceholder\" [qaTag]=\"searchQaTag\" (search)=\"search.emit($event)\"></st-search>\n   </div>\n   <list-item [disabled]=\"list.length === 0\" class=\"list-selection__list-item-all\" *ngIf=\"hasAllList && scrollItems\" [item]=\"itemAll\"\n      (selectItem)=\"selectItem.emit(itemAll);\" [editable]=\"editable\" [qaTag]=\"listCheckAllQaTag\"></list-item>\n\n   <list-scroll [list]=\"list\" [itemAll]=\"itemAll\" [mode]=\"mode\" (selectItem)=\"selectItem.emit($event)\" (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\"  [hasAllList]=\"hasAllList\" [qaTag]=\"listQaTag\" [editable]=\"editable\" [qaTag]=\"listQaTag\" [editable]=\"editable\"\n             (selectExtraLabel)=\"selectExtraLabel.emit($event)\" (scrollBottom)=\"scrollBottom.emit($event)\" [isLoading]=\"isLoading\" [fetchingDataText]=\"fetchingDataText\" [menuOptionList]=\"menuOptionList\"></list-scroll>\n   <div class=\"list-selection__rectangle bottom\" *ngIf=\"hasOrder\" >\n         <st-select [disabled]=\"list.length === 0\" class=\"order-select\" button=\"Order\" [options]=\"orderOptions\" (select)=\"changeOrder.emit($event)\" [placeholder]=\"orderPlaceholder\"></st-select>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.list-selection{display:flex;flex-direction:column;flex-wrap:nowrap;width:100%;height:100%}.list-selection__rectangle{background-color:#fafafa;padding:22px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.list-selection__rectangle.bottom{border-bottom-width:0;border-top-width:1px;border-top-color:#dbdbdb}.list-selection__list-item-all{padding:5px 22px;margin-bottom:5px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.title{width:100%;margin-bottom:5px;padding:0;font-weight:400;font-size:.938rem;color:#585858}.subtitle{font-size:1rem;color:#585858;font-weight:400;font-style:normal;font-stretch:normal}.list{list-style:none;padding:0;width:100%;height:80%;overflow:auto}.list.with-order{height:71%}.search{margin-top:18px;display:block}.order-select{display:block}virtual-scroll{display:block;width:100%;height:100%}"]
                }] }
    ];
    ListSelectionComponent.propDecorators = {
        list: [{ type: Input }],
        editable: [{ type: Input }],
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        searchPlaceholder: [{ type: Input }],
        qaTag: [{ type: Input }],
        important: [{ type: Input }],
        hasAllList: [{ type: Input }],
        hasSearch: [{ type: Input }],
        isLoading: [{ type: Input }],
        itemAll: [{ type: Input }],
        menuOptionList: [{ type: Input }],
        orderOptions: [{ type: Input }],
        orderPlaceholder: [{ type: Input }],
        mode: [{ type: Input }],
        showSearchNumber: [{ type: Input }],
        fetchingDataText: [{ type: Input }],
        scrollBottom: [{ type: Output }],
        selectItem: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectExtraLabel: [{ type: Output }],
        search: [{ type: Output }],
        changeOrder: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], ListSelectionComponent.prototype, "list", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], ListSelectionComponent.prototype, "title", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], ListSelectionComponent.prototype, "searchPlaceholder", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], ListSelectionComponent.prototype, "qaTag", void 0);
    return ListSelectionComponent;
}());
if (false) {
    /** @type {?} */
    ListSelectionComponent.prototype.list;
    /** @type {?} */
    ListSelectionComponent.prototype.editable;
    /** @type {?} */
    ListSelectionComponent.prototype.title;
    /** @type {?} */
    ListSelectionComponent.prototype.subtitle;
    /** @type {?} */
    ListSelectionComponent.prototype.searchPlaceholder;
    /** @type {?} */
    ListSelectionComponent.prototype.qaTag;
    /** @type {?} */
    ListSelectionComponent.prototype.important;
    /** @type {?} */
    ListSelectionComponent.prototype.hasAllList;
    /** @type {?} */
    ListSelectionComponent.prototype.hasSearch;
    /** @type {?} */
    ListSelectionComponent.prototype.isLoading;
    /** @type {?} */
    ListSelectionComponent.prototype.itemAll;
    /** @type {?} */
    ListSelectionComponent.prototype.menuOptionList;
    /** @type {?} */
    ListSelectionComponent.prototype.orderOptions;
    /** @type {?} */
    ListSelectionComponent.prototype.orderPlaceholder;
    /** @type {?} */
    ListSelectionComponent.prototype.mode;
    /** @type {?} */
    ListSelectionComponent.prototype.showSearchNumber;
    /** @type {?} */
    ListSelectionComponent.prototype.fetchingDataText;
    /** @type {?} */
    ListSelectionComponent.prototype.scrollBottom;
    /** @type {?} */
    ListSelectionComponent.prototype.selectItem;
    /** @type {?} */
    ListSelectionComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListSelectionComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListSelectionComponent.prototype.search;
    /** @type {?} */
    ListSelectionComponent.prototype.changeOrder;
    /** @type {?} */
    ListSelectionComponent.prototype.scrollItems;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-scroll/list-scroll.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListScrollComponent = /** @class */ (function () {
    function ListScrollComponent(cd, elemRef) {
        this.cd = cd;
        this.elemRef = elemRef;
        this.editable = false;
        this.hasAllList = false;
        this.isLoading = false;
        this.mode = 'normal';
        this.scrollBottom = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.search = new EventEmitter();
        this.atBottom = false;
        this.delay = ((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var timer = 0;
            return (/**
             * @param {?} callback
             * @param {?} ms
             * @return {?}
             */
            function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            });
        }))();
        this.firstEl = 0;
        this.scrollItems = [];
        this.showLoading = false;
    }
    /**
     * @return {?}
     */
    ListScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.showLoading = this.isLoading;
        this.cd.markForCheck();
    };
    Object.defineProperty(ListScrollComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-scroll-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListScrollComponent.prototype, "listCheckAllQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-check-all-scroll-list';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListScrollComponent.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = this.elemRef.nativeElement.querySelector('#virtualScroll');
        this.showLoading = this.isLoading;
        this.atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        /** @type {?} */
        var debounce = throttle((/**
         * @return {?}
         */
        function () {
            if (_this.atBottom) {
                _this.scrollBottom.emit();
                _this.showLoading = false;
            }
        }));
        this.delay(debounce, 1000);
    };
    ListScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-scroll',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<virtual-scroller [items]=\"list\" (vsUpdate)=\"scrollItems = $event\" id=\"virtualScroll\" (scroll)=\"onScroll()\">\n   <list-item class=\"virtual-scroll__list-item\" *ngFor=\"let item of scrollItems; let i = index\" [item]=\"item\" (selectItem)=\"selectItem.emit(item)\" (selectItemNonEditable)=\"selectItemNonEditable.emit(item)\"\n       [qaTag]=\"listQaTag\" [editable]=\"editable\" (selectExtraLabel)=\"selectExtraLabel.emit($event)\" [mode]=\"mode\" [menuOptionList]=\"menuOptionList\" [disabled]=\"item.disabled\"></list-item>\n   <div *ngIf=\"atBottom && showLoading\" class=\"spinner-container\">\n      <st-spinner class=\"spinner\"></st-spinner>\n      <span>{{fetchingDataText}}</span>\n   </div>\n</virtual-scroller>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;max-height:100%;flex:1;min-height:10px}virtual-scroller{width:100%}virtual-scroller__list-item-all{padding:5px 22px 22px;margin-bottom:5px}virtual-scroller__list-item{padding:5px 22px 22px}.virtual-scroll__list-item-all{padding:5px 22px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.virtual-scroll__list-item{padding:5px 22px 0}.spinner-container{width:100%;display:flex;flex-direction:column}.spinner-container span{margin:auto auto 20px;font-weight:400;font-size:1rem;color:#888}.spinner-container .spinner{display:block;margin:20px auto 14px;width:20px;height:20px}"]
                }] }
    ];
    /** @nocollapse */
    ListScrollComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    ListScrollComponent.propDecorators = {
        list: [{ type: Input }],
        editable: [{ type: Input }],
        fetchingDataText: [{ type: Input }],
        hasAllList: [{ type: Input }],
        isLoading: [{ type: Input }],
        itemAll: [{ type: Input }],
        menuOptionList: [{ type: Input }],
        qaTag: [{ type: Input }],
        mode: [{ type: Input }],
        scrollBottom: [{ type: Output }],
        selectItem: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectExtraLabel: [{ type: Output }],
        search: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], ListScrollComponent.prototype, "list", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], ListScrollComponent.prototype, "qaTag", void 0);
    return ListScrollComponent;
}());
if (false) {
    /** @type {?} */
    ListScrollComponent.prototype.list;
    /** @type {?} */
    ListScrollComponent.prototype.editable;
    /** @type {?} */
    ListScrollComponent.prototype.fetchingDataText;
    /** @type {?} */
    ListScrollComponent.prototype.hasAllList;
    /** @type {?} */
    ListScrollComponent.prototype.isLoading;
    /** @type {?} */
    ListScrollComponent.prototype.itemAll;
    /** @type {?} */
    ListScrollComponent.prototype.menuOptionList;
    /** @type {?} */
    ListScrollComponent.prototype.qaTag;
    /** @type {?} */
    ListScrollComponent.prototype.mode;
    /** @type {?} */
    ListScrollComponent.prototype.scrollBottom;
    /** @type {?} */
    ListScrollComponent.prototype.selectItem;
    /** @type {?} */
    ListScrollComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListScrollComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListScrollComponent.prototype.search;
    /** @type {?} */
    ListScrollComponent.prototype.atBottom;
    /** @type {?} */
    ListScrollComponent.prototype.delay;
    /** @type {?} */
    ListScrollComponent.prototype.firstEl;
    /** @type {?} */
    ListScrollComponent.prototype.scrollItems;
    /** @type {?} */
    ListScrollComponent.prototype.showLoading;
    /**
     * @type {?}
     * @private
     */
    ListScrollComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ListScrollComponent.prototype.elemRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTwoListSelection = /** @class */ (function () {
    function StTwoListSelection(_cd) {
        this._cd = _cd;
        // Work Lists
        this.copyAllElement = [];
        this.copySelectedElements = [];
        this.allSearch = '';
        this.hasCheckboxAllList = false;
        this.hasCheckboxSelectedList = false;
        this.numItemsSelectedAll = new EventEmitter();
        this.numItemsSelectedSelected = new EventEmitter();
        this.searchBy = 'name';
        this.searchOverAll = new EventEmitter();
        this.searchOverSelected = new EventEmitter();
        this.selectedSearch = '';
    }
    // Check selected element
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    StTwoListSelection.prototype.onSelectAllElement = 
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        if (this.hasCheckboxAllList && selection.itemAll) {
            this.copyAllElement = this.applySelectAll(this.copyAllElement, this.allSearch, selection.selected);
            selection.selected = !selection.selected;
        }
        else {
            if (this.canSelect(selection, this.copyAllElement)) {
                selection.selected = !selection.selected;
            }
        }
        this.copyAllElement = cloneDeep(this.copyAllElement);
        if (this.copyAllElement) {
            this.numItemsSelectedAll.emit(this.getNumItemsSelected(this.copyAllElement));
        }
    };
    // Check selected element
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    StTwoListSelection.prototype.onSelectSelectedElement = 
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        if (this.hasCheckboxSelectedList && selection.itemAll) {
            this.copySelectedElements = this.applySelectAll(this.copySelectedElements, this.selectedSearch, selection.selected);
            selection.selected = !selection.selected;
        }
        else {
            if (this.canSelect(selection, this.copySelectedElements)) {
                selection.selected = !selection.selected;
            }
        }
        this.copySelectedElements = cloneDeep(this.copySelectedElements);
        if (this.copySelectedElements) {
            this.numItemsSelectedSelected.emit(this.getNumItemsSelected(this.copySelectedElements));
        }
    };
    // Update search filter
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    StTwoListSelection.prototype.onSearchOverAll = 
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        this.allSearch = search.text;
        this.searchOverAll.emit(this.allSearch);
    };
    // Update search filter
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    StTwoListSelection.prototype.onSearchOverSelected = 
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        this.selectedSearch = search.text;
        this.searchOverSelected.emit(this.selectedSearch);
    };
    // Move from all to selected
    // Move from all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveToSelected = 
    // Move from all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ids = this.getIdsToMove(this.copyAllElement);
        /** @type {?} */
        var result = this.moveIdsFromAllToSelected(this.originalAll, this.originalSelected, ids);
        this.emitter.emit(result);
        if (this.itemAll)
            this.itemAll.selected = false;
    };
    // Remove from selected
    // Remove from selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveToAll = 
    // Remove from selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ids = this.getIdsToMove(this.copySelectedElements);
        /** @type {?} */
        var result = this.removeIdsFromSelected(this.originalSelected, ids);
        this.emitter.emit(result);
        if (this.itemAll)
            this.itemAll.selected = false;
    };
    // Move all to selected
    // Move all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveAllToSelected = 
    // Move all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emitter.emit(cloneDeep(this.originalAll.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.disabled; }))));
    };
    // Remove All from selected
    // Remove All from selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveAllToAll = 
    // Remove All from selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emitter.emit([]);
    };
    /**
     * @param {?} all
     * @param {?} selected
     * @param {?} changeEmitter
     * @param {?} sorted
     * @param {?=} hasCheckboxAllList
     * @param {?=} hasCheckboxSelectedList
     * @param {?=} itemAll
     * @return {?}
     */
    StTwoListSelection.prototype.init = /**
     * @param {?} all
     * @param {?} selected
     * @param {?} changeEmitter
     * @param {?} sorted
     * @param {?=} hasCheckboxAllList
     * @param {?=} hasCheckboxSelectedList
     * @param {?=} itemAll
     * @return {?}
     */
    function (all, selected, changeEmitter, sorted, hasCheckboxAllList, hasCheckboxSelectedList, itemAll) {
        if (hasCheckboxAllList === void 0) { hasCheckboxAllList = false; }
        if (hasCheckboxSelectedList === void 0) { hasCheckboxSelectedList = false; }
        if (itemAll === void 0) { itemAll = (/** @type {?} */ (null)); }
        this.emitter = changeEmitter;
        this.sortLists = sorted;
        this.originalAll = all;
        this.originalSelected = selected;
        this.generateWorkLists();
        this.hasCheckboxAllList = hasCheckboxAllList;
        this.hasCheckboxSelectedList = hasCheckboxSelectedList;
        this.itemAll = itemAll;
    };
    /**
     * @param {?} changes
     * @param {?} allList
     * @param {?} selectedList
     * @return {?}
     */
    StTwoListSelection.prototype.checkChanges = /**
     * @param {?} changes
     * @param {?} allList
     * @param {?} selectedList
     * @return {?}
     */
    function (changes, allList, selectedList) {
        if (changes[allList] !== undefined) {
            this.originalAll = changes[allList].currentValue;
        }
        if (changes[selectedList] !== undefined) {
            this.originalSelected = changes[selectedList].currentValue;
        }
        if (changes[allList] !== undefined || changes[selectedList] !== undefined) {
            this.generateWorkLists();
        }
    };
    /**
     * @private
     * @param {?} twoList
     * @param {?} elemSearched
     * @param {?} allSelected
     * @return {?}
     */
    StTwoListSelection.prototype.applySelectAll = /**
     * @private
     * @param {?} twoList
     * @param {?} elemSearched
     * @param {?} allSelected
     * @return {?}
     */
    function (twoList, elemSearched, allSelected) {
        /** @type {?} */
        var filterPipe = new StFilterList();
        /** @type {?} */
        var filteredBySearch = filterPipe.transform(twoList, 'name', elemSearched);
        if (elemSearched) {
            twoList.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                if (!elem.disabled) {
                    elem.selected = false;
                    if (filteredBySearch.find((/**
                     * @param {?} filtered
                     * @return {?}
                     */
                    function (filtered) { return filtered.name === elem.name; })) !== undefined) {
                        elem.selected = !allSelected;
                    }
                }
            }));
            this._cd.markForCheck();
        }
        else {
            twoList = cloneDeep(this.changeSelectedItemList(twoList, !allSelected));
        }
        return twoList;
    };
    /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    StTwoListSelection.prototype.changeSelectedItemList = /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    function (list, selected) {
        return cloneDeep(list).map((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            elem.selected = (!elem.disabled) ? selected : elem.selected;
            return elem;
        }));
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    StTwoListSelection.prototype.getNumItemsSelected = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var reducer = (/**
         * @param {?} accumulator
         * @param {?} currentValue
         * @return {?}
         */
        function (accumulator, currentValue) {
            return (currentValue.selected) ? accumulator + 1 : accumulator + 0;
        });
        return list.reduce(reducer, 0);
    };
    /**
     * @private
     * @return {?}
     */
    StTwoListSelection.prototype.generateWorkLists = /**
     * @private
     * @return {?}
     */
    function () {
        this.copyAllElement = this.copyLists(this.originalAll, this.copyAllElement, this.originalSelected);
        this.copySelectedElements = this.copyLists(this.originalSelected, this.copySelectedElements);
        if (this.sortLists !== undefined && (this.sortLists === 'id' || this.sortLists === 'name')) {
            this.copyAllElement = this.orderListBy(this.copyAllElement, this.sortLists);
            this.copySelectedElements = this.orderListBy(this.copySelectedElements, this.sortLists);
        }
    };
    /**
     * @private
     * @param {?} newValue
     * @param {?} prevState
     * @param {?=} without
     * @return {?}
     */
    StTwoListSelection.prototype.copyLists = /**
     * @private
     * @param {?} newValue
     * @param {?} prevState
     * @param {?=} without
     * @return {?}
     */
    function (newValue, prevState, without) {
        /** @type {?} */
        var list = cloneDeep(newValue);
        if (without && without.length > 0) {
            list = differenceBy(list, without, 'id');
        }
        /** @type {?} */
        var selected = this.getIdsToMove(prevState);
        this.searchAndSelect(list, selected);
        return list;
    };
    /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    StTwoListSelection.prototype.searchAndSelect = /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    function (list, selected) {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var actualIndex = -1;
        while (selected.length > 0 && i < list.length) {
            actualIndex = selected.indexOf(list[i].id);
            if (actualIndex > -1) {
                list[i].selected = true;
                selected.splice(actualIndex, 1);
                actualIndex = -1;
            }
            i++;
        }
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    StTwoListSelection.prototype.getIdsToMove = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return list.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            if (curr.selected) {
                curr.selected = false;
                prev.push(curr.id);
            }
            return prev;
        }), []);
    };
    /**
     * @private
     * @param {?} all
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    StTwoListSelection.prototype.moveIdsFromAllToSelected = /**
     * @private
     * @param {?} all
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    function (all, selected, ids) {
        /** @type {?} */
        var items = all.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return includes(ids, item.id); }));
        return xorBy(selected, cloneDeep(items), 'id');
    };
    /**
     * @private
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    StTwoListSelection.prototype.removeIdsFromSelected = /**
     * @private
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    function (selected, ids) {
        return selected.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            if (!includes(ids, curr.id)) {
                prev.push(clone(curr));
            }
            return prev;
        }), []);
    };
    /**
     * @private
     * @param {?} list
     * @param {?} by
     * @return {?}
     */
    StTwoListSelection.prototype.orderListBy = /**
     * @private
     * @param {?} list
     * @param {?} by
     * @return {?}
     */
    function (list, by) {
        return sortBy(list, by);
    };
    /**
     * @private
     * @param {?} selection
     * @param {?} list
     * @return {?}
     */
    StTwoListSelection.prototype.canSelect = /**
     * @private
     * @param {?} selection
     * @param {?} list
     * @return {?}
     */
    function (selection, list) {
        return selection && !selection.disabled && list !== undefined && list.length > 0;
    };
    return StTwoListSelection;
}());
if (false) {
    /** @type {?} */
    StTwoListSelection.prototype.originalAll;
    /** @type {?} */
    StTwoListSelection.prototype.originalSelected;
    /** @type {?} */
    StTwoListSelection.prototype.copyAllElement;
    /** @type {?} */
    StTwoListSelection.prototype.copySelectedElements;
    /** @type {?} */
    StTwoListSelection.prototype.allSearch;
    /** @type {?} */
    StTwoListSelection.prototype.hasCheckboxAllList;
    /** @type {?} */
    StTwoListSelection.prototype.hasCheckboxSelectedList;
    /** @type {?} */
    StTwoListSelection.prototype.itemAll;
    /** @type {?} */
    StTwoListSelection.prototype.numItemsSelectedAll;
    /** @type {?} */
    StTwoListSelection.prototype.numItemsSelectedSelected;
    /** @type {?} */
    StTwoListSelection.prototype.searchBy;
    /** @type {?} */
    StTwoListSelection.prototype.searchOverAll;
    /** @type {?} */
    StTwoListSelection.prototype.searchOverSelected;
    /** @type {?} */
    StTwoListSelection.prototype.selectedSearch;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelection.prototype.emitter;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelection.prototype.sortLists;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelection.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTwoListSelectionComponent = /** @class */ (function (_super) {
    __extends(StTwoListSelectionComponent, _super);
    function StTwoListSelectionComponent(cd) {
        var _this = _super.call(this, cd) || this;
        _this.cd = cd;
        _this.editable = false;
        _this.hasAllListAll = false;
        _this.hasAllListSelected = false;
        _this.hasSearch = true;
        _this.isLoading = false;
        _this.mode = 'normal';
        _this.moveAllToSelectedButton = true;
        _this.moveAllToAllButton = true;
        _this.moveToSelectedButton = true;
        _this.moveToAllButton = true;
        _this.orderAllOptions = [];
        _this.orderSelectedOptions = [];
        _this.sortBy = 'id';
        _this.change = new EventEmitter();
        _this.changeOrderAll = new EventEmitter();
        _this.changeOrderSelected = new EventEmitter();
        _this.numItemsSelectedAll = new EventEmitter();
        _this.numItemsSelectedSelected = new EventEmitter();
        _this.scrollBottomAll = new EventEmitter();
        _this.searchOverAll = new EventEmitter();
        _this.searchOverSelected = new EventEmitter();
        _this.selectedElementsChange = new EventEmitter();
        _this.selectExtraLabelAll = new EventEmitter();
        _this.selectExtraLabelSelected = new EventEmitter();
        _this.selectItemNonEditable = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    StTwoListSelectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init(this.allElements, this.selectedElements, this.selectedElementsChange, this.sortBy, this.hasAllListAll, this.hasAllListSelected, this.itemAll);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StTwoListSelectionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.checkChanges(changes, 'allElements', 'selectedElements');
        this.change.emit();
    };
    Object.defineProperty(StTwoListSelectionComponent.prototype, "allList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.copyAllElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionComponent.prototype, "selectedList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.copySelectedElements;
        },
        enumerable: true,
        configurable: true
    });
    StTwoListSelectionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-two-list-selection',
                    template: "\n      <st-two-list-selection-view\n         [allElements]=\"allList | stFilterList:searchBy:allSearch\"\n         [selectedElements]=\"selectedList | stFilterList:searchBy:selectedSearch\"\n         [config]=\"config\"\n         [editable]=\"editable\"\n         [hasAllListAll]=\"hasAllListAll\"\n         [hasAllListSelected]=\"hasAllListSelected\"\n         [itemAll]=\"itemAll\"\n         [qaTag]=\"qaTag\"\n         [isLoading]=\"isLoading\"\n         [hasSearch]=\"hasSearch\"\n         [orderAllOptions]=\"orderAllOptions\"\n         [orderSelectedOptions]=\"orderSelectedOptions\"\n         [mode]=\"mode\"\n         [moveAllToSelectedButton]=\"moveAllToSelectedButton\"\n         [moveAllToAllButton]=\"moveAllToAllButton\"\n         [moveToAllButton]=\"moveToAllButton\"\n         [moveToSelectedButton]=\"moveToSelectedButton\"\n         [showSearchNumber]=\"showSearchNumber\"\n\n         (selectAllElement)=\"onSelectAllElement($event)\"\n         (selectSelectedElement)=\"onSelectSelectedElement($event)\"\n         (searchOverAll)=\"onSearchOverAll($event)\"\n         (searchOverSelected)=\"onSearchOverSelected($event)\"\n         (moveToSelected)=\"onMoveToSelected($event)\"\n         (moveToAll)=\"onMoveToAll($event)\"\n         (moveAllToSelected)=\"onMoveAllToSelected($event)\"\n         (moveAllToAll)=\"onMoveAllToAll($event)\"\n         (numItemsSelectedAll)=\"numItemsSelectedAll.emit($event)\"\n         (numItemsSelectedSelected)=\"numItemsSelectedSelected.emit($event)\"\n         (selectExtraLabelAll)=\"selectExtraLabelAll.emit($event)\"\n         (selectExtraLabelSelected)=\"selectExtraLabelAll.emit($event)\"\n         (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\"\n         (changeOrderAll)=\"changeOrderAll.emit($event)\"\n         (changeOrderSelected)=\"changeOrderSelected.emit($event)\"\n         (scrollBottomAll)=\"scrollBottomAll.emit($event)\"\n      ></st-two-list-selection-view>\n   ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StTwoListSelectionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionComponent.propDecorators = {
        allElements: [{ type: Input }],
        config: [{ type: Input }],
        editable: [{ type: Input }],
        hasAllListAll: [{ type: Input }],
        hasAllListSelected: [{ type: Input }],
        hasSearch: [{ type: Input }],
        isLoading: [{ type: Input }],
        itemAll: [{ type: Input }],
        mode: [{ type: Input }],
        moveAllToSelectedButton: [{ type: Input }],
        moveAllToAllButton: [{ type: Input }],
        moveToSelectedButton: [{ type: Input }],
        moveToAllButton: [{ type: Input }],
        orderAllOptions: [{ type: Input }],
        orderSelectedOptions: [{ type: Input }],
        qaTag: [{ type: Input }],
        selectedElements: [{ type: Input }],
        showSearchNumber: [{ type: Input }],
        sortBy: [{ type: Input }],
        change: [{ type: Output }],
        changeOrderAll: [{ type: Output }],
        changeOrderSelected: [{ type: Output }],
        numItemsSelectedAll: [{ type: Output }],
        numItemsSelectedSelected: [{ type: Output }],
        scrollBottomAll: [{ type: Output }],
        searchOverAll: [{ type: Output }],
        searchOverSelected: [{ type: Output }],
        selectedElementsChange: [{ type: Output }],
        selectExtraLabelAll: [{ type: Output }],
        selectExtraLabelSelected: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }]
    };
    __decorate([
        StRequired('editable'),
        __metadata("design:type", Array)
    ], StTwoListSelectionComponent.prototype, "allElements", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], StTwoListSelectionComponent.prototype, "qaTag", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], StTwoListSelectionComponent.prototype, "selectedElements", void 0);
    StTwoListSelectionComponent = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], StTwoListSelectionComponent);
    return StTwoListSelectionComponent;
}(StTwoListSelection));
if (false) {
    /** @type {?} */
    StTwoListSelectionComponent.prototype.allElements;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.config;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.editable;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.hasAllListAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.hasAllListSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.hasSearch;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.isLoading;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.itemAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.mode;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveAllToSelectedButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveAllToAllButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveToSelectedButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveToAllButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.orderAllOptions;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.orderSelectedOptions;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.qaTag;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectedElements;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.showSearchNumber;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.sortBy;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.change;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.changeOrderAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.changeOrderSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.numItemsSelectedAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.numItemsSelectedSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.scrollBottomAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.searchOverAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.searchOverSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectedElementsChange;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectExtraLabelAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectExtraLabelSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectItemNonEditable;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelectionComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTwoListSelectionViewComponent = /** @class */ (function () {
    function StTwoListSelectionViewComponent(_cd) {
        this._cd = _cd;
        this.editable = false;
        this.hasAllListAll = false;
        this.hasAllListSelected = false;
        this.hasSearch = true;
        this.isLoading = false;
        this.mode = 'normal';
        this.moveAllToSelectedButton = false;
        this.moveAllToAllButton = false;
        this.moveToSelectedButton = false;
        this.moveToAllButton = false;
        this.orderSelectedOptions = [];
        this.orderAllOptions = [];
        this.changeOrderAll = new EventEmitter();
        this.changeOrderSelected = new EventEmitter();
        this.moveAllToAll = new EventEmitter();
        this.moveAllToSelected = new EventEmitter();
        this.moveToAll = new EventEmitter();
        this.moveToSelected = new EventEmitter();
        this.scrollBottomAll = new EventEmitter();
        this.searchOverAll = new EventEmitter();
        this.searchOverSelected = new EventEmitter();
        this.selectAllElement = new EventEmitter();
        this.selectExtraLabelAll = new EventEmitter();
        this.selectExtraLabelSelected = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectSelectedElement = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.refreshButtons();
        }
    };
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refreshButtons();
    };
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.allElementsListTitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allSubtitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.allElementsListSubtitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.allElementsSearchPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "fetchingDataText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.fetchingDataText || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "menuOptionList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.menuOptionList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "orderPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.orderPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.selectedElementsListTitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedSubtitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.selectedElementsListSubtitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-all-elements';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.selectedElementsSearchPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-selected-elements';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.checkMoveToSelected = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var existDisabledElements = (this.allElements) ? this.allElements.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.disabled; })) : [];
        // tslint:disable-next-line:max-line-length
        this.checkMoveToSelectedValue = (this.allElements) ? (this.allElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.allElements.length) : false;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.checkMoveToAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var existDisabledElements = (this.selectedElements) ? this.selectedElements.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.disabled; })) : [];
        // tslint:disable-next-line:max-line-length
        this.checkMoveToAllValue = (this.selectedElements) ? (this.selectedElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.selectedElements.length) : false;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.refreshButtons = /**
     * @return {?}
     */
    function () {
        this.checkMoveToSelected();
        this.checkMoveToAll();
    };
    StTwoListSelectionViewComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-two-list-selection-view',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-two-list sth-two-list\">\n   <!--ALL ELEMENTS-->\n   <list-selection *ngIf=\"editable\" class=\"list sth-two-list__list sth-two-list__all-list\" [list]=\"allElements\" [itemAll]=\"itemAll\" [title]=\"allTitle\" [subtitle]=\"allSubtitle\" [searchPlaceholder]=\"allPlaceholder\" [orderPlaceholder]=\"orderPlaceholder\"\n       [qaTag]=\"allQaTag\" [editable]=\"editable\" [showSearchNumber]=\"showSearchNumber\" (search)=\"searchOverAll.emit($event)\" (selectItem)=\"selectAllElement.emit($event)\" [hasAllList]=\"hasAllListAll\" [important]=\"false\" [hasSearch]=\"hasSearch\"\n       (selectExtraLabel)=\"selectExtraLabelAll.emit($event)\" [orderOptions]=\"orderAllOptions\" (changeOrder)=\"changeOrderAll.emit($event)\" [mode]=\"mode\" (scrollBottom)=\"scrollBottomAll.emit($event)\" [isLoading]=\"isLoading\" [fetchingDataText]=\"fetchingDataText\">\n   </list-selection>\n\n   <!--SELECTORS-->\n   <div class=\"pick-buttons\" *ngIf=\"editable\">\n      <button *ngIf=\"moveAllToSelectedButton\" class=\"button button-toolbar\" type=\"button\" title=\"Move all to selected\" (click)=\"moveAllToSelected.emit($event)\" [attr.id]=\"qaTag + '-left-all-button'\"><i class=\"icon-fast-forward\"></i></button>\n      <button class=\"button button-toolbar\" type=\"button\" title=\"Move to selected\" (click)=\"moveToSelected.emit($event)\" [attr.id]=\"qaTag + '-left-button'\" [ngClass]=\"{'empty': checkMoveToSelectedValue }\" [disabled]=\"!moveToAllButton\"><i class=\"icon-arrow2_right\" ></i></button>\n      <button class=\"button button-toolbar\" type=\"button\" title=\"Move to all\" (click)=\"moveToAll.emit($event)\" [attr.id]=\"qaTag + '-right-button'\" [ngClass]=\"{'empty': checkMoveToAllValue }\" [disabled]=\"!moveToSelectedButton\"><i class=\"icon-arrow2_left\"></i></button>\n      <button *ngIf=\"moveAllToAllButton\" class=\"button button-toolbar\" type=\"button\" title=\"Move all to all\" (click)=\"moveAllToAll.emit($event)\" [attr.id]=\"qaTag + '-right-all-button'\"><i class=\"icon-rewind\"></i></button>\n   </div>\n\n   <!--SELECTED ELEMENTS-->\n   <list-selection class=\"list sth-two-list__list sth-two-list__selected-list\" [ngClass]=\"{'not-editable': !editable}\" [list]=\"selectedElements\" [itemAll]=\"itemAll\" [title]=\"selectedTitle\" [subtitle]=\"selectedSubtitle\"\n       [searchPlaceholder]=\"selectedPlaceholder\" [orderPlaceholder]=\"orderPlaceholder\" [showSearchNumber]=\"showSearchNumber\" [qaTag]=\"selectedQaTag\" [editable]=\"editable\" [menuOptionList]=\"menuOptionList\" (search)=\"searchOverSelected.emit($event)\" (selectItem)=\"selectSelectedElement.emit($event)\"\n       [important]=\"true\" [hasSearch]=\"hasSearch\" [hasAllList]=\"hasAllListSelected\" (selectExtraLabel)=\"selectExtraLabelSelected.emit($event)\" (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\" [orderOptions]=\"orderSelectedOptions\" (changeOrder)=\"changeOrderSelected.emit($event)\" [mode]=\"mode\">\n   </list-selection>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;flex:1;flex-grow:1;max-height:100%;min-height:100%}.st-two-list{width:100%;display:flex;justify-content:space-between;max-height:100%}.list{flex-grow:1}.not-editable{width:100%}.pick-buttons{display:flex;flex-direction:column;align-items:center;width:73px;min-width:135px;max-width:135px;margin:auto}.pick-buttons button{margin-bottom:10px}.sth-two-list__all-list,.sth-two-list__selected-list{border-radius:4px;border:1px solid #dbdbdb}button.button-toolbar{width:40px;height:40px;border-radius:4px;background-color:#fff;border:1px solid #ececec;color:#707070}button.button-toolbar.empty{background-color:#ececec;color:#cfcfcf}"]
                }] }
    ];
    /** @nocollapse */
    StTwoListSelectionViewComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionViewComponent.propDecorators = {
        qaTag: [{ type: Input }],
        selectedElements: [{ type: Input }],
        allElements: [{ type: Input }],
        config: [{ type: Input }],
        editable: [{ type: Input }],
        hasAllListAll: [{ type: Input }],
        hasAllListSelected: [{ type: Input }],
        hasSearch: [{ type: Input }],
        isLoading: [{ type: Input }],
        itemAll: [{ type: Input }],
        mode: [{ type: Input }],
        moveAllToSelectedButton: [{ type: Input }],
        moveAllToAllButton: [{ type: Input }],
        moveToSelectedButton: [{ type: Input }],
        moveToAllButton: [{ type: Input }],
        orderSelectedOptions: [{ type: Input }],
        orderAllOptions: [{ type: Input }],
        showSearchNumber: [{ type: Input }],
        changeOrderAll: [{ type: Output }],
        changeOrderSelected: [{ type: Output }],
        moveAllToAll: [{ type: Output }],
        moveAllToSelected: [{ type: Output }],
        moveToAll: [{ type: Output }],
        moveToSelected: [{ type: Output }],
        scrollBottomAll: [{ type: Output }],
        searchOverAll: [{ type: Output }],
        searchOverSelected: [{ type: Output }],
        selectAllElement: [{ type: Output }],
        selectExtraLabelAll: [{ type: Output }],
        selectExtraLabelSelected: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectSelectedElement: [{ type: Output }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", String)
    ], StTwoListSelectionViewComponent.prototype, "qaTag", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], StTwoListSelectionViewComponent.prototype, "selectedElements", void 0);
    StTwoListSelectionViewComponent = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], StTwoListSelectionViewComponent);
    return StTwoListSelectionViewComponent;
}());
if (false) {
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.qaTag;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectedElements;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.allElements;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.config;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.editable;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.hasAllListAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.hasAllListSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.hasSearch;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.isLoading;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.itemAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.mode;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToSelectedButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToAllButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToSelectedButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToAllButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.orderSelectedOptions;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.orderAllOptions;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.showSearchNumber;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.changeOrderAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.changeOrderSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.scrollBottomAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.searchOverAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.searchOverSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectAllElement;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectExtraLabelAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectExtraLabelSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectSelectedElement;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.checkMoveToSelectedValue;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.checkMoveToAllValue;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelectionViewComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTwoListSelectionModule = /** @class */ (function () {
    function StTwoListSelectionModule() {
    }
    StTwoListSelectionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSearchModule, PipesModule, VirtualScrollerModule, StSelectModule, StCheckboxModule, StDropdownMenuModule, StSpinnerModule],
                    declarations: [StTwoListSelectionViewComponent, StTwoListSelectionComponent, ListSelectionComponent, ListItemComponent, ListScrollComponent],
                    exports: [StTwoListSelectionComponent, StTwoListSelectionViewComponent]
                },] }
    ];
    return StTwoListSelectionModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-vertical-tabs/st-vertical-tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StVerticalTabsComponent = /** @class */ (function () {
    function StVerticalTabsComponent() {
        this.changeOption = new EventEmitter();
        this.activeOptionIndex = 0;
        this.arrowMovement = 39;
        this.arrowMargin = 0;
    }
    /**
     * @return {?}
     */
    StVerticalTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.qaTag) {
            throw new Error('qaTag is a required field');
        }
        if (this.options && this.options.length > 0) {
            if (this.activeOption) {
                this.changeActive(this.activeOption);
            }
            else {
                this.activeFirstOption();
            }
        }
        else {
            throw new Error('options is a required field');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StVerticalTabsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.activeOption) {
            this.changeActive(changes.activeOption.currentValue);
        }
    };
    /**
     * @param {?} optionName
     * @return {?}
     */
    StVerticalTabsComponent.prototype.isActive = /**
     * @param {?} optionName
     * @return {?}
     */
    function (optionName) {
        return this.activeOption === optionName;
    };
    /**
     * @param {?} optionName
     * @return {?}
     */
    StVerticalTabsComponent.prototype.activateOption = /**
     * @param {?} optionName
     * @return {?}
     */
    function (optionName) {
        this.changeActive(optionName);
        this.changeOption.emit(optionName);
    };
    /**
     * @private
     * @param {?} optionName
     * @return {?}
     */
    StVerticalTabsComponent.prototype.changeActive = /**
     * @private
     * @param {?} optionName
     * @return {?}
     */
    function (optionName) {
        this.activeOption = optionName;
        this.activeOptionIndex = this.options.indexOf(optionName);
        if (this.activeOptionIndex < 0) {
            this.activeFirstOption();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StVerticalTabsComponent.prototype.activeFirstOption = /**
     * @private
     * @return {?}
     */
    function () {
        this.changeActive(this.options[0]);
    };
    StVerticalTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-vertical-tabs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-vertical-tabs\">\n  <ul class=\"st-vertical-tabs__list\">\n    <li *ngFor=\"let option of options; let i = index;\" class=\"st-vertical-tabs__option sth-vertical-tabs__option\">\n      <a class=\"st-vertical-tabs__option__text sth-vertical-tabs__option__text\" (click)=\"activateOption(option)\"\n         [ngClass]=\"{'sth-vertical-tabs__option--active': isActive(option)}\"\n         [attr.id]=\"qaTag + '-tab-' + i\" href=\"javascript:void(0)\">{{option}}</a>\n    </li>\n  </ul>\n  <div class=\"st-vertical-tabs__line sth-vertical-tabs__line\">\n    <span class=\"st-vertical-tabs__line__arrow sth-vertical-tabs__line__arrow\"\n          [style.margin-top]=\"activeOptionIndex * arrowMovement + arrowMargin + 'px'\">\n    </span>\n  </div>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:block}.st-vertical-tabs{height:100%;width:100%;display:block;position:relative}.st-vertical-tabs__list{height:100%;position:relative;list-style:none;float:left;width:90%;padding:0 30px 0 0}.st-vertical-tabs__option{margin-top:-1px;height:40px;line-height:38px;box-sizing:border-box}.st-vertical-tabs__option__text{display:block;line-height:38px;margin-left:15px}.st-vertical-tabs__line{position:relative;height:100%;float:right;width:10%;border-radius:2px}.st-vertical-tabs__line__arrow{position:absolute;width:13px;height:13px;top:14px;transform:rotate(45deg);float:left;margin-left:-6.1px;border-radius:2px}"]
                }] }
    ];
    /** @nocollapse */
    StVerticalTabsComponent.ctorParameters = function () { return []; };
    StVerticalTabsComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        qaTag: [{ type: Input }],
        changeOption: [{ type: Output }]
    };
    return StVerticalTabsComponent;
}());
if (false) {
    /** @type {?} */
    StVerticalTabsComponent.prototype.activeOption;
    /** @type {?} */
    StVerticalTabsComponent.prototype.options;
    /** @type {?} */
    StVerticalTabsComponent.prototype.qaTag;
    /** @type {?} */
    StVerticalTabsComponent.prototype.changeOption;
    /** @type {?} */
    StVerticalTabsComponent.prototype.activeOptionIndex;
    /** @type {?} */
    StVerticalTabsComponent.prototype.arrowMovement;
    /** @type {?} */
    StVerticalTabsComponent.prototype.arrowMargin;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-vertical-tabs/st-vertical-tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StVerticalTabsModule = /** @class */ (function () {
    function StVerticalTabsModule() {
    }
    StVerticalTabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StVerticalTabsComponent],
                    exports: [StVerticalTabsComponent]
                },] }
    ];
    return StVerticalTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-widget/st-widget.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Widget]
 *
 * Widget component is a container box for any type of widgets
 *
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-widget title="widget demo" [loading]="isLoading" overwriteLoadingData="Loading..."></st-widget>
 * ```
 *
 */
var StWidgetComponent = /** @class */ (function () {
    function StWidgetComponent(el) {
        this.el = el;
        /**
         * \@Input {bolean} [loading] when true, loading stauts is displayed
         */
        this.loading = false;
        /**
         * \@Input {string} [title] text "loading data" will be overwritten with this parameter
         */
        this.overwriteLoadingData = 'Loading data';
        /**
         * \@Input {boolean} [displaySettingsButton] Boolean to display or hide the settings button
         */
        this.displaySettingsButton = true;
        this._draggable = true;
        this._dragging = false;
    }
    Object.defineProperty(StWidgetComponent.prototype, "widgetId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.id ? this.el.nativeElement.id + '-widget' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StWidgetComponent.prototype, "draggable", {
        /** @Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget */
        get: /**
         * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget
         * @return {?}
         */
        function () {
            return this._draggable;
        },
        set: /**
         * @param {?} draggable
         * @return {?}
         */
        function (draggable) {
            this._draggable = draggable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StWidgetComponent.prototype, "dragging", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dragging;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StWidgetComponent.prototype.updateDragging = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._dragging = value;
    };
    StWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-widget',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"st-widget\" [attr.id]=\"widgetId\" [ngClass]=\"{'dragging': dragging}\" [draggable]=\"draggable && dragging\" (dragend)=\"updateDragging(false)\" >\n   <div class=\"st-widget__header\" >\n      <span *ngIf=\"draggable\" class=\"drag-drop-action\" (mousedown)=\"updateDragging(true)\" (mouseup)=\"updateDragging(false)\">\n         <i class=\"icon-drag\"></i>\n      </span>\n      <span class=\"st-widget__title\">{{title}}</span>\n      <span *ngIf=\"displaySettingsButton\" class=\"setting-action\">\n         <i class=\"icon-settings2\"></i>\n      </span>\n   </div>\n   <div class=\"st-widget__body\">\n      <div class=\"loading-status\" *ngIf=\"loading\">\n         <st-progress-bar class=\"progress-bar\"></st-progress-bar>\n         <span class=\"loading-status-text\">{{overwriteLoadingData}}</span>\n      </div>\n      <div class=\"st-widget__content\" *ngIf=\"!loading\">\n         <ng-content ></ng-content>\n      </div>\n   </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";:host{display:block;padding:0;height:100%;width:100%}:host .st-widget{height:100%;width:100%;border-radius:4px}:host .st-widget__header{height:50px;padding:15px 19.5px}:host .st-widget__header .drag-drop-action{cursor:move}:host .st-widget__header .drag-drop-action .icon-actions{display:inline}:host .st-widget__header .drag-drop-action .icon-actions:last-of-type{margin-left:-13px}:host .st-widget__header .setting-action{cursor:pointer;float:right;visibility:hidden}:host .st-widget__title{text-transform:capitalize}:host .st-widget__body{position:relative;width:100%;height:calc(100% - 50px);padding:30px}:host .st-widget__body .loading-status{align-items:center;background-color:#f3f6f8;color:#a0a0a0;display:flex;font-weight:400;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}:host .st-widget__body .loading-status .progress-bar{position:absolute;top:0;left:0}:host .st-widget__content{height:100%;width:100%;overflow:hidden}:host .st-widget:hover .setting-action{visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    StWidgetComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StWidgetComponent.propDecorators = {
        title: [{ type: Input }],
        loading: [{ type: Input }],
        overwriteLoadingData: [{ type: Input }],
        displaySettingsButton: [{ type: Input }],
        draggable: [{ type: Input }]
    };
    return StWidgetComponent;
}());
if (false) {
    /**
     * \@Input {string} [title] title will be displayed in the widget header
     * @type {?}
     */
    StWidgetComponent.prototype.title;
    /**
     * \@Input {bolean} [loading] when true, loading stauts is displayed
     * @type {?}
     */
    StWidgetComponent.prototype.loading;
    /**
     * \@Input {string} [title] text "loading data" will be overwritten with this parameter
     * @type {?}
     */
    StWidgetComponent.prototype.overwriteLoadingData;
    /**
     * \@Input {boolean} [displaySettingsButton] Boolean to display or hide the settings button
     * @type {?}
     */
    StWidgetComponent.prototype.displaySettingsButton;
    /**
     * @type {?}
     * @private
     */
    StWidgetComponent.prototype._draggable;
    /**
     * @type {?}
     * @private
     */
    StWidgetComponent.prototype._dragging;
    /**
     * @type {?}
     * @private
     */
    StWidgetComponent.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-widget/st-widget.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StWidgetModule = /** @class */ (function () {
    function StWidgetModule() {
    }
    StWidgetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StProgressBarModule],
                    exports: [StWidgetComponent],
                    declarations: [StWidgetComponent]
                },] }
    ];
    return StWidgetModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-foreground-notifications/st-foreground-notifications.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function StNotificationElement() { }
if (false) {
    /** @type {?|undefined} */
    StNotificationElement.prototype.text;
    /** @type {?|undefined} */
    StNotificationElement.prototype.html;
    /** @type {?|undefined} */
    StNotificationElement.prototype.status;
    /** @type {?|undefined} */
    StNotificationElement.prototype.nameEvents;
}
// WARNING: interface has both a type and a value, skipping emit
var StatusNotification = /** @class */ (function () {
    function StatusNotification(_showMore, _completeText) {
        this._showMore = _showMore;
        this._completeText = _completeText;
        this.showMore = _showMore;
        this.completeText = _completeText;
    }
    return StatusNotification;
}());
if (false) {
    /** @type {?} */
    StatusNotification.prototype.showMore;
    /** @type {?} */
    StatusNotification.prototype.completeText;
    /**
     * @type {?}
     * @private
     */
    StatusNotification.prototype._showMore;
    /**
     * @type {?}
     * @private
     */
    StatusNotification.prototype._completeText;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-foreground-notifications/st-foreground-notifications.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StForegroundNotificationsComponent = /** @class */ (function () {
    function StForegroundNotificationsComponent(cd, elemRef, renderer) {
        this.cd = cd;
        this.elemRef = elemRef;
        this.renderer = renderer;
        /**
         * \@Input {StNotificationElement []} [notifications='[]'] Array of notifications
         */
        this.notifications = [];
        /**
         * \@output {clickLinkTemplate} [click] Event emitted when user click in a href link
         */
        this.clickLinkTemplate = new EventEmitter();
        /**
         * \@output {visibleChange} [click] Event emitted when set param visible
         */
        this.visibleChange = new EventEmitter();
        this.currentNotification = 1;
        this.showLinkMore = false;
        this.status = 'default';
        this._visible = false;
        this.listStatusNotifications = [];
    }
    Object.defineProperty(StForegroundNotificationsComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        /** @Input {boolean} [visible=false] When true the notification is shown */
        set: /**
         * \@Input {boolean} [visible=false] When true the notification is shown
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== undefined) {
                this._visible = value;
                this.visibleChange.emit(this._visible);
            }
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoCloseTime) {
            if (this.notifications.length === 1 && this.notifications[0].status === 'success') {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.onClose(); }), this.autoCloseTime);
            }
        }
        this.fillStatusNotifications();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var htmlElement = this.elemRef.nativeElement.querySelector('.foreground-notification__html');
        if (htmlElement !== null) {
            this.addStyleLinks(htmlElement);
        }
        if (this.notifications && this.notifications.length > 0) {
            this.checkOneLine();
        }
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.notifications && this.notifications.length < this.currentNotification) {
            this.currentNotification = this.notifications.length;
        }
        this.listStatusNotifications = [];
        this.fillStatusNotifications();
    };
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.addStyleLinks = /**
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        var _this = this;
        /** @type {?} */
        var links = htmlElement.querySelectorAll('a');
        if (links.constructor !== Array) {
            links = ((/** @type {?} */ (Object))).values(links);
        }
        links.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
            /** @type {?} */
            var nameEventEmitter = (_this.notifications[_this.getIndexCurrentNotification()]).nameEvents[index];
            if (nameEventEmitter) {
                element.addEventListener('click', _this.onClickLinkHtmlTemplate.bind(_this, nameEventEmitter));
                _this.renderer.setStyle(element, 'text-decoration', 'underline');
                _this.renderer.setStyle(element, 'cursor', 'pointer');
            }
        }));
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.checkOneLine = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
        /** @type {?} */
        var currentIndex = this.getIndexCurrentNotification();
        if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
            if (element[currentIndex].offsetHeight > 40) {
                this.listStatusNotifications[currentIndex].showMore = !this.listStatusNotifications[currentIndex].completeText;
                if (this.listStatusNotifications[currentIndex].showMore) {
                    this.listStatusNotifications[currentIndex].completeText = false;
                    this.renderer.addClass(element[currentIndex], 'limit-one-line');
                }
            }
            else {
                this.listStatusNotifications[currentIndex].completeText = true;
                if (!this.listStatusNotifications[currentIndex].showMore) {
                    this.removeStyleNotification();
                }
            }
        }
        this.checkStatus();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.checkStatus = /**
     * @return {?}
     */
    function () {
        this.statusValue = this.getStatus();
        this.statusIconValue = this.getStatusIcon();
        this.statusNotificationsValue = this.getStatusNotifications();
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.decrementPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentNotification = this.getIndexCurrentNotification();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkOneLine();
            _this.cd.detectChanges();
        }));
        this.status = this.notifications[this.getIndexCurrentNotification()].status;
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.fillStatusNotifications = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.notifications && this.notifications.length > 0) {
            this.status = this.notifications[this.getIndexCurrentNotification()].status;
            this.checkStatus();
        }
        this.notifications.forEach((/**
         * @return {?}
         */
        function () {
            _this.listStatusNotifications.push(new StatusNotification(false, false));
        }));
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getIndexCurrentNotification = /**
     * @return {?}
     */
    function () {
        return this.currentNotification - 1;
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getStatus = /**
     * @return {?}
     */
    function () {
        switch (this.status) {
            case 'success':
            case 'warning':
            case 'critical':
            case 'running':
                return this.status;
            default:
                return 'default';
        }
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getStatusIcon = /**
     * @return {?}
     */
    function () {
        switch (this.status) {
            case 'success':
                return 'icon-circle-check';
            case 'warning':
                return 'icon-alert';
            case 'critical':
                return 'icon-info1';
            case 'running':
                return 'icon-info1';
            default:
                return 'default';
        }
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getStatusNotifications = /**
     * @return {?}
     */
    function () {
        return (this.notifications.length > 1) ? 'more-lines' : '';
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.incrementPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentNotification = this.currentNotification + 1;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkOneLine();
            _this.cd.detectChanges();
        }));
        this.status = this.notifications[this.getIndexCurrentNotification()].status;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.onClickLinkHtmlTemplate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clickLinkTemplate.emit(event);
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.visible = false;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.removeStyleNotification = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
        this.renderer.removeClass(element[this.getIndexCurrentNotification()], 'limit-one-line');
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.showTextComplete = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = this.getIndexCurrentNotification();
        if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
            this.listStatusNotifications[currentIndex].showMore = false;
            this.listStatusNotifications[currentIndex].completeText = true;
        }
        this.removeStyleNotification();
        this.cd.markForCheck();
    };
    StForegroundNotificationsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-foreground-notifications',
                    template: "<!--\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n    SPDX-License-Identifier: Apache-2.0.\n-->\n<div class=\"foreground-notification__component\">\n   <div class=\"foreground-notification__pagination\" [ngClass]=\"statusValue\" *ngIf=\"notifications.length > 1\">\n      <button class=\"decrement-notification\" [disabled]=\"currentNotification === 1\" (click)=\"decrementPage()\"><i class=\"icon-arrow2_left\"></i></button>\n      <span>{{currentNotification}}</span>\n      <span>of</span>\n      <span>{{notifications.length}}</span>\n      <button class=\"increment-notification\" [disabled]=\"currentNotification === notifications.length \" (click)=\"incrementPage()\"><i class=\"icon-arrow2_right\"></i></button>\n   </div>\n\n   <div *ngIf=\"notifications.length > 0\" class=\"foreground-notification\" [ngClass]=\"[statusValue, statusNotificationsValue]\">\n      <div class=\"foreground-notification__container\">\n         <i class=\"status\" [ngClass]=\"statusIconValue\"></i>\n         <div class=\"foreground-notification__content\" *ngFor=\"let notification of notifications; let index=index\">\n            <span class=\"foreground-notification__html\" *ngIf=\"notification.html && index === currentNotification - 1\" [innerHtml]=\"notifications[currentNotification - 1].html\"></span>\n            <span  *ngIf=\"!notification.html && index === getIndexCurrentNotification()\">\n               {{notifications[getIndexCurrentNotification()].text}}\n            </span>\n            <a class=\"link-more\" *ngIf=\"listStatusNotifications[index] && listStatusNotifications[index].showMore && index === currentNotification - 1\" (click)=\"showTextComplete()\">...More</a>\n         </div>\n      </div>\n\n      <i class=\"close icon-cross\" (click)=\"onClose()\"></i>\n   </div>\n</div>\n",
                    host: {
                        '[class.visible]': '_visible'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;flex-direction:column;opacity:0;padding-left:15px;padding-right:15px;padding-top:4px;pointer-events:none;transition-duration:1s;transition-property:opacity}:host .foreground-notification{display:flex;font-size:14px;padding:8px 15px;position:relative;text-align:justify;width:auto;align-items:center}:host .foreground-notification .close{cursor:pointer;font-size:18px;flex-direction:row-reverse;margin-left:auto;right:11px;top:11px}:host .foreground-notification .link-more{cursor:pointer;padding-left:10px;padding-right:60px;text-decoration:underline}:host .foreground-notification.critical,:host .foreground-notification.running,:host .foreground-notification.success,:host .foreground-notification.warning{border-radius:4px}:host .foreground-notification.more-lines{border-top-left-radius:0;border-bottom-left-radius:0}:host .foreground-notification__component{display:flex;flex-direction:row;justify-content:center;min-height:40px}:host .foreground-notification__pagination{align-items:center;border-top-left-radius:4px;border-bottom-left-radius:4px;color:#fff;display:flex;font-size:1rem;height:40px;padding:5px}:host .foreground-notification__pagination.critical{background-color:#b2212a}:host .foreground-notification__pagination.success{background-color:#0a885a}:host .foreground-notification__pagination.warning{background-color:#ec7e13}:host .foreground-notification__pagination.running{background-color:#065eb2}:host .foreground-notification__pagination.default{border:0;color:#111;box-shadow:0 1px 4px 1px rgba(124,124,124,.15)}:host .foreground-notification__pagination span:nth-child(2){margin-left:5px}:host .foreground-notification__pagination span:nth-child(3){margin-left:5px;margin-right:5px}:host .foreground-notification__pagination span:nth-child(4){margin-right:5px}:host .foreground-notification__pagination i{cursor:pointer}:host .foreground-notification__container{align-items:flex-start;display:flex;justify-content:center;margin-right:60px;text-align:justify;width:100%}:host .foreground-notification__container i{font-size:18px;margin-right:10px}:host .foreground-notification__pagination.more-lines{margin:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host .foreground-notification__content{display:flex}:host .foreground-notification__content.limit-one-line span{display:-webkit-box;line-height:16px;max-height:16px;overflow:hidden;padding:4px 0;text-overflow:ellipsis;-webkit-line-clamp:1}:host.visible{opacity:1;pointer-events:all;transition-duration:1s;transition-property:opacity}"]
                }] }
    ];
    /** @nocollapse */
    StForegroundNotificationsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    StForegroundNotificationsComponent.propDecorators = {
        visible: [{ type: Input }],
        autoCloseTime: [{ type: Input }],
        notifications: [{ type: Input }],
        clickLinkTemplate: [{ type: Output }],
        visibleChange: [{ type: Output }]
    };
    return StForegroundNotificationsComponent;
}());
if (false) {
    /**
     * \@Input {autoCloseTime} [autoCloseTime='1000'] Defines the time in milliseconds for autoclose the notification.
     *  The autoclose only applies if only have one notification and status is success
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.autoCloseTime;
    /**
     * \@Input {StNotificationElement []} [notifications='[]'] Array of notifications
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.notifications;
    /**
     * \@output {clickLinkTemplate} [click] Event emitted when user click in a href link
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.clickLinkTemplate;
    /**
     * \@output {visibleChange} [click] Event emitted when set param visible
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.visibleChange;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.currentNotification;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.statusIconValue;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.statusNotificationsValue;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.statusValue;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.showLinkMore;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.status;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype._visible;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.listStatusNotifications;
    /**
     * @type {?}
     * @private
     */
    StForegroundNotificationsComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StForegroundNotificationsComponent.prototype.elemRef;
    /**
     * @type {?}
     * @private
     */
    StForegroundNotificationsComponent.prototype.renderer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-foreground-notifications/st-foreground-notifications.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StForegroundNotificationsModule = /** @class */ (function () {
    function StForegroundNotificationsModule() {
    }
    StForegroundNotificationsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        StForegroundNotificationsComponent
                    ],
                    exports: [StForegroundNotificationsComponent]
                },] }
    ];
    return StForegroundNotificationsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-zero-page/st-zero-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Zero Page]
 *
 * Zero page is displayed when there are no results to show in a table
 *
 * \@example
 *
 * {html}
 *
 * ```
 *      <st-zero-page class="zero-page-example"
 *      title="There are no Variables created yet "
 *      info="Variables help you to have consistent values through your Quality Rules, Attributes…"
 *      imageSource="assets/images/variable-icon.svg">
 *      </st-zero-page>
 * ```
 */
var StZeroPageComponent = /** @class */ (function () {
    function StZeroPageComponent() {
    }
    StZeroPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-zero-page',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span class=\"image-container\"><img [attr.src]=\"imageSource\"></span>\n<h1 class=\"st-zero-page__title\">{{title}}</h1>\n<span class=\"st-zero-page__info\">{{info}}</span>\n<ng-content></ng-content>\n",
                    styles: ["@charset \"UTF-8\";:host{text-align:center;width:50%;margin:auto;display:flex;flex-direction:column;justify-content:center}.image-container{margin-bottom:50px}.image-container img{height:145px}.info,.title{width:100%;display:block}"]
                }] }
    ];
    StZeroPageComponent.propDecorators = {
        title: [{ type: Input }],
        info: [{ type: Input }],
        imageSource: [{ type: Input }]
    };
    return StZeroPageComponent;
}());
if (false) {
    /**
     * \@Input {string} [title=''] Title message
     * @type {?}
     */
    StZeroPageComponent.prototype.title;
    /**
     * \@Input {string} [info=''] Info message
     * @type {?}
     */
    StZeroPageComponent.prototype.info;
    /**
     * \@Input {string} [imageSource=''] Image source path
     * @type {?}
     */
    StZeroPageComponent.prototype.imageSource;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-zero-page/st-zero-page.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StZeroPageModule = /** @class */ (function () {
    function StZeroPageModule() {
    }
    StZeroPageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        StZeroPageComponent
                    ],
                    exports: [StZeroPageComponent]
                },] }
    ];
    return StZeroPageModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-color-picker/st-color-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Color picker]
 *
 * The color picker allows user to choose between several colors
 *
 * \@example
 *
 * {html}
 *
 * ```
 *   <st-color-picker label="Choose a Status color" [selected]="selectedColor" [palette]="palette"
 *     (change)="onSelectColor($event)">
 *   </st-color-picker>
 * ```
 *
 */
var StColorPickerComponent = /** @class */ (function () {
    function StColorPickerComponent() {
        var _this = this;
        /**
         * \@Output {string} [change=] Event emitted when a color is selected
         */
        this.change = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this._selected = _;
            _this.change.emit(_this._selected);
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StColorPickerComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._selected = color;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} color
     * @return {?}
     */
    StColorPickerComponent.prototype.onSelectColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.change.emit(color);
        this.onChange(color);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    StColorPickerComponent.prototype.isSelected = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return this.selected === color;
    };
    // load external change
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    StColorPickerComponent.prototype.writeValue = 
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this._disabled) {
            this._selected = value;
            this.change.emit(this._selected);
            if (this.registeredOnChange) {
                this.registeredOnChange(value);
            }
        }
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StColorPickerComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // Registry the touch function to propagate internal touch events
    // Registry the touch function to propagate internal touch events
    /**
     * @param {?} fn
     * @return {?}
     */
    StColorPickerComponent.prototype.registerOnTouched = 
    // Registry the touch function to propagate internal touch events
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
    StColorPickerComponent.prototype.setDisabledState = /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        this._disabled = disable;
    };
    StColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-color-picker',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-color-picker\">\n   <label *ngIf=\"label\" st-label class=\"label\">{{label}}</label>\n   <div class=\"palette\">\n      <span class=\"color-ball\" *ngFor=\"let color of palette\"\n            [ngClass]=\"{'color-ball--selected': isSelected(color)}\"\n            (click)=\"onSelectColor(color)\"\n            [style.background-color]=\"color\">\n      </span>\n   </div>\n</div>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StColorPickerComponent; })), multi: true }
                    ],
                    styles: ["@charset \"UTF-8\";.st-color-picker .label{display:block;margin-bottom:15px}.st-color-picker .palette{display:flex}.st-color-picker .palette .color-ball{width:36px;height:36px;border-radius:50px;margin-left:15px;cursor:pointer}.st-color-picker .palette .color-ball:first-child{margin-left:0}"]
                }] }
    ];
    StColorPickerComponent.propDecorators = {
        label: [{ type: Input }],
        palette: [{ type: Input }],
        change: [{ type: Output }],
        selected: [{ type: Input }]
    };
    return StColorPickerComponent;
}());
if (false) {
    /**
     * \@Input {string} [label=] Optional label displayed on the top of the color picker
     * @type {?}
     */
    StColorPickerComponent.prototype.label;
    /**
     * \@Input {string[]} [palette=] List of colors to be selected
     * @type {?}
     */
    StColorPickerComponent.prototype.palette;
    /**
     * \@Output {string} [change=] Event emitted when a color is selected
     * @type {?}
     */
    StColorPickerComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    StColorPickerComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    StColorPickerComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    StColorPickerComponent.prototype.registeredOnChange;
    /** @type {?} */
    StColorPickerComponent.prototype.onChange;
    /** @type {?} */
    StColorPickerComponent.prototype.onTouched;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-color-picker/st-color-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StColorPickerModule = /** @class */ (function () {
    function StColorPickerModule() {
    }
    StColorPickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StLabelModule, FormsModule, ReactiveFormsModule],
                    declarations: [StColorPickerComponent],
                    exports: [StColorPickerComponent]
                },] }
    ];
    return StColorPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dynamic-table/utils/st-dynamic-table.utils.ts
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
var StDynamicTableUtils = /** @class */ (function () {
    function StDynamicTableUtils() {
    }
    /**
     * @param {?} jsonSchema
     * @param {?=} uiDefinitions
     * @return {?}
     */
    StDynamicTableUtils.getHeaderFieldsFromJsonSchema = /**
     * @param {?} jsonSchema
     * @param {?=} uiDefinitions
     * @return {?}
     */
    function (jsonSchema, uiDefinitions) {
        var _this = this;
        /** @type {?} */
        var fields = [];
        if (jsonSchema && jsonSchema.properties) {
            /** @type {?} */
            var properties = Object.keys(jsonSchema.properties);
            if (properties) {
                properties.forEach((/**
                 * @param {?} _propertyKey
                 * @return {?}
                 */
                function (_propertyKey) {
                    /** @type {?} */
                    var _property = jsonSchema.properties[_propertyKey];
                    if (_property && _property.type !== 'object') {
                        /** @type {?} */
                        var uiDefinition = uiDefinitions && uiDefinitions[_propertyKey];
                        /** @type {?} */
                        var visible = !uiDefinition || uiDefinition.visible !== false;
                        if (visible) {
                            /** @type {?} */
                            var filters = StDynamicTableUtils.getHeaderFiltersFromJsonSchema(_property, uiDefinition);
                            /** @type {?} */
                            var isSortable = uiDefinition && uiDefinitions[_propertyKey].sortable;
                            fields.push({
                                id: _propertyKey,
                                label: _property.title || _propertyKey,
                                reference: _property.$ref,
                                fk: uiDefinition && uiDefinition.fk,
                                group: uiDefinition && uiDefinition.group_field ? uiDefinition.group_field.view : null,
                                filters: filters,
                                filterable: filters && (filters.templateRef !== undefined || (filters.filterConfig && filters.filterConfig.length > 0)),
                                sortable: isSortable,
                                sortedByDefault: uiDefinition && uiDefinition.sort ? uiDefinition.sort.toUpperCase() : null,
                                type: _property.type ? _this._getTypes(_propertyKey, _property.type.toString(), jsonSchema, uiDefinition) : null
                            });
                        }
                    }
                }));
            }
        }
        return fields;
    };
    /**
     * @param {?} propertyDefinition
     * @param {?} uiDefinition
     * @return {?}
     */
    StDynamicTableUtils.getHeaderFiltersFromJsonSchema = /**
     * @param {?} propertyDefinition
     * @param {?} uiDefinition
     * @return {?}
     */
    function (propertyDefinition, uiDefinition) {
        /** @type {?} */
        var filters;
        if (propertyDefinition.enum && propertyDefinition.enum.length) {
            filters = {
                title: propertyDefinition.title,
                filterConfig: []
            };
            propertyDefinition.enum.forEach((/**
             * @param {?} _value
             * @return {?}
             */
            function (_value) {
                filters.filterConfig.push({
                    id: (/** @type {?} */ (_value)),
                    name: (/** @type {?} */ (_value))
                });
            }));
        }
        else if (uiDefinition && uiDefinition.templateRef) {
            filters = {
                title: propertyDefinition.title,
                templateRef: uiDefinition.templateRef
            };
        }
        return filters;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} type
     * @param {?} jsonSchema
     * @param {?} uiDefinition
     * @return {?}
     */
    StDynamicTableUtils._getTypes = /**
     * @private
     * @param {?} key
     * @param {?} type
     * @param {?} jsonSchema
     * @param {?} uiDefinition
     * @return {?}
     */
    function (key, type, jsonSchema, uiDefinition) {
        if (uiDefinition && uiDefinition.group_field && uiDefinition.group_field.view) {
            /** @type {?} */
            var fields = uiDefinition.group_field.view.split(' - ');
            return fields.map((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return ({
                field: field,
                type: jsonSchema.properties[field] ? String(jsonSchema.properties[field].type) : ''
            }); }));
        }
        return [{ field: key, type: type }];
    };
    return StDynamicTableUtils;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dynamic-table/st-dynamic-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Dynamic Table]
 *
 * The table component has been designed to be able to create a table deducing its columns using a json schema
 *
 * * \@model
 *
 *   [StDynamicTableHeader] {./st-dynamic-table.model.ts#StDynamicTableHeader}
 *   [StDynamicTableUISpecification] {./st-dynamic-table.model.ts#StDynamicTableUISpecification}
 *   [StDynamicTableUserInterface] {./st-dynamic-table.model.ts#StDynamicTableUserInterface}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-dynamic-table [jsonSchema]="jsonSchema"
 *    [items]="sortedUsers"
 *    [sortable]="true"
 *    [filterable]="true"
 *    [hasHoverMenu]="true"
 *    [currentOrder]="currentOrder"
 *    [activeHoverMenu]="activeHoverMenuPosition"
 *    [templateContentFilter]="filterContent"
 *    (changeOrder)="onSortTable($event)"
 *    (showHoverMenu)="onShowHoverMenu($event)">
 *        <st-dropdown-menu st-dynamic-table-hover-menu
 *          class="hover-menu"
 *          [items]="rowActions"
 *          [active]="activeHoverMenuPosition[3] !== undefined"
 *          [visualMode]="1">
 *       </st-dropdown-menu>
 * </st-dynamic-table>
 * ```
 *
 */
var StDynamicTableComponent = /** @class */ (function () {
    function StDynamicTableComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [header=true] Boolean to show or hide the header
         */
        this.header = true;
        /**
         * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
         * the new "sortable" field inside stTableHeader model
         */
        this.sortable = true;
        /**
         * \@Input {boolean} [filterable=false] Boolean to make filterable the table, To enable filtering of columns use
         * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
         */
        this.filterable = false;
        /**
         * \@Input {boolean} [selectable=false] Boolean to show or hide a checkboxes in the first cell of rows
         */
        this.selectable = false;
        /**
         * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
         *  deselect all rows
         */
        this.selectableAll = false;
        /**
         * \@Input {boolean[]} [selected=''] Boolean list to indicate if a row is selected
         */
        this.selected = [];
        /**
         * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
         */
        this.fixedHeader = false;
        /**
         * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
         */
        this.stickyHoverMenu = false;
        /**
         * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
         */
        this.iconClasses = new StTableIconClasses();
        /**
         * \@Input {boolean[]} [statusFilter=] List of status filter by column, needed with templateContentFilter
         */
        this.statusFilter = [];
        /**
         * \@Input {string} [hoverButton='icon-ellipsis'] It specifies the icon class of the hover button displayed when user puts mouse over a row
         */
        this.hoverButton = 'icon-ellipsis';
        /**
         * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
         */
        this.changeOrder = new EventEmitter();
        /**
         * \@Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
         * all rows
         */
        this.selectAll = new EventEmitter();
        /**
         * \@Output {EventEmitter<StTableHeader[]>} [fields=] Event emitted when header fields are being loaded
         */
        this.updateFields = new EventEmitter();
        /**
         * \@Output {string} [clickFilter=] Event emitted when using filters custom template
         */
        this.clickFilter = new EventEmitter();
        /**
         * \@Output {StTableHeader[]} [selectFilters=] Event emitted  when user interacts with filter button without a custom template
         */
        this.selectFilters = new EventEmitter();
        /**
         * \@Output {EventEmitter<number} [showHoverMenu=] Event emitted when user clicks on hover button of a row
         */
        this.showHoverMenu = new EventEmitter();
        /**
         * \@Output {Object(checked: boolean, row: number)} [selectRow=] Event emitted when user clicks on checkbox of a row
         */
        this.selectRow = new EventEmitter();
        /**
         * \@Output {Object(checked: boolean, row: number)} [clickCell=] Event emitted when user clicks on checkbox of a row
         */
        this.clickCell = new EventEmitter();
        /**
         * \@Output {StDynamicTableFkEvent} [clickFk=] Event emitted when user clicks on Fk cell
         */
        this.clickFk = new EventEmitter();
        this.fields = [];
        this._fkSeparator = ' - ';
    }
    Object.defineProperty(StDynamicTableComponent.prototype, "templateContentFilter", {
        /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
        get: /**
         * \@Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content
         * @return {?}
         */
        function () {
            return this._templateContentFilter;
        },
        set: /**
         * @param {?} _templateRef
         * @return {?}
         */
        function (_templateRef) {
            this._templateContentFilter = _templateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDynamicTableComponent.prototype, "jsonSchema", {
        /** @Input {JSONSchema4} [jsonSchema=] Json schema to define its structure */
        get: /**
         * \@Input {JSONSchema4} [jsonSchema=] Json schema to define its structure
         * @return {?}
         */
        function () {
            return this._jsonSchema;
        },
        set: /**
         * @param {?} _jsonSchema
         * @return {?}
         */
        function (_jsonSchema) {
            this._jsonSchema = _jsonSchema;
            this._manageFieldsUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDynamicTableComponent.prototype, "uiDefinitions", {
        /** @Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field */
        get: /**
         * \@Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field
         * @return {?}
         */
        function () {
            return this._uiDefinitions;
        },
        set: /**
         * @param {?} _uiDefinitions
         * @return {?}
         */
        function (_uiDefinitions) {
            this._uiDefinitions = _uiDefinitions;
            this._manageFieldsUpdate();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selectedFilter
     * @return {?}
     */
    StDynamicTableComponent.prototype.onFilterClick = /**
     * @param {?} selectedFilter
     * @return {?}
     */
    function (selectedFilter) {
        this.clickFilter.emit(selectedFilter);
    };
    /**
     * @param {?} order
     * @return {?}
     */
    StDynamicTableComponent.prototype.onChangeOrder = /**
     * @param {?} order
     * @return {?}
     */
    function (order) {
        if (order) {
            this.changeOrder.emit(order);
        }
    };
    /**
     * @param {?} checked
     * @return {?}
     */
    StDynamicTableComponent.prototype.onSelectAll = /**
     * @param {?} checked
     * @return {?}
     */
    function (checked) {
        this.selectAll.emit(checked);
    };
    /**
     * @param {?} selectedFilters
     * @return {?}
     */
    StDynamicTableComponent.prototype.onSelectedFilters = /**
     * @param {?} selectedFilters
     * @return {?}
     */
    function (selectedFilters) {
        this.selectFilters.emit(selectedFilters);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    StDynamicTableComponent.prototype.onShowHoverMenu = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.showHoverMenu.emit(row);
    };
    /**
     * @return {?}
     */
    StDynamicTableComponent.prototype.onLeaveRow = /**
     * @return {?}
     */
    function () {
        this.showHoverMenu.emit(undefined);
    };
    /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.onClickFk = /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        this.clickFk.emit({
            fk: field.fk,
            value: item[field.id]
        });
    };
    /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.getCellContent = /**
     * @param {?} item
     * @param {?} field
     * @return {?}
     */
    function (item, field) {
        if (field.group) {
            /** @type {?} */
            var groupLabel = field.group.split(this._fkSeparator)
                .map((/**
             * @param {?} _groupKey
             * @return {?}
             */
            function (_groupKey) { return item[_groupKey]; }))
                .join(this._fkSeparator);
            return groupLabel.length > this._fkSeparator.length ? groupLabel : item[field.id];
        }
        return item[field.id];
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.getCellClasses = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var classes = {};
        if (field.reference) {
            classes.clickable = true;
        }
        return classes;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    StDynamicTableComponent.prototype.getCellStyles = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var uiDefinition = this.uiDefinitions && this.uiDefinitions[field.id];
        return uiDefinition && uiDefinition.styles;
    };
    /**
     * @param {?} checkboxEvent
     * @param {?} row
     * @return {?}
     */
    StDynamicTableComponent.prototype.onSelectRow = /**
     * @param {?} checkboxEvent
     * @param {?} row
     * @return {?}
     */
    function (checkboxEvent, row) {
        this.selectRow.emit({ checked: checkboxEvent.checked, row: row });
    };
    /**
     * @param {?} row
     * @param {?} fieldId
     * @param {?} label
     * @return {?}
     */
    StDynamicTableComponent.prototype.onClickCellLabel = /**
     * @param {?} row
     * @param {?} fieldId
     * @param {?} label
     * @return {?}
     */
    function (row, fieldId, label) {
        this.clickCell.emit({ row: row, fieldId: fieldId, label: label });
    };
    /**
     * @private
     * @return {?}
     */
    StDynamicTableComponent.prototype._manageFieldsUpdate = /**
     * @private
     * @return {?}
     */
    function () {
        this.fields = StDynamicTableUtils.getHeaderFieldsFromJsonSchema(this._jsonSchema, this._uiDefinitions);
        this.updateFields.emit(this.fields);
        this._cd.markForCheck();
    };
    StDynamicTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StDynamicTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-dynamic-table',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-table *ngIf=\"fields && fields.length && items\"\n          class=\"st-dynamic-table\"\n          [fields]=\"fields\"\n          [header]=\"header\"\n          [sortable]=\"sortable\"\n          [filterable]=\"filterable\"\n          [selectableAll]=\"selectableAll\"\n          [hasHoverMenu]=\"hasHoverMenu\"\n          [fixedHeader]=\"fixedHeader\"\n          [stickyHoverMenu]=\"stickyHoverMenu\"\n          [currentOrder]=\"currentOrder\"\n          [customClasses]=\"customClasses\"\n          [selectedAll]=\"selectedAll\"\n          [templateContentFilter]=\"templateContentFilter\"\n          [statusFilter]=\"statusFilter\"\n          [iconClasses]=\"iconClasses\"\n          (selectAll)=\"onSelectAll($event)\"\n          (changeOrder)=\"onChangeOrder($event)\"\n          (selectFilters)=\"onSelectedFilters($event)\"\n          (clickFilter)=\"onFilterClick($event)\">\n   <tbody>\n   <tr st-table-row *ngFor=\"let item of items; let row = index\" [selected]=\"selected[row]\" (mouseleave)=\"onLeaveRow()\">\n      <td st-table-cell st-table-row-content\n          *ngFor=\"let field of fields; let cell = index\"\n          [ngClass]=\"getCellClasses(fields[cell])\"\n          [ngStyle]=\"getCellStyles(fields[cell])\">\n\n         <st-checkbox *ngIf=\"selectable && !cell\"\n                      class=\"st-table__checkbox\"\n                      [checked]=\"selected[row]\"\n                      (change)=\"onSelectRow($event, row)\">\n         </st-checkbox>\n         <span (click)=\"onClickCellLabel(row, field.id, item[field.id])\" *ngIf=\"!field.fk; else hasFk\">\n            {{item[field.id]}}\n         </span>\n         <ng-template #hasFk>\n            <a (click)=\"onClickFk(item, field)\" class=\"hasFk\">{{getCellContent(item, field)}}</a>\n         </ng-template>\n      </td>\n      <td st-table-row-hover class=\"st-table-hover\" *ngIf=\"hasHoverMenu\">\n         <i class=\"icon {{hoverButton}}\" (click)=\"onShowHoverMenu(row)\"></i>\n         <ng-content select='[st-dynamic-table-hover-menu]' *ngIf=\"activeHoverMenu === row\"></ng-content>\n      </td>\n   </tr>\n   </tbody>\n</st-table>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%}:host .st-dynamic-table{max-height:100%;min-width:100%}:host .st-table-hover>i{cursor:pointer}:host .hasFk{color:var(--egeo-theme-action,#0776df);cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    StDynamicTableComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StDynamicTableComponent.propDecorators = {
        items: [{ type: Input }],
        qaTag: [{ type: Input }],
        header: [{ type: Input }],
        sortable: [{ type: Input }],
        filterable: [{ type: Input }],
        selectable: [{ type: Input }],
        selectableAll: [{ type: Input }],
        selected: [{ type: Input }],
        currentOrder: [{ type: Input }],
        customClasses: [{ type: Input }],
        fixedHeader: [{ type: Input }],
        stickyHoverMenu: [{ type: Input }],
        iconClasses: [{ type: Input }],
        templateContentFilter: [{ type: Input }],
        statusFilter: [{ type: Input }],
        activeHoverMenu: [{ type: Input }],
        hasHoverMenu: [{ type: Input }],
        hoverButton: [{ type: Input }],
        selectedAll: [{ type: Input }],
        changeOrder: [{ type: Output }],
        selectAll: [{ type: Output }],
        updateFields: [{ type: Output }],
        clickFilter: [{ type: Output }],
        selectFilters: [{ type: Output }],
        showHoverMenu: [{ type: Output }],
        selectRow: [{ type: Output }],
        clickCell: [{ type: Output }],
        clickFk: [{ type: Output }],
        jsonSchema: [{ type: Input }],
        uiDefinitions: [{ type: Input }]
    };
    __decorate([
        StRequired(),
        __metadata("design:type", Array)
    ], StDynamicTableComponent.prototype, "items", void 0);
    __decorate([
        StRequired(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], StDynamicTableComponent.prototype, "jsonSchema", null);
    /**
     * \@description {Component} [Dynamic Table]
     *
     * The table component has been designed to be able to create a table deducing its columns using a json schema
     *
     * * \@model
     *
     *   [StDynamicTableHeader] {./st-dynamic-table.model.ts#StDynamicTableHeader}
     *   [StDynamicTableUISpecification] {./st-dynamic-table.model.ts#StDynamicTableUISpecification}
     *   [StDynamicTableUserInterface] {./st-dynamic-table.model.ts#StDynamicTableUserInterface}
     *
     * \@example
     *
     * {html}
     *
     * ```
     * <st-dynamic-table [jsonSchema]="jsonSchema"
     *    [items]="sortedUsers"
     *    [sortable]="true"
     *    [filterable]="true"
     *    [hasHoverMenu]="true"
     *    [currentOrder]="currentOrder"
     *    [activeHoverMenu]="activeHoverMenuPosition"
     *    [templateContentFilter]="filterContent"
     *    (changeOrder)="onSortTable($event)"
     *    (showHoverMenu)="onShowHoverMenu($event)">
     *        <st-dropdown-menu st-dynamic-table-hover-menu
     *          class="hover-menu"
     *          [items]="rowActions"
     *          [active]="activeHoverMenuPosition[3] !== undefined"
     *          [visualMode]="1">
     *       </st-dropdown-menu>
     * </st-dynamic-table>
     * ```
     *
     */
    StDynamicTableComponent = __decorate([
        StEgeo(),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], StDynamicTableComponent);
    return StDynamicTableComponent;
}());
if (false) {
    /**
     * \@Input {Object([key: string]: any)[]} [items=''] Item list displayed as table rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.items;
    /**
     * \@Input {string} [qaTag=''] Prefix used to generate the id values for qa tests
     * @type {?}
     */
    StDynamicTableComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [header=true] Boolean to show or hide the header
     * @type {?}
     */
    StDynamicTableComponent.prototype.header;
    /**
     * \@Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
     * the new "sortable" field inside stTableHeader model
     * @type {?}
     */
    StDynamicTableComponent.prototype.sortable;
    /**
     * \@Input {boolean} [filterable=false] Boolean to make filterable the table, To enable filtering of columns use
     * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
     * @type {?}
     */
    StDynamicTableComponent.prototype.filterable;
    /**
     * \@Input {boolean} [selectable=false] Boolean to show or hide a checkboxes in the first cell of rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectable;
    /**
     * \@Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
     *  deselect all rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectableAll;
    /**
     * \@Input {boolean[]} [selected=''] Boolean list to indicate if a row is selected
     * @type {?}
     */
    StDynamicTableComponent.prototype.selected;
    /**
     * \@Input {Order} [currentOrder=''] It specifies what is the current order applied to the table
     * @type {?}
     */
    StDynamicTableComponent.prototype.currentOrder;
    /**
     * \@Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.customClasses;
    /**
     * \@Input {boolean} [fixedHeader=false] Boolean to fix the table header
     * @type {?}
     */
    StDynamicTableComponent.prototype.fixedHeader;
    /**
     * \@Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible
     * @type {?}
     */
    StDynamicTableComponent.prototype.stickyHoverMenu;
    /**
     * \@Input {StTableIconClasses} [iconClasses=''] List of icon classes
     * @type {?}
     */
    StDynamicTableComponent.prototype.iconClasses;
    /**
     * \@Input {boolean[]} [statusFilter=] List of status filter by column, needed with templateContentFilter
     * @type {?}
     */
    StDynamicTableComponent.prototype.statusFilter;
    /**
     * \@Input {number} [activeHoverMenu=] Position of the current active hover menu
     * @type {?}
     */
    StDynamicTableComponent.prototype.activeHoverMenu;
    /**
     * \@Input {boolean} [hasHoverMenu=] It specifies if a menu has to be displayed when user puts the mouse over
     * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
     * @type {?}
     */
    StDynamicTableComponent.prototype.hasHoverMenu;
    /**
     * \@Input {string} [hoverButton='icon-ellipsis'] It specifies the icon class of the hover button displayed when user puts mouse over a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.hoverButton;
    /**
     * \@Input {boolean} [selectedAll=] It specifies if all rows are selected
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectedAll;
    /**
     * \@Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.changeOrder;
    /**
     * \@Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
     * all rows
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectAll;
    /**
     * \@Output {EventEmitter<StTableHeader[]>} [fields=] Event emitted when header fields are being loaded
     * @type {?}
     */
    StDynamicTableComponent.prototype.updateFields;
    /**
     * \@Output {string} [clickFilter=] Event emitted when using filters custom template
     * @type {?}
     */
    StDynamicTableComponent.prototype.clickFilter;
    /**
     * \@Output {StTableHeader[]} [selectFilters=] Event emitted  when user interacts with filter button without a custom template
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectFilters;
    /**
     * \@Output {EventEmitter<number} [showHoverMenu=] Event emitted when user clicks on hover button of a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.showHoverMenu;
    /**
     * \@Output {Object(checked: boolean, row: number)} [selectRow=] Event emitted when user clicks on checkbox of a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.selectRow;
    /**
     * \@Output {Object(checked: boolean, row: number)} [clickCell=] Event emitted when user clicks on checkbox of a row
     * @type {?}
     */
    StDynamicTableComponent.prototype.clickCell;
    /**
     * \@Output {StDynamicTableFkEvent} [clickFk=] Event emitted when user clicks on Fk cell
     * @type {?}
     */
    StDynamicTableComponent.prototype.clickFk;
    /** @type {?} */
    StDynamicTableComponent.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._jsonSchema;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._uiDefinitions;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._templateContentFilter;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._fkSeparator;
    /**
     * @type {?}
     * @private
     */
    StDynamicTableComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dynamic-table/st-dynamic-table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDynamicTableModule = /** @class */ (function () {
    function StDynamicTableModule() {
    }
    StDynamicTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StTableModule, StCheckboxModule],
                    declarations: [StDynamicTableComponent],
                    exports: [StDynamicTableComponent]
                },] }
    ];
    return StDynamicTableModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-vertical-icon-tabs/st-vertical-icon-tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Vertical Icon Tabs]
 *
 * The vertical icon tabs component has been designed to display content in different sections.
 *
 * \@model
 *
 *   [Icon tab] {./st-icon-tabs.model.ts#StIconTab}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-vertical-icon-tabs class="vertical-icon-tabs"
 * [options]="options"
 * [activeOption]="active"
 * (changeOption)="onChangeOption($event)">
 * </st-vertical-icon-tabs>
 * ```
 *
 */
var StVerticalIconTabsComponent = /** @class */ (function () {
    function StVerticalIconTabsComponent() {
        /**
         * \@Output {StIconTab} [changeOption=] Event emitted when user clicks on an option
         */
        this.changeOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StVerticalIconTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.length > 0) {
            this.activateOption(this.options[0]);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StVerticalIconTabsComponent.prototype.isActive = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.activeOption === option;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StVerticalIconTabsComponent.prototype.activateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.changeOption.emit(option);
    };
    StVerticalIconTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-vertical-icon-tabs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<nav class=\"st-vertical-icon-tabs\">\n   <a *ngFor=\"let option of options\"\n      class=\"tab\"\n      href=\"javascript:void(0)\"\n      [ngClass]=\"{'tab--active': isActive(option)}\"\n      (click)=\"activateOption(option)\">\n      <i class=\"{{option.iconClass}}\"></i>\n      <span class=\"tab__text\">{{option.text}}</span>\n   </a>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";nav{display:flex;flex-direction:column;min-width:60px;height:100%}.tab{padding:12px 8px 12px 11px;text-align:center}.tab--active{width:101%;border-width:1px 0;border-style:solid;border-right:1px solid #fff}.tab:first-child.tab--active{border-top:none}.tab i{display:block;margin-bottom:6px}"]
                }] }
    ];
    StVerticalIconTabsComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        changeOption: [{ type: Output }]
    };
    return StVerticalIconTabsComponent;
}());
if (false) {
    /**
     * \@Input {StIconTab} [activeOption=] Active option
     * @type {?}
     */
    StVerticalIconTabsComponent.prototype.activeOption;
    /**
     * \@Input {StIconTab[]} [options=] Option list
     * @type {?}
     */
    StVerticalIconTabsComponent.prototype.options;
    /**
     * \@Output {StIconTab} [changeOption=] Event emitted when user clicks on an option
     * @type {?}
     */
    StVerticalIconTabsComponent.prototype.changeOption;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-vertical-icon-tabs/st-vertical-icon-tabs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StVerticalIconTabsModule = /** @class */ (function () {
    function StVerticalIconTabsModule() {
    }
    StVerticalIconTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [StVerticalIconTabsComponent],
                    exports: [StVerticalIconTabsComponent],
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return StVerticalIconTabsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/barrels.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DECLARATIONS = [
    PipesModule,
    StAlertsModule,
    StBreadcrumbsModule,
    StBubbleModule,
    StCheckboxModule,
    StColorPickerModule,
    StDocsModule,
    StDraggableCardModule,
    StDropdownMenuModule,
    StFileButtonModule,
    StFooterModule,
    StForegroundNotificationsModule,
    StFormDirectiveModule,
    StFormModule,
    StFormFieldModule,
    StFormListModule,
    StFullscreenLayoutModule,
    StHeaderModule,
    StHorizontalTabsModule,
    StInfoBoxModule,
    StInputModule,
    StItemListModule,
    StLabelModule,
    StLauncherModule,
    StModalModule,
    StModal2Module,
    StPageTitleModule,
    StPaginationModule,
    StPopModule,
    StPrismModule,
    StProgressBarModule,
    StPopOverModule,
    StRadioMenuModule,
    StRadioModule,
    StSearchModule,
    StSelectModule,
    StSidebarModule,
    StSpinnerModule,
    StSwitchModule,
    StDynamicTableModule,
    StTableModule,
    StTagInputModule,
    StTextareaModule,
    StToggleButtonsModule,
    StTooltipModule,
    StTwoListSelectionModule,
    StVerticalIconTabsModule,
    StVerticalTabsModule,
    StWidgetModule,
    StZeroPageModule
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/egeo.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var EgeoModule = /** @class */ (function () {
    function EgeoModule() {
    }
    /**
     * @return {?}
     */
    EgeoModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: EgeoModule,
            providers: [
                StModalService,
                StPaginationService,
                EgeoResolveService,
                SelectOneDispatcher,
                StAlertsService,
                StWindowRefService
            ]
        };
    };
    EgeoModule.decorators = [
        { type: NgModule, args: [{
                    imports: __spread([
                        CommonModule
                    ], DECLARATIONS),
                    declarations: [],
                    exports: __spread(DECLARATIONS)
                },] }
    ];
    return EgeoModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/st-regex.ts
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
// tslint:disable-next-line:no-namespace
var StRegEx;
(function (StRegEx) {
    'use strict';
    StRegEx.EMAIL = '[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,})';
})(StRegEx || (StRegEx = {}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [StBubbleOnEllipsis]
 *
 * This component displays a bubble below a content if its width is longer than container
 *
 * \@example
 *
 * {html}
 *
 * ```
 *      <st-bubble-on-ellipsis
 *         [text]="'Text for bubble'"
 *         [openToLeft]="true"
 *         [maxWidth]="'40%'">
 *          Any text
 *      </st-bubble-on-ellipsis>
 * ```
 */
var StBubbleOnEllipsisComponent = /** @class */ (function () {
    function StBubbleOnEllipsisComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {string} [lines=1] number of lines where ellipsis is placed
         */
        this.lines = 1;
    }
    Object.defineProperty(StBubbleOnEllipsisComponent.prototype, "openToLeft", {
        /** @Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right  */
        get: /**
         * \@Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right
         * @return {?}
         */
        function () {
            return this._openToLeft;
        },
        set: /**
         * @param {?} _openToLeft
         * @return {?}
         */
        function (_openToLeft) {
            this._openToLeft = _openToLeft;
            this.offset = this._openToLeft ? { x: 38, y: 7 } : { x: 0, y: 7 };
            this._cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StBubbleOnEllipsisComponent.prototype.onShowBubble = /**
     * @return {?}
     */
    function () {
        if (get(this.bubbleTrigger, 'nativeElement.parentElement.offsetWidth') < get(this.bubbleTrigger, 'nativeElement.parentElement.scrollWidth')
            || get(this.bubbleTrigger, 'nativeElement.parentElement.offsetHeight') < get(this.bubbleTrigger, 'nativeElement.parentElement.scrollHeight')) {
            this.visible = true;
        }
    };
    /**
     * @return {?}
     */
    StBubbleOnEllipsisComponent.prototype.onHideBubble = /**
     * @return {?}
     */
    function () {
        this.visible = false;
    };
    StBubbleOnEllipsisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-bubble-on-ellipsis',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<span class=\"bubble-trigger\" #bubbleTrigger\n      (mouseenter)=\"onShowBubble()\"\n      (mouseleave)=\"onHideBubble()\">\n   <ng-content>\n   </ng-content>\n</span>\n\n<st-bubble class=\"bubble\" [ngClass]=\"{'bubble--open-to-left': openToLeft}\"\n           [hidden]=\"!visible\"\n           [small]=\"true\"\n           [text]=\"text\"\n           [animation]=\"false\"\n           [showArrow]=\"true\"\n           [offset]=\"offset\"\n           [openToLeft]=\"openToLeft\"\n           [minWidth]=\"minWidth\"\n           [maxWidth]=\"maxWidth\"\n>\n   <span bubble-button></span>\n</st-bubble>\n\n",
                    host: {
                        '[class.multi-line]': 'lines > 1',
                        '[style.-webkit-line-clamp]': 'lines'
                    },
                    styles: ["@charset \"UTF-8\";:host{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host.multi-line{display:block;display:-webkit-box;word-break:break-word;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}.bubble-trigger{text-overflow:ellipsis}.bubble{display:block}.bubble--open-to-left{margin-left:50%}"]
                }] }
    ];
    /** @nocollapse */
    StBubbleOnEllipsisComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StBubbleOnEllipsisComponent.propDecorators = {
        text: [{ type: Input }],
        minWidth: [{ type: Input }],
        maxWidth: [{ type: Input }],
        lines: [{ type: Input }],
        bubbleTrigger: [{ type: ViewChild, args: ['bubbleTrigger', { static: false },] }],
        openToLeft: [{ type: Input }]
    };
    return StBubbleOnEllipsisComponent;
}());
if (false) {
    /**
     * \@Input {string} [text=] Text of the bubble
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.text;
    /**
     * \@Input {string} [minWidth=] min width for bubble
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.minWidth;
    /**
     * \@Input {string} [maxWidth=] max width for bubble
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.maxWidth;
    /**
     * \@Input {string} [lines=1] number of lines where ellipsis is placed
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.lines;
    /** @type {?} */
    StBubbleOnEllipsisComponent.prototype.bubbleTrigger;
    /** @type {?} */
    StBubbleOnEllipsisComponent.prototype.offset;
    /** @type {?} */
    StBubbleOnEllipsisComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    StBubbleOnEllipsisComponent.prototype._openToLeft;
    /**
     * @type {?}
     * @private
     */
    StBubbleOnEllipsisComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StBubbleOnEllipsisModule = /** @class */ (function () {
    function StBubbleOnEllipsisModule() {
    }
    StBubbleOnEllipsisModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StBubbleModule],
                    declarations: [StBubbleOnEllipsisComponent],
                    exports: [StBubbleOnEllipsisComponent]
                },] }
    ];
    return StBubbleOnEllipsisModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-filter-selector/st-filter-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Filter selector]
 *
 * The filter selector allows display a filter with a list of options
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-filter-selector
 *    [filterList]="filter"
 *    [openFilter]="openFilter"
 *    [selected]="selectedFilter"
 *    (clickFilter)="onFilter($event)"
 *    (changeFilterVisibility)="onChangeFilterVisibility()"
 *    (closeFilter)="onCloseFilter()">
 * </st-filter-selector>
 * ```
 *
 */
var StFilterSelectorComponent = /** @class */ (function () {
    function StFilterSelectorComponent() {
        /**
         * \@Input {boolean} [openFilter=false] This boolean is needed to specify the status of the filter (open or closed)
         */
        this.openFilter = false;
        /**
         * \@Input {boolean} [menuAlignedToRight=false] Boolean to indicate if menu has to be displayed aligned to the right
         */
        this.menuAlignedToRight = false;
        /**
         * \@Output {StDropDownMenuItem} [clickFilter=] Event emitted when an option is selected
         */
        this.clickFilter = new EventEmitter();
        /**
         * \@Output {boolean} [changeFilterVisibility=] Event emitted when visibility of options changes
         */
        this.changeFilterVisibility = new EventEmitter();
        /**
         * \@Output {boolean} [closeFilter=] Event emitted when option menu is closed
         */
        this.closeFilter = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
         */
        this.itemMouseEnter = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
         */
        this.itemMouseLeave = new EventEmitter();
        this.sectionMenuVisualMode = StDropDownVisualMode.MENU_LIST;
    }
    /**
     * @return {?}
     */
    StFilterSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuPlacement = this.menuAlignedToRight ? StPopPlacement.BOTTOM_END : StPopPlacement.BOTTOM_START;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.selected && _this.filterList && _this.filterList.length) {
                _this.clickFilter.emit(_this.filterList[0]);
            }
        }));
    };
    /**
     * @param {?} selectedFilter
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onClickFilter = /**
     * @param {?} selectedFilter
     * @return {?}
     */
    function (selectedFilter) {
        this.clickFilter.emit(selectedFilter);
    };
    /**
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onChangeFilterVisibility = /**
     * @return {?}
     */
    function () {
        this.changeFilterVisibility.emit(!this.openFilter);
    };
    /**
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onCloseFilter = /**
     * @return {?}
     */
    function () {
        this.closeFilter.emit(true);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onItemMouseEnter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseEnter.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onItemMouseLeave = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseLeave.emit(item);
    };
    StFilterSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-filter-selector',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a. All rights reserved.\n\n    This software \u2013 including all its source code \u2013 contains proprietary\n    information of Stratio Big Data Inc., Sucursal en Espa\u00F1a and\n    may not be revealed, sold, transferred, modified, distributed or\n    otherwise made available, licensed or sublicensed to third parties;\n    nor reverse engineered, disassembled or decompiled, without express\n    written authorization from Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n-->\n\n<st-dropdown-menu\n   class=\"st-filter-selector\"\n   [items]=\"filterList\"\n   [active]=\"openFilter\"\n   [placement]=\"menuPlacement\"\n   [openToLeft]=\"menuAlignedToRight\"\n   [visualMode]=\"sectionMenuVisualMode\"\n   (change)=\"onClickFilter($event)\"\n   (clickOutside)=\"onCloseFilter()\"\n   (itemMouseEnter)=\"onItemMouseEnter($event)\"\n   (itemMouseLeave)=\"onItemMouseLeave($event)\">\n   <div (click)=\"onChangeFilterVisibility()\" class=\"filter-title\">\n      <span>{{ selected?.label }}</span>\n      <i class=\"icon-arrow2_down arrow\"></i>\n   </div>\n</st-dropdown-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-filter-selector{position:relative;display:inline-block;cursor:pointer;text-align:left}.st-filter-selector .filter-title{display:inline-flex;padding-bottom:10px}.st-filter-selector .filter-title>span{padding-right:10px}.st-filter-selector .filter-title>i{vertical-align:middle}"]
                }] }
    ];
    StFilterSelectorComponent.propDecorators = {
        openFilter: [{ type: Input }],
        filterList: [{ type: Input }],
        selected: [{ type: Input }],
        menuAlignedToRight: [{ type: Input }],
        clickFilter: [{ type: Output }],
        changeFilterVisibility: [{ type: Output }],
        closeFilter: [{ type: Output }],
        itemMouseEnter: [{ type: Output }],
        itemMouseLeave: [{ type: Output }]
    };
    return StFilterSelectorComponent;
}());
if (false) {
    /**
     * \@Input {boolean} [openFilter=false] This boolean is needed to specify the status of the filter (open or closed)
     * @type {?}
     */
    StFilterSelectorComponent.prototype.openFilter;
    /**
     * \@Input {StDropDownMenuItem[]} [filterList=] List of options
     * @type {?}
     */
    StFilterSelectorComponent.prototype.filterList;
    /**
     * \@Input {StDropDownMenuItem} [selected=] Selected option
     * @type {?}
     */
    StFilterSelectorComponent.prototype.selected;
    /**
     * \@Input {boolean} [menuAlignedToRight=false] Boolean to indicate if menu has to be displayed aligned to the right
     * @type {?}
     */
    StFilterSelectorComponent.prototype.menuAlignedToRight;
    /**
     * \@Output {StDropDownMenuItem} [clickFilter=] Event emitted when an option is selected
     * @type {?}
     */
    StFilterSelectorComponent.prototype.clickFilter;
    /**
     * \@Output {boolean} [changeFilterVisibility=] Event emitted when visibility of options changes
     * @type {?}
     */
    StFilterSelectorComponent.prototype.changeFilterVisibility;
    /**
     * \@Output {boolean} [closeFilter=] Event emitted when option menu is closed
     * @type {?}
     */
    StFilterSelectorComponent.prototype.closeFilter;
    /**
     * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
     * @type {?}
     */
    StFilterSelectorComponent.prototype.itemMouseEnter;
    /**
     * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
     * @type {?}
     */
    StFilterSelectorComponent.prototype.itemMouseLeave;
    /** @type {?} */
    StFilterSelectorComponent.prototype.sectionMenuVisualMode;
    /** @type {?} */
    StFilterSelectorComponent.prototype.menuPlacement;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-filter-selector/st-filter-selector.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StFilterSelectorModule = /** @class */ (function () {
    function StFilterSelectorModule() {
    }
    StFilterSelectorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StDropdownMenuModule, StClickOutsideModule],
                    declarations: [StFilterSelectorComponent],
                    exports: [StFilterSelectorComponent]
                },] }
    ];
    return StFilterSelectorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-menu/st-menu.model.ts
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
/**
 * @record
 * @template T
 */
function StMenuModel() { }
if (false) {
    /** @type {?} */
    StMenuModel.prototype.name;
    /** @type {?} */
    StMenuModel.prototype.value;
    /** @type {?|undefined} */
    StMenuModel.prototype.icon;
    /** @type {?|undefined} */
    StMenuModel.prototype.subMenus;
    /** @type {?|undefined} */
    StMenuModel.prototype.separator;
    /** @type {?|undefined} */
    StMenuModel.prototype.status;
    /** @type {?|undefined} */
    StMenuModel.prototype.disabled;
}
/** @enum {string} */
var StMenuStatus = {
    success: "success",
    warning: "warning",
    critical: "critical",
};
/** @enum {string} */
var StMenuPosition = {
    left: "left",
    right: "right",
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-menu/st-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} Menu
 *
 * This components shows a dropdown menu with nested submenus
 *
 * \@model
 *
 *   [Menu model] {./st-menu.model.ts#StMenuModel}
 *   [Menu status] {./st-menu.model.ts#StMenuStatus}
 *   [Menu position] {./st-menu.model.ts#StMenuPosition}
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-menu
 *       qaTag="menu-example"
 *       [menuOptions]="options"
 *       [dynamicHeight]="true"
 *       (selectedOption)="onSelectMenuOption(event)">
 *    </st-menu>
 * ```
 * @template T
 */
var StMenuComponent = /** @class */ (function () {
    function StMenuComponent(_cd) {
        this._cd = _cd;
        /**
         * \@input {StMenuPosition} current menu position: left | right
         */
        this.position = StMenuPosition.right;
        /**
         * \@input {string} search input custom label
         */
        this.searchLabel = 'Search';
        /**
         * \@input {boolean} shows menu dropdown animation
         */
        this.animate = true;
        /**
         * \@input {boolean} disable menu toggle
         */
        this.disabled = false;
        /**
         * \@output {StMenuModel<T>} [selectedOption=''] Notify the selected menu option
         */
        this.selectedOption = new EventEmitter();
        /**
         * \@output {string} [searchChange=''] Notify when the search input value changes
         */
        this.searchChange = new EventEmitter();
        this.showMenu = false;
    }
    /**
     * @return {?}
     */
    StMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.search) {
            this.searchFormControl = new FormControl('');
            this._formControlSubscription = this.searchFormControl.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.searchChange.emit(value);
            }));
        }
    };
    /**
     * @return {?}
     */
    StMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._formControlSubscription) {
            this._formControlSubscription.unsubscribe();
        }
    };
    /**
     * Toggle menu activation
     * @param event
     */
    /**
     * Toggle menu activation
     * @param {?} event
     * @return {?}
     */
    StMenuComponent.prototype.activateMenu = /**
     * Toggle menu activation
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.showMenu) {
            this.hideMenu();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.showMenu = true;
                _this._cd.markForCheck();
            }));
        }
    };
    /**
     * Emits the selected menu option from childs
     * @param event: StMenuModel<T>
     */
    /**
     * Emits the selected menu option from childs
     * @param {?} event
     * @return {?}
     */
    StMenuComponent.prototype.selectedMenuOption = /**
     * Emits the selected menu option from childs
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectedOption.emit(event);
        this.hideMenu();
    };
    /**
     * Hides the menu and reset the search input value if it's enabled
     */
    /**
     * Hides the menu and reset the search input value if it's enabled
     * @return {?}
     */
    StMenuComponent.prototype.hideMenu = /**
     * Hides the menu and reset the search input value if it's enabled
     * @return {?}
     */
    function () {
        this.showMenu = false;
        if (this.searchFormControl) {
            this.searchFormControl.setValue('');
        }
        this._cd.markForCheck();
    };
    StMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-menu',
                    template: "<div class=\"st-menu\" [ngClass]=\"{'st-menu--disabled': disabled}\">\n  <div class=\"st-menu__action\">\n    <div class=\"st-menu__link\"\n      [ngClass]=\"{'st-menu__button--disabled': disabled}\"\n      [id]=\"qaTag\"\n      (click)=\"!disabled && activateMenu($event)\" >\n      <ng-content></ng-content>\n    </div>\n    <div class=\"st-menu__options\"\n      *ngIf=\"showMenu\"\n      clickOutside\n      (clickOutside)=\"hideMenu()\"\n      [ngClass]=\"{'st-menu__options--left': position === 'left'}\">\n      <st-menu-options\n        [searchFormControl]=\"searchFormControl\"\n        [searchLabel]=\"searchLabel\"\n        [menuOptions]=\"menuOptions\"\n        [animate]=\"animate\"\n        [dynamicHeight]=\"dynamicHeight\"\n        [activeOption]=\"activeOption\"\n        [position]=\"position\"\n        [marginTop]=\"marginTop\"\n        [qaTag]=\"qaTag\"\n        (selectedOption)=\"selectedMenuOption($event)\"></st-menu-options>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:inline-block}.st-menu__action{position:relative;display:inline-block}.st-menu__link{cursor:pointer;display:inline-block;position:relative}.st-menu__options{position:absolute;z-index:7500;-webkit-transform:translate3d(0,0,0);top:0;height:100%;margin-top:5px}.st-menu__options--left{right:0}.st-menu--disabled{cursor:not-allowed}.st-menu__button--disabled{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    StMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StMenuComponent.propDecorators = {
        qaTag: [{ type: Input }],
        menuOptions: [{ type: Input }],
        activeOption: [{ type: Input }],
        position: [{ type: Input }],
        search: [{ type: Input }],
        searchLabel: [{ type: Input }],
        dynamicHeight: [{ type: Input }],
        marginTop: [{ type: Input }],
        animate: [{ type: Input }],
        disabled: [{ type: Input }],
        selectedOption: [{ type: Output }],
        searchChange: [{ type: Output }]
    };
    return StMenuComponent;
}());
if (false) {
    /**
     * \@input {string} [qaTag=''] For set id for tests
     * @type {?}
     */
    StMenuComponent.prototype.qaTag;
    /**
     * \@input {StMenuModel<T>[]} list of menu items to show
     * @type {?}
     */
    StMenuComponent.prototype.menuOptions;
    /**
     * \@input {any} current selected option
     * @type {?}
     */
    StMenuComponent.prototype.activeOption;
    /**
     * \@input {StMenuPosition} current menu position: left | right
     * @type {?}
     */
    StMenuComponent.prototype.position;
    /**
     * \@input {boolean} show search input
     * @type {?}
     */
    StMenuComponent.prototype.search;
    /**
     * \@input {string} search input custom label
     * @type {?}
     */
    StMenuComponent.prototype.searchLabel;
    /**
     * \@input {boolean} Show menu in full height mode
     * @type {?}
     */
    StMenuComponent.prototype.dynamicHeight;
    /**
     * \@input {number} adjust menu options position
     * @type {?}
     */
    StMenuComponent.prototype.marginTop;
    /**
     * \@input {boolean} shows menu dropdown animation
     * @type {?}
     */
    StMenuComponent.prototype.animate;
    /**
     * \@input {boolean} disable menu toggle
     * @type {?}
     */
    StMenuComponent.prototype.disabled;
    /**
     * \@output {StMenuModel<T>} [selectedOption=''] Notify the selected menu option
     * @type {?}
     */
    StMenuComponent.prototype.selectedOption;
    /**
     * \@output {string} [searchChange=''] Notify when the search input value changes
     * @type {?}
     */
    StMenuComponent.prototype.searchChange;
    /** @type {?} */
    StMenuComponent.prototype.showMenu;
    /** @type {?} */
    StMenuComponent.prototype.searchFormControl;
    /**
     * @type {?}
     * @private
     */
    StMenuComponent.prototype._formControlSubscription;
    /**
     * @type {?}
     * @private
     */
    StMenuComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-menu/st-menu-options/st-menu-options.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var StMenuOptionsComponent = /** @class */ (function () {
    function StMenuOptionsComponent(_cd) {
        this._cd = _cd;
        this.position = StMenuPosition.right;
        this.level = 0;
        this.animate = true;
        this.searchBox = new EventEmitter();
        this.selectedOption = new EventEmitter();
        this.initialized = false;
        this.scrollTop = 0;
        this._scrollSubject = new Subject();
        this._SCROLL_SPEED = 120; // px per second
        // px per second
        this._SCROLL_SPEED_MILLIS = this._SCROLL_SPEED / 1000; // px per millisecond
    }
    /**
     * @return {?}
     */
    StMenuOptionsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dynamicHeight) {
            this._checkScrollButtons();
        }
        this.initialized = true;
        this._cd.detectChanges();
        this._scrollSubscription = this._scrollSubject
            .pipe(debounceTime(50))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._checkScrollButtons(); }));
    };
    /**
     * @return {?}
     */
    StMenuOptionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        cancelAnimationFrame(this._scrollAnimationHandler);
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
        }
    };
    /**
     * Set the submenu position when an option is hovered
     *
     * @param event MouseEnter event when an option is hovered
     * @param item Hovered item of the list
     */
    /**
     * Set the submenu position when an option is hovered
     *
     * @param {?} event MouseEnter event when an option is hovered
     * @param {?} item Hovered item of the list
     * @return {?}
     */
    StMenuOptionsComponent.prototype.showMenu = /**
     * Set the submenu position when an option is hovered
     *
     * @param {?} event MouseEnter event when an option is hovered
     * @param {?} item Hovered item of the list
     * @return {?}
     */
    function (event, item) {
        if (this.openedItem !== item && (!this.activeOption || this.activeOption.value !== item)) {
            this.openedItem = item;
            if (item.subMenus) {
                /** @type {?} */
                var target = (/** @type {?} */ (event.target));
                this.menuPosition = target.offsetTop;
                if (this.dynamicHeight) {
                    this.maxHeightChild = window.innerHeight - target.getBoundingClientRect().top - 30;
                }
            }
        }
    };
    /**
     * Saves current scroll position and check the scroll buttons state
     */
    /**
     * Saves current scroll position and check the scroll buttons state
     * @return {?}
     */
    StMenuOptionsComponent.prototype.onScroll = /**
     * Saves current scroll position and check the scroll buttons state
     * @return {?}
     */
    function () {
        this.scrollTop = this.childListElement.nativeElement.scrollTop;
        if (this.dynamicHeight) {
            this._scrollSubject.next();
        }
    };
    /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param index
     * @param item
     */
    /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    StMenuOptionsComponent.prototype.trackByFn = /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.name + (item.icon || '');
    };
    /**
     * Starts a scroll animation frame
     * @param reverse
     */
    /**
     * Starts a scroll animation frame
     * @param {?} reverse
     * @return {?}
     */
    StMenuOptionsComponent.prototype.scrollTo = /**
     * Starts a scroll animation frame
     * @param {?} reverse
     * @return {?}
     */
    function (reverse) {
        var _this = this;
        /** @type {?} */
        var startScrollAnimationTime = new Date().getTime();
        // initial animation time in milliseconds
        /** @type {?} */
        var startScrollAnimationPosition = this.childListElement.nativeElement.scrollTop;
        this.openedItem = null;
        this._scrollAnimationHandler = requestAnimationFrame((/**
         * @return {?}
         */
        function () { return _this._scrollAnimation(reverse, startScrollAnimationTime, startScrollAnimationPosition); }));
    };
    /**
     * Stop current scroll animation frame
     */
    /**
     * Stop current scroll animation frame
     * @return {?}
     */
    StMenuOptionsComponent.prototype.stopScroll = /**
     * Stop current scroll animation frame
     * @return {?}
     */
    function () {
        cancelAnimationFrame(this._scrollAnimationHandler);
    };
    /**
     * Clear the search input value
     */
    /**
     * Clear the search input value
     * @return {?}
     */
    StMenuOptionsComponent.prototype.removeSearch = /**
     * Clear the search input value
     * @return {?}
     */
    function () {
        this.searchFormControl.setValue('');
    };
    /**
     * Check the selected option and emits if it's valid
     * @param event
     * @param item
     */
    /**
     * Check the selected option and emits if it's valid
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    StMenuOptionsComponent.prototype.onSelectOption = /**
     * Check the selected option and emits if it's valid
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        if ((!item.subMenus || !item.subMenus.length) && (!this.activeOption || this.activeOption !== item.value)) {
            this.selectedOption.emit(item);
        }
        else {
            // Prevents close menu
            event.stopPropagation();
        }
    };
    /**
     * Generates menu item id
     * @param item
     */
    /**
     * Generates menu item id
     * @param {?} item
     * @return {?}
     */
    StMenuOptionsComponent.prototype.getItemId = /**
     * Generates menu item id
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return (item.icon || '') + item.name.replace(/\W/g, '_') + '-option';
    };
    /**
     * Recursive scroll animation frame method
     * @param reverse sense of the scroll animation
     */
    /**
     * Recursive scroll animation frame method
     * @private
     * @param {?} reverse sense of the scroll animation
     * @param {?} startScrollAnimationTime
     * @param {?} startScrollAnimationPosition
     * @return {?}
     */
    StMenuOptionsComponent.prototype._scrollAnimation = /**
     * Recursive scroll animation frame method
     * @private
     * @param {?} reverse sense of the scroll animation
     * @param {?} startScrollAnimationTime
     * @param {?} startScrollAnimationPosition
     * @return {?}
     */
    function (reverse, startScrollAnimationTime, startScrollAnimationPosition) {
        var _this = this;
        /** @type {?} */
        var current = new Date().getTime();
        /** @type {?} */
        var runtime = current - startScrollAnimationTime;
        // initialPosition in px + (reverse: negative or positive sense * millis from animation start * px per millis)
        /** @type {?} */
        var position = startScrollAnimationPosition + ((reverse ? 1 : -1) * runtime * this._SCROLL_SPEED_MILLIS);
        this.childListElement.nativeElement.scrollTo(0, position);
        this._scrollAnimationHandler = requestAnimationFrame((/**
         * @return {?}
         */
        function () { return _this._scrollAnimation(reverse, startScrollAnimationTime, startScrollAnimationPosition); }));
    };
    /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     */
    /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     * @private
     * @return {?}
     */
    StMenuOptionsComponent.prototype._checkScrollButtons = /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollList = this.childListElement.nativeElement;
        this.scrollTopEnabled = scrollList.scrollTop > 0;
        this.scrollBottomEnabled = scrollList.getBoundingClientRect().height + scrollList.scrollTop < scrollList.scrollHeight - 1;
        this._cd.markForCheck();
    };
    StMenuOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-menu-options',
                    template: "<div class=\"st-menu-options\"\n   [style.marginTop.px]=\"marginTop\"\n   [ngClass]=\"{\n      'st-menu-options--left': position === 'left',\n      'st-menu-options--initilized': initialized\n   }\">\n\n   <div class=\"scroll-button scroll-button--top\"\n      *ngIf=\"dynamicHeight\"\n      [style.opacity]=\"scrollTopEnabled ? 1 : 0\"\n      (mouseover)=\"scrollTo(false)\"\n      (mouseout)=\"stopScroll()\">\n      <span class=\"icon-arrow2_up\"></span>\n   </div>\n\n   <div class=\"st-menu-options__container\"\n    [ngClass]=\"{\n      'st-menu-options__container--animation': animate && level === 0\n    }\">\n    <ul class=\"st-menu-options__list st-custom-scrollbar\"\n      #childList\n      [style.maxHeight.px]=\"maxHeight\"\n      (scroll)=\"onScroll()\">\n\n      <li class=\"st-menu-options__item st-menu-options__search\" *ngIf=\"searchFormControl\">\n        <input class=\"st-menu-options__input\"\n          [attr.id]=\"qaTag + '-search'\"\n          type=\"text\"\n          autocomplete=\"off\"\n          [formControl]=\"searchFormControl\"\n          [placeholder]=\"searchLabel\" />\n        <span class=\"st-menu-options__delete icon-cross\"\n          (click)=\"removeSearch()\"\n          *ngIf=\"searchFormControl.value.length\"></span>\n      </li>\n\n      <li class=\"st-menu-options__item\"\n        *ngFor=\"let item of menuOptions; let i = index; trackBy: trackByFn\"\n        [ngClass]=\"{\n          'st-menu-options__item--active' : openedItem === item,\n          'disabled' : (activeOption && activeOption === item.value) || item.disabled,\n          'st-menu-options__item--success' : item.status === 'success',\n          'st-menu-options__item--warning' : item.status === 'warning',\n          'st-menu-options__item--critical' : item.status === 'critical',\n          'separator': item.separator\n        }\"\n        [attr.id]=\"getItemId(item)\"\n        (click)=\"!item.disabled && onSelectOption($event, item)\"\n        (mouseenter)=\"showMenu($event, item)\">\n\n        <div class=\"item-content\">\n          <i *ngIf=\"item.icon\" [ngClass]=\"item.icon\" class=\"item-icon\"></i>\n          <span class=\"label\">{{item.name}}</span>\n          <i class=\"icon icon-arrow2_right has-submenu\" *ngIf=\"item.subMenus && item.subMenus.length\"></i>\n        </div>\n\n        <st-menu-options\n          *ngIf=\"item.subMenus && item.subMenus.length && openedItem === item\"\n          [style.top.px]=\"menuPosition - scrollTop\"\n          [menuOptions]=\"item.subMenus\"\n          [position]=\"position\"\n          [maxHeight]=\"maxHeightChild\"\n          [activeOption]=\"activeOption\"\n          [dynamicHeight]=\"dynamicHeight\"\n          [level]=\"level + 1\"\n          (selectedOption)=\"selectedOption.emit($event)\"\n          class=\"st-menu-options__submenu\">\n        </st-menu-options>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"scroll-button scroll-button--bottom\"\n    *ngIf=\"dynamicHeight\"\n    [style.opacity]=\"scrollBottomEnabled ? 1 : 0\"\n    (mouseover)=\"scrollTo(true)\"\n    (mouseout)=\"stopScroll()\">\n    <span class=\"icon-arrow2_down\"></span>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-menu-options{background-color:#fff;font-size:.938rem;left:100%;position:absolute;margin-bottom:2.5rem;visibility:hidden;top:100%;-webkit-transform:translate3d(0,0,0)}.st-menu-options--left{right:100%;left:auto}.st-menu-options--initilized{visibility:visible}.st-menu-options__container{overflow:hidden;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,.5);border-radius:5px}.st-menu-options__container--animation{-webkit-animation:.25s ease-out fadeInFromNone;animation:.25s ease-out fadeInFromNone}.st-menu-options__search{border-bottom:1px solid #cfcfcf;margin:0;padding:0;position:relative}.st-menu-options__input{outline:0;width:100%;min-width:12.5rem}.st-menu-options__delete{position:absolute;right:.625rem;cursor:pointer;top:.6875rem}.st-menu-options__submenu{position:absolute;width:100%;left:0;top:0;margin-left:0}.st-menu-options__submenu.active{visibility:visible}.st-menu-options__list{list-style:none;top:0;left:0;width:100%;background:#fff;min-width:100%;overflow-y:auto;overflow-x:hidden}.st-menu-options__item{color:#585858;cursor:pointer;font-size:.875rem;justify-content:space-between;padding:.75rem .5rem .6875rem 1.25rem;-webkit-tap-highlight-color:transparent}.st-menu-options__item>div{display:flex;flex-direction:row}.st-menu-options__item>div .label{padding-right:.75rem;white-space:nowrap;font-size:.9375rem;line-height:1.25rem}.st-menu-options__item .has-submenu{font-size:.6875rem;margin-top:5px;margin-left:auto}.st-menu-options__item .item-icon{font-size:.8125rem;margin-right:.375rem;margin-top:.1875rem;color:#a0a0a0}.st-menu-options__item>span{white-space:nowrap}.st-menu-options__item--active{background-color:#e6f1fc;visibility:visible}.st-menu-options__item--active>.item-content .icon.has-submenu,.st-menu-options__item--active>.item-content .item-icon{color:var(--egeo-theme-brand,#37b5e4)}.st-menu-options__item--success,.st-menu-options__item--success>.item-content .item-icon{color:#0776df}.st-menu-options__item--warning,.st-menu-options__item--warning>.item-content .item-icon{color:#fa932f}.st-menu-options__item--critical,.st-menu-options__item--critical>.item-content .item-icon{color:#df2935}.st-menu-options__item.disabled{color:#b8b8b8!important}.st-menu-options__item.separator{border-top:1px solid #cdd6df}.scroll-button{background:#fff;color:#6c7b8b;border:1px solid #cfcfcf;font-size:.625rem;margin-left:-1px;padding:1px 0 0;position:absolute;text-align:center;width:calc(100% + 2px);z-index:1}.scroll-button--top{top:-.875rem}.scroll-button--bottom{bottom:-.9375rem}@-webkit-keyframes fadeInFromNone{0%{max-height:0}100%{display:block;max-height:18.75rem}}@keyframes fadeInFromNone{0%{max-height:0}100%{display:block;max-height:18.75rem}}"]
                }] }
    ];
    /** @nocollapse */
    StMenuOptionsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StMenuOptionsComponent.propDecorators = {
        maxHeight: [{ type: Input }],
        dynamicHeight: [{ type: Input }],
        activeOption: [{ type: Input }],
        menuOptions: [{ type: Input }],
        position: [{ type: Input }],
        searchFormControl: [{ type: Input }],
        searchLabel: [{ type: Input }],
        level: [{ type: Input }],
        marginTop: [{ type: Input }],
        animate: [{ type: Input }],
        qaTag: [{ type: Input }],
        searchBox: [{ type: Output }],
        selectedOption: [{ type: Output }],
        childListElement: [{ type: ViewChild, args: ['childList', { static: false },] }]
    };
    return StMenuOptionsComponent;
}());
if (false) {
    /** @type {?} */
    StMenuOptionsComponent.prototype.maxHeight;
    /** @type {?} */
    StMenuOptionsComponent.prototype.dynamicHeight;
    /** @type {?} */
    StMenuOptionsComponent.prototype.activeOption;
    /** @type {?} */
    StMenuOptionsComponent.prototype.menuOptions;
    /** @type {?} */
    StMenuOptionsComponent.prototype.position;
    /** @type {?} */
    StMenuOptionsComponent.prototype.searchFormControl;
    /** @type {?} */
    StMenuOptionsComponent.prototype.searchLabel;
    /** @type {?} */
    StMenuOptionsComponent.prototype.level;
    /** @type {?} */
    StMenuOptionsComponent.prototype.marginTop;
    /** @type {?} */
    StMenuOptionsComponent.prototype.animate;
    /** @type {?} */
    StMenuOptionsComponent.prototype.qaTag;
    /** @type {?} */
    StMenuOptionsComponent.prototype.searchBox;
    /** @type {?} */
    StMenuOptionsComponent.prototype.selectedOption;
    /** @type {?} */
    StMenuOptionsComponent.prototype.childListElement;
    /** @type {?} */
    StMenuOptionsComponent.prototype.openedItem;
    /** @type {?} */
    StMenuOptionsComponent.prototype.menuPosition;
    /** @type {?} */
    StMenuOptionsComponent.prototype.maxHeightChild;
    /** @type {?} */
    StMenuOptionsComponent.prototype.scrollTopEnabled;
    /** @type {?} */
    StMenuOptionsComponent.prototype.scrollBottomEnabled;
    /** @type {?} */
    StMenuOptionsComponent.prototype.initialized;
    /** @type {?} */
    StMenuOptionsComponent.prototype.scrollTop;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._scrollAnimationHandler;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._scrollSubject;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._scrollSubscription;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._SCROLL_SPEED;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._SCROLL_SPEED_MILLIS;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-menu/st-menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StMenuModule = /** @class */ (function () {
    function StMenuModule() {
    }
    StMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        StClickOutsideModule
                    ],
                    declarations: [
                        StMenuComponent,
                        StMenuOptionsComponent
                    ],
                    exports: [
                        StMenuComponent
                    ]
                },] }
    ];
    return StMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag/st-tag.model.ts
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
var StTagItem = /** @class */ (function () {
    function StTagItem() {
    }
    return StTagItem;
}());
if (false) {
    /** @type {?} */
    StTagItem.prototype.id;
    /** @type {?} */
    StTagItem.prototype.text;
    /** @type {?} */
    StTagItem.prototype.icon;
    /** @type {?} */
    StTagItem.prototype.bubble;
    /* Skipping unhandled member: [key: string]: any;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag/st-tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description {Component} [Tag]
 *
 * The tag component allows to display small texts.
 *
 * \@model
 *
 *   [StTagItem] {./st-tag.model.ts#StTagItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 *  <st-tag [tag]="simpleTag" class="small" [removable]="true"></st-tag>
 *
 * ```
 *
 */
var StTagComponent = /** @class */ (function () {
    function StTagComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [clickable=true] Boolean to set tag as clicklable or not
         */
        this.clickable = true;
        /**
         * \@Output {StTagItem} [remove=] Even emitted when cross icon is clicked
         */
        this.remove = new EventEmitter();
        /**
         * \@Output {StTagItem} [click=] Event emitted when tag is clicked
         */
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StTagComponent.prototype.onRemove = /**
     * @return {?}
     */
    function () {
        this.remove.emit(this.tag);
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    StTagComponent.prototype.onClick = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.click.emit(filter);
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    StTagComponent.prototype.onChangeBubbleVisibility = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this.showBubble = visible;
        this._cd.markForCheck();
    };
    StTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-tag',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div (click)=\"onClick(tag)\"\n     (mouseenter)=\"onChangeBubbleVisibility(true)\"\n     (mouseleave)=\"onChangeBubbleVisibility(false)\">\n\n   <div class=\"st-tag__text\"><span *ngIf=\"tag.icon\" class=\"st-tag__icon {{tag.icon}}\"></span>{{tag.text}}</div>\n\n   <span *ngIf=\"removable\" (click)=\"onRemove()\"\n         class=\"st-tag__remove-button\"><i class=\"icon-cross\"></i>\n   </span>\n   <st-bubble *ngIf=\"tag.bubble\" class=\"st-tag__bubble-container\"\n              [animation]=\"false\"\n              [showArrow]=\"true\"\n              [small]=\"true\"\n              [offset]=\"{x: 20, y: 5}\"\n              [hidden]=\"!showBubble\"\n              [text]=\"tag.bubble\">\n      <span bubble-button></span>\n   </st-bubble>\n</div>\n",
                    host: { 'class': 'st-tag' },
                    styles: ["@charset \"UTF-8\";:host{display:block;vertical-align:middle;border-radius:4px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;padding:0 10px;text-align:center;position:relative}:host .st-tag__bubble-container{position:absolute;bottom:0}:host .st-tag__text{height:100%;display:inline-block}:host .st-tag__icon{margin-right:5px}:host .st-tag__remove-button{display:inline-flex;align-items:center;justify-self:right;cursor:pointer;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    StTagComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTagComponent.propDecorators = {
        tag: [{ type: Input }],
        removable: [{ type: HostBinding, args: ['class.st-tag--removable',] }, { type: Input }],
        clickable: [{ type: HostBinding, args: ['class.st-tag--clickable',] }, { type: Input }],
        remove: [{ type: Output }],
        click: [{ type: Output }]
    };
    return StTagComponent;
}());
if (false) {
    /**
     * \@Input {StTagItem} [tag=] Item that contains the tag info
     * @type {?}
     */
    StTagComponent.prototype.tag;
    /**
     * \@Input {boolean} [removable=] Boolean to display or not the cross icon to remove tag
     * @type {?}
     */
    StTagComponent.prototype.removable;
    /**
     * \@Input {boolean} [clickable=true] Boolean to set tag as clicklable or not
     * @type {?}
     */
    StTagComponent.prototype.clickable;
    /**
     * \@Output {StTagItem} [remove=] Even emitted when cross icon is clicked
     * @type {?}
     */
    StTagComponent.prototype.remove;
    /**
     * \@Output {StTagItem} [click=] Event emitted when tag is clicked
     * @type {?}
     */
    StTagComponent.prototype.click;
    /** @type {?} */
    StTagComponent.prototype.showBubble;
    /**
     * @type {?}
     * @private
     */
    StTagComponent.prototype._cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag/st-tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StTagModule = /** @class */ (function () {
    function StTagModule() {
    }
    StTagModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        StBubbleModule
                    ],
                    declarations: [
                        StTagComponent
                    ],
                    exports: [StTagComponent]
                },] }
    ];
    return StTagModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoGeneratorProviders = /** @class */ (function () {
    function DemoGeneratorProviders() {
    }
    return DemoGeneratorProviders;
}());
if (false) {
    /** @type {?} */
    DemoGeneratorProviders.prototype.components;
    /** @type {?} */
    DemoGeneratorProviders.prototype.inputs;
    /** @type {?} */
    DemoGeneratorProviders.prototype.outputs;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDemoGenerator = /** @class */ (function () {
    function StDemoGenerator(cfr, config) {
        this.cfr = cfr;
        this.config = config;
        this.inputs = config.inputs;
        this.outputs = config.outputs;
        this.component = config.components[0];
    }
    /** DYNAMIC BODY DEMO COMPONENT LOAD */
    /**
     * DYNAMIC BODY DEMO COMPONENT LOAD
     * @return {?}
     */
    StDemoGenerator.prototype.ngOnDestroy = /**
     * DYNAMIC BODY DEMO COMPONENT LOAD
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    StDemoGenerator.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.loadDemo();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StDemoGenerator.prototype.loadDemo = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.componentRef) {
            this.target.clear();
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(this.component);
            this.componentRef = this.target.createComponent(compFactory);
            this.bindDemoInputsAndOutputs();
        }
    };
    // tslint:disable:
    // tslint:disable:
    /**
     * @private
     * @return {?}
     */
    StDemoGenerator.prototype.bindDemoInputsAndOutputs = 
    // tslint:disable:
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Inputs its not necessary to be defined
        if (this.inputs) {
            Object.keys(this.inputs).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.componentRef.instance[key] = ((/** @type {?} */ (_this.inputs)))[key]; }));
        }
        // Inputs must be defined for subscribe to them
        if (this.outputs) {
            Object.keys(this.outputs).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (((/** @type {?} */ (_this.componentRef.instance))).hasOwnProperty(key)) {
                    _this.componentRef.instance[key].subscribe(((/** @type {?} */ (_this.outputs)))[key]);
                }
            }));
        }
        this.componentRef.changeDetectorRef.detectChanges();
    };
    StDemoGenerator.decorators = [
        { type: Component, args: [{
                    selector: 'st-demo-body',
                    template: '<div #stDemoBody></div>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n         width: 100%;\n         display: block;\n      }\n   "]
                }] }
    ];
    /** @nocollapse */
    StDemoGenerator.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DemoGeneratorProviders }
    ]; };
    StDemoGenerator.propDecorators = {
        target: [{ type: ViewChild, args: ['stDemoBody', { read: ViewContainerRef, static: false },] }]
    };
    return StDemoGenerator;
}());
if (false) {
    /** @type {?} */
    StDemoGenerator.prototype.target;
    /** @type {?} */
    StDemoGenerator.prototype.inputs;
    /** @type {?} */
    StDemoGenerator.prototype.outputs;
    /** @type {?} */
    StDemoGenerator.prototype.component;
    /**
     * @type {?}
     * @private
     */
    StDemoGenerator.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    StDemoGenerator.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    StDemoGenerator.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.routing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var routes = [
    { path: '', component: StDemoGenerator }
];
/** @type {?} */
var routing = RouterModule.forChild(routes);

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StDemoGeneratorModule = /** @class */ (function () {
    function StDemoGeneratorModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StDemoGeneratorModule.withComponents = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: StDemoGeneratorModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config.components, multi: true },
                { provide: DemoGeneratorProviders, useValue: config }
            ]
        };
    };
    StDemoGeneratorModule.decorators = [
        { type: NgModule, args: [{
                    id: 'Demo-factory',
                    imports: [CommonModule, routing],
                    exports: [StDemoGenerator],
                    declarations: [StDemoGenerator],
                    entryComponents: [StDemoGenerator],
                    providers: []
                },] }
    ];
    return StDemoGeneratorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: stratio-egeo.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EgeoModule, EgeoResolveService, EgeoUtils, EventWindowManager, ORDER_TYPE, Order, PipesModule, RadioChange, STALERT_SEVERITY, SelectOneDispatcher, StAlert, StAlertBoxComponent, StAlertBoxModule, StAlertLink, StAlertsComponent, StAlertsModule, StAlertsService, StBreadCrumbItem, StBreadCrumbMode, StBreadCrumbsComponent, StBreadcrumbItemComponent, StBreadcrumbsModule, StBubbleComponent, StBubbleModule, StBubbleOnEllipsisComponent, StBubbleOnEllipsisModule, StCheckValidationsDirective, StCheckboxComponent, StCheckboxModule, StClickOutside, StClickOutsideModule, StColorPickerComponent, StColorPickerModule, StDemoGenerator, StDemoGeneratorModule, StDeprecated, StDocsComponent, StDocsModule, StDraggableCardComponent, StDraggableCardModule, StDropDownMenuGroup, StDropDownMenuGroupSchema, StDropDownMenuItem, StDropDownMenuItemSchema, StDropDownVisualMode, StDropdownMenuComponent, StDropdownMenuModule, StDynamicTableComponent, StDynamicTableModule, StEgeo, StFileButtonComponent, StFileButtonModule, StFilterList, StFilterSelectorComponent, StFilterSelectorModule, StFooterComponent, StFooterModule, StForegroundNotificationsComponent, StForegroundNotificationsModule, StFormComponent, StFormDirectiveModule, StFormFieldComponent, StFormFieldModule, StFormListComponent, StFormListModule, StFormModule, StFullscreenLayoutComponent, StFullscreenLayoutModule, StHeaderComponent, StHeaderMenuOption, StHeaderMenuOptionSchema, StHeaderModule, StHeaderSubMenuOption, StHeaderSubMenuOptionSchema, StHeaderUtils, StHorizontalTabStatus, StHorizontalTabsComponent, StHorizontalTabsModule, StInfoBoxComponent, StInfoBoxModule, StInputAdjustable, StInputComponent, StInputModule, StItemListComponent, StItemListModule, StLabelComponent, StLabelModule, StLauncherComponent, StLauncherGroup, StLauncherGroupSchema, StLauncherItem, StLauncherItemSchema, StLauncherModule, StMaxValidator, StMenuComponent, StMenuModule, StMenuStatus, StMinValidator, StModal2Component, StModal2Module, StModalBasicType, StModalButton, StModalComponent, StModalConfig, StModalModule, StModalResponse, StModalService, StObjectToArrayPipe, StPageTitleComponent, StPageTitleModule, StPaginationComponent, StPaginationModule, StPaginationPipe, StPaginationService, StPopComponent, StPopModule, StPopOffset, StPopOverComponent, StPopOverModule, StPopPlacement, StPopoverFilterComponent, StPrismComponent, StPrismModule, StProgressBarComponent, StProgressBarModule, StRadioComponent, StRadioGroupComponent, StRadioMenuComponent, StRadioMenuModule, StRadioModule, StRegEx, StRequired, StSearchComponent, StSearchEvent, StSearchEventOrigin, StSearchModule, StSelectComponent, StSelectModule, StSidebarComponent, StSidebarModule, StSidebarVisualMode, StSpinnerComponent, StSpinnerModule, StSwitchComponent, StSwitchModule, StTableCellComponent, StTableComponent, StTableFilterIconClasses, StTableIconClasses, StTableModule, StTableRowComponent, StTagComponent, StTagInputComponent, StTagInputModule, StTagItem, StTagModule, StTextareaComponent, StTextareaModule, StToggleButtonsComponent, StToggleButtonsModule, StTooltipComponent, StTooltipModule, StTwoListSelection, StTwoListSelectionComponent, StTwoListSelectionModule, StTwoListSelectionViewComponent, StVerticalIconTabsComponent, StVerticalIconTabsModule, StVerticalTabsComponent, StVerticalTabsModule, StWidgetComponent, StWidgetModule, StZeroPageComponent, StZeroPageModule, SHARED_FORM_DIRECTIVES as ɵa, CHECKBOX_CONTROL_ACCESSOR as ɵb, PAGETITLE_CONTROL_ACCESSOR as ɵc, MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR as ɵd, DECLARATIONS as ɵe, StWindowRefService as ɵf, StDocsService as ɵg, StDropdownMenuItemModule as ɵh, StDropdownMenuItemComponent as ɵi, StHeaderMenuOptionComponent as ɵj, StHeaderMenuComponent as ɵk, ItemListScrollComponent as ɵl, ItemListItemComponent as ɵm, StLauncherItemComponent as ɵn, StModalButtonsComponent as ɵo, StSidebarItemListComponent as ɵp, ListSelectionComponent as ɵq, ListItemComponent as ɵr, ListScrollComponent as ɵs, StMenuOptionsComponent as ɵt, routes as ɵu, routing as ɵv, DemoGeneratorProviders as ɵw };
//# sourceMappingURL=stratio-egeo.js.map
