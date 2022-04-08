import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-accessibility-facts',
    templateUrl: './accessibility-facts.component.html',
    styleUrls: ['./accessibility-facts.component.scss']
})
export class AccessibilityFactsComponent implements OnInit, OnDestroy {

    public isGerman = false;

    private subscriptions: Subscription[] = [];

    constructor(
        private translateService: TranslateService
    ) { }

    public ngOnInit(): void {
        this.isGerman = this.translateService.currentLang === 'de';
        this.subscriptions.push(
            this.translateService.onLangChange.subscribe(({ lang }) => {
                this.isGerman = lang === 'de';
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}

