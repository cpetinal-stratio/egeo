import { JSONSchema4 } from 'json-schema';
import { StDynamicTableHeader, StDynamicTableUISpecification, StDynamicTableUserInterface } from '../st-dynamic-table.model';
import { StFilterHeader } from '../../st-table/shared/table-header.interface';
export declare class StDynamicTableUtils {
    static getHeaderFieldsFromJsonSchema(jsonSchema: JSONSchema4, uiDefinitions?: StDynamicTableUserInterface): StDynamicTableHeader[];
    static getHeaderFiltersFromJsonSchema(propertyDefinition: JSONSchema4, uiDefinition: StDynamicTableUISpecification): StFilterHeader;
    private static _getTypes;
}
