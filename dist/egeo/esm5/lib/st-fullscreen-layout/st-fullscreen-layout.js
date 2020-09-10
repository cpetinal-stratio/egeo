/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-fullscreen-layout/st-fullscreen-layout.ts
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
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { StWindowRefService } from '../utils/window-service';
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
export { StFullscreenLayoutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZnVsbHNjcmVlbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZ1bGxzY3JlZW4tbGF5b3V0L3N0LWZ1bGxzY3JlZW4tbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCN0Q7SUFjRyxxQ0FBcUIsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7Ozs7UUFKekMsb0JBQWUsR0FBWSxJQUFJLENBQUM7UUFFL0IsVUFBSyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRzVELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEUsQ0FBQzs7Z0JBcEJBLFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw0ckNBQTBDO29CQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQS9CUSxrQkFBa0I7Ozs0QkFrQ3ZCLEtBQUs7a0NBRUwsS0FBSzt3QkFFTCxNQUFNOztJQVVWLGtDQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FoQlksMkJBQTJCOzs7Ozs7SUFFckMsZ0RBQTRCOzs7OztJQUU1QixzREFBeUM7O0lBRXpDLDRDQUErRDs7Ozs7SUFFbEQsZ0RBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0V2luZG93UmVmU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3dpbmRvdy1zZXJ2aWNlJztcblxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbRnVsbHNjcmVlbiBMYXlvdXRdXG4gKlxuICogQ29tcG9uZW50IHRoYXQgc2hvd3MgYSBmdWxsIHNjcmVlbiB2aWV3IHdpdGggYSB0aXRsZSBhbmQgc3BhY2UgZm9yIGJ1dHRvbnMgYW5kIGFcbiAqIG1haW4gY29udGVudCBkZWZpbmVkIGJ5IHVzZXIgdXNpbmcgbmctY29udGVudFxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtZnVsbHNjcmVlbi1sYXlvdXQgW2Z1bGxXaWR0aF09XCJ0cnVlXCI+XG4gKiAgICA8cCBjbGFzcz1cInN0LWZ1bGxzY3JlZW4tbGF5b3V0LXRpdGxlXCI+RWRpdGlvbjwvcD5cbiAqICAgIDxkaXYgY2xhc3M9XCJzdC1mdWxsc2NyZWVuLWxheW91dC1idXR0b25zXCI+XG4gKiAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnkgYnV0dG9uLXNlcGFyYXRvclwiIChjbGljayk9XCJvbkNsaWNrSGlkZUJ1dHRvbigpXCI+Q2FuY2VsPC9idXR0b24+XG4gKiAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uQ2xpY2tIaWRlQnV0dG9uKClcIj5TYXZlPC9idXR0b24+XG4gKiAgICA8L2Rpdj5cbiAqICAgIDxkaXYgY2xhc3M9XCJzdC1mdWxsc2NyZWVuLWxheW91dC1jb250ZW50XCI+XG4gKiAgICAgICA8aDE+VEVTVDwvaDE+XG4gKiAgICA8L2Rpdj5cbiAqIDwvc3QtZnVsbHNjcmVlbi1sYXlvdXQ+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWZ1bGxzY3JlZW4tbGF5b3V0JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1mdWxsc2NyZWVuLWxheW91dC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWZ1bGxzY3JlZW4tbGF5b3V0LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0RnVsbHNjcmVlbkxheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbZnVsbFdpZHRoPWZhbHNlXSBFbmFibGUgZnVsbCB3aWR0aCB2aXN1YWxpemF0aW9uICovXG4gICBASW5wdXQoKSBmdWxsV2lkdGg6IGJvb2xlYW47XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2hvd0Nsb3NlQnV0dG9uPXRydWVdIFNob3dzIGhlYWRlciBjbG9zZSBidXR0b24gKi9cbiAgIEBJbnB1dCgpIHNob3dDbG9zZUJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICBjb25zdHJ1Y3RvciggcHJpdmF0ZSB3aW5kb3dSZWY6IFN0V2luZG93UmVmU2VydmljZSkge1xuICAgICAgdGhpcy53aW5kb3dSZWYubmF0aXZlV2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLndpbmRvd1JlZi5uYXRpdmVXaW5kb3cuZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xufVxuXG59XG4iXX0=