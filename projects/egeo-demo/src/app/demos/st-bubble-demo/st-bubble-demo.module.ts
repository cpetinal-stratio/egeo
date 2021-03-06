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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StDemoGeneratorModule, StInputModule, StSwitchModule } from '@stratio/egeo';
import { StBubbleModule, StDocsModule } from '@stratio/egeo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StBubbleDemoComponent } from './st-bubble-demo.component';
import { CssPropertyTableModule } from '@app/shared/css-property-table/css-property-table.module';

@NgModule({
   imports: [
      CommonModule,
      StBubbleModule,
      StDemoGeneratorModule.withComponents({ components: [StBubbleDemoComponent] }),
      StDocsModule,
      StSwitchModule,
      FormsModule,
      ReactiveFormsModule,
      StInputModule,
      CssPropertyTableModule
   ],
   declarations: [StBubbleDemoComponent],
   providers: []
})
export class StBubbleDemoModule { }
