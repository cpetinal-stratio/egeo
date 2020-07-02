/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-docs.component.ts
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
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { StDocsService } from './st-docs.service';
import { zip } from 'rxjs/operators';
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
export { StDocsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZG9jcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRvY3Mvc3QtZG9jcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckM7SUEwQkcseUJBQW9CLEVBQXFCLEVBQVUsV0FBMEI7UUFBekQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQVh0RSxZQUFPLEdBQXNCO1lBQ2pDLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQzlCLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQzFCLEVBQUMsRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQztZQUM5QyxFQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztTQUN0QyxDQUFDO1FBRUssV0FBTSxHQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSStCLENBQUM7Ozs7SUFFakYsa0NBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFURSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFB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QUFDO0NBQUEsQUF6RUQsSUF5RUM7U0FwRVksZUFBZTs7O0lBRXpCLG1DQUEyQjs7SUFDM0IsaUNBQXlCOztJQUN6Qix3Q0FBZ0M7O0lBRWhDLG1DQUF3Qjs7SUFDeEIscUNBQTBCOztJQUMxQiwwQ0FBK0I7O0lBRS9CLGtDQUtFOztJQUVGLGlDQUFpRDs7Ozs7SUFFakQsdUNBQW1DOzs7OztJQUV2Qiw2QkFBNkI7Ozs7O0lBQUUsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3REb2NzU2VydmljZSB9IGZyb20gJy4vc3QtZG9jcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0SG9yaXpvbnRhbFRhYiB9IGZyb20gJy4uL3N0LWhvcml6b250YWwtdGFicy9zdC1ob3Jpem9udGFsLXRhYnMubW9kZWwnO1xuaW1wb3J0IHsgemlwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1kb2NzJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1kb2NzLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWRvY3MuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdERvY3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgIEBJbnB1dCgpIGh0bWxGaWxlPzogc3RyaW5nO1xuICAgQElucHV0KCkgdHNGaWxlPzogc3RyaW5nO1xuICAgQElucHV0KCkgY29tcG9uZW50RmlsZT86IHN0cmluZztcblxuICAgcHVibGljIGh0bWxDb2RlOiBzdHJpbmc7XG4gICBwdWJsaWMgZGVtb1RzQ29kZTogc3RyaW5nO1xuICAgcHVibGljIGNvbXBvbmVudFRzQ29kZTogc3RyaW5nO1xuXG4gICBwdWJsaWMgb3B0aW9uczogU3RIb3Jpem9udGFsVGFiW10gPSBbXG4gICAgICB7aWQ6ICdkZW1vJywgdGV4dDogJ092ZXJ2aWV3J30sXG4gICAgICB7aWQ6ICdodG1sJywgdGV4dDogJ0h0bWwnfSxcbiAgICAgIHtpZDogJ2ltcGxlbWVudGF0aW9uJywgdGV4dDogJ0ltcGxlbWVudGF0aW9uJ30sXG4gICAgICB7aWQ6ICdjb21wb25lbnQnLCB0ZXh0OiAnQ29tcG9uZW50J31cbiAgIF07XG5cbiAgIHB1YmxpYyBhY3RpdmU6IFN0SG9yaXpvbnRhbFRhYiA9IHRoaXMub3B0aW9uc1swXTtcblxuICAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZG9jc1NlcnZpY2U6IFN0RG9jc1NlcnZpY2UpIHt9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmdldEZpbGUodGhpcy5odG1sRmlsZSkucGlwZSh6aXAodGhpcy5nZXRGaWxlKHRoaXMudHNGaWxlKSwgdGhpcy5nZXRGaWxlKHRoaXMuY29tcG9uZW50RmlsZSksIChodG1sQ29kZSwgdHNDb2RlLCBjb21wb25lbnRDb2RlKSA9PlxuICAgICAgKHsgaHRtbENvZGUsIHRzQ29kZSwgY29tcG9uZW50Q29kZSB9KSlcbiAgICAgICkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICB0aGlzLmh0bWxDb2RlID0gKGRhdGEgJiYgKDxhbnk+ZGF0YSkuaHRtbENvZGUpID8gKDxhbnk+ZGF0YSkuaHRtbENvZGUgOiBudWxsIDtcbiAgICAgICAgIHRoaXMuZGVtb1RzQ29kZSA9IChkYXRhICYmICg8YW55PmRhdGEpLnRzQ29kZSkgPyAoPGFueT5kYXRhKS50c0NvZGUgOiBudWxsIDtcbiAgICAgICAgIHRoaXMuY29tcG9uZW50VHNDb2RlID0gKGRhdGEgJiYgKDxhbnk+ZGF0YSkuY29tcG9uZW50Q29kZSkgPyAoPGFueT5kYXRhKS5jb21wb25lbnRDb2RlIDogbnVsbCA7XG4gICAgICAgICB0aGlzLmRpc2FibGVUYWJPcHRpb24odGhpcy5odG1sQ29kZSA9PT0gbnVsbCwgdGhpcy5kZW1vVHNDb2RlID09PSBudWxsLCB0aGlzLmNvbXBvbmVudFRzQ29kZSA9PT0gbnVsbCk7XG4gICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgIH1cblxuICAgb25DaGFuZ2VPcHRpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IDxhbnk+IGV2ZW50O1xuICAgfVxuXG4gICBwcml2YXRlIGdldEZpbGUoZmlsZT86IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICByZXR1cm4gdGhpcy5kb2NzU2VydmljZS5nZXRGaWxlKGZpbGUpO1xuICAgfVxuXG4gICBwcml2YXRlIGRpc2FibGVUYWJPcHRpb24oaHRtbDogYm9vbGVhbiwgZGVtb0NvZGU6IGJvb2xlYW4sIGNvbXBvbmVudENvZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIGlmIChodG1sKSB7XG4gICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZpbHRlck9wdGlvbih0aGlzLm9wdGlvbnMsICdodG1sJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZW1vQ29kZSkge1xuICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb24odGhpcy5vcHRpb25zLCAnaW1wbGVtZW50YXRpb24nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBvbmVudENvZGUpIHtcblxuICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5maWx0ZXJPcHRpb24odGhpcy5vcHRpb25zLCAnY29tcG9uZW50Jyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgZmlsdGVyT3B0aW9uKG9wdGlvbnM6IFN0SG9yaXpvbnRhbFRhYltdLCBuYW1lOiBzdHJpbmcpOiBTdEhvcml6b250YWxUYWJbXSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgcmV0dXJuIGVsZW1lbnQuaWQgIT09IG5hbWU7XG4gICAgICB9KTtcbiAgIH1cblxufVxuIl19