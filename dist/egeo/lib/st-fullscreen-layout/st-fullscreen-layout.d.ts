import { OnDestroy, EventEmitter } from '@angular/core';
import { StWindowRefService } from '../utils/window-service';
/**
 * @description {Component} [Fullscreen Layout]
 *
 * Component that shows a full screen view with a title and space for buttons and a
 * main content defined by user using ng-content
 *
 * @example
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
export declare class StFullscreenLayoutComponent implements OnDestroy {
    private windowRef;
    /** @Input {boolean} [fullWidth=false] Enable full width visualization */
    fullWidth: boolean;
    /** @Input {boolean} [showCloseButton=true] Shows header close button */
    showCloseButton: boolean;
    close: EventEmitter<void>;
    constructor(windowRef: StWindowRefService);
    ngOnDestroy(): void;
}