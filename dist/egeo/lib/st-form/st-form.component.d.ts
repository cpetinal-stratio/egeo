import { AfterViewChecked, AfterViewInit, EventEmitter, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, NgForm } from '@angular/forms';
import { StInputError } from '../st-input/st-input.error.model';
import { StFormSchema } from './st-form.model';
import { StFormFieldTranslations } from './st-form-field/st-form-field.interface';
/**
 * @description {Component} [Dynamic form]
 *
 * The form component allows to generate forms dynamically using a JSON schema.
 *
 * @model
 *
 *   [Form Schema] {./st-form.model.ts#StFormSchema}
 *   [Form UI Definition] {./st-form.model.ts#StFormUIDefinition}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-form [schema]="jsonSchema" [(ngModel)]="model" #formModel="ngModel">
 * </st-form>
 *
 * ```
 *
 */
export declare class StFormComponent implements AfterViewInit, AfterViewChecked, ControlValueAccessor, OnDestroy {
    /** @Input {string} [parentName=] Name of the parent section. By default, it is undefined */
    parentName: string;
    /** @Input {string} [nestingLevel=0] This informs about the nesting level of the form. This input is only used for design purposes */
    nestingLevel: number;
    /** @Input {boolean} [forceValidations=] Boolean to force the field validations */
    forceValidations: boolean;
    /** @Input {string} [disabledSectionMessage='for this instance is disabled.']
     *  Message displayed when a section is disabled. This is always displayed after the section name
     */
    disabledSectionMessage: string;
    /** @Input {number} [sectionDescriptionLevel=-1] Level of the section to which description is displayed.
     * By default, section descriptions are not displayed.
     */
    sectionDescriptionLevel: number;
    /** @Input {number} [textFieldMaxWidth=] Maximum width of a field needed to paint a input or textarea */
    textFieldMaxWidth: number;
    /** @Input {StInputError} [errorMessages=] Field error translations */
    errorMessages: StInputError;
    /** @Input {boolean} [showTooltips=-1] Enable or disable displaying of tooltips
     * By default, tooltips are displayed
     */
    showTooltips: boolean;
    /** @Input {StFormFieldTranslations} [translations=] Field translations */
    translations?: StFormFieldTranslations;
    /** @Output {any} [valueChange=] Event emitted when value is changed. This emits the current form value */
    valueChange: EventEmitter<any>;
    /** @Output {string} [clickLink=] Event emitted when link is clicked. It returns the field path */
    clickLink: EventEmitter<string>;
    form: NgForm;
    showCollapsedSectionFields: boolean;
    innerValue: any;
    private _value;
    private _parentFieldSubscription;
    private _parentFields;
    private _schema;
    /** @Input {StFormSchema [schema=] Form schema needed to generate the form */
    schema: StFormSchema;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onChange(_: any): void;
    onTouched: () => void;
    validate(control: FormControl): any;
    isRequired(propertyName: string): boolean;
    isCollapsedSection(): boolean;
    iShowMoreSection(): boolean;
    isAParentField(propertyName: string): boolean;
    getOptionalButtonLabel(): string;
    onChangeOptionalFieldsVisibility(): void;
    getFieldClasses(propertyName: string): any;
    fieldHasToBeCreated(propertyName: string): boolean;
    isRelatedField(propertyName: string): boolean;
    writeValue(value: any): void;
    onChangeProperty(value: any, property: string): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disable: boolean): void;
    ngOnDestroy(): void;
    isInADisabledSection(): boolean;
    isASwitchSection(): boolean;
    isAnAccordion(): boolean;
    onClickTitle(): void;
    isTheFirstField(propertyName: string): boolean;
    onClickLink(fieldKey: string): void;
    private getParentField;
    private fulfillDependencyVisibility;
}
