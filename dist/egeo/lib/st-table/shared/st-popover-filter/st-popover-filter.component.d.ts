import { ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { StTableHeader } from '../../shared/table-header.interface';
import { StTableFilterIconClasses } from '../../st-table.interface';
export declare class StPopoverFilterComponent {
    private _elementRef;
    /** @Input {StTableHeader} [field=''] field displayed in the header */
    field: StTableHeader;
    /** @Input {number} [index=''] index of field displayed in the header */
    index: number;
    /** @Input {boolean} [filtered=''] Status filter by column, needed with templateContentFilter to change filtered icon */
    filtered: boolean;
    /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
    templateContentFilter?: TemplateRef<any>;
    /** @Input {{StTableFilterIconClasses} [iconClasses=''] List of icon classes */
    iconClasses?: StTableFilterIconClasses;
    /** @Output [filter=''] Event emitted  when user interacts with filter button without a custom template */
    filter: EventEmitter<any>;
    openToLeft: boolean;
    offsetX: number;
    private _hidden;
    constructor(_elementRef: ElementRef);
    /** @Input {boolean} [hidden=''] field to show popover */
    hidden: boolean;
    getConfigField(field: StTableHeader, config: string): any;
    getFilteredIcon(): string;
    onChangeFilter(indexFilter: number, event: Event): void;
    onFilter(): void;
}
