import { JSONSchema4 } from 'json-schema';
import { StDropDownMenuItem } from '..';
import { FORM_UI_COMPONENT } from './st-form-field/st-form-field.interface';
export interface StFormUIDefinition {
    relatedTo?: string;
    visible?: {
        [key: string]: any;
    };
    component?: FORM_UI_COMPONENT;
    link?: string;
    options?: StDropDownMenuItem[];
}
export interface StFormSchema extends JSONSchema4 {
    ui?: StFormUIDefinition;
    properties?: {
        [key: string]: StFormSchema;
    };
    [key: string]: any;
}
