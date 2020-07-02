import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { JSONSchema4 } from 'json-schema';
import { Order } from '../st-table/shared/order';
import { StTableHeader } from '../st-table/shared/table-header.interface';
import { StDynamicTableHeader, StDynamicTableUserInterface, StDynamicTableFkEvent } from './st-dynamic-table.model';
import { StTableIconClasses } from '../st-table/st-table.interface';
/**
 * @description {Component} [Dynamic Table]
 *
 * The table component has been designed to be able to create a table deducing its columns using a json schema
 *
 * * @model
 *
 *   [StDynamicTableHeader] {./st-dynamic-table.model.ts#StDynamicTableHeader}
 *   [StDynamicTableUISpecification] {./st-dynamic-table.model.ts#StDynamicTableUISpecification}
 *   [StDynamicTableUserInterface] {./st-dynamic-table.model.ts#StDynamicTableUserInterface}
 *
 * @example
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
export declare class StDynamicTableComponent {
    private _cd;
    /** @Input {Object([key: string]: any)[]} [items=''] Item list displayed as table rows */
    items: {
        [key: string]: any;
    }[];
    /** @Input {string} [qaTag=''] Prefix used to generate the id values for qa tests */
    qaTag: string;
    /** @Input {boolean} [header=true] Boolean to show or hide the header */
    header: boolean;
    /**
     * @Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
     * the new "sortable" field inside stTableHeader model
     */
    sortable: boolean;
    /**
     * @Input {boolean} [filterable=false] Boolean to make filterable the table, To enable filtering of columns use
     * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
     */
    filterable: boolean;
    /**
     * @Input {boolean} [selectable=false] Boolean to show or hide a checkboxes in the first cell of rows
     */
    selectable: boolean;
    /**
     * @Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
     *  deselect all rows
     */
    selectableAll: boolean;
    /** @Input {boolean[]} [selected=''] Boolean list to indicate if a row is selected */
    selected?: boolean[];
    /** @Input {Order} [currentOrder=''] It specifies what is the current order applied to the table */
    currentOrder: Order;
    /** @Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows */
    customClasses: string;
    /** @Input {boolean} [fixedHeader=false] Boolean to fix the table header */
    fixedHeader: boolean;
    /** @Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible */
    stickyHoverMenu: boolean;
    /** @Input {StTableIconClasses} [iconClasses=''] List of icon classes */
    iconClasses?: StTableIconClasses;
    /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
    templateContentFilter: TemplateRef<any>;
    /** @Input {boolean[]} [statusFilter=] List of status filter by column, needed with templateContentFilter */
    statusFilter?: boolean[];
    /** @Input {number} [activeHoverMenu=] Position of the current active hover menu */
    activeHoverMenu?: number;
    /** @Input {boolean} [hasHoverMenu=] It specifies if a menu has to be displayed when user puts the mouse over
     * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
     */
    hasHoverMenu?: boolean;
    /** @Input {string} [hoverButton='icon-ellipsis'] It specifies the icon class of the hover button displayed when user puts mouse over a row
     */
    hoverButton: string;
    /** @Input {boolean} [selectedAll=] It specifies if all rows are selected */
    selectedAll?: boolean;
    /** @Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows */
    changeOrder: EventEmitter<Order>;
    /** @Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
     * all rows
     */
    selectAll: EventEmitter<boolean>;
    /** @Output {EventEmitter<StTableHeader[]>} [fields=] Event emitted when header fields are being loaded */
    updateFields: EventEmitter<StTableHeader[]>;
    /** @Output {string} [clickFilter=] Event emitted when using filters custom template  */
    clickFilter: EventEmitter<StTableHeader>;
    /** @Output {StTableHeader[]} [selectFilters=] Event emitted  when user interacts with filter button without a custom template */
    selectFilters: EventEmitter<StTableHeader[]>;
    /** @Output {EventEmitter<number} [showHoverMenu=] Event emitted when user clicks on hover button of a row */
    showHoverMenu: EventEmitter<number>;
    /** @Output {Object(checked: boolean, row: number)} [selectRow=] Event emitted when user clicks on checkbox of a row */
    selectRow: EventEmitter<{
        checked: boolean;
        row: number;
    }>;
    /** @Output {Object(checked: boolean, row: number)} [clickCell=] Event emitted when user clicks on checkbox of a row */
    clickCell: EventEmitter<{
        row: number;
        fieldId: string;
        label: string;
    }>;
    /** @Output {StDynamicTableFkEvent} [clickFk=] Event emitted when user clicks on Fk cell */
    clickFk: EventEmitter<StDynamicTableFkEvent>;
    fields: StDynamicTableHeader[];
    private _jsonSchema;
    private _uiDefinitions;
    private _templateContentFilter;
    private _fkSeparator;
    constructor(_cd: ChangeDetectorRef);
    /** @Input {JSONSchema4} [jsonSchema=] Json schema to define its structure */
    jsonSchema: JSONSchema4;
    /** @Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field */
    uiDefinitions: StDynamicTableUserInterface;
    onFilterClick(selectedFilter: any): void;
    onChangeOrder(order: Order): void;
    onSelectAll(checked: boolean): void;
    onSelectedFilters(selectedFilters: StTableHeader[]): void;
    onShowHoverMenu(row: number): void;
    onLeaveRow(): void;
    onClickFk(item: any, field: StDynamicTableHeader): void;
    getCellContent(item: {
        [key: string]: any;
    }, field: StDynamicTableHeader): string;
    getCellClasses(field: StDynamicTableHeader): {
        clickable?: boolean;
    };
    getCellStyles(field: StDynamicTableHeader): any;
    onSelectRow(checkboxEvent: {
        checked: boolean;
        value: any;
    }, row: number): void;
    onClickCellLabel(row: number, fieldId: string, label: string): void;
    private _manageFieldsUpdate;
}
