import { ControlValueAccessor } from '@angular/forms';
import { EventEmitter, OnInit } from '@angular/core';
export declare const PAGETITLE_CONTROL_ACCESSOR: any;
export declare class StPageTitleComponent implements ControlValueAccessor, OnInit {
    title: string;
    leftButton: string;
    qaTag: string;
    preTitle: string | undefined;
    editable: boolean;
    placeholder: string;
    disabled: boolean;
    readOnly: boolean;
    maxlength: number;
    minlength: number;
    error: boolean;
    errorMessage: string;
    clickButton: EventEmitter<any>;
    edit: EventEmitter<string>;
    input: any;
    focus: boolean;
    hasPreTitleValue: boolean;
    private _title;
    ngOnInit(): void;
    onClickedButton(): void;
    _controlValueAccessorChangeFn: (value: any) => void;
    onTouched: () => any;
    hasPreTitle(): boolean;
    writeValue(value: any): void;
    onEdit($event: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    onClickEdit(): void;
    onFocus(): void;
    onBlur(): void;
}