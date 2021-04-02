import { NgModule } from '@angular/core';

import { CurrentPageDirective } from './directives/current-page.directive';
import { MarkInvalidDirective } from './directives/mark-invalid.directive';

@NgModule({
    declarations: [
        CurrentPageDirective,
        MarkInvalidDirective,
    ],
    exports: [
        CurrentPageDirective,
        MarkInvalidDirective,
    ],
    providers: [],
})
export class SharedModule { }
