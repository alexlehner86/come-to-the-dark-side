import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FACTS_ROUTE, FORM_ROUTE, HOME_ROUTE } from './constants/routes.constants';
import { AccessibilityFactsComponent } from './pages/accessibility-facts/accessibility-facts.component';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    { path: HOME_ROUTE, component: HomeComponent },
    { path: FACTS_ROUTE, component: AccessibilityFactsComponent },
    { path: FORM_ROUTE, component: FormExampleComponent },
    { path: '**', redirectTo: '/' + HOME_ROUTE },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
