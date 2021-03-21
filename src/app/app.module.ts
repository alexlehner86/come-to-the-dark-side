import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentPageDirective } from './directives/current-page.directive';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [
        AppComponent,
        CurrentPageDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        A11yModule,
        PagesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
