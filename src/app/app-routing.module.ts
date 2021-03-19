import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessibilityFactsComponent } from './pages/accessibility-facts/accessibility-facts.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'facts', component: AccessibilityFactsComponent },
    { path: 'form', component: FormExampleComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
