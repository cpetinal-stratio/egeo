/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/st-table.module.ts
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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StTableCellComponent } from './shared/st-table-cell/st-table-cell.component';
import { StTableRowComponent } from './shared/st-table-row/st-table-row.component';
import { StPopoverFilterComponent } from './shared/st-popover-filter/st-popover-filter.component';
import { StTableComponent } from './st-table.component';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';
import { StPopOverModule } from '../st-pop-over/st-pop-over.module';
import { StClickOutsideModule } from '../directives/st-click-outside/st-click-outside.module';
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
export { StTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10YWJsZS9zdC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDbEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRTlGO0lBQUE7SUFPQSxDQUFDOztnQkFQQSxRQUFRLFNBQUM7b0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztvQkFDaEYsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3JHLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO2lCQUNsRzs7SUFHRCxvQkFBQztDQUFBLEFBUEQsSUFPQztTQURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFRhYmxlQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3N0LXRhYmxlLWNlbGwvc3QtdGFibGUtY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RUYWJsZVJvd0NvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3N0LXRhYmxlLXJvdy9zdC10YWJsZS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFN0UG9wb3ZlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL3N0LXBvcG92ZXItZmlsdGVyL3N0LXBvcG92ZXItZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9zdC10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL3N0LWNoZWNrYm94L3N0LWNoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdFBvcE92ZXJNb2R1bGUgfSBmcm9tICcuLi9zdC1wb3Atb3Zlci9zdC1wb3Atb3Zlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL3N0LWNsaWNrLW91dHNpZGUvc3QtY2xpY2stb3V0c2lkZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RDaGVja2JveE1vZHVsZSwgU3RQb3BPdmVyTW9kdWxlLCBTdENsaWNrT3V0c2lkZU1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdFBvcG92ZXJGaWx0ZXJDb21wb25lbnQsIFN0VGFibGVDZWxsQ29tcG9uZW50LCBTdFRhYmxlQ29tcG9uZW50LCBTdFRhYmxlUm93Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdFBvcG92ZXJGaWx0ZXJDb21wb25lbnQsIFN0VGFibGVDZWxsQ29tcG9uZW50LCBTdFRhYmxlQ29tcG9uZW50LCBTdFRhYmxlUm93Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFN0VGFibGVNb2R1bGUge1xufVxuIl19