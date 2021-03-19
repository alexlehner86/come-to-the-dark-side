import { NgModule } from '@angular/core';

import { AccessibilityFactsComponent } from './accessibility-facts/accessibility-facts.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AccessibilityFactsComponent,
        FormExampleComponent,
        HomeComponent,
    ],
    exports: [
        AccessibilityFactsComponent,
        FormExampleComponent,
        HomeComponent,
    ],
    providers: [],
})
export class PagesModule { }
