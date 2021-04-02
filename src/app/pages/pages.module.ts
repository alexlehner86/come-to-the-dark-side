import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { AccessibilityFactsComponent } from './accessibility-facts/accessibility-facts.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AccessibilityFactsComponent,
        FormExampleComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    exports: [
        AccessibilityFactsComponent,
        FormExampleComponent,
        HomeComponent,
    ],
    providers: [],
})
export class PagesModule { }
