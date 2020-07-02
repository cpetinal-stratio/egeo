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
export class StFullscreenLayoutComponent {
    /**
     * @param {?} windowRef
     */
    constructor(windowRef) {
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
    ngOnDestroy() {
        this.windowRef.nativeWindow.document.body.style.overflow = '';
    }
}
StFullscreenLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-fullscreen-layout',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-fullscreen-layout\" [ngClass]=\"{'full-width': fullWidth}\">\n   <div class=\"st-fullscreen-layout-header\">\n      <div class=\"container\">\n         <div class=\"st-fullscreen-layout__close\" *ngIf=\"showCloseButton\">\n            <span class=\"icon icon-cross\" (click)=\"close.emit()\"></span>\n         </div>\n         <ng-content select=\".st-fullscreen-layout-title\"></ng-content>\n\n         <div class=\"buttons\">\n            <ng-content select=\".st-fullscreen-layout-buttons\"></ng-content>\n         </div>\n      </div>\n   </div>\n   <div class=\"st-fullscreen-layout-container\">\n      <div  class=\"container\">\n         <ng-content select=\".st-fullscreen-layout-content\"></ng-content>\n      </div>\n   </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-fullscreen-layout{width:100%;min-height:100vh;position:absolute;overflow:auto;left:0;top:0;display:flex;flex-direction:column}.st-fullscreen-layout .st-fullscreen-layout-header{display:flex;flex-direction:row;width:100%;height:70px;position:fixed}.st-fullscreen-layout .st-fullscreen-layout-header .container{align-items:center}.st-fullscreen-layout .st-fullscreen-layout-header .buttons{margin-left:auto}"]
            }] }
];
/** @nocollapse */
StFullscreenLayoutComponent.ctorParameters = () => [
    { type: StWindowRefService }
];
StFullscreenLayoutComponent.propDecorators = {
    fullWidth: [{ type: Input }],
    showCloseButton: [{ type: Input }],
    close: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZnVsbHNjcmVlbi1sYXlvdXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZ1bGxzY3JlZW4tbGF5b3V0L3N0LWZ1bGxzY3JlZW4tbGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDN0QsTUFBTSxPQUFPLDJCQUEyQjs7OztJQVFyQyxZQUFxQixTQUE2QjtRQUE3QixjQUFTLEdBQVQsU0FBUyxDQUFvQjs7OztRQUp6QyxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFHNUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN2RSxDQUFDOzs7O0lBRUQsV0FBVztRQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDcEUsQ0FBQzs7O1lBcEJBLFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyw0ckNBQTBDO2dCQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7Ozs7WUEvQlEsa0JBQWtCOzs7d0JBa0N2QixLQUFLOzhCQUVMLEtBQUs7b0JBRUwsTUFBTTs7Ozs7OztJQUpQLGdEQUE0Qjs7Ozs7SUFFNUIsc0RBQXlDOztJQUV6Qyw0Q0FBK0Q7Ozs7O0lBRWxELGdEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICcuLi91dGlscy93aW5kb3ctc2VydmljZSc7XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0Z1bGxzY3JlZW4gTGF5b3V0XVxuICpcbiAqIENvbXBvbmVudCB0aGF0IHNob3dzIGEgZnVsbCBzY3JlZW4gdmlldyB3aXRoIGEgdGl0bGUgYW5kIHNwYWNlIGZvciBidXR0b25zIGFuZCBhXG4gKiBtYWluIGNvbnRlbnQgZGVmaW5lZCBieSB1c2VyIHVzaW5nIG5nLWNvbnRlbnRcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWZ1bGxzY3JlZW4tbGF5b3V0IFtmdWxsV2lkdGhdPVwidHJ1ZVwiPlxuICogICAgPHAgY2xhc3M9XCJzdC1mdWxsc2NyZWVuLWxheW91dC10aXRsZVwiPkVkaXRpb248L3A+XG4gKiAgICA8ZGl2IGNsYXNzPVwic3QtZnVsbHNjcmVlbi1sYXlvdXQtYnV0dG9uc1wiPlxuICogICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5IGJ1dHRvbi1zZXBhcmF0b3JcIiAoY2xpY2spPVwib25DbGlja0hpZGVCdXR0b24oKVwiPkNhbmNlbDwvYnV0dG9uPlxuICogICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIChjbGljayk9XCJvbkNsaWNrSGlkZUJ1dHRvbigpXCI+U2F2ZTwvYnV0dG9uPlxuICogICAgPC9kaXY+XG4gKiAgICA8ZGl2IGNsYXNzPVwic3QtZnVsbHNjcmVlbi1sYXlvdXQtY29udGVudFwiPlxuICogICAgICAgPGgxPlRFU1Q8L2gxPlxuICogICAgPC9kaXY+XG4gKiA8L3N0LWZ1bGxzY3JlZW4tbGF5b3V0PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1mdWxsc2NyZWVuLWxheW91dCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtZnVsbHNjcmVlbi1sYXlvdXQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1mdWxsc2NyZWVuLWxheW91dC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdEZ1bGxzY3JlZW5MYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2Z1bGxXaWR0aD1mYWxzZV0gRW5hYmxlIGZ1bGwgd2lkdGggdmlzdWFsaXphdGlvbiAqL1xuICAgQElucHV0KCkgZnVsbFdpZHRoOiBib29sZWFuO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3Nob3dDbG9zZUJ1dHRvbj10cnVlXSBTaG93cyBoZWFkZXIgY2xvc2UgYnV0dG9uICovXG4gICBASW5wdXQoKSBzaG93Q2xvc2VCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgY29uc3RydWN0b3IoIHByaXZhdGUgd2luZG93UmVmOiBTdFdpbmRvd1JlZlNlcnZpY2UpIHtcbiAgICAgIHRoaXMud2luZG93UmVmLm5hdGl2ZVdpbmRvdy5kb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICB9XG5cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgdGhpcy53aW5kb3dSZWYubmF0aXZlV2luZG93LmRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbn1cblxufVxuIl19