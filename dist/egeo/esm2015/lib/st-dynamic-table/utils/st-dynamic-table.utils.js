/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dynamic-table/utils/st-dynamic-table.utils.ts
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
export class StDynamicTableUtils {
    /**
     * @param {?} jsonSchema
     * @param {?=} uiDefinitions
     * @return {?}
     */
    static getHeaderFieldsFromJsonSchema(jsonSchema, uiDefinitions) {
        /** @type {?} */
        const fields = [];
        if (jsonSchema && jsonSchema.properties) {
            /** @type {?} */
            const properties = Object.keys(jsonSchema.properties);
            if (properties) {
                properties.forEach((/**
                 * @param {?} _propertyKey
                 * @return {?}
                 */
                _propertyKey => {
                    /** @type {?} */
                    const _property = jsonSchema.properties[_propertyKey];
                    if (_property && _property.type !== 'object') {
                        /** @type {?} */
                        const uiDefinition = uiDefinitions && uiDefinitions[_propertyKey];
                        /** @type {?} */
                        const visible = !uiDefinition || uiDefinition.visible !== false;
                        if (visible) {
                            /** @type {?} */
                            const filters = StDynamicTableUtils.getHeaderFiltersFromJsonSchema(_property, uiDefinition);
                            /** @type {?} */
                            const isSortable = uiDefinition && uiDefinitions[_propertyKey].sortable;
                            fields.push({
                                id: _propertyKey,
                                label: _property.title || _propertyKey,
                                reference: _property.$ref,
                                fk: uiDefinition && uiDefinition.fk,
                                group: uiDefinition && uiDefinition.group_field ? uiDefinition.group_field.view : null,
                                filters: filters,
                                filterable: filters && (filters.templateRef !== undefined || (filters.filterConfig && filters.filterConfig.length > 0)),
                                sortable: isSortable,
                                sortedByDefault: uiDefinition && uiDefinition.sort ? uiDefinition.sort.toUpperCase() : null,
                                type: _property.type ? this._getTypes(_propertyKey, _property.type.toString(), jsonSchema, uiDefinition) : null
                            });
                        }
                    }
                }));
            }
        }
        return fields;
    }
    /**
     * @param {?} propertyDefinition
     * @param {?} uiDefinition
     * @return {?}
     */
    static getHeaderFiltersFromJsonSchema(propertyDefinition, uiDefinition) {
        /** @type {?} */
        let filters;
        if (propertyDefinition.enum && propertyDefinition.enum.length) {
            filters = {
                title: propertyDefinition.title,
                filterConfig: []
            };
            propertyDefinition.enum.forEach((/**
             * @param {?} _value
             * @return {?}
             */
            _value => {
                filters.filterConfig.push({
                    id: (/** @type {?} */ (_value)),
                    name: (/** @type {?} */ (_value))
                });
            }));
        }
        else if (uiDefinition && uiDefinition.templateRef) {
            filters = {
                title: propertyDefinition.title,
                templateRef: uiDefinition.templateRef
            };
        }
        return filters;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} type
     * @param {?} jsonSchema
     * @param {?} uiDefinition
     * @return {?}
     */
    static _getTypes(key, type, jsonSchema, uiDefinition) {
        if (uiDefinition && uiDefinition.group_field && uiDefinition.group_field.view) {
            /** @type {?} */
            const fields = uiDefinition.group_field.view.split(' - ');
            return fields.map((/**
             * @param {?} field
             * @return {?}
             */
            field => ({
                field: field,
                type: jsonSchema.properties[field] ? String(jsonSchema.properties[field].type) : ''
            })));
        }
        return [{ field: key, type: type }];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHluYW1pYy10YWJsZS51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZHluYW1pYy10YWJsZS91dGlscy9zdC1keW5hbWljLXRhYmxlLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWVBLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUV0QixNQUFNLENBQUMsNkJBQTZCLENBQUMsVUFBdUIsRUFBRSxhQUEyQzs7Y0FDdkcsTUFBTSxHQUEyQixFQUFFO1FBRXpDLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUU7O2tCQUNoQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3JELElBQUksVUFBVSxFQUFFO2dCQUNiLFVBQVUsQ0FBQyxPQUFPOzs7O2dCQUFDLFlBQVksQ0FBQyxFQUFFOzswQkFDekIsU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNyRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7OEJBQ3JDLFlBQVksR0FBa0MsYUFBYSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUM7OzhCQUMxRixPQUFPLEdBQVksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxLQUFLO3dCQUN4RSxJQUFJLE9BQU8sRUFBRTs7a0NBQ0osT0FBTyxHQUFtQixtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOztrQ0FDckcsVUFBVSxHQUFHLFlBQVksSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUTs0QkFFdkUsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDVCxFQUFFLEVBQUUsWUFBWTtnQ0FDaEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLElBQUksWUFBWTtnQ0FDdEMsU0FBUyxF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O0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgSlNPTlNjaGVtYTQgfSBmcm9tICdqc29uLXNjaGVtYSc7XG5pbXBvcnQgeyBTdER5bmFtaWNUYWJsZUhlYWRlciwgU3REeW5hbWljVGFibGVVSVNwZWNpZmljYXRpb24sIFN0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZSB9IGZyb20gJy4uL3N0LWR5bmFtaWMtdGFibGUubW9kZWwnO1xuaW1wb3J0IHsgU3RGaWx0ZXJIZWFkZXIgfSBmcm9tICcuLi8uLi9zdC10YWJsZS9zaGFyZWQvdGFibGUtaGVhZGVyLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBTdER5bmFtaWNUYWJsZVV0aWxzIHtcblxuICAgcHVibGljIHN0YXRpYyBnZXRIZWFkZXJGaWVsZHNGcm9tSnNvblNjaGVtYShqc29uU2NoZW1hOiBKU09OU2NoZW1hNCwgdWlEZWZpbml0aW9ucz86IFN0RHluYW1pY1RhYmxlVXNlckludGVyZmFjZSk6IFN0RHluYW1pY1RhYmxlSGVhZGVyW10ge1xuICAgICAgY29uc3QgZmllbGRzOiBTdER5bmFtaWNUYWJsZUhlYWRlcltdID0gW107XG5cbiAgICAgIGlmIChqc29uU2NoZW1hICYmIGpzb25TY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGpzb25TY2hlbWEucHJvcGVydGllcyk7XG4gICAgICAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKF9wcm9wZXJ0eUtleSA9PiB7XG4gICAgICAgICAgICAgICBjb25zdCBfcHJvcGVydHkgPSBqc29uU2NoZW1hLnByb3BlcnRpZXNbX3Byb3BlcnR5S2V5XTtcbiAgICAgICAgICAgICAgIGlmIChfcHJvcGVydHkgJiYgX3Byb3BlcnR5LnR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB1aURlZmluaXRpb246IFN0RHluYW1pY1RhYmxlVUlTcGVjaWZpY2F0aW9uID0gdWlEZWZpbml0aW9ucyAmJiB1aURlZmluaXRpb25zW19wcm9wZXJ0eUtleV07XG4gICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlOiBib29sZWFuID0gIXVpRGVmaW5pdGlvbiB8fCB1aURlZmluaXRpb24udmlzaWJsZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyczogU3RGaWx0ZXJIZWFkZXIgPSBTdER5bmFtaWNUYWJsZVV0aWxzLmdldEhlYWRlckZpbHRlcnNGcm9tSnNvblNjaGVtYShfcHJvcGVydHksIHVpRGVmaW5pdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NvcnRhYmxlID0gdWlEZWZpbml0aW9uICYmIHVpRGVmaW5pdGlvbnNbX3Byb3BlcnR5S2V5XS5zb3J0YWJsZTtcblxuICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IF9wcm9wZXJ0eUtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBfcHJvcGVydHkudGl0bGUgfHwgX3Byb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlOiBfcHJvcGVydHkuJHJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZrOiB1aURlZmluaXRpb24gJiYgdWlEZWZpbml0aW9uLmZrLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IHVpRGVmaW5pdGlvbiAmJiB1aURlZmluaXRpb24uZ3JvdXBfZmllbGQgPyB1aURlZmluaXRpb24uZ3JvdXBfZmllbGQudmlldyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmlsdGVycyAmJiAoZmlsdGVycy50ZW1wbGF0ZVJlZiAhPT0gdW5kZWZpbmVkIHx8IChmaWx0ZXJzLmZpbHRlckNvbmZpZyAmJiBmaWx0ZXJzLmZpbHRlckNvbmZpZy5sZW5ndGggPiAwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogaXNTb3J0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlZEJ5RGVmYXVsdDogdWlEZWZpbml0aW9uICYmIHVpRGVmaW5pdGlvbi5zb3J0ID8gdWlEZWZpbml0aW9uLnNvcnQudG9VcHBlckNhc2UoKSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBfcHJvcGVydHkudHlwZSA/IHRoaXMuX2dldFR5cGVzKF9wcm9wZXJ0eUtleSwgX3Byb3BlcnR5LnR5cGUudG9TdHJpbmcoKSwganNvblNjaGVtYSwgdWlEZWZpbml0aW9uKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmllbGRzO1xuICAgfVxuXG4gICBwdWJsaWMgc3RhdGljIGdldEhlYWRlckZpbHRlcnNGcm9tSnNvblNjaGVtYShwcm9wZXJ0eURlZmluaXRpb246IEpTT05TY2hlbWE0LCB1aURlZmluaXRpb246IFN0RHluYW1pY1RhYmxlVUlTcGVjaWZpY2F0aW9uKTogU3RGaWx0ZXJIZWFkZXIge1xuICAgICAgbGV0IGZpbHRlcnM6IFN0RmlsdGVySGVhZGVyO1xuICAgICAgaWYgKHByb3BlcnR5RGVmaW5pdGlvbi5lbnVtICYmIHByb3BlcnR5RGVmaW5pdGlvbi5lbnVtLmxlbmd0aCkge1xuICAgICAgICAgZmlsdGVycyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBwcm9wZXJ0eURlZmluaXRpb24udGl0bGUsXG4gICAgICAgICAgICBmaWx0ZXJDb25maWc6IFtdXG4gICAgICAgICB9O1xuICAgICAgICAgcHJvcGVydHlEZWZpbml0aW9uLmVudW0uZm9yRWFjaChfdmFsdWUgPT4ge1xuICAgICAgICAgICAgZmlsdGVycy5maWx0ZXJDb25maWcucHVzaCh7XG4gICAgICAgICAgICAgICBpZDogPGFueT4gX3ZhbHVlLFxuICAgICAgICAgICAgICAgbmFtZTogPGFueT4gX3ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh1aURlZmluaXRpb24gJiYgdWlEZWZpbml0aW9uLnRlbXBsYXRlUmVmKSB7XG4gICAgICAgICBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgdGl0bGU6IHByb3BlcnR5RGVmaW5pdGlvbi50aXRsZSxcbiAgICAgICAgICAgIHRlbXBsYXRlUmVmOiB1aURlZmluaXRpb24udGVtcGxhdGVSZWZcbiAgICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgfVxuXG4gICBwcml2YXRlIHN0YXRpYyBfZ2V0VHlwZXMoa2V5OiBzdHJpbmcsIHR5cGU6IHN0cmluZywganNvblNjaGVtYTogSlNPTlNjaGVtYTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlEZWZpbml0aW9uOiBTdER5bmFtaWNUYWJsZVVJU3BlY2lmaWNhdGlvbik6IHsgZmllbGQ6IHN0cmluZzsgdHlwZTogc3RyaW5nIH1bXSB7XG4gICAgICBpZiAodWlEZWZpbml0aW9uICYmIHVpRGVmaW5pdGlvbi5ncm91cF9maWVsZCAmJiB1aURlZmluaXRpb24uZ3JvdXBfZmllbGQudmlldykge1xuICAgICAgICAgY29uc3QgZmllbGRzID0gdWlEZWZpbml0aW9uLmdyb3VwX2ZpZWxkLnZpZXcuc3BsaXQoJyAtICcpO1xuICAgICAgICAgcmV0dXJuIGZpZWxkcy5tYXAoZmllbGQgPT4gKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgdHlwZToganNvblNjaGVtYS5wcm9wZXJ0aWVzW2ZpZWxkXSA/IFN0cmluZyhqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRdLnR5cGUpIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFt7IGZpZWxkOiBrZXksIHR5cGU6IHR5cGUgfV07XG4gICB9XG59XG4iXX0=