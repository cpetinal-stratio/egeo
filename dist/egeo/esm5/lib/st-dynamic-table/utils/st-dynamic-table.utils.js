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
var StDynamicTableUtils = /** @class */ (function () {
    function StDynamicTableUtils() {
    }
    /**
     * @param {?} jsonSchema
     * @param {?=} uiDefinitions
     * @return {?}
     */
    StDynamicTableUtils.getHeaderFieldsFromJsonSchema = /**
     * @param {?} jsonSchema
     * @param {?=} uiDefinitions
     * @return {?}
     */
    function (jsonSchema, uiDefinitions) {
        var _this = this;
        /** @type {?} */
        var fields = [];
        if (jsonSchema && jsonSchema.properties) {
            /** @type {?} */
            var properties = Object.keys(jsonSchema.properties);
            if (properties) {
                properties.forEach((/**
                 * @param {?} _propertyKey
                 * @return {?}
                 */
                function (_propertyKey) {
                    /** @type {?} */
                    var _property = jsonSchema.properties[_propertyKey];
                    if (_property && _property.type !== 'object') {
                        /** @type {?} */
                        var uiDefinition = uiDefinitions && uiDefinitions[_propertyKey];
                        /** @type {?} */
                        var visible = !uiDefinition || uiDefinition.visible !== false;
                        if (visible) {
                            /** @type {?} */
                            var filters = StDynamicTableUtils.getHeaderFiltersFromJsonSchema(_property, uiDefinition);
                            /** @type {?} */
                            var isSortable = uiDefinition && uiDefinitions[_propertyKey].sortable;
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
                                type: _property.type ? _this._getTypes(_propertyKey, _property.type.toString(), jsonSchema, uiDefinition) : null
                            });
                        }
                    }
                }));
            }
        }
        return fields;
    };
    /**
     * @param {?} propertyDefinition
     * @param {?} uiDefinition
     * @return {?}
     */
    StDynamicTableUtils.getHeaderFiltersFromJsonSchema = /**
     * @param {?} propertyDefinition
     * @param {?} uiDefinition
     * @return {?}
     */
    function (propertyDefinition, uiDefinition) {
        /** @type {?} */
        var filters;
        if (propertyDefinition.enum && propertyDefinition.enum.length) {
            filters = {
                title: propertyDefinition.title,
                filterConfig: []
            };
            propertyDefinition.enum.forEach((/**
             * @param {?} _value
             * @return {?}
             */
            function (_value) {
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
    };
    /**
     * @private
     * @param {?} key
     * @param {?} type
     * @param {?} jsonSchema
     * @param {?} uiDefinition
     * @return {?}
     */
    StDynamicTableUtils._getTypes = /**
     * @private
     * @param {?} key
     * @param {?} type
     * @param {?} jsonSchema
     * @param {?} uiDefinition
     * @return {?}
     */
    function (key, type, jsonSchema, uiDefinition) {
        if (uiDefinition && uiDefinition.group_field && uiDefinition.group_field.view) {
            /** @type {?} */
            var fields = uiDefinition.group_field.view.split(' - ');
            return fields.map((/**
             * @param {?} field
             * @return {?}
             */
            function (field) { return ({
                field: field,
                type: jsonSchema.properties[field] ? String(jsonSchema.properties[field].type) : ''
            }); }));
        }
        return [{ field: key, type: type }];
    };
    return StDynamicTableUtils;
}());
export { StDynamicTableUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHluYW1pYy10YWJsZS51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZHluYW1pYy10YWJsZS91dGlscy9zdC1keW5hbWljLXRhYmxlLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0lBQUE7SUF5RUEsQ0FBQzs7Ozs7O0lBdkVnQixpREFBNkI7Ozs7O0lBQTNDLFVBQTRDLFVBQXVCLEVBQUUsYUFBMkM7UUFBaEgsaUJBaUNDOztZQWhDUSxNQUFNLEdBQTJCLEVBQUU7UUFFekMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLFVBQVUsRUFBRTs7Z0JBQ2hDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDckQsSUFBSSxVQUFVLEVBQUU7Z0JBQ2IsVUFBVSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxZQUFZOzt3QkFDdEIsU0FBUyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO29CQUNyRCxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7NEJBQ3JDLFlBQVksR0FBa0MsYUFBYSxJQUFJLGFBQWEsQ0FBQyxZQUFZLENBQUM7OzRCQUMxRixPQUFPLEdBQVksQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyxLQUFLO3dCQUN4RSxJQUFJLE9BQU8sRUFBRTs7Z0NBQ0osT0FBTyxHQUFtQixtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOztnQ0FDckcsVUFBVSxHQUFHLFlBQVksSUFBSSxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUTs0QkFFdkUsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDVCxFQUFFLEVBQUUsWUFBWTtnQ0FDaEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLElBQUksWUFBWTtnQ0FD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RSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNKLDBCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQgeyBKU09OU2NoZW1hNCB9IGZyb20gJ2pzb24tc2NoZW1hJztcbmltcG9ydCB7IFN0RHluYW1pY1RhYmxlSGVhZGVyLCBTdER5bmFtaWNUYWJsZVVJU3BlY2lmaWNhdGlvbiwgU3REeW5hbWljVGFibGVVc2VySW50ZXJmYWNlIH0gZnJvbSAnLi4vc3QtZHluYW1pYy10YWJsZS5tb2RlbCc7XG5pbXBvcnQgeyBTdEZpbHRlckhlYWRlciB9IGZyb20gJy4uLy4uL3N0LXRhYmxlL3NoYXJlZC90YWJsZS1oZWFkZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNsYXNzIFN0RHluYW1pY1RhYmxlVXRpbHMge1xuXG4gICBwdWJsaWMgc3RhdGljIGdldEhlYWRlckZpZWxkc0Zyb21Kc29uU2NoZW1hKGpzb25TY2hlbWE6IEpTT05TY2hlbWE0LCB1aURlZmluaXRpb25zPzogU3REeW5hbWljVGFibGVVc2VySW50ZXJmYWNlKTogU3REeW5hbWljVGFibGVIZWFkZXJbXSB7XG4gICAgICBjb25zdCBmaWVsZHM6IFN0RHluYW1pY1RhYmxlSGVhZGVyW10gPSBbXTtcblxuICAgICAgaWYgKGpzb25TY2hlbWEgJiYganNvblNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoanNvblNjaGVtYS5wcm9wZXJ0aWVzKTtcbiAgICAgICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goX3Byb3BlcnR5S2V5ID0+IHtcbiAgICAgICAgICAgICAgIGNvbnN0IF9wcm9wZXJ0eSA9IGpzb25TY2hlbWEucHJvcGVydGllc1tfcHJvcGVydHlLZXldO1xuICAgICAgICAgICAgICAgaWYgKF9wcm9wZXJ0eSAmJiBfcHJvcGVydHkudHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVpRGVmaW5pdGlvbjogU3REeW5hbWljVGFibGVVSVNwZWNpZmljYXRpb24gPSB1aURlZmluaXRpb25zICYmIHVpRGVmaW5pdGlvbnNbX3Byb3BlcnR5S2V5XTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGU6IGJvb2xlYW4gPSAhdWlEZWZpbml0aW9uIHx8IHVpRGVmaW5pdGlvbi52aXNpYmxlICE9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzOiBTdEZpbHRlckhlYWRlciA9IFN0RHluYW1pY1RhYmxlVXRpbHMuZ2V0SGVhZGVyRmlsdGVyc0Zyb21Kc29uU2NoZW1hKF9wcm9wZXJ0eSwgdWlEZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU29ydGFibGUgPSB1aURlZmluaXRpb24gJiYgdWlEZWZpbml0aW9uc1tfcHJvcGVydHlLZXldLnNvcnRhYmxlO1xuXG4gICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogX3Byb3BlcnR5S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF9wcm9wZXJ0eS50aXRsZSB8fCBfcHJvcGVydHlLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2U6IF9wcm9wZXJ0eS4kcmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgZms6IHVpRGVmaW5pdGlvbiAmJiB1aURlZmluaXRpb24uZmssXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogdWlEZWZpbml0aW9uICYmIHVpRGVmaW5pdGlvbi5ncm91cF9maWVsZCA/IHVpRGVmaW5pdGlvbi5ncm91cF9maWVsZC52aWV3IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmaWx0ZXJzICYmIChmaWx0ZXJzLnRlbXBsYXRlUmVmICE9PSB1bmRlZmluZWQgfHwgKGZpbHRlcnMuZmlsdGVyQ29uZmlnICYmIGZpbHRlcnMuZmlsdGVyQ29uZmlnLmxlbmd0aCA+IDApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBpc1NvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVkQnlEZWZhdWx0OiB1aURlZmluaXRpb24gJiYgdWlEZWZpbml0aW9uLnNvcnQgPyB1aURlZmluaXRpb24uc29ydC50b1VwcGVyQ2FzZSgpIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF9wcm9wZXJ0eS50eXBlID8gdGhpcy5fZ2V0VHlwZXMoX3Byb3BlcnR5S2V5LCBfcHJvcGVydHkudHlwZS50b1N0cmluZygpLCBqc29uU2NoZW1hLCB1aURlZmluaXRpb24pIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmaWVsZHM7XG4gICB9XG5cbiAgIHB1YmxpYyBzdGF0aWMgZ2V0SGVhZGVyRmlsdGVyc0Zyb21Kc29uU2NoZW1hKHByb3BlcnR5RGVmaW5pdGlvbjogSlNPTlNjaGVtYTQsIHVpRGVmaW5pdGlvbjogU3REeW5hbWljVGFibGVVSVNwZWNpZmljYXRpb24pOiBTdEZpbHRlckhlYWRlciB7XG4gICAgICBsZXQgZmlsdGVyczogU3RGaWx0ZXJIZWFkZXI7XG4gICAgICBpZiAocHJvcGVydHlEZWZpbml0aW9uLmVudW0gJiYgcHJvcGVydHlEZWZpbml0aW9uLmVudW0ubGVuZ3RoKSB7XG4gICAgICAgICBmaWx0ZXJzID0ge1xuICAgICAgICAgICAgdGl0bGU6IHByb3BlcnR5RGVmaW5pdGlvbi50aXRsZSxcbiAgICAgICAgICAgIGZpbHRlckNvbmZpZzogW11cbiAgICAgICAgIH07XG4gICAgICAgICBwcm9wZXJ0eURlZmluaXRpb24uZW51bS5mb3JFYWNoKF92YWx1ZSA9PiB7XG4gICAgICAgICAgICBmaWx0ZXJzLmZpbHRlckNvbmZpZy5wdXNoKHtcbiAgICAgICAgICAgICAgIGlkOiA8YW55PiBfdmFsdWUsXG4gICAgICAgICAgICAgICBuYW1lOiA8YW55PiBfdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHVpRGVmaW5pdGlvbiAmJiB1aURlZmluaXRpb24udGVtcGxhdGVSZWYpIHtcbiAgICAgICAgIGZpbHRlcnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogcHJvcGVydHlEZWZpbml0aW9uLnRpdGxlLFxuICAgICAgICAgICAgdGVtcGxhdGVSZWY6IHVpRGVmaW5pdGlvbi50ZW1wbGF0ZVJlZlxuICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcnM7XG4gICB9XG5cbiAgIHByaXZhdGUgc3RhdGljIF9nZXRUeXBlcyhrZXk6IHN0cmluZywgdHlwZTogc3RyaW5nLCBqc29uU2NoZW1hOiBKU09OU2NoZW1hNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aURlZmluaXRpb246IFN0RHluYW1pY1RhYmxlVUlTcGVjaWZpY2F0aW9uKTogeyBmaWVsZDogc3RyaW5nOyB0eXBlOiBzdHJpbmcgfVtdIHtcbiAgICAgIGlmICh1aURlZmluaXRpb24gJiYgdWlEZWZpbml0aW9uLmdyb3VwX2ZpZWxkICYmIHVpRGVmaW5pdGlvbi5ncm91cF9maWVsZC52aWV3KSB7XG4gICAgICAgICBjb25zdCBmaWVsZHMgPSB1aURlZmluaXRpb24uZ3JvdXBfZmllbGQudmlldy5zcGxpdCgnIC0gJyk7XG4gICAgICAgICByZXR1cm4gZmllbGRzLm1hcChmaWVsZCA9PiAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICB0eXBlOiBqc29uU2NoZW1hLnByb3BlcnRpZXNbZmllbGRdID8gU3RyaW5nKGpzb25TY2hlbWEucHJvcGVydGllc1tmaWVsZF0udHlwZSkgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3sgZmllbGQ6IGtleSwgdHlwZTogdHlwZSB9XTtcbiAgIH1cbn1cbiJdfQ==