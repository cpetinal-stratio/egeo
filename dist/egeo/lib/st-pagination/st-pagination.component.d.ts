import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { Paginate, PaginateIconClasses, PaginateOptions, PaginateTexts } from './st-pagination.interface';
/**
 * @description {Component} [Table]
 *
 * The pagination component has been designed to allow content to be displayed per pages. This informs user about the
 * number of the current page, the items displayed per page and the total of items. Moreover, when there are a lot of
 * items, it allows user to customize the number of items displayed per page.
 *
 * It is made by two sub-components:
 * - A range selector, that allows the user provides a dropdown to set how many items he wants to be displayed per page.
 * - A page navigation control, in order to let the user where he is and where he can go to.
 *
 * * @model
 *
 *   [Paginate] {./st-pagination.interface.ts#Paginate}
 *   [PaginateOptions] {./st-pagination.interface.ts#PaginateOptions}
 *   [PaginateTexts] {./st-pagination.interface.ts#PaginateTexts}
 *   [PaginateTextsSchema] {./st-pagination.interface.ts#PaginateTextsSchema}
 *   [PaginateIconClasses] {./st-pagination.interface.ts#PaginateIconClasses}
 *
 * @example
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
export declare class StPaginationComponent implements OnInit {
    private _cd;
    private _paginationElement;
    /** @Input {PaginateTexts} [label={element: 'Rows', perPage: 'per page', of: 'of'}] Translated texts displayed at the pagination */
    label: PaginateTexts;
    /** @Input {PaginateOptions[]}
     * [perPageOptions=Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 ))]
     *  List of options displayed at a selector where user can change the number of items displayed per page
     */
    perPageOptions: PaginateOptions[];
    /** @Input {PaginateIconClasses} [iconClasses=Object(previous='', next='')] Icon classes for previous and next page buttons */
    iconClasses: PaginateIconClasses;
    /** @Output {Paginate} [change=''] Event emitted when user interacts with some of the elements in the pagination.
     *  This sends the new pagination status (current page and items per page)
     */
    change: EventEmitter<Paginate>;
    /** @Output {PaginateOptions} [changePerPage='']  Event emitted when user interacts with some of the elements in the selector of items displayed per page.
     * This sends the current items per page.
     */
    changePerPage: EventEmitter<number>;
    /** @Input {number} [currentPage=1] Number of the current page */
    currentPage: number;
    /** @Input {number} [perPage=20] The maximum number of items displayed per page */
    perPage: number;
    /** @Input {number} [total=''] Total of items */
    total: number;
    disableNextButton: boolean;
    disablePrevButton: boolean;
    firstItem: number;
    lastItem: number;
    items: StDropDownMenuItem[];
    selectedItem: StDropDownMenuItem;
    private _currentPage;
    private _perPage;
    private _total;
    constructor(_cd: ChangeDetectorRef, _paginationElement: ElementRef);
    readonly hasOptions: boolean;
    readonly paginationId: string | null;
    readonly selectId: string;
    readonly buttonPrevId: string;
    readonly buttonNextId: string;
    ngOnInit(): void;
    generateItems(): void;
    nextPage(): void;
    prevPage(): void;
    onChangePerPage(perPage: number, emit?: boolean): void;
    private addPageOption;
    private updatePages;
}
