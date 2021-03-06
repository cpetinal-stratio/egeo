import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StRadioElementModule } from './st-radio.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StRadioElementModule, { ngZone: 'noop'})
    .catch(err => console.error(err));
