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

export interface StFilterElement {
   id: String | number;
   name: String | number;
   selected?: boolean;
}

export interface StFilterHeader {
   filterConfig?: StFilterElement[];
   showSettingBtn?: boolean;
   title: string;
   buttonText?: string;
   templateRef?: string;
}

export interface StTableHeader {
   id: string;
   label: string;
   sortable?: boolean;
   filters?: StFilterHeader;
   filterable?: boolean;
   templateRef?: string;
}
