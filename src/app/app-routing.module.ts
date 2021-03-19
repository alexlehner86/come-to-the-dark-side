import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessibilityFactsComponent } from './pages/accessibility-facts/accessibility-facts.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';

const routes: Routes = [
    { path: 'facts', component: AccessibilityFactsComponent },
    { path: 'form', component: FormExampleComponent },
    { path: '**', redirectTo: '/facts' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
