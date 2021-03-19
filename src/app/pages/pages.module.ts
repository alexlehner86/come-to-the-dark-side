import { NgModule } from '@angular/core';

import { AccessibilityFactsComponent } from './accessibility-facts/accessibility-facts.component';
import { FormExampleComponent } from './form-example/form-example.component';

@NgModule({
    declarations: [
        AccessibilityFactsComponent,
        FormExampleComponent,
    ],
    exports: [
        AccessibilityFactsComponent,
        FormExampleComponent
    ],
    providers: [],
})
export class PagesModule { }
