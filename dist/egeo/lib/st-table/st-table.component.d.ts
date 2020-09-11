import { ChangeDetectorRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { Order } from './shared/order';
import { StTableHeader } from './shared/table-header.interface';
import { StTableIconClasses } from './st-table.interface';
/**
 * @description {Component} [Table]
 *
 * The table component has been designed to display any content like images, text, graphs, etc.
 *
 * * @model
 *
 *   [StTableHeader] {./shared/table-header.interface.ts#StTableHeader}
 *   [StDynamicTableHeader] {./shared/table-header.interface.ts#StFilterElement}
 *   [StFilterHeader] {./shared/table-header.interface.ts#StFilterHeader}
 *   [StTableFilterIconClasses] {./st-table.interface.ts#StTableFilterIconClasses}
 *   [StTableIconClasses] {./st-table.interface.ts#StTableIconClasses}
 *
 * @example
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
export declare class StTableComponent implements OnInit {
    private _cd;
    /** @Input {StTableHeader[]} [fields=''] List of field displayed in the header */
    fields: StTableHeader[];
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
     * @Input {boolean} [filterable=true] Boolean to make filterable the table, To enable filtering of columns use
     * the new "filterable" field inside stTableHeader model (necesary define filterConfig).
     */
    filterable: boolean;
    /**
     * @Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
     *  deselect all rows
     */
    selectableAll: boolean;
    /** @Input {Order} [currentOrder=''] It specifies what is the current order applied to the table */
    currentOrder: Order;
    /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
    templateContentFilter?: TemplateRef<any>;
    /** @Input {boolean[]} [statusFilter=''] List of status filter by column, needed with templateContentFilter */
    statusFilter?: boolean[];
    /** @Input {StTableIconClasses} [iconClasses=''] List of icon classes */
    iconClasses?: StTableIconClasses;
    /** @Input {boolean} [fixedHeader=false] Boolean to fix the table header */
    fixedHeader: boolean;
    /** @Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible */
    stickyHoverMenu: boolean;
    /** @Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows */
    customClasses: string;
    /** @Input {boolean} [selectedAll=false] It specifies if all rows are selected */
    selectedAll: boolean;
    /** @Input {boolean} [hasHoverMenu=false] It specifies if a menu has to be displayed when user puts the mouse over
     * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
     */
    hasHoverMenu: boolean;
    /** @Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows */
    changeOrder: EventEmitter<Order>;
    /** @Output {boolean} [selectAll=''] Event emitted when user interacts with the checkbox to select or deselect
     * all rows
     */
    selectAll: EventEmitter<boolean>;
    /** @Output {string} [clickFilter=] Event emitted when clicking on filters icon  */
    clickFilter: EventEmitter<StTableHeader>;
    /** @Output {StTableHeader[]} [selectFilters=''] Event emitted  when user interacts with filter button without a custom template */
    selectFilters: EventEmitter<StTableHeader[]>;
    tableClasses: any;
    orderTypes: any;
    visibleFilter: number;
    private _fixedHeader;
    private _stickyHoverMenu;
    private _selectedAll;
    private _hasHoverMenu;
    private _customClasses;
    constructor(_cd: ChangeDetectorRef);
    ngOnInit(): void;
    getHeaderItemClass(field: StTableHeader): string;
    isSortable(field: StTableHeader): boolean;
    isSortedByField(field: StTableHeader): boolean;
    isFilterable(field: StTableHeader): boolean;
    onClickPopover(event: MouseEvent, index: number, field: StTableHeader): void;
    onHidePopover(): void;
    onChangeOrder(field: StTableHeader): void;
    onSelectAll(event: any): void;
    onSelectedFilters(event: Event): void;
    private changeOrderDirection;
    private isSortedByFieldAndDirection;
}