import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgModel } from '@angular/forms';
import { StInputError } from '../../st-input/st-input.error.model';
import { StDropDownMenuItem } from '../../st-dropdown-menu/st-dropdown-menu.interface';
import { JSONSchema4Type } from 'json-schema';
import { StFormSchema } from '../st-form.model';
import { StFormFieldTranslations } from './st-form-field.interface';
export declare class StFormFieldComponent implements ControlValueAccessor, OnInit {
    required: boolean;
    errorMessages: StInputError;
    qaTag: string;
    name: string;
    value: any;
    hasDependencies: boolean;
    forceValidations: boolean;
    showTooltip: boolean;
    maxWidth: number;
    translations?: StFormFieldTranslations;
    clickLink: EventEmitter<string>;
    valueChange: EventEmitter<any>;
    blur: EventEmitter<any>;
    templateModel: NgModel;
    disabled: boolean;
    focus: boolean;
    errorMessage: string;
    selectOptions: StDropDownMenuItem[];
    innerValue: any;
    errors: StInputError;
    private _schema;
    private readonly _defaultErrorMessages;
    schema: {
        key: string;
        value: StFormSchema;
    };
    readonly readOnly: boolean;
    onChange: (_: any) => void;
    onTouched: () => void;
    setValue(value: any): void;
    validate(control: FormControl): any;
    ngOnInit(): void;
    readonly type: string;
    readonly min: number;
    readonly max: number;
    readonly label: string;
    readonly placeholder: string;
    readonly default: JSONSchema4Type;
    readonly description: string;
    readonly minLength: number;
    readonly maxLength: number;
    readonly pattern: string;
    hasType(type: string): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disable: boolean): void;
    getInputStep(): number;
    getSelectOptions(): StDropDownMenuItem[];
    onBlur(): void;
    onClickLink(): void;
    private _loadErrorMessages;
}